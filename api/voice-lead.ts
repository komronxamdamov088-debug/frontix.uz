import { saveVoiceLead } from "./_lib/voice.js";
import type { Lead } from "./_lib/gemini.js";

interface VercelRequest {
  method?: string;
  body?: unknown;
}

interface VercelResponse {
  status(code: number): VercelResponse;
  json(body: unknown): void;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }
  const body = (typeof req.body === "string" ? JSON.parse(req.body) : req.body) as Lead;
  const result = await saveVoiceLead(body, process.env.TELEGRAM_BOT_TOKEN, process.env.TELEGRAM_CHAT_ID);
  res.status(result.status).json(result.body);
}
