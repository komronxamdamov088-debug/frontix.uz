import { mintVoiceToken } from "./_lib/voice.js";

interface VercelRequest {
  method?: string;
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
  const result = await mintVoiceToken(process.env.GEMINI_API_KEY);
  res.status(result.status).json(result.body);
}
