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
  {
    slug: "onlayn-buyurtma-tizimi-restoran-uchun",
    category: "Onlayn buyurtma",
    title: "Restoran va do'kon uchun onlayn buyurtma tizimi: nima kerak va qanday ishlaydi",
    excerpt:
      "Onlayn buyurtma tizimi — mijoz katalogdan mahsulot tanlab, savatga qo'shib, Click yoki Payme orqali to'lab, buyurtmani saytdan yoki Telegramdan berishi mumkin bo'lgan, buyurtma esa avtomatik tarzda xodimga tushadigan tizim.",
    publishDate: "2026-10-11",
    readMinutes: 5,
    relatedService: "online-ordering",
    sections: [
      {
        heading: "Onlayn buyurtma tizimi nimalardan iborat",
        body: "Tizim odatda to'rt qismdan tashkil topadi: mahsulot yoki taomlar katalogi, savat va buyurtma rasmiylashtirish sahifasi, onlayn to'lov (Click, Payme) va xodim uchun buyurtmalarni ko'radigan admin panel. Mijoz telefon yoki kompyuterdan buyurtma beradi, xodim esa uni bir joyda ko'rib, holatini (qabul qilindi, tayyorlanmoqda, yo'lda) yangilab boradi.",
      },
      {
        heading: "Telefon orqali buyurtmadan farqi",
        body: "Telefon orqali buyurtmada operator band bo'lsa, mijoz kutadi yoki boshqa joyga o'tib ketadi; buyurtma qo'lda yoziladi va xato ketishi mumkin. Onlayn tizimda mijoz buyurtmani o'zi, to'g'ri narx va tarkib bilan kiritadi, shu sababli xatolar kamayadi, operator esa faqat tasdiqlash va yetkazib berishga e'tibor beradi.",
      },
      {
        heading: "Qaysi bizneslarga mos",
        body: "Restoran va kafelar (yetkazib berish yoki olib ketish), oziq-ovqat va kiyim do'konlari, gul va tort buyurtma qiladigan kichik ishlab chiqaruvchilar, shuningdek, katalogi bor har qanday xizmat biznesi uchun. Asosiy shart — mahsulot yoki xizmatlar aniq ro'yxat va narxga ega bo'lishi.",
      },
      {
        heading: "Saytmi yoki Telegram botmi",
        body: "Tizimni veb-sayt ko'rinishida yoki Telegram bot ichida qurish mumkin. Sayt qidiruv tizimidan yangi mijoz olib keladi, Telegram bot esa doimiy mijozlar uchun qulay: ular ilova o'rnatmasdan, o'zi ishlatadigan messenjerda buyurtma beradi. Ko'p bizneslar ikkalasini birga ishlatadi, buyurtmalar esa bitta panelga tushadi.",
      },
      {
        heading: "Ishga tushirish uchun nima kerak",
        body: "Mahsulot yoki taomlar ro'yxati, narxlar, rasmlar, yetkazib berish shartlari va to'lov usullari. FRONTIX onlayn buyurtma tizimini odatda 2-4 hafta ichida, Click/Payme ulanishi va admin panel bilan birga ishga tushiradi.",
      },
    ],
    faq: [
      {
        question: "Onlayn buyurtma tizimida Click va Payme orqali to'lov qabul qilish mumkinmi?",
        answer: "Ha, tizimga Click yoki Payme ulanadi, mijoz buyurtma uchun onlayn to'laydi yoki naqd to'lovni tanlaydi. Ulash uchun biznesning tegishli to'lov tizimi bilan shartnomasi bo'lishi kerak.",
      },
      {
        question: "Buyurtmalarni qayerda ko'raman?",
        answer: "Admin panelda: har bir buyurtma, uning tarkibi, summasi va holati ko'rinadi. Istasangiz, yangi buyurtma haqida Telegramga xabar ham keladi.",
      },
      {
        question: "Tizimni yetkazib berish xizmati bilan bog'lash mumkinmi?",
        answer: "Ha, yetkazib berish narxi va hududi tizimda sozlanadi, kerak bo'lsa buyurtma ma'lumoti kuryer yoki tashqi xizmatga avtomatik uzatiladi.",
      },
    ],
  },
  {
    slug: "crm-nima-kichik-biznesga-kerakmi",
    category: "CRM",
    title: "CRM nima va kichik biznesga kerakmi",
    excerpt:
      "CRM — mijozlar, buyurtmalar, to'lovlar va aloqa tarixini Excel yoki daftar o'rniga bitta tizimda saqlaydigan va takroriy ishlarni (eslatma, hisobot) avtomatlashtiradigan dastur.",
    publishDate: "2026-10-11",
    readMinutes: 5,
    relatedService: "business-automation",
    sections: [
      {
        heading: "CRM nima",
        body: "CRM (Customer Relationship Management) — mijozlar bilan munosabatlarni boshqarish tizimi. U har bir mijoz kim, nima buyurtma bergan, qachon to'lagan, oxirgi marta qachon bog'langanini bir joyda saqlaydi. Natijada ma'lumot daftar, Excel va xodimning xotirasi bo'ylab tarqoq yotmaydi.",
      },
      {
        heading: "Qachon Excel yetmay qoladi",
        body: "Mijozlar yoki buyurtmalar kam bo'lsa, jadval yetarli. Lekin xodimlar ikkitadan oshganda, bir mijozni bir nechta kishi yuritganda yoki eslatma va hisobotni har kuni qo'lda tayyorlashga soatlab vaqt ketganda, jadvalda xato, takrorlanish va yo'qolgan so'rovlar paydo bo'la boshlaydi. Aynan shu nuqtada CRM foyda keltiradi.",
      },
      {
        heading: "CRM nimalarni avtomatlashtiradi",
        body: "Mijozga to'lov yoki uchrashuv haqida eslatma yuborish, yangi so'rovni mas'ul xodimga biriktirish, kunlik va oylik hisobotlarni yig'ish, qarzdorlar ro'yxatini yuritish, ombor qoldig'i kamayganda ogohlantirish. Bularni xodim qo'lda qilmaydi, tizim o'zi bajaradi.",
      },
      {
        heading: "Tayyor CRM yoki maxsus tizim",
        body: "Tayyor CRM tez ishga tushadi va ko'p bizneslarga yetarli. Biznes jarayoni o'ziga xos bo'lsa (masalan, klinikada qabul jadvali, mehmonxonada xona bandligi, do'konda kassa va ombor), sohaga moslab qurilgan tizim qulayroq. FRONTIX ikkala yo'lni taklif qiladi: sohaga tayyor FRX Business, FRX Hotel, FRX MED mahsulotlari va buyurtma asosidagi maxsus tizimlar.",
      },
      {
        heading: "CRM'ga o'tishni qanday boshlash kerak",
        body: "Avval qaysi ishlar eng ko'p vaqt oladi va qayerda xato ko'p ketishini aniqlang, so'ng shu qismdan boshlang. Hamma narsani bir kunda ko'chirishning keragi yo'q: avval mijozlar bazasi va buyurtmalar, keyin eslatmalar va hisobotlar.",
      },
    ],
    faq: [
      {
        question: "CRM tizimini faqat katta kompaniyalar ishlatadimi?",
        answer: "Yo'q. Mijozlari va buyurtmalari doimiy ko'payib borayotgan kichik biznes, ayniqsa do'kon, klinika, salon yoki o'quv markazi uchun ham CRM foydali, chunki ma'lumot yo'qolmaydi va hisobot avtomatik bo'ladi.",
      },
      {
        question: "Mavjud Excel ma'lumotlarini CRM'ga ko'chirish mumkinmi?",
        answer: "Ha, mijozlar va mahsulotlar ro'yxati odatda import qilinadi, shuning uchun tizimga o'tishda ma'lumotni qaytadan kiritish shart emas.",
      },
      {
        question: "CRM'ni ishga tushirish qancha vaqt oladi?",
        answer: "Tayyor yechim bilan bir necha kun, maxsus tizim bilan odatda bir necha hafta. Aniq muddat bepul konsultatsiyadan keyin belgilanadi.",
      },
    ],
  },
  {
    slug: "sayt-yaratish-narxi-nimaga-bogliq",
    category: "Veb-sayt",
    title: "Sayt yaratish narxi nimaga bog'liq va buyurtma berishdan oldin nimani so'rash kerak",
    excerpt:
      "Sayt narxi uning turi (vizitka, korporativ, onlayn do'kon), sahifalar soni, dizayn murakkabligi, to'lov va boshqa tizimlar bilan integratsiya hamda muddatga bog'liq; shuning uchun aniq narx talabdan keyin yozma taklif sifatida beriladi.",
    publishDate: "2026-10-11",
    readMinutes: 5,
    relatedService: "website-development",
    sections: [
      {
        heading: "Narxni nimalar belgilaydi",
        body: "Birinchi omil — sayt turi: bir sahifali vizitka, ko'p sahifali korporativ sayt va katalog hamda savatli onlayn do'kon hajmi jihatidan farq qiladi. Keyingi omillar: sahifalar soni, individual dizayn yoki tayyor shablon, matn va rasmlarni kim tayyorlashi, to'lov (Click, Payme), CRM yoki Telegram bilan integratsiya, uch tilli versiya va muddat.",
      },
      {
        heading: "Shablon va individual dizayn",
        body: "Shablon asosidagi sayt tezroq va arzonroq ishga tushadi, lekin boshqa saytlarga o'xshab ketadi va brend xususiyatini kam ko'rsatadi. Individual dizayn brendga moslab chiziladi, mijoz ishonchi uchun foydali, lekin ko'proq vaqt va byudjet talab qiladi.",
      },
      {
        heading: "Faqat narxga qarab tanlamang",
        body: "Arzon taklif ko'pincha qo'llab-quvvatlash, tezlik, mobilga moslashuv yoki qidiruv tizimi uchun sozlashni o'z ichiga olmaydi. Keyin bularni alohida to'lashga to'g'ri keladi. Shuning uchun taklifda aynan nima kirgani yozilgan bo'lishi muhim.",
      },
      {
        heading: "Buyurtma berishdan oldin nimani so'rash kerak",
        body: "So'rang: aniq muddat va bosqichlar, to'lov tartibi (bosqichma-bosqich yoki oldindan), saytning telefonda ishlashi, SEO uchun asosiy sozlamalar kiradimi, ishga tushgandan keyin texnik qo'llab-quvvatlash bormi, sayt kodi va domen kimning nomiga rasmiylashtirilishi. Bularning barchasi yozma kelishilgan bo'lsin.",
      },
      {
        heading: "FRONTIX qanday ishlaydi",
        body: "FRONTIX har bir loyihani alohida baholaydi: avval bepul konsultatsiya, undan keyin muddat va tarkibi aniq yozilgan taklif. Loyiha odatda 1-6 hafta ichida tayyor bo'ladi, to'lov bosqichma-bosqich amalga oshiriladi, ishga tushgandan keyin esa texnik qo'llab-quvvatlash taklif qilinadi.",
      },
    ],
    faq: [
      {
        question: "Sayt narxini oldindan aniq bilish mumkinmi?",
        answer: "Faqat talablar aniqlangandan keyin. Sayt turi, sahifalar soni va integratsiyalarga qarab narx o'zgaradi, shuning uchun FRONTIX bepul konsultatsiyadan so'ng yozma taklif beradi.",
      },
      {
        question: "Sayt tayyor bo'lgandan keyin qo'shimcha to'lovlar bo'ladimi?",
        answer: "Domen va hosting kabi yillik xarajatlar, shuningdek, texnik qo'llab-quvvatlash alohida kelishiladi. Taklifda bu qismlar oldindan aniq yozilgan bo'lishi kerak.",
      },
      {
        question: "Sayt qancha vaqtda tayyor bo'ladi?",
        answer: "Murakkablikka qarab odatda 1-6 hafta. Oddiy vizitka sayt tezroq, onlayn do'kon yoki maxsus tizim esa ko'proq vaqt oladi.",
      },
    ],
  },
  {
    slug: "it-xizmatlar-narxi-toshkent",
    category: "IT xizmatlar narxi",
    title: "Toshkentda IT xizmatlar narxi 2026: sayt, Telegram bot, QR-menyu va CRM qancha turadi",
    excerpt: "Toshkentda FRONTIX narxlari: veb-sayt $350, admin panelli sayt $550, QR-menyu $50 dan, Telegram bot $250 dan, CRM 250 000 so'mdan. Murakkab loyihalar talabga qarab alohida baholanadi.",
    publishDate: "2026-11-22",
    readMinutes: 5,
    relatedService: "website-development",
    sections: [
        { heading: "Asosiy narxlar bir qarashda", body: "Veb-sayt — $350. Kontentni o'zingiz boshqaradigan admin panelli sayt — $550. QR-menyu — $50 dan. Telegram bot — $250 dan. CRM tizimi — 250 000 so'mdan. Maxsus dasturlar va murakkab integratsiyalar funksionallikka qarab individual baholanadi." },
        { heading: "Narxga nimalar ta'sir qiladi", body: "Funksiyalar soni, dizayn murakkabligi, to'lov tizimlari (Click, Payme) va CRM yoki boshqa tizimlar bilan integratsiya, shuningdek muddat. Oddiy loyiha 1-2 hafta, murakkabi bir necha hafta oladi." },
        { heading: "Qaysi xizmat sizga kerak", body: "Mijozlar sizni internetda topishi kerak bo'lsa — sayt. Buyurtmalarni Telegram orqali qabul qilmoqchi bo'lsangiz — Telegram bot. Restoran yoki kafe bo'lsa — QR-menyu. Mijozlar va sotuvlarni tartibga solish kerak bo'lsa — CRM. Ko'pincha bular birga ishlatiladi." },
        { heading: "Arzon taklifdan oldin nimani tekshirish kerak", body: "Taklifda nima kirganini so'rang: dizayn, telefonga moslashuv, domen va hosting, texnik qo'llab-quvvatlash, kodga egalik. Narx bir xil ko'rinsa ham, tarkib har xil bo'lishi mumkin." },
        { heading: "Aniq narxni qanday bilish mumkin", body: "FRONTIX'ga loyihangiz haqida qisqacha yozing: bepul konsultatsiya o'tkazib, muddat va tarkibi aniq yozilgan taklif beramiz." },
      ],
    faq: [
        { question: "Sayt yaratish qancha turadi?", answer: "FRONTIX'da veb-sayt $350, admin panelli sayt $550." },
        { question: "Telegram bot narxi qancha?", answer: "Telegram bot $250 dan boshlanadi, aniq narx funksiyalarga bog'liq." },
        { question: "QR-menyu narxi qancha?", answer: "QR-menyu $50 dan boshlanadi." },
        { question: "CRM tizimi qancha turadi?", answer: "CRM 250 000 so'mdan boshlanadi; maxsus tizimlar alohida baholanadi." },
      ],
  },
  {
    slug: "it-kompaniya-qanday-tanlash-toshkent",
    category: "IT kompaniya tanlash",
    title: "Toshkentda IT kompaniyani qanday tanlash kerak: 7 ta tekshiruv",
    excerpt: "IT kompaniya tanlashda portfolio, yozma shartnoma va taklif tarkibi, muddat, qo'llab-quvvatlash, kodga egalik, to'lov tartibi va aloqa tezligini tekshiring; faqat narxga qarab tanlash keyin qo'shimcha xarajatga olib keladi.",
    publishDate: "2026-11-22",
    readMinutes: 5,
    relatedService: "custom-software",
    sections: [
        { heading: "1. Portfolio va haqiqiy loyihalar", body: "Kompaniyaning tugallangan ishlarini ko'rib chiqing va ularni ochib ko'ring: ishlayaptimi, telefonda qulaymi, tez ochiladimi." },
        { heading: "2. Yozma taklif va shartnoma", body: "Ish hajmi, bosqichlar, muddat va narx yozma bo'lishi kerak. Og'zaki kelishuv keyinchalik tortishuv keltirib chiqaradi." },
        { heading: "3. Aniq muddat va bosqichlar", body: "Yaxshi kompaniya loyihani bosqichlarga bo'lib, har bosqichda natijani ko'rsatadi." },
        { heading: "4. To'lov tartibi", body: "Bosqichma-bosqich to'lov ikki tomon uchun ham xavfsizroq. To'liq oldindan to'lovdan ehtiyot bo'ling." },
        { heading: "5. Kod va domenga egalik", body: "Sayt yoki dastur kodi va domen kimning nomiga rasmiylashtirilishini oldindan so'rang." },
        { heading: "6. Ishga tushgandan keyingi qo'llab-quvvatlash", body: "Xato chiqsa yoki o'zgartirish kerak bo'lsa, kim va qancha vaqtda yordam berishini bilib oling." },
        { heading: "7. Aloqa tezligi", body: "Dastlabki savollarga qanchalik tez va tushunarli javob berishi keyingi hamkorlik sifatini ko'rsatadi." },
        { heading: "FRONTIX shu tamoyillarda ishlaydi", body: "FRONTIX sayt, Telegram bot, QR-menyu, onlayn buyurtma, CRM va maxsus dasturlarni yaratadi. Avval bepul konsultatsiya, keyin muddat va tarkibi aniq yozilgan taklif beriladi." },
      ],
    faq: [
        { question: "IT kompaniya tanlashda eng muhim narsa nima?", answer: "Yozma shartnoma va taklif tarkibi, tugallangan loyihalar portfoliosi hamda ishga tushgandan keyingi qo'llab-quvvatlash." },
        { question: "Frilanser yoki kompaniya — qaysi biri yaxshi?", answer: "Kichik bir martalik ish uchun frilanser yetarli bo'lishi mumkin; uzoq muddatli qo'llab-quvvatlash va bir nechta mutaxassis kerak bo'lsa, kompaniya ishonchliroq." },
      ],
  },
  {
    slug: "telegram-bot-yaratish-narxi-toshkent",
    category: "Telegram bot",
    title: "Telegram bot yaratish narxi: $250 dan, nimaga qarab o'zgaradi",
    excerpt: "FRONTIX'da Telegram bot yaratish $250 dan boshlanadi; yakuniy narx buyurtma qabul qilish, to'lov (Click, Payme), CRM integratsiyasi va admin panel kabi funksiyalarga bog'liq.",
    publishDate: "2026-11-22",
    readMinutes: 4,
    relatedService: "telegram-bot",
    sections: [
        { heading: "Telegram bot nima uchun kerak", body: "Bot buyurtma va bronni 24/7 qabul qiladi, tez-tez beriladigan savollarga avtomatik javob beradi va mijozlarni bazada saqlaydi. Mijoz ilova o'rnatmaydi, u allaqachon Telegramda." },
        { heading: "Narxga nima ta'sir qiladi", body: "Funksiyalar soni, to'lov tizimlari bilan integratsiya, CRM yoki boshqa tizimlarga ulanish, admin panel, ko'p tilli interfeys va muddat." },
        { heading: "Oddiy va murakkab bot", body: "Oddiy bot savollarga javob beradi va murojaat qabul qiladi. Murakkab bot katalog, savat, to'lov va buyurtma kuzatuvini o'z ichiga oladi; unga ko'proq vaqt kerak." },
        { heading: "Qancha vaqt oladi", body: "Oddiy bot odatda bir necha kun va 1-2 hafta oralig'ida, murakkabi ko'proq. Aniq muddat konsultatsiyadan keyin belgilanadi." },
      ],
    faq: [
        { question: "Telegram bot qancha turadi?", answer: "FRONTIX'da $250 dan; aniq narx funksiyalarga bog'liq." },
        { question: "Botga to'lov qo'shish mumkinmi?", answer: "Ha, Click va Payme kabi to'lov tizimlari bilan integratsiya qilish mumkin." },
        { question: "Botni CRM bilan bog'lasa bo'ladimi?", answer: "Ha, buyurtmalar va mijozlar CRM'ga avtomatik tushishi mumkin." },
      ],
  },
  {
    slug: "qr-menyu-narxi-toshkent",
    category: "QR-menyu",
    title: "QR-menyu narxi: $50 dan, restoran va kafe uchun nimaga e'tibor berish kerak",
    excerpt: "FRONTIX'da QR-menyu $50 dan boshlanadi; narx taomlar soni, onlayn buyurtma, admin panel va dizayn murakkabligiga qarab o'zgaradi.",
    publishDate: "2026-11-22",
    readMinutes: 4,
    relatedService: "qr-menu",
    sections: [
        { heading: "QR-menyu qancha turadi", body: "FRONTIX'da QR-menyu $50 dan boshlanadi. Oddiy menyu ko'rinishi arzonroq, onlayn buyurtma va oshxona bilan bog'lash qo'shilsa narx oshadi." },
        { heading: "Narxga nima ta'sir qiladi", body: "Taomlar va toifalar soni, rasmlar, ko'p tillilik, onlayn buyurtma, to'lov, admin panel orqali narxni o'zgartirish imkoni va brend dizayni." },
        { heading: "Qog'oz menyuga nisbatan tejash", body: "Narx yoki taom o'zgarganda menyuni qayta chop etish kerak emas: o'zgarish admin panel orqali darhol barcha stollarda ko'rinadi." },
        { heading: "Ishga tushirish", body: "Menyu tarkibi (taomlar, narxlar, rasmlar) va har bir stol uchun QR kod kerak. Odatda 1-2 hafta ichida tayyor bo'ladi." },
      ],
    faq: [
        { question: "QR-menyu narxi qancha?", answer: "FRONTIX'da $50 dan." },
        { question: "Narxni o'zim o'zgartira olamanmi?", answer: "Ha, admin panel orqali narx va taomlarni o'zingiz yangilaysiz." },
        { question: "Mijoz ilova o'rnatishi kerakmi?", answer: "Yo'q, QR kodni telefon kamerasi bilan skanerlash kifoya." },
      ],
  },
  {
    slug: "biznesni-avtomatlashtirish-toshkent",
    category: "Avtomatlashtirish",
    title: "Biznesni avtomatlashtirish Toshkentda: nimani avtomatlashtirish mumkin va qayerdan boshlash kerak",
    excerpt: "Biznesni avtomatlashtirish — takrorlanuvchi ishlarni (buyurtma qabul qilish, mijozlar bazasi, eslatmalar, hisobotlar) dastur zimmasiga yuklash; odatda CRM yoki Telegram bot bilan boshlanadi va CRM 250 000 so'mdan boshlanadi.",
    publishDate: "2026-11-22",
    readMinutes: 5,
    relatedService: "business-automation",
    sections: [
        { heading: "Nimani avtomatlashtirish mumkin", body: "Mijozlar va so'rovlar bazasini yuritish, buyurtmalarni qabul qilish, mijozga avtomatik eslatma va javob yuborish, hisobot va statistikani tayyorlash, to'lovlarni qayd etish, xodimlar vazifalarini kuzatish." },
        { heading: "Qayerdan boshlash kerak", body: "Eng ko'p vaqt oladigan va xato qilinadigan jarayonni tanlang. Odatda bu mijozlar bilan ishlash: so'rov qayerdan kelgani, kim javob bergani, nima kelishilgani daftarda yoki Excel'da yo'qolib ketadi. Shuning uchun birinchi qadam ko'pincha CRM bo'ladi." },
        { heading: "CRM va Telegram bot birgalikda", body: "Mijoz Telegram bot orqali yozadi, so'rov avtomatik CRM'ga tushadi, menejerga xabar boradi. Qo'lda ko'chirish yo'qoladi, javob tezlashadi." },
        { heading: "Qancha turadi", body: "FRONTIX'da CRM 250 000 so'mdan, Telegram bot $250 dan boshlanadi. Biznesingizga moslangan murakkab tizimlar funksionallikka qarab alohida baholanadi." },
        { heading: "Qanday boshlash mumkin", body: "FRONTIX'ga biznesingiz va qaysi jarayon sizni ko'proq vaqtingizni oladi, shuni yozing. Bepul konsultatsiyada nimani avtomatlashtirish foydali ekanini va muddatini aytamiz." },
      ],
    faq: [
        { question: "Biznesni avtomatlashtirish nimadan boshlanadi?", answer: "Eng ko'p vaqt oladigan jarayonni aniqlashdan; ko'pincha bu mijozlar bilan ishlash va CRM." },
        { question: "CRM qancha turadi?", answer: "FRONTIX'da 250 000 so'mdan boshlanadi." },
        { question: "Kichik biznesga avtomatlashtirish kerakmi?", answer: "Agar buyurtmalar va mijozlar qo'lda yuritilib, xato va kechikish bo'layotgan bo'lsa, ha, kichik biznes ham tez foyda ko'radi." },
      ],
  },
  {
    slug: "crm-narxi-toshkent",
    category: "CRM",
    title: "CRM tizimi narxi Toshkentda: 250 000 so'mdan, narx nimaga bog'liq",
    excerpt: "FRONTIX'da CRM tizimi 250 000 so'mdan boshlanadi; yakuniy narx foydalanuvchilar soni, bosqichlar, integratsiyalar (Telegram, to'lov, 1C) va hisobotlar murakkabligiga bog'liq.",
    publishDate: "2026-11-22",
    readMinutes: 4,
    relatedService: "business-automation",
    sections: [
        { heading: "CRM nima uchun kerak", body: "CRM mijozlar, so'rovlar va kelishuvlarni bir joyda saqlaydi: kim yozgan, kim javob bergan, keyingi qadam nima. Daftar va Excel'dagi yo'qolgan so'rovlar yo'qoladi." },
        { heading: "Narxga nima ta'sir qiladi", body: "Foydalanuvchilar soni, sotuv bosqichlari, Telegram bot va to'lov tizimlari bilan integratsiya, hisobotlar, import qilinadigan eski ma'lumotlar va dizayn." },
        { heading: "Tayyor yoki maxsus CRM", body: "Tayyor yechim tez va arzon ishga tushadi, lekin jarayoningizga to'liq mos kelmasligi mumkin. Maxsus CRM sizning biznes jarayoningizga moslab quriladi, ko'proq vaqt oladi." },
        { heading: "Narx va muddat", body: "FRONTIX'da CRM 250 000 so'mdan boshlanadi. Muddat murakkablikka qarab bir necha kundan bir necha haftagacha; aniq narx va muddat bepul konsultatsiyadan keyin yozma taklifda beriladi." },
      ],
    faq: [
        { question: "CRM qancha turadi?", answer: "FRONTIX'da 250 000 so'mdan boshlanadi." },
        { question: "CRM'ni Telegram bot bilan bog'lash mumkinmi?", answer: "Ha, so'rovlar botdan CRM'ga avtomatik tushadi." },
        { question: "Qancha vaqtda ishga tushadi?", answer: "Murakkablikka qarab bir necha kundan bir necha haftagacha." },
      ],
  },
  {
    slug: "telegram-bot-biznes-uchun-soha-boyicha",
    category: "Telegram bot",
    title: "Telegram bot biznes uchun: salon, restoran va yetkazib berish xizmatida nima qiladi",
    excerpt: "Telegram bot salonda yozilishni, restoranda buyurtma va bronni, yetkazib berishda buyurtma holatini avtomatik qabul qiladi va javob beradi; FRONTIX'da bot $250 dan boshlanadi.",
    publishDate: "2026-11-22",
    readMinutes: 4,
    relatedService: "telegram-bot",
    sections: [
        { heading: "Go'zallik saloni uchun", body: "Bot mijozni xizmat va vaqtga yozadi, eslatma yuboradi, narxlar va manzil haqidagi savollarga javob beradi. Administrator telefonda band bo'lmaydi." },
        { heading: "Restoran va kafe uchun", body: "Bot menyuni ko'rsatadi, buyurtma va stol broni qabul qiladi, buyurtmani xodimga uzatadi, to'lovni Click yoki Payme orqali olishi mumkin." },
        { heading: "Yetkazib berish xizmati uchun", body: "Bot buyurtmani qabul qiladi, manzil va to'lovni so'raydi, buyurtma holati haqida mijozga xabar beradi, kuryerga topshiradi." },
        { heading: "Narx va muddat", body: "FRONTIX'da Telegram bot $250 dan boshlanadi. Oddiy bot bir necha kundan 1-2 haftagacha, to'lov va CRM integratsiyali bot ko'proq vaqt oladi." },
      ],
    faq: [
        { question: "Telegram bot salon uchun ham bo'ladimi?", answer: "Ha, yozilish, eslatma va savollarga javob uchun." },
        { question: "Restoran uchun botda to'lov qabul qilsa bo'ladimi?", answer: "Ha, Click va Payme integratsiyasi mumkin." },
        { question: "Bot qancha turadi?", answer: "FRONTIX'da $250 dan." },
      ],
  },
  {
    slug: "crm-dlya-malogo-biznesa-tashkent",
    category: "CRM",
    title: "Kichik biznes uchun CRM Toshkentda: nimadan boshlash va qancha turadi",
    excerpt: "Kichik biznes uchun CRM mijozlar, so'rovlar va kelishuvlarni bir joyda saqlaydi; FRONTIX'da CRM 250 000 so'mdan boshlanadi va Telegram bot bilan bog'lanadi.",
    publishDate: "2026-11-22",
    readMinutes: 4,
    relatedService: "business-automation",
    sections: [
        { heading: "CRM kichik biznesga nima beradi", body: "Barcha mijozlar va so'rovlar bitta joyda: kim yozgan, kim javob bergan, nima kelishilgan. Daftar va Excel'da yo'qolgan so'rovlar kamayadi, menejer o'zgarsa ham tarix saqlanadi." },
        { heading: "Qachon CRM kerak", body: "Mijozlar bir nechta joydan keladi (Telegram, Instagram, telefon), so'rovlar yo'qolib qolmoqda, kim qachon javob berganini bilmaysiz yoki hisobotni qo'lda tuzasiz." },
        { heading: "Qanday boshlash kerak", body: "Avval jarayonni yozib chiqing: mijoz qayerdan keladi va qadamlari qanday. Keyin faqat shu qadamlarni CRM'ga o'tkazing, ortiqcha funksiya qo'shmang." },
        { heading: "Narx", body: "FRONTIX'da CRM 250 000 so'mdan boshlanadi; foydalanuvchilar soni, integratsiyalar va hisobotlar murakkabligiga qarab o'zgaradi." },
      ],
    faq: [
        { question: "Kichik biznesga CRM kerakmi?", answer: "Agar so'rovlar bir necha kanaldan kelsa va qo'lda yuritilsa, ha, tez foyda beradi." },
        { question: "CRM qancha turadi?", answer: "FRONTIX'da 250 000 so'mdan." },
        { question: "CRM'ni Telegram bilan bog'lasa bo'ladimi?", answer: "Ha, so'rovlar botdan CRM'ga avtomatik tushadi." },
      ],
  },
  {
    slug: "chat-bot-dlya-salona-krasoty-tashkent",
    category: "Telegram bot",
    title: "Go'zallik saloni uchun chat-bot Toshkentda: yozilish va eslatmalar avtomatik",
    excerpt: "Salon uchun Telegram chat-bot mijozni xizmat va vaqtga yozadi, eslatma yuboradi va savollarga javob beradi; FRONTIX'da bot $250 dan boshlanadi.",
    publishDate: "2026-11-22",
    readMinutes: 4,
    relatedService: "telegram-bot",
    sections: [
        { heading: "Salonda bot nima qiladi", body: "Mijoz Telegram'da xizmat va vaqtni tanlaydi, bot yozuvni saqlaydi, oldindan eslatma yuboradi, narxlar va manzil haqidagi savollarga javob beradi." },
        { heading: "Administratorga foydasi", body: "Telefon va xabarlarga javob berishga ketadigan vaqt kamayadi, yozuvlar chalkashmaydi, mijoz kechasi ham yozila oladi." },
        { heading: "CRM bilan bog'lash", body: "Yozuvlar va mijozlar bazasi CRM'ga tushadi, shunda qaytib keladigan mijozlarni ko'rish va eslatish oson." },
        { heading: "Narx va muddat", body: "FRONTIX'da Telegram bot $250 dan boshlanadi; oddiy bot bir necha kundan 1-2 haftagacha tayyor bo'ladi." },
      ],
    faq: [
        { question: "Salon uchun bot qancha turadi?", answer: "FRONTIX'da $250 dan." },
        { question: "Bot mijozga eslatma yuboradimi?", answer: "Ha, yozilgan vaqtdan oldin avtomatik eslatma yuborishi mumkin." },
        { question: "Botni CRM bilan bog'lash mumkinmi?", answer: "Ha, yozuvlar CRM'ga avtomatik tushadi." },
      ],
  },
  {
    slug: "crm-dlya-kliniki-tashkent",
    category: "CRM",
    title: "Klinika uchun CRM Toshkentda: bemorlar, yozilish va hisobotlar bir joyda",
    excerpt: "Klinika uchun CRM bemorlar bazasi, qabulga yozilish va hisobotlarni bir joyda yuritadi; FRONTIX o'z FRX MED CRM mahsulotini ham yaratgan, individual tizim esa talabga qarab baholanadi.",
    publishDate: "2026-11-22",
    readMinutes: 4,
    relatedService: "business-automation",
    sections: [
        { heading: "Klinikaga CRM nima uchun kerak", body: "Bemorlar bazasi, qabulga yozilish jadvali, shifokorlar yuklamasi va hisobotlar daftar yoki Excel'da emas, bitta tizimda bo'ladi." },
        { heading: "Nimalarni avtomatlashtirish mumkin", body: "Qabulga yozilish, bemorga eslatma, shifokor jadvali, to'lovlarni qayd etish va hisobotlar." },
        { heading: "Tayyor yoki maxsus tizim", body: "Tayyor yechim tez ishga tushadi; klinikaning o'ziga xos jarayoni bo'lsa maxsus tizim moslab quriladi. FRONTIX o'zining FRX MED (klinikalar uchun CRM) mahsulotiga ega." },
        { heading: "Narx", body: "FRONTIX'da CRM 250 000 so'mdan boshlanadi; klinika uchun aniq narx funksiyalarga qarab bepul konsultatsiyadan keyin belgilanadi." },
      ],
    faq: [
        { question: "Klinika uchun CRM qancha turadi?", answer: "FRONTIX'da CRM 250 000 so'mdan; aniq narx funksiyalarga bog'liq." },
        { question: "Bemorlarga eslatma yuborish mumkinmi?", answer: "Ha, qabul oldidan avtomatik eslatma qo'shish mumkin." },
        { question: "FRX MED nima?", answer: "FRONTIX'ning klinikalar uchun CRM tizimi." },
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
