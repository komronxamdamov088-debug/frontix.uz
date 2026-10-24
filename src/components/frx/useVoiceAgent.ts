import { useCallback, useEffect, useRef, useState } from "react";

export type VoiceStatus = "idle" | "connecting" | "live" | "error";

interface Options {
  onTranscript: (role: "user" | "frx", text: string) => void;
}

const WS_URL =
  "wss://generativelanguage.googleapis.com/ws/google.ai.generativelanguage.v1alpha.GenerativeService.BidiGenerateContentConstrained";

// Mikrofon oqimini 16 kHz mono PCM16 bo'laklariga aylantiradi.
const WORKLET_SRC = `
class Capture extends AudioWorkletProcessor {
  constructor() { super(); this.buf = []; this.ratio = sampleRate / 16000; this.pos = 0; }
  process(inputs) {
    const ch = inputs[0][0];
    if (!ch) return true;
    for (let i = 0; i < ch.length; i++) {
      this.pos += 1;
      if (this.pos >= this.ratio) { this.pos -= this.ratio; this.buf.push(ch[i]); }
    }
    if (this.buf.length >= 1600) {
      const out = new Int16Array(this.buf.length);
      for (let i = 0; i < out.length; i++) {
        const v = Math.max(-1, Math.min(1, this.buf[i]));
        out[i] = v < 0 ? v * 0x8000 : v * 0x7fff;
      }
      this.port.postMessage(out.buffer, [out.buffer]);
      this.buf = [];
    }
    return true;
  }
}
registerProcessor("capture", Capture);
`;

function b64FromBuffer(buf: ArrayBuffer): string {
  const bytes = new Uint8Array(buf);
  let bin = "";
  for (let i = 0; i < bytes.length; i += 0x8000) {
    bin += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  }
  return btoa(bin);
}

function pcm16FromB64(b64: string): Float32Array {
  const bin = atob(b64);
  const n = bin.length >> 1;
  const out = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    const lo = bin.charCodeAt(i * 2);
    const hi = bin.charCodeAt(i * 2 + 1);
    const v = (hi << 8) | lo;
    out[i] = (v >= 0x8000 ? v - 0x10000 : v) / 0x8000;
  }
  return out;
}

export function useVoiceAgent({ onTranscript }: Options) {
  const [status, setStatus] = useState<VoiceStatus>("idle");
  const [speaking, setSpeaking] = useState(false);
  const cb = useRef(onTranscript);
  cb.current = onTranscript;

  const wsRef = useRef<WebSocket | null>(null);
  const micCtx = useRef<AudioContext | null>(null);
  const outCtx = useRef<AudioContext | null>(null);
  const stream = useRef<MediaStream | null>(null);
  const sources = useRef<AudioBufferSourceNode[]>([]);
  const nextTime = useRef(0);
  const inText = useRef("");
  const outText = useRef("");

  const cleanup = useCallback(() => {
    wsRef.current?.close();
    wsRef.current = null;
    stream.current?.getTracks().forEach((t) => t.stop());
    stream.current = null;
    void micCtx.current?.close();
    void outCtx.current?.close();
    micCtx.current = null;
    outCtx.current = null;
    sources.current = [];
    nextTime.current = 0;
    setSpeaking(false);
  }, []);

  const flushText = () => {
    if (inText.current.trim()) cb.current("user", inText.current.trim());
    if (outText.current.trim()) cb.current("frx", outText.current.trim());
    inText.current = "";
    outText.current = "";
  };

  const stop = useCallback(() => {
    flushText();
    cleanup();
    setStatus("idle");
  }, [cleanup]);

  const playChunk = (b64: string) => {
    const ctx = outCtx.current;
    if (!ctx) return;
    const data = pcm16FromB64(b64);
    const buf = ctx.createBuffer(1, data.length, 24000);
    buf.copyToChannel(new Float32Array(data), 0);
    const src = ctx.createBufferSource();
    src.buffer = buf;
    src.connect(ctx.destination);
    const startAt = Math.max(ctx.currentTime + 0.02, nextTime.current);
    src.start(startAt);
    nextTime.current = startAt + buf.duration;
    sources.current.push(src);
    setSpeaking(true);
    src.onended = () => {
      sources.current = sources.current.filter((s) => s !== src);
      if (sources.current.length === 0) setSpeaking(false);
    };
  };

  const interrupt = () => {
    sources.current.forEach((s) => {
      try {
        s.stop();
      } catch {
        /* allaqachon to'xtagan */
      }
    });
    sources.current = [];
    nextTime.current = 0;
    setSpeaking(false);
  };

  const start = useCallback(async () => {
    if (status === "connecting" || status === "live") return;
    setStatus("connecting");
    try {
      const mic = await navigator.mediaDevices.getUserMedia({
        audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true },
      });
      stream.current = mic;

      const tokRes = await fetch("/api/voice-token", { method: "POST" });
      if (!tokRes.ok) throw new Error("token");
      const { token, model } = (await tokRes.json()) as { token: string; model: string };

      outCtx.current = new AudioContext({ sampleRate: 24000 });
      const mctx = new AudioContext();
      micCtx.current = mctx;
      const url = URL.createObjectURL(new Blob([WORKLET_SRC], { type: "application/javascript" }));
      await mctx.audioWorklet.addModule(url);
      URL.revokeObjectURL(url);

      const ws = new WebSocket(`${WS_URL}?access_token=${encodeURIComponent(token)}`);
      wsRef.current = ws;

      ws.onopen = () => ws.send(JSON.stringify({ setup: { model } }));

      ws.onmessage = async (e) => {
        const raw = typeof e.data === "string" ? e.data : await (e.data as Blob).text();
        const m = JSON.parse(raw);

        if (m.setupComplete) {
          const node = new AudioWorkletNode(mctx, "capture");
          mctx.createMediaStreamSource(mic).connect(node);
          node.port.onmessage = (ev) => {
            if (ws.readyState !== WebSocket.OPEN) return;
            ws.send(
              JSON.stringify({
                realtimeInput: { audio: { data: b64FromBuffer(ev.data), mimeType: "audio/pcm;rate=16000" } },
              }),
            );
          };
          ws.send(JSON.stringify({ realtimeInput: { text: "Mijoz ulandi. Salomlashing." } }));
          setStatus("live");
        }

        const sc = m.serverContent;
        if (sc) {
          if (sc.interrupted) interrupt();
          for (const p of sc.modelTurn?.parts ?? []) {
            if (p.inlineData?.data) playChunk(p.inlineData.data);
          }
          if (sc.inputTranscription?.text) inText.current += sc.inputTranscription.text;
          if (sc.outputTranscription?.text) outText.current += sc.outputTranscription.text;
          if (sc.turnComplete) flushText();
        }

        if (m.toolCall) {
          const responses = [];
          for (const fc of m.toolCall.functionCalls ?? []) {
            let ok = false;
            if (fc.name === "save_lead") {
              try {
                const r = await fetch("/api/voice-lead", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(fc.args ?? {}),
                });
                ok = r.ok;
              } catch {
                ok = false;
              }
            }
            responses.push({ id: fc.id, name: fc.name, response: { ok } });
          }
          ws.send(JSON.stringify({ toolResponse: { functionResponses: responses } }));
        }
      };

      ws.onerror = () => {
        cleanup();
        setStatus("error");
      };
      ws.onclose = () => {
        if (wsRef.current === ws) {
          flushText();
          cleanup();
          setStatus((s) => (s === "error" ? s : "idle"));
        }
      };
    } catch {
      cleanup();
      setStatus("error");
    }
  }, [status, cleanup]);

  useEffect(() => cleanup, [cleanup]);

  return { status, speaking, start, stop };
}
