import type { Service } from "@/data/services";
import nurafshonLogo from "@/assets/projects/nurafshon-logo.webp";
import qarzdaftarLogo from "@/assets/products/qarzdaftar-logo.webp";
import sportfitLogo from "@/assets/products/sportfit-logo.webp";
import type { Lang } from "@/i18n/translations";

export interface ProjectResult {
  /** Short, concrete number or outcome: "35%", "2 hafta", "3x". */
  metric: string;
  label: string;
}

export interface ProjectTestimonial {
  quote: string;
  author: string;
  role: string;
}

export interface ProjectText {
  title: string;
  /** Short industry label shown on the card, e.g. "Restoran". */
  industry: string;
  summary: string;
  problem: string;
  solution: string;
  results: ProjectResult[];
  testimonial?: ProjectTestimonial;
}

interface ProjectData {
  slug: string;
  clientName: string;
  /** Client logo shown on the project card. Omit until we have the file. */
  clientLogo?: string;
  clientWebsite?: string;
  service: Service["slug"];
  completedDate: string;
  text: Record<Lang, ProjectText>;
}

/** A project flattened to one language — what the pages render. */
export interface Project extends ProjectText {
  slug: string;
  clientName: string;
  /** Client logo shown on the project card. Omit until we have the file. */
  clientLogo?: string;
  clientWebsite?: string;
  service: Service["slug"];
  completedDate: string;
}

// Case-study content is a factual claim about FRONTIX's actual work (Google and
// AI answer engines index it), so every entry must stay truthful: no invented
// metrics or client quotes. Results below are concrete deliverables, not
// performance numbers. When a client approves real numbers or a testimonial,
// add them here. Each slug must also be listed in scripts/projectRoutes.mjs.
const projectData: ProjectData[] = [
  {
    slug: "nurafshon-restoran-sayti",
    clientName: "Nurafshon Restaurant",
    clientLogo: nurafshonLogo,
    service: "website-development",
    completedDate: "2026-09",
    text: {
      uz: {
        title: "Nurafshon restorani uchun sayt va Telegram bron boti",
        industry: "Restoran",
        summary:
          "Toshkentdagi Nurafshon restorani uchun real menyu va narxlar, Telegram orqali stol bron qilish hamda SEO bilan to'liq veb-sayt.",
        problem:
          "Restoranning milliy, uyg'ur, yevropa va turk taomlarini o'z ichiga olgan 31 betlik menyusi PDF ko'rinishida edi. Mijozga menyuni qulay ko'rsatish va stol bronlarini bir joyga yig'ish kerak edi.",
        solution:
          "Restoranning haqiqiy logotipi va menyusi asosida qorong'i/yorug' rejimli sayt qurdik: taomlar kategoriyalar bo'yicha filtrlanadi, narxlar real. Bron formasi Telegram bot orqali restoran jamoasiga yuboriladi. Sahifa qidiruv botlari matnni ko'rishi uchun oldindan render qilingan, SEO va schema belgilari bilan ta'minlangan.",
        results: [
          { metric: "31 bet", label: "menyu real narxlar bilan saytga o'tkazildi" },
          { metric: "6", label: "kategoriya bo'yicha menyu filtri" },
          { metric: "Telegram", label: "orqali stol bron so'rovlari qabul qilinadi" },
        ],
      },
      ru: {
        title: "Сайт и Telegram-бот для бронирования для ресторана Nurafshon",
        industry: "Ресторан",
        summary:
          "Полноценный сайт для ресторана Nurafshon в Ташкенте: реальное меню с ценами, бронирование столов через Telegram и SEO.",
        problem:
          "Меню ресторана на 31 страницу (национальная, уйгурская, европейская и турецкая кухня) существовало в виде PDF. Нужно было удобно показать меню гостям и собирать заявки на бронь в одном месте.",
        solution:
          "На основе настоящего логотипа и меню мы создали сайт с тёмной и светлой темами: блюда фильтруются по категориям, цены реальные. Форма брони отправляет заявку команде ресторана через Telegram-бот. Страница предварительно отрендерена, чтобы поисковые боты видели текст, и снабжена SEO и schema-разметкой.",
        results: [
          { metric: "31 стр.", label: "меню перенесено на сайт с реальными ценами" },
          { metric: "6", label: "категорий в фильтре меню" },
          { metric: "Telegram", label: "приём заявок на бронь столов" },
        ],
      },
      en: {
        title: "Website and Telegram booking bot for Nurafshon Restaurant",
        industry: "Restaurant",
        summary:
          "A full website for Nurafshon restaurant in Tashkent: the real menu with prices, table booking through Telegram, and SEO.",
        problem:
          "The restaurant's 31-page menu (Uzbek, Uyghur, European and Turkish dishes) existed only as a PDF. The restaurant needed a convenient way to show the menu and collect table bookings in one place.",
        solution:
          "Using the restaurant's real logo and menu, we built a site with dark and light themes: dishes filter by category and prices are real. The booking form sends requests to the restaurant team through a Telegram bot. The page is pre-rendered so search bots can read its text, and ships with SEO and schema markup.",
        results: [
          { metric: "31 pages", label: "of menu moved to the site with real prices" },
          { metric: "6", label: "menu filter categories" },
          { metric: "Telegram", label: "receives table booking requests" },
        ],
      },
    },
  },
  {
    slug: "qarzdaftar",
    clientName: "QarzDaftar",
    clientLogo: qarzdaftarLogo,
    clientWebsite: "https://qarzdaftar-tau.vercel.app",
    service: "custom-software",
    completedDate: "2026-08",
    text: {
      uz: {
        title: "QarzDaftar — qarzlarni boshqarish platformasi",
        industry: "Fintech",
        summary:
          "O'zbekiston bozori uchun shaxsiy va do'kon qarzlarini boshqarish platformasi: Web, PWA va Telegram Mini App.",
        problem:
          "Qarz berish va olish daftarda yoki xotirada yuritilganda qarz unutiladi, qaytarish muddati o'tib ketadi, munosabat buziladi.",
        solution:
          "Qarzlar, qaytarish sanasi va qisman to'lovlar bir joyda kuzatiladi; qarzni ikkinchi tomon tasdiqlaydi. Telegram orqali avtomatik eslatmalar yuboriladi, AI esa muloyim eslatma matnini yozib beradi. Platforma Next.js, NestJS va Supabase PostgreSQL asosida qurilgan, admin paneli bor.",
        results: [
          { metric: "3 xil", label: "format: Web, PWA va Telegram Mini App" },
          { metric: "Telegram", label: "orqali avtomatik eslatmalar" },
          { metric: "AI", label: "yordamida muloyim eslatma matni" },
        ],
      },
      ru: {
        title: "QarzDaftar — платформа учёта долгов",
        industry: "Финтех",
        summary:
          "Платформа учёта личных и торговых долгов для рынка Узбекистана: Web, PWA и Telegram Mini App.",
        problem:
          "Когда долги ведутся в тетради или по памяти, их забывают, сроки возврата пропускаются, а отношения портятся.",
        solution:
          "Долги, сроки возврата и частичные платежи отслеживаются в одном месте; долг подтверждает вторая сторона. Через Telegram приходят автонапоминания, а ИИ пишет вежливый текст напоминания. Платформа построена на Next.js, NestJS и Supabase PostgreSQL, есть админ-панель.",
        results: [
          { metric: "3", label: "формата: Web, PWA и Telegram Mini App" },
          { metric: "Telegram", label: "автоматические напоминания" },
          { metric: "ИИ", label: "пишет вежливый текст напоминания" },
        ],
      },
      en: {
        title: "QarzDaftar — a debt-tracking platform",
        industry: "Fintech",
        summary:
          "A platform for tracking personal and shop debts for the Uzbekistan market: Web, PWA and Telegram Mini App.",
        problem:
          "When debts are kept in a notebook or in memory, they get forgotten, due dates pass and relationships suffer.",
        solution:
          "Debts, due dates and partial payments are tracked in one place, and the other party confirms the debt. Automatic reminders go out through Telegram and AI writes a polite reminder text. The platform is built on Next.js, NestJS and Supabase PostgreSQL and has an admin panel.",
        results: [
          { metric: "3", label: "formats: Web, PWA and Telegram Mini App" },
          { metric: "Telegram", label: "automatic reminders" },
          { metric: "AI", label: "writes a polite reminder text" },
        ],
      },
    },
  },
  {
    slug: "sportfit",
    clientName: "SportFit",
    clientLogo: sportfitLogo,
    clientWebsite: "https://www.instagram.com/sportfit_official1/",
    service: "business-automation",
    completedDate: "2026-09",
    text: {
      uz: {
        title: "SportFit — marketpleys kartochkalari va reklama videosi avtomatlashtirildi",
        industry: "E-commerce",
        summary:
          "SportFit sport do'koni uchun Uzum Market va Wildberries kartochkalari (oblojka) hamda reklama videolarini avtomatik tayyorlash.",
        problem:
          "Butsi modellari ko'p va har biri uchun marketpleys kartochkasini qo'lda tayyorlash ko'p vaqt oladi.",
        solution:
          "Skript mahsulot fotosidan fonni AI yordamida olib tashlaydi va logotip hamda model nomi bilan 1200×1600 o'lchamli kartochkani avtomatik yasaydi. Shu kartochkalardan reklama video, shuningdek butsi va koptok uchun vertikal Reels tayyorlandi.",
        results: [
          { metric: "50", label: "ta kartochka avtomatik tayyorlandi" },
          { metric: "1200×1600", label: "kartochka o'lchami" },
          { metric: "9:16", label: "vertikal reklama Reels" },
        ],
      },
      ru: {
        title: "SportFit — автоматизация карточек для маркетплейсов и рекламного видео",
        industry: "E-commerce",
        summary:
          "Автоматическое создание карточек (обложек) для Uzum Market и Wildberries и рекламных видео для магазина SportFit.",
        problem:
          "Моделей бутс много, и вручную готовить карточку маркетплейса для каждой слишком долго.",
        solution:
          "Скрипт с помощью ИИ убирает фон с фото товара и автоматически создаёт карточку 1200×1600 с логотипом и названием модели. Из этих карточек собрано рекламное видео, а также вертикальные Reels для бутс и мячей.",
        results: [
          { metric: "50", label: "карточек создано автоматически" },
          { metric: "1200×1600", label: "размер карточки" },
          { metric: "9:16", label: "вертикальные рекламные Reels" },
        ],
      },
      en: {
        title: "SportFit — automated marketplace listing covers and promo video",
        industry: "E-commerce",
        summary:
          "Automatic creation of Uzum Market and Wildberries listing covers and promo videos for the SportFit sports store.",
        problem:
          "There are many football boot models, and preparing a marketplace cover for each one by hand takes a lot of time.",
        solution:
          "A script removes the background from each product photo with AI and automatically builds a 1200×1600 cover with the logo and model name. Those covers were turned into a promo video, plus vertical Reels for boots and balls.",
        results: [
          { metric: "50", label: "covers generated automatically" },
          { metric: "1200×1600", label: "cover size" },
          { metric: "9:16", label: "vertical promo Reels" },
        ],
      },
    },
  },
];

function localize(data: ProjectData, lang: Lang): Project {
  const { text, ...rest } = data;
  return { ...rest, ...text[lang] };
}

export function getProjects(lang: Lang): Project[] {
  return projectData.map((p) => localize(p, lang));
}

export function getProject(slug: string, lang: Lang): Project | undefined {
  const data = projectData.find((p) => p.slug === slug);
  return data ? localize(data, lang) : undefined;
}
