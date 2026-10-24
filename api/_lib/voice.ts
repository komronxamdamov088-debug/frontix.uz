import { KNOWLEDGE_BASE, sendLead, type Lead } from "./gemini.js";

export const VOICE_MODEL = "models/gemini-3.8-live";

const VOICE_RULES = `
Siz hozir TELEFON/OVOZLI suhbatdasiz. Mijoz bilan jonli gaplashyapsiz:
- Birinchi gap: "Assalomu alaykum, FRONTIX, men FRX, sun'iy intellekt operatori. Sizga qanday yordam bera olaman?"
- Mijoz qaysi tilda (o'zbek, rus, ingliz) gapirsa, o'sha tilda javob bering.
- Har gap qisqa: bir fikr, bitta savol. Ro'yxat, raqamlangan band va markdown ishlatmang.
- Telefon raqamni mijozdan eshitgach, raqamlarni sekin takrorlab tasdiqlating.
- Ism va aloqa (telefon yoki Telegram) aniq bo'lgach save_lead funksiyasini BIR MARTA chaqiring, so'ng "menejerimiz tez orada bog'lanadi" deng.
- Mijoz gapini bo'lsa, darhol to'xtab, tinglang.
`.trim();

export function buildVoiceInstruction(): string {
  const base = KNOWLEDGE_BASE.split("\nLead qoidasi:")[0];
  return `${base}\n\n${VOICE_RULES}`;
}

export const VOICE_TOOLS = [
  {
    functionDeclarations: [
      {
        name: "save_lead",
        description:
          "Mijozning ismi va aloqasi aniq bo'lganda so'rovni menejerlarga yuboradi. Suhbatda faqat bir marta chaqiring.",
        parameters: {
          type: "OBJECT",
          properties: {
            name: { type: "STRING", description: "Mijoz ismi" },
            contact: { type: "STRING", description: "Telefon raqam yoki Telegram" },
            business: { type: "STRING", description: "Biznes turi" },
            need: { type: "STRING", description: "Nima kerak" },
            timing: { type: "STRING", description: "Qachon kerak" },
            type: { type: "STRING", description: "lead, support, shikoyat yoki hamkorlik" },
            summary: { type: "STRING", description: "Suhbat qisqacha mazmuni" },
          },
          required: ["name", "contact"],
        },
      },
    ],
  },
];

const voiceSetup = () => ({
  model: VOICE_MODEL,
  generationConfig: {
    responseModalities: ["AUDIO"],
    speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: "Aoede" } } },
  },
  systemInstruction: { parts: [{ text: buildVoiceInstruction() }] },
  tools: VOICE_TOOLS,
  inputAudioTranscription: {},
  outputAudioTranscription: {},
});

export interface VoiceTokenResult {
  status: number;
  body: { token: string; model: string } | { error: string };
}

export async function mintVoiceToken(apiKey: string | undefined): Promise<VoiceTokenResult> {
  if (!apiKey) return { status: 500, body: { error: "gemini_not_configured" } };
  const now = Date.now();
  try {
    const res = await fetch("https://generativelanguage.googleapis.com/v1alpha/auth_tokens", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-goog-api-key": apiKey },
      body: JSON.stringify({
        uses: 1,
        expireTime: new Date(now + 15 * 60_000).toISOString(),
        newSessionExpireTime: new Date(now + 60_000).toISOString(),
        bidiGenerateContentSetup: voiceSetup(),
      }),
      signal: AbortSignal.timeout(10000),
    });
    if (!res.ok) return { status: 502, body: { error: "token_failed" } };
    const data = (await res.json()) as { name?: string };
    if (!data.name) return { status: 502, body: { error: "token_failed" } };
    return { status: 200, body: { token: data.name, model: VOICE_MODEL } };
  } catch {
    return { status: 502, body: { error: "token_failed" } };
  }
}

export async function saveVoiceLead(
  lead: Lead,
  token: string | undefined,
  chatIds: string | undefined,
): Promise<{ status: number; body: { ok: true } | { error: string } }> {
  if (!lead?.name || !lead?.contact) return { status: 400, body: { error: "missing_fields" } };
  const cap = (v?: string) => (typeof v === "string" ? v.slice(0, 500) : undefined);
  await sendLead(
    {
      name: cap(lead.name),
      contact: cap(lead.contact),
      business: cap(lead.business),
      need: cap(lead.need),
      timing: cap(lead.timing),
      type: cap(lead.type),
      summary: cap(lead.summary ? `🎙 ${lead.summary}` : "🎙 ovozli suhbat"),
    },
    token,
    chatIds,
  );
  return { status: 200, body: { ok: true } };
}
