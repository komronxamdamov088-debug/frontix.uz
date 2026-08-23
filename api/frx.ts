import { sendFrxMessage, type FrxChatPayload } from "./_lib/gemini.js";

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

  const body = (typeof req.body === "string" ? JSON.parse(req.body) : req.body) as FrxChatPayload;
  const result = await sendFrxMessage(body, process.env.GEMINI_API_KEY);
  res.status(result.status).json(result.body);
}
