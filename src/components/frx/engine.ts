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
  reply: (t: (typeof translations)[Lang]) => FrxReply;
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
];

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
      return intent.reply(t);
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
