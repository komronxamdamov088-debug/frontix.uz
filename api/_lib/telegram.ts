export interface ContactPayload {
  name?: string;
  phone?: string;
  telegram?: string;
  service?: string;
  message?: string;
}

export interface ContactResult {
  status: number;
  body: { ok: true } | { error: string };
}

const MAX_FIELD_LENGTH = 2000;

function clean(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, MAX_FIELD_LENGTH);
}

export async function sendContact(
  payload: ContactPayload,
  token: string | undefined,
  chatIdRaw: string | undefined,
): Promise<ContactResult> {
  const chatIds = (chatIdRaw ?? "")
    .split(",")
    .map((id) => id.trim())
    .filter(Boolean);

  if (!token || chatIds.length === 0) {
    return { status: 500, body: { error: "Telegram integration is not configured" } };
  }

  const name = clean(payload?.name);
  const phone = clean(payload?.phone);
  const telegram = clean(payload?.telegram);
  const service = clean(payload?.service);
  const message = clean(payload?.message);

  if (!name || !phone || !service || !message) {
    return { status: 400, body: { error: "Missing required fields" } };
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
    const results = await Promise.all(
      chatIds.map((chatId) =>
        fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: chatId, text }),
        }).then((r) => r.ok),
      ),
    );

    if (!results.some(Boolean)) {
      return { status: 502, body: { error: "Telegram API error" } };
    }

    return { status: 200, body: { ok: true } };
  } catch {
    return { status: 500, body: { error: "Failed to send message" } };
  }
}
