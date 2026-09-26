import type { Service } from "@/data/services";
import type { Lang } from "@/i18n/translations";

type ServiceSlug = Service["slug"];

export interface ServiceDetailText {
  /** <title> — "<service> in Tashkent" phrasing people actually search for. */
  seoTitle: string;
  metaDescription: string;
  keywords: string;
  h1: string;
  intro: string;
  whoFor: string[];
  benefits: { title: string; text: string }[];
  problems: string[];
  /** Optional extra section, e.g. web design inside website development. */
  extra?: { title: string; text: string };
  faq: { question: string; answer: string }[];
}

// Dedicated page content for /services/:slug. Claims stay within what the
// rest of the site already states (1-6 weeks, free consultation, staged
// payment, support) — no invented stats, prices or guarantees.
export const serviceDetails: Record<ServiceSlug, Record<Lang, ServiceDetailText>> = {
  "website-development": {
    uz: {
      seoTitle: "Toshkentda veb-sayt yaratish — korporativ sayt va landing",
      metaDescription:
        "FRONTIX Toshkentda biznes uchun veb-sayt yaratadi: korporativ sayt, landing page, onlayn do'kon. Zamonaviy dizayn, telefonga moslashgan, SEO bilan, 1-6 haftada.",
      keywords:
        "veb-sayt yaratish Toshkent, sayt qilib berish, korporativ sayt, landing page yaratish, onlayn do'kon ochish, biznes uchun sayt, sayt dizayni, veb-dizayn O'zbekiston, sayt yaratib beradigan kompaniya",
      h1: "Toshkentda biznes uchun veb-sayt yaratish",
      intro:
        "Veb-sayt — biznesingizning internetdagi doimiy manzili: mijoz Google'da qidirganda sizni topadi, xizmat va narxlarni ko'radi va darhol murojaat qiladi. FRONTIX Toshkentda korporativ saytlar, landing page va onlayn do'konlarni zamonaviy dizayn va SEO bilan 1-6 hafta ichida yaratadi.",
      whoFor: [
        "Kichik va o'rta biznes — xizmatlarini Google'da ko'rsatmoqchi bo'lgan kompaniyalar",
        "Restoran, klinika, salon kabi mahalliy bizneslar",
        "Startaplar — mahsulotini tez sinab ko'rish uchun landing page kerak bo'lganlar",
        "Faqat Instagram'ga tayanib qolgan va mustaqil manzil istagan do'konlar",
      ],
      benefits: [
        { title: "Google'da topiladi", text: "To'g'ri sarlavhalar, tavsiflar, sitemap va tezkor yuklanish bilan SEO asosini qo'yib beramiz." },
        { title: "Telefonda qulay", text: "Har bir sayt mobil-birinchi tamoyilida quriladi — O'zbekistonda foydalanuvchilarning ko'pchiligi telefondan kiradi." },
        { title: "O'zingiz boshqarasiz", text: "Matn, rasm va narxlarni admin panel orqali dasturchisiz yangilaysiz." },
        { title: "Bir necha tilda", text: "Kerak bo'lsa, o'zbek, rus va ingliz tillarida versiyalar tayyorlaymiz." },
      ],
      problems: [
        "Mijozlar kompaniyangizni Google'da qidiradi, lekin topa olmaydi",
        "Narx va xizmatlarni bilish uchun har safar qo'ng'iroq qilishga majbur",
        "Instagram algoritmiga bog'liqlik — obunachilardan boshqa hech kim ko'rmaydi",
      ],
      extra: {
        title: "Veb-dizayn",
        text: "Har bir sayt uchun dizaynni noldan, brendingizga mos qilib chizamiz: tuzilma, ranglar, shriftlar va mijozni murojaatga olib boradigan aniq yo'l. Dizayn avval tasdiqlanadi, keyin ishlab chiqishga o'tiladi.",
      },
      faq: [
        { question: "Sayt yaratish qancha vaqt oladi?", answer: "Landing page tezroq, ko'p sahifali korporativ sayt yoki onlayn do'kon ko'proq vaqt oladi — odatda 1-6 hafta. Aniq muddat konsultatsiyadan keyin belgilanadi." },
        { question: "Sayt narxi qancha?", answer: "Narx sahifalar soni, funksiyalar va dizayn murakkabligiga qarab individual belgilanadi. Bepul konsultatsiyadan so'ng aniq taklif beramiz." },
        { question: "Domen va hosting bilan yordam berasizmi?", answer: "Ha, saytni domenga ulash va ishga tushirishda yordam beramiz, keyin texnik qo'llab-quvvatlash ham taklif qilamiz." },
      ],
    },
    ru: {
      seoTitle: "Разработка сайтов в Ташкенте — корпоративный сайт и лендинг",
      metaDescription:
        "FRONTIX разрабатывает сайты для бизнеса в Ташкенте: корпоративные сайты, лендинги, интернет-магазины. Современный дизайн, адаптив под телефон, SEO, 1-6 недель.",
      keywords:
        "разработка сайтов Ташкент, создание сайта Узбекистан, корпоративный сайт, лендинг под ключ, интернет-магазин разработка, сайт для бизнеса, веб-дизайн Ташкент, заказать сайт",
      h1: "Разработка сайтов для бизнеса в Ташкенте",
      intro:
        "Сайт — постоянный адрес вашего бизнеса в интернете: клиент находит вас в Google, видит услуги и цены и сразу оставляет заявку. FRONTIX разрабатывает в Ташкенте корпоративные сайты, лендинги и интернет-магазины с современным дизайном и SEO за 1-6 недель.",
      whoFor: [
        "Малый и средний бизнес, которому нужно быть видимым в Google",
        "Местный бизнес — рестораны, клиники, салоны",
        "Стартапы, которым нужен лендинг для быстрой проверки продукта",
        "Магазины, которые зависят только от Instagram и хотят свой адрес",
      ],
      benefits: [
        { title: "Находится в Google", text: "Закладываем основу SEO: правильные заголовки, описания, sitemap и быструю загрузку." },
        { title: "Удобен на телефоне", text: "Каждый сайт строится по принципу mobile-first — большинство пользователей в Узбекистане заходят с телефона." },
        { title: "Управляете сами", text: "Тексты, фото и цены обновляете через админ-панель без разработчика." },
        { title: "На нескольких языках", text: "При необходимости делаем версии на узбекском, русском и английском." },
      ],
      problems: [
        "Клиенты ищут вашу компанию в Google и не находят",
        "Чтобы узнать цены и услуги, приходится каждый раз звонить",
        "Зависимость от алгоритма Instagram — кроме подписчиков вас никто не видит",
      ],
      extra: {
        title: "Веб-дизайн",
        text: "Для каждого сайта рисуем дизайн с нуля под ваш бренд: структура, цвета, шрифты и понятный путь клиента к заявке. Сначала дизайн согласуется, затем начинается разработка.",
      },
      faq: [
        { question: "Сколько времени занимает разработка сайта?", answer: "Лендинг — быстрее, многостраничный корпоративный сайт или интернет-магазин — дольше, обычно 1-6 недель. Точный срок определяется после консультации." },
        { question: "Сколько стоит сайт?", answer: "Цена зависит от количества страниц, функций и сложности дизайна и определяется индивидуально. После бесплатной консультации даём точное предложение." },
        { question: "Помогаете ли с доменом и хостингом?", answer: "Да, помогаем подключить сайт к домену и запустить его, а после запуска предлагаем техническую поддержку." },
      ],
    },
    en: {
      seoTitle: "Website Development in Tashkent — Corporate Sites & Landing Pages",
      metaDescription:
        "FRONTIX builds business websites in Tashkent, Uzbekistan: corporate websites, landing pages and online stores. Modern, responsive design with SEO, in 1-6 weeks.",
      keywords:
        "website development Tashkent, website development Uzbekistan, web development company Tashkent, corporate website development, landing page development, e-commerce website, responsive website, website design Uzbekistan",
      h1: "Business website development in Tashkent",
      intro:
        "A website is your business's permanent address online: customers find you on Google, see your services and prices and get in touch straight away. FRONTIX builds corporate websites, landing pages and online stores in Tashkent with modern design and SEO in 1-6 weeks.",
      whoFor: [
        "Small and medium businesses that need to be visible on Google",
        "Local businesses such as restaurants, clinics and salons",
        "Startups that need a landing page to test a product quickly",
        "Shops relying only on Instagram that want their own address",
      ],
      benefits: [
        { title: "Found on Google", text: "We set up the SEO foundation: proper headings, descriptions, a sitemap and fast loading." },
        { title: "Great on phones", text: "Every site is built mobile-first, since most users in Uzbekistan browse on their phones." },
        { title: "You stay in control", text: "Update texts, photos and prices yourself from the admin panel — no developer needed." },
        { title: "Multilingual", text: "If you need it, we build Uzbek, Russian and English versions." },
      ],
      problems: [
        "Customers search for your company on Google and can't find it",
        "People have to call every time to learn your prices and services",
        "Dependence on Instagram's algorithm — only your followers see you",
      ],
      extra: {
        title: "Web design",
        text: "We design every site from scratch around your brand: structure, colours, typography and a clear path that leads visitors to get in touch. The design is approved first, then development begins.",
      },
      faq: [
        { question: "How long does it take to build a website?", answer: "A landing page is quicker; a multi-page corporate site or online store takes longer — usually 1-6 weeks. The exact timeline is set after the consultation." },
        { question: "How much does a website cost?", answer: "The price depends on the number of pages, features and design complexity and is set individually. After a free consultation we give you an exact proposal." },
        { question: "Do you help with the domain and hosting?", answer: "Yes, we help connect the site to your domain and launch it, and we offer technical support afterwards." },
      ],
    },
  },
  "qr-menu": {
    uz: {
      seoTitle: "QR menyu Toshkent — restoran va kafelar uchun raqamli menyu",
      metaDescription:
        "FRONTIX Toshkentdagi restoran va kafelar uchun QR menyu yaratadi: mijoz stoldagi kodni skanerlab menyuni ko'radi va buyurtma beradi. Narxni o'zingiz yangilaysiz.",
      keywords:
        "QR menyu Toshkent, QR menyu O'zbekiston, restoran uchun QR menyu, raqamli menyu, elektron menyu, kafe uchun menyu, restoranni avtomatlashtirish",
      h1: "Toshkentdagi restoran va kafelar uchun QR menyu",
      intro:
        "QR menyu — mijoz stoldagi kodni telefon kamerasi bilan skanerlab, ilova o'rnatmasdan menyuni ko'radigan va buyurtma beradigan raqamli tizim. FRONTIX Toshkentdagi restoran va kafelar uchun QR menyuni admin panel bilan birga ishga tushiradi.",
      whoFor: [
        "Restoran va kafelar",
        "Fast-food va kofe nuqtalari",
        "Mehmonxona restoranlari va lounge barlar",
        "Menyusi va narxlari tez-tez o'zgaradigan har qanday ovqatlanish joyi",
      ],
      benefits: [
        { title: "Qayta chop etish yo'q", text: "Narx yoki taomni admin panelda bir necha soniyada yangilaysiz — o'zgarish barcha stollarda darhol ko'rinadi." },
        { title: "Ofitsiantga yuk kamayadi", text: "Band soatlarda mijoz menyuni kutmaydi, ofitsiant esa taomni yetkazishga e'tibor qaratadi." },
        { title: "Rasm bilan sotuv", text: "Taom rasmlari va tavsiflari mijozga tanlashni osonlashtiradi." },
        { title: "Bir nechta til", text: "Menyuni o'zbek, rus va ingliz tillarida ko'rsatish mumkin." },
      ],
      problems: [
        "Har narx o'zgarishida qog'oz menyuni qayta chop etish",
        "Band soatlarda mijozlar menyu kutib, ketib qolishi",
        "Chet ellik mehmonlar uchun tarjima qilingan menyu yo'qligi",
      ],
      faq: [
        { question: "QR menyu uchun mijoz ilova o'rnatishi kerakmi?", answer: "Yo'q, oddiy telefon kamerasi va brauzer yetarli." },
        { question: "QR menyuni joriy qilish qancha vaqt oladi?", answer: "Odatda 1-2 hafta: taomlar, rasmlar va narxlarni joylab, har bir stol uchun QR kodni tayyor holda topshiramiz." },
        { question: "QR menyu orqali buyurtma qabul qilsa bo'ladimi?", answer: "Ha, menyuga buyurtma berish funksiyasi qo'shiladi — buyurtma oshxona yoki ofitsiant ekraniga tushadi." },
      ],
    },
    ru: {
      seoTitle: "QR-меню в Ташкенте — цифровое меню для ресторанов и кафе",
      metaDescription:
        "FRONTIX создаёт QR-меню для ресторанов и кафе в Ташкенте: гость сканирует код на столе, смотрит меню и делает заказ. Цены обновляете сами через админ-панель.",
      keywords:
        "QR-меню Ташкент, QR-меню Узбекистан, QR-меню для ресторана, электронное меню, цифровое меню для кафе, автоматизация ресторана",
      h1: "QR-меню для ресторанов и кафе в Ташкенте",
      intro:
        "QR-меню — цифровая система, в которой гость сканирует код на столе камерой телефона и без приложения смотрит меню и делает заказ. FRONTIX запускает QR-меню с админ-панелью для ресторанов и кафе Ташкента.",
      whoFor: [
        "Рестораны и кафе",
        "Фастфуд и кофейни",
        "Рестораны при отелях и лаунж-бары",
        "Любые заведения, где меню и цены часто меняются",
      ],
      benefits: [
        { title: "Без перепечатки", text: "Цену или блюдо обновляете в админ-панели за секунды — изменение сразу видно на всех столах." },
        { title: "Меньше нагрузки на официантов", text: "В часы пик гость не ждёт меню, а официант занимается подачей блюд." },
        { title: "Продаёт фото", text: "Фото и описания блюд упрощают выбор." },
        { title: "Несколько языков", text: "Меню можно показывать на узбекском, русском и английском." },
      ],
      problems: [
        "Перепечатка бумажного меню при каждом изменении цен",
        "Гости уходят, устав ждать меню в часы пик",
        "Нет переведённого меню для иностранных гостей",
      ],
      faq: [
        { question: "Нужно ли гостю устанавливать приложение?", answer: "Нет, достаточно обычной камеры телефона и браузера." },
        { question: "Сколько времени занимает запуск QR-меню?", answer: "Обычно 1-2 недели: загружаем блюда, фото и цены и передаём готовые QR-коды для каждого стола." },
        { question: "Можно ли принимать заказы через QR-меню?", answer: "Да, добавляется функция заказа — заказ попадает на экран кухни или официанта." },
      ],
    },
    en: {
      seoTitle: "QR Menu in Tashkent — Digital Menu for Restaurants & Cafes",
      metaDescription:
        "FRONTIX builds QR menus for restaurants and cafes in Tashkent, Uzbekistan: guests scan the table code, browse the menu and order. You update prices yourself.",
      keywords:
        "QR menu Tashkent, QR menu Uzbekistan, QR menu for restaurants, digital menu Tashkent, restaurant QR menu, digital menu for restaurants, restaurant digitalization",
      h1: "QR menus for restaurants and cafes in Tashkent",
      intro:
        "A QR menu is a digital system where guests scan the code on their table with a phone camera and browse the menu and order — no app required. FRONTIX launches QR menus with an admin panel for restaurants and cafes in Tashkent.",
      whoFor: [
        "Restaurants and cafes",
        "Fast food outlets and coffee shops",
        "Hotel restaurants and lounge bars",
        "Any venue whose menu and prices change often",
      ],
      benefits: [
        { title: "No reprinting", text: "Update a price or dish in the admin panel in seconds — the change shows on every table immediately." },
        { title: "Less load on waiters", text: "At peak hours guests don't wait for a menu, and waiters focus on serving." },
        { title: "Photos that sell", text: "Dish photos and descriptions make choosing easier." },
        { title: "Multiple languages", text: "The menu can be shown in Uzbek, Russian and English." },
      ],
      problems: [
        "Reprinting the paper menu every time prices change",
        "Guests leaving after waiting too long for a menu at peak hours",
        "No translated menu for foreign guests",
      ],
      faq: [
        { question: "Do guests need to install an app?", answer: "No, a regular phone camera and browser are enough." },
        { question: "How long does it take to launch a QR menu?", answer: "Usually 1-2 weeks: we load the dishes, photos and prices and hand over ready QR codes for every table." },
        { question: "Can the QR menu take orders?", answer: "Yes, an ordering feature can be added so orders go straight to the kitchen or waiter's screen." },
      ],
    },
  },
  "telegram-bot": {
    uz: {
      seoTitle: "Telegram bot yaratish Toshkent — biznes uchun Telegram bot",
      metaDescription:
        "FRONTIX Toshkentda biznes uchun Telegram bot yaratadi: 24/7 buyurtma va bron qabul qilish, avtomatik javoblar, to'lov va CRM bilan integratsiya. 1-2 haftada.",
      keywords:
        "Telegram bot yaratish Toshkent, Telegram bot O'zbekiston, biznes uchun Telegram bot, Telegram bot qilib berish, buyurtma boti, Telegram orqali avtomatlashtirish",
      h1: "Toshkentda biznes uchun Telegram bot yaratish",
      intro:
        "Telegram bot — mijozlardan buyurtma, savol va bron so'rovlarini kecha-kunduz qabul qiladigan va avtomatik javob beradigan tizim. FRONTIX Toshkentdagi bizneslar uchun to'lov, CRM va admin panel bilan bog'langan Telegram botlarni yaratadi.",
      whoFor: [
        "Telefon orqali buyurtma yoki bron qabul qiladigan bizneslar",
        "Restoran, salon, klinika, avtoservis va o'quv markazlari",
        "Instagram DM'da buyurtma qabul qiladigan onlayn do'konlar",
        "Mijozlarga eslatma va xabar yuborishi kerak bo'lgan kompaniyalar",
      ],
      benefits: [
        { title: "24/7 ishlaydi", text: "Bot band signal yoki ish vaqti bilan cheklanmaydi — mijoz istalgan vaqtda murojaat qiladi." },
        { title: "Buyurtmalar tartibli", text: "Har bir buyurtma yoki bron admin panelda ro'yxat bo'lib ko'rinadi, hech biri yo'qolmaydi." },
        { title: "Avtomatik eslatmalar", text: "Bron, to'lov yoki navbatdagi tashrif haqida mijozga o'zi eslatadi." },
        { title: "Integratsiya", text: "Click, Payme kabi to'lovlar va mavjud CRM bilan bog'lash mumkin." },
      ],
      problems: [
        "Band telefon liniyasi tufayli yo'qotilgan mijozlar",
        "Instagram DM'dagi buyurtmalarni qo'lda yozib borish",
        "Mijozlarning bir xil savollariga qayta-qayta javob berish",
      ],
      faq: [
        { question: "Telegram bot qancha vaqtda tayyor bo'ladi?", answer: "Ssenariy murakkabligiga qarab odatda 1-2 hafta." },
        { question: "Bot murakkab savollarga ham javob beradimi?", answer: "Asosiy ssenariylar oldindan belgilanadi, murakkab so'rovlarni bot jonli operatorga uzatadi." },
        { question: "Bot orqali to'lov qabul qilsa bo'ladimi?", answer: "Ha, Click, Payme yoki karta orqali to'lovni botga ulash mumkin." },
      ],
    },
    ru: {
      seoTitle: "Разработка Telegram-бота в Ташкенте — бот для бизнеса",
      metaDescription:
        "FRONTIX разрабатывает Telegram-ботов для бизнеса в Ташкенте: приём заказов и броней 24/7, автоответы, оплата и интеграция с CRM. Запуск за 1-2 недели.",
      keywords:
        "разработка Telegram-бота Ташкент, Telegram-бот Узбекистан, Telegram-бот для бизнеса, заказать Telegram-бота, бот для приёма заказов, автоматизация в Telegram",
      h1: "Разработка Telegram-ботов для бизнеса в Ташкенте",
      intro:
        "Telegram-бот — система, которая круглосуточно принимает заказы, вопросы и брони и отвечает клиентам автоматически. FRONTIX разрабатывает для бизнеса Ташкента Telegram-ботов, связанных с оплатой, CRM и админ-панелью.",
      whoFor: [
        "Бизнес, принимающий заказы или брони по телефону",
        "Рестораны, салоны, клиники, автосервисы и учебные центры",
        "Интернет-магазины, принимающие заказы в Direct",
        "Компании, которым нужно рассылать клиентам напоминания",
      ],
      benefits: [
        { title: "Работает 24/7", text: "Бот не ограничен занятой линией и рабочим временем — клиент обращается когда удобно." },
        { title: "Порядок в заказах", text: "Каждый заказ и бронь видны списком в админ-панели, ничего не теряется." },
        { title: "Автонапоминания", text: "Бот сам напоминает клиенту о брони, оплате или следующем визите." },
        { title: "Интеграции", text: "Можно подключить Click, Payme и вашу CRM." },
      ],
      problems: [
        "Клиенты, потерянные из-за занятой линии",
        "Ручная запись заказов из Direct",
        "Одни и те же вопросы клиентов снова и снова",
      ],
      faq: [
        { question: "Сколько времени занимает разработка бота?", answer: "Обычно 1-2 недели в зависимости от сложности сценария." },
        { question: "Отвечает ли бот на сложные вопросы?", answer: "Основные сценарии задаются заранее, а сложные запросы бот передаёт живому оператору." },
        { question: "Можно ли принимать оплату через бота?", answer: "Да, можно подключить оплату через Click, Payme или карту." },
      ],
    },
    en: {
      seoTitle: "Telegram Bot Development in Tashkent — Bots for Business",
      metaDescription:
        "FRONTIX develops Telegram bots for businesses in Tashkent, Uzbekistan: 24/7 orders and bookings, auto-replies, payments and CRM integration. Launch in 1-2 weeks.",
      keywords:
        "Telegram bot development, Telegram bot developer Tashkent, Telegram bot Uzbekistan, Telegram bot for business, custom Telegram bot, Telegram business automation",
      h1: "Telegram bot development for businesses in Tashkent",
      intro:
        "A Telegram bot takes orders, questions and bookings around the clock and replies to customers automatically. FRONTIX develops Telegram bots for Tashkent businesses, connected to payments, CRM and an admin panel.",
      whoFor: [
        "Businesses that take orders or bookings by phone",
        "Restaurants, salons, clinics, car services and training centres",
        "Online stores taking orders through Instagram DMs",
        "Companies that need to send customers reminders",
      ],
      benefits: [
        { title: "Works 24/7", text: "A bot isn't limited by busy lines or opening hours — customers reach you whenever it suits them." },
        { title: "Orders in order", text: "Every order and booking appears as a list in the admin panel, so nothing is lost." },
        { title: "Automatic reminders", text: "The bot reminds customers about bookings, payments or their next visit." },
        { title: "Integrations", text: "Connect Click, Payme and your existing CRM." },
      ],
      problems: [
        "Customers lost to a busy phone line",
        "Writing down Instagram DM orders by hand",
        "Answering the same customer questions again and again",
      ],
      faq: [
        { question: "How long does it take to build a Telegram bot?", answer: "Usually 1-2 weeks, depending on the complexity of the script." },
        { question: "Can the bot handle complex questions?", answer: "The main scripts are set in advance, and complex requests are handed to a live operator." },
        { question: "Can the bot accept payments?", answer: "Yes, payments via Click, Payme or card can be connected." },
      ],
    },
  },
  "online-ordering": {
    uz: {
      seoTitle: "Onlayn buyurtma tizimi Toshkent — restoran va do'konlar uchun",
      metaDescription:
        "FRONTIX Toshkentda onlayn buyurtma tizimini yaratadi: katalog, savat, Click/Payme to'lovi, yetkazib berishni kuzatish va barcha buyurtmalar bitta admin panelda.",
      keywords:
        "onlayn buyurtma tizimi Toshkent, onlayn buyurtma O'zbekiston, restoran uchun onlayn buyurtma, ovqat yetkazib berish sayti, internet do'kon yaratish, buyurtma tizimi yaratish",
      h1: "Toshkentda onlayn buyurtma tizimini yaratish",
      intro:
        "Onlayn buyurtma tizimi — mijoz sayt yoki bot orqali mahsulot tanlab, to'lov qilib, yetkazib berishni kuzatadigan platforma. FRONTIX Toshkentdagi restoran va do'konlar uchun buyurtmalarni Excel va daftar o'rniga bitta admin panelda yig'adigan tizim quradi.",
      whoFor: [
        "Yetkazib berish bilan ishlaydigan restoran va kafelar",
        "Onlayn va chakana do'konlar",
        "Oziq-ovqat va dorixona yetkazib berish xizmatlari",
        "Instagram va Telegram buyurtmalarini birlashtirmoqchi bo'lgan bizneslar",
      ],
      benefits: [
        { title: "Barcha kanallar bitta joyda", text: "Sayt, Telegram va Instagram buyurtmalari bitta admin panelda yig'iladi." },
        { title: "Onlayn to'lov", text: "Click, Payme kabi mahalliy to'lov tizimlari ulanadi." },
        { title: "Holatni kuzatish", text: "Mijoz buyurtmasi qayerdaligini o'zi ko'radi: qabul qilindi, tayyorlanmoqda, yo'lda." },
        { title: "Ombor bilan bog'liq", text: "Sotilgan mahsulot qoldig'i avtomatik kamayadi." },
      ],
      problems: [
        "Buyurtmalarni qo'lda yozib borishdagi xato va yo'qotishlar",
        "Mijozlarning \"buyurtmam qayerda?\" degan doimiy qo'ng'iroqlari",
        "Turli kanallar o'rtasida qoldiq mos kelmasligi",
      ],
      faq: [
        { question: "Bir nechta filial uchun ishlatsa bo'ladimi?", answer: "Ha, har bir filial o'z buyurtmalarini ko'radi, umumiy hisobot markazlashgan holda chiqadi." },
        { question: "O'z kuryerlarimiz bilan ishlaydimi?", answer: "Ha, buyurtma holatlari sizning kuryerlaringiz yoki tashqi yetkazib berish xizmatiga moslab sozlanadi." },
        { question: "Tizim qancha vaqtda tayyor bo'ladi?", answer: "Murakkablikka qarab odatda 2-6 hafta; aniq muddat konsultatsiyadan keyin belgilanadi." },
      ],
    },
    ru: {
      seoTitle: "Система онлайн-заказов в Ташкенте — для ресторанов и магазинов",
      metaDescription:
        "FRONTIX создаёт системы онлайн-заказов в Ташкенте: каталог, корзина, оплата Click/Payme, отслеживание доставки и все заказы в одной админ-панели.",
      keywords:
        "система онлайн-заказов Ташкент, онлайн-заказы Узбекистан, онлайн-заказ для ресторана, сайт доставки еды, разработка интернет-магазина, система заказов под ключ",
      h1: "Разработка систем онлайн-заказов в Ташкенте",
      intro:
        "Система онлайн-заказов — платформа, где клиент выбирает товар на сайте или в боте, оплачивает и отслеживает доставку. FRONTIX строит для ресторанов и магазинов Ташкента систему, которая собирает заказы в одной админ-панели вместо Excel и тетради.",
      whoFor: [
        "Рестораны и кафе с доставкой",
        "Интернет-магазины и розница",
        "Службы доставки продуктов и лекарств",
        "Бизнес, который хочет объединить заказы из Instagram и Telegram",
      ],
      benefits: [
        { title: "Все каналы в одном месте", text: "Заказы с сайта, из Telegram и Instagram собираются в одной админ-панели." },
        { title: "Онлайн-оплата", text: "Подключаются местные платёжные системы Click и Payme." },
        { title: "Отслеживание статуса", text: "Клиент сам видит, где заказ: принят, готовится, в пути." },
        { title: "Связь со складом", text: "Остаток проданного товара уменьшается автоматически." },
      ],
      problems: [
        "Ошибки и потери при ручной записи заказов",
        "Постоянные звонки «где мой заказ?»",
        "Остатки не совпадают между каналами продаж",
      ],
      faq: [
        { question: "Можно ли использовать для нескольких филиалов?", answer: "Да, каждый филиал видит свои заказы, а общий отчёт формируется централизованно." },
        { question: "Работает ли с нашими курьерами?", answer: "Да, статусы заказов настраиваются под ваших курьеров или внешнюю службу доставки." },
        { question: "Сколько времени занимает разработка?", answer: "Обычно 2-6 недель в зависимости от сложности; точный срок — после консультации." },
      ],
    },
    en: {
      seoTitle: "Online Ordering System Development in Tashkent",
      metaDescription:
        "FRONTIX builds online ordering systems in Tashkent, Uzbekistan: catalogue, cart, Click/Payme payments, delivery tracking and every order in one admin panel.",
      keywords:
        "online ordering system Tashkent, online ordering system Uzbekistan, online ordering for restaurants, food ordering website, restaurant ordering system, custom ordering system, online store development",
      h1: "Online ordering system development in Tashkent",
      intro:
        "An online ordering system is a platform where customers pick products on a website or bot, pay and track delivery. FRONTIX builds systems for Tashkent restaurants and shops that collect orders in one admin panel instead of Excel or a notebook.",
      whoFor: [
        "Restaurants and cafes offering delivery",
        "Online stores and retail",
        "Grocery and pharmacy delivery services",
        "Businesses wanting to combine Instagram and Telegram orders",
      ],
      benefits: [
        { title: "Every channel in one place", text: "Orders from the website, Telegram and Instagram land in one admin panel." },
        { title: "Online payments", text: "Local payment systems such as Click and Payme are connected." },
        { title: "Status tracking", text: "Customers see where their order is: received, being prepared, on the way." },
        { title: "Linked to stock", text: "Stock goes down automatically as items sell." },
      ],
      problems: [
        "Errors and lost orders from writing them down by hand",
        "Constant \"where is my order?\" calls",
        "Stock levels that don't match across sales channels",
      ],
      faq: [
        { question: "Can it be used for several branches?", answer: "Yes, each branch sees its own orders, while combined reports are produced centrally." },
        { question: "Does it work with our own couriers?", answer: "Yes, order statuses are configured for your couriers or an external delivery service." },
        { question: "How long does development take?", answer: "Usually 2-6 weeks depending on complexity; the exact timeline is set after the consultation." },
      ],
    },
  },
  "business-automation": {
    uz: {
      seoTitle: "Biznesni avtomatlashtirish va CRM Toshkent",
      metaDescription:
        "FRONTIX Toshkentda biznes jarayonlarini avtomatlashtiradi: CRM tizimi, avtomatik eslatmalar, hisobotlar, 1C va boshqa tizimlar bilan integratsiya, AI yordamida avtomatlashtirish.",
      keywords:
        "biznesni avtomatlashtirish Toshkent, CRM tizimi O'zbekiston, CRM yaratish, jarayonlarni avtomatlashtirish, biznes dasturi, AI avtomatlashtirish, 1C integratsiya",
      h1: "Toshkentda biznesni avtomatlashtirish va CRM",
      intro:
        "Biznesni avtomatlashtirish — qo'lda, Excel va daftarda bajariladigan takroriy ishlarni tizimga topshirish: mijozlar bazasi, buyurtmalar, to'lovlar, eslatmalar va hisobotlar. FRONTIX Toshkentdagi kompaniyalar uchun CRM tizimlari va avtomatlashtirilgan jarayonlarni yaratadi.",
      whoFor: [
        "Mijozlar bazasini Excel yoki daftarda yurituvchi kompaniyalar",
        "Klinika, o'quv markazi, fitnes-zal kabi abonement va bronli bizneslar",
        "Bir nechta xodim va filial bilan ishlaydigan kompaniyalar",
        "Qo'lda hisobot tayyorlashga ko'p vaqt sarflaydigan bizneslar",
      ],
      benefits: [
        { title: "Yagona mijozlar bazasi", text: "Har bir mijozning tarixi, buyurtmalari va to'lovlari bitta kartochkada." },
        { title: "Avtomatik eslatmalar", text: "To'lov muddati, abonement tugashi yoki navbatdagi tashrif haqida tizim o'zi eslatadi." },
        { title: "Real vaqtdagi hisobotlar", text: "Daromad, xodimlar samaradorligi va sotuvlar bo'yicha hisobotlar qo'lda hisoblanmaydi." },
        { title: "Integratsiya", text: "1C, Telegram bot, sayt va boshqa tizimlar API orqali bog'lanadi." },
      ],
      problems: [
        "Ma'lumotlar turli Excel fayllar va daftarlarda tarqoq",
        "Unutilgan to'lovlar, qo'ng'iroqlar va muddatlar",
        "Oy oxiridagi hisob-kitoblardagi xatolar",
      ],
      extra: {
        title: "CRM va AI yordamida avtomatlashtirish",
        text: "CRM tizimini biznesingiz jarayoniga moslab quramiz: bosqichlar, mas'ul xodimlar, eslatmalar va hisobotlar. Sun'iy intellekt kerak bo'lgan vazifalarda — masalan, mijozlarga avtomatik javob beruvchi AI-yordamchi — hamkorimiz Tezcode bilan birgalikda AI qatlamini qo'shamiz.",
      },
      faq: [
        { question: "Tayyor CRM'dan farqi nima?", answer: "Tayyor CRM'da biznesingiz tizimga moslashadi; biz esa tizimni sizning jarayoningizga moslab quramiz — ortiqcha funksiyasiz." },
        { question: "Mavjud ma'lumotlarimizni ko'chirsa bo'ladimi?", answer: "Ha, Excel'dagi mijozlar va boshqa ma'lumotlar yangi tizimga import qilinadi." },
        { question: "Xodimlar tizimni o'rganishi qiyin emasmi?", answer: "Interfeysni sodda qilib quramiz va ishga tushirishda xodimlarga tushuntirib beramiz." },
      ],
    },
    ru: {
      seoTitle: "Автоматизация бизнеса и CRM в Ташкенте",
      metaDescription:
        "FRONTIX автоматизирует бизнес-процессы в Ташкенте: CRM-система, автонапоминания, отчёты, интеграция с 1С и другими системами, автоматизация с помощью ИИ.",
      keywords:
        "автоматизация бизнеса Ташкент, CRM-система Узбекистан, разработка CRM, автоматизация бизнес-процессов, программа для бизнеса, ИИ-автоматизация, интеграция 1С",
      h1: "Автоматизация бизнеса и CRM в Ташкенте",
      intro:
        "Автоматизация бизнеса — это передача системе рутинной работы, которая ведётся вручную, в Excel и тетрадях: база клиентов, заказы, оплаты, напоминания и отчёты. FRONTIX создаёт для компаний Ташкента CRM-системы и автоматизированные процессы.",
      whoFor: [
        "Компании, которые ведут базу клиентов в Excel или тетради",
        "Бизнес с абонементами и записью — клиники, учебные центры, фитнес-залы",
        "Компании с несколькими сотрудниками и филиалами",
        "Бизнес, который тратит много времени на ручные отчёты",
      ],
      benefits: [
        { title: "Единая база клиентов", text: "История, заказы и оплаты каждого клиента — в одной карточке." },
        { title: "Автонапоминания", text: "Система сама напоминает о сроках оплаты, окончании абонемента и следующем визите." },
        { title: "Отчёты в реальном времени", text: "Выручка, эффективность сотрудников и продажи без ручных подсчётов." },
        { title: "Интеграции", text: "1С, Telegram-бот, сайт и другие системы связываются через API." },
      ],
      problems: [
        "Данные разбросаны по разным файлам Excel и тетрадям",
        "Забытые оплаты, звонки и сроки",
        "Ошибки в расчётах в конце месяца",
      ],
      extra: {
        title: "CRM и автоматизация с помощью ИИ",
        text: "Строим CRM под процессы вашего бизнеса: этапы, ответственные, напоминания и отчёты. Для задач, где нужен искусственный интеллект, — например, ИИ-ассистент, автоматически отвечающий клиентам, — добавляем слой ИИ вместе с нашим партнёром Tezcode.",
      },
      faq: [
        { question: "Чем это отличается от готовой CRM?", answer: "В готовой CRM бизнес подстраивается под систему, а мы строим систему под ваши процессы — без лишних функций." },
        { question: "Можно ли перенести наши текущие данные?", answer: "Да, клиенты из Excel и другие данные импортируются в новую систему." },
        { question: "Сложно ли сотрудникам освоить систему?", answer: "Мы делаем интерфейс простым и обучаем сотрудников при запуске." },
      ],
    },
    en: {
      seoTitle: "Business Automation & CRM Development in Tashkent",
      metaDescription:
        "FRONTIX automates business processes in Tashkent, Uzbekistan: CRM systems, automatic reminders, reports, integration with 1C and other systems, and AI automation.",
      keywords:
        "business automation Tashkent, business automation Uzbekistan, CRM development Tashkent, business process automation, workflow automation, AI automation Uzbekistan, business software",
      h1: "Business automation and CRM development in Tashkent",
      intro:
        "Business automation hands routine work done by hand, in Excel or in notebooks over to a system: the customer base, orders, payments, reminders and reports. FRONTIX builds CRM systems and automated workflows for companies in Tashkent.",
      whoFor: [
        "Companies keeping their customer base in Excel or notebooks",
        "Membership and booking businesses such as clinics, training centres and gyms",
        "Companies with several staff members and branches",
        "Businesses spending a lot of time on manual reports",
      ],
      benefits: [
        { title: "One customer database", text: "Every customer's history, orders and payments on one card." },
        { title: "Automatic reminders", text: "The system reminds you of payment dates, expiring memberships and next visits." },
        { title: "Real-time reports", text: "Revenue, staff performance and sales without manual counting." },
        { title: "Integrations", text: "1C, Telegram bots, websites and other systems connect via API." },
      ],
      problems: [
        "Data scattered across Excel files and notebooks",
        "Forgotten payments, calls and deadlines",
        "Errors in month-end calculations",
      ],
      extra: {
        title: "CRM and AI automation",
        text: "We build a CRM around your business processes: stages, responsible staff, reminders and reports. For tasks that need artificial intelligence — such as an AI assistant that answers customers automatically — we add an AI layer together with our partner Tezcode.",
      },
      faq: [
        { question: "How is this different from an off-the-shelf CRM?", answer: "With a ready-made CRM your business adapts to the system; we build the system around your processes, without features you don't need." },
        { question: "Can our existing data be migrated?", answer: "Yes, customers from Excel and other data are imported into the new system." },
        { question: "Will staff find it hard to learn?", answer: "We keep the interface simple and walk your team through it at launch." },
      ],
    },
  },
  "custom-software": {
    uz: {
      seoTitle: "Maxsus dasturiy ta'minot yaratish Toshkent — buyurtma dastur",
      metaDescription:
        "FRONTIX Toshkentda biznesingizga moslab maxsus dasturiy ta'minot yaratadi: tayyor dasturlar yetmagan joyda individual tizim, integratsiya va uzoq muddatli qo'llab-quvvatlash.",
      keywords:
        "dastur yaratish Toshkent, maxsus dasturiy ta'minot, buyurtma asosida dastur, dastur qilib beradigan kompaniya, dasturlash kompaniyasi O'zbekiston, biznes uchun dastur",
      h1: "Toshkentda biznes uchun maxsus dastur yaratish",
      intro:
        "Maxsus dasturiy ta'minot — tayyor dasturlar sizning jarayoningizga mos kelmaganda, aynan biznesingiz uchun noldan quriladigan tizim. FRONTIX Toshkentda smeta kalkulyatorlari, ombor tizimlari, ichki portallar kabi individual dasturlarni ishlab chiqadi.",
      whoFor: [
        "Tayyor CRM yoki dasturlar jarayoniga mos kelmagan kompaniyalar",
        "Ishlab chiqarish, logistika va qurilish kompaniyalari",
        "O'z mahsulotini (SaaS) yaratmoqchi bo'lgan startaplar",
        "Bir nechta tizimni bitta joyga birlashtirmoqchi bo'lgan bizneslar",
      ],
      benefits: [
        { title: "Aynan sizga mos", text: "Tizim sizning jarayoningiz asosida quriladi, ortiqcha funksiyasiz." },
        { title: "Masshtablanadi", text: "Biznes o'sgani sari yangi modullar va foydalanuvchilar qo'shiladi." },
        { title: "Integratsiya", text: "Mavjud buxgalteriya, ombor va boshqa tizimlar bilan API orqali bog'lanadi." },
        { title: "Uzoq muddatli qo'llab-quvvatlash", text: "Ishga tushirilgandan keyin ham yangilanish va texnik yordam." },
      ],
      problems: [
        "Excel'da murakkab hisob-kitoblar va ulardagi xatolar",
        "Bir-biri bilan bog'lanmagan bir nechta tizim",
        "Tayyor dasturga moslashish uchun jarayonni buzishga majbur bo'lish",
      ],
      faq: [
        { question: "Maxsus dastur qancha vaqtda tayyor bo'ladi?", answer: "Hajmga qarab farq qiladi; odatda birinchi ishlaydigan versiya bir necha haftada chiqadi, keyin bosqichma-bosqich kengaytiriladi." },
        { question: "Mavjud tizimlarimiz bilan ishlaydimi?", answer: "Ha, API orqali buxgalteriya, ombor va boshqa dasturlar bilan integratsiya qilinadi." },
        { question: "Ishga tushgandan keyin kim qo'llab-quvvatlaydi?", answer: "FRONTIX uzoq muddatli texnik qo'llab-quvvatlash va yangilanishlarni taklif qiladi." },
      ],
    },
    ru: {
      seoTitle: "Разработка ПО на заказ в Ташкенте — индивидуальные программы",
      metaDescription:
        "FRONTIX разрабатывает индивидуальное программное обеспечение в Ташкенте: системы под ваши процессы, интеграции и долгосрочная поддержка там, где готовые программы не подходят.",
      keywords:
        "разработка ПО на заказ Ташкент, индивидуальное программное обеспечение, разработка программ Узбекистан, софтверная компания Ташкент, программа для бизнеса на заказ",
      h1: "Разработка программного обеспечения на заказ в Ташкенте",
      intro:
        "Индивидуальное ПО — система, которую строят с нуля именно для вашего бизнеса, когда готовые программы не подходят к процессам. FRONTIX разрабатывает в Ташкенте калькуляторы смет, складские системы, внутренние порталы и другие программы под заказ.",
      whoFor: [
        "Компании, которым не подошли готовые CRM и программы",
        "Производственные, логистические и строительные компании",
        "Стартапы, создающие собственный продукт (SaaS)",
        "Бизнес, который хочет объединить несколько систем в одну",
      ],
      benefits: [
        { title: "Точно под вас", text: "Система строится на основе ваших процессов, без лишних функций." },
        { title: "Масштабируется", text: "По мере роста бизнеса добавляются новые модули и пользователи." },
        { title: "Интеграции", text: "Связь с бухгалтерией, складом и другими системами через API." },
        { title: "Долгосрочная поддержка", text: "Обновления и техническая помощь после запуска." },
      ],
      problems: [
        "Сложные расчёты в Excel и ошибки в них",
        "Несколько систем, не связанных между собой",
        "Необходимость ломать процессы под готовую программу",
      ],
      faq: [
        { question: "Сколько времени занимает разработка?", answer: "Зависит от объёма; обычно первая рабочая версия появляется за несколько недель, затем система расширяется поэтапно." },
        { question: "Будет ли работать с нашими системами?", answer: "Да, через API интегрируемся с бухгалтерией, складом и другими программами." },
        { question: "Кто поддерживает систему после запуска?", answer: "FRONTIX предлагает долгосрочную техническую поддержку и обновления." },
      ],
    },
    en: {
      seoTitle: "Custom Software Development in Tashkent, Uzbekistan",
      metaDescription:
        "FRONTIX is a software company in Tashkent building custom software around your processes: bespoke systems, integrations and long-term support where off-the-shelf tools fall short.",
      keywords:
        "custom software development Tashkent, custom software development Uzbekistan, software company Tashkent, software company Uzbekistan, business software development, bespoke software",
      h1: "Custom software development in Tashkent",
      intro:
        "Custom software is a system built from scratch for your business when off-the-shelf tools don't fit your processes. FRONTIX develops estimate calculators, warehouse systems, internal portals and other bespoke software in Tashkent.",
      whoFor: [
        "Companies for which ready-made CRMs and tools didn't fit",
        "Manufacturing, logistics and construction companies",
        "Startups building their own product (SaaS)",
        "Businesses wanting to bring several systems together",
      ],
      benefits: [
        { title: "Built for you", text: "The system is built around your processes, without unnecessary features." },
        { title: "Scales with you", text: "New modules and users are added as the business grows." },
        { title: "Integrations", text: "Connects to accounting, warehouse and other systems via API." },
        { title: "Long-term support", text: "Updates and technical help after launch." },
      ],
      problems: [
        "Complex calculations in Excel, and the errors in them",
        "Several systems that don't talk to each other",
        "Having to bend your processes to fit a ready-made tool",
      ],
      faq: [
        { question: "How long does custom software take?", answer: "It depends on scope; usually a first working version is ready within a few weeks and then extended in stages." },
        { question: "Will it work with our existing systems?", answer: "Yes, we integrate with accounting, warehouse and other software via API." },
        { question: "Who supports it after launch?", answer: "FRONTIX offers long-term technical support and updates." },
      ],
    },
  },
};
