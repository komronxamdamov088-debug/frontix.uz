export interface FrxHistoryItem {
  role: "user" | "model";
  text: string;
}

export interface FrxChatPayload {
  message?: string;
  lang?: string;
  history?: FrxHistoryItem[];
}

export interface FrxResult {
  status: number;
  body: { reply: string } | { error: string };
}

const LANG_LABEL: Record<string, string> = {
  uz: "o'zbek",
  ru: "русском",
  en: "English",
};

export const KNOWLEDGE_BASE = `
Siz FRX — FRONTIX IT-kompaniyasining rasmiy AI-yordamchisisiz. Google Gemini modeli asosida ishlaysiz, saytda joylashgan chat widjeti orqali mijozlarga yordam berasiz.

FRONTIX haqida:
- FRONTIX — bizneslar uchun natija beradigan raqamli mahsulotlar yaratadigan IT-kompaniya (Toshkent, O'zbekiston).
- Asosiy qadriyatlar: Quality (har bir loyihada puxta va sifatli natija), Speed (bozorga tez chiqish uchun samarali jarayon), Modern Technology (eng so'nggi texnologiyalar), Individual Approach (har bir mijoz uchun moslashtirilgan yechim).
- Texnologiyalar stack'i: React, TypeScript, Node.js, Tailwind CSS, Telegram Bot API, PostgreSQL, REST API, Vite.
- Jamoa: 15 nafar mutaxassis — 3 asoschi (Komron Xamdamov, Abdurahmon Ahunjanov, Ismail Ulug'bekov — Komron Xamdamov ayni paytda fullstack dasturchi sifatida ham ishlaydi), 9 dasturchi (frontend, backend, fullstack, mobile, devops, QA yo'nalishlarida), 1 administrator, 1 SMM-mutaxassis, 1 dizayner.
- Ish jarayoni 4 bosqichdan iborat: 01) Tahlil va brif — loyiha maqsadlari va talablarni aniqlash; 02) Dizayn — UI/UX prototip va vizual konsept; 03) Development — ishlab chiqish va sifat testlari; 04) Deploy va qo'llab-quvvatlash — joylashtirish va texnik yordam.

Xizmatlar (6 ta):
1. Website Development — tezkor, zamonaviy, SEO-optimallashtirilgan, konversiyaga yo'naltirilgan korporativ saytlar. Custom UI/UX, SEO, tezkor yuklanish, CMS integratsiyasi.
2. QR Menu — restoran va kafelar uchun raqamli, real-vaqtda yangilanadigan menyu tizimi, mijozlar stoldan turmasdan QR kod orqali buyurtma beradi.
3. Telegram Bot — biznes uchun maxsus Telegram botlar (buyurtma qabul qilish, mijozlar bilan aloqa, avtomatlashtirilgan javoblar).
4. Online Ordering (buyurtma tizimi) — onlayn buyurtma va yetkazib berishni boshqarish tizimlari.
5. Business Automation — CRM va ish jarayonlarini avtomatlashtirish yechimlari.
6. Custom Software — individual talablarga mos maxsus dasturiy ta'minot.

Narxlar: Qat'iy narxnoma yo'q, narx loyihaga qarab individual baholanadi. Birinchi konsultatsiya bepul. Hech qachon aniq narx, chegirma, kafolat muddati yoki deadline aytmang.

Muddat: odatda 1-6 hafta (QR-menyu 1-2 hafta), aniq muddatni menejer aytadi.

To'lov: bosqichma-bosqich, foiz nisbati menejer bilan kelishiladi. Loyihadan keyin texnik qo'llab-quvvatlash bor, shartlarini menejer aytadi.

Mahsulotlar: FRX CRM (do'kon va mehmonxona uchun, FRX Do'kon va FRX Hotel), QarzDaftar (qarz daftari ilovasi). Demo va tayyorlik holatini menejer aytadi.

Aloqa: telefon +998 90 816 98 33, email frontix_uz@gmail.com, Telegram @frontix_official, Instagram @frontix_uz, sayt frontix.uz, manzil Toshkent.

Ish uslubi (operator):
- Siz mijoz bilan chatda gaplashadigan operatorsiz: xushmuomala, qisqa (2-4 gap), bir xabarda bitta savol.
- Mijoz niyatini aniqlang: yangi loyiha, mahsulot, texnik muammo, shikoyat, hamkorlik.
- Yangi loyiha bo'lsa, savollarni ketma-ket bering (hammasini birdan emas): ism, biznes turi, nima kerak, qachon kerak, qulay aloqa (telefon yoki Telegram).
- Ism va aloqa (telefon yoki Telegram) olingach, ularni takrorlab tasdiqlating va "menejerimiz tez orada bog'lanadi" deng. Aniq vaqt va'da qilmang.
- Aniq bilmagan narsangizni o'ylab topmang: "Buni menejerimiz aniq aytadi" deng.
- Natija va'da qilmang, mijozlar keyslari yoki raqamlarni keltirmang.
- Parol, SMS-kod, karta raqami yoki CVV so'ramang.
- Shartnoma, yuridik shartlar, kod/domen egaligi haqida: menejerga yo'naltiring.
- Shikoyat, to'lov nizosi, asabiy mijoz yoki "odam bilan gaplashay" desa: kechirim so'rang, ism va telefon/Telegram, muammo mohiyatini oling va menejerga uzating.
- Faqat FRONTIX mavzusida gaplashing, aloqasiz savollarda xushmuomalalik bilan mavzuga qaytaring.
- Texnologik asos so'ralsa: "Men FRX, FRONTIX'ning AI-yordamchisiman, Google Gemini asosida ishlayman" deng. O'zingizni inson deb ko'rsatmang.
- Markdown belgilaridan (**, ##) foydalanmang, oddiy matn yozing.

Lead qoidasi: mijozning ismi va aloqasi (telefon yoki Telegram) aniq bo'lganda, javobingizning eng oxirida BIR MARTA, alohida qatorda shu formatda yozing (mijoz buni ko'rmaydi):
[LEAD]{"name":"","contact":"","business":"","need":"","timing":"","type":"lead|support|shikoyat|hamkorlik","summary":""}[/LEAD]
Bu blokni faqat shu suhbatda birinchi marta ma'lumot to'liq bo'lganda yozing, keyingi javoblarda takrorlamang. Noma'lum maydonni bo'sh qoldiring.
`.trim();


const LEAD_RE = /\[LEAD\]([\s\S]*?)\[\/LEAD\]/;
const sentLeads = new Set<string>();

export interface Lead {
  name?: string;
  contact?: string;
  business?: string;
  need?: string;
  timing?: string;
  type?: string;
  summary?: string;
}

function extractLead(text: string): { reply: string; lead: Lead | null } {
  const m = text.match(LEAD_RE);
  const reply = text.replace(/\[LEAD\][\s\S]*?(\[\/LEAD\]|$)/, "").trim();
  if (!m) return { reply, lead: null };
  try {
    return { reply, lead: JSON.parse(m[1]) as Lead };
  } catch {
    return { reply, lead: null };
  }
}

export async function sendLead(lead: Lead, token?: string, chatIdRaw?: string): Promise<void> {
  const chatIds = (chatIdRaw ?? "").split(",").map((c) => c.trim()).filter(Boolean);
  const contact = (lead.contact ?? "").trim();
  if (!token || chatIds.length === 0 || !lead.name || !contact) return;
  if (sentLeads.has(contact)) return;
  sentLeads.add(contact);

  const text = [
    "🤖 FRX chat: yangi lead",
    `👤 Ism: ${lead.name}`,
    `📞 Aloqa: ${contact}`,
    lead.business ? `🏢 Biznes: ${lead.business}` : null,
    lead.need ? `🛠 Kerak: ${lead.need}` : null,
    lead.timing ? `⏱ Muddat: ${lead.timing}` : null,
    lead.type ? `🏷 Turi: ${lead.type}` : null,
    lead.summary ? `📝 ${lead.summary}` : null,
  ].filter(Boolean).join("\n").slice(0, 3500);

  await Promise.all(
    chatIds.map((chat_id) =>
      fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id, text }),
      }).catch(() => null),
    ),
  );
}

function buildSystemInstruction(lang: string): string {
  const label = LANG_LABEL[lang] ?? LANG_LABEL.uz;
  return `${KNOWLEDGE_BASE}\n\nJavobingizni FAQAT ${label} tilida yozing, boshqa tilga o'tmang.`;
}

export async function sendFrxMessage(
  payload: FrxChatPayload,
  apiKey: string | undefined,
  telegramToken?: string,
  telegramChatIds?: string,
): Promise<FrxResult> {
  if (!apiKey) {
    return { status: 500, body: { error: "gemini_not_configured" } };
  }

  const message = (payload.message ?? "").trim();
  if (!message) {
    return { status: 400, body: { error: "empty_message" } };
  }

  const lang = typeof payload.lang === "string" ? payload.lang : "uz";
  const history = Array.isArray(payload.history) ? payload.history.slice(-12) : [];

  const contents = [
    ...history
      .filter((h) => h && typeof h.text === "string" && h.text.trim())
      .map((h) => ({
        role: h.role === "model" ? "model" : "user",
        parts: [{ text: h.text }],
      })),
    { role: "user", parts: [{ text: message }] },
  ];

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: { role: "system", parts: [{ text: buildSystemInstruction(lang) }] },
          contents,
          generationConfig: {
            temperature: 0.6,
            maxOutputTokens: 1024,
            thinkingConfig: { thinkingLevel: "low" },
          },
        }),
        signal: AbortSignal.timeout(15000),
      },
    );

    if (!res.ok) {
      return { status: 502, body: { error: "gemini_request_failed" } };
    }

    const data = (await res.json()) as {
      candidates?: { content?: { parts?: { text?: string }[] } }[];
    };
    const text = data.candidates?.[0]?.content?.parts?.map((p) => p.text ?? "").join("").trim();

    if (!text) {
      return { status: 502, body: { error: "empty_reply" } };
    }

    const { reply, lead } = extractLead(text);
    if (lead) await sendLead(lead, telegramToken, telegramChatIds);
    if (!reply) {
      return { status: 502, body: { error: "empty_reply" } };
    }

    return { status: 200, body: { reply } };
  } catch {
    return { status: 502, body: { error: "gemini_request_failed" } };
  }
}
