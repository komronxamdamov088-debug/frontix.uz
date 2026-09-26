import partner1 from "@/assets/partners/partner-1.png";
import partner2 from "@/assets/partners/partner-2.png";
import partner4 from "@/assets/partners/partner-4.png";
import partner5 from "@/assets/partners/partner-5.png";
import type { Lang } from "@/i18n/translations";

type Localized<T = string> = Record<Lang, T>;

export interface PartnerStat {
  value: string;
  label: Localized;
}

export interface PartnerOffering {
  title: Localized;
  description: Localized;
}

export interface Partner {
  id: string;
  /** URL segment: /partners/:slug. Keep in sync with scripts/partnerRoutes.mjs. */
  slug: string;
  name: string;
  logo: string;
  website?: string;
  /** Short line under the name on the detail page. */
  tagline: Localized;
  description: Localized;
  /** Figures the partner publishes on its own website — never invented. */
  stats?: PartnerStat[];
  about: Localized<string[]>;
  offerings: PartnerOffering[];
  /** How the work is split between FRONTIX and the partner. Omit until confirmed. */
  partnership?: Localized<string[]>;
}

export const partners: Partner[] = [
  {
    id: "partner-1",
    slug: "tezcode",
    name: "Tezcode",
    logo: partner1,
    website: "https://www.tezcode.dev/ru",
    tagline: {
      uz: "AI va avtomatlashtirish bo'yicha hamkor",
      ru: "Партнёр по ИИ и автоматизации",
      en: "AI and automation partner",
    },
    description: {
      uz: "Biznes jarayonlarini avtomatlashtiradigan, AI-chatbotlar, CRM va POS yechimlarini yaratadigan AI-avtomatizatsiya kompaniyasi.",
      ru: "Компания по ИИ-автоматизации бизнеса: ИИ-чат-боты, CRM и POS-решения для автоматизации бизнес-процессов.",
      en: "An AI automation company building AI chatbots, CRM and POS solutions to automate business processes.",
    },
    stats: [
      { value: "50+", label: { uz: "mijozlar", ru: "клиентов", en: "clients" } },
      { value: "150+", label: { uz: "bajarilgan loyihalar", ru: "реализованных проектов", en: "projects delivered" } },
      { value: "8", label: { uz: "o'z mahsulotlari", ru: "собственных продуктов", en: "in-house products" } },
      { value: "2024", label: { uz: "tashkil topgan yil", ru: "год основания", en: "year founded" } },
    ],
    about: {
      uz: [
        "Tezcode — 2024-yildan beri Toshkentda faoliyat yuritayotgan dasturiy ta'minot kompaniyasi. O'zbekiston, Qozog'iston, Qirg'iziston, Tojikiston va Turkmanistondagi bizneslar uchun dasturiy ta'minot, CRM va sun'iy intellekt yechimlarini yaratadi.",
        "Kompaniya IT Park Uzbekistan rezidenti (guvohnoma №6237). Yo'nalishlari — tayyor SaaS mahsulotlar, buyurtma asosida ishlab chiqish, AI-agentlar, dasturchilar jamoasini ijaraga berish va AI bo'yicha ta'lim.",
      ],
      ru: [
        "Tezcode — компания-разработчик ПО, работающая в Ташкенте с 2024 года. Создаёт ПО, CRM и ИИ-решения для бизнеса Узбекистана, Казахстана, Кыргызстана, Таджикистана и Туркменистана.",
        "Компания — резидент IT Park Uzbekistan (свидетельство №6237). Направления — готовые SaaS-продукты, заказная разработка, ИИ-агенты, аренда команд разработчиков и обучение ИИ.",
      ],
      en: [
        "Tezcode is a software company based in Tashkent since 2024. It builds software, CRM and AI solutions for businesses in Uzbekistan, Kazakhstan, Kyrgyzstan, Tajikistan and Turkmenistan.",
        "The company is an IT Park Uzbekistan resident (certificate No. 6237). Its lines of work are ready-made SaaS products, custom development, AI agents, dedicated developer teams and AI education.",
      ],
    },
    offerings: [
      {
        title: { uz: "AI-chatbotlar va agentlar", ru: "ИИ-чат-боты и агенты", en: "AI chatbots and agents" },
        description: {
          uz: "Mijozlarga 24/7 javob beradigan va jarayonlarni o'zi bajaradigan AI-yordamchilar.",
          ru: "ИИ-ассистенты, которые отвечают клиентам 24/7 и сами выполняют процессы.",
          en: "AI assistants that answer customers 24/7 and run processes on their own.",
        },
      },
      {
        title: { uz: "CRM va POS tizimlari", ru: "CRM и POS-системы", en: "CRM and POS systems" },
        description: {
          uz: "Savdo, mijozlar va kassani bitta tizimda boshqarish.",
          ru: "Продажи, клиенты и касса — в одной системе.",
          en: "Sales, customers and checkout managed in one system.",
        },
      },
      {
        title: { uz: "AI-videoanalitika", ru: "ИИ-видеоаналитика", en: "AI video analytics" },
        description: {
          uz: "Kameralar odamlarni sanaydi, yuzlarni taniydi va xavfsizlikni nazorat qiladi.",
          ru: "Камеры считают людей, распознают лица и контролируют безопасность.",
          en: "Cameras that count people, recognise faces and monitor safety.",
        },
      },
      {
        title: { uz: "Buyurtma asosida ishlab chiqish", ru: "Заказная разработка", en: "Custom development" },
        description: {
          uz: "Biznes jarayonlariga moslab yaratiladigan dasturiy ta'minot va integratsiyalar.",
          ru: "ПО и интеграции, созданные под процессы конкретного бизнеса.",
          en: "Software and integrations built around a specific business's processes.",
        },
      },
    ],
    partnership: {
      uz: [
        "FRONTIX mahsulotning veb va raqamli qismini — saytlar, QR-menyular, Telegram-botlar va onlayn-buyurtma tizimlarini o'z zimmasiga oladi. Tezcode esa ustiga sun'iy intellekt qatlami va integratsiyalarni qo'shadi.",
        "Natijada mijoz bitta hamkorlikdan ham veb-mahsulot, ham avtomatlashtirishni oladi — ikki xil pudratchini o'zaro kelishtirishga hojat qolmaydi.",
      ],
      ru: [
        "FRONTIX берёт на себя веб- и цифровую часть продукта — сайты, QR-меню, Telegram-ботов и системы онлайн-заказов. Tezcode добавляет сверху слой ИИ и интеграции.",
        "В итоге клиент получает от одного партнёрства и веб-продукт, и автоматизацию — без необходимости согласовывать двух разных подрядчиков.",
      ],
      en: [
        "FRONTIX handles the web and digital side of the product — websites, QR menus, Telegram bots and online ordering systems. Tezcode adds the AI layer and integrations on top.",
        "The client gets both the web product and the automation from a single partnership, without having to coordinate two separate contractors.",
      ],
    },
  },
  {
    id: "partner-2",
    slug: "coremed",
    name: "Coremed",
    logo: partner2,
    website: "https://coremed.uz/uz",
    tagline: {
      uz: "Raqamli sog'liqni saqlash bo'yicha hamkor",
      ru: "Партнёр в цифровом здравоохранении",
      en: "Digital healthcare partner",
    },
    description: {
      uz: "O'zbekiston uchun raqamli sog'liqni saqlash kompaniyasi — ClinicaGo (klinikalar uchun CRM), HamshiraGo (uyga hamshira xizmati) va Salomat AI mahsulotlarini yaratadi.",
      ru: "Компания цифрового здравоохранения в Узбекистане — создаёт ClinicaGo (CRM для клиник), HamshiraGo (услуга медсестры на дом) и Salomat AI.",
      en: "A digital healthcare company in Uzbekistan — building ClinicaGo (a CRM for clinics), HamshiraGo (an on-demand home nursing service) and Salomat AI.",
    },
    stats: [
      { value: "3", label: { uz: "raqamli platforma", ru: "цифровые платформы", en: "digital platforms" } },
      { value: "30", label: { uz: "daqiqada hamshira uyda", ru: "минут до приезда медсестры", en: "minutes until a nurse arrives" } },
      { value: "24/7", label: { uz: "buyurtmalar qabul qilinadi", ru: "приём заказов", en: "order intake" } },
      { value: "2", label: { uz: "tilda AI-yordamchi", ru: "языка у ИИ-ассистента", en: "AI assistant languages" } },
    ],
    about: {
      uz: [
        "Coremed — Toshkentdagi healthtech kompaniya. Bemorlar, hamshiralar va klinikalarni bitta raqamli ekotizimga bog'laydi va shaharning barcha tumanlarida xizmat ko'rsatadi.",
        "Kompaniya uchta mahsulot ustida ishlaydi: klinikalar uchun ClinicaGo CRM, uyga hamshira chaqirish xizmati HamshiraGo va o'zbek hamda rus tillarida ishlaydigan tibbiy AI-yordamchi Salomat AI.",
      ],
      ru: [
        "Coremed — healthtech-компания из Ташкента. Объединяет пациентов, медсестёр и клиники в одну цифровую экосистему и работает во всех районах города.",
        "Компания развивает три продукта: CRM для клиник ClinicaGo, сервис вызова медсестры на дом HamshiraGo и медицинский ИИ-ассистент Salomat AI на узбекском и русском языках.",
      ],
      en: [
        "Coremed is a Tashkent healthtech company. It connects patients, nurses and clinics in a single digital ecosystem and serves every district of the city.",
        "The company runs three products: ClinicaGo, a CRM for clinics; HamshiraGo, an on-demand home nursing service; and Salomat AI, a medical AI assistant that works in Uzbek and Russian.",
      ],
    },
    offerings: [
      {
        title: { uz: "ClinicaGo", ru: "ClinicaGo", en: "ClinicaGo" },
        description: {
          uz: "Klinikalar uchun CRM: jadval, bemor kartalari, onlayn yozilish, SMS-eslatmalar va moliyaviy hisobotlar bir joyda.",
          ru: "CRM для клиник: расписание, карты пациентов, онлайн-запись, SMS-напоминания и финансовые отчёты в одном месте.",
          en: "A CRM for clinics: scheduling, patient records, online booking, SMS reminders and financial reports in one place.",
        },
      },
      {
        title: { uz: "HamshiraGo", ru: "HamshiraGo", en: "HamshiraGo" },
        description: {
          uz: "Uyga hamshira chaqirish: ukol, tomchi, EKG va operatsiyadan keyingi parvarish — 30 daqiqada.",
          ru: "Медсестра на дом: уколы, капельницы, ЭКГ и послеоперационный уход — за 30 минут.",
          en: "A nurse at home: injections, IV drips, ECG and post-operative care — within 30 minutes.",
        },
      },
      {
        title: { uz: "Salomat AI", ru: "Salomat AI", en: "Salomat AI" },
        description: {
          uz: "Simptomlarni tahlil qilib, bemorni kerakli mutaxassisga yo'naltiradigan tibbiy AI-yordamchi.",
          ru: "Медицинский ИИ-ассистент, который анализирует симптомы и направляет к нужному специалисту.",
          en: "A medical AI assistant that analyses symptoms and points patients to the right specialist.",
        },
      },
    ],
  },
  {
    id: "partner-4",
    slug: "ai-solution",
    name: "AI Solution",
    logo: partner4,
    website: "https://aisolution.uz/",
    tagline: {
      uz: "Biznes uchun sun'iy intellekt bo'yicha hamkor",
      ru: "Партнёр по ИИ для бизнеса",
      en: "Business AI partner",
    },
    description: {
      uz: "O'zbekiston va Markaziy Osiyo bizneslari uchun chatbotlar, ovozli AI-agentlar va CRM/ERP integratsiyalari yaratadigan sun'iy intellekt kompaniyasi.",
      ru: "Компания в сфере ИИ, создающая чат-ботов, голосовых ИИ-агентов и интеграции CRM/ERP для бизнеса Узбекистана и Центральной Азии.",
      en: "An AI company building chatbots, voice AI agents and CRM/ERP integrations for businesses in Uzbekistan and Central Asia.",
    },
    stats: [
      { value: "9", label: { uz: "AI yo'nalishlari", ru: "направлений ИИ", en: "AI practice areas" } },
      { value: "4–8", label: { uz: "haftada pilot loyiha", ru: "недель на пилот", en: "weeks per pilot" } },
      { value: "3", label: { uz: "tilda ishlaydi", ru: "языка работы", en: "working languages" } },
      { value: "60", label: { uz: "daqiqalik bepul konsultatsiya", ru: "минут бесплатной консультации", en: "minute free consultation" } },
    ],
    about: {
      uz: [
        "AI Solution — Toshkentda joylashgan sun'iy intellekt kompaniyasi. O'zbekiston, Markaziy Osiyo va xorijdagi bizneslar bilan ishlaydi.",
        "Kompaniya AI'ni mavjud tizimlar — CRM, ERP va 1C ustiga joriy qiladi: ma'lumotlarni ko'chirish yoki tizimni almashtirish shart emas. Uning shiori: «Biz AI sotmaymiz — biz to'siqlarni olib tashlaymiz».",
      ],
      ru: [
        "AI Solution — компания в сфере искусственного интеллекта из Ташкента. Работает с бизнесом Узбекистана, Центральной Азии и других стран.",
        "Компания внедряет ИИ поверх существующих систем — CRM, ERP и 1С — без миграции данных и замены систем. Её принцип: «Мы не продаём ИИ — мы убираем узкие места».",
      ],
      en: [
        "AI Solution is an artificial intelligence company based in Tashkent. It works with businesses in Uzbekistan, Central Asia and beyond.",
        "The company layers AI on top of existing systems — CRM, ERP and 1C — with no data migration or system replacement. Its motto: “We don't sell AI. We remove bottlenecks.”",
      ],
    },
    offerings: [
      {
        title: { uz: "AI savdo agentlari", ru: "ИИ-агенты продаж", en: "AI sales agents" },
        description: {
          uz: "Lidlarga javob beradigan va savdo jarayonini tezlashtiradigan AI-agentlar.",
          ru: "ИИ-агенты, которые отвечают лидам и ускоряют продажи.",
          en: "AI agents that respond to leads and speed up the sales process.",
        },
      },
      {
        title: { uz: "Ovozli AI-agentlar", ru: "Голосовые ИИ-агенты", en: "Voice AI agents" },
        description: {
          uz: "Qo'ng'iroqlarni qabul qiladigan va mijozlar bilan ovozli muloqot qiladigan AI.",
          ru: "ИИ, который принимает звонки и общается с клиентами голосом.",
          en: "AI that takes calls and talks to customers by voice.",
        },
      },
      {
        title: { uz: "CRM/ERP integratsiyalari", ru: "Интеграции CRM/ERP", en: "CRM/ERP integrations" },
        description: {
          uz: "AI'ni mavjud CRM, ERP va 1C tizimlariga ulash.",
          ru: "Подключение ИИ к существующим CRM, ERP и 1С.",
          en: "Connecting AI to existing CRM, ERP and 1C systems.",
        },
      },
      {
        title: { uz: "Hujjatlar bilan ishlovchi AI", ru: "ИИ для документов", en: "Document AI" },
        description: {
          uz: "Hujjatlarni qayta ishlash va kompaniya bilimlar bazasidan javob topish (RAG).",
          ru: "Обработка документов и ответы по базе знаний компании (RAG).",
          en: "Document processing and answers drawn from the company knowledge base (RAG).",
        },
      },
    ],
  },
  {
    id: "partner-5",
    slug: "mars-it-school",
    name: "Mars IT School",
    logo: partner5,
    website: "https://landing.marsit.uz/",
    tagline: {
      uz: "IT ta'lim bo'yicha hamkor",
      ru: "Партнёр в IT-образовании",
      en: "IT education partner",
    },
    description: {
      uz: "Toshkentdagi 9-17 yosh o'quvchilar uchun dasturlash, dizayn va sun'iy intellekt bo'yicha ta'lim beradigan IT-maktab.",
      ru: "IT-школа в Ташкенте, обучающая программированию, дизайну и искусственному интеллекту детей в возрасте 9-17 лет.",
      en: "An IT school in Tashkent teaching programming, design and AI to students aged 9-17.",
    },
    stats: [
      { value: "9–17", label: { uz: "yoshdagi o'quvchilar", ru: "возраст учеников", en: "student age range" } },
      { value: "7", label: { uz: "Toshkentdagi filiallar", ru: "филиалов в Ташкенте", en: "branches in Tashkent" } },
      { value: "4+", label: { uz: "yillik tajriba", ru: "года работы", en: "years running" } },
      { value: "12", label: { uz: "dars har bir kursda", ru: "уроков в курсе", en: "lessons per course" } },
    ],
    about: {
      uz: [
        "Mars IT School — 9 yoshdan 17 yoshgacha bo'lgan bolalar uchun Toshkentdagi IT-maktab. To'rt yil ichida minglab o'quvchilarni o'qitgan va shahar bo'ylab yettita filial ochgan.",
        "Darslarni kamida 5 yillik tajribaga ega, yirik kompaniyalarda ishlayotgan mutaxassislar olib boradi. Ota-onalar har oy farzandining rivojlanishi haqida hisobot oladi.",
      ],
      ru: [
        "Mars IT School — IT-школа в Ташкенте для детей от 9 до 17 лет. За четыре года обучила тысячи учеников и открыла семь филиалов по всему городу.",
        "Занятия ведут действующие специалисты крупных компаний с опытом от 5 лет. Родители каждый месяц получают отчёт о прогрессе ребёнка.",
      ],
      en: [
        "Mars IT School is an IT school in Tashkent for children aged 9 to 17. In four years it has taught thousands of students and opened seven branches across the city.",
        "Classes are led by working specialists from major companies with at least 5 years of experience. Parents receive a monthly progress report.",
      ],
    },
    offerings: [
      {
        title: { uz: "Dasturlash", ru: "Программирование", en: "Programming" },
        description: {
          uz: "Mantiqiy fikrlashni rivojlantiradigan dasturlash kurslari.",
          ru: "Курсы программирования, развивающие логическое мышление.",
          en: "Programming courses that build logical thinking.",
        },
      },
      {
        title: { uz: "Dizayn", ru: "Дизайн", en: "Design" },
        description: {
          uz: "Ijodkorlik va vizual fikrlashni rivojlantiradigan dizayn kurslari.",
          ru: "Курсы дизайна для развития креативности и визуального мышления.",
          en: "Design courses that grow creativity and visual thinking.",
        },
      },
      {
        title: { uz: "Space platformasi", ru: "Платформа Space", en: "Space platform" },
        description: {
          uz: "O'quvchi rivojlanishini kuzatib boradigan onlayn platforma va shaxsiy rivojlanish rejasi.",
          ru: "Онлайн-платформа для отслеживания прогресса и личный план развития.",
          en: "An online platform for tracking progress, plus a personal development plan.",
        },
      },
      {
        title: { uz: "Sertifikat", ru: "Сертификат", en: "Certificate" },
        description: {
          uz: "Kursni muvaffaqiyatli tugatgan o'quvchilarga sertifikat beriladi.",
          ru: "По итогам успешного окончания курса выдаётся сертификат.",
          en: "Students who complete a course successfully receive a certificate.",
        },
      },
    ],
  },
];

export function getPartner(slug: string): Partner | undefined {
  return partners.find((p) => p.slug === slug);
}
