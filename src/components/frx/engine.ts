import { services } from "@/data/services";
import { processSteps } from "@/data/process";
import { SITE } from "@/data/site";
import { translations, type Lang } from "@/i18n/translations";

export interface FrxReply {
  text: string;
  quickReplies?: string[];
  cta?: { label: string; to: string };
}

function normalize(input: string): string {
  return input
    .toLowerCase()
    .replace(/[o]['’‘`]/g, "o")
    .replace(/[g]['’‘`]/g, "g")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function includesAny(text: string, keywords: string[]): boolean {
  return keywords.some((kw) => text.includes(kw));
}

interface Intent {
  id: string;
  keywords: string[];
  reply: (t: (typeof translations)[Lang], lang: Lang) => FrxReply;
}

const intents: Intent[] = [
  {
    id: "greeting",
    keywords: ["salom", "assalomu", "xayrli", "hello", "hi", "hey", "privet", "привет", "здравствуйте", "добрый"],
    reply: (t) => ({ text: t.frx.greeting, quickReplies: t.frx.starterSuggestions }),
  },
  {
    id: "thanks",
    keywords: ["rahmat", "tashakkur", "thanks", "thank you", "спасибо", "благодар"],
    reply: (t) => ({ text: t.frx.thanks, quickReplies: [t.nav.services, t.nav.contact] }),
  },
  {
    id: "contact",
    keywords: [
      "aloqa", "boglan", "telefon", "email", "pochta", "manzil", "qayerda",
      "контакт", "связ", "телефон", "почта", "адрес",
      "contact", "phone", "address",
    ],
    reply: (t) => ({
      text: `${t.frx.contactIntro}:\n\n📞 ${SITE.phone}\n✉️ ${SITE.email}\n📍 ${SITE.city}\n\nTelegram: ${SITE.telegramHandle}`,
      cta: { label: t.frx.contactCta, to: "/contact" },
    }),
  },
  {
    id: "process",
    keywords: [
      "jarayon", "muddat", "bosqich", "qancha vaqt",
      "процесс", "срок", "этап",
      "process", "timeline", "stage",
    ],
    reply: (t) => ({
      text: `${t.frx.processIntro}:\n\n${t.process.steps
        .map((s, i) => `${processSteps[i]}. ${s.title} — ${s.description}`)
        .join("\n")}`,
      quickReplies: [t.frx.starterSuggestions[2], t.nav.contact],
    }),
  },
  {
    id: "about",
    keywords: [
      "kimsiz", "kompaniya haqida", "tashkil", "qadriyat", "biz haqimizda",
      "кто вы", "о компании", "ценност",
      "who are you", "about the company", "values",
    ],
    reply: (t) => ({
      text: `${t.frx.aboutIntro}: ${t.values.map((v) => v.title).join(", ")}.`,
      cta: { label: t.nav.about, to: "/about" },
    }),
  },
  {
    id: "team",
    keywords: [
      "jamoa", "xodim", "founder", "asoschi", "dizayner", "administrator",
      "команда", "сотрудник", "основател", "дизайнер",
      "team", "staff", "employee", "designer",
    ],
    reply: (t) => ({
      text: t.frx.teamIntro,
      cta: { label: t.frx.teamCta, to: "/team" },
    }),
  },
  {
    id: "service-website",
    keywords: ["sayt", "veb", "сайт", "веб", "website", "web"],
    reply: (t) => serviceReply(t, "website-development"),
  },
  {
    id: "service-qr",
    keywords: ["qr", "menyu", "restoran", "kafe", "меню", "ресторан", "кафе", "menu", "restaurant", "cafe"],
    reply: (t) => serviceReply(t, "qr-menu"),
  },
  {
    id: "service-bot",
    keywords: ["bot", "telegram", "бот", "телеграм"],
    reply: (t) => serviceReply(t, "telegram-bot"),
  },
  {
    id: "service-ordering",
    keywords: ["buyurtma tizimi", "yetkazib berish", "заказ", "доставка", "ordering", "delivery"],
    reply: (t) => serviceReply(t, "online-ordering"),
  },
  {
    id: "service-automation",
    keywords: ["avtomatlashtirish", "автоматизац", "automation", "workflow", "crm"],
    reply: (t) => serviceReply(t, "business-automation"),
  },
  {
    id: "service-custom",
    keywords: ["individual", "maxsus dastur", "индивидуальн", "специальн", "custom software", "bespoke"],
    reply: (t) => serviceReply(t, "custom-software"),
  },
  {
    id: "services-list",
    keywords: ["xizmat", "nima qilasiz", "услуг", "service", "what do you do"],
    reply: (t) => ({
      text: `${t.frx.servicesListIntro}:\n\n${services
        .map((s) => `• ${t.services[s.slug].title} — ${t.services[s.slug].shortDescription}`)
        .join("\n")}`,
      quickReplies: [t.frx.starterSuggestions[2], t.nav.team, t.nav.contact],
      cta: { label: t.frx.servicesCta, to: "/services" },
    }),
  },
  {
    id: "pricing",
    keywords: ["narx", "pul", "byudjet", "arzon", "цена", "стоимост", "бюджет", "price", "cost", "budget"],
    reply: (t) => ({
      text: t.frx.pricingIntro,
      cta: { label: t.frx.pricingCta, to: "/contact" },
    }),
  },
  {
    id: "support",
    keywords: [
      "qollab", "kafolat", "yordam berasizlar", "texnik yordam",
      "поддержк", "гарант", "сопровожден",
      "support", "warranty", "guarantee", "maintenance", "after launch",
    ],
    reply: (t) => ({
      text: t.contact.faq[2]?.answer ?? t.frx.pricingIntro,
      cta: { label: t.frx.contactCta, to: "/contact" },
    }),
  },
  {
    id: "payment",
    keywords: [
      "tolov usul", "qanday tolaymiz", "naqd", "karta orqali",
      "способ оплат", "оплата картой", "предоплат",
      "payment method", "how to pay", "installment", "pay by card",
    ],
    reply: (t) => ({
      text: t.contact.faq[3]?.answer ?? t.frx.pricingIntro,
      cta: { label: t.frx.contactCta, to: "/contact" },
    }),
  },
  {
    id: "tech-stack",
    keywords: [
      "texnologiya", "qanday tilda", "qaysi tilda yozasiz", "stack",
      "технологи", "стек", "на чём пишете",
      "tech stack", "technology", "framework", "programming language",
    ],
    reply: (t) => ({
      text: `${t.about.techStackTitle}: ${t.about.techStack.join(", ")}.`,
      cta: { label: t.nav.about, to: "/about" },
    }),
  },
  {
    id: "who-are-you",
    keywords: [
      "sen kimsan", "kimsan oz", "ozing haqingda", "sun'iy intellekt", "robot", "ai misan",
      "ты кто", "расскажи о себе", "искусственный интеллект", "робот", "ты бот",
      "who are you", "are you ai", "are you a bot", "artificial intelligence", "tell me about yourself",
    ],
    reply: (_t, lang) => ({ text: selfIntro[lang] }),
  },
  {
    id: "start-project",
    keywords: [
      "qanday boshlayman", "ish boshlaymiz", "bepul konsultatsiya", "loyihani boshlash",
      "начать проект", "с чего начать", "бесплатная консультац",
      "get started", "how do i start", "start a project", "free consultation", "place an order",
    ],
    reply: (t, lang) => ({
      text: startProject[lang],
      cta: { label: t.frx.contactCta, to: "/contact" },
    }),
  },
];

const selfIntro: Record<Lang, string> = {
  uz: "Men FRX — FRONTIX saytidagi lokal yordamchiman. Katta til modeli emasman, shuning uchun API kaliti kerak emas — lekin xizmatlar, narx, jarayon, jamoa va aloqa haqidagi savollaringizga tez javob bera olaman.",
  ru: "Я FRX — локальный помощник на сайте FRONTIX. Я не большая языковая модель и не требую API-ключа, но быстро отвечу на вопросы об услугах, ценах, процессе, команде и контактах.",
  en: "I'm FRX, the local assistant built into the FRONTIX site. I'm not a large language model and need no API key, but I can quickly answer questions about services, pricing, process, the team and contact info.",
};

const startProject: Record<Lang, string> = {
  uz: "Juda sodda: aloqa formasini to'ldiring yoki Telegram orqali yozing — 24 soat ichida bepul konsultatsiya uchun bog'lanamiz va aniq taklif tayyorlaymiz.",
  ru: "Всё просто: заполните форму обратной связи или напишите в Telegram — свяжемся в течение 24 часов для бесплатной консультации и подготовим точное предложение.",
  en: "It's simple: fill out the contact form or message us on Telegram — we'll reach out within 24 hours for a free consultation and put together an exact quote.",
};

function serviceReply(t: (typeof translations)[Lang], slug: keyof (typeof translations)["uz"]["services"]): FrxReply {
  const text = t.services[slug];
  return {
    text: `${text.title}: ${text.description}\n\n${text.features.join(" · ")}\n\n${t.frx.priceNote}`,
    cta: { label: t.frx.orderCta, to: "/contact" },
  };
}

export function getFrxReply(rawInput: string, lang: Lang): FrxReply {
  const t = translations[lang];
  const input = normalize(rawInput);
  if (!input) return fallback(t);

  for (const intent of intents) {
    if (includesAny(input, intent.keywords)) {
      return intent.reply(t, lang);
    }
  }

  return fallback(t);
}

function fallback(t: (typeof translations)[Lang]): FrxReply {
  return {
    text: t.frx.fallback,
    quickReplies: t.frx.starterSuggestions,
    cta: { label: t.nav.contact, to: "/contact" },
  };
}
