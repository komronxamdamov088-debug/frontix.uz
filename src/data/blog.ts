import type { Service } from "@/data/services";
import type { Lang } from "@/i18n/translations";
import { blogRu } from "@/data/i18n/blog.ru";
import { blogEn } from "@/data/i18n/blog.en";

export interface BlogFaq {
  question: string;
  answer: string;
}

export interface BlogSection {
  heading: string;
  body: string;
}

export interface BlogPost {
  slug: string;
  /** Short label shown on the card and as the eyebrow on the post page. */
  category: string;
  title: string;
  /** Answer-first summary: the direct answer to the title's implied question, 1-2 sentences. */
  excerpt: string;
  publishDate: string;
  readMinutes: number;
  /** Which core service this guide naturally leads into, for the closing CTA + related link. */
  relatedService: Service["slug"];
  sections: BlogSection[];
  faq: BlogFaq[];
}

/** The translatable part of a post; ru/en live in src/data/i18n/blog.{ru,en}.ts. */
export type BlogPostText = Pick<BlogPost, "category" | "title" | "excerpt" | "sections" | "faq">;

// Uzbek source content, same rationale as src/data/industries.ts / solutions.ts:
// genuine educational guides (not fabricated FRONTIX stats or client claims)
// that build topical authority around the services FRONTIX offers and give
// Google/AI answer engines real indexable content to cite.
export const blogPosts: BlogPost[] = [
  {
    slug: "qr-menyu-nima-va-qanday-ishlaydi",
    category: "QR-menyu",
    title: "QR-menyu nima va u restoranga qanday foyda beradi",
    excerpt:
      "QR-menyu — mijoz stoldagi kodni telefon kamerasi bilan skanerlab, qog'oz menyusiz to'g'ridan-to'g'ri telefonda taomlar ro'yxatini ko'rish va buyurtma berish imkonini beruvchi raqamli tizim.",
    publishDate: "2026-09-12",
    readMinutes: 4,
    relatedService: "qr-menu",
    sections: [
      {
        heading: "QR-menyu qanday ishlaydi",
        body: "Har bir stolga o'ziga xos QR kod qo'yiladi. Mijoz uni telefon kamerasi bilan skanerlaydi va brauzerda ochiladigan sahifada taomlar ro'yxati, narxlari va rasmlari ko'rinadi — ilova o'rnatish shart emas. Ko'p tizimlarda mijoz shu yerning o'zida buyurtma ham beradi, buyurtma esa to'g'ridan-to'g'ri oshxona yoki ofitsiant ekraniga tushadi.",
      },
      {
        heading: "Qog'oz menyudan farqi",
        body: "Qog'oz menyuda narx yoki taom o'zgarganda butun menyuni qayta chop etish kerak bo'ladi. QR-menyuda esa admin panel orqali narx yoki mavjudlikni bir necha soniyada yangilash mumkin — o'zgarish barcha stollarda darhol ko'rinadi. Bu, ayniqsa, narxlar tez-tez o'zgaradigan yoki mavsumiy taomlar qo'shiladigan restoranlar uchun foydali.",
      },
      {
        heading: "Restoran uchun asosiy foyda",
        body: "Band soatlarda ofitsiantlar menyuni tushuntirish yoki buyurtmani qog'ozga yozib olish o'rniga faqat taomni yetkazishga e'tibor qaratadi. Mijoz esa navbat kutmasdan, o'ziga qulay tezlikda tanlov qiladi. Bundan tashqari, taom rasmlari va tavsiflari savdoni oshirishga yordam beradi — mijoz taomni ko'rib turib buyurtma beradi.",
      },
      {
        heading: "Joriy qilish uchun nima kerak",
        body: "Texnik jihatdan menyu tarkibi (taomlar, narxlar, rasmlar) va har bir stol uchun bosib chiqariladigan QR kod kerak bo'ladi. FRONTIX QR-menyu xizmati orqali bu jarayon odatda 1-2 hafta ichida, tayyor admin panel bilan birga ishga tushiriladi.",
      },
    ],
    faq: [
      {
        question: "QR-menyuni joriy qilish uchun maxsus ilova kerakmi?",
        answer: "Yo'q. Mijoz uchun oddiy telefon kamerasi va brauzer yetarli, alohida ilova o'rnatish shart emas.",
      },
      {
        question: "Menyuni o'zim yangilay olamanmi?",
        answer: "Ha, admin panel orqali narx, taom nomi yoki mavjudlik holatini istalgan vaqt o'zingiz o'zgartira olasiz.",
      },
      {
        question: "QR-menyu internet bo'lmasa ishlaydimi?",
        answer:
          "Yo'q, mijozning telefonida internet aloqasi (Wi-Fi yoki mobil internet) bo'lishi kerak, chunki menyu real vaqtda serverdan yuklanadi.",
      },
    ],
  },
  {
    slug: "telegram-bot-orqali-mijozlar-bilan-ishlash",
    category: "Telegram bot",
    title: "Telegram bot orqali mijozlar bilan ishlashni qanday avtomatlashtirish mumkin",
    excerpt:
      "Telegram bot — mijozlardan buyurtma, savol yoki bron so'rovlarini 24/7 qabul qilib, oldindan belgilangan ssenariy bo'yicha avtomatik javob beradigan va zarur bo'lganda operatorga ulaydigan tizim.",
    publishDate: "2026-09-13",
    readMinutes: 5,
    relatedService: "telegram-bot",
    sections: [
      {
        heading: "Telegram bot nima ish qiladi",
        body: "Bot mijoz yozgan xabar yoki bosgan tugmasiga qarab oldindan tuzilgan ssenariy bo'yicha javob beradi: menyuni ko'rsatadi, buyurtmani rasmiylashtiradi, bron vaqtini taklif qiladi yoki ko'p so'raladigan savollarga javob beradi. Bot band signal yoki ish vaqti bilan cheklanmaydi — kecha-yu kunduz ishlaydi.",
      },
      {
        heading: "Qaysi bizneslarga mos",
        body: "Telefon orqali buyurtma yoki bron qabul qiladigan har qanday biznes uchun foydali: restoranlar, go'zallik salonlari, klinikalar, avtoservislar, ta'lim markazlari. Ayniqsa, band soatlarda telefon liniyasi yetishmay qoladigan va shu sabab mijoz yo'qotiladigan bizneslar uchun eng katta samarani beradi.",
      },
      {
        heading: "Avtomatlashtirish qanday ishlaydi",
        body: "Oddiy so'rovlar (narx, ish vaqti, manzil, bo'sh joy) botning o'zi javob beradi. Murakkabroq yoki individual holatlarda bot suhbatni jonli operatorga uzatadi, shu bilan birga mijozning avvalgi yozishmalari va so'rovi operatorga to'liq ko'rinadi — mijoz hammasini qaytadan tushuntirishga majbur bo'lmaydi.",
      },
      {
        heading: "Boshqa tizimlar bilan integratsiya",
        body: "Bot alohida ishlashi ham, CRM yoki buyurtmalarni boshqarish tizimi bilan bog'langan holda ishlashi ham mumkin — bunda botga tushgan har bir buyurtma yoki bron avtomatik ravishda umumiy tizimga yoziladi, xodim uni qo'lda qayta kiritishi shart bo'lmaydi.",
      },
    ],
    faq: [
      {
        question: "Bot faqat oldindan yozilgan javoblar bilan cheklanadimi?",
        answer:
          "Asosiy ssenariylar oldindan belgilanadi, lekin bot murakkab yoki kutilmagan so'rovlarni jonli operatorga avtomatik uzatadi, shuning uchun mijoz javobsiz qolmaydi.",
      },
      {
        question: "Botni ishga tushirish qancha vaqt oladi?",
        answer:
          "Ssenariy murakkabligiga qarab odatda 1-2 hafta — kerakli buyurtma/bron oqimi va javob matnlari FRONTIX jamoasi bilan birgalikda tuziladi.",
      },
      {
        question: "Bitta bot bir nechta operatorga buyurtmani taqsimlay oladimi?",
        answer: "Ha, buyurtma yoki so'rov turiga qarab bot uni tegishli bo'lim yoki operatorga yo'naltirishi mumkin.",
      },
    ],
  },
  {
    slug: "kichik-biznes-uchun-veb-sayt-kerakmi",
    category: "Veb-sayt",
    title: "Kichik biznes uchun veb-sayt: qachon va nega kerak",
    excerpt:
      "Faqat Instagram sahifasiga tayanish mijozga narx, xizmat va ishonchlilik haqida to'liq ma'lumot bermaydi — veb-sayt qidiruv tizimlarida topilish va mijoz ishonchini shakllantirish uchun zarur bo'lgan nuqtada kerak bo'ladi.",
    publishDate: "2026-09-14",
    readMinutes: 4,
    relatedService: "website-development",
    sections: [
      {
        heading: "Instagram yetarlimi?",
        body: "Ijtimoiy tarmoq sahifasi tez ishga tushiriladi, lekin qidiruv tizimlarida (Google) deyarli ko'rinmaydi, ma'lumotlar xronologik tartibda tarqoq joylashadi va mijoz kerakli narx yoki xizmatni topish uchun ko'p skroll qilishga majbur bo'ladi. Veb-sayt esa strukturalangan, doimiy manzil bo'lib, qidiruv orqali yangi mijozlarni jalb qiladi.",
      },
      {
        heading: "Veb-sayt qachon aniq kerak bo'ladi",
        body: "Mijozlar \"[xizmat turi] + shahar\" deb Google'da qidira boshlagan, raqobatchilarning saytlari chiqib, sizniki chiqmayotgan paytda; yoki mijoz ishonchini oshirish uchun narxlar, portfolio, sertifikat va aloqa ma'lumotlarini bir joyda ko'rsatish kerak bo'lgan paytda veb-sayt zarur bo'ladi.",
      },
      {
        heading: "Minimal saytda nima bo'lishi kerak",
        body: "Xizmatlar ro'yxati va narxlar (yoki narx diapazoni), aniq aloqa ma'lumotlari (telefon, manzil, Telegram), bajarilgan ishlar yoki mijozlar fikri, va tezkor bog'lanish tugmasi — bular mijozning qaror qabul qilishini tezlashtiradigan minimal to'plam.",
      },
      {
        heading: "SEO nima uchun muhim",
        body: "Sayt bo'lishi yetarli emas — u qidiruv tizimida topilishi ham kerak. To'g'ri sarlavhalar, tavsiflar va tezkor yuklanish veb-saytni Google natijalarida yuqoriroq ko'rsatishga yordam beradi, aks holda sayt mavjud bo'lsa-da, mijozlar uni topa olmaydi.",
      },
    ],
    faq: [
      {
        question: "Instagram bilan veb-saytni bir vaqtda ishlatsa bo'ladimi?",
        answer:
          "Ha, ular bir-birini to'ldiradi: Instagram — kundalik jonli kontent va mijoz bilan tezkor aloqa uchun, veb-sayt — qidiruv orqali topilish va to'liq ma'lumot berish uchun.",
      },
      {
        question: "Kichik biznes uchun sayt qancha vaqtda tayyor bo'ladi?",
        answer: "Kontent va dizayn murakkabligiga qarab odatda 1-3 hafta ichida ishga tushiriladi.",
      },
      {
        question: "Saytni keyinchalik o'zim yangilay olamanmi?",
        answer: "Ha, admin panel orqali matn, rasm va narxlarni dasturchiga murojaat qilmasdan o'zingiz yangilashingiz mumkin.",
      },
    ],
  },
];

const blogTranslations: Record<Exclude<Lang, "uz">, Record<string, BlogPostText>> = { ru: blogRu, en: blogEn };

function localizePost(post: BlogPost, lang: Lang): BlogPost {
  const text = lang === "uz" ? undefined : blogTranslations[lang][post.slug];
  return text ? { ...post, ...text } : post;
}

export function getBlogPosts(lang: Lang = "uz"): BlogPost[] {
  return blogPosts.map((post) => localizePost(post, lang));
}

export function getBlogPost(slug: string, lang: Lang = "uz"): BlogPost | undefined {
  const post = blogPosts.find((p) => p.slug === slug);
  return post && localizePost(post, lang);
}
