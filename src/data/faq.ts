import type { Lang } from "@/i18n/translations";

type Localized = Record<Lang, string>;

export type FaqCategory = "general" | "pricing" | "technical" | "support";

export interface FaqItem {
  category: FaqCategory;
  question: Localized;
  answer: Localized;
}

export const faqCategories: { id: FaqCategory; label: Localized }[] = [
  { id: "general", label: { uz: "Umumiy", ru: "Общие", en: "General" } },
  { id: "pricing", label: { uz: "Muddat va narx", ru: "Сроки и цены", en: "Timeline & pricing" } },
  { id: "technical", label: { uz: "Texnik savollar", ru: "Технические", en: "Technical" } },
  { id: "support", label: { uz: "Qo'llab-quvvatlash", ru: "Поддержка", en: "Support" } },
];

// Site-wide FAQ shown on the home and contact pages (and as FAQPage JSON-LD).
// Answers only restate facts already published elsewhere on the site — no
// new promises about prices, guarantees or ownership terms.
export const faqItems: FaqItem[] = [
  {
    category: "general",
    question: {
      uz: "FRONTIX qanday xizmatlarni ko'rsatadi?",
      ru: "Какие услуги оказывает FRONTIX?",
      en: "What services does FRONTIX offer?",
    },
    answer: {
      uz: "Veb-saytlar, Telegram botlar, QR-menyu, onlayn buyurtma tizimlari, CRM avtomatlashtirish va biznesingizga moslab yaratiladigan maxsus dasturiy yechimlar.",
      ru: "Сайты, Telegram-боты, QR-меню, системы онлайн-заказов, CRM-автоматизация и индивидуальное ПО под задачи вашего бизнеса.",
      en: "Websites, Telegram bots, QR menus, online ordering systems, CRM automation and custom software built around your business.",
    },
  },
  {
    category: "general",
    question: {
      uz: "Konsultatsiya pullikmi?",
      ru: "Консультация платная?",
      en: "Is the consultation paid?",
    },
    answer: {
      uz: "Yo'q, birinchi konsultatsiya bepul. Unda vazifangizni muhokama qilamiz, qaysi yechim mos kelishini aytamiz va muddat hamda narx bo'yicha taklif beramiz.",
      ru: "Нет, первая консультация бесплатная. Мы обсуждаем задачу, подсказываем подходящее решение и даём предложение по срокам и цене.",
      en: "No, the first consultation is free. We discuss your task, suggest the right solution and give you a proposal on timeline and price.",
    },
  },
  {
    category: "general",
    question: {
      uz: "Ish qanday boshlanadi?",
      ru: "С чего начинается работа?",
      en: "How does a project start?",
    },
    answer: {
      uz: "Aloqa sahifasidagi forma, telefon yoki Telegram orqali murojaat qoldirasiz. Konsultatsiyadan so'ng taklif tayyorlaymiz, kelishilgach dizayn va ishlab chiqish bosqichma-bosqich boshlanadi.",
      ru: "Вы оставляете заявку через форму на странице контактов, по телефону или в Telegram. После консультации мы готовим предложение, и после согласования начинаются дизайн и разработка по этапам.",
      en: "You get in touch through the contact form, by phone or on Telegram. After the consultation we prepare a proposal, and once it's agreed, design and development begin in stages.",
    },
  },
  {
    category: "general",
    question: {
      uz: "Texnik bilimim yo'q — bu muammo emasmi?",
      ru: "У меня нет технических знаний — это проблема?",
      en: "I'm not technical — is that a problem?",
    },
    answer: {
      uz: "Yo'q. Siz biznesingiz jarayonini tushuntirasiz, texnik qismini biz o'z zimmamizga olamiz. Tayyor tizimni oddiy admin panel orqali boshqarasiz.",
      ru: "Нет. Вы рассказываете о процессах бизнеса, а техническую часть мы берём на себя. Готовой системой вы управляете через простую админ-панель.",
      en: "Not at all. You explain how your business works and we handle the technical side. You manage the finished system through a simple admin panel.",
    },
  },
  {
    category: "pricing",
    question: {
      uz: "Loyiha necha kunda tayyor bo'ladi?",
      ru: "Сколько времени занимает проект?",
      en: "How long does a project take?",
    },
    answer: {
      uz: "Murakkablikka qarab odatda 1-6 hafta. Masalan, QR-menyu yoki Telegram bot tezroq, murakkab CRM yoki maxsus tizim ko'proq vaqt oladi. Aniq muddat konsultatsiyadan so'ng belgilanadi.",
      ru: "Обычно 1-6 недель в зависимости от сложности. QR-меню или Telegram-бот делаются быстрее, сложная CRM или индивидуальная система — дольше. Точный срок определяется после консультации.",
      en: "Usually 1-6 weeks, depending on complexity. A QR menu or Telegram bot is quicker; a complex CRM or custom system takes longer. The exact timeline is set after the consultation.",
    },
  },
  {
    category: "pricing",
    question: {
      uz: "Narx qanday belgilanadi?",
      ru: "Как определяется цена?",
      en: "How is the price determined?",
    },
    answer: {
      uz: "Har bir loyiha individual baholanadi — funksionallik, dizayn murakkabligi va muddatga qarab. Shuning uchun standart narxnoma yo'q: loyihangiz haqida qisqacha yozsangiz, bepul taklif tayyorlaymiz.",
      ru: "Каждый проект оценивается индивидуально — по функциональности, сложности дизайна и срокам. Поэтому стандартного прайса нет: опишите проект коротко, и мы подготовим бесплатное предложение.",
      en: "Every project is priced individually, based on features, design complexity and timeline. That's why there's no standard price list — tell us briefly about your project and we'll prepare a free quote.",
    },
  },
  {
    category: "pricing",
    question: {
      uz: "To'lov qanday amalga oshiriladi?",
      ru: "Как происходит оплата?",
      en: "How does payment work?",
    },
    answer: {
      uz: "To'lov bosqichma-bosqich (oldindan va yakunda) yoki kelishilgan jadval asosida amalga oshiriladi.",
      ru: "Оплата поэтапная (предоплата и расчёт по завершении) или по согласованному графику.",
      en: "Payment is made in stages (upfront and on completion) or on an agreed schedule.",
    },
  },
  {
    category: "technical",
    question: {
      uz: "Sayt yoki tizimni keyinchalik o'zim yangilay olamanmi?",
      ru: "Смогу ли я сам обновлять сайт или систему?",
      en: "Can I update the website or system myself later?",
    },
    answer: {
      uz: "Ha. Matn, rasm, narx va mahsulotlarni admin panel orqali o'zingiz o'zgartirasiz — har safar dasturchiga murojaat qilish shart emas.",
      ru: "Да. Тексты, фото, цены и товары вы меняете сами через админ-панель — обращаться к разработчику каждый раз не нужно.",
      en: "Yes. You change texts, photos, prices and products yourself in the admin panel — no need to call a developer every time.",
    },
  },
  {
    category: "technical",
    question: {
      uz: "Sayt telefonda yaxshi ishlaydimi?",
      ru: "Хорошо ли сайт работает на телефоне?",
      en: "Will the website work well on phones?",
    },
    answer: {
      uz: "Ha, barcha saytlar mobil-birinchi tamoyilida ishlab chiqiladi, chunki O'zbekistonda foydalanuvchilarning katta qismi telefondan kiradi. Tezkor yuklanishga ham alohida e'tibor beramiz.",
      ru: "Да, все сайты разрабатываются по принципу mobile-first, ведь большинство пользователей в Узбекистане заходят с телефона. Отдельное внимание уделяем скорости загрузки.",
      en: "Yes, every site is built mobile-first, since most users in Uzbekistan browse on their phones. We also pay close attention to loading speed.",
    },
  },
  {
    category: "technical",
    question: {
      uz: "Saytim Google'da chiqadimi?",
      ru: "Будет ли мой сайт в Google?",
      en: "Will my website show up in Google?",
    },
    answer: {
      uz: "Saytni SEO optimizatsiya bilan topshiramiz: to'g'ri sarlavhalar, tavsiflar, sitemap va tezkor yuklanish. Qidiruvda yuqori o'rinlar vaqt va kontent talab qiladi, lekin texnik asosni to'g'ri qo'yib beramiz.",
      ru: "Мы сдаём сайт с SEO-оптимизацией: правильные заголовки, описания, sitemap и быстрая загрузка. Высокие позиции требуют времени и контента, но техническую основу мы закладываем правильно.",
      en: "We deliver the site with SEO optimisation: proper headings, descriptions, a sitemap and fast loading. Top rankings take time and content, but we set up the technical foundation correctly.",
    },
  },
  {
    category: "technical",
    question: {
      uz: "Click, Payme kabi to'lov tizimlarini ulash mumkinmi?",
      ru: "Можно ли подключить Click, Payme и другие платёжные системы?",
      en: "Can payment systems like Click and Payme be connected?",
    },
    answer: {
      uz: "Ha, sayt, onlayn buyurtma tizimi yoki Telegram botga Click, Payme kabi mahalliy to'lov tizimlarini integratsiya qilamiz.",
      ru: "Да, мы интегрируем местные платёжные системы вроде Click и Payme в сайт, систему онлайн-заказов или Telegram-бота.",
      en: "Yes, we integrate local payment systems such as Click and Payme into websites, online ordering systems and Telegram bots.",
    },
  },
  {
    category: "technical",
    question: {
      uz: "Mavjud CRM, 1C yoki boshqa tizimlarimiz bilan bog'lash mumkinmi?",
      ru: "Можно ли связать с нашими CRM, 1С или другими системами?",
      en: "Can it connect to our existing CRM, 1C or other systems?",
    },
    answer: {
      uz: "Ha, API orqali mavjud tizimlaringiz bilan integratsiya qilamiz — ma'lumotlar qo'lda qayta kiritilmaydi, bir tizimdan ikkinchisiga o'zi o'tadi.",
      ru: "Да, мы интегрируемся с вашими системами через API — данные не нужно вносить вручную, они сами переходят из одной системы в другую.",
      en: "Yes, we integrate with your existing systems via API, so data flows between them automatically instead of being re-entered by hand.",
    },
  },
  {
    category: "technical",
    question: {
      uz: "Sayt bir nechta tilda bo'lishi mumkinmi?",
      ru: "Может ли сайт быть на нескольких языках?",
      en: "Can the website be multilingual?",
    },
    answer: {
      uz: "Ha, o'zbek, rus va ingliz tillarida versiyalar tayyorlaymiz — har bir til o'z manziliga ega bo'ladi va qidiruv tizimlarida alohida topiladi.",
      ru: "Да, мы делаем версии на узбекском, русском и английском — у каждого языка свой адрес, и каждая версия отдельно находится в поисковиках.",
      en: "Yes, we build Uzbek, Russian and English versions — each language gets its own URL and is found separately in search engines.",
    },
  },
  {
    category: "support",
    question: {
      uz: "Loyihadan keyin qo'llab-quvvatlash bormi?",
      ru: "Есть ли поддержка после запуска?",
      en: "Is there support after launch?",
    },
    answer: {
      uz: "Ha, barcha loyihalar uchun texnik qo'llab-quvvatlash va yangilanishlar xizmatini taklif qilamiz.",
      ru: "Да, для всех проектов мы предлагаем техническую поддержку и обновления.",
      en: "Yes, we offer technical support and updates for every project.",
    },
  },
  {
    category: "support",
    question: {
      uz: "Keyinchalik yangi funksiyalar qo'shsa bo'ladimi?",
      ru: "Можно ли позже добавить новые функции?",
      en: "Can new features be added later?",
    },
    answer: {
      uz: "Ha. Tizimlarni kengaytiriladigan qilib quramiz, shuning uchun biznesingiz o'sgani sari yangi bo'lim, funksiya yoki integratsiya qo'shish mumkin.",
      ru: "Да. Мы строим системы с расчётом на расширение, поэтому по мере роста бизнеса можно добавлять новые разделы, функции и интеграции.",
      en: "Yes. We build systems to be extended, so new sections, features or integrations can be added as your business grows.",
    },
  },
];
