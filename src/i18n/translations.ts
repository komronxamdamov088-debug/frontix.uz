import type { RoleKey } from "@/data/team";
import type { Service } from "@/data/services";

export type Lang = "uz" | "ru" | "en";

type ServiceSlug = Service["slug"];

interface ServiceText {
  title: string;
  shortDescription: string;
  description: string;
  features: string[];
}

interface Dictionary {
  meta: { title: string; description: string };
  nav: {
    home: string;
    services: string;
    team: string;
    partners: string;
    about: string;
    contact: string;
    contactCta: string;
  };
  hero: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    titleSuffix: string;
    subtitle: string;
    ctaContact: string;
    ctaTeam: string;
    statLabel: string;
    newOrder: string;
  };
  servicesPreview: { eyebrow: string; title: string; description: string; viewAll: string; more: string };
  services: Record<ServiceSlug, ServiceText>;
  servicesPage: { eyebrow: string; title: string; description: string; orderCta: string };
  whyFrontix: {
    eyebrow: string;
    title: string;
    description: string;
    stats: { value: string; label: string }[];
  };
  values: { title: string; description: string }[];
  team: {
    previewEyebrow: string;
    previewTitle: string;
    previewDescription: string;
    viewAll: string;
    pageEyebrow: string;
    pageTitle: string;
    pageDescription: string;
    categories: { all: string; founder: string; developer: string; admin: string; designer: string };
    roles: Record<RoleKey, string>;
    bios: Record<RoleKey, string>;
    count: string;
  };
  partners: {
    pageEyebrow: string;
    pageTitle: string;
    pageDescription: string;
  };
  process: {
    eyebrow: string;
    title: string;
    description: string;
    steps: { title: string; description: string }[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    items: { name: string; role: string; quote: string }[];
  };
  cta: { title: string; description: string; ctaContact: string; ctaTeam: string };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    heading: string;
    paragraph1: string;
    paragraph2: string;
    quote: string;
    quoteAuthor: string;
    valuesEyebrow: string;
    valuesTitle: string;
    milestonesEyebrow: string;
    milestonesTitle: string;
    milestones: { year: string; title: string; description: string }[];
    techStackTitle: string;
    techStack: string[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    infoTitle: string;
    telegramTitle: string;
    labels: { name: string; phone: string; telegram: string; service: string; message: string };
    placeholders: { name: string; phone: string; telegram: string; message: string };
    submit: string;
    sending: string;
    successTitle: string;
    successDescription: string;
    sendAgain: string;
    faqTitle: string;
    faq: { question: string; answer: string }[];
  };
  footer: { description: string; navTitle: string; contactTitle: string; rights: string; tagline: string };
  notFound: { title: string; description: string; back: string };
  frx: {
    name: string;
    subtitle: string;
    openLabel: string;
    closeLabel: string;
    inputPlaceholder: string;
    sendLabel: string;
    typing: string;
    greeting: string;
    starterSuggestions: string[];
    thanks: string;
    contactIntro: string;
    contactCta: string;
    processIntro: string;
    aboutIntro: string;
    teamIntro: string;
    teamCta: string;
    servicesListIntro: string;
    servicesCta: string;
    orderCta: string;
    pricingIntro: string;
    pricingCta: string;
    fallback: string;
    priceNote: string;
  };
  languageNames: { uz: string; ru: string; en: string };
}

const servicesUz: Record<ServiceSlug, ServiceText> = {
  "website-development": {
    title: "Website Development",
    shortDescription: "Tezkor, zamonaviy va konversiyaga yo'naltirilgan korporativ saytlar.",
    description:
      "Biznesingiz uchun tezkor yuklanuvchi, SEO-optimallashtirilgan va har qanday qurilmada mukammal ko'rinadigan website ishlab chiqamiz.",
    features: ["Custom UI/UX dizayn", "SEO optimizatsiya", "Tezkor yuklanish", "CMS integratsiyasi"],
  },
  "qr-menu": {
    title: "QR Menu",
    shortDescription: "Restoran va kafelar uchun raqamli, real-vaqtda yangilanadigan menyu.",
    description:
      "Mijozlaringiz stoldan turmasdan QR kod orqali menyuni ko'rishi va buyurtma berishi mumkin bo'lgan zamonaviy tizim.",
    features: ["Real-time yangilanish", "Ko'p tilli menyu", "Statistik hisobotlar", "Oson boshqaruv paneli"],
  },
  "telegram-bot": {
    title: "Telegram Bot",
    shortDescription: "Buyurtma, mijozlar bilan aloqa va avtomatik javoblar uchun botlar.",
    description:
      "Biznesingiz jarayonlarini avtomatlashtiradigan, mijozlar bilan 24/7 muloqot qiladigan Telegram botlarini yaratamiz.",
    features: ["Buyurtma qabul qilish", "To'lov integratsiyasi", "Admin panel", "Avtomatik bildirishnomalar"],
  },
  "online-ordering": {
    title: "Online Ordering",
    shortDescription: "To'liq huquqli onlayn buyurtma va yetkazib berish tizimlari.",
    description:
      "Mijozlaringiz uchun qulay, tezkor va ishonchli onlayn buyurtma platformasini web va mobil qurilmalarda taqdim etamiz.",
    features: ["Savat va to'lov", "Yetkazib berish trekingi", "Buyurtmalar tarixi", "Ombor integratsiyasi"],
  },
  "business-automation": {
    title: "Business Automation",
    shortDescription: "Ichki jarayonlarni avtomatlashtirib, vaqt va resurslarni tejang.",
    description:
      "Takrorlanuvchi jarayonlarni avtomatlashtirib, jamoangiz muhim ishlarga ko'proq vaqt ajratishi uchun yechimlar yaratamiz.",
    features: ["Workflow avtomatizatsiya", "CRM integratsiyasi", "Hisobot va analitika", "API bog'lanishlar"],
  },
  "custom-software": {
    title: "Custom Software",
    shortDescription: "Sizning biznesingiz talablariga mos individual dasturiy yechimlar.",
    description:
      "Standart yechimlar yetarli bo'lmaganda, biznesingizning noyob ehtiyojlariga mos maxsus dasturiy ta'minot ishlab chiqamiz.",
    features: [
      "Individual arxitektura",
      "Masshtablanuvchan tizim",
      "Xavfsizlik standartlari",
      "Uzoq muddatli qo'llab-quvvatlash",
    ],
  },
};

const servicesRu: Record<ServiceSlug, ServiceText> = {
  "website-development": {
    title: "Разработка сайтов",
    shortDescription: "Быстрые, современные корпоративные сайты, ориентированные на конверсию.",
    description:
      "Разрабатываем для вашего бизнеса быстрые, SEO-оптимизированные сайты, которые идеально смотрятся на любом устройстве.",
    features: ["Индивидуальный UI/UX дизайн", "SEO-оптимизация", "Высокая скорость загрузки", "Интеграция с CMS"],
  },
  "qr-menu": {
    title: "QR-меню",
    shortDescription: "Цифровое меню для ресторанов и кафе с обновлением в реальном времени.",
    description:
      "Современная система, позволяющая клиентам просматривать меню и делать заказ через QR-код, не вставая из-за стола.",
    features: ["Обновление в реальном времени", "Многоязычное меню", "Статистика и отчёты", "Удобная панель управления"],
  },
  "telegram-bot": {
    title: "Telegram-бот",
    shortDescription: "Боты для приёма заказов, общения с клиентами и автоответов.",
    description:
      "Создаём Telegram-ботов, которые автоматизируют бизнес-процессы и общаются с клиентами 24/7.",
    features: ["Приём заказов", "Интеграция платежей", "Админ-панель", "Автоматические уведомления"],
  },
  "online-ordering": {
    title: "Онлайн-заказы",
    shortDescription: "Полноценные системы онлайн-заказов и доставки.",
    description:
      "Предоставляем удобную, быструю и надёжную платформу онлайн-заказов для веб и мобильных устройств.",
    features: ["Корзина и оплата", "Отслеживание доставки", "История заказов", "Интеграция со складом"],
  },
  "business-automation": {
    title: "Автоматизация бизнеса",
    shortDescription: "Автоматизируйте внутренние процессы и экономьте время и ресурсы.",
    description:
      "Создаём решения, автоматизирующие повторяющиеся процессы, чтобы ваша команда могла сосредоточиться на важных задачах.",
    features: ["Автоматизация workflow", "Интеграция с CRM", "Отчётность и аналитика", "API-интеграции"],
  },
  "custom-software": {
    title: "Индивидуальное ПО",
    shortDescription: "Индивидуальные программные решения под задачи вашего бизнеса.",
    description:
      "Когда стандартных решений недостаточно, мы разрабатываем специализированное ПО под уникальные потребности вашего бизнеса.",
    features: ["Индивидуальная архитектура", "Масштабируемая система", "Стандарты безопасности", "Долгосрочная поддержка"],
  },
};

const servicesEn: Record<ServiceSlug, ServiceText> = {
  "website-development": {
    title: "Website Development",
    shortDescription: "Fast, modern, conversion-focused business websites.",
    description:
      "We build fast-loading, SEO-optimized websites for your business that look perfect on any device.",
    features: ["Custom UI/UX design", "SEO optimization", "Fast load times", "CMS integration"],
  },
  "qr-menu": {
    title: "QR Menu",
    shortDescription: "Digital, real-time menus for restaurants and cafes.",
    description:
      "A modern system letting your customers browse the menu and order via QR code straight from their table.",
    features: ["Real-time updates", "Multi-language menu", "Analytics & reports", "Easy admin dashboard"],
  },
  "telegram-bot": {
    title: "Telegram Bot",
    shortDescription: "Bots for orders, customer support and automated replies.",
    description:
      "We build Telegram bots that automate your business processes and chat with customers 24/7.",
    features: ["Order handling", "Payment integration", "Admin panel", "Automated notifications"],
  },
  "online-ordering": {
    title: "Online Ordering",
    shortDescription: "Full-featured online ordering and delivery systems.",
    description:
      "A convenient, fast and reliable online ordering platform for your customers on web and mobile.",
    features: ["Cart & checkout", "Delivery tracking", "Order history", "Inventory integration"],
  },
  "business-automation": {
    title: "Business Automation",
    shortDescription: "Automate internal processes and save time and resources.",
    description:
      "We build solutions that automate repetitive processes so your team can focus on what matters.",
    features: ["Workflow automation", "CRM integration", "Reporting & analytics", "API connections"],
  },
  "custom-software": {
    title: "Custom Software",
    shortDescription: "Bespoke software solutions tailored to your business needs.",
    description:
      "When off-the-shelf solutions aren't enough, we build custom software for your business's unique needs.",
    features: ["Custom architecture", "Scalable system", "Security standards", "Long-term support"],
  },
};

const rolesUz: Record<RoleKey, string> = {
  founder: "Asoschi va CEO",
  coFounder: "Hammuassis va COO",
  frontend: "Frontend dasturchi",
  backend: "Backend dasturchi",
  fullstack: "Full-Stack dasturchi",
  mobile: "Mobil dasturchi",
  devops: "DevOps muhandisi",
  qa: "QA muhandisi",
  admin: "Administrator",
  designer: "UI/UX dizayner",
};

const rolesRu: Record<RoleKey, string> = {
  founder: "Основатель и CEO",
  coFounder: "Со-основатель и COO",
  frontend: "Frontend-разработчик",
  backend: "Backend-разработчик",
  fullstack: "Full-Stack разработчик",
  mobile: "Mobile-разработчик",
  devops: "DevOps-инженер",
  qa: "QA-инженер",
  admin: "Администратор",
  designer: "UI/UX дизайнер",
};

const rolesEn: Record<RoleKey, string> = {
  founder: "Founder & CEO",
  coFounder: "Co-Founder & COO",
  frontend: "Frontend Developer",
  backend: "Backend Developer",
  fullstack: "Full-Stack Developer",
  mobile: "Mobile Developer",
  devops: "DevOps Engineer",
  qa: "QA Engineer",
  admin: "Administrator",
  designer: "UI/UX Designer",
};

const biosUz: Record<RoleKey, string> = {
  founder: "FRONTIX g'oyasi va strategiyasi ortida turadi, kompaniya rivojini boshqaradi.",
  coFounder: "Operatsion jarayonlar va mijozlar bilan ishlashni boshqaradi.",
  frontend: "Foydalanuvchi interfeyslarini piksel darajasida aniqlik bilan quradi.",
  backend: "Ishonchli va tez server tomon arxitekturasini yaratadi.",
  fullstack: "Frontend va backend orasida ko'prik bo'lib, loyihani boshidan oxirigacha olib boradi.",
  mobile: "iOS va Android uchun tezkor mobil ilovalar yaratadi.",
  devops: "Infratuzilma va deploy jarayonlarini avtomatlashtiradi.",
  qa: "Har bir mahsulotning sifatini sinovdan o'tkazib tasdiqlaydi.",
  admin: "Jamoa va loyiha jarayonlarini tartibga soladi.",
  designer: "Zamonaviy va foydalanuvchiga qulay dizaynlar yaratadi.",
};

const biosRu: Record<RoleKey, string> = {
  founder: "Стоит за идеей и стратегией FRONTIX, руководит развитием компании.",
  coFounder: "Управляет операционными процессами и работой с клиентами.",
  frontend: "Создаёт пользовательские интерфейсы с пиксельной точностью.",
  backend: "Разрабатывает надёжную и быструю серверную архитектуру.",
  fullstack: "Связующее звено между frontend и backend, ведёт проект от начала до конца.",
  mobile: "Создаёт быстрые мобильные приложения для iOS и Android.",
  devops: "Автоматизирует инфраструктуру и процессы деплоя.",
  qa: "Проверяет качество каждого продукта перед релизом.",
  admin: "Организует работу команды и процессы проектов.",
  designer: "Создаёт современный и удобный для пользователя дизайн.",
};

const biosEn: Record<RoleKey, string> = {
  founder: "Drives the vision and strategy behind FRONTIX, leading company growth.",
  coFounder: "Oversees operations and client relationships.",
  frontend: "Builds user interfaces with pixel-perfect precision.",
  backend: "Designs reliable, high-performance server-side architecture.",
  fullstack: "Bridges frontend and backend, driving projects end to end.",
  mobile: "Builds fast, native-feeling mobile apps for iOS and Android.",
  devops: "Automates infrastructure and deployment pipelines.",
  qa: "Tests and validates the quality of every product we ship.",
  admin: "Keeps the team and project processes organized.",
  designer: "Creates modern, user-friendly designs.",
};

const techStackList = ["React", "TypeScript", "Node.js", "Tailwind CSS", "Telegram Bot API", "PostgreSQL", "REST API", "Vite"];

export const translations: Record<Lang, Dictionary> = {
  uz: {
    meta: {
      title: "FRONTIX — Biznesingiz uchun raqamli yechimlar",
      description:
        "FRONTIX — bizneslar uchun onlayn buyurtma, CRM va avtomatlashtirish yechimlarini yaratadigan IT kompaniya.",
    },
    nav: {
      home: "Bosh sahifa",
      services: "Xizmatlar",
      team: "Jamoa",
      partners: "Hamkorlar",
      about: "Biz haqimizda",
      contact: "Aloqa",
      contactCta: "Biz bilan bog'lanish",
    },
    hero: {
      badge: "Raqamli yechimlar kompaniyasi",
      titlePrefix: "Biznesingizni ",
      titleHighlight: "raqamli",
      titleSuffix: " darajaga olib chiqamiz.",
      subtitle:
        "FRONTIX — biznesingiz uchun zamonaviy website, Telegram bot, QR menyu va avtomatlashtirish yechimlarini yaratadi.",
      ctaContact: "Biz bilan bog'lanish",
      ctaTeam: "Jamoamiz",
      statLabel: "savdo o'sishi",
      newOrder: "Yangi buyurtma!",
    },
    servicesPreview: {
      eyebrow: "Xizmatlar",
      title: "Biznesingiz uchun to'liq raqamli ekotizim",
      description: "Web-saytdan tortib avtomatlashtirishgacha — barcha zarur yechimlarni bir joydan olasiz.",
      viewAll: "Barcha xizmatlar",
      more: "Batafsil",
    },
    services: servicesUz,
    servicesPage: {
      eyebrow: "Xizmatlar",
      title: "Biznesingiz uchun zarur bo'lgan barcha raqamli yechimlar",
      description: "Har bir xizmat sinovdan o'tgan jarayon va zamonaviy texnologiyalar asosida taqdim etiladi.",
      orderCta: "Buyurtma berish",
    },
    whyFrontix: {
      eyebrow: "Nima uchun FRONTIX",
      title: "Natija beradigan raqamli mahsulotlar",
      description: "Biz shunchaki dizayn qilmaymiz — biznesingiz o'sishiga xizmat qiladigan mahsulotlar yaratamiz.",
      stats: [
        { value: "12+", label: "Jamoa a'zolari" },
        { value: "30+", label: "Mamnun mijozlar" },
        { value: "4+", label: "Yillik tajriba" },
        { value: "98%", label: "Mijozlar mamnuniyati" },
      ],
    },
    values: [
      { title: "Quality", description: "Har bir loyihada puxta va sifatli natijaga erishishga e'tibor qaratamiz." },
      { title: "Speed", description: "Bozorga tez chiqish uchun samarali va tezkor ishlab chiqish jarayoni." },
      { title: "Modern Technology", description: "Eng so'nggi texnologiyalar va yondashuvlardan foydalanamiz." },
      { title: "Individual Approach", description: "Har bir mijoz uchun noyob va moslashtirilgan yechim yaratamiz." },
    ],
    team: {
      previewEyebrow: "Jamoa",
      previewTitle: "Loyihalaringiz ortida turgan jamoa",
      previewDescription: "Asoschilardan tortib dasturchi va dizaynerlargacha — har bir a'zo o'z sohasining ustasi.",
      viewAll: "Barcha jamoa a'zolari",
      pageEyebrow: "Jamoa",
      pageTitle: "FRONTIX jamoasi bilan tanishing",
      pageDescription: "12 nafar mutaxassisdan iborat jamoamiz — asoschilar, dasturchilar, administrator va dizayner.",
      categories: { all: "Barchasi", founder: "Asoschilar", developer: "Dasturchilar", admin: "Administrator", designer: "Dizayner" },
      roles: rolesUz,
      bios: biosUz,
      count: "a'zo",
    },
    partners: {
      pageEyebrow: "Hamkorlar",
      pageTitle: "Bizga ishonch bildirgan hamkorlar",
      pageDescription: "Turli sohalardagi bizneslar bilan hamkorlikda raqamli mahsulotlar yaratamiz va ularning o'sishiga hissa qo'shamiz.",
    },
    process: {
      eyebrow: "Ish jarayoni",
      title: "Biz qanday ishlaymiz",
      description: "Har bir loyiha aniq va sinovdan o'tgan jarayon asosida amalga oshiriladi.",
      steps: [
        { title: "Kashfiyot", description: "Biznesingiz maqsadlari va ehtiyojlarini chuqur o'rganamiz." },
        { title: "Strategiya va dizayn", description: "Aniq strategiya asosida premium UI/UX dizayn yaratamiz." },
        { title: "Ishlab chiqish", description: "Zamonaviy texnologiyalar bilan mahsulotni qadam-baqadam quramiz." },
        { title: "Ishga tushirish", description: "Sinovdan o'tkazib, mahsulotni ishga tushiramiz va qo'llab-quvvatlaymiz." },
      ],
    },
    testimonials: {
      eyebrow: "Mijozlar fikri",
      title: "Bizga ishonch bildirgan bizneslar",
      items: [
        {
          name: "Aziz Karimov",
          role: "Restoran tarmog'i asoschisi",
          quote:
            "FRONTIX jamoasi QR menyu tizimini juda tez va sifatli qilib topshirdi. Mijozlarimiz endi buyurtmani o'zlari, kutmasdan berishadi.",
        },
        {
          name: "Malika Yusupova",
          role: "E-commerce menejeri",
          quote:
            "Telegram bot va onlayn buyurtma tizimi savdolarimizni sezilarli darajada oshirdi. Professional yondashuv uchun rahmat!",
        },
        {
          name: "Bekzod Rahimov",
          role: "Startap CEO",
          quote:
            "Loyihamiz uchun individual dasturiy yechim kerak edi. FRONTIX aynan biznes talablarimizga mos tizim yaratib berdi.",
        },
      ],
    },
    cta: {
      title: "Loyihangizni bugundan boshlaymizmi?",
      description:
        "Biznesingizga mos raqamli yechimni birgalikda ishlab chiqamiz. Bepul konsultatsiya uchun biz bilan bog'laning.",
      ctaContact: "Biz bilan bog'lanish",
      ctaTeam: "Jamoamiz",
    },
    about: {
      eyebrow: "Biz haqimizda",
      title: "Raqamli mahsulotlar orqali biznesingizga natija olib kelamiz",
      description: "FRONTIX jamoasi bilan tanishing va biz nima uchun ishonchli hamkor ekanimizni bilib oling.",
      heading: "Biz bizneslar uchun shunchaki sayt emas, natija beradigan raqamli mahsulotlar yaratamiz.",
      paragraph1:
        "FRONTIX — 2021-yildan buyon bizneslarga zamonaviy raqamli yechimlar orqali o'sishga yordam beradigan IT kompaniya. Har bir loyihaga alohida yondashib, mijozlarimizning haqiqiy maqsadlariga xizmat qiluvchi mahsulotlar yaratamiz.",
      paragraph2:
        "Kichik startaplardan tortib yirik brendlargacha — 12 nafar mutaxassisdan iborat jamoamiz website, Telegram bot, QR menyu va avtomatlashtirish tizimlari orqali o'nlab bizneslarning raqamli transformatsiyasida ishtirok etgan.",
      quote: "Har bir piksel, har bir qator kod — biznesingiz muvaffaqiyati uchun.",
      quoteAuthor: "— FRONTIX jamoasi",
      valuesEyebrow: "Qadriyatlarimiz",
      valuesTitle: "Bizni boshqaradigan tamoyillar",
      milestonesEyebrow: "Bizning yo'limiz",
      milestonesTitle: "Kompaniya tarixi va bosqichlari",
      milestones: [
        { year: "2021", title: "Kompaniya asos solindi", description: "FRONTIX kichik jamoa bilan o'z faoliyatini boshladi." },
        { year: "2022", title: "Birinchi 10 loyiha", description: "Turli sohalardagi bizneslar uchun 10 dan ortiq loyiha yakunlandi." },
        { year: "2023", title: "Jamoa kengaydi", description: "Dasturchilar va dizaynerlar soni ortib, xizmatlar doirasi kengaytirildi." },
        { year: "2024", title: "30+ mamnun mijoz", description: "Turli hajmdagi bizneslar bilan uzoq muddatli hamkorlik o'rnatildi." },
        { year: "2025", title: "12 nafarlik professional jamoa", description: "Bugungi kunda FRONTIX to'liq huquqli, ko'p tarmoqli jamoaga aylandi." },
      ],
      techStackTitle: "Ishlatadigan texnologiyalarimiz",
      techStack: techStackList,
    },
    contact: {
      eyebrow: "Aloqa",
      title: "Loyihangizni birga boshlaymiz",
      description: "Quyidagi formani to'ldiring yoki Telegram orqali to'g'ridan-to'g'ri biz bilan bog'laning.",
      infoTitle: "Aloqa ma'lumotlari",
      telegramTitle: "Telegram orqali yozing",
      labels: { name: "Ismingiz", phone: "Telefon raqam", telegram: "Telegram username", service: "Xizmat turi", message: "Loyiha tavsifi" },
      placeholders: {
        name: "Ism Familiya",
        phone: "+998 90 123 45 67",
        telegram: "@username",
        message: "Loyihangiz haqida qisqacha ma'lumot bering...",
      },
      submit: "Project boshlash",
      sending: "Yuborilmoqda...",
      successTitle: "So'rovingiz qabul qilindi!",
      successDescription: "So'rovingiz Telegram orqali jamoamizga yuborildi. Tez orada siz bilan bog'lanamiz.",
      sendAgain: "Yana yuborish",
      faqTitle: "Ko'p beriladigan savollar",
      faq: [
        {
          question: "Loyiha necha kunda tayyor bo'ladi?",
          answer: "Murakkablikka qarab odatda 1-6 hafta ichida yakunlaymiz. Aniq muddat bepul konsultatsiyadan so'ng belgilanadi.",
        },
        {
          question: "Narxlar qanday belgilanadi?",
          answer: "Har bir loyiha individual baholanadi — funksionallik, dizayn murakkabligi va muddatga qarab. Konsultatsiyadan so'ng aniq taklif taqdim etamiz.",
        },
        {
          question: "Loyihadan keyin qo'llab-quvvatlash bormi?",
          answer: "Ha, barcha loyihalar uchun texnik qo'llab-quvvatlash va yangilanishlar xizmatini taklif qilamiz.",
        },
        {
          question: "Qanday to'lov usullari mavjud?",
          answer: "To'lovni bosqichma-bosqich (oldindan va yakunda) yoki kelishilgan jadval asosida amalga oshirish mumkin.",
        },
      ],
    },
    footer: {
      description: "Bizneslar uchun zamonaviy website, Telegram bot, QR menyu va avtomatlashtirish yechimlarini yaratamiz.",
      navTitle: "Navigatsiya",
      contactTitle: "Aloqa",
      rights: "Barcha huquqlar himoyalangan.",
      tagline: "Raqamli yechimlar — biznesingiz uchun.",
    },
    notFound: {
      title: "Sahifa topilmadi",
      description: "Siz qidirayotgan sahifa mavjud emas yoki ko'chirilgan bo'lishi mumkin.",
      back: "Bosh sahifaga qaytish",
    },
    frx: {
      name: "FRX",
      subtitle: "FRONTIX AI yordamchisi",
      openLabel: "FRX AI yordamchisini ochish",
      closeLabel: "Yopish",
      inputPlaceholder: "Savolingizni yozing...",
      sendLabel: "Yuborish",
      typing: "FRX yozmoqda...",
      greeting: "Salom! Men FRX — FRONTIX kompaniyasining AI yordamchisiman. Xizmatlar, jamoa, narxlar yoki aloqa haqida savol bering.",
      starterSuggestions: ["Xizmatlar qanday?", "Jamoangiz haqida", "Narxlar qanday?", "Bog'lanish"],
      thanks: "Arzimaydi! Yana savolingiz bo'lsa, bemalol so'rang.",
      contactIntro: "Biz bilan bog'lanishning bir necha yo'li bor",
      contactCta: "Aloqa sahifasiga o'tish",
      processIntro: "Ish jarayonimiz 4 bosqichdan iborat",
      aboutIntro: "FRONTIX — bizneslar uchun natija beradigan raqamli mahsulotlar yaratadigan IT kompaniya. Asosiy qadriyatlarimiz",
      teamIntro: "Jamoamiz 12 nafar mutaxassisdan iborat: 2 asoschi, 8 dasturchi, 1 administrator va 1 dizayner.",
      teamCta: "Jamoa sahifasiga o'tish",
      servicesListIntro: "Biz quyidagi xizmatlarni taqdim etamiz",
      servicesCta: "Barcha xizmatlar",
      orderCta: "Buyurtma berish",
      pricingIntro:
        "Narxlar loyihaning murakkabligi, funksionalligi va muddatiga qarab belgilanadi — shuning uchun standart narxnoma yo'q. Loyihangiz haqida qisqacha ma'lumot bering, jamoamiz 24 soat ichida bepul taklif tayyorlaydi.",
      pricingCta: "Narx so'rovi yuborish",
      fallback:
        "Bu savolga aniq javob bera olmadim, lekin jamoamiz albatta yordam beradi. Loyihangiz haqida qisqacha yozing yoki quyidagi mavzulardan birini tanlang.",
      priceNote: "Aniq narx loyiha hajmi va talablarga qarab belgilanadi. Aloqa sahifasi orqali bepul konsultatsiya uchun so'rov qoldiring.",
    },
    languageNames: { uz: "O'zbekcha", ru: "Русский", en: "English" },
  },
  ru: {
    meta: {
      title: "FRONTIX — Цифровые решения для вашего бизнеса",
      description:
        "FRONTIX создаёт современные сайты, Telegram-ботов, QR-меню и системы автоматизации для вашего бизнеса.",
    },
    nav: {
      home: "Главная",
      services: "Услуги",
      team: "Команда",
      partners: "Партнёры",
      about: "О нас",
      contact: "Контакты",
      contactCta: "Связаться с нами",
    },
    hero: {
      badge: "Компания цифровых решений",
      titlePrefix: "Выводим ваш бизнес на ",
      titleHighlight: "цифровой",
      titleSuffix: " уровень.",
      subtitle:
        "FRONTIX создаёт для вашего бизнеса современные сайты, Telegram-ботов, QR-меню и системы автоматизации.",
      ctaContact: "Связаться с нами",
      ctaTeam: "Наша команда",
      statLabel: "рост продаж",
      newOrder: "Новый заказ!",
    },
    servicesPreview: {
      eyebrow: "Услуги",
      title: "Полная цифровая экосистема для вашего бизнеса",
      description: "От веб-сайта до автоматизации — все необходимые решения в одном месте.",
      viewAll: "Все услуги",
      more: "Подробнее",
    },
    services: servicesRu,
    servicesPage: {
      eyebrow: "Услуги",
      title: "Все цифровые решения, необходимые вашему бизнесу",
      description: "Каждая услуга реализуется по проверенному процессу с использованием современных технологий.",
      orderCta: "Оформить заказ",
    },
    whyFrontix: {
      eyebrow: "Почему FRONTIX",
      title: "Цифровые продукты, дающие результат",
      description: "Мы не просто занимаемся дизайном — мы создаём продукты, которые работают на рост вашего бизнеса.",
      stats: [
        { value: "12+", label: "Членов команды" },
        { value: "30+", label: "Довольных клиентов" },
        { value: "4+", label: "Года опыта" },
        { value: "98%", label: "Удовлетворённость клиентов" },
      ],
    },
    values: [
      { title: "Качество", description: "В каждом проекте мы стремимся к тщательному и качественному результату." },
      { title: "Скорость", description: "Эффективный и быстрый процесс разработки для скорейшего выхода на рынок." },
      { title: "Современные технологии", description: "Используем самые новые технологии и подходы." },
      { title: "Индивидуальный подход", description: "Создаём уникальное решение для каждого клиента." },
    ],
    team: {
      previewEyebrow: "Команда",
      previewTitle: "Команда за вашими проектами",
      previewDescription: "От основателей до разработчиков и дизайнеров — каждый участник мастер своего дела.",
      viewAll: "Вся команда",
      pageEyebrow: "Команда",
      pageTitle: "Познакомьтесь с командой FRONTIX",
      pageDescription: "Наша команда состоит из 12 специалистов — основатели, разработчики, администратор и дизайнер.",
      categories: { all: "Все", founder: "Основатели", developer: "Разработчики", admin: "Администратор", designer: "Дизайнер" },
      roles: rolesRu,
      bios: biosRu,
      count: "человек",
    },
    partners: {
      pageEyebrow: "Партнёры",
      pageTitle: "Партнёры, которые нам доверяют",
      pageDescription: "Мы сотрудничаем с бизнесами из разных сфер, создавая цифровые продукты и помогая им расти.",
    },
    process: {
      eyebrow: "Процесс работы",
      title: "Как мы работаем",
      description: "Каждый проект реализуется по чёткому и проверенному процессу.",
      steps: [
        { title: "Исследование", description: "Глубоко изучаем цели и потребности вашего бизнеса." },
        { title: "Стратегия и дизайн", description: "Создаём премиальный UI/UX дизайн на основе чёткой стратегии." },
        { title: "Разработка", description: "Пошагово создаём продукт с использованием современных технологий." },
        { title: "Запуск", description: "Тестируем, запускаем продукт и обеспечиваем поддержку." },
      ],
    },
    testimonials: {
      eyebrow: "Отзывы клиентов",
      title: "Бизнесы, которые нам доверяют",
      items: [
        {
          name: "Aziz Karimov",
          role: "Основатель сети ресторанов",
          quote:
            "Команда FRONTIX очень быстро и качественно внедрила систему QR-меню. Теперь наши клиенты сами делают заказ без ожидания.",
        },
        {
          name: "Malika Yusupova",
          role: "Менеджер e-commerce",
          quote:
            "Telegram-бот и система онлайн-заказов значительно увеличили наши продажи. Спасибо за профессиональный подход!",
        },
        {
          name: "Bekzod Rahimov",
          role: "CEO стартапа",
          quote:
            "Для нашего проекта требовалось индивидуальное программное решение. FRONTIX создали систему, точно соответствующую нашим бизнес-требованиям.",
        },
      ],
    },
    cta: {
      title: "Начнём ваш проект уже сегодня?",
      description: "Разработаем цифровое решение, подходящее именно вашему бизнесу. Свяжитесь с нами для бесплатной консультации.",
      ctaContact: "Связаться с нами",
      ctaTeam: "Наша команда",
    },
    about: {
      eyebrow: "О нас",
      title: "Мы приносим результат вашему бизнесу через цифровые продукты",
      description: "Познакомьтесь с командой FRONTIX и узнайте, почему мы надёжный партнёр.",
      heading: "Мы создаём для бизнеса не просто сайты, а цифровые продукты, приносящие результат.",
      paragraph1:
        "FRONTIX — IT-компания, с 2021 года помогающая бизнесу расти с помощью современных цифровых решений. К каждому проекту мы подходим индивидуально, создавая продукты, служащие реальным целям наших клиентов.",
      paragraph2:
        "От небольших стартапов до крупных брендов — наша команда из 12 специалистов участвовала в цифровой трансформации десятков компаний с помощью сайтов, Telegram-ботов, QR-меню и систем автоматизации.",
      quote: "Каждый пиксель, каждая строка кода — ради успеха вашего бизнеса.",
      quoteAuthor: "— команда FRONTIX",
      valuesEyebrow: "Наши ценности",
      valuesTitle: "Принципы, которыми мы руководствуемся",
      milestonesEyebrow: "Наш путь",
      milestonesTitle: "История и этапы компании",
      milestones: [
        { year: "2021", title: "Основание компании", description: "FRONTIX начал свою деятельность с небольшой команды." },
        { year: "2022", title: "Первые 10 проектов", description: "Завершено более 10 проектов для бизнеса из разных отраслей." },
        { year: "2023", title: "Расширение команды", description: "Выросло число разработчиков и дизайнеров, расширился спектр услуг." },
        { year: "2024", title: "30+ довольных клиентов", description: "Установлено долгосрочное сотрудничество с бизнесами разного масштаба." },
        { year: "2025", title: "Команда из 12 специалистов", description: "Сегодня FRONTIX — полноценная многопрофильная команда." },
      ],
      techStackTitle: "Технологии, которые мы используем",
      techStack: techStackList,
    },
    contact: {
      eyebrow: "Контакты",
      title: "Начнём ваш проект вместе",
      description: "Заполните форму ниже или напишите нам напрямую в Telegram.",
      infoTitle: "Контактная информация",
      telegramTitle: "Напишите в Telegram",
      labels: { name: "Ваше имя", phone: "Номер телефона", telegram: "Telegram username", service: "Тип услуги", message: "Описание проекта" },
      placeholders: {
        name: "Имя Фамилия",
        phone: "+998 90 123 45 67",
        telegram: "@username",
        message: "Кратко расскажите о вашем проекте...",
      },
      submit: "Начать проект",
      sending: "Отправка...",
      successTitle: "Ваша заявка принята!",
      successDescription: "Ваш запрос отправлен нашей команде в Telegram. Мы свяжемся с вами в ближайшее время.",
      sendAgain: "Отправить ещё раз",
      faqTitle: "Часто задаваемые вопросы",
      faq: [
        {
          question: "За сколько дней будет готов проект?",
          answer: "Обычно завершаем за 1-6 недель в зависимости от сложности. Точный срок определяется после бесплатной консультации.",
        },
        {
          question: "Как формируется цена?",
          answer: "Каждый проект оценивается индивидуально — исходя из функциональности, сложности дизайна и сроков. После консультации предоставим точное предложение.",
        },
        {
          question: "Есть ли поддержка после завершения проекта?",
          answer: "Да, для всех проектов мы предлагаем техническую поддержку и обновления.",
        },
        {
          question: "Какие способы оплаты доступны?",
          answer: "Оплату можно произвести поэтапно (предоплата и по завершении) или по согласованному графику.",
        },
      ],
    },
    footer: {
      description: "Создаём для бизнеса современные сайты, Telegram-ботов, QR-меню и системы автоматизации.",
      navTitle: "Навигация",
      contactTitle: "Контакты",
      rights: "Все права защищены.",
      tagline: "Цифровые решения — для вашего бизнеса.",
    },
    notFound: {
      title: "Страница не найдена",
      description: "Страница, которую вы ищете, не существует или была перемещена.",
      back: "Вернуться на главную",
    },
    frx: {
      name: "FRX",
      subtitle: "AI-ассистент FRONTIX",
      openLabel: "Открыть AI-ассистента FRX",
      closeLabel: "Закрыть",
      inputPlaceholder: "Напишите ваш вопрос...",
      sendLabel: "Отправить",
      typing: "FRX печатает...",
      greeting: "Привет! Я FRX — AI-ассистент компании FRONTIX. Спрашивайте об услугах, команде, ценах или контактах.",
      starterSuggestions: ["Какие у вас услуги?", "О вашей команде", "Какие цены?", "Контакты"],
      thanks: "Пожалуйста! Если будут ещё вопросы — смело спрашивайте.",
      contactIntro: "Вот несколько способов связаться с нами",
      contactCta: "Перейти на страницу контактов",
      processIntro: "Наш процесс работы состоит из 4 этапов",
      aboutIntro: "FRONTIX — IT-компания, создающая цифровые продукты, приносящие результат бизнесу. Наши ключевые ценности",
      teamIntro: "Наша команда состоит из 12 специалистов: 2 основателя, 8 разработчиков, 1 администратор и 1 дизайнер.",
      teamCta: "Перейти на страницу команды",
      servicesListIntro: "Мы предоставляем следующие услуги",
      servicesCta: "Все услуги",
      orderCta: "Оформить заказ",
      pricingIntro:
        "Цена определяется в зависимости от сложности, функциональности и сроков проекта — поэтому фиксированного прайса нет. Расскажите кратко о проекте, и наша команда подготовит бесплатное предложение в течение 24 часов.",
      pricingCta: "Отправить запрос на цену",
      fallback:
        "Не смог найти точный ответ на этот вопрос, но наша команда обязательно поможет. Напишите кратко о вашем проекте или выберите одну из тем ниже.",
      priceNote: "Точная цена определяется исходя из объёма и требований проекта. Оставьте заявку на странице контактов для бесплатной консультации.",
    },
    languageNames: { uz: "O'zbekcha", ru: "Русский", en: "English" },
  },
  en: {
    meta: {
      title: "FRONTIX — Digital solutions for your business",
      description:
        "FRONTIX builds modern websites, Telegram bots, QR menus and automation solutions for your business.",
    },
    nav: {
      home: "Home",
      services: "Services",
      team: "Team",
      partners: "Partners",
      about: "About",
      contact: "Contact",
      contactCta: "Get in touch",
    },
    hero: {
      badge: "Digital solutions company",
      titlePrefix: "We take your business to the ",
      titleHighlight: "digital",
      titleSuffix: " level.",
      subtitle:
        "FRONTIX builds modern websites, Telegram bots, QR menus and automation solutions for your business.",
      ctaContact: "Get in touch",
      ctaTeam: "Our team",
      statLabel: "sales growth",
      newOrder: "New order!",
    },
    servicesPreview: {
      eyebrow: "Services",
      title: "A complete digital ecosystem for your business",
      description: "From websites to automation — get every solution you need in one place.",
      viewAll: "All services",
      more: "Learn more",
    },
    services: servicesEn,
    servicesPage: {
      eyebrow: "Services",
      title: "All the digital solutions your business needs",
      description: "Every service is delivered through a proven process using modern technology.",
      orderCta: "Get started",
    },
    whyFrontix: {
      eyebrow: "Why FRONTIX",
      title: "Digital products that deliver results",
      description: "We don't just design — we build products that fuel your business growth.",
      stats: [
        { value: "12+", label: "Team members" },
        { value: "30+", label: "Happy clients" },
        { value: "4+", label: "Years of experience" },
        { value: "98%", label: "Client satisfaction" },
      ],
    },
    values: [
      { title: "Quality", description: "We focus on delivering thorough, high-quality results on every project." },
      { title: "Speed", description: "An efficient, fast development process to help you reach the market sooner." },
      { title: "Modern Technology", description: "We use the latest technologies and approaches." },
      { title: "Individual Approach", description: "We build a unique, tailored solution for every client." },
    ],
    team: {
      previewEyebrow: "Team",
      previewTitle: "The team behind your projects",
      previewDescription: "From founders to developers and designers — every member is a master of their craft.",
      viewAll: "View all team members",
      pageEyebrow: "Team",
      pageTitle: "Meet the FRONTIX team",
      pageDescription: "Our team of 12 specialists — founders, developers, an administrator and a designer.",
      categories: { all: "All", founder: "Founders", developer: "Developers", admin: "Admin", designer: "Designer" },
      roles: rolesEn,
      bios: biosEn,
      count: "members",
    },
    partners: {
      pageEyebrow: "Partners",
      pageTitle: "Partners who trust us",
      pageDescription: "We collaborate with businesses across industries, building digital products that help them grow.",
    },
    process: {
      eyebrow: "Our process",
      title: "How we work",
      description: "Every project is delivered through a clear, proven process.",
      steps: [
        { title: "Discovery", description: "We deeply explore your business goals and needs." },
        { title: "Strategy & design", description: "We craft premium UI/UX design based on a clear strategy." },
        { title: "Development", description: "We build the product step by step using modern technology." },
        { title: "Launch", description: "We test, launch the product and provide ongoing support." },
      ],
    },
    testimonials: {
      eyebrow: "Client feedback",
      title: "Businesses that trust us",
      items: [
        {
          name: "Aziz Karimov",
          role: "Restaurant chain founder",
          quote:
            "The FRONTIX team delivered our QR menu system fast and to a high standard. Our customers now order themselves without waiting.",
        },
        {
          name: "Malika Yusupova",
          role: "E-commerce manager",
          quote:
            "The Telegram bot and online ordering system significantly boosted our sales. Thank you for the professional approach!",
        },
        {
          name: "Bekzod Rahimov",
          role: "Startup CEO",
          quote:
            "We needed a custom software solution for our project. FRONTIX built a system that matched our business requirements exactly.",
        },
      ],
    },
    cta: {
      title: "Ready to start your project today?",
      description: "Let's build the right digital solution for your business together. Reach out for a free consultation.",
      ctaContact: "Get in touch",
      ctaTeam: "Our team",
    },
    about: {
      eyebrow: "About us",
      title: "We drive results for your business through digital products",
      description: "Meet the FRONTIX team and learn why we're a trusted partner.",
      heading: "We don't just build websites for businesses — we build digital products that deliver results.",
      paragraph1:
        "FRONTIX has been an IT company since 2021, helping businesses grow through modern digital solutions. We approach every project individually, building products that serve our clients' real goals.",
      paragraph2:
        "From small startups to large brands — our team of 12 specialists has taken part in the digital transformation of dozens of businesses through websites, Telegram bots, QR menus and automation systems.",
      quote: "Every pixel, every line of code — for the success of your business.",
      quoteAuthor: "— The FRONTIX team",
      valuesEyebrow: "Our values",
      valuesTitle: "The principles that guide us",
      milestonesEyebrow: "Our journey",
      milestonesTitle: "Company history and milestones",
      milestones: [
        { year: "2021", title: "Company founded", description: "FRONTIX started out with a small team." },
        { year: "2022", title: "First 10 projects", description: "Completed 10+ projects for businesses across different industries." },
        { year: "2023", title: "Team expansion", description: "Grew our developer and designer roster, broadening our service range." },
        { year: "2024", title: "30+ happy clients", description: "Built long-term partnerships with businesses of all sizes." },
        { year: "2025", title: "A team of 12 specialists", description: "Today FRONTIX is a full, multi-disciplinary team." },
      ],
      techStackTitle: "Technologies we use",
      techStack: techStackList,
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's start your project together",
      description: "Fill out the form below or reach out to us directly on Telegram.",
      infoTitle: "Contact information",
      telegramTitle: "Message us on Telegram",
      labels: { name: "Your name", phone: "Phone number", telegram: "Telegram username", service: "Service type", message: "Project description" },
      placeholders: {
        name: "First and last name",
        phone: "+998 90 123 45 67",
        telegram: "@username",
        message: "Briefly describe your project...",
      },
      submit: "Start project",
      sending: "Sending...",
      successTitle: "Your request has been received!",
      successDescription: "Your request has been sent to our team on Telegram. We'll get back to you shortly.",
      sendAgain: "Send again",
      faqTitle: "Frequently asked questions",
      faq: [
        {
          question: "How long does a project take?",
          answer: "Usually 1-6 weeks depending on complexity. The exact timeline is set after a free consultation.",
        },
        {
          question: "How is pricing determined?",
          answer: "Every project is priced individually based on functionality, design complexity and timeline. We'll send an exact quote after a consultation.",
        },
        {
          question: "Is there support after the project ends?",
          answer: "Yes, we offer technical support and updates for every project we deliver.",
        },
        {
          question: "What payment methods are available?",
          answer: "Payment can be made in stages (upfront and on completion) or on an agreed schedule.",
        },
      ],
    },
    footer: {
      description: "We build modern websites, Telegram bots, QR menus and automation solutions for businesses.",
      navTitle: "Navigation",
      contactTitle: "Contact",
      rights: "All rights reserved.",
      tagline: "Digital solutions — for your business.",
    },
    notFound: {
      title: "Page not found",
      description: "The page you're looking for doesn't exist or may have been moved.",
      back: "Back to home",
    },
    frx: {
      name: "FRX",
      subtitle: "FRONTIX AI assistant",
      openLabel: "Open FRX AI assistant",
      closeLabel: "Close",
      inputPlaceholder: "Type your question...",
      sendLabel: "Send",
      typing: "FRX is typing...",
      greeting: "Hi! I'm FRX — FRONTIX's AI assistant. Ask me about services, our team, pricing or how to get in touch.",
      starterSuggestions: ["What services do you offer?", "About your team", "What are your prices?", "Contact"],
      thanks: "You're welcome! Feel free to ask anything else.",
      contactIntro: "Here are a few ways to reach us",
      contactCta: "Go to contact page",
      processIntro: "Our process has 4 stages",
      aboutIntro: "FRONTIX is an IT company that builds digital products delivering real results for businesses. Our core values",
      teamIntro: "Our team has 12 specialists: 2 founders, 8 developers, 1 administrator and 1 designer.",
      teamCta: "Go to team page",
      servicesListIntro: "We offer the following services",
      servicesCta: "All services",
      orderCta: "Get started",
      pricingIntro:
        "Pricing depends on project complexity, functionality and timeline — so there's no fixed price list. Tell us briefly about your project and our team will prepare a free quote within 24 hours.",
      pricingCta: "Send a pricing request",
      fallback:
        "I couldn't find an exact answer to that, but our team will definitely help. Write briefly about your project or pick one of the topics below.",
      priceNote: "The exact price depends on project scope and requirements. Leave a request on the contact page for a free consultation.",
    },
    languageNames: { uz: "O'zbekcha", ru: "Русский", en: "English" },
  },
};

export type { Dictionary };
