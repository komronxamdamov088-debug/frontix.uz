import qarzdaftarLogo from "@/assets/products/qarzdaftar-logo.webp";
import sportfitLogo from "@/assets/products/sportfit-logo.webp";
import type { Lang } from "@/i18n/translations";

export interface Product {
  id: string;
  name: string;
  /** Logo image. Products without one fall back to a monogram badge. */
  logo?: string;
  /** Logos with built-in padding get zoomed 125% to fill the badge; set false for edge-to-edge artwork. */
  logoZoom?: boolean;
  /** Two-letter monogram shown when there is no logo, e.g. "SF". */
  monogram?: string;
  /** Brand accent color used for the card's badge and highlights. */
  accent: string;
  website?: string;
  category: Record<Lang, string>;
  description: Record<Lang, string>;
  features: Record<Lang, string[]>;
}

// FRONTIX's own products. To add a new one (e.g. a CRM system), append an
// entry here — the home page "Products" section renders this list as-is.
export const products: Product[] = [
  {
    id: "qarzdaftar",
    name: "QarzDaftar",
    logo: qarzdaftarLogo,
    accent: "#2563EB",
    website: "https://qarzdaftar-tau.vercel.app",
    category: {
      uz: "Fintech · Web, PWA va Telegram Mini App",
      ru: "Финтех · Web, PWA и Telegram Mini App",
      en: "Fintech · Web, PWA and Telegram Mini App",
    },
    description: {
      uz: "Qarzlarni boshqarish platformasi — qarz berish/olishni, qaytarish muddatini va qisman to'lovlarni kuzatib boradi. Qarz unutilmaydi, munosabat buzilmaydi.",
      ru: "Платформа учёта долгов — отслеживает выданные и полученные долги, сроки возврата и частичные платежи. Долг не забывается, отношения не портятся.",
      en: "A debt-tracking platform — keeps track of money lent or borrowed, due dates and partial payments. Debts aren't forgotten, relationships aren't strained.",
    },
    features: {
      uz: ["Qisman va bo'lib-bo'lib to'lovlar", "Telegram orqali avtomatik eslatmalar", "AI yordamida muloyim eslatma matni", "Qarzni ikkinchi tomon bilan tasdiqlash"],
      ru: ["Частичные платежи и рассрочка", "Автонапоминания через Telegram", "Вежливые напоминания с помощью ИИ", "Подтверждение долга второй стороной"],
      en: ["Partial payments and installments", "Automatic Telegram reminders", "AI-written polite reminder messages", "Debt confirmation by the other party"],
    },
  },
  {
    id: "sportfit",
    name: "SportFit",
    logo: sportfitLogo,
    logoZoom: false,
    monogram: "SF",
    accent: "#E2222C",
    category: {
      uz: "E-commerce · Sport do'koni",
      ru: "E-commerce · Спортивный магазин",
      en: "E-commerce · Sports store",
    },
    description: {
      uz: "Sport anjomlari do'koni — butsi, koptok va boshqa sport mahsulotlari. Uzum Market va Wildberries'da sotiladi. Performance · Style · Passion.",
      ru: "Магазин спортивных товаров — бутсы, мячи и другая экипировка. Продаётся на Uzum Market и Wildberries. Performance · Style · Passion.",
      en: "A sports gear store — football boots, balls and more. Sold on Uzum Market and Wildberries. Performance · Style · Passion.",
    },
    features: {
      uz: ["Butsi va futbol koptoklari", "Uzum Market va Wildberries'da", "Avtomatlashtirilgan mahsulot kartochkalari", "Reklama video va Reels kontent"],
      ru: ["Бутсы и футбольные мячи", "На Uzum Market и Wildberries", "Автоматизированные карточки товаров", "Рекламные видео и Reels"],
      en: ["Football boots and balls", "On Uzum Market and Wildberries", "Automated product listing covers", "Promo videos and Reels content"],
    },
  },
];
