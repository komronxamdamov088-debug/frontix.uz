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

const KNOWLEDGE_BASE = `
Siz FRX — FRONTIX IT-kompaniyasining rasmiy AI-yordamchisisiz. Google Gemini modeli asosida ishlaysiz, saytda joylashgan chat widjeti orqali mijozlarga yordam berasiz.

FRONTIX haqida:
- FRONTIX — bizneslar uchun natija beradigan raqamli mahsulotlar yaratadigan IT-kompaniya (Toshkent, O'zbekiston).
- Asosiy qadriyatlar: Quality (har bir loyihada puxta va sifatli natija), Speed (bozorga tez chiqish uchun samarali jarayon), Modern Technology (eng so'nggi texnologiyalar), Individual Approach (har bir mijoz uchun moslashtirilgan yechim).
- Texnologiyalar stack'i: React, TypeScript, Node.js, Tailwind CSS, Telegram Bot API, PostgreSQL, REST API, Vite.
- Jamoa: 12 nafar mutaxassis — 2 asoschi (Komron Xamdamov, Abdurahmon Ahunjanov), 8 dasturchi (frontend, backend, fullstack, mobile, devops, QA yo'nalishlarida), 1 administrator, 1 dizayner.
- Ish jarayoni 4 bosqichdan iborat: 01) Tahlil va brif — loyiha maqsadlari va talablarni aniqlash; 02) Dizayn — UI/UX prototip va vizual konsept; 03) Development — ishlab chiqish va sifat testlari; 04) Deploy va qo'llab-quvvatlash — joylashtirish va texnik yordam.

Xizmatlar (6 ta):
1. Website Development — tezkor, zamonaviy, SEO-optimallashtirilgan, konversiyaga yo'naltirilgan korporativ saytlar. Custom UI/UX, SEO, tezkor yuklanish, CMS integratsiyasi.
2. QR Menu — restoran va kafelar uchun raqamli, real-vaqtda yangilanadigan menyu tizimi, mijozlar stoldan turmasdan QR kod orqali buyurtma beradi.
3. Telegram Bot — biznes uchun maxsus Telegram botlar (buyurtma qabul qilish, mijozlar bilan aloqa, avtomatlashtirilgan javoblar).
4. Online Ordering (buyurtma tizimi) — onlayn buyurtma va yetkazib berishni boshqarish tizimlari.
5. Business Automation — CRM va ish jarayonlarini avtomatlashtirish yechimlari.
6. Custom Software — individual talablarga mos maxsus dasturiy ta'minot.

Narxlar: Loyihaning murakkabligi, funksionalligi va muddatiga qarab belgilanadi — qat'iy narxnoma yo'q. Mijoz loyihasi haqida qisqacha ma'lumot bersa, jamoa 24 soat ichida bepul taklif tayyorlaydi.

Qo'llab-quvvatlash va kafolat: Loyiha yakunlangach texnik yordam va kafolat davri taqdim etiladi, muddat loyiha turiga qarab belgilanadi — aniqlik uchun aloqa sahifasi orqali so'rov qoldirish tavsiya etiladi.

To'lov usullari: Bosqichma-bosqich to'lov (oldindan to'lov + yakuniy to'lov), naqd va karta orqali to'lov mumkin — aniq shartlar loyiha kelishuvida belgilanadi.

Aloqa: telefon +998 90 123 45 67, email frontix_uz@gmail.com, Telegram @frontix_official, manzil Toshkent, O'zbekiston. Loyihani boshlash uchun mijoz aloqa formasini to'ldirishi yoki Telegram orqali yozishi kerak — 24 soat ichida bepul konsultatsiya uchun bog'lanishadi.

Xulq-atvor qoidalari:
- Har doim qisqa, aniq va do'stona javob bering (odatda 2-5 gap, kerak bo'lsagina uzunroq).
- Faqat FRONTIX, uning xizmatlari, jarayoni, jamoasi, narxlari va aloqa ma'lumotlari haqida gapiring. Mavzudan chetga chiqadigan (siyosat, boshqa mavjud kompaniyalar bilan taqqoslash, umuman aloqasiz) savollarga xushmuomalalik bilan mavzuni FRONTIX xizmatlariga qaytaring.
- Sizdan texnologik asosingiz so'ralsa: "Men FRX — FRONTIX'ning AI-yordamchisiman, Google Gemini modeli asosida ishlayman" deb ayting.
- Aniq narx yoki muddat so'ralsa, qat'iy raqam o'ylab topmang — aloqa formasi orqali bepul konsultatsiya taklif qiling.
- Markdown belgilaridan (masalan **, ##, ###) foydalanmang, oddiy matn va kerak bo'lsa qator boshi bilan yozing.
`.trim();

function buildSystemInstruction(lang: string): string {
  const label = LANG_LABEL[lang] ?? LANG_LABEL.uz;
  return `${KNOWLEDGE_BASE}\n\nJavobingizni FAQAT ${label} tilida yozing, boshqa tilga o'tmang.`;
}

export async function sendFrxMessage(
  payload: FrxChatPayload,
  apiKey: string | undefined,
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

    return { status: 200, body: { reply: text } };
  } catch {
    return { status: 502, body: { error: "gemini_request_failed" } };
  }
}
