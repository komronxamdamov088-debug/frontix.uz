import qarzdaftarLogo from "@/assets/products/qarzdaftar-logo.webp";
import sportfitLogo from "@/assets/products/sportfit-logo.webp";
import frxBusinessLogo from "@/assets/products/frx-business-logo.svg";
import frxHotelLogo from "@/assets/products/frx-hotel-logo.svg";
import frxMedLogo from "@/assets/products/frxmed-logo.svg";
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
  /** Link text override, e.g. when `website` is an Instagram page rather than a site. */
  websiteLabel?: Record<Lang, string>;
  category: Record<Lang, string>;
  description: Record<Lang, string>;
  features: Record<Lang, string[]>;
}

// FRONTIX's own products. To add a new one (e.g. a CRM system), append an
// entry here — the home page "Products" section renders this list as-is.
export const products: Product[] = [
  {
    id: "frx-business",
    name: "FRX Business",
    logo: frxBusinessLogo,
    logoZoom: false,
    accent: "#2F6FED",
    category: {
      uz: "CRM · Do'kon va savdo uchun",
      ru: "CRM · Для магазинов и торговли",
      en: "CRM · For shops and retail",
    },
    description: {
      uz: "Do'konlar uchun CRM tizimi — kassa, mahsulotlar, ombor qoldig'i va mijozlarni bitta oson panelda boshqaring. Har bir biznes o'z alohida ma'lumotlari bilan ishlaydi.",
      ru: "CRM для магазинов — касса, товары, складские остатки и клиенты в одной удобной панели. Каждый бизнес работает со своими изолированными данными.",
      en: "A CRM for shops — point of sale, products, stock and customers in one simple dashboard. Every business works with its own isolated data.",
    },
    features: {
      uz: ["Kassa va savdo statistikasi", "Mahsulot va kategoriyalar", "Kam qoldiq ogohlantirishi", "Mijozlar bazasi"],
      ru: ["Касса и статистика продаж", "Товары и категории", "Оповещение о низком остатке", "База клиентов"],
      en: ["Point of sale and sales stats", "Products and categories", "Low-stock alerts", "Customer database"],
    },
  },
  {
    id: "frx-hotel",
    name: "FRX Hotel",
    logo: frxHotelLogo,
    logoZoom: false,
    accent: "#2F6FED",
    category: {
      uz: "CRM · Mehmonxonalar uchun",
      ru: "CRM · Для гостиниц",
      en: "CRM · For hotels",
    },
    description: {
      uz: "Mehmonxonalar uchun CRM tizimi — xonalar, bronlar va mehmonlarni boshqaring, check-in/check-out va tunlar bo'yicha hisob-kitob avtomatik.",
      ru: "CRM для гостиниц — управление номерами, бронированиями и гостями, автоматический check-in/check-out и расчёт по ночам.",
      en: "A CRM for hotels — manage rooms, bookings and guests, with automatic check-in/check-out and per-night billing.",
    },
    features: {
      uz: ["Xonalar va xona turlari", "Bronlar jadvali", "Check-in / check-out", "Tunlar bo'yicha avtomatik summa"],
      ru: ["Номера и типы номеров", "Таблица бронирований", "Check-in / check-out", "Автоматический расчёт по ночам"],
      en: ["Rooms and room types", "Booking calendar", "Check-in / check-out", "Automatic per-night totals"],
    },
  },
  {
    id: "frx-med",
    name: "FRX MED",
    logo: frxMedLogo,
    logoZoom: false,
    accent: "#2F6FED",
    category: {
      uz: "CRM · Klinika va shifoxonalar uchun",
      ru: "CRM · Для клиник и больниц",
      en: "CRM · For clinics and hospitals",
    },
    description: {
      uz: "Klinika va shifoxonalar uchun CRM tizimi — bemorlar, shifokorlar va qabullarni bitta joyda tartibli yuritish uchun.",
      ru: "CRM для клиник и больниц — пациенты, врачи и приёмы в одном месте, всё под контролем.",
      en: "A CRM for clinics and hospitals — patients, doctors and appointments organised in one place.",
    },
    features: {
      uz: ["Bemorlar bazasi", "Shifokorlar va qabul jadvali", "Tashriflar tarixi", "Klinika statistikasi"],
      ru: ["База пациентов", "Врачи и расписание приёмов", "История визитов", "Статистика клиники"],
      en: ["Patient records", "Doctors and appointment schedule", "Visit history", "Clinic statistics"],
    },
  },
  {
    id: "qarzdaftar",
    name: "QarzDaftar",
    logo: qarzdaftarLogo,
    logoZoom: false,
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
    website: "https://www.instagram.com/sportfit_official1/",
    websiteLabel: { uz: "Instagram'da ko'rish", ru: "Смотреть в Instagram", en: "View on Instagram" },
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
