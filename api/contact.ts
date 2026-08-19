interface VercelRequest {
  method?: string;
  body?: unknown;
}

interface VercelResponse {
  status(code: number): VercelResponse;
  json(body: unknown): void;
}

interface ContactPayload {
  name?: string;
  phone?: string;
  telegram?: string;
  service?: string;
  message?: string;
}

const MAX_FIELD_LENGTH = 2000;

function clean(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, MAX_FIELD_LENGTH);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    res.status(500).json({ error: "Telegram integration is not configured" });
    return;
  }

  const body = (typeof req.body === "string" ? JSON.parse(req.body) : req.body) as ContactPayload;

  const name = clean(body?.name);
  const phone = clean(body?.phone);
  const telegram = clean(body?.telegram);
  const service = clean(body?.service);
  const message = clean(body?.message);

  if (!name || !phone || !service || !message) {
    res.status(400).json({ error: "Missing required fields" });
    return;
  }

  const text = [
    "🆕 Yangi so'rov — FRONTIX",
    `👤 Ism: ${name}`,
    `📞 Telefon: ${phone}`,
    telegram ? `✈️ Telegram: ${telegram}` : null,
    `🛠 Xizmat: ${service}`,
    `📝 Tavsif: ${message}`,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const tgRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
    });

    if (!tgRes.ok) {
      res.status(502).json({ error: "Telegram API error" });
      return;
    }

    res.status(200).json({ ok: true });
  } catch {
    res.status(500).json({ error: "Failed to send message" });
  }
}
