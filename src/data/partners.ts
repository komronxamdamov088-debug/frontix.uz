import partner1 from "@/assets/partners/partner-1.png";
import partner2 from "@/assets/partners/partner-2.png";
import partner3 from "@/assets/partners/partner-3.png";
import partner4 from "@/assets/partners/partner-4.png";
import partner5 from "@/assets/partners/partner-5.png";
import type { Lang } from "@/i18n/translations";

export interface Partner {
  id: string;
  name: string;
  logo: string;
  website?: string;
  description: Record<Lang, string>;
}

export const partners: Partner[] = [
  {
    id: "partner-1",
    name: "Tezcode",
    logo: partner1,
    website: "https://www.tezcode.dev/ru",
    description: {
      uz: "Biznes jarayonlarini avtomatlashtiradigan, AI-chatbotlar, CRM va POS yechimlarini yaratadigan AI-avtomatizatsiya kompaniyasi.",
      ru: "Компания по ИИ-автоматизации бизнеса: ИИ-чат-боты, CRM и POS-решения для автоматизации бизнес-процессов.",
      en: "An AI automation company building AI chatbots, CRM and POS solutions to automate business processes.",
    },
  },
  {
    id: "partner-2",
    name: "Coremed",
    logo: partner2,
    website: "https://coremed.uz/uz",
    description: {
      uz: "O'zbekiston uchun raqamli sog'liqni saqlash kompaniyasi — ClinicaGo (klinikalar uchun CRM), HamshiraGo (uyga hamshira xizmati) va Salomat AI mahsulotlarini yaratadi.",
      ru: "Компания цифрового здравоохранения в Узбекистане — создаёт ClinicaGo (CRM для клиник), HamshiraGo (услуга медсестры на дом) и Salomat AI.",
      en: "A digital healthcare company in Uzbekistan — building ClinicaGo (a CRM for clinics), HamshiraGo (an on-demand home nursing service) and Salomat AI.",
    },
  },
  {
    id: "partner-4",
    name: "AI Solution",
    logo: partner4,
    website: "https://aisolution.uz/",
    description: {
      uz: "O'zbekiston va Markaziy Osiyo bizneslari uchun chatbotlar, ovozli AI-agentlar va CRM/ERP integratsiyalari yaratadigan sun'iy intellekt kompaniyasi.",
      ru: "Компания в сфере ИИ, создающая чат-ботов, голосовых ИИ-агентов и интеграции CRM/ERP для бизнеса Узбекистана и Центральной Азии.",
      en: "An AI company building chatbots, voice AI agents and CRM/ERP integrations for businesses in Uzbekistan and Central Asia.",
    },
  },
  {
    id: "partner-5",
    name: "Mars IT School",
    logo: partner5,
    website: "https://landing.marsit.uz/",
    description: {
      uz: "Toshkentdagi 9-17 yosh o'quvchilar uchun dasturlash, dizayn va sun'iy intellekt bo'yicha ta'lim beradigan IT-maktab.",
      ru: "IT-школа в Ташкенте, обучающая программированию, дизайну и искусственному интеллекту детей в возрасте 9-17 лет.",
      en: "An IT school in Tashkent teaching programming, design and AI to students aged 9-17.",
    },
  },
  {
    id: "partner-3",
    name: "QarzDaftar",
    logo: partner3,
    description: {
      uz: "O'zbekiston bozori uchun shaxsiy qarzlarni boshqarish platformasi — qarz berish/olishni, qaytarish muddatini va qisman to'lovlarni kuzatib boradi.",
      ru: "Платформа для учёта личных долгов на узбекском рынке — отслеживает выданные/полученные долги, сроки и частичные платежи.",
      en: "A personal debt-tracking platform for the Uzbek market — tracks money lent or borrowed, due dates and partial payments.",
    },
  },
];
