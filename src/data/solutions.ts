export interface SolutionFaq {
  question: string;
  answer: string;
}

export interface SolutionContent {
  /** Answer-first opening paragraph: "X — bu Y" definition + geo + how FRONTIX solves it. */
  intro: string;
  /** Paragraph tying this industry's specific pain points to the service's features. */
  bridge: string;
  faq: SolutionFaq[];
}

// Keyed by `${industrySlug}__${serviceSlug}`. Uzbek-only pilot content — see
// src/data/industries.ts for the industry list this must stay in sync with.
export const solutions: Record<string, SolutionContent> = {
  "restoranlar-va-kafelar__qr-menu": {
    intro:
      "QR-menyu — mijoz stoldan turmasdan telefon orqali menyuni ko'rib, buyurtma bera oladigan raqamli tizim. Toshkentdagi restoran va kafelar uchun FRONTIX narxlar va taomlarni bir joydan real vaqtda yangilaydigan, ofitsiant kutish vaqtini qisqartiradigan QR-menyu tizimini 1-2 hafta ichida ishga tushiradi.",
    bridge:
      "Qog'oz menyuni har safar qayta chop etish o'rniga, admin panel orqali narx yoki taomni bir necha soniyada yangilash mumkin — o'zgarish barcha stollarda darhol ko'rinadi. Bandlik soatlarida ofitsiantlar navbatda turish o'rniga faqat buyurtmani tayyorlashga e'tibor qaratadi, mijoz esa kutmasdan o'zi tanlagan taomni buyurtma qiladi.",
    faq: [
      {
        question: "QR-menyuni joriy qilish uchun qancha vaqt ketadi?",
        answer:
          "Odatda 1-2 hafta ichida, menyu tarkibi va dizaynga qarab — FRONTIX taomlar ro'yxati, rasm va narxlarni tizimga joylab, har bir stol uchun QR kodni tayyor holda topshiradi.",
      },
      {
        question: "Menyuni o'zim yangilay olamanmi?",
        answer:
          "Ha, admin panel orqali narx, taom nomi yoki mavjudlik holatini o'zingiz istalgan vaqt o'zgartira olasiz, dasturchiga murojaat qilish shart emas.",
      },
    ],
  },
  "restoranlar-va-kafelar__telegram-bot": {
    intro:
      "Telegram bot — mijozlardan 24/7 buyurtma qabul qiladigan va avtomatik javob beradigan tizim. Toshkentdagi restoran va kafelar uchun FRONTIX telefon orqali band signal tufayli yo'qotiladigan buyurtmalarni bot orqali to'liq avtomatlashtiradi.",
    bridge:
      "Mijoz telefon qilib band signalga duch kelishi yoki noto'g'ri yozib olinishi o'rniga, botda menyudan tanlab, manzilini kiritib, buyurtmani bir necha bosishda yakunlaydi — buyurtma administratorga darhol yetib boradi, xatolik ehtimoli yo'qoladi.",
    faq: [
      {
        question: "Bot orqali to'lovni qabul qilish mumkinmi?",
        answer:
          "Ha, Telegram botga to'lov integratsiyasi (naqd, karta yoki Click kabi usullar) qo'shish mumkin, mijoz buyurtmani to'liq bot ichida yakunlay oladi.",
      },
      {
        question: "Bot mavjud Instagram yoki telefon buyurtmalarini almashtiradimi?",
        answer:
          "Yo'q, u qo'shimcha kanal sifatida ishlaydi — mijozlar o'ziga qulay kanaldan buyurtma beradi, barcha buyurtmalar esa bitta admin panelda yig'iladi.",
      },
    ],
  },
  "restoranlar-va-kafelar__online-ordering": {
    intro:
      "Onlayn buyurtma tizimi — mijoz veb-sayt yoki ilova orqali taom tanlab, to'lov qilib, yetkazib berishni kuzatadigan to'liq platforma. Toshkentdagi restoranlar uchun FRONTIX buyurtmalarni Excel yoki daftar o'rniga bitta boshqaruv panelida yig'adigan tizim quradi.",
    bridge:
      "Yetkazib berish buyurtmalarini qo'lda kuzatishda yo'qolib qolgan yoki adashtirilgan buyurtmalar o'rniga, har bir buyurtma holati (qabul qilindi → tayyorlanmoqda → yo'lda) real vaqtda ko'rinadi, ombordagi mahsulot qoldig'i bilan ham bog'lanadi.",
    faq: [
      {
        question: "Yetkazib beruvchilar bilan qanday integratsiya qilinadi?",
        answer:
          "Tizim buyurtma holatini kuzatish uchun tayyor yaratiladi, agar o'z kuryerlaringiz yoki tashqi yetkazib berish xizmati bilan ishlasangiz, holatlarni shunga moslab sozlaymiz.",
      },
      {
        question: "Bir nechta filial uchun ishlata olamanmi?",
        answer:
          "Ha, tizim ko'p filialli restoranlar uchun ham moslashtiriladi — har bir filial o'z buyurtmalarini alohida ko'radi, umumiy hisobot markazlashgan holda chiqadi.",
      },
    ],
  },
  "gozallik-salonlari__telegram-bot": {
    intro:
      "Telegram bot — mijozlar band vaqtni telefon qilmasdan, bot orqali o'zi ko'rib bron qiladigan tizim. Toshkentdagi go'zallik salonlari va sartaroshxonalar uchun FRONTIX administrator band bo'lganda ham mijoz yo'qotilmaydigan avtomatik bron tizimini yaratadi.",
    bridge:
      "Administrator telefonga javob berolmagan payt mijoz raqib salonga ketishi o'rniga, bot orqali bo'sh vaqt oralig'ini ko'rib, usta va xizmatni tanlab, o'zi bron qiladi. Bron oldidan avtomatik eslatma yuborilib, kelmay qolish (no-show) holatlari kamayadi.",
    faq: [
      {
        question: "Bot ustaning band yoki bo'sh vaqtini qanday biladi?",
        answer:
          "Har bir usta uchun ish jadvali tizimga kiritiladi, bot faqat bo'sh vaqt oraliqlarini mijozga taklif qiladi, band vaqtga bron tushmaydi.",
      },
      {
        question: "Mijozga eslatma avtomatik yuboriladimi?",
        answer:
          "Ha, bron vaqtidan oldin Telegram orqali avtomatik eslatma yuboriladi, bu kelmay qolish holatlarini sezilarli kamaytiradi.",
      },
    ],
  },
  "gozallik-salonlari__website-development": {
    intro:
      "Veb-sayt — salon xizmatlari, narxlar va ustalar haqida ma'lumotni doimiy ko'rinadigan qiladigan raqamli vitrina. Toshkentdagi go'zallik salonlari uchun FRONTIX Instagram profilidan tashqari, Google qidiruvida ham topiladigan tezkor sayt ishlab chiqadi.",
    bridge:
      "Mijozlar tarixi va sevimli xizmatlar qog'ozda saqlanib, keyingi tashrifda topilmay qolishi o'rniga, sayt orqali onlayn bron formasi va xizmatlar katalogi taqdim etiladi — bu Instagram'dan tashqari Google orqali ham yangi mijoz jalb qilish imkonini beradi.",
    faq: [
      {
        question: "Saytda onlayn bron qilish imkoniyati bo'ladimi?",
        answer:
          "Ha, sayt Telegram bot yoki alohida bron formasi bilan bog'lanib, mijoz to'g'ridan-to'g'ri saytdan vaqt band qila oladi.",
      },
      {
        question: "Instagram sahifamiz bo'lsa ham sayt kerakmi?",
        answer:
          "Ha — Instagram algoritmga bog'liq va faqat obunachilarga ko'rinadi, sayt esa Google qidiruvida doimiy topiladi va reklamalarga ham havola sifatida ishlatiladi.",
      },
    ],
  },
  "gozallik-salonlari__business-automation": {
    intro:
      "CRM avtomatlashtirish — mijozlar tarixi, bronlar va to'lovlarni bitta tizimda birlashtiradigan yechim. Toshkentdagi go'zallik salonlari uchun FRONTIX har bir mijozning avvalgi xizmatlari va sevimli ustasi haqidagi ma'lumotni saqlab, qo'lda yuritishni tugatadi.",
    bridge:
      "Mijoz tarixi qog'ozda yoki hech qayerda saqlanmasligi o'rniga, CRM har bir mijozning avvalgi tashriflari, tanlagan xizmatlari va ustasini eslab qoladi — bu shaxsiylashtirilgan xizmat va takroriy mijozlarni saqlab qolish imkonini beradi.",
    faq: [
      {
        question: "CRM Telegram bot bilan birga ishlaydimi?",
        answer: "Ha, bot orqali kelgan bronlar avtomatik ravishda CRM'ga tushadi, admin barcha bronlarni bitta joyda ko'radi.",
      },
      {
        question: "Xodimlar samaradorligini CRM orqali kuzatish mumkinmi?",
        answer:
          "Ha, har bir usta bo'yicha bajarilgan xizmatlar va daromad hisoboti tizimda ko'rinadi, bu bonus hisob-kitobiga ham asos bo'ladi.",
      },
    ],
  },
  "tibbiyot-klinikalari__website-development": {
    intro:
      "Veb-sayt — klinika xizmatlari, shifokorlar va narxlar haqida ishonchli ma'lumot beradigan rasmiy manba. Toshkentdagi tibbiyot klinikalari uchun FRONTIX bemorlar Google'da qidirganda topiladigan, onlayn navbat formasi bilan jihozlangan sayt yaratadi.",
    bridge:
      "Bemorlar klinika haqida ma'lumotni turli manbalardan qidirishi o'rniga, saytda shifokorlar, ixtisosliklar va narxlar aniq ko'rsatiladi, onlayn navbat formasi orqali bemor telefon qilmasdan ariza qoldira oladi.",
    faq: [
      {
        question: "Shifokorlar jadvalini saytda ko'rsatish mumkinmi?",
        answer:
          "Ha, har bir shifokor uchun qabul kunlari va bo'sh vaqtlar sayt sahifasida ko'rsatiladi, bemor mos vaqtni tanlab ariza qoldiradi.",
      },
      {
        question: "Bemor ma'lumotlari xavfsiz saqlanadimi?",
        answer: "Ha, forma orqali kelgan ma'lumotlar faqat klinika admin paneliga yuboriladi, uchinchi tomonlarga berilmaydi.",
      },
    ],
  },
  "tibbiyot-klinikalari__telegram-bot": {
    intro:
      "Telegram bot — bemorlar navbatga telefon qilmasdan yoziladigan va eslatma oladigan avtomatik tizim. Toshkentdagi klinikalar uchun FRONTIX band signal tufayli yo'qotiladigan navbatlarni bot orqali avtomatlashtiradi.",
    bridge:
      "Bemor telefon orqali band signalga duch kelishi o'rniga, botda shifokor va bo'sh vaqtni tanlab, bir necha bosishda navbatga yoziladi. Qabul kunidan oldin avtomatik eslatma yuborilib, kelmay qolgan bemorlar soni kamayadi.",
    faq: [
      {
        question: "Bot bir nechta shifokor uchun ishlaydimi?",
        answer: "Ha, bot barcha shifokorlar va ularning bo'sh vaqtlarini ko'rsatadi, bemor kerakli mutaxassisni tanlab yoziladi.",
      },
      {
        question: "Qayta tekshiruv uchun eslatma yuborish mumkinmi?",
        answer:
          "Ha, belgilangan muddatda (masalan, davolanishdan keyingi tekshiruv) botga avtomatik eslatma yuborish sozlanadi.",
      },
    ],
  },
  "tibbiyot-klinikalari__business-automation": {
    intro:
      "CRM avtomatlashtirish — bemorlar tarixi, navbatlar va shifokorlar jadvalini bitta tizimda birlashtiradigan yechim. Toshkentdagi klinikalar uchun FRONTIX daftar yoki turli fayllarda tarqoq saqlanadigan bemor ma'lumotlarini markazlashtiradi.",
    bridge:
      "Bemor tarixi xodim xotirasida yoki alohida daftarlarda saqlanishi o'rniga, CRM har bir bemorning tashxis va qabul tarixini bitta profilda saqlaydi — shifokor keyingi qabulda avvalgi ma'lumotlarni darhol ko'radi.",
    faq: [
      {
        question: "CRM shifokorlar jadvalini avtomatik boshqaradimi?",
        answer: "Ha, shifokor bandligi tizimda ko'rinadi, yangi navbat faqat bo'sh vaqtga yoziladi, band vaqtga ikki bemor tushmaydi.",
      },
      {
        question: "Bemor ma'lumotlari qanday saqlanadi?",
        answer:
          "Ma'lumotlar faqat klinika xodimlariga cheklangan kirish huquqi bilan saqlanadi, xavfsizlik talablariga mos tuzilma bilan ishlab chiqiladi.",
      },
    ],
  },
  "onlayn-dokonlar__online-ordering": {
    intro:
      "Onlayn buyurtma tizimi — mijoz mahsulotni tanlab, to'lov qilib, yetkazib berishni kuzatadigan to'liq platforma. Toshkentdagi onlayn do'konlar uchun FRONTIX Instagram va Telegram orqali qo'lda yuritiladigan buyurtmalarni bitta boshqaruv paneliga birlashtiradi.",
    bridge:
      "Buyurtmalarni qo'lda yozib borish va ombor qoldig'ini kuzatishda yo'l qo'yiladigan xatolik o'rniga, tizim har bir buyurtmani avtomatik qayd etadi, mahsulot sotilgach ombordagi qoldiq o'zi kamayadi — mijoz esa buyurtma holatini o'zi kuzatadi.",
    faq: [
      {
        question: "Bir nechta savdo kanali (Instagram, Telegram, sayt) bitta joyga birlasha oladimi?",
        answer:
          "Ha, barcha kanallardan kelgan buyurtmalar bitta admin panelda yig'iladi, ombor qoldig'i barcha kanallar uchun umumiy hisoblanadi.",
      },
      {
        question: "To'lov tizimlarini ulash mumkinmi?",
        answer: "Ha, Click, Payme kabi mahalliy to'lov tizimlarini onlayn buyurtma tizimiga integratsiya qilish mumkin.",
      },
    ],
  },
  "onlayn-dokonlar__telegram-bot": {
    intro:
      "Telegram bot — mijozlar katalogdan mahsulot tanlab, botda buyurtma beradigan avtomatlashtirilgan savdo kanali. Toshkentdagi onlayn do'konlar uchun FRONTIX Instagram DM orqali qo'lda yuritiladigan buyurtma jarayonini botga o'tkazadi.",
    bridge:
      "Mijoz Instagram DM orqali mahsulot so'rab, javob kutib turishi o'rniga, botda katalogdan mahsulotni ko'rib, savatga qo'shib, manzil kiritib, buyurtmani bir necha daqiqada yakunlaydi — admin panelda barcha buyurtmalar tartiblangan holda ko'rinadi.",
    faq: [
      {
        question: "Bot mahsulot qoldig'ini ko'rsatadimi?",
        answer: "Ha, tugagan mahsulot botda avtomatik \"mavjud emas\" deb ko'rsatiladi, mijoz bo'lmagan tovarga buyurtma bermaydi.",
      },
      {
        question: "Bot orqali chegirma yoki promo-kod berish mumkinmi?",
        answer: "Ha, botga promo-kod va chegirma mantig'ini qo'shish mumkin, bu takroriy xaridlarni rag'batlantiradi.",
      },
    ],
  },
  "onlayn-dokonlar__website-development": {
    intro:
      "Veb-sayt — mahsulot katalogi, savat va to'lovni o'z ichiga olgan to'liq onlayn do'kon. Toshkentdagi chakana savdo bizneslari uchun FRONTIX faqat Instagram'ga bog'liq bo'lmagan, mustaqil onlayn do'kon saytini ishlab chiqadi.",
    bridge:
      "Instagram algoritmiga bog'liq bo'lib qolish o'rniga, mustaqil sayt orqali mijoz to'g'ridan-to'g'ri mahsulotni ko'rib, savatga qo'shib, xarid qiladi — sayt Google qidiruvida ham topilib, yangi mijoz oqimi Instagram'dan tashqari manbadan ham keladi.",
    faq: [
      {
        question: "Saytga mahsulot qo'shish yoki o'zgartirish qiyinmi?",
        answer: "Yo'q, admin panel orqali mahsulot, narx va rasmlarni o'zingiz istalgan vaqt qo'sha yoki o'zgartira olasiz.",
      },
      {
        question: "Sayt mobil qurilmalarda yaxshi ishlaydimi?",
        answer:
          "Ha, barcha saytlar mobil-birinchi (mobile-first) tamoyilida ishlab chiqiladi, chunki O'zbekistonda xaridlarning katta qismi telefon orqali amalga oshadi.",
      },
    ],
  },
  "talim-markazlari__website-development": {
    intro:
      "Veb-sayt — kurslar, narxlar va o'qituvchilar haqida ma'lumot beradigan hamda onlayn ariza qabul qiladigan rasmiy sahifa. Toshkentdagi ta'lim markazlari uchun FRONTIX ota-onalar va o'quvchilar Google'da qidirganda topiladigan sayt yaratadi.",
    bridge:
      "Yangi o'quvchi haqidagi ma'lumot qog'ozda yoki tarqoq Excel fayllarda saqlanishi o'rniga, sayt orqali onlayn ariza formasi to'ldiriladi, ma'lumot to'g'ridan-to'g'ri admin panelga tushadi — bu ro'yxatga olishni tezlashtiradi va ma'lumot yo'qolishining oldini oladi.",
    faq: [
      {
        question: "Saytda kurs jadvali va bo'sh o'rinlarni ko'rsatish mumkinmi?",
        answer:
          "Ha, har bir kurs uchun jadval va mavjud o'rinlar soni sayt sahifasida ko'rsatiladi, bu administratorga qo'ng'iroqlar sonini kamaytiradi.",
      },
      {
        question: "Ota-onalar farzandining natijasini saytdan kuzata oladimi?",
        answer:
          "Bu funksiya alohida shaxsiy kabinet sifatida qo'shilishi mumkin, odatda CRM avtomatlashtirish yechimi bilan birga amalga oshiriladi.",
      },
    ],
  },
  "talim-markazlari__telegram-bot": {
    intro:
      "Telegram bot — o'quvchilar va ota-onalar bilan doimiy aloqa, ariza qabul qilish va eslatmalar uchun avtomatik tizim. Toshkentdagi o'quv markazlari uchun FRONTIX ota-onalarning doimiy qo'ng'iroqlarini bot orqali avtomatlashtiradi.",
    bridge:
      "Ota-ona farzandining davomati yoki to'lov muddati haqida bilish uchun doim qo'ng'iroq qilishi o'rniga, bot orqali shu ma'lumotni istalgan vaqt so'rab olishi mumkin, markaz esa yangi guruh yoki aksiya haqida barcha obunachilarga bir vaqtda xabar yubora oladi.",
    faq: [
      {
        question: "Bot orqali yangi kursga yozilish mumkinmi?",
        answer: "Ha, bot yangi kurslar ro'yxatini ko'rsatadi, o'quvchi yoki ota-ona to'g'ridan-to'g'ri botda ariza qoldira oladi.",
      },
      {
        question: "Bot to'lov eslatmasi yubora oladimi?",
        answer: "Ha, to'lov muddati yaqinlashganda botga avtomatik eslatma yuborish sozlanadi, bu qarzdorlikni kamaytiradi.",
      },
    ],
  },
  "talim-markazlari__business-automation": {
    intro:
      "CRM avtomatlashtirish — o'quvchilar, guruhlar, to'lovlar va davomatni bitta tizimda birlashtiradigan yechim. Toshkentdagi ta'lim markazlari uchun FRONTIX turli Excel fayllarda tarqoq saqlanadigan ma'lumotlarni markazlashtiradi.",
    bridge:
      "O'quvchi ma'lumotlari va to'lov holati turli fayllarda tarqoq saqlanishi o'rniga, CRM har bir o'quvchining guruhi, davomati va to'lov tarixini bitta profilda ko'rsatadi — muddati o'tgan to'lovlar avtomatik ajratib ko'rsatiladi, unutilib qolgan qarzdorlik kamayadi.",
    faq: [
      {
        question: "CRM guruh jadvali va bo'sh o'rinlarni ko'rsatadimi?",
        answer: "Ha, har bir guruh uchun jadval, o'qituvchi va bo'sh o'rinlar soni tizimda real vaqtda ko'rinadi.",
      },
      {
        question: "To'lovlarni avtomatik kuzatish mumkinmi?",
        answer:
          "Ha, har bir o'quvchining to'lov tarixi va muddati tizimda saqlanadi, muddati yaqinlashgan yoki o'tgan to'lovlar alohida hisobotda ko'rsatiladi.",
      },
    ],
  },
  "fitnes-zallar__telegram-bot": {
    intro:
      "Telegram bot — a'zolik holati, mashg'ulot jadvali va bronlarni avtomatlashtiradigan tizim. Toshkentdagi fitnes-zallar va sport klublari uchun FRONTIX zalga kelmasdan ro'yxatdan o'tish va jadvalni ko'rish imkonini beradi.",
    bridge:
      "Mashg'ulot jadvali faqat devordagi qog'ozda ko'rinishi o'rniga, a'zo botda bo'sh joy va murabbiy bandligini ko'rib, mashg'ulotga oldindan yoziladi. Abonement muddati tugashiga oz qolganda botga avtomatik eslatma yuboriladi.",
    faq: [
      {
        question: "Bot orqali guruh mashg'ulotiga joy band qilish mumkinmi?",
        answer: "Ha, a'zo botda bo'sh joylarni ko'rib, o'ziga mos guruh mashg'ulotini tanlab yoziladi.",
      },
      {
        question: "Abonement tugashi haqida eslatma keladimi?",
        answer: "Ha, abonement muddati tugashiga bir necha kun qolganda a'zoga avtomatik Telegram xabari yuboriladi.",
      },
    ],
  },
  "fitnes-zallar__business-automation": {
    intro:
      "CRM avtomatlashtirish — a'zolar, abonementlar va murabbiylar jadvalini bitta tizimda birlashtiradigan yechim. Toshkentdagi fitnes-zallar uchun FRONTIX qo'lda kuzatilib, sezilmasdan tugab qoladigan abonementlarni avtomatik nazorat qiladi.",
    bridge:
      "Abonement muddati tugagan a'zolarni qo'lda kuzatish va sezmasdan yo'qotish o'rniga, CRM har bir a'zoning abonement holati va tarixini ko'rsatadi, muddati yaqinlashgan a'zolar ro'yxati avtomatik ajratiladi — bu qayta sotish imkoniyatini oshiradi.",
    faq: [
      {
        question: "CRM murabbiylar bandligini ko'rsatadimi?",
        answer: "Ha, har bir murabbiyning jadvali va band/bo'sh vaqtlari tizimda ko'rinadi, bu shaxsiy mashg'ulotlarni rejalashtirishni osonlashtiradi.",
      },
      {
        question: "A'zolar sonining o'sish-kamayish statistikasini ko'rish mumkinmi?",
        answer: "Ha, tizim yangi a'zolar, uzaytirilgan va tugagan abonementlar bo'yicha hisobot va analitika beradi.",
      },
    ],
  },
  "fitnes-zallar__website-development": {
    intro:
      "Veb-sayt — abonement turlari, murabbiylar va jadval haqida ma'lumot beradigan hamda onlayn ro'yxatdan o'tkazadigan sahifa. Toshkentdagi fitnes-zallar uchun FRONTIX yangi mijoz to'g'ridan-to'g'ri zalga kelmasdan tanishib, ariza qoldira oladigan sayt yaratadi.",
    bridge:
      "Yangi mijoz abonement narxi va jadval haqida bilish uchun zalga borishga majbur bo'lishi o'rniga, saytda barcha ma'lumot ochiq ko'rsatiladi, onlayn ariza formasi orqali birinchi mashg'ulotga yozilish mumkin bo'ladi.",
    faq: [
      {
        question: "Saytda onlayn to'lov qilish imkoniyati bo'ladimi?",
        answer: "Ha, abonement to'lovini onlayn qabul qilish uchun Click yoki Payme kabi tizimlarni saytga integratsiya qilish mumkin.",
      },
      {
        question: "Sayt Instagram sahifamiz bilan birga ishlay oladimi?",
        answer: "Ha, sayt Instagram va Telegram havolalari bilan bog'lanadi, barcha kanallar bitta manzilga — saytga — yo'naltiriladi.",
      },
    ],
  },
  "avtoservislar__telegram-bot": {
    intro:
      "Telegram bot — mijozlar avtoservisga qo'ng'iroq qilmasdan, bot orqali bo'sh vaqtga yozilib, xizmat turini tanlaydigan tizim. Toshkentdagi avtoservis va STOlar uchun FRONTIX usta mashina ostida bo'lgan paytda ham mijoz yo'qotilmaydigan avtomatik yozilish tizimini yaratadi.",
    bridge:
      "Usta mashina ostida bo'lib telefonga javob berolmagan payt mijoz boshqa avtoservisga ketishi o'rniga, bot orqali bo'sh vaqt oralig'ini ko'rib, kerakli xizmatni tanlab yoziladi. Admin panelda barcha ustalarning jadvali bir joyda ko'rinib turgani uchun ikki mijoz bitta ustaga bir vaqtga yozilib qolish holati bartaraf etiladi.",
    faq: [
      {
        question: "Mijoz avtomobilining necha soatda tayyor bo'lishini botdan bilib oladimi?",
        answer:
          "Ha, xizmat turi tanlanganda bot taxminiy bajarilish vaqtini ko'rsatadi, mijoz mashinasini qachon olib ketishini oldindan rejalashtiradi.",
      },
      {
        question: "Bir nechta usta ishlaydigan avtoservisda bot ularning bandligini alohida hisoblaydimi?",
        answer:
          "Ha, har bir usta uchun alohida jadval kiritiladi, bot faqat bo'sh vaqtlarni taklif qilib, band vaqtga yozuv tushishiga yo'l qo'ymaydi.",
      },
    ],
  },
  "avtoservislar__business-automation": {
    intro:
      "CRM avtomatlashtirish — har bir mijoz va uning avtomobili haqidagi ma'lumotni (ta'mirlash tarixi, almashtirilgan qismlar) bir tizimda saqlaydigan yechim. Toshkentdagi avtoservislar uchun FRONTIX qog'ozda yo'qolib qoladigan ma'lumotlarni raqamli hisobotga aylantirib, har bir mijozga individual xizmat ko'rsatish imkonini beradi.",
    bridge:
      "Mijoz avtomobili bilan qayta kelganda, oldin qaysi qism almashtirilgani va qachon xizmat ko'rsatilgani CRM tarixidan bir zumda ko'rinadi, hamma narsani qaytadan tekshirish shart bo'lmaydi. Ehtiyot qism buyurtmasi workflow orqali kuzatilib, yetkazib kelish muddati tizimda avtomatik yangilanib boradi, mijoz har safar qo'ng'iroq qilib so'ramaydi.",
    faq: [
      {
        question: "Avtomobil ta'mirlash tarixi qanday saqlanadi?",
        answer:
          "Har bir mashina uchun alohida karta ochiladi, unga qaysi qism qachon almashtirilgani va qanday xizmat ko'rsatilgani avtomatik yoziladi.",
      },
      {
        question: "Ehtiyot qism yetib kelishini kuzatish mumkinmi?",
        answer:
          "Ha, workflow orqali buyurtma holati (buyurtma qilindi, yo'lda, keldi) belgilanadi, admin va kerak bo'lsa mijoz ham holatdan xabardor bo'ladi.",
      },
    ],
  },
  "avtoservislar__website-development": {
    intro:
      "Veb-sayt — avtoservisning xizmatlari, narxlari va ish jadvalini mijozga tushunarli ko'rsatadigan onlayn vitrina. Toshkentdagi avtoservislar uchun FRONTIX qidiruv tizimlarida topiladigan va telefon qilmasdan turib xizmat haqida to'liq ma'lumot beradigan sayt yaratadi.",
    bridge:
      "Mijoz avtoservisga qo'ng'iroq qilib band ohangini eshitish o'rniga, saytdagi onlayn so'rov formasi orqali kerakli xizmatni va qulay vaqtni bildirib qo'yadi, bu birinchi bosqichda mijoz yo'qotilishining oldini oladi. CMS integratsiyasi orqali admin xizmat narxlari va band kunlarni o'zi yangilab turadi, shu bilan ustalar jadvalidagi chalkashliklar kamayadi.",
    faq: [
      {
        question: "Saytda avtoservis narxlarini o'zim yangilab turaolamanmi?",
        answer:
          "Ha, CMS integratsiyasi orqali narxlar, xizmat turlari va ish vaqtini administrator panel orqali o'zingiz tahrirlaysiz, dasturchiga murojaat shart emas.",
      },
      {
        question: "Sayt orqali kelgan mijozlar Google qidiruvida qanday topiladi?",
        answer:
          "SEO optimizatsiya orqali sayt \"Toshkentda avtoservis\" kabi so'rovlarda ko'rinadigan qilib sozlanadi, bu yangi mijozlar oqimini oshiradi.",
      },
    ],
  },
  "avto-yuvish-detayling__telegram-bot": {
    intro:
      "Telegram bot — mijozlar avtomobil yuvish yoki detayling xizmatiga navbatga joyida kutmasdan, bot orqali oldindan yoziladigan tizim. Toshkentdagi avtomobil yuvish va detayling markazlari uchun FRONTIX band soatlarda ham mijozni aniq vaqtga taqsimlaydigan avtomatik navbat tizimini yaratadi.",
    bridge:
      "Mijoz markazga kelib navbat kutib turishi o'rniga, bot orqali bo'sh vaqt oralig'ini tanlab, aniq soatga yoziladi, shu bilan tashqarida behuda kutish yo'qoladi. Bot ichida keramika qoplama yoki ichki tozalash kabi xizmatlarning narxi ko'rsatilgani uchun mijoz narxni bilish uchun qo'ng'iroq qilishga hojat qolmaydi.",
    faq: [
      {
        question: "Bot orqali xizmat narxini oldindan bilsa bo'ladimi?",
        answer:
          "Ha, har bir xizmat turi (tashqi yuvish, ichki tozalash, keramika qoplama) narxi bilan botda ko'rsatiladi, mijoz tanlashdan oldin narxni biladi.",
      },
      {
        question: "To'lovni ham bot orqali amalga oshirsa bo'ladimi?",
        answer:
          "Ha, to'lov integratsiyasi orqali mijoz xizmat uchun botdan turib onlayn to'lov qiladi, joyida naqd pul hisob-kitobiga hojat qolmaydi.",
      },
    ],
  },
  "avto-yuvish-detayling__business-automation": {
    intro:
      "CRM avtomatlashtirish — doimiy mijozlarni va ularning tashrif tarixini avtomatik kuzatib, bonus va chegirma tizimini boshqaradigan yechim. Toshkentdagi avtomobil yuvish markazlari uchun FRONTIX har bir mijozning necha marta kelgani va qaysi xizmatlardan foydalanganini hisoblab, sodiqlik dasturini avtomatlashtiradi.",
    bridge:
      "Doimiy mijoz uchun chegirma yoki bonus qo'lda hisoblanmaydi, CRM tashrif sonini avtomatik sanab, ma'lum songa yetganda mijozga bonus taqdim etadi, bu mijozning raqib markazga o'tib ketishini kamaytiradi. Hisobot va analitika orqali qaysi soatlarda markaz to'lib ketishi oldindan ko'rinadi, shu asosda ish jadvali va xodimlar soni rejalashtiriladi.",
    faq: [
      {
        question: "Doimiy mijozlar uchun bonus tizimi qanday ishlaydi?",
        answer:
          "CRM har bir mijozning tashrif sonini avtomatik hisoblaydi va belgilangan songa yetganda tizim mijozga chegirma yoki bepul xizmat taklif qilishni admin panelga chiqaradi.",
      },
      {
        question: "Qaysi soatlarda mijoz ko'p kelishini bilish mumkinmi?",
        answer:
          "Ha, hisobot va analitika bo'limi soatlik va kunlik tashriflar statistikasini ko'rsatadi, shu orqali band soatlarga xodim sonini moslash mumkin.",
      },
    ],
  },
  "avto-yuvish-detayling__website-development": {
    intro:
      "Veb-sayt — avtomobil yuvish va detayling markazining barcha xizmatlari, narxlari va joylashuvini bir sahifada ko'rsatadigan onlayn vitrina. Toshkentdagi avto-yuvish markazlari uchun FRONTIX mijoz telefon qilmasdan turib xizmat narxini ko'rib, to'g'ridan-to'g'ri yo'l tutadigan tezkor sayt yaratadi.",
    bridge:
      "Xizmat turlari va narxlari sahifada aniq ko'rsatilgani uchun mijoz keramika qoplama yoki ichki tozalash narxini bilish uchun qo'ng'iroq qilishga majbur bo'lmaydi. Tezkor yuklanish tufayli mijoz mobil telefondan yo'lda turib ham saytni ochib, band bo'lmagan soatni tanlab kelishi mumkin, bu joyidagi navbatni kamaytiradi.",
    faq: [
      {
        question: "Saytda barcha xizmat narxlarini ko'rsatish shartmi?",
        answer:
          "Shart emas, lekin narxlarni ko'rsatish mijozning qo'ng'iroq qilib so'rash ehtiyojini kamaytiradi va konversiyani oshiradi, CMS orqali narxlarni istalgan vaqt yangilash mumkin.",
      },
      {
        question: "Sayt mobil telefonda tez ochiladimi?",
        answer:
          "Ha, tezkor yuklanish talabiga mos qurilgan sayt sekin internetda ham bir necha soniyada ochiladi, bu yo'lda turgan mijoz uchun muhim.",
      },
    ],
  },
  "yuridik-firmalar__website-development": {
    intro:
      "Veb-sayt — yuridik firmaning mutaxassislari, ixtisoslik yo'nalishlari va real ish tajribasini ko'rsatadigan ishonch hosil qiluvchi onlayn manba. Toshkentdagi yuridik firmalar va advokatlar uchun FRONTIX mijoz tanish-bilishga tayanmasdan, internetda topib, ishonch bilan murojaat qiladigan professional sayt yaratadi.",
    bridge:
      "Mijozlar ishonchli yuristni faqat tanish-bilish orqali topishi o'rniga, SEO optimizatsiya orqali sayt \"Toshkentda advokat\" kabi so'rovlarda topilib, firma haqida real ma'lumot bilan ishonch uyg'otadi. Saytdagi onlayn konsultatsiya so'rovi formasi orqali mijoz band soatlarda telefon orqali navbat kutmasdan, qulay vaqtga yoziladi.",
    faq: [
      {
        question: "Sayt orqali yangi mijozlar qanday topiladi?",
        answer:
          "SEO optimizatsiya orqali sayt tegishli yuridik so'rovlar bo'yicha qidiruv natijalarida yuqori chiqadi, bu tanish-bilishsiz ham yangi mijozlar oqimini ta'minlaydi.",
      },
      {
        question: "Mijoz saytdan turib konsultatsiyaga yozilishi mumkinmi?",
        answer:
          "Ha, saytdagi so'rov formasi orqali mijoz muammosini qisqacha yozib, qulay vaqtni tanlab qo'yadi, administrator keyin tasdiqlaydi.",
      },
    ],
  },
  "yuridik-firmalar__business-automation": {
    intro:
      "CRM avtomatlashtirish — har bir mijozning ishi (case), hujjatlari va yozishmalarini bitta tizimda birlashtiradigan yechim. Toshkentdagi yuridik firmalar uchun FRONTIX turli kanallarga tarqalib ketgan mijoz muloqotini va ish holatini tartibga solib, hech narsa yo'qolib qolmaydigan tizim yaratadi.",
    bridge:
      "Ish qaysi bosqichda (hujjat yig'ish, sud jarayoni, qaror) ekanligi CRM'da aniq belgilanadi, mijoz holatni bilish uchun har safar qo'ng'iroq qilishi shart bo'lmaydi. Telefon, WhatsApp va Telegramga tarqalib ketgan yozishmalar o'rniga, API bog'lanishlar orqali barcha muloqot bitta mijoz kartasida yig'iladi, hujjat va kelishuvlar yo'qolib qolmaydi.",
    faq: [
      {
        question: "Mijoz o'z ishining holatini qanday biladi?",
        answer:
          "CRM'da har bir ish bosqichma-bosqich belgilanadi, admin holatni yangilaganda mijozga xabar berish ham sozlanishi mumkin.",
      },
      {
        question: "Turli kanallardagi yozishmalarni bitta joyga yig'ish mumkinmi?",
        answer:
          "Ha, API bog'lanishlar orqali Telegram va boshqa kanallardagi muloqotlar mijozning CRM kartasiga bog'lanib, tarix bir joyda saqlanadi.",
      },
    ],
  },
  "yuridik-firmalar__telegram-bot": {
    intro:
      "Telegram bot — mijozlar birlamchi konsultatsiyaga telefon orqali navbat kutmasdan, bot orqali yozilib, muammosini qisqacha bayon qiladigan tizim. Toshkentdagi yuridik firmalar uchun FRONTIX band soatlarda ham mijoz yo'qotilmaydigan avtomatik qabul tizimini yaratadi.",
    bridge:
      "Telefon band bo'lgan payt mijoz boshqa firmaga murojaat qilishi o'rniga, bot orqali muammosini yozib, bo'sh vaqtga yoziladi, bu birlamchi murojaatlarni yo'qotmaslikka yordam beradi. Admin panelda barcha murojaatlar bitta joyda ko'rinib turgani uchun turli kanallarga tarqalib ketgan yozishmalar endi bitta tizimda kuzatiladi.",
    faq: [
      {
        question: "Mijoz botga yozganda advokat darhol javob berishi shartmi?",
        answer:
          "Shart emas, bot murojaatni qabul qilib, admin panelga tushiradi, advokat bo'sh bo'lganda ko'rib, mijozga javob beradi yoki uchrashuvga chaqiradi.",
      },
      {
        question: "Bot orqali qanday hujjatlar kerakligi haqida ma'lumot olsa bo'ladimi?",
        answer:
          "Ha, bot tez-tez so'raladigan savollarga (kerakli hujjatlar ro'yxati, konsultatsiya narxi) avtomatik javob berib, mijozni oldindan tayyorlaydi.",
      },
    ],
  },
  "buxgalteriya-xizmatlari__website-development": {
    intro:
      "Veb-sayt — buxgalteriya kompaniyasining xizmat paketlari, narxlari va ixtisosligini aniq ko'rsatadigan onlayn vitrina. Toshkentdagi buxgalteriya va moliyaviy xizmat firmalari uchun FRONTIX yangi mijoz qo'ng'iroq qilmasdan turib narx va xizmat haqida to'liq tasavvurga ega bo'ladigan sayt yaratadi.",
    bridge:
      "Yangi mijoz xizmat narxi va paketlarini bilish uchun albatta qo'ng'iroq qilishi o'rniga, saytda oylik buxgalteriya, soliq hisoboti va konsultatsiya paketlari narxi bilan ko'rsatiladi, bu birinchi murojaat bosqichini osonlashtiradi. CMS integratsiyasi orqali narxlar va xizmat shartlari o'zgarganda sayt tezda yangilanib turadi, eskirgan ma'lumot mijozni chalg'itmaydi.",
    faq: [
      {
        question: "Saytda xizmat narxlarini ochiq ko'rsatish kerakmi?",
        answer:
          "Tavsiya etiladi, chunki narx ko'rinib turishi mijozning qo'ng'iroq qilib so'rash bosqichini o'tkazib yuborib, to'g'ridan-to'g'ri murojaat qilishiga yordam beradi.",
      },
      {
        question: "Narxlar o'zgarganda saytni kim yangilaydi?",
        answer:
          "CMS integratsiyasi orqali siz o'zingiz admin panel orqali narx va xizmat tavsifini istalgan vaqt tahrirlaysiz, dasturchi kerak bo'lmaydi.",
      },
    ],
  },
  "buxgalteriya-xizmatlari__business-automation": {
    intro:
      "CRM avtomatlashtirish — har bir mijoz kompaniyaning hisobot muddatlari va hujjatlarini avtomatik kuzatib, eslatma yuboradigan tizim. Toshkentdagi buxgalteriya xizmatlari uchun FRONTIX qo'lda eslatib chiqish o'rniga, muddatlar yaqinlashganda o'zi ogohlantiradigan yechim yaratadi.",
    bridge:
      "Mijoz kompaniyalar soliq hisobotini topshirish muddatini eslab qololmay jarima to'lashi o'rniga, workflow avtomatizatsiya har bir mijoz uchun muddatlarni tizimga kiritib, belgilangan kundan oldin avtomatik eslatma yuboradi. Hisobot va analitika orqali qaysi mijozning muddati yaqinlashayotgani bir ro'yxatda ko'rinadi, buxgalter har birini qo'lda eslab yurishi shart bo'lmaydi.",
    faq: [
      {
        question: "Mijozga hisobot muddati yaqinlashganda avtomatik eslatiladimi?",
        answer: "Ha, workflow avtomatizatsiya belgilangan sanadan oldin mijozga avtomatik eslatma yuboradi, bu jarima xavfini kamaytiradi.",
      },
      {
        question: "Har bir mijoz uchun hujjatlar qanday tartibda saqlanadi?",
        answer:
          "CRM integratsiyasi orqali har bir mijoz kartasida uning hujjatlari va topshirish tarixi saqlanadi, kerak bo'lganda tezda topiladi.",
      },
    ],
  },
  "buxgalteriya-xizmatlari__telegram-bot": {
    intro:
      "Telegram bot — mijoz kompaniyalarga hisobot muddatlari va zarur hujjatlar haqida avtomatik eslatma yuboradigan tizim. Toshkentdagi buxgalteriya firmalari uchun FRONTIX turli kanallarda tarqalib ketgan hujjat almashinuvini bitta bot orqali tartibga soladi.",
    bridge:
      "Har bir mijozning hujjatlari shaxsiy Telegram chatlari va emailga tarqalib ketishi o'rniga, bot orqali hujjatlar belgilangan formatda qabul qilinib, admin panelda mijoz bo'yicha saqlanadi. Soliq va hisobot muddati yaqinlashganda bot avtomatik bildirishnoma yuboradi, buxgalter har bir mijozni qo'lda eslab chiqishi shart bo'lmaydi.",
    faq: [
      {
        question: "Mijoz hujjatlarni botga yuborishi shartmi?",
        answer:
          "Ha, bot orqali hujjat yuborish tartibli va tez, admin har bir mijozning hujjatini alohida topib, sarflanadigan vaqtni tejaydi.",
      },
      {
        question: "Eslatmalar qanday sozlanadi?",
        answer:
          "Avtomatik bildirishnomalar har bir mijozning hisobot muddatidan bir necha kun oldin yuborilishi qilib sozlanadi, muddat o'tkazib yuborish xavfi kamayadi.",
      },
    ],
  },
  "sugurta-agentliklari__website-development": {
    intro:
      "Veb-sayt — sug'urta turlari (avto, mulk, hayot) va shartlarini mijozga tushunarli tilda tushuntiradigan onlayn manba. Toshkentdagi sug'urta agentliklari uchun FRONTIX mijoz agentga qo'ng'iroq qilmasdan turib kerakli sug'urta turini tanlab, so'rov qoldiradigan sayt yaratadi.",
    bridge:
      "Avto, mulk yoki hayot sug'urtasi haqida ma'lumot olish uchun mijoz agentga qo'ng'iroq qilishi o'rniga, saytda har bir tur alohida sahifada shartlari va narx diapazoni bilan tushuntiriladi. SEO optimizatsiya orqali sayt tegishli qidiruv so'rovlarida topilib, yangi mijozlar oqimini oshiradi, mijoz esa saytdan turib qaysi tur o'ziga mos ekanini oldindan biladi.",
    faq: [
      {
        question: "Saytda sug'urta turlari haqida batafsil ma'lumot berish shartmi?",
        answer:
          "Ha, har bir sug'urta turi (avto, mulk, hayot) uchun alohida tushunarli sahifa mijozning agentga qo'ng'iroq qilib so'rash ehtiyojini kamaytiradi.",
      },
      {
        question: "Mijoz saytdan turib so'rov qoldirishi mumkinmi?",
        answer:
          "Ha, sayt orqali mijoz o'zi qiziqqan sug'urta turi bo'yicha so'rov qoldiradi, agent keyin bog'lanib, shartlarni aniqlashtiradi.",
      },
    ],
  },
  "sugurta-agentliklari__telegram-bot": {
    intro:
      "Telegram bot — mijozning polis muddati tugashidan oldin avtomatik eslatma yuboradigan va sug'urta bo'yicha savollarga tezkor javob beradigan tizim. Toshkentdagi sug'urta agentliklari uchun FRONTIX polis uzilib qolishining oldini oladigan avtomatik bildirishnoma tizimini yaratadi.",
    bridge:
      "Mijoz polis muddati tugashini bilmay sug'urtasi uzilib qolishi o'rniga, bot muddat tugashidan bir necha kun oldin avtomatik bildirishnoma yuboradi, mijoz vaqtida yangilashni unutmaydi. Da'vo (claim) topshirilgandan keyin uning holati bot orqali kuzatilib, mijoz javob kutib telefon qilishi shart bo'lmaydi.",
    faq: [
      {
        question: "Polis muddati tugashi haqida qachon xabar beriladi?",
        answer:
          "Avtomatik bildirishnomalar muddat tugashidan bir necha kun oldin yuboriladi, mijoz sug'urtasini vaqtida yangilash imkoniga ega bo'ladi.",
      },
      {
        question: "Da'vo (claim) holatini bot orqali kuzatish mumkinmi?",
        answer:
          "Ha, da'vo qabul qilingandan to yakunlanguncha bo'lgan bosqichlar botda ko'rinadi, mijoz har safar agentga qo'ng'iroq qilishi shart bo'lmaydi.",
      },
    ],
  },
  "sugurta-agentliklari__business-automation": {
    intro:
      "CRM avtomatlashtirish — agentning barcha mijozlari va ularning polis muddatlarini bitta tizimda saqlab, avtomatik kuzatadigan yechim. Toshkentdagi sug'urta agentliklari uchun FRONTIX shaxsiy daftarda yuritiladigan mijozlar bazasini raqamli va tartibli tizimga aylantiradi.",
    bridge:
      "Agentlar mijozlar bazasini shaxsiy daftar yoki Excelda yuritishi o'rniga, CRM integratsiyasi har bir mijozning polis turi, muddati va tarixini bitta joyda saqlaydi. Workflow avtomatizatsiya polis muddati tugayotgan mijozlarni avtomatik aniqlab, agentga ro'yxat chiqaradi, shu orqali sug'urta uzilib qolish holatlari kamayadi.",
    faq: [
      {
        question: "Mijozlar bazasini Excel o'rniga CRM'ga o'tkazish qiyinmi?",
        answer:
          "Yo'q, mavjud mijozlar ro'yxati tizimga import qilinadi, shundan keyin har bir mijoz kartasi orqali polis va muloqot tarixi yuritiladi.",
      },
      {
        question: "Qaysi mijozlarning polis muddati tugayotganini qanday bilsa bo'ladi?",
        answer:
          "Hisobot va analitika bo'limi muddati yaqinlashgan mijozlar ro'yxatini avtomatik ko'rsatadi, agent ularga oldindan murojaat qilishi mumkin.",
      },
    ],
  },
  "notarial-vositachilik__telegram-bot": {
    intro:
      "Telegram bot — mijoz kerakli hujjat turi va uning ro'yxatini oldindan bot orqali bilib, ortiqcha borib-kelishlarning oldini oladigan tizim. Toshkentdagi notarial va hujjat rasmiylashtirish xizmatlari uchun FRONTIX mijoz uchun aniq va tayyorgarlik bilan boradigan avtomatik ma'lumot tizimini yaratadi.",
    bridge:
      "Mijoz qaysi hujjat kerakligini bilmay borib, keyin qaytib kelishga majbur bo'lishi o'rniga, bot xizmat turini tanlaganda kerakli hujjatlar ro'yxatini oldindan yuboradi. Hujjat tayyor bo'lganda mijozga avtomatik bildirishnoma yuboriladi, mijoz holatni bilish uchun qo'ng'iroq qilib turishi shart bo'lmaydi.",
    faq: [
      {
        question: "Bot qaysi hujjatlar kerakligini qanday aytadi?",
        answer:
          "Mijoz kerakli xizmat turini tanlaganda, bot o'sha xizmat uchun zarur hujjatlar ro'yxatini avtomatik yuboradi, mijoz bir marta kelib hammasini topshiradi.",
      },
      {
        question: "Hujjat tayyor bo'lganda mijozga xabar beriladimi?",
        answer:
          "Ha, avtomatik bildirishnoma orqali hujjat tayyor bo'lishi bilan mijozga Telegram orqali xabar yuboriladi, mijoz qo'ng'iroq qilib surishtirmaydi.",
      },
    ],
  },
  "notarial-vositachilik__business-automation": {
    intro:
      "CRM avtomatlashtirish — har bir mijozning arizasi, hujjatlari va xizmat holatini bosqichma-bosqich kuzatib boradigan tizim. Toshkentdagi notarial xizmatlar uchun FRONTIX xizmat narxi, muddati va holatini tartibga solib, ish jarayonini shaffof qiladigan yechim yaratadi.",
    bridge:
      "Xizmat narxi va tayyor bo'lish muddati faqat telefon qilinganda aytilishi o'rniga, workflow avtomatizatsiya har bir xizmat turi uchun standart muddat va narxni tizimga kiritib, admin buni mijozga tezda aytib bera oladi. Har bir ariza qaysi bosqichda (qabul qilindi, tayyorlanmoqda, tayyor) ekanligi CRM'da belgilanadi, xodim mijozga holatni aytish uchun qog'ozlarni qidirib yurmaydi.",
    faq: [
      {
        question: "Xizmat narxi va muddatini oldindan bilish mumkinmi?",
        answer:
          "Ha, har bir xizmat turi uchun standart narx va muddat tizimga kiritilgan, admin mijozga darhol aniq javob bera oladi.",
      },
      {
        question: "Hujjat qaysi bosqichda ekanligini xodim qanday biladi?",
        answer:
          "CRM'da har bir ariza bosqichma-bosqich (qabul qilindi, tayyorlanmoqda, tayyor) belgilanadi, xodim buni bir qarashda ko'radi.",
      },
    ],
  },
  "notarial-vositachilik__website-development": {
    intro:
      "Veb-sayt — notarial xizmatlar ro'yxati, kerakli hujjatlar va narxlarni oldindan ko'rsatadigan ma'lumot manbai. Toshkentdagi notarial va hujjat rasmiylashtirish xizmatlari uchun FRONTIX mijoz joyga borishdan oldin tayyorgarlik ko'radigan tushunarli sayt yaratadi.",
    bridge:
      "Mijoz qaysi hujjat kerakligini bilmay bir necha marta borib-kelishi o'rniga, saytda har bir xizmat turi uchun zarur hujjatlar ro'yxati oldindan ko'rsatiladi, mijoz bir marta kelib ishini bitiradi. CMS integratsiyasi orqali ish vaqti va band kunlar yangilanib turadi, mijoz saytdan navbat holatini oldindan bilib boradi.",
    faq: [
      {
        question: "Saytda har bir xizmat uchun hujjatlar ro'yxati bo'ladimi?",
        answer:
          "Ha, har bir notarial xizmat turi uchun zarur hujjatlar ro'yxati alohida ko'rsatiladi, mijoz tayyorgarlik ko'rib keladi.",
      },
      {
        question: "Ish vaqti yoki band kunlar saytda ko'rinadimi?",
        answer:
          "Ha, CMS orqali ish jadvali va band kunlar yangilanib turadi, mijoz behuda borib qaytmaydi.",
      },
    ],
  },
  "reklama-agentliklari__website-development": {
    intro:
      "Veb-sayt — agentlikning ilgari qilgan loyihalari, narxlari va xizmat yo'nalishlarini professional portfolio sifatida ko'rsatadigan onlayn vitrina. Toshkentdagi reklama va marketing agentliklari uchun FRONTIX mijoz faqat Instagramga emas, ishonchli va to'liq ma'lumotli saytga tayanadigan yechim yaratadi.",
    bridge:
      "Yangi mijozlar agentlikning ilgari qilgan ishlarini ko'rish uchun faqat Instagramga tayanishi o'rniga, saytda to'liq portfolio, yo'nalishlar bo'yicha ishlar va mijozlar fikri alohida sahifalarda ko'rsatiladi. Custom UI/UX dizayn orqali portfolio jozibali va tez ko'rinadigan qilib qurilib, bu mijozning agentlikka ishonchini oshiradi.",
    faq: [
      {
        question: "Saytda portfolio qanday ko'rsatiladi?",
        answer:
          "Har bir loyiha alohida karta shaklida, tavsif va natija bilan ko'rsatiladi, mijoz agentlikning ish sifatini Instagramsiz ham baholay oladi.",
      },
      {
        question: "Sayt orqali yangi mijozlar qanday topiladi?",
        answer:
          "SEO optimizatsiya orqali sayt \"Toshkentda reklama agentligi\" kabi so'rovlarda topilib, Instagram tashqarisida ham yangi murojaatlar keladi.",
      },
    ],
  },
  "reklama-agentliklari__business-automation": {
    intro:
      "CRM avtomatlashtirish — har bir mijoz loyihasining bosqichi (brief, dizayn, tasdiq, chop) va deadlinini bitta tizimda kuzatadigan yechim. Toshkentdagi reklama agentliklari uchun FRONTIX qo'lda yuritiladigan loyihalar ro'yxatini tartibli va chalkashmaydigan tizimga aylantiradi.",
    bridge:
      "Loyihaning brief, dizayn, tasdiqlash va chop bosqichlari mijozga ko'rinmasligi o'rniga, workflow avtomatizatsiya har bir bosqichni belgilab, mijoz so'raganda admin holatni bir zumda ko'rsata oladi. Bir nechta mijoz loyihasi va deadline endi qog'ozda emas, CRM integratsiyasida bitta ro'yxatda kuzatiladi, muddatlar chalkashib ketmaydi.",
    faq: [
      {
        question: "Mijoz o'z loyihasining holatini qanday bilib turadi?",
        answer:
          "CRM'da loyiha bosqichlari (brief, dizayn, tasdiq, chop) belgilanadi, admin mijozga holatni tez va aniq aytib bera oladi.",
      },
      {
        question: "Bir nechta loyiha deadlinini kuzatish qanday osonlashadi?",
        answer:
          "Barcha loyihalar va ularning muddatlari bitta tizimda ro'yxatga olinadi, hisobot va analitika orqali qaysi loyiha muddati yaqinlashayotgani ko'rinib turadi.",
      },
    ],
  },
  "reklama-agentliklari__telegram-bot": {
    intro:
      "Telegram bot — mijozga loyiha bosqichi va kampaniya natijalari haqida avtomatik xabar yuboradigan tizim. Toshkentdagi reklama agentliklari uchun FRONTIX mijozning loyiha holatini bilish uchun yozishga majbur bo'lmaydigan avtomatik hisobot tizimini yaratadi.",
    bridge:
      "Loyiha qaysi bosqichda (brief, dizayn, tasdiq, chop) ekanligini bilish uchun mijoz yozib so'rashi o'rniga, bot muhim bosqichlar o'zgarganda avtomatik xabar yuboradi. Kampaniya natijalari (ko'rishlar, bosishlar) muntazam yuborilmasligi o'rniga, bot orqali haftalik yoki oylik qisqa hisobot avtomatik yetkaziladi, mijoz o'zi so'rab yurmaydi.",
    faq: [
      {
        question: "Loyiha bosqichi o'zgarganda mijozga xabar avtomatik boradimi?",
        answer:
          "Ha, avtomatik bildirishnomalar orqali loyiha muhim bosqichga o'tganda mijozga Telegramda xabar yuboriladi, mijoz alohida so'rashi shart emas.",
      },
      {
        question: "Kampaniya natijalarini bot orqali olish mumkinmi?",
        answer:
          "Ha, admin panelda tayyorlangan qisqa hisobot bot orqali mijozga muntazam (masalan, har hafta) avtomatik yuboriladi.",
      },
    ],
  },
  "veterinariya-klinikalari__website-development": {
    intro:
      "Veb-sayt — bu klinika haqida to'liq ma'lumot, ish vaqti va aloqa kanallarini bir joyda taqdim etadigan raqamli vitrina. Toshkentdagi veterinariya klinikalari uchun FRONTIX shoshilinch holatlarda egalar qaysi klinika ochiqligini darhol bilishi uchun aniq va tezkor sayt yaratadi.",
    bridge:
      "Uy hayvoni kechqurun yoki bayram kunida kasal bo'lib qolganda, egasi bir nechta raqamga qo'ng'iroq qilish o'rniga saytda klinikaning aniq ish vaqti va navbatchi shifokor haqidagi ma'lumotni ko'radi. Tezkor yuklanish tufayli sayt sekin internetda ham ochiladi, bu shoshilinch holatda muhim ahamiyatga ega.",
    faq: [
      {
        question: "Sayt orqali klinika ish vaqtini real vaqtda ko'rsatish mumkinmi?",
        answer:
          "Ha, CMS integratsiyasi orqali administrator ish vaqti yoki navbatchilik jadvalini istalgan vaqtda o'zgartirib, saytda yangilab turadi.",
      },
      {
        question: "Sayt qidiruv tizimlarida qanday chiqadi?",
        answer:
          "SEO optimizatsiya tufayli sayt 'Toshkentda veterinariya klinikasi' kabi so'rovlarda yuqori o'rinlarda chiqishga moslashtiriladi.",
      },
    ],
  },
  "veterinariya-klinikalari__telegram-bot": {
    intro:
      "Telegram bot — uy hayvoni egasi navbatga telefon qilmasdan yoziladigan va emlash muddatlari haqida eslatma oladigan avtomatik tizim. Toshkentdagi veterinariya klinikalari uchun FRONTIX band telefon liniyasi tufayli yo'qotiladigan mijozlarni bot orqali saqlab qoladi.",
    bridge:
      "Navbatga yozilish faqat telefon orqali bo'lgani uchun band soatlarda mijoz kutishga majbur bo'ladi — botda esa bo'sh vaqtni tanlab, bir necha bosishda navbatga yoziladi. Keyingi emlash yoki parazitlarga qarshi davolash muddati yaqinlashganda botdan avtomatik bildirishnoma yuboriladi, shu bilan muddat o'tkazib yuborilmaydi.",
    faq: [
      {
        question: "Bot bir nechta uy hayvoni uchun alohida eslatma yubora oladimi?",
        answer:
          "Ha, har bir hayvon uchun alohida profil yaratiladi va emlash yoki davolash muddati shu profil bo'yicha kuzatiladi.",
      },
      {
        question: "Shoshilinch holatda botdan foydalanish mumkinmi?",
        answer:
          "Ha, bot navbatchi shifokor va klinikaning joriy holati haqida tezkor ma'lumot beradi, mijoz qo'ng'iroq qilmasdan javob oladi.",
      },
    ],
  },
  "veterinariya-klinikalari__business-automation": {
    intro:
      "CRM avtomatlashtirish — har bir uy hayvonining emlash va davolash tarixini bitta tizimda saqlaydigan yechim. Toshkentdagi veterinariya klinikalari uchun FRONTIX qog'oz kartochkalar o'rniga markazlashgan mijoz bazasi yaratib, tarixni istalgan shifokor bir zumda ko'rishi imkonini beradi.",
    bridge:
      "Hayvonning emlash va davolash tarixi qog'oz kartochkada saqlangani uchun boshqa shifokorga murojaat qilganda hammasi qaytadan so'raladi — CRM integratsiyasi bilan bu tarix bitta profilda saqlanib, har qanday shifokor ochib ko'ra oladi. Workflow avtomatizatsiya orqali keyingi emlash sanasi tizimda avtomatik belgilanadi va eslatma vaqti kelganda mas'ul xodimga bildiriladi.",
    faq: [
      {
        question: "Bir nechta filial uchun mijoz bazasi umumiy bo'ladimi?",
        answer:
          "Ha, API bog'lanishlar orqali barcha filiallar bitta bazaga ulanadi, mijoz qaysi filialga murojaat qilishidan qat'i nazar tarixi ko'rinadi.",
      },
      {
        question: "Qaysi hayvonlar emlashga muhtoj ekanini hisobot orqali bilish mumkinmi?",
        answer:
          "Ha, hisobot va analitika bo'limida muddati yaqinlashgan yoki o'tib ketgan emlashlar ro'yxati avtomatik shakllanadi.",
      },
    ],
  },
  "stomatologiya-klinikalari__website-development": {
    intro:
      "Veb-sayt — bu stomatologiya xizmatlari, narxlar va shifokorlar haqida bemorga aniq ma'lumot beradigan raqamli manba. Toshkentdagi stomatologiya klinikalari uchun FRONTIX xizmat turiga qarab narx oralig'ini saytda ko'rsatib, mijozni oldindan qo'ng'iroq qilishga majbur qilmaydigan sayt yaratadi.",
    bridge:
      "Narxlar tish holatiga qarab farq qilgani va bu telefon qilinmaguncha noaniq qolgani sababli, mijozlar ko'pincha boshqa klinikaga murojaat qiladi — saytda xizmat turlari bo'yicha narx oralig'i va Custom UI/UX dizayn bilan tushunarli navigatsiya bu muammoni yumshatadi. CMS integratsiyasi orqali klinika narxlarni va shifokorlar ro'yxatini o'zi yangilab turishi mumkin.",
    faq: [
      {
        question: "Saytda har bir shifokorning mutaxassisligi haqida alohida sahifa bo'lishi mumkinmi?",
        answer:
          "Ha, CMS integratsiyasi orqali har bir shifokor uchun alohida profil sahifasi yaratilib, ish tajribasi va yo'nalishi ko'rsatiladi.",
      },
      {
        question: "Sayt orqali 'Toshkentda implant narxi' kabi so'rovlarda topilish mumkinmi?",
        answer:
          "Ha, SEO optimizatsiya xizmat turlari bo'yicha alohida sahifalar orqali aynan shunday so'rovlar uchun moslashtiriladi.",
      },
    ],
  },
  "stomatologiya-klinikalari__telegram-bot": {
    intro:
      "Telegram bot — bemorga davolash bosqichlari va yillik ko'rik muddati haqida avtomatik eslatma yuboradigan tizim. Toshkentdagi stomatologiya klinikalari uchun FRONTIX ko'p bosqichli davolashni bemor unutmasligi uchun bot orqali kuzatib boradi.",
    bridge:
      "Ko'p bosqichli davolash rejasi (masalan implant yoki breket) faqat og'zaki tushuntirilgani uchun bemor keyingi bosqichni unutib qo'yadi — botda esa har bir bosqich va uning sanasi yozma tarzda saqlanib, avtomatik bildirishnoma orqali eslatiladi. Yillik profilaktik ko'rikka kelish kerakligi haqida ham bot mijozga o'z vaqtida xabar beradi.",
    faq: [
      {
        question: "Bot davolash rejasining qaysi bosqichida ekanini ko'rsata oladimi?",
        answer:
          "Ha, admin panel orqali shifokor bemorning joriy bosqichini belgilaydi, bot esa bemorga keyingi tashrif sanasini eslatadi.",
      },
      {
        question: "To'lovni bosqichma-bosqich botdan amalga oshirish mumkinmi?",
        answer:
          "Ha, to'lov integratsiyasi orqali har bir davolash bosqichi uchun alohida to'lov botda amalga oshiriladi.",
      },
    ],
  },
  "stomatologiya-klinikalari__business-automation": {
    intro:
      "CRM avtomatlashtirish — bemorning davolash tarixi, rentgen suratlari va rejasini bitta tizimda birlashtiruvchi yechim. Toshkentdagi stomatologiya klinikalari uchun FRONTIX shifokor band bo'lgan taqdirda ham navbat va bemor ma'lumotlarini tartibli boshqarishni ta'minlaydi.",
    bridge:
      "Shifokor oldingi bemor bilan band bo'lganda, navbatdagi mijoz necha daqiqa kutishini bilmaydi — workflow avtomatizatsiya orqali navbat vaqti tizimda kuzatilib, kechikish haqida mijozga xabar beriladi. CRM integratsiyasi bemorning barcha davolash tarixi va rentgen suratlarini bitta profilda saqlaydi, shifokor har safar qaytadan so'ramaydi.",
    faq: [
      {
        question: "Rentgen suratlarini tizimga biriktirish mumkinmi?",
        answer:
          "Ha, CRM integratsiyasi bemor profiliga rentgen va boshqa hujjatlarni biriktirish imkonini beradi, shifokor istalgan vaqt ularni ko'ra oladi.",
      },
      {
        question: "Yillik ko'rikka kelmagan bemorlarni aniqlash mumkinmi?",
        answer:
          "Ha, hisobot va analitika bo'limi oxirgi tashrifidan bir yildan ortiq vaqt o'tgan bemorlar ro'yxatini avtomatik shakllantiradi.",
      },
    ],
  },
  "dorixonalar__website-development": {
    intro:
      "Veb-sayt — dorixona filiallari, ish vaqti va dorilar mavjudligi haqida mijozga tezkor ma'lumot beradigan onlayn manba. Toshkentdagi dorixonalar uchun FRONTIX mijoz qo'ng'iroq qilmasdan kerakli filialni topishi uchun tezkor va aniq sayt yaratadi.",
    bridge:
      "Tungi yoki 24 soat ishlaydigan eng yaqin filialni internetda topa olmagani uchun mijoz noaniqlikda qoladi — saytda filiallar xaritasi va ish vaqti aniq ko'rsatilib, Tezkor yuklanish tufayli bu ma'lumot shoshilinch holatda ham darhol ochiladi. CMS integratsiyasi orqali dorixona filial ma'lumotlarini o'zi yangilab turadi.",
    faq: [
      {
        question: "Saytda qaysi filial tungi ish vaqtida ishlashini ko'rsatish mumkinmi?",
        answer:
          "Ha, CMS integratsiyasi orqali har bir filial uchun alohida ish vaqti, jumladan tungi rejim belgilanadi.",
      },
      {
        question: "Sayt orqali 'yaqin atrofdagi dorixona' so'roviga chiqish mumkinmi?",
        answer:
          "Ha, SEO optimizatsiya filiallar bo'yicha alohida sahifalar orqali mahalliy qidiruv natijalarida ko'rinishni yaxshilaydi.",
      },
    ],
  },
  "dorixonalar__telegram-bot": {
    intro:
      "Telegram bot — mijoz kerakli dorini qidirib, mavjudligini tezda bilib oladigan avtomatik tizim. Toshkentdagi dorixonalar uchun FRONTIX filialga qo'ng'iroq qilish o'rniga botdan javob olish imkonini yaratadi.",
    bridge:
      "Kerakli dori mavjudligini bilish uchun mijoz qo'ng'iroq qilishi yoki bir necha dorixonani aylanib chiqishi kerak bo'lgani uchun vaqt yo'qotadi — botga dori nomini yozib, qaysi filialda mavjudligini darhol bilib oladi. Doimiy qabul qilinadigan dorilar tugash muddati yaqinlashganda bot avtomatik bildirishnoma yuboradi, mijoz dorisiz qolmaydi.",
    faq: [
      {
        question: "Retsept asosidagi dorini botdan oldindan buyurtma qilish mumkinmi?",
        answer:
          "Ha, buyurtma qabul qilish funksiyasi orqali mijoz retsept rasmini yuborib, dorini oldindan bron qilishi mumkin.",
      },
      {
        question: "Bot orqali to'lov qilish imkoni bormi?",
        answer:
          "Ha, to'lov integratsiyasi orqali mijoz dorini oldindan to'lab, filialdan tayyor holda olishi mumkin.",
      },
    ],
  },
  "dorixonalar__online-ordering": {
    intro:
      "Onlayn buyurtma tizimi — mijoz dorilarni saytdan tanlab, yetkazib berish yoki filialdan olib ketishni buyurtma qiladigan tizim. Toshkentdagi dorixonalar uchun FRONTIX retsept asosidagi dorilarni ham oldindan buyurtma qilish imkonini yaratadi.",
    bridge:
      "Retsept asosidagi dorilarni oldindan buyurtma qilib, filialga borganda tayyor holda olish imkoni yo'qligi sababli mijoz navbatda kutadi — savat va to'lov funksiyasi orqali mijoz dorini onlayn buyurtma qilib, filialda faqat olib ketadi. Ombor integratsiyasi tufayli tizim qaysi filialda dori qolganini real vaqtda ko'rsatadi, mijoz bo'sh joyga bormaydi.",
    faq: [
      {
        question: "Buyurtma qilingan dori uyga yetkazib beriladimi?",
        answer:
          "Ha, yetkazib berish trekingi orqali mijoz buyurtmasining qayerdaligini real vaqtda kuzatib borishi mumkin.",
      },
      {
        question: "Oldingi buyurtmalarni qayta takrorlash mumkinmi?",
        answer:
          "Ha, buyurtmalar tarixi bo'limi orqali mijoz doimiy qabul qiladigan dorilarini bir bosishda qayta buyurtma qiladi.",
      },
    ],
  },
  "optika-salonlari__website-development": {
    intro:
      "Veb-sayt — optika salonining xizmatlari, rom kolleksiyasi va narxlari haqida mijozga vizual ma'lumot beradigan onlayn vitrina. Toshkentdagi optika salonlari uchun FRONTIX mijoz do'konga bormasdan mavjud modellarni ko'rib chiqishi uchun sifatli sayt yaratadi.",
    bridge:
      "Yangi kolleksiya haqida mijozlarga tizimli xabar berish imkoni yo'qligi sababli ular yangiliklardan bexabar qoladi — saytda yangi kolleksiya alohida bo'lim sifatida joylashtirilib, Custom UI/UX dizayn orqali mahsulotlar chiroyli taqdim etiladi. CMS integratsiyasi tufayli salon yangi mahsulotlarni o'zi qo'shib turishi mumkin.",
    faq: [
      {
        question: "Saytda ko'z tekshiruvi uchun onlayn yozilish mumkinmi?",
        answer:
          "Ha, saytga onlayn ariza formasi joylashtiriladi, mijoz kerakli sana va vaqtni tanlab tekshiruvga yoziladi.",
      },
      {
        question: "Sayt mobil telefonda qulay ishlaydimi?",
        answer:
          "Ha, sayt barcha qurilmalarga moslashtirilgan holda ishlab chiqiladi, Tezkor yuklanish tufayli mobil internetda ham tez ochiladi.",
      },
    ],
  },
  "optika-salonlari__telegram-bot": {
    intro:
      "Telegram bot — ko'zoynak yoki linza buyurtmasi tayyor bo'lganda mijozga avtomatik xabar yuboradigan tizim. Toshkentdagi optika salonlari uchun FRONTIX xodimning qo'lda telefon qilishi o'rniga botni ishlatib, mijozga tezroq va aniqroq xabar yetkazadi.",
    bridge:
      "Ko'zoynak yoki linza tayyor bo'lganda mijozga xabar berish xodim tomonidan qo'lda amalga oshirilgani uchun ba'zan kechikadi yoki unutiladi — bot buyurtma holati o'zgarganda avtomatik bildirishnoma yuboradi. Mijoz oldingi safar tanlagan rom modeli yoki linza turini eslay olmagani uchun bot profilida bu ma'lumotlar saqlanib, keyingi buyurtmada tezda topiladi.",
    faq: [
      {
        question: "Bot orqali retsept ma'lumotlarini saqlash mumkinmi?",
        answer:
          "Ha, mijozning ko'z tekshiruvi natijalari bot profiliga yoziladi va keyingi tashrifda qayta so'ralmaydi.",
      },
      {
        question: "Buyurtma tayyor bo'lganda qanday xabar keladi?",
        answer:
          "Avtomatik bildirishnomalar orqali mijozga buyurtma tayyorligi va uni qachon olib ketish mumkinligi haqida xabar yuboriladi.",
      },
    ],
  },
  "optika-salonlari__business-automation": {
    intro:
      "CRM avtomatlashtirish — mijozning ko'z tekshiruvi natijalari va buyurtma tarixini bitta profilda saqlaydigan tizim. Toshkentdagi optika salonlari uchun FRONTIX qog'ozda yo'qolib qoladigan retseptlarni raqamli formatda saqlab, salonning har bir tashrifda qayta ishlashini osonlashtiradi.",
    bridge:
      "Ko'z tekshiruvi natijasi mijozga faqat qog'ozda berilgani va u yo'qolsa qayta tekshiruv kerak bo'lgani uchun vaqt yo'qotiladi — CRM integratsiyasi bu natijalarni mijoz profilida doimiy saqlaydi, xodim istalgan vaqt ochib ko'radi. Workflow avtomatizatsiya orqali yangi kolleksiya yoki chegirma haqida barcha mijozlarga bir vaqtda xabar yuborish sozlanadi.",
    faq: [
      {
        question: "Bir necha yil oldingi retseptni topish mumkinmi?",
        answer:
          "Ha, CRM integratsiyasi mijozning barcha o'tgan tekshiruv natijalarini xronologik tartibda saqlaydi.",
      },
      {
        question: "Qaysi mijozlar qaysi rom modelini ko'p sotib olishini bilish mumkinmi?",
        answer:
          "Ha, hisobot va analitika bo'limi mahsulot bo'yicha sotuv statistikasini ko'rsatadi, bu yangi kolleksiya tanlashda yordam beradi.",
      },
    ],
  },
  "massaj-va-spa-markazlari__telegram-bot": {
    intro:
      "Telegram bot — seansga bron qilish va terapevt bandligini bir joyda ko'rsatadigan avtomatik tizim. Toshkentdagi massaj va SPA markazlari uchun FRONTIX telefon liniyasi band bo'lganda yo'qotiladigan mijozlarni bot orqali saqlab qoladi.",
    bridge:
      "Seansga bron qilish faqat telefon orqali bo'lgani va band soatlarda mijoz javob kuta olmagani uchun boshqa markazga ketadi — botda mijoz bo'sh vaqtni ko'rib, o'zi seansga yoziladi. Abonement bo'yicha qolgan seanslar soni qog'ozdagi kartochkada belgilangani uchun bahs chiqishi mumkin edi, endi bu son bot profilida avtomatik yuritiladi.",
    faq: [
      {
        question: "Bot orqali qaysi terapevt bo'sh ekanini ko'rish mumkinmi?",
        answer:
          "Ha, bot barcha terapevtlarning band vaqtlarini ko'rsatadi, mijoz kerakli mutaxassisni tanlab yoziladi.",
      },
      {
        question: "Abonement seanslarini bot orqali kuzatish mumkinmi?",
        answer:
          "Ha, mijozning qolgan seanslar soni bot profilida saqlanadi va har bron qilishda avtomatik yangilanadi.",
      },
    ],
  },
  "massaj-va-spa-markazlari__website-development": {
    intro:
      "Veb-sayt — SPA markazining xizmatlari, narxlari va terapevtlari haqida mijozga to'liq tasavvur beruvchi onlayn manba. Toshkentdagi massaj va SPA markazlari uchun FRONTIX mijoz telefon qilmasdan xizmatlar ro'yxati va narxlarni ko'rishi uchun sifatli sayt yaratadi.",
    bridge:
      "Bir nechta terapevtning bandligi markazlashgan holda ko'rinmagani uchun administrator har birining jadvalini alohida tekshirishga majbur bo'ladi — saytga integratsiyalangan bron tizimi orqali mijoz terapevt va bo'sh vaqtni ko'rib, o'zi tanlaydi. Custom UI/UX dizayn orqali xizmatlar va narxlar tushunarli tarzda taqdim etiladi.",
    faq: [
      {
        question: "Saytda xizmat narxlarini ko'rsatish mumkinmi?",
        answer:
          "Ha, CMS integratsiyasi orqali markaz har bir xizmat turi uchun narxni o'zi kiritadi va yangilab turadi.",
      },
      {
        question: "Sayt orqali 'Toshkentda massaj xizmati' so'rovida topilish mumkinmi?",
        answer:
          "Ha, SEO optimizatsiya xizmat turlari bo'yicha alohida sahifalar orqali shunday so'rovlarda ko'rinishni yaxshilaydi.",
      },
    ],
  },
  "massaj-va-spa-markazlari__business-automation": {
    intro:
      "CRM avtomatlashtirish — mijozning sog'liq holati, abonement va tashrif tarixini bitta tizimda saqlaydigan yechim. Toshkentdagi massaj va SPA markazlari uchun FRONTIX qog'ozda yuritiladigan yozuvlarni raqamli bazaga o'tkazib, xavfsiz va tartibli boshqaruvni ta'minlaydi.",
    bridge:
      "Mijozning sog'liq holati yoki kontrendikatsiyalari (masalan homiladorlik, allergiya) hech qayerda yozilmagani uchun har safar og'zaki so'ralishi kerak bo'lgan — CRM integratsiyasi bu ma'lumotlarni mijoz profilida saqlaydi, terapevt har safar qaytadan so'ramaydi. Workflow avtomatizatsiya orqali abonement muddati tugab qolayotgan mijozlar avtomatik aniqlanadi va ularga eslatma yuboriladi.",
    faq: [
      {
        question: "Mijozning kontrendikatsiyalarini terapevt ko'ra oladimi?",
        answer:
          "Ha, CRM integratsiyasi orqali mijoz profilidagi sog'liq holati haqidagi eslatmalar terapevtga seansdan oldin ko'rinadi.",
      },
      {
        question: "Abonementi tugab qolgan mijozlarni aniqlash mumkinmi?",
        answer:
          "Ha, hisobot va analitika bo'limi qolgan seanslari kamayib qolgan mijozlar ro'yxatini avtomatik shakllantiradi.",
      },
    ],
  },
  "uy-hayvonlari-dokonlari__telegram-bot": {
    intro:
      "Telegram bot — ozuqa va aksessuar mavjudligini tekshirish hamda groomer xizmatiga yozilishni bitta joyda birlashtiruvchi tizim. Toshkentdagi uy hayvonlari do'konlari uchun FRONTIX do'konga qo'ng'iroq qilish o'rniga botdan tezkor javob olish imkonini yaratadi.",
    bridge:
      "Groomer xizmatiga navbat faqat telefon orqali yozilgani va band soatlarda mijoz javob kuta olmagani uchun boshqa joyga murojaat qiladi — botda mijoz bo'sh vaqtni ko'rib, o'zi navbatga yoziladi. Kerakli ozuqa yoki aksessuar mavjudligini bilish uchun endi qo'ng'iroq qilish shart emas, bot mahsulot nomi bo'yicha javob beradi.",
    faq: [
      {
        question: "Bot orqali hayvon turiga mos ozuqa bo'yicha maslahat olish mumkinmi?",
        answer:
          "Ha, bot mahsulot toifalarini hayvon turi va yoshi bo'yicha filtrlaydi, mijoz mosini tanlab ko'radi.",
      },
      {
        question: "Groomer xizmatiga bot orqali yozilish mumkinmi?",
        answer:
          "Ha, buyurtma qabul qilish funksiyasi orqali mijoz groomer xizmati uchun sana va vaqtni tanlab yoziladi.",
      },
    ],
  },
  "uy-hayvonlari-dokonlari__online-ordering": {
    intro:
      "Onlayn buyurtma tizimi — mijoz ozuqa va aksessuarlarni saytdan tanlab, yetkazib berish yoki olib ketishni buyurtma qiladigan tizim. Toshkentdagi uy hayvonlari do'konlari uchun FRONTIX mijoz do'konga bormasdan kerakli mahsulotni topib buyurtma qilishi imkonini yaratadi.",
    bridge:
      "Kerakli ozuqa yoki aksessuar mavjudligini bilish uchun mijoz do'konga qo'ng'iroq qilishi yoki shaxsan borishi kerak bo'lgan — savat va to'lov funksiyasi orqali mijoz mahsulotni saytdan ko'rib, mavjudligini tekshirib, onlayn buyurtma qiladi. Ombor integratsiyasi tufayli tizim mahsulot qoldig'ini real vaqtda ko'rsatadi, mijoz omborda yo'q narsani buyurtma qilmaydi.",
    faq: [
      {
        question: "Doimiy qabul qilinadigan ozuqa uchun qayta buyurtma qulaymi?",
        answer:
          "Ha, buyurtmalar tarixi bo'limi orqali mijoz oldingi buyurtmasini bir bosishda qayta rasmiylashtiradi.",
      },
      {
        question: "Buyurtma qachon yetib kelishini kuzatish mumkinmi?",
        answer:
          "Ha, yetkazib berish trekingi orqali mijoz buyurtmasining holatini real vaqtda ko'rib boradi.",
      },
    ],
  },
  "uy-hayvonlari-dokonlari__business-automation": {
    intro:
      "CRM avtomatlashtirish — mijoz va uning uy hayvoni haqidagi ma'lumotlarni, shu jumladan ozuqa iste'mol tarixini saqlaydigan tizim. Toshkentdagi uy hayvonlari do'konlari uchun FRONTIX doimiy mijozlarga ozuqa tugash muddatidan oldin avtomatik eslatma yuborish imkonini yaratadi.",
    bridge:
      "Doimiy mijozning hayvoni uchun oldingi buyurtma qilingan ozuqa tugash muddati kuzatilmagani uchun eslatma yuborilmaydi — workflow avtomatizatsiya orqali har bir mijozning oxirgi xarid sanasi va ozuqa hajmidan kelib chiqib, tugash muddati hisoblanadi va avtomatik eslatma yuboriladi. CRM integratsiyasi mijozning hayvon turi, zoti va afzal ko'rgan mahsulotlarini saqlab, maslahat berishni osonlashtiradi.",
    faq: [
      {
        question: "Qaysi mijozlarga ozuqa tugayotgani haqida eslatma ketishi kerakligini tizim o'zi aniqlaydimi?",
        answer:
          "Ha, workflow avtomatizatsiya oldingi xarid sanasi va odatiy ozuqa sarfi asosida eslatma yuborish vaqtini avtomatik hisoblaydi.",
      },
      {
        question: "Hayvon turi bo'yicha statistikani ko'rish mumkinmi?",
        answer:
          "Ha, hisobot va analitika bo'limi qaysi hayvon turlari uchun qaysi mahsulotlar ko'p sotilishini ko'rsatadi.",
      },
    ],
  },
  "qurilish-va-tamirlash__website-development": {
    intro:
      "Veb-sayt — kompaniyangizning bajarilgan ishlari, narxlari va aloqa ma'lumotlarini bir joyda jamlaydigan raqamli vitrina. Toshkentdagi qurilish va ta'mirlash kompaniyalari uchun FRONTIX mijozning ishonchini og'zaki tavsiyadan mustaqil qozonadigan sayt yaratadi.",
    bridge:
      "Mijoz avvalgi obyektlar va narxlar haqida ishonchli manba topolmasligi o'rniga, sayt CMS integratsiyasi orqali tugallangan loyihalar galereyasini — suratlar, kvadrat metr narxi, bajarilish muddati bilan — doimiy yangilab boradi; qidiruv tizimlarida \"Toshkentda ta'mirlash\" kabi so'rovlar bo'yicha ko'rinish SEO optimizatsiya orqali oshadi.",
    faq: [
      {
        question: "Saytda bajarilgan obyektlarni qanday ko'rsatish mumkin?",
        answer:
          "Har bir obyekt uchun surat, maydon, muddat va narx diapazoni ko'rsatilgan portfolio bo'limi yaratiladi, uni o'zingiz CMS orqali yangilab turasiz.",
      },
      {
        question: "Sayt orqali mijoz smeta so'rovini qoldira oladimi?",
        answer:
          "Ha, obyekt turi va taxminiy hajmni kiritadigan forma orqali mijoz to'g'ridan-to'g'ri smeta so'rovi yuboradi, u sizga xabar sifatida keladi.",
      },
    ],
  },
  "qurilish-va-tamirlash__business-automation": {
    intro:
      "CRM avtomatlashtirish — har bir qurilish obyektining bosqichlari, brigadalari va materiallarini bitta tizimda kuzatib boradigan yechim. Toshkentdagi qurilish kompaniyalari uchun FRONTIX loyiha holatini telefon orqali so'rash o'rniga tizimdan bir zumda ko'rish imkonini beradi.",
    bridge:
      "Loyihaning qaysi bosqichida ekanligi mijozga ko'rinmasligi o'rniga, workflow avtomatizatsiya har bir obyektni smeta → material → ishlar → topshirish bosqichlariga bo'lib, joriy holatni tizimda ko'rsatadi; bir nechta obyektda ishlayotgan brigadalar va ularga ajratilgan materiallar CRM integratsiyasi orqali bitta jadvalda kuzatiladi, endi hech kim telefon qilib surishtirmaydi.",
    faq: [
      {
        question: "Tizim bir nechta obyektni bir vaqtda kuzatishga yordam beradimi?",
        answer:
          "Ha, har bir obyekt alohida karta sifatida ko'rsatiladi, unda biriktirilgan brigada, bosqich va muddat aks etadi.",
      },
      {
        question: "Material sarfini hisobotda ko'rish mumkinmi?",
        answer:
          "Ha, har bir obyektga ajratilgan material va uning sarfi hisobot va analitika bo'limida taqqoslab ko'rsatiladi.",
      },
    ],
  },
  "qurilish-va-tamirlash__custom-software": {
    intro:
      "Maxsus dasturiy yechim — kompaniyangizning smeta va xarajat hisob-kitob jarayoniga moslab ishlab chiqilgan individual tizim. Toshkentdagi qurilish kompaniyalari uchun FRONTIX Excel jadvalidagi qo'lda hisoblash xatolarini yo'qotadigan smeta kalkulyatorini yaratadi.",
    bridge:
      "Material narxi o'zgarganda smetani qayta hisoblashda xato ko'payishi o'rniga, individual arxitektura asosida qurilgan tizim narx bazasini markazlashtiradi va o'zgarish kiritilganda barcha bog'liq smetalarni avtomatik qayta hisoblaydi; kompaniya obyektlar sonini oshirgani sayin tizim masshtablanuvchan bo'lgani uchun qo'shimcha yuklamaga bardosh beradi.",
    faq: [
      {
        question: "Tizim mavjud narx bazamiz bilan ishlay oladimi?",
        answer:
          "Ha, tizim sizning material va ishchi kuchi narxlari bazasi asosida individual arxitektura bo'yicha quriladi, uni istalgan vaqt yangilab borish mumkin.",
      },
      {
        question: "Kelajakda tizimga yangi funksiyalar qo'shish mumkinmi?",
        answer:
          "Ha, uzoq muddatli qo'llab-quvvatlash doirasida yangi obyekt turlari yoki hisobot shakllari qo'shilishi ta'minlanadi.",
      },
    ],
  },
  "kochmas-mulk-agentliklari__website-development": {
    intro:
      "Veb-sayt — mulk e'lonlarini filtrlash imkoniyati bilan bitta manbada jamlaydigan platforma. Toshkentdagi ko'chmas mulk agentliklari uchun FRONTIX narx, hudud va xona soni bo'yicha qidirish mumkin bo'lgan sayt yaratadi.",
    bridge:
      "Mulk e'lonlari bir nechta saytga qo'lda joylashtirilib, yangilanishi kechikishi o'rniga, CMS integratsiyasi orqali barcha e'lonlar bitta panelda boshqariladi va narx o'zgarganda faqat bir joyda tahrirlanadi; mijoz agentga qo'ng'iroq qilib surishtirish o'rniga narx, hudud va xona soni bo'yicha filtr orqali o'ziga mos uy-joyni sayt ichida topadi.",
    faq: [
      {
        question: "Bitta e'lonni bir nechta saytda qayta joylashtirish shart bo'ladimi?",
        answer:
          "Yo'q, CMS orqali e'lonni bir marta kiritasiz, sayt uni avtomatik ko'rsatadi va narx yoki holat o'zgarganda faqat shu yerda yangilaysiz.",
      },
      {
        question: "Mijoz saytda mulkni qanday filtrlaydi?",
        answer:
          "Narx oralig'i, hudud, xona soni va maydon bo'yicha filtr orqali mos e'lonlar ro'yxati bir necha soniyada chiqadi.",
      },
    ],
  },
  "kochmas-mulk-agentliklari__telegram-bot": {
    intro:
      "Telegram bot — mulkni ko'rishga yozilish va yangi e'lonlar haqida xabar berish jarayonini avtomatlashtiradigan vosita. Toshkentdagi ko'chmas mulk agentliklari uchun FRONTIX ko'rik vaqtini faqat telefon orqali kelishish muammosini hal qiladi.",
    bridge:
      "Ko'rikka yozilish faqat telefon orqali bo'lib, band vaqtlar to'qnashib qolishi o'rniga, bot buyurtma qabul qilish funksiyasi orqali mijozga bo'sh vaqt oralig'larini ko'rsatadi va u o'zi mos vaqtni tanlaydi; yangi mezonlarga mos e'lon paydo bo'lganda avtomatik bildirishnomalar orqali mijozga xabar yuboriladi.",
    faq: [
      {
        question: "Mijoz botda ko'rikka qanday yoziladi?",
        answer:
          "Bot mavjud bo'sh vaqt oralig'larini ko'rsatadi, mijoz mos kelganini tanlagach, agentga avtomatik xabar boradi.",
      },
      {
        question: "Bot yangi e'lonlar haqida xabar bera oladimi?",
        answer:
          "Ha, mijoz belgilagan narx va hudud mezonlariga mos yangi e'lon qo'shilganda bot avtomatik bildirishnoma yuboradi.",
      },
    ],
  },
  "kochmas-mulk-agentliklari__business-automation": {
    intro:
      "CRM avtomatlashtirish — sotuvchi va xaridor o'rtasidagi bitim bosqichlarini boshidan oxirigacha kuzatib boradigan tizim. Toshkentdagi ko'chmas mulk agentliklari uchun FRONTIX kelishuv, hujjatlar va notarial rasmiylashtirish muddatlarini bitta joyda saqlaydi.",
    bridge:
      "Bitim bosqichlari qog'ozda yoki xotirada kuzatilib, muddatlar chalkashib ketishi o'rniga, workflow avtomatizatsiya har bir bitimni kelishuv → hujjatlar yig'ish → notarial rasmiylashtirish bosqichlariga bo'lib, joriy holatni ko'rsatadi; CRM integratsiyasi orqali har bir mijoz va mulk bo'yicha to'liq tarix saqlanadi, hech qaysi bitim e'tibordan chetda qolmaydi.",
    faq: [
      {
        question: "Tizim bir nechta bitimni bir vaqtda kuzatishga yordam beradimi?",
        answer:
          "Ha, har bir bitim alohida karta sifatida ko'rsatiladi, unda joriy bosqich va navbatdagi qadam aks etadi.",
      },
      {
        question: "Hujjatlar muddati o'tib ketmasligi uchun eslatma bormi?",
        answer:
          "Ha, notarial rasmiylashtirish yoki hujjat topshirish muddati yaqinlashganda tizim mas'ul xodimga avtomatik eslatma beradi.",
      },
    ],
  },
  "usta-xizmatlari__telegram-bot": {
    intro:
      "Telegram bot — shoshilinch chaqiruvlarni qabul qilib, mavjud ustani darhol biriktiradigan vosita. Toshkentdagi santexnik, elektrik va uy ustalari xizmatlari uchun FRONTIX mijozning quvur yorilishi kabi holatda ustani tasodifiy e'lonlardan qidirishiga hojat qoldirmaydi.",
    bridge:
      "Mijoz shoshilinch holatda ishonchli ustani tezda topa olmasligi o'rniga, bot buyurtma qabul qilish funksiyasi orqali muammo turini so'raydi va bo'sh ustani darhol biriktiradi; usta yo'lga chiqqach, avtomatik bildirishnomalar orqali mijozga taxminiy yetib kelish vaqti yuboriladi, endi u butun kun kutib o'tirmaydi.",
    faq: [
      {
        question: "Shoshilinch chaqiruvda bot qanday ishlaydi?",
        answer:
          "Mijoz muammo turini yozadi yoki tanlaydi, bot shu zahoti bo'sh ustani topib, uning yo'lga chiqqanini tasdiqlaydi.",
      },
      {
        question: "Usta qachon yetib kelishini oldindan bilish mumkinmi?",
        answer:
          "Ha, usta buyurtmani qabul qilgach, taxminiy yetib kelish vaqti haqida avtomatik bildirishnoma yuboriladi.",
      },
    ],
  },
  "usta-xizmatlari__business-automation": {
    intro:
      "CRM avtomatlashtirish — bajarilgan ishlar, kafolat muddatlari va ustalar bandligini bitta tizimda saqlaydigan yechim. Toshkentdagi usta xizmatlari uchun FRONTIX og'zaki aytiladigan kafolatni yozma va tekshiriladigan holatga o'tkazadi.",
    bridge:
      "Kafolat muddati og'zaki aytilib, muammo qaytalanganda bahs chiqishi o'rniga, CRM integratsiyasi har bir bajarilgan ish uchun kafolat sanasini avtomatik saqlaydi va mijoz murojaat qilganda uni bir zumda tekshirish mumkin; bir nechta ustaning bandligi markazlashgan holda ko'rinmasligi o'rniga, workflow avtomatizatsiya barcha ustalarning joriy holatini bitta jadvalda ko'rsatadi, buyurtmalar bo'sh ustaga avtomatik yo'naltiriladi.",
    faq: [
      {
        question: "Kafolat muddatini mijoz o'zi tekshira oladimi?",
        answer:
          "Ha, bajarilgan ish raqami orqali kafolat sanasi va shartlari tizimda saqlanadi, mas'ul xodim uni istalgan vaqt ko'rsatishi mumkin.",
      },
      {
        question: "Ustalarning bandligini qanday taqsimlaysiz?",
        answer:
          "Har bir ustaning joriy holati (band yoki bo'sh) tizimda ko'rinadi, yangi buyurtma avtomatik ravishda bo'sh ustaga yo'naltiriladi.",
      },
    ],
  },
  "usta-xizmatlari__website-development": {
    intro:
      "Veb-sayt — ko'rsatiladigan xizmatlar, narxlar va mijozlar fikrini bir joyda jamlaydigan ishonch manbai. Toshkentdagi santexnik, elektrik va uy ustalari xizmatlari uchun FRONTIX tasodifiy e'lonlar o'rniga tekshiriladigan, professional saytni taqdim etadi.",
    bridge:
      "Mijoz shoshilinch holatda ishonchli ustani topolmasligi o'rniga, sayt xizmatlar ro'yxati, taxminiy narxlar va bajarilgan ishlar misolini aniq ko'rsatadi, bu esa qidiruv orqali kelgan mijozning ishonchini oshiradi; SEO optimizatsiya orqali \"Toshkentda santexnik chaqirish\" kabi shoshilinch so'rovlar bo'yicha sayt yuqori o'rinlarda chiqadi.",
    faq: [
      {
        question: "Saytda narxlarni ko'rsatish shartmi?",
        answer:
          "Shart emas, lekin taxminiy narx diapazonini ko'rsatish mijozning ishonchini oshiradi va ortiqcha qo'ng'iroqlarni kamaytiradi.",
      },
      {
        question: "Sayt tezkor yuklanishi nega muhim?",
        answer:
          "Shoshilinch holatda mijoz saytni telefonda ochadi, tezkor yuklanish uni kutdirmasdan aloqa ma'lumotiga yetkazadi.",
      },
    ],
  },
  "dizayn-studiyalari__website-development": {
    intro:
      "Veb-sayt — bajarilgan loyihalarni uslub va xona turi bo'yicha saralab ko'rsatadigan raqamli portfolio. Toshkentdagi arxitektura va interyer dizayn studiyalari uchun FRONTIX Instagram'dagi tartibsiz suratlar o'rniga tizimlashtirilgan katalog yaratadi.",
    bridge:
      "Loyihalar faqat Instagram'da tartibsiz joylashtirilib, mijoz uslub yoki xona turi bo'yicha qidira olmasligi o'rniga, CMS integratsiyasi orqali har bir loyiha uslub, maydon va xona turi bo'yicha teglanadi, mijoz filtr orqali o'ziga yaqin ishlarni topadi; Custom UI/UX dizayn orqali portfolio vizual jihatdan studiya brendiga mos ko'rinishda taqdim etiladi.",
    faq: [
      {
        question: "Portfolioni Instagram'dan saytga qanday ko'chirish mumkin?",
        answer:
          "Har bir loyiha CMS orqali surat, uslub va xona turi bilan bir marta kiritiladi, undan keyin saytda tartiblangan katalog sifatida ko'rinadi.",
      },
      {
        question: "Mijoz o'ziga mos uslubni qanday topadi?",
        answer:
          "Zamonaviy, klassik yoki minimalist kabi uslub bo'yicha filtrlash orqali mijoz mos loyihalarni tezda ko'radi.",
      },
    ],
  },
  "dizayn-studiyalari__telegram-bot": {
    intro:
      "Telegram bot — loyiha bosqichlari va fayllarni bitta kanalda tartibli tarzda yetkazib beradigan vosita. Toshkentdagi dizayn studiyalari uchun FRONTIX eskiz, 3D vizualizatsiya va yakuniy chizmani mijozga tushunarli tartibda taqdim etadi.",
    bridge:
      "Loyiha bosqichlari mijozga tushunarsiz tartibda taqdim etilishi o'rniga, bot avtomatik bildirishnomalar orqali har bir bosqich — eskiz, 3D vizualizatsiya, yakuniy chizma — tayyor bo'lganda mijozga xabar beradi va tasdiqlashni so'raydi; fayl almashinuvi Telegram, email va WhatsApp orasida tarqoq bo'lishi o'rniga, barcha fayllar bitta bot kanali orqali yuboriladi, versiyalar chalkashmaydi.",
    faq: [
      {
        question: "Mijoz loyihani qaysi bosqichda ekanini qanday biladi?",
        answer:
          "Har bir bosqich — eskiz, 3D vizualizatsiya, yakuniy chizma — tayyor bo'lgach, bot mijozga avtomatik xabar yuboradi va tasdiqlashni so'raydi.",
      },
      {
        question: "Fayllarni turli kanallarda qidirish shart bo'ladimi?",
        answer:
          "Yo'q, barcha fayl va tasdiqlar bitta bot suhbatida saqlanadi, versiyalar chalkashib ketmaydi.",
      },
    ],
  },
  "dizayn-studiyalari__business-automation": {
    intro:
      "CRM avtomatlashtirish — bir nechta mijoz loyihasi va deadline'larini bitta tizimda kuzatib boradigan yechim. Toshkentdagi dizayn studiyalari uchun FRONTIX blokknotda yuritiladigan muddatlarni markazlashgan jadvalga aylantiradi.",
    bridge:
      "Bir nechta mijoz loyihasi va deadline'lari qo'lda yoki xotirada kuzatilib, muddatlar unutilib qolishi o'rniga, workflow avtomatizatsiya har bir loyihani bosqichlari va muddati bilan bitta panelda ko'rsatadi; hisobot va analitika orqali qaysi loyiha kechikayotgani darhol ko'rinadi, dizayner e'tiborini o'z vaqtida shu loyihaga qaratadi.",
    faq: [
      {
        question: "Bir nechta loyihani bir vaqtda qanday nazorat qilaman?",
        answer:
          "Har bir loyiha alohida karta sifatida ko'rsatiladi, unda deadline, joriy bosqich va mas'ul dizayner aks etadi.",
      },
      {
        question: "Kechikayotgan loyihalarni tizim o'zi ko'rsatadimi?",
        answer:
          "Ha, muddati yaqinlashgan yoki o'tgan loyihalar hisobot bo'limida alohida ajratib ko'rsatiladi.",
      },
    ],
  },
  "ishlab-chiqarish-korxonalari__business-automation": {
    intro:
      "CRM avtomatlashtirish — buyurtmalar va ishlab chiqarish bosqichlarini bitta tizimda kuzatib boradigan yechim. Toshkentdagi kichik ishlab chiqarish korxonalari uchun FRONTIX qaysi buyurtma qaysi bosqichda ekanligini menejerga real vaqtda ko'rsatadi.",
    bridge:
      "Buyurtmalar va yetkazib berish muddatlari qo'lda rejalashtirilib, bir nechta buyurtma tushganda ustuvorlik aniqlanmay qolishi o'rniga, workflow avtomatizatsiya har bir buyurtmani muddatiga qarab navbatga qo'yadi; mahsulotning xomashyo tayyorlash, qayta ishlash va qadoqlash bosqichlaridan qaysi birida ekanligi CRM integratsiyasi orqali menejerga bir zumda ko'rinadi.",
    faq: [
      {
        question: "Bir nechta buyurtma tushganda ustuvorlikni tizim qanday belgilaydi?",
        answer:
          "Har bir buyurtma yetkazib berish muddatiga qarab avtomatik navbatga qo'yiladi, menejer buni jadvalda ko'radi.",
      },
      {
        question: "Ishlab chiqarish bosqichini kim va qanday yangilaydi?",
        answer:
          "Sex xodimi bosqich tugagach tizimda belgilaydi, menejer buyurtma holatini real vaqtda kuzatadi.",
      },
    ],
  },
  "ishlab-chiqarish-korxonalari__custom-software": {
    intro:
      "Maxsus dasturiy yechim — xomashyo va tayyor mahsulot qoldig'ini real vaqtda hisoblaydigan individual tizim. Toshkentdagi kichik ishlab chiqarish korxonalari uchun FRONTIX Excel jadvalidagi qoldiq bilan ombordagi haqiqiy holat orasidagi farqni yo'qotadi.",
    bridge:
      "Xomashyo va tayyor mahsulot qoldig'i Excel'da yuritilib, haqiqiy holat bilan mos kelmasligi o'rniga, individual arxitektura asosida qurilgan tizim har bir kirim-chiqimni avtomatik hisoblab, qoldiqni real vaqtda yangilaydi; distribyutorlar bilan buyurtma-hisobot almashinuvi qog'ozda olib borilishi o'rniga, API bog'lanishlar orqali distribyutorlar o'z buyurtmalarini to'g'ridan-to'g'ri tizimga kiritadi.",
    faq: [
      {
        question: "Tizim ombordagi haqiqiy qoldiqni qanday ko'rsatadi?",
        answer:
          "Har bir kirim va chiqim tizimga kiritilgan zahoti qoldiq avtomatik qayta hisoblanadi, qog'ozdagi va haqiqiy raqam farqi yo'qoladi.",
      },
      {
        question: "Distribyutorlar tizimga to'g'ridan-to'g'ri ulanishi mumkinmi?",
        answer:
          "Ha, API bog'lanishlar orqali distribyutorlar o'z buyurtmalarini kiritishi va hisobotlarni ko'rishi mumkin bo'lgan alohida kirish yaratiladi.",
      },
    ],
  },
  "ishlab-chiqarish-korxonalari__website-development": {
    intro:
      "Veb-sayt — ishlab chiqariladigan mahsulot turlari, texnik xususiyatlar va hamkorlik shartlarini namoyish etadigan onlayn katalog. Toshkentdagi kichik ishlab chiqarish korxonalari uchun FRONTIX yangi hamkorlar va distribyutorlar mahsulot haqida telefon qilib surishtirmasdan ma'lumot olishini ta'minlaydi.",
    bridge:
      "Distribyutorlar bilan buyurtma va hisobot almashinuvi qog'ozda yoki telefon orqali amalga oshirilib, ma'lumot yo'qolib qolishi o'rniga, sayt mahsulot turlari, texnik xususiyatlar va minimal buyurtma hajmini aniq ko'rsatadigan katalog orqali yangi hamkorlarning birlamchi savollariga javob beradi; CMS integratsiyasi orqali mahsulot assortimenti va narxlar operativ yangilanadi.",
    faq: [
      {
        question: "Saytda mahsulot katalogini qanday joylashtirish mumkin?",
        answer:
          "Har bir mahsulot turi surat, texnik xususiyat va minimal buyurtma hajmi bilan CMS orqali kiritiladi, uni istalgan vaqt yangilash mumkin.",
      },
      {
        question: "Yangi distribyutorlar sayt orqali murojaat qila oladimi?",
        answer:
          "Ha, hamkorlik so'rovi formasi orqali yangi distribyutorlar to'g'ridan-to'g'ri murojaat qoldiradi, so'rov sizga xabar sifatida keladi.",
      },
    ],
  },
  "tadbir-va-toy-agentliklari__website-development": {
    intro:
      "Veb-sayt — agentlikning o'tkazgan tadbirlari, xizmat turlari va narxlarini bir joyda ko'rsatadigan professional platforma. Toshkentdagi to'y va tadbir agentliklari uchun FRONTIX o'tkazilgan tadbirlar galereyasini tartibli joylashtirib, mijoz ishonchini oshiradi.",
    bridge:
      "Mijoz avvalgi tadbirlar portfoliosini Instagramning tarqoq postlaridan qidirish o'rniga, saytdagi tartiblangan galereya bo'limida to'y turi, joy va uslub bo'yicha filtrlab ko'radi. Custom UI/UX dizayn orqali har bir tadbir alohida sahifada taqdim etiladi, bu esa agentlikni raqobatchilardan ajratib turadi.",
    faq: [
      {
        question: "Saytda o'tkazilgan tadbirlar rasmlarini kategoriya bo'yicha ko'rsatish mumkinmi?",
        answer: "Ha, to'y, korporativ tadbir yoki tug'ilgan kun kabi turlar bo'yicha alohida galereya bo'limlari yaratiladi.",
      },
      {
        question: "Sayt orqali narxlar va paketlar haqida ma'lumot olish mumkinmi?",
        answer: "Ha, xizmat paketlari va taxminiy narxlar saytda aniq ko'rsatiladi, mijoz oldindan tanlov qila oladi.",
      },
    ],
  },
  "tadbir-va-toy-agentliklari__telegram-bot": {
    intro:
      "Telegram bot — tadbir sanasi, byudjet va mijoz talablarini avtomatik tartibga soluvchi tizim. Toshkentdagi tadbir agentliklari uchun FRONTIX bir nechta buyurtmachini bir vaqtda aniq va chalkashmasdan boshqarish imkonini beradi.",
    bridge:
      "Bir nechta buyurtmachining sanasi, byudjeti va talablari qo'lda daftarga yozilib chalkashib ketishi o'rniga, har bir mijoz botda alohida buyurtma sifatida qayd etiladi va admin panelda tartibli ko'rinadi. Tadbirga yaqin kunlarda mijozga avtomatik eslatma yuboriladi.",
    faq: [
      {
        question: "Bot orqali bir nechta mijozning tadbir sanalarini bir joyda ko'rish mumkinmi?",
        answer: "Ha, barcha buyurtmalar admin panelda sana va status bo'yicha tartiblangan holda ko'rsatiladi.",
      },
      {
        question: "Mijoz botga o'z talablarini (byudjet, mehmonlar soni) yozib qoldira oladimi?",
        answer: "Ha, bot mijozdan kerakli ma'lumotlarni so'rov shaklida yig'ib, agentlikka tartibli yetkazadi.",
      },
    ],
  },
  "tadbir-va-toy-agentliklari__business-automation": {
    intro:
      "CRM avtomatlashtirish — pudratchilar va to'lovlarni bitta tizimda muvofiqlashtiruvchi yechim. Toshkentdagi tadbir agentliklari uchun FRONTIX fotograf, dekorator va catering bilan ishni tartibga solib, to'lov muddatlarini nazorat qiladi.",
    bridge:
      "Pudratchilar bilan muvofiqlashtirish faqat telefon orqali bo'lib, kelishuvlar yo'qolib qolishi o'rniga, CRM integratsiyasi har bir pudratchiga vazifa va muddatni biriktiradi. Bo'nak va qolgan to'lov summasi workflow avtomatizatsiya orqali kuzatilib, tadbir kuni to'lov bahsli holatga aylanmaydi.",
    faq: [
      {
        question: "CRM orqali fotograf, dekorator va catering bilan ishni bitta joyda boshqarish mumkinmi?",
        answer: "Ha, har bir pudratchiga alohida vazifa va muddat biriktiriladi, barchasi bitta tizimda ko'rinadi.",
      },
      {
        question: "Bo'nak va qolgan to'lovni avtomatik kuzatish mumkinmi?",
        answer: "Ha, har bir buyurtma bo'yicha to'lov holati va qoldiq summa tizimda aniq ko'rsatiladi.",
      },
    ],
  },
  "fotostudiyalar__website-development": {
    intro:
      "Veb-sayt — studiyaning ishlari, xizmat turlari va narxlarini namoyish etadigan vitrina platforma. Toshkentdagi fotostudiyalar uchun FRONTIX portfolio va paketlarni tartibli joylashtirib, mijozga oldindan tanlov qilish imkonini beradi.",
    bridge:
      "Bo'sh vaqtini bron qilish faqat telefon orqali bo'lib, band vaqt qayta-qayta taklif qilinishi o'rniga, sayt mijozga fotograf ishlarini ko'rgandan so'ng bevosita band qilish formasi orqali murojaat qilish imkonini beradi. Tezkor yuklanish tufayli mobil qurilmadan kirgan mijoz rasmlarni sifatli va tez ko'radi.",
    faq: [
      {
        question: "Saytda turli fotosessiya uslublarini alohida ko'rsatish mumkinmi?",
        answer: "Ha, portret, to'y, mahsulot va boshqa yo'nalishlar alohida bo'limlarda taqdim etiladi.",
      },
      {
        question: "Sayt orqali oldindan narx va paketlarni bilish mumkinmi?",
        answer: "Ha, har bir xizmat paketi tavsifi va narxi bilan aniq ko'rsatiladi.",
      },
    ],
  },
  "fotostudiyalar__telegram-bot": {
    intro:
      "Telegram bot — fotograf jadvali va mijoz bronlarini avtomatik boshqaruvchi tizim. Toshkentdagi fotostudiyalar uchun FRONTIX bo'sh vaqtlarni real vaqtda ko'rsatib, bir kunga ikkita buyurtma tushib qolishining oldini oladi.",
    bridge:
      "Bo'sh vaqtini bron qilish faqat telefon orqali bo'lib, band vaqt qayta taklif qilinishi o'rniga, mijoz botda mavjud sana va soatlarni ko'rib, o'zi mos vaqtni tanlaydi. Fotografning bandligi admin panelda markazlashgan holda ko'rinib, ikki buyurtma bir kunga to'qnashmaydi.",
    faq: [
      {
        question: "Bot orqali fotostudiyaning bo'sh vaqtlarini ko'rish mumkinmi?",
        answer: "Ha, mijoz botda mavjud sana va soatlarni ko'rib, mos vaqtni o'zi tanlaydi.",
      },
      {
        question: "Tayyor rasmlar mijozga bot orqali yuboriladimi?",
        answer: "Ha, suratlar tayyor bo'lgach, bot orqali mijozga avtomatik bildirishnoma va havola yuboriladi.",
      },
    ],
  },
  "fotostudiyalar__business-automation": {
    intro:
      "CRM avtomatlashtirish — fotograflar jadvali, buyurtmalar va materiallar topshirilishini nazorat qiluvchi tizim. Toshkentdagi fotostudiyalar uchun FRONTIX har bir buyurtma bosqichini kuzatib, muddatlarni tartibga soladi.",
    bridge:
      "Suratga olingan materiallarni qayta ishlash muddati aniq belgilanmaganidan mijoz xavotirlanishi o'rniga, workflow avtomatizatsiya har bir buyurtmaga bosqich (suratga olish, retush, topshirish) va muddat biriktiradi. Bir nechta fotografning bandligi CRM integratsiyasi orqali markazlashgan holda ko'rinadi.",
    faq: [
      {
        question: "CRM orqali suratlarni qayta ishlash bosqichini kuzatish mumkinmi?",
        answer: "Ha, har bir buyurtma suratga olish, retush va topshirish bosqichlari bo'yicha kuzatiladi.",
      },
      {
        question: "Bir nechta fotografning bandligini bitta tizimda ko'rish mumkinmi?",
        answer: "Ha, barcha fotograflar jadvali markazlashgan holda ko'rsatilib, buyurtmalar to'qnashuvining oldi olinadi.",
      },
    ],
  },
  "musiqa-va-sanat-maktablari__website-development": {
    intro:
      "Veb-sayt — yo'nalishlar, o'qituvchilar va bo'sh joylar haqida ma'lumot beruvchi platforma. Toshkentdagi musiqa va san'at maktablari uchun FRONTIX ota-onalarga qo'ng'iroq qilmasdan kerakli yo'nalishni tanlash imkonini yaratadi.",
    bridge:
      "Instrument yoki yo'nalish bo'yicha bo'sh joy bor-yo'qligini bilish uchun ota-ona har safar qo'ng'iroq qilishi o'rniga, saytda har bir yo'nalish (fortepiano, gitara, rassomlik) alohida sahifada tavsif va bo'sh joylar bilan ko'rsatiladi. CMS integratsiyasi orqali maktab bo'sh joylar sonini o'zi tez yangilab turadi.",
    faq: [
      {
        question: "Saytda har bir yo'nalish bo'yicha o'qituvchi ma'lumotini ko'rsatish mumkinmi?",
        answer: "Ha, har bir o'qituvchining tajribasi va dars beradigan yo'nalishi alohida sahifada taqdim etiladi.",
      },
      {
        question: "Bo'sh joylar sonini sayt egasi o'zi yangilay oladimi?",
        answer: "Ha, CMS orqali maktab xodimi bo'sh joylar va guruhlar ma'lumotini o'zi tahrirlaydi.",
      },
    ],
  },
  "musiqa-va-sanat-maktablari__telegram-bot": {
    intro:
      "Telegram bot — davomat, o'zlashtirish va tadbir xabarlarini ota-onaga avtomatik yetkazuvchi tizim. Toshkentdagi musiqa va san'at maktablari uchun FRONTIX farzand haqidagi ma'lumotni real vaqtda yetkazadi.",
    bridge:
      "Farzandning darsga qatnashgani va o'zlashtirishi ota-onaga muntazam yetkazilmasligi o'rniga, o'qituvchi har dars so'ng botga qisqa hisobot kiritadi va ota-onaga avtomatik bildirishnoma boradi. Konsert yoki ko'rik sanasi haqida ham barcha ota-onalarga bir vaqtda xabar yuboriladi.",
    faq: [
      {
        question: "Bot orqali farzandimning darsga kelgan-kelmaganini bilsam bo'ladimi?",
        answer: "Ha, har dars so'ng davomat haqida ota-onaga avtomatik bildirishnoma yuboriladi.",
      },
      {
        question: "Konsert yoki ko'rik kabi tadbirlar haqida xabar bot orqali keladimi?",
        answer: "Ha, barcha ota-onalarga tadbir sanasi va joyi haqida bir vaqtda avtomatik xabar boradi.",
      },
    ],
  },
  "musiqa-va-sanat-maktablari__business-automation": {
    intro:
      "CRM avtomatlashtirish — o'qituvchilar jadvali, xonalar bandligi va o'quvchilar ma'lumotini boshqaruvchi tizim. Toshkentdagi musiqa va san'at maktablari uchun FRONTIX xona va vaqt to'qnashuvlarining oldini oladi.",
    bridge:
      "O'qituvchilar jadvali va xonalar bandligi qo'lda taqsimlanib, bitta xonaga ikki guruh to'qnashib qolishi o'rniga, workflow avtomatizatsiya har bir guruhga xona va vaqtni avtomatik biriktiradi va to'qnashuvni oldindan ogohlantiradi. Har bir o'quvchining davomati va o'zlashtirishi CRM integratsiyasi orqali bitta profilda saqlanadi.",
    faq: [
      {
        question: "CRM orqali xona va o'qituvchi bandligi to'qnashuvining oldini olish mumkinmi?",
        answer: "Ha, tizim yangi guruh qo'shilganda xona yoki o'qituvchi band bo'lsa avtomatik ogohlantiradi.",
      },
      {
        question: "Har bir o'quvchining o'zlashtirish tarixini alohida ko'rish mumkinmi?",
        answer: "Ha, har bir o'quvchi profilida davomat va o'zlashtirish natijalari vaqt bo'yicha saqlanadi.",
      },
    ],
  },
  "haydovchilik-maktablari__website-development": {
    intro:
      "Veb-sayt — kurs dasturi, narxlar va o'qitish jarayoni haqida aniq ma'lumot beruvchi platforma. Toshkentdagi haydovchilik maktablari uchun FRONTIX o'quvchiga ro'yxatdan o'tishdan oldin barcha shartlarni tushunarli qilib ko'rsatadi.",
    bridge:
      "Nazariy va amaliy darslar jadvali o'quvchiga aniq ko'rinmasligi o'rniga, saytda kurs bosqichlari, davomiyligi va narxi batafsil tushuntiriladi, bu esa o'quvchini oldindan xabardor qiladi. SEO optimizatsiya tufayli \"haydovchilik kurslari Toshkent\" kabi qidiruvlarda maktab yuqori o'rinlarda chiqadi.",
    faq: [
      {
        question: "Saytda kurs narxi va davomiyligini oldindan bilish mumkinmi?",
        answer: "Ha, nazariy va amaliy bosqichlar davomiyligi hamda narxi saytda aniq ko'rsatiladi.",
      },
      {
        question: "Sayt orqali kursga ro'yxatdan o'tish mumkinmi?",
        answer: "Ha, o'quvchi saytdagi forma orqali kerakli hujjatlar va ma'lumotlarni yuborib, ro'yxatdan o'tadi.",
      },
    ],
  },
  "haydovchilik-maktablari__telegram-bot": {
    intro:
      "Telegram bot — dars jadvali, instruktor bandligi va amaliyot soatlarini kuzatuvchi tizim. Toshkentdagi haydovchilik maktablari uchun FRONTIX o'quvchiga har bir darsni aniq va o'z vaqtida yetkazadi.",
    bridge:
      "Instruktor bilan amaliy mashg'ulot vaqtini kelishish faqat telefon orqali bo'lib qayta-qayta qo'ng'iroq qilinishi o'rniga, o'quvchi botda instruktorning bo'sh vaqtlarini ko'rib, o'zi mos soatni tanlaydi. Guvohnoma imtihoniga necha soat amaliyot qolgani ham botda avtomatik ko'rsatiladi.",
    faq: [
      {
        question: "Bot orqali amaliy mashg'ulot vaqtini o'zim tanlay olamanmi?",
        answer: "Ha, instruktorning bo'sh soatlari botda ko'rinadi va o'quvchi mos vaqtni tanlab yoziladi.",
      },
      {
        question: "Necha soat amaliyot qolganini bot ko'rsatadimi?",
        answer: "Ha, har bir o'quvchining amaliyot soatlari hisoblanib, botda qolgan soat ko'rsatiladi.",
      },
    ],
  },
  "haydovchilik-maktablari__business-automation": {
    intro:
      "CRM avtomatlashtirish — o'quvchilar jadvali, instruktorlar bandligi va to'lovlarni boshqaruvchi tizim. Toshkentdagi haydovchilik maktablari uchun FRONTIX to'lov va amaliyot hisobini aniq yuritadi.",
    bridge:
      "To'lov bo'lib-bo'lib to'langanda qoldiq summa aniq hisoblanmay bahsli vaziyat yuzaga kelishi o'rniga, CRM integratsiyasi har bir o'quvchining to'langan va qolgan summasini avtomatik hisoblab boradi. Nazariy va amaliy darslar jadvali workflow avtomatizatsiya orqali har bir o'quvchiga alohida ko'rsatiladi.",
    faq: [
      {
        question: "CRM orqali o'quvchining to'lov qoldig'ini aniq bilish mumkinmi?",
        answer: "Ha, har bir o'quvchining to'langan va qolgan summasi tizimda avtomatik hisoblanadi.",
      },
      {
        question: "Instruktorlar bandligini bitta joyda ko'rish mumkinmi?",
        answer: "Ha, barcha instruktorlarning jadvali va bandligi markazlashgan holda ko'rsatiladi.",
      },
    ],
  },
  "onlayn-talim-platformalari__website-development": {
    intro:
      "Veb-sayt — kurslar, dastur va muallif haqida professional ma'lumot beruvchi platforma. Toshkentlik onlayn kurs mualliflari uchun FRONTIX shaxsiy Instagram DM o'rniga ishonchli va professional savdo maydonini yaratadi.",
    bridge:
      "Kurs sotib olish jarayoni faqat shaxsiy Instagram DM orqali bo'lib norasmiy tuyulishi o'rniga, sayt orqali mijoz kurs dasturi, muallif haqida ma'lumot va sharhlarni ko'rib, ishonch bilan xarid qiladi. Custom UI/UX dizayn kursni professional mahsulot sifatida taqdim etadi.",
    faq: [
      {
        question: "Saytda kurs dasturi va mavzularini batafsil ko'rsatish mumkinmi?",
        answer: "Ha, har bir kursning dasturi, davomiyligi va mavzulari alohida sahifada taqdim etiladi.",
      },
      {
        question: "Sayt mobil qurilmada ham tez ishlaydimi?",
        answer: "Ha, tezkor yuklanish tufayli mijoz telefondan ham kurs sahifalarini tez va qulay ko'radi.",
      },
    ],
  },
  "onlayn-talim-platformalari__telegram-bot": {
    intro:
      "Telegram bot — kursga yozilish, eslatmalar va yangiliklarni avtomatlashtiruvchi tizim. Toshkentlik onlayn kurs mualliflari uchun FRONTIX mijoz bilan aloqani Instagram DM'dan tizimli botga o'tkazadi.",
    bridge:
      "Kursni tugatmagan o'quvchilarni eslatish tizimi yo'qligi o'rniga, bot muayyan kunlarda darsni ko'rmagan o'quvchiga avtomatik eslatma yuboradi. Yangi kurs yoki chegirma chiqqanda ham avvalgi mijozlarga bot orqali bir vaqtda avtomatik bildirishnoma boradi.",
    faq: [
      {
        question: "Bot kursni tugatmagan o'quvchilarga eslatma yuboradimi?",
        answer: "Ha, muayyan muddat davomida darsga kirmagan o'quvchiga avtomatik eslatma xabari yuboriladi.",
      },
      {
        question: "Yangi kurs chiqqanda avvalgi mijozlar xabardor bo'ladimi?",
        answer: "Ha, barcha avvalgi mijozlarga yangi kurs yoki chegirma haqida bot orqali bir vaqtda xabar yuboriladi.",
      },
    ],
  },
  "onlayn-talim-platformalari__online-ordering": {
    intro:
      "Onlayn buyurtma tizimi — kurs to'lovi va video darslarga kirishni avtomatik boshqaruvchi tizim. Toshkentlik onlayn kurs mualliflari uchun FRONTIX to'lovdan so'ng darslarga kirish huquqini qo'lda emas, avtomatik beradi.",
    bridge:
      "Mijoz to'lov qilgach video darslarga kirish huquqini muallif qo'lda berishga majbur bo'lishi o'rniga, savat va to'lov tizimi orqali to'lov tasdiqlangach kirish huquqi avtomatik ochiladi. Har bir mijozning qaysi kursni sotib olgani buyurtmalar tarixi orqali aniq saqlanadi.",
    faq: [
      {
        question: "To'lovdan so'ng video darslarga kirish avtomatik ochiladimi?",
        answer: "Ha, to'lov tasdiqlangach mijozga darslarga kirish huquqi avtomatik beriladi, qo'lda berish shart emas.",
      },
      {
        question: "Mijoz qaysi kurslarni sotib olganini kuzatish mumkinmi?",
        answer: "Ha, har bir mijozning xaridlar tarixi tizimda saqlanadi va istalgan vaqtda ko'rish mumkin.",
      },
    ],
  },
  "bolalar-bogchalari__website-development": {
    intro:
      "Veb-sayt — bog'cha guruhlari, narxlar va bo'sh o'rinlar haqida ma'lumot beruvchi platforma. Toshkentdagi bolalar bog'chalari uchun FRONTIX ota-onalarga qo'ng'iroq qilmasdan kerakli ma'lumotni topish imkonini beradi.",
    bridge:
      "Yangi ota-onalar bo'sh o'rin va narxlarni bilish uchun bir nechta bog'chaga qo'ng'iroq qilishga majbur bo'lishi o'rniga, saytda guruhlar, narxlar va bo'sh o'rinlar soni aniq ko'rsatiladi. CMS integratsiyasi orqali bog'cha ma'muriyati bo'sh o'rinlar sonini o'zi yangilab turadi.",
    faq: [
      {
        question: "Saytda bo'sh o'rinlar sonini real vaqtda ko'rish mumkinmi?",
        answer: "Ha, bog'cha ma'muriyati bo'sh o'rinlar sonini CMS orqali o'zi tez-tez yangilab turadi.",
      },
      {
        question: "Sayt orqali guruhlar va narxlar haqida to'liq ma'lumot olish mumkinmi?",
        answer: "Ha, har bir yosh guruhi, dastur va narx alohida sahifada tushuntiriladi.",
      },
    ],
  },
  "bolalar-bogchalari__telegram-bot": {
    intro:
      "Telegram bot — bolaning kun davomidagi holati haqida ota-onaga real vaqtda xabar beruvchi tizim. Toshkentdagi bolalar bog'chalari uchun FRONTIX ovqatlanish, uyqu va faoliyat haqida ma'lumotni kechqurungacha kutmasdan yetkazadi.",
    bridge:
      "Bolaning kun davomidagi holati ota-onaga faqat kechqurun olib ketishda og'zaki aytilishi o'rniga, tarbiyachi kun davomida botga qisqa yozuv va rasm joylaydi, ota-onaga avtomatik bildirishnoma boradi. Bola sog'lig'i yoki allergiyasi bo'yicha muhim eslatmalar ham botda alohida saqlanadi.",
    faq: [
      {
        question: "Bot orqali bolamning kun davomida nima qilganini bilsam bo'ladimi?",
        answer: "Ha, tarbiyachi kun davomida ovqatlanish, uyqu va faoliyat haqida botga qisqa xabar joylaydi.",
      },
      {
        question: "Bolaning allergiyasi haqidagi ma'lumot botda saqlanadimi?",
        answer: "Ha, sog'liq bilan bog'liq muhim eslatmalar bola profilida saqlanib, barcha tarbiyachilarga ko'rinadi.",
      },
    ],
  },
  "bolalar-bogchalari__business-automation": {
    intro:
      "CRM avtomatlashtirish — to'lov, davomat va bolalar ma'lumotlarini boshqaruvchi tizim. Toshkentdagi bolalar bog'chalari uchun FRONTIX qo'lda yuritiladigan daftar hisobini avtomatik tizimga o'tkazadi.",
    bridge:
      "To'lov va davomat daftarda qo'lda yuritilib, oy oxirida hisob-kitobda xatoliklar chiqishi o'rniga, workflow avtomatizatsiya har kunlik davomatni qayd qilib, oylik to'lovni avtomatik hisoblaydi. Bolaning sog'lig'i va allergiyasi haqidagi ma'lumotlar CRM integratsiyasi orqali bitta profilda saqlanib, barcha tarbiyachilarga ko'rinadi.",
    faq: [
      {
        question: "CRM orqali oylik to'lovni avtomatik hisoblash mumkinmi?",
        answer: "Ha, kunlik davomat asosida oylik to'lov summasi avtomatik hisoblanadi.",
      },
      {
        question: "Bolaning sog'liq ma'lumotlari barcha tarbiyachilarga bir xilda ko'rinadimi?",
        answer: "Ha, sog'liq va allergiya ma'lumotlari bitta profilda saqlanib, barcha tarbiyachilar bir xil ma'lumotga ega bo'ladi.",
      },
    ],
  },
  "kuryer-xizmatlari__telegram-bot": {
    intro:
      "Telegram bot — mijoz va kuryer o'rtasidagi muloqotni avtomatlashtiruvchi vosita, buyurtma qabul qilish va bildirishnomalarni bitta joyda boshqaradi. Toshkentdagi kuryer xizmatlari uchun FRONTIX mijozga jo'natma holatini real vaqtda ko'rsatadigan va kuryerga yangi buyurtmani avtomatik yetkazadigan botni ishlab chiqadi.",
    bridge:
      "Mijoz \"kuryer qachon keladi\" deb operatorga qo'ng'iroq qilish o'rniga, bot har bir bosqichda (qabul qilindi, yo'lda, yetkazildi) avtomatik bildirishnoma yuboradi, kuryer esa yangi buyurtmani botning admin panelidan bir zumda qabul qiladi.",
    faq: [
      {
        question: "Mijoz jo'natma holatini qanday kuzatadi?",
        answer:
          "Bot har bir bosqichda (qabul qilindi, yo'lda, yetkazildi) mijozga avtomatik xabar yuboradi, mijoz qo'ng'iroq qilishga hojat qolmaydi.",
      },
      {
        question: "Kuryerlar botdan qanday foydalanadi?",
        answer:
          "Kuryerlar bot orqali o'ziga tayinlangan buyurtmalarni ko'radi va yetkazib berish holatini bir tugma bilan yangilaydi.",
      },
    ],
  },
  "kuryer-xizmatlari__business-automation": {
    intro:
      "CRM avtomatlashtirish — kuryerlar bandligi, buyurtmalar taqsimoti va hisobotlarni bitta tizimda birlashtiruvchi yechim. Toshkentdagi kuryer xizmatlari uchun FRONTIX yangi buyurtmani eng yaqin bo'sh kuryerga avtomatik biriktiradigan va narxni manzil-vazn bo'yicha hisoblaydigan tizim quradi.",
    bridge:
      "Kuryerlar bandligi markazlashgan holda ko'rinmasligi va buyurtma tasodifiy taqsimlanishi o'rniga, workflow avtomatizatsiya har bir kuryerning joriy holatini kuzatib, yangi buyurtmani eng yaqin bo'sh kuryerga o'zi biriktiradi, narxni esa manzil va vaznga qarab avtomatik hisoblaydi.",
    faq: [
      {
        question: "Jo'natma narxini qo'lda hisoblash shart bo'ladimi?",
        answer: "Yo'q, tizim manzil va vaznga qarab narxni avtomatik hisoblab beradi, operator faqat tasdiqlaydi.",
      },
      {
        question: "Bir nechta hamkor kuryer xizmati bilan ishlash mumkinmi?",
        answer: "Ha, API bog'lanishlar orqali hamkor xizmatlarning buyurtmalarini bitta tizimga integratsiya qilish mumkin.",
      },
    ],
  },
  "kuryer-xizmatlari__custom-software": {
    intro:
      "Maxsus dasturiy yechim — kompaniyaning o'ziga xos jarayonlariga moslashtirilgan, tayyor shablonlarga sig'maydigan tizim. Toshkentdagi kuryer xizmatlari uchun FRONTIX bir nechta hamkor kompaniya bilan integratsiyani va o'ziga xos taqsimlash mantig'ini hisobga oluvchi individual arxitektura quradi.",
    bridge:
      "Bir nechta yetkazib berish hamkori bilan integratsiyani qo'lda, telefon va Excel orqali muvofiqlashtirish o'rniga, individual arxitektura har bir hamkorning tizimidan buyurtmalarni avtomatik qabul qilib, yagona formatda birlashtiradi va masshtablanuvchan tizim yangi hamkorlar qo'shilganda ham barqaror ishlaydi.",
    faq: [
      {
        question: "Mavjud IT tizimimiz bilan integratsiya qilish mumkinmi?",
        answer: "Ha, individual arxitektura mavjud tizimlaringiz (ombor, buxgalteriya) bilan ishlashga moslashtiriladi.",
      },
      {
        question: "Buyurtmalar hajmi oshsa tizim chidaydimi?",
        answer:
          "Ha, masshtablanuvchan tizim buyurtmalar va kuryerlar soni ko'paygan sari qo'shimcha yuklamaga moslab quriladi.",
      },
    ],
  },
  "logistika-va-yuk-tashish__business-automation": {
    intro:
      "CRM avtomatlashtirish — haydovchilar bandligi, reyslar va xarajatlarni bitta tizimda kuzatuvchi yechim. Toshkentdagi logistika kompaniyalari uchun FRONTIX Excelda yuritiladigan mashina jadvalini avtomatlashtirib, bitta mashinaga ikki buyurtma tushib qolishining oldini oladi.",
    bridge:
      "Yuk mashinalari bandligi Excelda yuritilib, ikkita buyurtma bitta mashinaga tasodifan tushib qolishi o'rniga, workflow avtomatizatsiya har bir mashina va haydovchining bandligini real vaqtda ko'rsatadi, hisobot va analitika esa har bir reysning haqiqiy tannarxini yoqilg'i xarajati bilan birga hisoblab beradi.",
    faq: [
      {
        question: "Haydovchilar bandligini qanday kuzatish mumkin?",
        answer:
          "Tizim har bir haydovchi va mashinaning joriy reysi va bo'sh vaqtini real vaqtda ko'rsatadi, dispetcher buyurtmani bo'sh mashinaga biriktiradi.",
      },
      {
        question: "Reys xarajatlarini hisoblash avtomatlashtiriladimi?",
        answer:
          "Ha, hisobot va analitika moduli har bir reysning masofa, yoqilg'i va vaqt bo'yicha xarajatini avtomatik hisoblaydi.",
      },
    ],
  },
  "logistika-va-yuk-tashish__custom-software": {
    intro:
      "Maxsus dasturiy yechim — logistika kompaniyasining o'ziga xos marshrut va konsolidatsiya jarayonlariga moslashtirilgan tizim. Toshkentdagi yuk tashish kompaniyalari uchun FRONTIX bir nechta kichik buyurtmani bitta yo'nalishdagi reysga avtomatik birlashtiradigan individual arxitektura ishlab chiqadi.",
    bridge:
      "Kichik hajmdagi buyurtmalarni bitta reysga birlashtirish tizimlashtirilmagani va mashinalar yarim bo'sh yurishi o'rniga, individual arxitektura bir yo'nalishdagi buyurtmalarni avtomatik guruhlaydi, xavfsizlik standartlari esa yuk va mijoz ma'lumotlarini himoya qilib turadi.",
    faq: [
      {
        question: "Konsolidatsiya (buyurtmalarni birlashtirish) mantig'ini bizga moslab qurish mumkinmi?",
        answer:
          "Ha, individual arxitektura sizning yo'nalishlar va yuk hajmi mantig'ingizga qarab konsolidatsiya qoidalarini hisobga oladi.",
      },
      {
        question: "Tizimni uzoq muddat qo'llab-quvvatlash bormi?",
        answer:
          "Ha, FRONTIX tizim ishga tushgandan keyin ham yangilanishlar va texnik yordamni uzoq muddatli qo'llab-quvvatlash orqali ta'minlaydi.",
      },
    ],
  },
  "logistika-va-yuk-tashish__website-development": {
    intro:
      "Veb-sayt — kompaniyaning xizmatlari, tariflari va yuk kuzatuvini mijozga ko'rsatadigan raqamli vitrina. Toshkentdagi logistika kompaniyalari uchun FRONTIX mijoz yukining qayerdaligini qo'ng'iroq qilmasdan ko'ra oladigan kuzatuv sahifasi bilan sayt quradi.",
    bridge:
      "Mijoz yukining qayerdaligini bilish uchun doim dispetcherga qo'ng'iroq qilishi o'rniga, saytga integratsiya qilingan kuzatuv bo'limi yuk holatini real vaqtda ko'rsatadi, CMS integratsiyasi esa tariflar va yo'nalishlarni xodimlarning o'zi tez yangilashiga imkon beradi.",
    faq: [
      {
        question: "Saytda yuk kuzatuvi bo'limi bo'lishi shartmi?",
        answer:
          "Bu ixtiyoriy, lekin tavsiya etiladi — mijoz yuk raqamini kiritib, holatini o'zi ko'rishi qo'ng'iroqlar sonini kamaytiradi.",
      },
      {
        question: "Tariflar va yo'nalishlarni o'zimiz yangilay olamizmi?",
        answer: "Ha, CMS integratsiyasi orqali xodimlaringiz dasturchisiz tariflar va yo'nalish ma'lumotlarini tahrirlashi mumkin.",
      },
    ],
  },
  "oziq-ovqat-yetkazib-berish__online-ordering": {
    intro:
      "Onlayn buyurtma tizimi — mahsulotlar katalogi, savat va to'lovni birlashtirgan platforma. Toshkentdagi oziq-ovqat yetkazib berish xizmatlari uchun FRONTIX narxlari tez-tez o'zgaruvchi mahsulot ro'yxatini bir joydan boshqarish va aniq yetkazib berish oynasini ko'rsatish imkonini beradi.",
    bridge:
      "Mahsulot narxlarini qog'ozda yoki Excelda soatlab yangilash o'rniga, savat va to'lov moduli katalogni bir joydan tahrirlashga imkon beradi va o'zgarish darhol saytda aks etadi, yetkazib berish trekingi esa mijozga aniq 2 soatlik yetkazib berish oynasini ko'rsatadi.",
    faq: [
      {
        question: "Mahsulot narxlari o'zgarsa, mijozlar darhol yangi narxni ko'radimi?",
        answer:
          "Ha, katalogdagi o'zgarish saqlangan zahoti barcha mijozlarga yangi narx ko'rinadi, qog'ozdagi ro'yxatni yangilashga hojat qolmaydi.",
      },
      {
        question: "Mijozga aniq yetkazib berish vaqtini ko'rsatish mumkinmi?",
        answer: "Ha, tizim mijozga aniq soat oralig'ini (masalan 14:00-16:00) tanlash va kuzatish imkonini beradi.",
      },
    ],
  },
  "oziq-ovqat-yetkazib-berish__telegram-bot": {
    intro:
      "Telegram bot — mijoz katalogdan mahsulot tanlab, buyurtma va bildirishnomalarni bitta chatda boshqaradigan vosita. Toshkentdagi oziq-ovqat yetkazib berish xizmatlari uchun FRONTIX doimiy mijozlarga haftalik takroriy buyurtmani bir tugma bilan qayta yuborish imkonini beruvchi bot yaratadi.",
    bridge:
      "Doimiy mijoz har hafta bir xil mahsulotlarni qaytadan qo'lda tanlashi o'rniga, bot avvalgi buyurtmani saqlab, \"takrorlash\" tugmasi bilan bir zumda qayta yuborish imkonini beradi, avtomatik bildirishnomalar esa yetkazib berish oynasi yaqinlashganda mijozga eslatma yuboradi.",
    faq: [
      {
        question: "Mijoz oldingi buyurtmasini qayta yubora oladimi?",
        answer: "Ha, bot oxirgi buyurtmani saqlaydi va mijoz bir tugma bosish orqali uni qayta yuborishi mumkin.",
      },
      {
        question: "Yetkazib berish vaqti haqida mijozga eslatma keladimi?",
        answer: "Ha, avtomatik bildirishnomalar yetkazib berish oynasi boshlanishidan oldin mijozga xabar yuboradi.",
      },
    ],
  },
  "oziq-ovqat-yetkazib-berish__business-automation": {
    intro:
      "CRM avtomatlashtirish — mahsulot qoldig'i, buyurtmalar va takroriy xaridlarni bitta tizimda boshqaruvchi yechim. Toshkentdagi oziq-ovqat yetkazib berish xizmatlari uchun FRONTIX katta hajmdagi haftalik buyurtmalarni oldindan rejalashtirish va obuna asosida avtomatik takrorlash imkonini beradi.",
    bridge:
      "Katta hajmdagi haftalik buyurtmalarni oldindan rejalashtirish imkoni yo'qligi o'rniga, workflow avtomatizatsiya mijozning haftalik buyurtma jadvalini saqlab, belgilangan kunda avtomatik shakllantiradi, CRM integratsiyasi esa doimiy mijozlarning buyurtma tarixini kuzatib, obuna asosida takroriy yetkazib berishni sozlaydi.",
    faq: [
      {
        question: "Haftalik buyurtmani oldindan rejalashtirish mumkinmi?",
        answer: "Ha, tizim mijozning haftalik buyurtma jadvalini saqlaydi va belgilangan kunda avtomatik shakllantiradi.",
      },
      {
        question: "Obuna asosida takroriy yetkazib berish sozlash mumkinmi?",
        answer:
          "Ha, doimiy mijozlar uchun haftalik yoki oylik obuna sozlanadi, buyurtma qo'lda takrorlanmasdan avtomatik yuboriladi.",
      },
    ],
  },
  "turizm-agentliklari__website-development": {
    intro:
      "Veb-sayt — tur paketlari, narxlar va bron qilish imkoniyatini mijozga to'g'ridan-to'g'ri ko'rsatuvchi platforma. Toshkentdagi turizm agentliklari uchun FRONTIX mijoz qo'ng'iroq qilmasdan tur narxi va tafsilotlarini ko'ra oladigan sayt quradi.",
    bridge:
      "Tur paketi va narxini bilish uchun mijoz albatta qo'ng'iroq qilishi o'rniga, sayt har bir tur uchun narx, muddat va dastur tafsilotlarini ochiq ko'rsatadi, CMS integratsiyasi esa agentlarga yangi turlarni dasturchisiz qo'shish imkonini beradi.",
    faq: [
      {
        question: "Mijoz saytdan to'g'ridan-to'g'ri bron qila oladimi?",
        answer:
          "Ha, sayt orqali mijoz turni tanlab, dastlabki bron so'rovini yuborishi mumkin, agent keyin bog'lanib tasdiqlaydi.",
      },
      {
        question: "Yangi tur paketlarini o'zimiz qo'sha olamizmi?",
        answer: "Ha, CMS integratsiyasi orqali yangi tur, narx va rasm dasturchisiz qo'shiladi.",
      },
    ],
  },
  "turizm-agentliklari__telegram-bot": {
    intro:
      "Telegram bot — bron bosqichlari va hujjat muddatlari haqida mijozga avtomatik eslatma beruvchi vosita. Toshkentdagi turizm agentliklari uchun FRONTIX bo'nak, qolgan to'lov va hujjat topshirish jarayonini bitta botda kuzatib boradigan tizim yaratadi.",
    bridge:
      "Bo'nak, qolgan summa va hujjatlar qog'ozda kuzatilib chalkashlik yuzaga kelishi o'rniga, bot har bir mijozning to'lov va hujjat holatini saqlaydi, avtomatik bildirishnomalar esa viza yoki pasport muddati yaqinlashganda mijozga eslatma yuboradi.",
    faq: [
      {
        question: "Bot to'lov bosqichlarini qanday kuzatadi?",
        answer:
          "Bot har bir mijoz uchun bo'nak to'langanmi, qolgan summa qachon to'lanishi kerakligini saqlaydi va admin panelda ko'rsatadi.",
      },
      {
        question: "Hujjat muddati tugashi haqida eslatma keladimi?",
        answer: "Ha, viza yoki pasport muddati tugashiga bir necha kun qolganda bot mijozga avtomatik eslatma yuboradi.",
      },
    ],
  },
  "turizm-agentliklari__business-automation": {
    intro:
      "CRM avtomatlashtirish — mijozlar, bronlar va guruh turlaridagi o'rinlarni real vaqtda kuzatuvchi tizim. Toshkentdagi turizm agentliklari uchun FRONTIX guruh turida nechta o'rin bo'shligini barcha agentlar bir vaqtda ko'ra oladigan markazlashgan tizim quradi.",
    bridge:
      "Guruh turlarida bo'sh o'rinlar sonini agentlar telefon orqali so'rab bilishi va bitta o'rinni ikki mijozga sotib yuborish xavfi o'rniga, CRM integratsiyasi har bir turdagi bo'sh o'rinlar sonini real vaqtda yangilab boradi, hisobot va analitika esa qaysi turlar ko'proq sotilayotganini ko'rsatadi.",
    faq: [
      {
        question: "Ikki agent bir o'rinni bir vaqtda sotib yuborish xavfi bartaraf etiladimi?",
        answer: "Ha, tizim bron qilingan zahoti o'rinni band deb belgilaydi, barcha agentlar buni real vaqtda ko'radi.",
      },
      {
        question: "Qaysi turlar ko'proq daromad keltirayotganini ko'rish mumkinmi?",
        answer: "Ha, hisobot va analitika moduli har bir tur bo'yicha sotuv va daromadni ko'rsatadi.",
      },
    ],
  },
  "mehmonxonalar-va-hostellar__website-development": {
    intro:
      "Veb-sayt — xonalar, narxlar va bron qilish imkoniyatini mehmonga to'g'ridan-to'g'ri ko'rsatuvchi platforma. Toshkentdagi mehmonxonalar va hostellar uchun FRONTIX bir nechta booking-saytda qo'lda yangilanadigan xona bandligini avtomatlashtirib, overbooking xavfini kamaytiradigan sayt quradi.",
    bridge:
      "Xona bandligi va narxlari bir nechta booking-saytda qo'lda yangilanib, bitta xona ikki mehmonga sotilib qo'yilishi o'rniga, sayt xona bandligini markazlashgan holda kuzatib, bron qilingan xonani avtomatik \"band\" deb belgilaydi, tezkor yuklanish esa mehmonni telefon orqali ham qulay bron qilishga imkon beradi.",
    faq: [
      {
        question: "Overbooking xavfini kamaytirish mumkinmi?",
        answer:
          "Ha, sayt xona bandligini markazlashgan holda kuzatib, bron qilingan xonani darhol \"band\" deb belgilaydi, boshqa kanallar bilan ziddiyatni kamaytiradi.",
      },
      {
        question: "Mehmon saytdan to'g'ridan-to'g'ri bron qila oladimi?",
        answer: "Ha, mehmon sayt orqali xona tanlab, sanalarni belgilab, bron so'rovini yuborishi mumkin.",
      },
    ],
  },
  "mehmonxonalar-va-hostellar__telegram-bot": {
    intro:
      "Telegram bot — mehmon bilan aloqa va xona holatini xodimlar orasida uzatuvchi vosita. Toshkentdagi mehmonxonalar va hostellar uchun FRONTIX mehmon kelish/ketish vaqtini o'zgartirganda barcha xodimlarga avtomatik yetkazadigan bot yaratadi.",
    bridge:
      "Mehmon kelish yoki ketish vaqtini o'zgartirsa, buni administratorga telefon orqali aytish va boshqa xodimlarga yetib bormasligi o'rniga, bot bu o'zgarishni admin panelda darhol yangilaydi, avtomatik bildirishnomalar esa tegishli xodimga (resepshn, farrosh) xabar yuboradi.",
    faq: [
      {
        question: "Mehmon kelish vaqtini o'zgartirsa, bu barcha xodimlarga yetib boradimi?",
        answer: "Ha, bot o'zgarishni admin panelda yangilaydi va tegishli xodimlarga avtomatik bildirishnoma yuboradi.",
      },
      {
        question: "Xona holatini (tozalangan/tozalanmagan) botda belgilash mumkinmi?",
        answer: "Ha, farrosh xona tozalangach botda holatni belgilaydi, resepshn buni real vaqtda ko'radi.",
      },
    ],
  },
  "mehmonxonalar-va-hostellar__business-automation": {
    intro:
      "CRM avtomatlashtirish — mehmonlar tarixi, xona holati va afzalliklarini bitta tizimda saqlovchi yechim. Toshkentdagi mehmonxonalar va hostellar uchun FRONTIX doimiy mehmonlarning afzalliklarini (yuqori qavat, erta check-in) eslab qoluvchi tizim quradi.",
    bridge:
      "Doimiy mehmonlarning afzalliklari hech qayerda yozilmay, har safar qaytadan so'ralishi o'rniga, CRM integratsiyasi har bir mehmonning oldingi tashriflari va afzalliklarini saqlaydi, workflow avtomatizatsiya esa xona holatini (tozalangan/tozalanmagan) xodimlar orasida avtomatik yangilab boradi.",
    faq: [
      {
        question: "Doimiy mehmonning afzalliklarini tizim eslab qoladimi?",
        answer: "Ha, CRM integratsiyasi har bir mehmonning oldingi tashriflari, afzal ko'rgan xona va xizmatlarini saqlaydi.",
      },
      {
        question: "Xona holatini kuzatish uchun alohida jurnal kerak bo'ladimi?",
        answer: "Yo'q, workflow avtomatizatsiya xona holatini tizimda saqlaydi, farrosh va resepshn buni real vaqtda ko'radi.",
      },
    ],
  },
  "fermer-xojaliklari__website-development": {
    intro:
      "Veb-sayt — fermer xo'jaligi mahsulotlarini to'g'ridan-to'g'ri shahar xaridorlariga ko'rsatuvchi raqamli vitrina. Toshkent va viloyat fermer xo'jaliklari uchun FRONTIX vositachilarsiz sotishga imkon beruvchi, mahsulot va narxlarni ko'rsatadigan sayt quradi.",
    bridge:
      "Mahsulotni to'g'ridan-to'g'ri shahar xaridorlariga taqdim etadigan onlayn ko'rinish yo'qligi va faqat vositachilar orqali sotilishi o'rniga, sayt mahsulot turlari, hajmi va narxini ochiq ko'rsatadi, CMS integratsiyasi esa fermer o'zi hosil miqdori o'zgarganda ma'lumotni tahrirlashi mumkin.",
    faq: [
      {
        question: "Sayt orqali oxirgi iste'molchi yoki kichik do'konlar bilan to'g'ridan-to'g'ri bog'lanish mumkinmi?",
        answer: "Ha, sayt mahsulot va aloqa ma'lumotlarini ko'rsatadi, xaridor vositachisiz to'g'ridan-to'g'ri buyurtma berishi mumkin.",
      },
      {
        question: "Hosil miqdori o'zgarganda saytni o'zimiz yangilay olamizmi?",
        answer: "Ha, CMS integratsiyasi orqali mavjud mahsulot miqdori va narxini dasturchisiz tahrirlash mumkin.",
      },
    ],
  },
  "fermer-xojaliklari__business-automation": {
    intro:
      "CRM avtomatlashtirish — hosil qoldig'i, xaridorlar bilan kelishuvlar va dala ishlari jadvalini bitta tizimda kuzatuvchi yechim. Fermer xo'jaliklari uchun FRONTIX qog'ozdagi daftar o'rniga mahsulot qoldig'i va buyurtmalarni raqamli kuzatib boradigan tizim quradi.",
    bridge:
      "Hosil va mahsulot qoldig'i qog'ozdagi daftarda yuritilib, qancha mahsulot sotilgani aniq bo'lmasligi o'rniga, CRM integratsiyasi har bir sotuv va qoldiqni avtomatik yozib boradi, workflow avtomatizatsiya esa sug'orish, o'g'itlash va hosil yig'ish ishlarini jadval asosida ishchilarga eslatib turadi.",
    faq: [
      {
        question: "Xaridorlar bilan telefon orqali kelishilgan buyurtmalarni tizimga yozib qo'yish mumkinmi?",
        answer:
          "Ha, har bir buyurtma tizimga kiritiladi, kelishilgan miqdor va yetkazib berish sanasi saqlanadi, yozma tasdiq sifatida xizmat qiladi.",
      },
      {
        question: "Dala ishlari jadvalini ishchilarga qanday yetkazish mumkin?",
        answer: "Workflow avtomatizatsiya sug'orish va o'g'itlash kabi ishlarni belgilangan sanada ishchiga avtomatik eslatma sifatida yuboradi.",
      },
    ],
  },
  "fermer-xojaliklari__custom-software": {
    intro:
      "Maxsus dasturiy yechim — fermer xo'jaligining hosil, ombor va yetkazib berish jarayonlariga moslashtirilgan individual tizim. Fermer xo'jaliklari uchun FRONTIX hosil qoldig'ini kuzatish va xaridorlar bilan kelishuvlarni raqamlashtiruvchi, o'ziga xos ehtiyojlarga moslangan tizim ishlab chiqadi.",
    bridge:
      "Hosil va mahsulot qoldig'ini qog'ozda yuritish va xaridorlar bilan kelishuvni faqat telefon orqali amalga oshirish o'rniga, individual arxitektura fermer xo'jaligining o'ziga xos hosil turlari va sotuv jarayonini hisobga olib quriladi, uzoq muddatli qo'llab-quvvatlash esa yangi ekin turlari qo'shilganda tizimni moslab boradi.",
    faq: [
      {
        question: "Tizim bizning o'ziga xos hosil turlarimizga moslashtiriladimi?",
        answer: "Ha, individual arxitektura sizning ekin turlari, hosil davri va sotuv jarayoningizga qarab quriladi.",
      },
      {
        question: "Kelgusi yillarda tizimni kengaytirish mumkinmi?",
        answer:
          "Ha, masshtablanuvchan tizim yangi ekin turlari yoki xaridorlar soni ko'paygan sari kengaytiriladi, uzoq muddatli qo'llab-quvvatlash bilan ta'minlanadi.",
      },
    ],
  },

  "kiyim-kechak-dokonlari__online-ordering": {
    intro: "Onlayn buyurtma tizimi — mijoz veb-sayt yoki bot orqali kerakli o'lcham va rangni tanlab, to'g'ridan-to'g'ri buyurtma bera oladigan tizim. Toshkentdagi kiyim-kechak do'konlari uchun FRONTIX har bir o'lcham-rang variantining qoldig'ini avtomatik hisoblaydigan, tugagan variantni mijozga ko'rsatmaydigan onlayn buyurtma tizimini yaratadi.",
    bridge: "Bir xil ko'ylakning S, M, L o'lchamlari va uch xil rangini daftarda alohida-alohida kuzatish o'rniga, tizim har bir variantning qoldig'ini real vaqtda yangilab boradi — mijoz tanlagan o'lcham tugagan bo'lsa, buyurtma tugmasi avtomatik faolsizlanadi. Shu tariqa sotuvchi qo'lda hisob-kitob qilib, keyin mijozga 'kechirasiz, bu o'lcham yo'q' deb qo'ng'iroq qilishga hojat qolmaydi.",
    faq: [
      { question: "Bitta mahsulotning barcha o'lcham va rang variantlarini tizimga qanday joylayman?", answer: "Har bir mahsulot kartochkasiga o'lcham va rang variantlarini alohida qator sifatida qo'shasiz, har birining o'z qoldig'i va narxi bo'lishi mumkin — FRONTIX buni admin panelda oddiy jadval ko'rinishida sozlab beradi." },
      { question: "Qoldig'i tugagan o'lcham sayt yoki botda ko'rinib turaversa nima bo'ladi?", answer: "Bunday holat bo'lmasligi uchun tizim qoldiq nolga tushgan variantni avtomatik 'mavjud emas' deb belgilaydi, mijoz uni tanlay olmaydi va bekorga buyurtma qilib qaytarish kelib chiqmaydi." },
    ],
  },
  "kiyim-kechak-dokonlari__website-development": {
    intro: "Veb-sayt — do'konning barcha mahsulotlarini kategoriya, o'lcham va narx bo'yicha saralab ko'rsatadigan onlayn katalog. Toshkentdagi kiyim-kechak do'konlari uchun FRONTIX fasllik kolleksiyalarni tez yangilash va eski mahsulotlarni chegirma bo'limiga ko'chirishni bir necha bosishda amalga oshiradigan veb-sayt tayyorlaydi.",
    bridge: "Yangi fasl kelganda butun katalogni qayta tuzish o'rniga, admin panelda mahsulotlarni 'yangi kolleksiya' yoki 'chegirma' teglariga ko'chirish yetarli — sayt avtomatik yangi bo'limlarni ko'rsatadi va eski mavsum tovarlari alohida chegirma sahifasida qoladi. Bu qog'oz katalog yoki ijtimoiy tarmoqdagi tarqoq e'lonlarga qaraganda mijozga aniqroq va tezroq ko'rinadi.",
    faq: [
      { question: "Fasllik chegirmalarni saytda alohida sahifa qilib ko'rsatish mumkinmi?", answer: "Ha, 'Chegirmalar' yoki 'Yangi kolleksiya' kabi alohida bo'lim yaratiladi, mahsulotni shu tegga belgilash bilan u avtomatik o'sha sahifada chiqadi." },
      { question: "Yangi kolleksiya rasmlarini o'zim yuklay olamanmi?", answer: "Ha, admin panel orqali mahsulot rasmi, tavsifi va narxini o'zingiz istalgan vaqt qo'shishingiz yoki o'zgartirishingiz mumkin, dasturchiga murojaat shart emas." },
    ],
  },
  "kiyim-kechak-dokonlari__telegram-bot": {
    intro: "Telegram bot — mijoz Instagram yoki og'zaki so'rov o'rniga to'g'ridan-to'g'ri botda mahsulot tanlab, buyurtma qoldiradigan avtomatik tizim. Toshkentdagi kiyim-kechak do'konlari uchun FRONTIX barcha buyurtmalarni bitta joyda yig'adigan, hech biri e'tibordan chetda qolmaydigan Telegram botini ishga tushiradi.",
    bridge: "Instagram directga kelgan xabarlarni skrinshot qilib, alohida yozib borish o'rniga, bot mijozning tanlovi, o'lchami va manzilini avtomatik tartibli buyurtma sifatida saqlaydi — sotuvchi barcha yangi buyurtmalarni bitta ro'yxatda ko'radi va hech qaysi biri chalkashib yoki unutilib qolmaydi.",
    faq: [
      { question: "Mijoz botdan qanday buyurtma beradi?", answer: "Mijoz botda mahsulot kategoriyasini, o'lchamini va rangini tanlaydi, so'ng manzilini yozadi — buyurtma darhol sotuvchiga tartibli ko'rinishda tushadi, alohida yozishmaga hojat qolmaydi." },
      { question: "Instagramdagi eski mijozlarni botga qanday o'tkazaman?", answer: "Instagram bio va stories orqali bot havolasini ulashish yetarli, FRONTIX botni shunday sozlaydiki, mijoz bir marta /start bosgach keyingi barcha buyurtmalarini shu yerdan davom ettiradi." },
    ],
  },

  "zargarlik-dokonlari__online-ordering": {
    intro: "Onlayn buyurtma tizimi — mijoz taqinchoqni tanlab, bandlash yoki oldindan to'lov qilib buyurtma bera oladigan xavfsiz tizim. Toshkentdagi zargarlik do'konlari uchun FRONTIX har bir buyurtmani tasdiqlovchi chek va holat kuzatuvi bilan ta'minlaydigan onlayn buyurtma tizimini yaratadi.",
    bridge: "Qimmatbaho taqinchoqqa telefon orqali 'ishonib' oldindan pul o'tkazish o'rniga, tizim mijozga buyurtma raqami, mahsulot rasmi va to'lov holatini ko'rsatadigan tasdiqnoma beradi — mijoz nimaga va qancha to'laganini aniq ko'radi, bu esa ishonchsizlikni yo'qotadi.",
    faq: [
      { question: "Mijoz oldindan to'lov qilganini qanday tasdiqlaymiz?", answer: "Tizim har bir buyurtmaga avtomatik raqam va holat (band qilingan, to'langan, tayyor) beradi, mijoz ham, sotuvchi ham shu holatni istalgan vaqt tekshira oladi." },
      { question: "Qimmat buyurtmalar uchun qisman to'lov (bo'nak) qabul qilish mumkinmi?", answer: "Ha, tizimda bo'nak va qolgan summani alohida belgilash mumkin, mijoz qolgan to'lovni mahsulotni olib ketishda amalga oshiradi." },
    ],
  },
  "zargarlik-dokonlari__website-development": {
    intro: "Veb-sayt — zargarlik do'konining barcha taqinchoqlarini rasm, narx va qoldig'i bilan ko'rsatadigan onlayn vitrina. Toshkentdagi zargarlik do'konlari uchun FRONTIX vitrinada sotilgan mahsulot saytda avtomatik 'sotilgan' deb belgilanadigan veb-sayt tayyorlaydi.",
    bridge: "Har bir taqinchoq yagona nusxada bo'lgani uchun, vitrinada sotilgan uzukni sayt hali 'mavjud' deb ko'rsatishi mijozni chalg'itadi. Tizim mahsulot sotilgan zahoti admin panelda bitta bosish bilan holatini yangilaydi, sayt esa darhol shu o'zgarishni ko'rsatadi — vitrina va onlayn katalog doim bir xil ma'lumotni beradi.",
    faq: [
      { question: "Har bir taqinchoq yagona bo'lsa, saytda qanday ko'rsatiladi?", answer: "Har bir mahsulotga alohida sahifa va noyob holat (mavjud/sotilgan) beriladi, sotilgach admin uni bir bosishda 'sotilgan' deb belgilaydi va sayt yangilanadi." },
      { question: "Yangi kelgan taqinchoqlarni saytga tezda qo'shsa bo'ladimi?", answer: "Ha, rasm va narxni yuklab, bir necha daqiqada yangi mahsulot sahifasi tayyor bo'ladi, alohida dasturchi kutish shart emas." },
    ],
  },
  "zargarlik-dokonlari__telegram-bot": {
    intro: "Telegram bot — mijozning gravировka yoki o'lchamga moslashtirish kabi individual so'rovlarini qabul qilib, holatini kuzatib boradigan avtomatik tizim. Toshkentdagi zargarlik do'konlari uchun FRONTIX har bir maxsus buyurtmani alohida so'rov sifatida saqlaydigan Telegram botini ishga tushiradi.",
    bridge: "Mijoz 'uzukka ismimni yozib bering' deb so'raganda bu so'rov og'zaki qolib, keyin unutilishi mumkin edi — endi bot bunday so'rovni matn va rasm bilan alohida buyurtma sifatida saqlaydi, holatini (qabul qilindi, tayyorlanmoqda, tayyor) mijozga avtomatik xabar qiladi.",
    faq: [
      { question: "Individual buyurtma (gravировka) qanday rasmiylashtiriladi?", answer: "Mijoz botda 'individual buyurtma' bo'limini tanlaydi, matn yoki rasm qo'shadi, bot esa so'rovni sotuvchiga alohida karta sifatida yuboradi, hech qaysi so'rov yo'qolmaydi." },
      { question: "Buyurtma tayyor bo'lganda mijozga qanday xabar boradi?", answer: "Sotuvchi buyurtma holatini 'tayyor' deb belgilagach, bot mijozga avtomatik xabar yuboradi, mijoz qo'ng'iroq kutib o'tirishi shart emas." },
    ],
  },

  "gul-dokonlari__online-ordering": {
    intro: "Onlayn buyurtma tizimi — mijoz bukет tarkibini tanlab, yetkazib berish sanasi va manzilini oldindan belgilab buyurtma bera oladigan tizim. Toshkentdagi gul do'konlari uchun FRONTIX to'y va marosimlar uchun bir necha kun oldin band qilinadigan buyurtmalarni aniq sana bo'yicha rejalashtiruvchi onlayn buyurtma tizimini yaratadi.",
    bridge: "To'y uchun 50 dona gulni 'ertalab olib keling' deb og'zaki aytish o'rniga, mijoz tizimda aniq sana, soat va manzilni belgilaydi, sotuvchi esa barcha oldindan buyurtmalarni kalendar ko'rinishida ko'rib, tayyorgarlikni oldindan rejalashtiradi — hech qaysi marosim buyurtmasi boshqasi bilan aralashib ketmaydi.",
    faq: [
      { question: "To'y uchun bir necha oy oldin buyurtma berish mumkinmi?", answer: "Ha, tizimda kerakli sana va soatni istalgancha oldinga belgilash mumkin, buyurtma sotuvchining kalendarida saqlanib qoladi va yaqinlashganda eslatma keladi." },
      { question: "Katta hajmdagi buyurtma uchun bo'nak to'lov talab qilinsa, qanday amalga oshiriladi?", answer: "Tizimda buyurtma summasining bir qismini bo'nak sifatida belgilash mumkin, qolgani yetkazib berish kunida to'lanadi." },
    ],
  },
  "gul-dokonlari__website-development": {
    intro: "Veb-sayt — do'kondagi mavjud gul va bukет turlarini rasm va narx bilan ko'rsatadigan onlayn katalog. Toshkentdagi gul do'konlari uchun FRONTIX har kuni yangilanadigan, faqat aslida mavjud gullarni ko'rsatadigan veb-sayt tayyorlaydi.",
    bridge: "Gullar tez so'lib, tarkib har kuni o'zgarib turgani uchun statik katalog tezda eskirib qoladi — admin panel orqali sotuvchi ertalab qaysi gullar yetib kelganini bir necha daqiqada belgilaydi, sayt esa faqat shu kuni mavjud bo'lgan variantlarni ko'rsatadi, mijoz yo'q gulga umid bog'lamaydi.",
    faq: [
      { question: "Har kuni mahsulot ro'yxatini yangilash qiyin bo'lmaydimi?", answer: "Yo'q, admin panelda faqat mavjud yoki mavjud emas belgisini bosish yetarli, butun sahifani qayta tuzish shart emas, bu bir necha daqiqa vaqt oladi." },
      { question: "Mavsumiy gullarni (masalan pionlar) alohida bo'lim qilib ko'rsatish mumkinmi?", answer: "Ha, mavsumiy yoki bayramga xos gullar uchun alohida kategoriya yaratiladi, mavsum tugaganda uni yashirish ham bir bosishda amalga oshadi." },
    ],
  },
  "gul-dokonlari__telegram-bot": {
    intro: "Telegram bot — bayram kunlarida keskin oshadigan buyurtmalarni band telefon liniyasiz avtomatik qabul qiladigan tizim. Toshkentdagi gul do'konlari uchun FRONTIX 8-mart yoki Valentin kunlari bir vaqtning o'zida ko'plab buyurtmani qabul qila oladigan Telegram botini ishga tushiradi.",
    bridge: "8-martda telefon doim band bo'lib, mijozlar bog'lanolmay boshqa do'konga ketishi odatiy hol edi — bot esa bir vaqtning o'zida yuzlab mijoz bilan parallel 'suhbatlashib', har birining buyurtmasini navbat bilan qabul qiladi, hech kim band signalga uchramaydi.",
    faq: [
      { question: "Bayram kuni bot bir vaqtda nechta buyurtmani qabul qila oladi?", answer: "Botning cheklovi yo'q — bir vaqtning o'zida yuzlab mijoz bilan parallel muloqot qilib, har birining buyurtmasini alohida tartib bilan qabul qiladi." },
      { question: "Bayram kunlari uchun tayyor bukет to'plamlarini botda ko'rsatish mumkinmi?", answer: "Ha, '8-mart to'plami' kabi tayyor variantlarni bot menyusiga oldindan qo'shib qo'yish mumkin, mijoz tez tanlab, darhol buyurtma beradi." },
    ],
  },

  "elektronika-dokonlari__online-ordering": {
    intro: "Onlayn buyurtma tizimi — mijoz mahsulotni saytdan tanlab, real vaqtdagi narx va qoldiq asosida buyurtma bera oladigan tizim. Toshkentdagi elektronika do'konlari uchun FRONTIX yangi model chiqqanda eski modellar narxini tezda o'zgartirish va qoldig'ini ko'rsatishni osonlashtiradigan onlayn buyurtma tizimini yaratadi.",
    bridge: "Yangi telefon modeli chiqqanda eski modelni chegirmaga qo'yish uchun butun katalogni qayta tuzish o'rniga, admin panelda narxni bir necha soniyada o'zgartirish yetarli — tizim buyurtma sahifasida yangi narx va 'chegirma' belgisini avtomatik ko'rsatadi, eskirgan mahsulot omborda uzoq turib qolmaydi.",
    faq: [
      { question: "Narxni o'zgartirganda sayt yoki botdagi buyurtma tizimida avtomatik yangilanadimi?", answer: "Ha, admin panelda narxni o'zgartirish bilanoq buyurtma tizimidagi barcha ko'rinishlar (sayt, bot) darhol yangi narxni ko'rsatadi." },
      { question: "Qoldig'i kam qolgan mahsulotni mijozga qanday ko'rsatish mumkin?", answer: "Tizimda 'oxirgi 2 dona qoldi' kabi avtomatik belgi qo'yish mumkin, bu mijozni tezroq qaror qabul qilishga undaydi." },
    ],
  },
  "elektronika-dokonlari__website-development": {
    intro: "Veb-sayt — elektronika mahsulotlarining texnik xususiyatlarini jadval ko'rinishida solishtirish imkonini beruvchi onlayn katalog. Toshkentdagi elektronika do'konlari uchun FRONTIX mijozga bir necha modelni yonma-yon solishtirib ko'rish imkonini beradigan veb-sayt tayyorlaydi.",
    bridge: "Mijoz ikkita telefonning xotirasi va batareyasini solishtirish uchun sotuvchiga qo'ng'iroq qilib o'tirish o'rniga, saytdagi 'solishtirish' bo'limida ikkala mahsulotni tanlab, barcha texnik xususiyatlarni bir jadvalda ko'radi — bu sotuvchining vaqtini ham, mijozning kutish vaqtini ham qisqartiradi.",
    faq: [
      { question: "Mahsulotlarni solishtirish funksiyasi qanday ishlaydi?", answer: "Mijoz katalogdan ikki yoki uchta mahsulotni tanlaydi, sayt ularning texnik xususiyatlarini (xotira, ekran, batareya) bitta jadvalda yonma-yon ko'rsatadi." },
      { question: "Yangi model qo'shilganda uning barcha xususiyatlarini kiritish qancha vaqt oladi?", answer: "Admin panelda tayyor shablon mavjud, xususiyatlarni maydonlarga kiritish bir necha daqiqa vaqt oladi, dasturiy o'zgartirish shart emas." },
    ],
  },
  "elektronika-dokonlari__telegram-bot": {
    intro: "Telegram bot — mijozning xarid tarixi, kafolat muddati va servis markazi ma'lumotini raqamli saqlab, istalgan vaqt eslatib turadigan tizim. Toshkentdagi elektronika do'konlari uchun FRONTIX qog'oz chek yo'qolsa ham kafolat ma'lumoti saqlanib qoladigan Telegram botini ishga tushiradi.",
    bridge: "Qog'oz chek yo'qolganda mijoz bilan kafolat borligi yoki yo'qligi haqida nizo chiqishi odatiy hol edi — endi bot har bir xaridni mijozning profiliga avtomatik yozib qo'yadi, mijoz istalgan vaqt botdan xarid sanasi va kafolat muddatini tekshira oladi, chekka bog'liq bo'lib qolmaydi.",
    faq: [
      { question: "Mijoz o'z kafolat muddatini qanday tekshiradi?", answer: "Bot menyusida 'Mening xaridlarim' bo'limini tanlash yetarli, u yerda xarid sanasi va kafolat tugash muddati avtomatik ko'rsatiladi." },
      { question: "Kafolat muddati tugashiga oz qolganda mijozga eslatma keladimi?", answer: "Ha, bot kafolat tugashidan bir necha kun oldin mijozga avtomatik eslatma yuboradi, xohlasa servisga ulgurib murojaat qiladi." },
    ],
  },

  "mebel-dokonlari__online-ordering": {
    intro: "Onlayn buyurtma tizimi — mijoz mebelni tanlab, yetkazib berish sanasi va vaqtini oldindan belgilab buyurtma bera oladigan tizim. Toshkentdagi mebel do'konlari uchun FRONTIX katta gabaritli mebel yetkazib berish jadvalini tartibli rejalashtiradigan onlayn buyurtma tizimini yaratadi.",
    bridge: "Katta shkaf yoki divanni 'qachondir bugun' yetkazib berish o'rniga, mijoz tizimda mavjud sana va vaqt oralig'ini tanlaydi, sotuvchi esa barcha yetkazib berishlarni kalendarda ko'rib, mashina va yuk ko'targichlarni oldindan rejalashtiradi — bir kunga ortiqcha buyurtma to'planib qolmaydi.",
    faq: [
      { question: "Yetkazib berish sanasini mijoz o'zi tanlay oladimi?", answer: "Ha, tizim bo'sh sanalarni ko'rsatadi, mijoz o'ziga qulay kun va vaqt oralig'ini tanlab buyurtma beradi." },
      { question: "Bir kunga ortiqcha yetkazib berish to'planib qolsa nima bo'ladi?", answer: "Tizim har bir sana uchun mashina va ishchi resursiga qarab limit qo'yadi, limit to'lgan kun mijozga avtomatik ko'rsatilmaydi, u boshqa sanani tanlaydi." },
    ],
  },
  "mebel-dokonlari__website-development": {
    intro: "Veb-sayt — har bir mebelning aniq o'lchamlari, rasmlari va narxini ko'rsatadigan onlayn katalog. Toshkentdagi mebel do'konlari uchun FRONTIX mijozga xonasiga mos kelish-kelmasligini oldindan aniqlashga yordam beradigan, aniq o'lcham ko'rsatkichli veb-sayt tayyorlaydi.",
    bridge: "Mijoz divanning uzunligi xonasiga sig'ish-sig'masligini bilmay buyurtma berib, keyin qaytarish odatiy muammo edi — endi har bir mahsulot sahifasida aniq uzunlik, kenglik va balandlik ko'rsatiladi, mijoz o'z xonasi o'lchamini oldindan solishtirib, keyin buyurtma beradi, bu qaytarish holatlarini kamaytiradi.",
    faq: [
      { question: "Har bir mebel uchun o'lcham ma'lumotini qanday ko'rsatish mumkin?", answer: "Mahsulot kartochkasida uzunlik, kenglik, balandlik alohida maydonlarda ko'rsatiladi, xohlasangiz o'lcham chizmasi rasmini ham qo'shish mumkin." },
      { question: "Mijoz o'lchamlarni solishtirib ko'ra oladigan qulaylik bormi?", answer: "Ha, mahsulot tavsifida aniq santimetrlarda o'lcham beriladi, mijoz o'z xonasi o'lchamiga solishtirib qaror qabul qiladi." },
    ],
  },
  "mebel-dokonlari__telegram-bot": {
    intro: "Telegram bot — mijozga mebel yetkazib berilgandan keyin yig'ish (montaj) xizmati kerak-kerakligini oldindan so'rab, ishchi sonini rejalashtirishga yordam beradigan tizim. Toshkentdagi mebel do'konlari uchun FRONTIX montaj xizmatini buyurtma jarayoniga qo'shib qo'yadigan Telegram botini ishga tushiradi.",
    bridge: "Mijoz yetkazib berilgandan keyin 'yig'ib bera olasizmi' deb qo'ng'iroq qilishi va oxirgi daqiqada ishchi izlash o'rniga, bot buyurtma vaqtidayoq 'montaj kerakmi?' degan savolni beradi, javobga qarab kerakli sonda ishchi oldindan biriktiriladi — yetkazib berish kuni hech qanday kutilmagan holat chiqmaydi.",
    faq: [
      { question: "Montaj xizmati narxi qanday hisoblanadi?", answer: "Bot mebel turi va murakkabligiga qarab montaj narxini avtomatik hisoblab, buyurtma summasiga qo'shib ko'rsatadi, mijoz oldindan aniq summani ko'radi." },
      { question: "Montajsiz, faqat yetkazib berishni tanlash mumkinmi?", answer: "Ha, bot buyurtma jarayonida 'faqat yetkazib berish' yoki 'yetkazib berish + montaj' variantlarini alohida taklif qiladi, mijoz o'zi kerakligini tanlaydi." },
    ],
  },

  "qurilish-mollari-dokonlari__online-ordering": {
    intro: "Onlayn buyurtma tizimi — mijoz kerakli miqdorni kiritganda ulgurji yoki chakana narxni avtomatik ko'rsatadigan buyurtma tizimi. Toshkentdagi qurilish mollari do'konlari uchun FRONTIX miqdorga qarab narx va chegirmani o'zi hisoblaydigan onlayn buyurtma tizimini yaratadi.",
    bridge: "Sement yoki g'ishtni 10 dona olganda bir narx, 500 dona olganda boshqa narxda sotish qo'lda hisoblanganda xato qilish oson edi — tizim mijoz kiritgan miqdorga qarab ulgurji chegara va narxni avtomatik qo'llaydi, sotuvchi kalkulyator bilan o'tirib hisoblab o'tirmaydi.",
    faq: [
      { question: "Ulgurji narx qaysi miqdordan boshlab ishlaydi?", answer: "Har bir mahsulot uchun ulgurji chegara (masalan 100 donadan boshlab) admin panelda alohida belgilanadi, mijoz shu miqdorni kiritganda tizim avtomatik ulgurji narxni qo'llaydi." },
      { question: "Chakana va ulgurji mijozlar bir xil buyurtma tizimidan foydalanadimi?", answer: "Ha, bitta tizim ikkalasiga ham xizmat qiladi, farq faqat kiritilgan miqdorga qarab avtomatik hisoblanadigan narxda bo'ladi." },
    ],
  },
  "qurilish-mollari-dokonlari__website-development": {
    intro: "Veb-sayt — turli brend va sifat darajasidagi qurilish mollarini narx va xususiyati bilan solishtirib ko'rsatadigan onlayn katalog. Toshkentdagi qurilish mollari do'konlari uchun FRONTIX mijozga bir nechta sement yoki bo'yoq brendini yonma-yon solishtirish imkonini beradigan veb-sayt tayyorlaydi.",
    bridge: "Mijoz qaysi sement markasi o'z loyihasiga mosligini bilmasdan tasodifiy tanlov qilishi natijasida noto'g'ri mahsulot sotib olishi mumkin edi — saytda har bir brend uchun sifat darajasi, quyilish vaqti va narxi alohida ko'rsatiladi, mijoz solishtirib, o'ziga mosini ongli ravishda tanlaydi.",
    faq: [
      { question: "Turli brendlarni bitta kategoriyada qanday ko'rsatish mumkin?", answer: "Har bir mahsulot brend, sifat darajasi va texnik ko'rsatkich bo'yicha filtrlanadi, mijoz saytda kerakli brendni tez topadi." },
      { question: "Mijoz brendlar orasidagi farqni tushunmasa nima qiladi?", answer: "Har bir mahsulot sahifasida qisqa tavsif va tavsiya etilgan qo'llanish sohasi ko'rsatiladi, kerak bo'lsa sayt orqali sotuvchiga savol yuborish tugmasi ham mavjud." },
    ],
  },
  "qurilish-mollari-dokonlari__telegram-bot": {
    intro: "Telegram bot — qurilish ob'ektiga yetkazib berish sanasi, transport turi va manzilini mijoz bilan tez kelishib oladigan avtomatik tizim. Toshkentdagi qurilish mollari do'konlari uchun FRONTIX og'ir yuklarni ob'ektga yetkazib berishni tartibga soladigan Telegram botini ishga tushiradi.",
    bridge: "Qurilish ob'ektiga qancha sement va qaysi mashinada, qaysi kunda yetkazib berish kerakligini telefon orqali kelishish ko'pincha chalkashardi — bot mijozdan manzil, hajm va kerakli sanani tartibli so'rab oladi, so'ng sotuvchiga tayyor buyurtma sifatida yuboradi, og'zaki kelishuvdagi noaniqlik yo'qoladi.",
    faq: [
      { question: "Katta hajmdagi buyurtma uchun qaysi transport kerakligini bot qanday aniqlaydi?", answer: "Bot mijozdan mahsulot og'irligi va miqdorini so'raydi, shu asosda kerakli transport turini (yengil mashina yoki yuk mashinasi) tavsiya qiladi." },
      { question: "Yetkazib berish kunini o'zgartirish kerak bo'lsa, bot orqali mumkinmi?", answer: "Ha, mijoz mavjud buyurtmasini ochib, yangi sana so'raydi, sotuvchi tasdiqlagach yangilangan sana buyurtmada saqlanadi." },
    ],
  },

  "bolalar-oyinchoqlari-dokonlari__online-ordering": {
    intro: "Onlayn buyurtma tizimi — mijoz o'yinchoq bilan birga sovg'a o'rami va tabrik yozuvini ham buyurtma qilishi mumkin bo'lgan tizim. Toshkentdagi bolalar o'yinchoqlari do'konlari uchun FRONTIX sovg'a xizmatlarini buyurtma jarayoniga qo'shib qo'yadigan onlayn buyurtma tizimini yaratadi.",
    bridge: "Sovg'a sifatida sotib olingan o'yinchoqqa o'rash va tabrik yozuvi qo'shish so'rovi qo'lda alohida eslab qolinishi kerak bo'lganda unutilib qolar edi — endi buyurtma shaklida 'sovg'a o'rami kerakmi' va 'tabrik matni' maydonlari mavjud, sotuvchi har bir buyurtmada bu talabni aniq ko'radi va tayyorlashda unutmaydi.",
    faq: [
      { question: "Sovg'a o'rami qo'shimcha to'lov talab qiladimi?", answer: "Ha, sovg'a o'rami xizmati alohida narxda belgilanadi va mijoz buyurtma vaqtida ko'rib, xohlasa qo'shimcha sifatida tanlaydi." },
      { question: "Tabrik matnini mijoz o'zi yoza oladimi?", answer: "Ha, buyurtma shaklida alohida matn maydoni bor, mijoz o'zi xohlagan tabrik so'zlarini yozadi, sotuvchi shu matnni kartochkaga bosib beradi." },
    ],
  },
  "bolalar-oyinchoqlari-dokonlari__website-development": {
    intro: "Veb-sayt — o'yinchoqlarni bolaning yoshi bo'yicha filtrlab ko'rsatadigan onlayn katalog. Toshkentdagi bolalar o'yinchoqlari do'konlari uchun FRONTIX ota-onaga farzandi yoshiga mos o'yinchoqni tez topishga yordam beradigan veb-sayt tayyorlaydi.",
    bridge: "Ota-ona 3 yoshli bolasiga qaysi o'yinchoq mosligini bilmay sotuvchidan uzoq maslahat so'rashi o'rniga, saytda 'yosh' filtri orqali (0-1, 1-3, 3-6, 6+ kabi) mos kategoriyani tanlaydi va faqat o'sha yoshga tavsiya etilgan o'yinchoqlarni ko'radi — bu tanlovni tezlashtiradi va noto'g'ri xarid ehtimolini kamaytiradi.",
    faq: [
      { question: "Yosh filtri saytda qanday ishlaydi?", answer: "Har bir mahsulotga tavsiya etilgan yosh oralig'i belgilanadi, mijoz filtrni tanlaganda faqat shu yoshga mos o'yinchoqlar ro'yxati chiqadi." },
      { question: "Bir o'yinchoq bir nechta yosh guruhiga mos bo'lsa nima qiladi?", answer: "Mahsulotga bir nechta yosh oralig'ini belgilash mumkin, u filtrlashda barcha tegishli guruhlarda ko'rinadi." },
    ],
  },
  "bolalar-oyinchoqlari-dokonlari__telegram-bot": {
    intro: "Telegram bot — Yangi yil va 1-iyun kabi bayramlar oldidan keskin oshadigan buyurtmalarni avtomatik qabul qiladigan tizim. Toshkentdagi bolalar o'yinchoqlari do'konlari uchun FRONTIX bayram kunlaridagi buyurtma oqimini yo'qotmasdan boshqarishga yordam beradigan Telegram botini ishga tushiradi.",
    bridge: "Yangi yil oldidan kelayotgan ko'plab buyurtmani qo'lda qabul qilishga ulgurmay, ba'zi mijozlar javob kutmay boshqa do'konga ketishi odatiy hol edi — bot esa bir vaqtning o'zida barcha mijozlar bilan muloqot qilib, har birining buyurtmasini navbat bilan qabul qiladi, hech kim javobsiz qolmaydi.",
    faq: [
      { question: "Bayram kunlari bot orqali buyurtma tezligi qanday oshadi?", answer: "Bot bir vaqtning o'zida cheksiz mijoz bilan parallel muloqot qila oladi, shuning uchun bayram kunlari ham har bir mijoz darhol javob oladi." },
      { question: "Bayramga xos tayyor sovg'a to'plamlarini botda ko'rsatish mumkinmi?", answer: "Ha, 'Yangi yil to'plami' yoki '1-iyun sovg'asi' kabi tayyor variantlarni bot menyusiga oldindan qo'shish mumkin, mijoz tez tanlab buyurtma beradi." },
    ],
  },

  "sport-anjomlari-dokonlari__online-ordering": {
    intro: "Onlayn buyurtma tizimi — mijoz o'lcham jadvaliga qarab kerakli o'lchamni aniq tanlab, buyurtma bera oladigan tizim. Toshkentdagi sport anjomlari do'konlari uchun FRONTIX krossovka va sport kiyimi o'lchamini xato tanlash ehtimolini kamaytiradigan onlayn buyurtma tizimini yaratadi.",
    bridge: "Mijoz krossovka o'lchamini taxminan tanlab, keyin kichik yoki katta chiqqani uchun almashtirishga murojaat qilishi odatiy hol edi — tizim har bir mahsulot yonida brendga xos o'lcham jadvalini (masalan, oyoq uzunligi santimetrda) ko'rsatadi, mijoz aniqroq tanlov qiladi va almashtirish so'rovlari kamayadi.",
    faq: [
      { question: "O'lcham jadvali har bir brend uchun turlicha bo'lsa, tizim buni hisobga oladimi?", answer: "Ha, har bir brend yoki mahsulot uchun alohida o'lcham jadvali kiritiladi, mijoz aynan shu mahsulotga tegishli jadvalni ko'radi." },
      { question: "Noto'g'ri o'lcham kelib qolsa, almashtirish tizim orqali so'raladimi?", answer: "Ha, mijoz buyurtma tarixidan 'almashtirish' so'rovini yuboradi, sotuvchi buni tizimda alohida so'rov sifatida ko'rib tezda hal qiladi." },
    ],
  },
  "sport-anjomlari-dokonlari__website-development": {
    intro: "Veb-sayt — sport anjomlarining brend originalligi, sertifikati va kafolat ma'lumotini ko'rsatadigan onlayn katalog. Toshkentdagi sport anjomlari do'konlari uchun FRONTIX har bir mahsulot original ekanini tasdiqlovchi ma'lumotni aniq ko'rsatadigan veb-sayt tayyorlaydi.",
    bridge: "Mijoz internetda arzon narxga qalbaki mahsulotlar ko'p uchrashini bilib, xarid qilishdan cho'chishi mumkin edi — endi har bir mahsulot sahifasida rasmiy distribyutor sertifikati yoki kafolat muddati aniq ko'rsatiladi, bu mijozga mahsulot originalligiga ishonch beradi va xarid qilish qarorini osonlashtiradi.",
    faq: [
      { question: "Sertifikat va kafolat ma'lumotini har bir mahsulotga qanday qo'shaman?", answer: "Mahsulot kartochkasida alohida 'kafolat va sertifikat' bo'limi bo'ladi, u yerga hujjat rasmi yoki matnini yuklaysiz." },
      { question: "Mijoz sertifikatga shubha qilsa, saytda qo'shimcha isbot ko'rsatish mumkinmi?", answer: "Ha, rasmiy distribyutor guvohnomasi yoki brend bilan hamkorlik hujjatini alohida sahifada joylashtirish mumkin, bu ishonchni yanada mustahkamlaydi." },
    ],
  },
  "sport-anjomlari-dokonlari__telegram-bot": {
    intro: "Telegram bot — mavsumiy sport mahsulotlari (chang'i, velosiped) omborga qaytadan kelganda mijozlarga avtomatik xabar beradigan tizim. Toshkentdagi sport anjomlari do'konlari uchun FRONTIX mavsum boshlanishidan oldin talabni oldindan yig'ib olishga yordam beradigan Telegram botini ishga tushiradi.",
    bridge: "Qishda chang'i tugab qolganda mijoz keyingi safar qachon kelishini bilmay ketib qolar, do'kon esa talabni yo'qotardi — bot orqali mijoz 'mavjud bo'lganda xabar bering' tugmasini bosadi, mahsulot omborga kelganidan so'ng bot barcha kutayotgan mijozlarga avtomatik xabar yuboradi, do'kon esa mavsum boshida talabni oldindan bilib, zaxirani shunga qarab rejalashtiradi.",
    faq: [
      { question: "Mijoz 'xabar bering' tugmasini bosgach, qachon xabar oladi?", answer: "Mahsulot omborga kelib, admin uni 'mavjud' deb belgilagan zahoti bot barcha kutayotgan mijozlarga avtomatik xabar yuboradi." },
      { question: "Bot orqali mavsum boshida talab qancha ekanini oldindan bilsa bo'ladimi?", answer: "Ha, 'xabar bering' so'rovlari sonini ko'rish orqali sotuvchi mavsum boshlanishidan oldin qaysi mahsulotga talab ko'proq ekanini taxmin qilib, zaxirani shunga moslab tayyorlaydi." },
    ],
  },

  "maishiy-texnika-tamirlash__telegram-bot": {
    intro: "Telegram bot — mijoz uy texnikasi buzilganda qo'ng'iroq qilib navbat kutmasdan, bot orqali muammoni tasvirlab, ustaning taxminiy kelish vaqtini ko'radigan tizim. Toshkentdagi maishiy texnika ustaxonalari uchun FRONTIX mijozni butun kun uyda \"usta qachon keladi\" deb kutishdan qutqaradigan bot yaratadi.",
    bridge: "Muzlatgich yoki kir yuvish mashinasi buzilib, mijoz butun kunini uyda ustani kutib o'tkazish o'rniga, bot orqali nosozlik turini tanlaydi va shu kunga rejalashtirilgan taxminiy vaqt oralig'ini darhol ko'radi, ustaning band bo'lishi tufayli kutib qolish holati kamayadi.",
    faq: [
      { question: "Bot orqali usta qachon kelishini aniq bilsa bo'ladimi?", answer: "Ha, bot dispetcherning shu kunga rejalashtirgan marshrutiga qarab taxminiy vaqt oralig'ini ko'rsatadi, usta yo'lda kechiksa mijozga avtomatik yangilangan xabar yuboriladi." },
      { question: "Bot orqali qaysi texnika turlari uchun murojaat qilish mumkin?", answer: "Muzlatgich, kir yuvish mashinasi, konditsioner, gaz plita kabi barcha uy texnikasi turlarini bot menyusiga kiritib, har biriga mos savollar (masalan marka, nosozlik belgisi) qo'yish mumkin." },
    ],
  },
  "maishiy-texnika-tamirlash__business-automation": {
    intro: "CRM avtomatlashtirish — ustalar joylashuvi, buyurtmalar va ehtiyot qismlar tarixini bitta tizimda yurituvchi yechim. Toshkentdagi maishiy texnika ta'mirlash kompaniyalari uchun FRONTIX yaqin atrofdagi buyurtmani eng yaqin bo'sh ustaga avtomatik biriktiradigan va har bir ehtiyot qism tarixini saqlaydigan CRM quradi.",
    bridge: "Dispetcher xotirasiga tayanib uzoqdagi ustaga yaqin buyurtma berish o'rniga, CRM ustalarning shu kungi marshrutini ko'rsatib, yangi murojaatni geografik jihatdan eng yaqin bo'sh ustaga o'zi taklif qiladi, shu bilan birga har bir almashtirilgan qismning kafolat muddati mijoz kartochkasida saqlanib qoladi.",
    faq: [
      { question: "CRM ustalarning qayerda ekanini qanday biladi?", answer: "Har bir usta kunlik marshrutini ilovaga kiritadi yoki oldingi buyurtma yakunlangach avtomatik belgilanadi, CRM shunga qarab yangi murojaatni eng yaqin ustaga taklif qiladi." },
      { question: "Ehtiyot qism kafolati muddati o'tib ketsa CRM buni ko'rsatadimi?", answer: "Ha, har bir almashtirilgan qismga kafolat sanasi biriktiriladi va mijoz qayta murojaat qilganda tizim kafolat hali amal qiladimi yoki yo'qligini darhol ko'rsatadi." },
    ],
  },
  "maishiy-texnika-tamirlash__website-development": {
    intro: "Veb-sayt — mijoz texnika turi va nosozlik belgilarini tanlab, ariza bilan birga taxminiy narx oralig'ini ko'radigan onlayn maydon. Toshkentdagi maishiy texnika ustaxonalari uchun FRONTIX mijoz uyga usta chaqirishdan oldin narxdan taxminiy tasavvurga ega bo'ladigan sayt yaratadi.",
    bridge: "Narx faqat usta uyga borib texnikani ochgandan keyin aniqlanishi va rozilik bo'lmasa borib-kelish behuda ketishi o'rniga, sayt texnika turi, marka va nosozlik belgisiga qarab taxminiy narx vilkasini oldindan ko'rsatadi, shunda mijoz ustani chaqirishdan oldin taxminiy byudjetni biladi.",
    faq: [
      { question: "Saytda ko'rsatilgan narx aniq bo'ladimi?", answer: "Sayt taxminiy narx oralig'ini ko'rsatadi, yakuniy narx usta obyektda texnikani ko'rgandan keyin aniqlanadi, lekin mijoz oldindan taxminiy byudjetni bilib oladi." },
      { question: "Saytdan to'g'ridan-to'g'ri ariza berish mumkinmi?", answer: "Ha, mijoz texnika turini, nosozlik belgisini va manzilini kiritib ariza qoldiradi, ariza avtomatik ravishda eng yaqin bo'sh ustaga yo'naltiriladi." },
    ],
  },

  "telefon-va-kompyuter-tamirlash__telegram-bot": {
    intro: "Telegram bot — mijoz telefon yoki noutbukini ta'mirga topshirgach, uning qaysi bosqichda ekanini do'konga qo'ng'iroq qilmasdan bot orqali kuzatadigan tizim. Toshkentdagi telefon va kompyuter ustaxonalari uchun FRONTIX har bir buyurtmaga status kodi biriktirib, mijozni real vaqtda xabardor qiladigan bot yaratadi.",
    bridge: "Mijoz \"tayyormi\" deb har safar do'konga qo'ng'iroq qilish o'rniga, bot orqali buyurtma raqamini kiritadi va qurilma hozir diagnostikada, ehtiyot qism kutilmoqda yoki tayyor ekanini darhol ko'radi, bosqich o'zgarganda bot mijozga avtomatik xabar yuboradi.",
    faq: [
      { question: "Buyurtma statusini bot orqali kuzatish uchun nima kerak?", answer: "Mijozga qurilma qabul qilinganda berilgan buyurtma raqami yetarli, bot shu raqam orqali qurilmaning hozirgi bosqichini darhol ko'rsatadi." },
      { question: "Bosqich o'zgarganda mijozga alohida xabar boradimi?", answer: "Ha, usta qurilma holatini tizimda yangilagan zahoti bot mijozga avtomatik xabar yuboradi, mijoz qayta so'rab qo'ng'iroq qilishi shart emas." },
    ],
  },
  "telefon-va-kompyuter-tamirlash__business-automation": {
    intro: "CRM avtomatlashtirish — ehtiyot qismlar zaxirasi, kafolat muddatlari va buyurtmalar tarixini bitta joyda yurituvchi tizim. Toshkentdagi telefon va kompyuter ta'mirlash xizmatlari uchun FRONTIX ehtiyot qism tugab qolganda oldindan ogohlantiradigan va har bir kafolatni raqamli saqlaydigan CRM quradi.",
    bridge: "Mijoz kelganda \"ehtiyot qism yo'q ekan\" deb qaytarib yuborilishi o'rniga, CRM ekran yoki batareya zaxirasi minimal chegaraga yetganda avtomatik ogohlantiradi, shu bilan birga har bir ta'mirlashga berilgan kafolat muddati mijoz kartasida saqlanib, qog'oz yo'qolib qolishidan qat'i nazar tizimdan tekshirib bo'ladi.",
    faq: [
      { question: "Kafolat muddati qog'oz yo'qolsa ham tasdiqlanadimi?", answer: "Ha, har bir ta'mirlash CRM'da mijoz raqami bilan bog'lanadi, kafolat muddatini istalgan vaqtda tizimdan tekshirish mumkin, qog'oz kvitansiyaga bog'liq emas." },
      { question: "Ehtiyot qism tugashi oldindan qanday bilinadi?", answer: "Har bir qism uchun minimal zaxira chegarasi belgilanadi, shu chegaraga yetganda CRM xodimlarga avtomatik ogohlantirish yuboradi va yetishmovchilik oldindan bartaraf etiladi." },
    ],
  },
  "telefon-va-kompyuter-tamirlash__website-development": {
    intro: "Veb-sayt — mijoz qurilmani boshqa shahardan pochta orqali yuborishdan oldin onlayn ariza to'ldirib, tracking-kod oladigan maydon. Toshkentdagi telefon va kompyuter ustaxonalari uchun FRONTIX qurilma yo'lda qayerda ekanligini mijoz saytdan kuzata oladigan tizim yaratadi.",
    bridge: "Pochta orqali yuborilgan qurilmani kim qabul qilib olgani faqat og'zaki ishonchga asoslanishi o'rniga, sayt orqali berilgan ariza raqami bilan mijoz qurilma qabul qilinganini, diagnostikaga kirganini va tayyor bo'lganini onlayn kuzatadi, bu esa uzoqdagi mijozlarga ham ishonch beradi.",
    faq: [
      { question: "Boshqa shahardan qurilma yuborsam sayt orqali nazorat qila olamanmi?", answer: "Ha, saytda onlayn ariza to'ldirib tracking raqami olasiz, qurilma ustaxonaga yetib kelgani va bosqichlari shu raqam orqali ko'rinadi." },
      { question: "Saytda narxlar haqida oldindan ma'lumot bormi?", answer: "Sayt keng tarqalgan nosozliklar (ekran, batareya, quvvatlanish) uchun taxminiy narx oralig'ini ko'rsatadi, yakuniy narx diagnostikadan keyin tasdiqlanadi." },
    ],
  },

  "poligrafiya-xizmatlari__telegram-bot": {
    intro: "Telegram bot — bosmaxona mijozi buyurtma bosqichini (maket tasdiqlangan, bosilmoqda, laminatsiya qilinmoqda) qo'ng'iroq qilmasdan bot orqali kuzatadigan tizim. Toshkentdagi poligrafiya xizmatlari uchun FRONTIX har bir katta tираж bosqichini real vaqtda ko'rsatadigan bot yaratadi.",
    bridge: "Katta tираж qaysi bosqichda ekanini bilish uchun qo'ng'iroq qilib so'rash o'rniga, mijoz bot orqali buyurtma raqamini kiritadi va maket tasdiqlangani, qog'oz kesilgani yoki laminatsiya bosqichida ekanini darhol ko'radi, bosqich o'zgarganda bot avtomatik xabar yuboradi.",
    faq: [
      { question: "Bot orqali qaysi bosqichlar ko'rsatiladi?", answer: "Maket tasdiqlash, bosib chiqarish, kesish va laminatsiya kabi har bir texnologik bosqich alohida belgilanadi, mijoz buyurtma raqami orqali hozirgi holatni ko'radi." },
      { question: "Shoshilinch buyurtma uchun bot orqali murojaat qilsa bo'ladimi?", answer: "Ha, bot menyusida \"shoshilinch buyurtma\" varianti bor, u tanlanganda so'rov alohida belgi bilan operatorga tushadi va navbatda ustuvor ko'riladi." },
    ],
  },
  "poligrafiya-xizmatlari__business-automation": {
    intro: "CRM avtomatlashtirish — mijozning oldingi buyurtmalaridagi rang kodi, qog'oz turi va ishlab chiqarish navbatini boshqaruvchi tizim. Toshkentdagi bosmaxonalar uchun FRONTIX \"avvalgidek qilib bering\" degan buyurtmani aniq rang kodi bilan takrorlaydigan va shoshilinch buyurtmalarni ustuvor navbatga qo'yadigan CRM quradi.",
    bridge: "Mijozning oldingi buyurtmasida ishlatilgan Pantone kodi va qog'oz turi eslab qolinmagani uchun rang mos kelmay qolishi o'rniga, CRM har bir mijoz uchun ishlatilgan aniq rang kodi va material turini saqlaydi, shoshilinch buyurtmalarga esa alohida ustuvorlik belgisi qo'yilib, dastgoh operatori navbatni endi qo'lda hal qilmaydi.",
    faq: [
      { question: "CRM avvalgi buyurtmadagi rangni qanday eslab qoladi?", answer: "Har bir buyurtma bajarilgandan keyin ishlatilgan CMYK yoki Pantone kodi, qog'oz turi va grammaji mijoz kartochkasiga yozib qo'yiladi, keyingi buyurtmada shu ma'lumot avtomatik ko'rsatiladi." },
      { question: "Shoshilinch va oddiy buyurtmalar navbatda qanday ajratiladi?", answer: "CRM'da har bir buyurtmaga muddat va ustuvorlik darajasi belgilanadi, tizim shoshilinch buyurtmalarni ishlab chiqarish navbatida yuqoriga chiqarib ko'rsatadi." },
    ],
  },
  "poligrafiya-xizmatlari__website-development": {
    intro: "Veb-sayt — mijoz maketni yuklab, ranglar bosilganda qanday chiqishini onlayn preview orqali ko'radigan va narx kalkulyatoridan foydalanadigan maydon. Toshkentdagi poligrafiya kompaniyalari uchun FRONTIX ekran rangi bilan bosma rang farqi haqida oldindan ogohlantiruvchi sayt yaratadi.",
    bridge: "Ranglar ekranda ko'ringanidan boshqacha bosilib, butun tираж qayta bosilishi o'rniga, sayt maket yuklanganda CMYK formatga mos kelish-kelmasligini tekshiradi va bosma natija ekrandagidan farq qilishi mumkinligi haqida aniq ogohlantirish beradi, shu bilan xatolik oldindan oldini oladi.",
    faq: [
      { question: "Saytga yuklangan maket avtomatik tekshiriladimi?", answer: "Ha, sayt fayl formati va rang rejimini (RGB yoki CMYK) tekshiradi, agar RGB formatda bo'lsa, bosma natija ekrandagidan farq qilishi mumkinligi haqida ogohlantirish chiqadi." },
      { question: "Saytda narxni tираж va qog'oz turiga qarab hisoblash mumkinmi?", answer: "Ha, kalkulyator tираж soni, qog'oz turi va laminatsiya kabi qo'shimcha xizmatlarni hisobga olib taxminiy narxni darhol ko'rsatadi." },
    ],
  },

  "tikuv-atelyelari__telegram-bot": {
    intro: "Telegram bot — atelye mijozi buyurtma bosqichini (kesish, urinib ko'rish, tugallash) har kuni qo'ng'iroq qilmasdan bot orqali kuzatadigan tizim. Toshkentdagi tikuv atelyelari uchun FRONTIX mijozni \"tayyormi\" deb qo'ng'iroq qilishdan qutqaradigan bot yaratadi.",
    bridge: "Mijoz kiyimi tayyor bo'lganini bilish uchun har kuni qo'ng'iroq qilishi o'rniga, bot orqali buyurtma raqamini kiritadi va hozir kesish, birinchi urinib ko'rish yoki tugallash bosqichida ekanini darhol ko'radi, urinib ko'rish sanasi belgilansa bot eslatma yuboradi.",
    faq: [
      { question: "Bot orqali urinib ko'rish sanasini eslatib turadimi?", answer: "Ha, tikuvchi urinib ko'rish sanasini tizimga kiritgach, bot mijozga tadbirdan bir kun oldin avtomatik eslatma yuboradi." },
      { question: "Bir nechta buyurtmam bo'lsa bot ularni ajratib ko'rsatadimi?", answer: "Ha, har bir buyurtma alohida raqam bilan ro'yxatga olinadi, mijoz bot menyusidan o'ziga tegishli buyurtmalar ro'yxatini va har birining holatini alohida ko'radi." },
    ],
  },
  "tikuv-atelyelari__business-automation": {
    intro: "CRM avtomatlashtirish — mijoz o'lchovlari, mato tarixi va tikuvchilar jadvalini bitta tizimda saqlovchi yechim. Toshkentdagi tikuv atelyelari uchun FRONTIX o'lchov daftari yo'qolib qolishining oldini oluvchi va to'y kabi aniq sanaga bog'liq buyurtmalarni kechiktirmaydigan CRM quradi.",
    bridge: "Mijoz o'lchovlari yozilgan daftar yo'qolib, qayta o'lchashga to'g'ri kelishi o'rniga, CRM har bir mijozning bo'y, bel, yelka o'lchovlarini raqamli kartochkada saqlaydi, shu bilan birga har bir tikuvchining qaysi buyurtmani qachon tugatishi rejalashtirilib, to'y sanasiga bog'liq buyurtmalar ustuvor ko'rsatiladi.",
    faq: [
      { question: "Mijoz o'lchovlari qayta so'ralmasdan saqlanadimi?", answer: "Ha, birinchi tashrifda olingan barcha o'lchovlar mijoz raqamiga bog'lab CRM'da saqlanadi, keyingi buyurtmada shu ma'lumotdan qayta foydalaniladi." },
      { question: "To'yga bog'liq buyurtma kechikmasligi qanday ta'minlanadi?", answer: "Buyurtma kiritilganda tadbir sanasi belgilanadi, CRM shu sanadan orqaga hisoblab tikuvchi jadvalida ustuvor joy ajratadi va muddat yaqinlashganda ogohlantiradi." },
    ],
  },
  "tikuv-atelyelari__website-development": {
    intro: "Veb-sayt — atelye ishlagan modellar portfoliosi va onlayn ariza formasi joylashgan maydon. Toshkentdagi tikuv atelyelari uchun FRONTIX mijoz oldindan mato va fason tanlab ariza qoldira oladigan sayt yaratadi.",
    bridge: "Mato va andoza tarixi eslab qolinmasdan, mijoz keyingi buyurtmasida qaysi matoni ishlatganini tushuntirishga majbur bo'lishi o'rniga, saytdagi mijoz kabinetida oldingi buyurtmalar rasm va mato ma'lumoti bilan saqlanadi, mijoz shunchaki oldingi buyurtmasiga havola berib yangi ariza qoldiradi.",
    faq: [
      { question: "Saytda oldingi buyurtmalarim saqlanib qoladimi?", answer: "Ha, ro'yxatdan o'tgan mijozning har bir buyurtmasi rasm, mato turi va o'lchovlar bilan shaxsiy kabinetida saqlanadi, keyingi arizada shu ma'lumotdan foydalanish mumkin." },
      { question: "Saytdan andoza yoki fason tanlab ariza berish mumkinmi?", answer: "Ha, sayt fason katalogidan tanlab, mato turini ko'rsatib, taxminiy tayyor bo'lish muddati bilan onlayn ariza qoldirish imkonini beradi." },
    ],
  },

  "konditsioner-xizmatlari__telegram-bot": {
    intro: "Telegram bot — mijoz konditsioner o'rnatish yoki texnik xizmat uchun bo'sh sanalarni ko'rib, o'zi yoziladigan tizim. Toshkentdagi konditsioner xizmatlari uchun FRONTIX yozning eng issiq kunlarida ham \"ertaga-indinga\" degan noaniq javob o'rniga aniq sana beruvchi bot yaratadi.",
    bridge: "Ustalar jadvali qog'ozda yuritilib mijozga noaniq \"ertaga-indinga\" javobi berilishi o'rniga, bot ustalarning shu haftadagi bo'sh vaqt oralig'ini real vaqtda ko'rsatadi, mijoz mos kelgan kun va soatni tanlab o'zi yoziladi, ikki mijoz bir vaqtga tushib qolmaydi.",
    faq: [
      { question: "Yoz mavsumida bot orqali navbat tezroq olinadimi?", answer: "Ha, bot barcha ustalarning shu kungi va ertangi bo'sh soatlarini real vaqtda ko'rsatadi, mijoz eng yaqin bo'sh vaqtni tanlab darhol yoziladi, qo'ng'iroq navbatida kutish shart emas." },
      { question: "Bot orqali profilaktika xizmatiga ham yozilsa bo'ladimi?", answer: "Ha, mijoz bot menyusidan \"profilaktika tozalash\" xizmatini alohida tanlab, o'rnatish xizmatidan ajratilgan holda navbatga yoziladi." },
    ],
  },
  "konditsioner-xizmatlari__business-automation": {
    intro: "CRM avtomatlashtirish — mijozlar bazasi, texnik tarix va mavsumiy eslatmalarni boshqaruvchi tizim. Toshkentdagi konditsioner xizmatlari uchun FRONTIX bahorgi profilaktika mavsumida eski mijozlarga avtomatik eslatma yuboruvchi CRM quradi.",
    bridge: "O'tgan yili konditsioner o'rnatilgan mijozlar ro'yxati saqlanmay, ular raqobatchiga ketib qolishi o'rniga, CRM har bir o'rnatishdan bir yil o'tgach mijozga avtomatik profilaktika eslatmasini yuboradi, shu bilan birga konditsioner modeli va frion quyilgan sana kartochkada saqlanib, usta qayta chaqirilganda hamma narsani qaytadan so'ramaydi.",
    faq: [
      { question: "Profilaktika eslatmasi qachon yuboriladi?", answer: "CRM har bir o'rnatish sanasidan hisoblab, bir yil to'lganda yoki mavsum boshlanganda mijozga avtomatik SMS yoki Telegram xabari yuboradi." },
      { question: "Konditsioner texnik tarixi qanday saqlanadi?", answer: "Har bir chaqiriqda model, quvvat, frion quyilgan sana va bajarilgan ish CRM'dagi mijoz kartochkasiga yoziladi, keyingi safar usta shu tarixni ochib ko'rib boradi." },
    ],
  },
  "konditsioner-xizmatlari__website-development": {
    intro: "Veb-sayt — mijoz xona parametrlari va o'rnatish joyini oldindan ko'rsatib ariza qoldiradigan maydon. Toshkentdagi konditsioner xizmatlari uchun FRONTIX usta obyektga borishdan oldin qo'shimcha asbob kerakligini bilib oladigan sayt yaratadi.",
    bridge: "Usta obyektga borgach xona balandligi yoki tashqi blok joyi noqulay ekanini bilib, qo'shimcha asbob yoki ikkinchi usta kerakligi aniqlanishi o'rniga, sayt ariza formasida qavat, tashqi blok o'rnatiladigan joy turi kabi savollarni oldindan so'raydi, shu ma'lumot asosida usta kerakli asbob bilan tayyor holda boradi.",
    faq: [
      { question: "Saytdagi ariza formasi qanday ma'lumot so'raydi?", answer: "Xonaning maydoni, qavat balandligi, tashqi blok o'rnatiladigan joy turi (balkon, devor) kabi savollar so'raladi, bu ma'lumot ustaga oldindan yetkaziladi." },
      { question: "Saytda konditsioner quvvatini xona hajmiga qarab tanlash mumkinmi?", answer: "Ha, sayt xona maydonini kiritish orqali mos keladigan quvvat oralig'ini tavsiya qiladi, mijoz shunga qarab model tanlab ariza qoldiradi." },
    ],
  },

  "mebel-tamirlash__telegram-bot": {
    intro: "Telegram bot — mijoz mebel ta'mirlash buyurtmasi holatini, jumladan mato yetkazib kelinish muddatini, qo'ng'iroq qilmasdan bot orqali kuzatadigan tizim. Toshkentdagi mebel ta'mirlash ustaxonalari uchun FRONTIX \"qachon tayyor bo'ladi\" degan savolga bot orqali aniq javob beradigan tizim yaratadi.",
    bridge: "Mato yoki furnitura yetkazib kelinishi qancha vaqt olishi noaniq bo'lib, mijoz bir necha marta qo'ng'iroq qilishi o'rniga, bot buyurtma raqami orqali mato hali yetib kelmagani yoki ish boshlanganini ko'rsatadi, mato yetib kelgan zahoti bot mijozga avtomatik xabar yuboradi.",
    faq: [
      { question: "Mato yetkazib kelinishi kechiksa bot xabar beradimi?", answer: "Ha, mato yetkazib beruvchidan kelish sanasi tizimga kiritiladi, sana o'zgarsa bot mijozga yangilangan muddat haqida avtomatik xabar yuboradi." },
      { question: "Bot orqali ish tugagani haqida qanday bilib olaman?", answer: "Usta ishni CRM'da yakunlangan deb belgilagach, bot mijozga mebelni olib ketish mumkinligi haqida darhol xabar yuboradi." },
    ],
  },
  "mebel-tamirlash__business-automation": {
    intro: "CRM avtomatlashtirish — o'lchov, narx va tanlangan mato ma'lumotlarini bitta buyurtma kartasida saqlovchi tizim. Toshkentdagi mebel ta'mirlash xizmatlari uchun FRONTIX usta va ustaxona o'rtasidagi ma'lumot uzilishini yo'qotuvchi CRM quradi.",
    bridge: "Uyga borib olingan o'lchov va narx faqat ustaning xotirasida qolib, ustaxonada boshqa xodim qayta hisoblashga majbur bo'lishi o'rniga, usta o'lchov va tanlangan mato namunasini shu yerda telefondan CRM'ga kiritadi, ustaxonadagi xodim buyurtmani ochganda tayyor ma'lumotni ko'radi va noto'g'ri mato bilan ishni boshlamaydi.",
    faq: [
      { question: "Usta o'lchovni qanday kiritadi va bu qanday yordam beradi?", answer: "Usta mijoz uyida o'lchov va mato tanlovini mobil ilovadan CRM'ga kiritadi, ustaxonadagi xodim bu ma'lumotni darhol ko'rib, ishni to'g'ri matodan boshlaydi." },
      { question: "Bir nechta buyurtma bir vaqtda ustaxonada bo'lsa ular aralashib ketmaydimi?", answer: "Yo'q, har bir buyurtma alohida raqam va bosqich belgisi bilan CRM'da yuritiladi, kim qaysi buyurtma ustida ishlayotgani va qaysi bosqichda ekani umumiy taxtada ko'rinadi." },
    ],
  },
  "mebel-tamirlash__website-development": {
    intro: "Veb-sayt — ustaxona bajargan \"oldin-keyin\" ishlar portfoliosi va onlayn ariza formasi joylashgan maydon. Toshkentdagi mebel ta'mirlash xizmatlari uchun FRONTIX mijozga ishonch beruvchi va narx haqida taxminiy tasavvur beruvchi sayt yaratadi.",
    bridge: "Mijoz narx va muddatni faqat usta uyga kelgandan keyin bilishi o'rniga, sayt mebel turi (divan, kreslo, shkaf) va ta'mirlash turini tanlash orqali taxminiy narx oralig'i va o'xshash ishlarning \"oldin-keyin\" suratlarini ko'rsatadi, shu bilan mijoz ustani chaqirishdan oldin taxminiy byudjetga ega bo'ladi.",
    faq: [
      { question: "Saytdagi 'oldin-keyin' suratlar qanday yordam beradi?", answer: "Mijoz o'ziga o'xshash mebel turi va nosozlik bo'yicha bajarilgan oldingi ishlarni ko'rib, ustaxona sifatiga ishonch hosil qiladi va o'z buyurtmasi qanday natija berishini taxmin qiladi." },
      { question: "Saytdan mato tanlab ariza berish mumkinmi?", answer: "Ha, sayt mavjud mato namunalari katalogini ko'rsatadi, mijoz yoqqan matoni tanlab, mebel turi va manzilini kiritib onlayn ariza qoldiradi." },
    ],
  },

  "elektr-montaj-kompaniyalari__business-automation": {
    intro: "CRM avtomatlashtirish — ob'ektlardagi ishlar progressi va brigadalar joylashuvini real vaqtda kuzatuvchi tizim. Toshkentdagi elektr montaj kompaniyalari uchun FRONTIX bosh pudratchiga Excel fayl o'rniga real vaqtdagi hisobotni ko'rsatadigan CRM quradi.",
    bridge: "Ishlar necha foizi bajarilgani haqida hisobot faqat og'zaki yoki Excel orqali yuborilib, real holat noaniq qolishi o'rniga, CRM har bir ob'ektdagi bajarilgan ishlarni (kabel tortish, shchit o'rnatish, ulash) alohida bosqich sifatida belgilaydi, bosh pudratchi istalgan vaqtda tizimga kirib real foizni ko'radi.",
    faq: [
      { question: "Bosh pudratchi progressni qanday ko'radi?", answer: "Har bir ob'ekt uchun alohida havola beriladi, bosh pudratchi shu havola orqali bajarilgan ishlar foizini va bosqichlarini real vaqtda kuzatadi, alohida hisobot so'rab qo'ng'iroq qilish shart emas." },
      { question: "Bir nechta ob'ekt bir vaqtda yuritilsa CRM ularni ajratib turadimi?", answer: "Ha, har bir ob'ekt alohida karta sifatida ochiladi, unga tegishli brigada, material va bosqich ma'lumotlari faqat shu ob'ektga bog'lanadi." },
    ],
  },
  "elektr-montaj-kompaniyalari__custom-software": {
    intro: "Maxsus dasturiy yechim — material sarfi va brigadalar joylashuvini hisoblovchi individual tizim. Toshkentdagi elektr montaj kompaniyalari uchun FRONTIX smetadagi material miqdori bilan real sarfni solishtiradigan va brigadalarni bir joyda ko'rsatadigan dastur ishlab chiqadi.",
    bridge: "Loyiha oxirida sarflangan kabel va avtomatlar miqdori smetadan farq qilib, kim aybdor ekani aniqlanmasligi o'rniga, maxsus dastur har bir brigadaga berilgan material miqdorini ob'ekt bo'yicha qayd qiladi va smeta bilan solishtirib farqni darhol ko'rsatadi, shu bilan birga barcha brigadalarning qaysi ob'ektda ekani bitta xaritada ko'rinadi.",
    faq: [
      { question: "Material sarfi smeta bilan qanday solishtiriladi?", answer: "Har bir brigadaga berilgan material miqdori tizimga kiritiladi, loyiha yakunlanganda dastur smetadagi rejalashtirilgan miqdor bilan haqiqiy sarfni avtomatik solishtirib farqni ko'rsatadi." },
      { question: "Brigadalar joylashuvini bitta joydan kuzatish mumkinmi?", answer: "Ha, dastur har bir brigadaning qaysi ob'ektda ishlayotganini va qanday asbob-uskuna ulariga biriktirilganini markazlashgan panelda ko'rsatadi, favqulodda holatda bo'sh brigadani tez topish mumkin." },
    ],
  },
  "elektr-montaj-kompaniyalari__website-development": {
    intro: "Veb-sayt — kompaniya bajargan ob'ektlar portfoliosi va texnik hujjatlarga ishonch beruvchi taqdimot maydoni. Toshkentdagi elektr montaj kompaniyalari uchun FRONTIX bosh pudratchilar va tender e'lonlariga ishonchli taassurot qoldiruvchi korporativ sayt yaratadi.",
    bridge: "Bajarilgan ishning texnik hujjatlari qog'ozda yo'qolib, kafolat bo'yicha muammo chiqqanda hujjat topilmasligi o'rniga, sayt har bir bajarilgan ob'ekt uchun elektron portfolio bo'limi yaratadi, unda ispolnitelnaya sxema va dalolatnomalar raqamli saqlanadi va bosh pudratchi tanishishi uchun taqdim etiladi.",
    faq: [
      { question: "Sayt orqali yangi tender yoki bosh pudratchilarga qanday ishonch beriladi?", answer: "Sayt bajarilgan ob'ektlar ro'yxati, quvvat hajmi va mijoz sharhlarini ko'rsatuvchi portfolio bo'limiga ega, bu yangi mijozlarga kompaniya tajribasini isbotlaydi." },
      { question: "Texnik hujjatlarni saytdan qidirib topish mumkinmi?", answer: "Ha, ro'yxatdan o'tgan mijoz kabinetida har bir ob'ektga tegishli ispolnitelnaya sxema va dalolatnomalar raqamli saqlanadi, kafolat davrida ularni qidirib qog'oz orasidan izlash shart emas." },
    ],
  },

  "avtomobil-shina-markazlari__telegram-bot": {
    intro: "Telegram bot — mijoz shina almashtirish uchun mavsum avjida ham qo'ng'iroq navbatida kutmasdan, bot orqali bo'sh vaqtni ko'rib o'zi yoziladigan tizim. Toshkentdagi shinamontaj markazlari uchun FRONTIX kuz-bahor mavsumida navbat izdihomini kamaytiruvchi bot yaratadi.",
    bridge: "Mavsum boshlanganda barcha mijozlar bir vaqtda qo'ng'iroq qilib navbatlar ustma-ust tushib qolishi o'rniga, bot shu kungi va ertangi bo'sh liftlar sonini real vaqtda ko'rsatadi, mijoz mos vaqtni tanlab yoziladi va kutish zalida soatlab navbat kutish shart bo'lmaydi.",
    faq: [
      { question: "Mavsum avjida bot orqali navbat olish tezroq bo'ladimi?", answer: "Ha, bot barcha liftlarning shu kungi va ertangi bo'sh soatlarini real vaqtda ko'rsatadi, mijoz eng yaqin bo'sh vaqtni ko'rib darhol yoziladi, qo'ng'iroq navbatida kutish shart emas." },
      { question: "Bot orqali shina saqlashga topshirish uchun ham yozilsa bo'ladimi?", answer: "Ha, bot menyusida \"shina saqlash\" xizmati alohida ko'rsatilgan, mijoz shu orqali shina olib kelish vaqtini oldindan belgilaydi." },
    ],
  },
  "avtomobil-shina-markazlari__business-automation": {
    intro: "CRM avtomatlashtirish — mijozlarning saqlovdagi shinalari va bajarilgan texnik ishlar tarixini yurituvchi tizim. Toshkentdagi shinamontaj markazlari uchun FRONTIX shinalarni omborda javon-javon qidirish o'rniga, har bir shina qayerda saqlanayotganini darhol ko'rsatadigan CRM quradi.",
    bridge: "Saqlashga topshirilgan shinalar omborning qaysi javonida ekani yozilmay, keyingi mavsumda butun omborni ag'darib qidirishga to'g'ri kelishi o'rniga, CRM har bir shina to'plamiga javon raqamini biriktiradi va mijoz raqami orqali izlanganda darhol topiladi, shu bilan birga har bir balансировка va bosim ko'rsatkichi chiqim hujjatida raqamli saqlanadi.",
    faq: [
      { question: "Shinalarni omborda qidirish qanday tezlashadi?", answer: "Har bir shina to'plami qabul qilinganda unga javon raqami va mijoz ma'lumoti biriktiriladi, keyingi mavsumda mijoz raqamini kiritish orqali shina qayerda ekani darhol ko'rinadi." },
      { question: "Balансировка va bosim ko'rsatkichlari qanday hujjatlashtiriladi?", answer: "Har bir xizmatdan keyin balансировка natijasi va shina bosimi CRM'dagi mijoz kartochkasiga yoziladi, keyinchalik shikoyat kelsa qaysi ishlar bajarilgani tizimdan tasdiqlanadi." },
    ],
  },
  "avtomobil-shina-markazlari__website-development": {
    intro: "Veb-sayt — mijoz shinasining ishlab chiqarilgan yili va protektor holatini tekshirib, almashtirish vaqti haqida eslatma oladigan maydon. Toshkentdagi shinamontaj markazlari uchun FRONTIX xavfsizlik uchun muhim almashtirish muddatini mijozga eslatib turadigan sayt yaratadi.",
    bridge: "Shina protektor chuqurligi va ishlab chiqarilgan yili haqida avtomatik eslatma yo'qligi sababli almashtirish vaqti o'tkazib yuborilishi o'rniga, sayt mijoz avtomobil raqami yoki shina o'lchamini kiritganda oxirgi tekshiruv sanasidan hisoblab, keyingi tekshiruv yoki almashtirish vaqti yaqinlashganda eslatma yuboradi.",
    faq: [
      { question: "Saytda shina holatini qanday tekshirish mumkin?", answer: "Mijoz avvalgi tashrifda kiritilgan ma'lumotlar asosida shaxsiy kabinetiga kirib, shinaning protektor holati va oxirgi tekshirilgan sanasini ko'radi." },
      { question: "Shina almashtirish vaqti yaqinlashganda sayt xabar beradimi?", answer: "Ha, sayt oxirgi tekshiruv sanasi va shina ishlab chiqarilgan yiliga qarab hisoblab, almashtirish tavsiya etiladigan muddat yaqinlashganda mijozga xabar yuboradi." },
    ],
  },

  "bolalar-oyin-markazlari__telegram-bot": {
    intro: "Telegram bot — mijozlar tug'ilgan kun bayrami yoki o'yin xonasi uchun joy va vaqtni to'g'ridan-to'g'ri messenjer orqali band qila oladigan tizim. Toshkentdagi bolalar o'yin markazlari uchun FRONTIX xonalar va animatorlar jadvalini avtomatik ko'rsatadigan hamda ustma-ust tushishning oldini oluvchi bot yaratadi.",
    bridge: "Tug'ilgan kun sanalarini telefon orqali qo'lda yozib borish o'rniga, bot barcha band qilingan xona va animator vaqtlarini real vaqtda ko'rsatadi — shu tufayli ikkita bayram bir vaqtga tasodifan yozilib qolmaydi.",
    faq: [
      { question: "Bot orqali tug'ilgan kun uchun aniq sana va soatni band qilib bo'ladimi?", answer: "Ha, bot band bo'lgan va bo'sh vaqtlarni ko'rsatadi, mijoz mos kelgan sanani tanlab, animator va zal turini birga tasdiqlaydi." },
      { question: "Agar ikki oila bir xil sanaga yozilishga harakat qilsa nima bo'ladi?", answer: "Bot birinchi tasdiqlangan bronni darhol band deb belgilaydi va ikkinchi mijozga shu vaqt band ekanini ko'rsatib, muqobil soatlarni taklif qiladi." },
    ],
  },
  "bolalar-oyin-markazlari__website-development": {
    intro: "Veb-sayt — markaz xizmatlari, narxlar va tug'ilgan kun paketlari haqida to'liq ma'lumot beruvchi onlayn manba. Toshkentdagi bolalar o'yin markazlari uchun FRONTIX barcha paket tafsilotlarini (tort, animator, zal ijarasi, davomiylik) bitta sahifada tushunarli tarzda joylashtiradi.",
    bridge: "Ota-onalar paket narxlarini bilish uchun joyiga qo'ng'iroq qilish yoki borishga majbur bo'lish o'rniga, saytda har bir tug'ilgan kun paketi tarkibi, narxi va rasmlari alohida ko'rsatiladi — bu qaror qabul qilishni tezlashtiradi.",
    faq: [
      { question: "Saytda tug'ilgan kun paketlarini bir-biri bilan solishtirish mumkinmi?", answer: "Ha, sayt har bir paketni (asosiy, standart, VIP) narxi, davomiyligi va xizmatlar ro'yxati bilan yonma-yon jadvalda ko'rsatadi." },
      { question: "Sayt orqali paket tanlab, so'rov qoldirish mumkinmi?", answer: "Ha, har bir paket tagida so'rov shakli joylashtiriladi, mijoz kerakli sanani va aloqa raqamini qoldirib, menejer bilan tezda bog'lanadi." },
    ],
  },
  "bolalar-oyin-markazlari__business-automation": {
    intro: "CRM avtomatlashtirish — mijozlar kirish vaqti va to'lovlarni avtomatik hisoblaydigan tizim. Toshkentdagi bolalar o'yin markazlari uchun FRONTIX har bir bolaning kirish-chiqish vaqtini qayd etib, soatlab to'lovni xatosiz hisoblab beradigan yechim yaratadi.",
    bridge: "Xodimlar soatlab narxni qo'lda hisoblab, xato qilish o'rniga, tizim bola kirgan va chiqqan vaqtni avtomatik qayd etadi va shu asosda to'lov summasini aniq hisoblab chiqaradi.",
    faq: [
      { question: "Tizim bir nechta bola uchun narxni birga hisoblay oladimi?", answer: "Ha, CRM har bir bolaning alohida kirish vaqtini kuzatadi va oila bir nechta farzand olib kelganda umumiy to'lovni avtomatik jamlab beradi." },
      { question: "Xodim smena oxirida kunlik tushumni qo'lda hisoblashi kerakmi?", answer: "Yo'q, tizim kun davomidagi barcha kirishlar asosida umumiy tushum hisobotini avtomatik shakllantiradi." },
    ],
  },
  "bouling-va-bilyard-klublari__telegram-bot": {
    intro: "Telegram bot — bouling yo'lagi yoki bilyard stolini oldindan band qilish imkonini beruvchi tizim. Toshkentdagi bouling va bilyard klublari uchun FRONTIX mijozlar bot orqali bo'sh yo'lak yoki stolni ko'rib, soatini tanlab band qila oladigan yechim yaratadi.",
    bridge: "Mijozlar klubga kelib yo'lak bo'shligini tekshirish o'rniga, bot barcha yo'lak va stollarning joriy holatini ko'rsatadi hamda kerakli soatni bir necha bosishda band qilish imkonini beradi.",
    faq: [
      { question: "Bot orqali aynan qaysi yo'lak bo'shligini ko'rish mumkinmi?", answer: "Ha, bot har bir yo'lak yoki stolning band va bo'sh soatlarini alohida ko'rsatadi, mijoz o'ziga qulay vaqtni tanlaydi." },
      { question: "Bron qilingandan keyin uni bekor qilish yoki o'zgartirish mumkinmi?", answer: "Ha, mijoz bot orqali o'z bronini istalgan vaqt bekor qilishi yoki boshqa soatga ko'chirishi mumkin, bo'shagan vaqt darhol boshqalarga ochiladi." },
    ],
  },
  "bouling-va-bilyard-klublari__website-development": {
    intro: "Veb-sayt — korporativ mijozlar va katta guruhlar uchun bir nechta yo'lak yoki stolni birgalikda band qilish imkonini beruvchi onlayn platforma. Toshkentdagi bouling va bilyard klublari uchun FRONTIX guruh bandlari uchun alohida so'rov shakli va narxlash tizimini saytga joylashtiradi.",
    bridge: "Korporativ tadbir uchun bir nechta yo'lakni telefon orqali kelishish o'rniga, saytdagi maxsus forma orqali kompaniya kerakli sonini, sanani va vaqtni bir martada yuboradi, menejer tasdig'i tezlashadi.",
    faq: [
      { question: "Saytda korporativ tadbir uchun narxlar alohida ko'rsatilganmi?", answer: "Ha, sayt guruh soni va band qilinadigan yo'lak/stollar soniga qarab taxminiy narxni avtomatik hisoblab ko'rsatadi." },
      { question: "Katta guruh uchun bron so'rovi qanday tasdiqlanadi?", answer: "So'rov yuborilgach, menejerga bildirishnoma keladi va u band qilish tafsilotlarini tasdiqlash uchun mijoz bilan bog'lanadi." },
    ],
  },
  "bouling-va-bilyard-klublari__business-automation": {
    intro: "CRM avtomatlashtirish — doimiy mijozlarning o'yin tarixini va bonus ballarini avtomatik kuzatib boruvchi tizim. Toshkentdagi bouling va bilyard klublari uchun FRONTIX har bir mijozning o'ynagan soatlarini qayd etib, chegirma va bonuslarni avtomatik hisoblaydigan yechim taqdim etadi.",
    bridge: "Xodimlar mijozning necha soat o'ynaganini eslab yurish o'rniga, tizim har bir tashrifni avtomatik qayd etadi va belgilangan chegaraga yetganda mijozga bonus yoki chegirma taqdim etilishini o'zi belgilaydi.",
    faq: [
      { question: "Bonus tizimi qanday ishlaydi, xodim buni qo'lda kiritishi kerakmi?", answer: "Yo'q, tizim har bir mijozning umumiy o'yin soatini avtomatik jamlaydi va belgilangan chegaraga yetganda bonusni o'zi faollashtiradi." },
      { question: "Mijozning oldingi tashriflari tarixini ko'rish mumkinmi?", answer: "Ha, CRM har bir mijoz kartasida barcha oldingi tashriflar, o'ynagan soatlar va ishlatilgan bonuslarni saqlab boradi." },
    ],
  },
  "yoga-studiyalari__telegram-bot": {
    intro: "Telegram bot — yoga darslariga joy band qilish va bekor qilishni avtomatlashtiruvchi tizim. Toshkentdagi yoga studiyalari uchun FRONTIX mijozlar bot orqali bo'sh joyli darsni ko'rib, bir necha bosishda yozilishi mumkin bo'lgan yechim yaratadi.",
    bridge: "Administrator bilan yozishib joy so'rash o'rniga, bot har bir guruh darsidagi qolgan joylar sonini real vaqtda ko'rsatadi va mijoz o'zi yoqtirgan darsga to'g'ridan-to'g'ri yoziladi.",
    faq: [
      { question: "Bot darsda nechta bo'sh joy qolganini ko'rsatadimi?", answer: "Ha, har bir dars kartasida qolgan joylar soni ko'rsatiladi, joy tugagach dars 'to'ldi' deb belgilanadi." },
      { question: "Darsni oxirgi daqiqada bekor qilish mumkinmi?", answer: "Ha, mijoz bot orqali yozilgan darsini bekor qilishi mumkin, bo'shagan joy darhol navbatdagi mijozga ochiladi." },
    ],
  },
  "yoga-studiyalari__website-development": {
    intro: "Veb-sayt — instruktorlar, dars darajalari (boshlang'ich, o'rta, ilg'or) va jadval haqida to'liq ma'lumot beruvchi onlayn manba. Toshkentdagi yoga studiyalari uchun FRONTIX har bir instruktor va uning dars formatini alohida sahifada tanishtiradigan sayt yaratadi.",
    bridge: "Yangi mijoz noto'g'ri darajadagi darsga adashib yozilishi o'rniga, sayt har bir dars qaysi daraja uchun mo'ljallanganini va qaysi instruktor olib borishini aniq ko'rsatadi, shu orqali to'g'ri tanlov qilishga yordam beradi.",
    faq: [
      { question: "Saytda qaysi instruktor qaysi darajadagi darsni o'tishi ko'rsatilganmi?", answer: "Ha, har bir instruktor profilida uning mutaxassisligi va olib boradigan dars darajasi (boshlang'ich, ilg'or va h.k.) alohida yozilgan." },
      { question: "Yangi mijoz o'ziga mos darsni qanday tanlaydi?", answer: "Sayt darslarni darajaga qarab filtrlash imkonini beradi, mijoz o'z tajribasiga mos darsni tanlab, to'g'ridan-to'g'ri ro'yxatdan o'tish shakliga o'tadi." },
    ],
  },
  "yoga-studiyalari__business-automation": {
    intro: "CRM avtomatlashtirish — abonement turlari va qolgan darslar sonini avtomatik kuzatib boruvchi tizim. Toshkentdagi yoga studiyalari uchun FRONTIX har bir mijozning abonement holatini (oylik, 8 ta dars, cheksiz) avtomatik hisoblaydigan yechim yaratadi.",
    bridge: "Xodimlar daftarga qolgan darslar sonini qo'lda yozib borish o'rniga, tizim har dars ishtirokidan so'ng mijozning abonementidan avtomatik ayiradi va tugash muddati yaqinlashganda eslatma yuboradi.",
    faq: [
      { question: "Mijozning abonementida nechta dars qolganini qanday bilish mumkin?", answer: "CRM har bir mijoz kartasida qolgan darslar sonini avtomatik yangilab boradi, xodim buni istalgan vaqt bir zumda ko'rishi mumkin." },
      { question: "Abonement muddati tugayotganda mijozga xabar boradimi?", answer: "Ha, tizim abonement tugashiga bir necha kun qolganda mijozga avtomatik eslatma yuboradi, bu yangilashni unutib qo'yishning oldini oladi." },
    ],
  },
  "bolalar-yozgi-lagerlari__telegram-bot": {
    intro: "Telegram bot — ota-onalarga farzandi lagerdagi kunlik dastur va fotosuratlarni yetkazib beruvchi tizim. Toshkentdagi bolalar yozgi lagerlari uchun FRONTIX har bir smena davomida ota-onalar bot orqali yangilanishlarni tartibli oladigan yechim yaratadi.",
    bridge: "Fotosuratlar va dastur tarqoq WhatsApp guruhlarida yo'qolib qolish o'rniga, bot har kuni belgilangan vaqtda smena dasturi va suratlarni ota-onaning shaxsiy chatiga avtomatik yuboradi.",
    faq: [
      { question: "Har bir ota-ona faqat o'z farzandining suratlarini ko'radimi?", answer: "Ha, bot ota-onani farzandi ro'yxatdan o'tgan guruhga bog'laydi va faqat shu guruhga tegishli kunlik suratlar hamda dasturni yuboradi." },
      { question: "Kunlik dastur qaysi vaqtda yuboriladi?", answer: "Bot har kuni belgilangan soatda (masalan kechqurun) o'sha kunning dasturi va suratlarini avtomatik jo'natadi, ota-onalar buni qidirib yurishga hojat qolmaydi." },
    ],
  },
  "bolalar-yozgi-lagerlari__website-development": {
    intro: "Veb-sayt — yozgi smenalar, bo'sh o'rinlar soni va ro'yxatdan o'tish jarayonini ko'rsatuvchi onlayn platforma. Toshkentdagi bolalar yozgi lagerlari uchun FRONTIX har bir smenadagi bo'sh joylar sonini real vaqtda ko'rsatadigan sayt yaratadi.",
    bridge: "Ota-onalar navbatga yozilib, keyin joy yo'qligini bilib qolish o'rniga, saytda har bir smenadagi bo'sh o'rinlar soni aniq ko'rsatiladi va joy mavjud bo'lgandagina onlayn ro'yxatdan o'tish formasi ochiq turadi.",
    faq: [
      { question: "Saytda qaysi smenada nechta bo'sh joy qolgani ko'rinadimi?", answer: "Ha, har bir smena kartasida joriy bo'sh o'rinlar soni ko'rsatiladi va joy tugagach smena avtomatik 'to'ldi' deb belgilanadi." },
      { question: "Ro'yxatdan o'tish uchun saytda to'lov qilish mumkinmi?", answer: "Ha, ota-ona kerakli smenani tanlab, forma orqali ma'lumotlarni to'ldiradi va oldindan to'lovni onlayn amalga oshirishi mumkin." },
    ],
  },
  "bolalar-yozgi-lagerlari__business-automation": {
    intro: "CRM avtomatlashtirish — yozgi smenalarga ko'plab ariza bir vaqtda tushganda ularni tartibli qayta ishlaydigan tizim. Toshkentdagi bolalar yozgi lagerlari uchun FRONTIX barcha arizalarni avtomatik ro'yxatga olib, smenalar bo'yicha taqsimlaydigan yechim yaratadi.",
    bridge: "Qisqa muddatda tushgan yuzlab arizani qo'lda saralash o'rniga, tizim har bir arizani avtomatik qabul qilib, tanlangan smena, yosh guruhi va to'lov holatiga qarab tartiblab beradi — shu orqali adashish yoki takroriy yozilish yo'qoladi.",
    faq: [
      { question: "Bir vaqtda ko'p ariza tushsa tizim ularni qanday tartiblaydi?", answer: "Har bir ariza avtomatik ravishda tanlangan smena va yosh guruhi bo'yicha alohida ro'yxatga tushadi, xodim ularni qo'lda saralashiga hojat qolmaydi." },
      { question: "Ariza takroran yuborilib qolsa tizim buni aniqlay oladimi?", answer: "Ha, tizim bir xil bola ma'lumotlari bilan qayta yuborilgan arizani aniqlab, xodimga ogohlantirish beradi." },
    ],
  },
  "konsert-va-tadbir-zallari__telegram-bot": {
    intro: "Telegram bot — zal ijarasiga so'rovlarni bitta joyda yig'ib beruvchi tizim. Toshkentdagi konsert va tadbir zallari uchun FRONTIX qo'ng'iroq, Instagram va tanishlar orqali tarqoq kelayotgan so'rovlarni bot orqali tartibli qabul qiladigan yechim yaratadi.",
    bridge: "Ijaraga so'rovlar turli manbalardan tarqoq kelib, ularni birlashtirish qiyin bo'lish o'rniga, bot mijozdan tadbir sanasi, turi va mehmonlar sonini so'rab, barcha so'rovlarni bitta tartiblangan ro'yxatga tushiradi.",
    faq: [
      { question: "Bot orqali kelgan so'rovlar qanday tartiblanadi?", answer: "Har bir so'rov sanasi, tadbir turi va mehmonlar soni bilan birga menejer paneliga tushadi, bu barcha so'rovlarni bitta joydan kuzatish imkonini beradi." },
      { question: "Mijoz bot orqali zal bandligini oldindan bila oladimi?", answer: "Ha, bot so'ralgan sanada zal band yoki bo'shligini darhol ko'rsatadi, band bo'lsa muqobil sanalarni taklif qiladi." },
    ],
  },
  "konsert-va-tadbir-zallari__website-development": {
    intro: "Veb-sayt — tadbirlar uchun chiptalarni onlayn sotib olish imkonini beruvchi platforma. Toshkentdagi konsert va tadbir zallari uchun FRONTIX tomoshabinlar oldindan onlayn chipta xarid qila oladigan sayt yaratadi.",
    bridge: "Chipta faqat offline kassada sotilishi o'rniga, saytda har bir tadbir uchun joylar sxemasi va narxlar ko'rsatiladi, tomoshabin kerakli o'rindiqni tanlab, onlayn to'lov orqali chiptani darhol qo'lga kiritadi.",
    faq: [
      { question: "Saytda o'rindiq tanlab chipta sotib olish mumkinmi?", answer: "Ha, zal sxemasi asosida bo'sh o'rindiqlar ko'rsatiladi, tomoshabin kerakli joyni tanlab, onlayn to'lov orqali chiptani rasmiylashtiradi." },
      { question: "Chipta sotib olgach uni qanday tasdiqlash mumkin?", answer: "Xariddan so'ng tomoshabinga elektron chipta (QR-kod bilan) yuboriladi, u tadbir kirish eshigida skanerlash orqali tasdiqlanadi." },
    ],
  },
  "konsert-va-tadbir-zallari__business-automation": {
    intro: "CRM avtomatlashtirish — zal bandligini yagona kalendarda avtomatik boshqaruvchi tizim. Toshkentdagi konsert va tadbir zallari uchun FRONTIX barcha tadbirlar sanasini bitta tizimda kuzatib, to'qnashuvlarni oldini oladigan yechim yaratadi.",
    bridge: "Ikkita tadbirning bir kunga tasodifan yozilib qolishi o'rniga, tizim har bir yangi bron kiritilganda mavjud sanalar bilan avtomatik solishtiradi va to'qnashuv bo'lsa xodimni darhol ogohlantiradi.",
    faq: [
      { question: "Tizim ikki tadbirning bir kunga to'qnashishini qanday oldini oladi?", answer: "Yangi bron kiritilganda tizim shu sanadagi mavjud bandliklarni avtomatik tekshiradi va to'qnashuv aniqlansa xodimga darhol ogohlantirish chiqaradi." },
      { question: "Zal bandligi kalendarini barcha xodimlar bir vaqtda ko'ra oladimi?", answer: "Ha, kalendar bulutli tizimda saqlanadi, barcha vakolatli xodimlar uni real vaqtda ko'rib, yangilay oladi." },
    ],
  },
  "coworking-markazlari__telegram-bot": {
    intro: "Telegram bot — ish stoli yoki xonaning bandligini real vaqtda ko'rsatib, band qilish imkonini beruvchi tizim. Toshkentdagi coworking markazlari uchun FRONTIX mijozlar bot orqali bo'sh stol yoki xonani darhol ko'rib, band qila oladigan yechim yaratadi.",
    bridge: "Ikki mijoz bir joyga tasodifan yozilib qolishi o'rniga, bot har bir stol va xonaning joriy holatini real vaqtda yangilab boradi, band qilingan joy darhol boshqalarga 'band' deb ko'rsatiladi.",
    faq: [
      { question: "Bot orqali qaysi stol yoki xona bo'shligini aniq ko'rish mumkinmi?", answer: "Ha, bot markazdagi har bir ish joyi va xonaning holatini alohida ko'rsatadi, mijoz bo'sh joyni tanlab darhol band qiladi." },
      { question: "Bron qilingan joyni kutilmaganda bekor qilish mumkinmi?", answer: "Ha, mijoz bot orqali o'z bronini bekor qilishi mumkin, bo'shagan joy shu zahoti boshqa foydalanuvchilarga ochiladi." },
    ],
  },
  "coworking-markazlari__website-development": {
    intro: "Veb-sayt — coworking markazining bo'sh joylari va a'zolik shartlarini ko'rsatuvchi onlayn platforma. Toshkentdagi coworking markazlari uchun FRONTIX mijozlar qo'ng'iroq qilmasdan saytda bo'sh joy va narxlarni ko'rib, onlayn ariza qoldira oladigan yechim yaratadi.",
    bridge: "Bo'sh joy borligini bilish uchun qo'ng'iroq qilish yoki markazga borish o'rniga, saytda joriy bo'sh stollar va xonalar soni ko'rsatiladi, mijoz to'g'ridan-to'g'ri saytdan a'zolik uchun ariza yuboradi.",
    faq: [
      { question: "Saytda a'zolik turlari (kunlik, oylik, yillik) narxlari bilan ko'rsatilganmi?", answer: "Ha, sayt har bir a'zolik turini narxi va imkoniyatlari bilan alohida taqqoslash jadvalida ko'rsatadi." },
      { question: "Mijoz saytdan to'g'ridan-to'g'ri a'zolikka yozilishi mumkinmi?", answer: "Ha, mijoz kerakli a'zolik turini tanlab, forma orqali ma'lumotlarini qoldiradi, menejer tasdiqlash uchun tezda bog'lanadi." },
    ],
  },
  "coworking-markazlari__business-automation": {
    intro: "CRM avtomatlashtirish — a'zolik turlari va ulardan foydalanishni avtomatik kuzatib boruvchi tizim. Toshkentdagi coworking markazlari uchun FRONTIX har bir a'zoning tarif turi, muddati va foydalanish tarixini avtomatik hisoblaydigan yechim yaratadi.",
    bridge: "A'zolik muddati va foydalanishni jadvalda qo'lda kuzatish o'rniga, tizim har bir a'zoning tarifi tugash sanasini avtomatik hisoblab, muddat yaqinlashganda xodim va mijozga eslatma yuboradi.",
    faq: [
      { question: "A'zolik muddati tugayotganda mijozga avtomatik xabar boradimi?", answer: "Ha, tizim muddat tugashiga bir necha kun qolganda mijozga eslatma yuboradi, bu yangilashni o'z vaqtida amalga oshirishga yordam beradi." },
      { question: "Xodim har bir a'zoning qaysi tarifda ekanini qanday tez bilib oladi?", answer: "CRM har bir a'zo kartasida joriy tarif turi, boshlanish va tugash sanasini avtomatik ko'rsatib turadi." },
    ],
  },
  "kompyuter-oyinlari-klublari__telegram-bot": {
    intro: "Telegram bot — turnirlarga ro'yxatdan o'tishni tartibli qabul qiluvchi tizim. Toshkentdagi kompyuter o'yinlari klublari uchun FRONTIX ishtirokchilar ro'yxatini tarqoq Telegram guruhlari o'rniga bot orqali avtomatik yig'adigan yechim yaratadi.",
    bridge: "Turnir ishtirokchilari ro'yxati turli guruhlarda tartibsiz to'planishi o'rniga, bot har bir ishtirokchini jamoasi va o'yin turi bo'yicha avtomatik ro'yxatga oladi va to'liq ishtirokchilar ro'yxatini bir zumda shakllantiradi.",
    faq: [
      { question: "Bot orqali turnirga necha kishilik jamoa bilan yozilish mumkinmi?", answer: "Ha, bot jamoa nomini, a'zolarini va o'yin turini so'rab, to'liq jamoani bitta so'rov sifatida ro'yxatga oladi." },
      { question: "Turnir joylari to'lganda bot buni ko'rsatadimi?", answer: "Ha, belgilangan ishtirokchilar soniga yetgach, bot avtomatik ravishda ro'yxatni yopadi va yangi murojaatlarga kutish ro'yxatini taklif qiladi." },
    ],
  },
  "kompyuter-oyinlari-klublari__website-development": {
    intro: "Veb-sayt — kompyuter va konsollarning bandligini ko'rsatuvchi onlayn platforma. Toshkentdagi kompyuter o'yinlari klublari uchun FRONTIX mijozlar saytda bo'sh kompyuterni ko'rib, oldindan bron qila oladigan yechim yaratadi.",
    bridge: "Mijozlar kompyuter bo'shligini bilish uchun klubga kelishga majbur bo'lish o'rniga, saytda har bir kompyuter yoki konsolning joriy holati ko'rsatiladi, kerakli soat oldindan onlayn band qilinadi.",
    faq: [
      { question: "Saytda qaysi kompyuter bo'sh ekanini real vaqtda ko'rish mumkinmi?", answer: "Ha, sayt klubdagi har bir kompyuter yoki konsolning band-bo'sh holatini real vaqtda ko'rsatadi." },
      { question: "Sayt orqali bron qilingan vaqtga kechikib kelsa joy saqlanadimi?", answer: "Sayt bronni belgilangan vaqt (masalan 15 daqiqa) davomida saqlab turadi, undan keyin joy avtomatik bo'shatiladi." },
    ],
  },
  "kompyuter-oyinlari-klublari__business-automation": {
    intro: "CRM avtomatlashtirish — mijozlarning o'yin vaqtini va to'lovlarini avtomatik hisoblaydigan tizim. Toshkentdagi kompyuter o'yinlari klublari uchun FRONTIX har bir kompyuterdagi seans vaqtini kuzatib, soatlab to'lovni xatosiz chiqaradigan yechim yaratadi.",
    bridge: "Xodimlar soatlab narxni qo'lda hisoblab xato qilishi o'rniga, tizim seans boshlanishi va tugashini avtomatik qayd etadi hamda shu asosda to'lov summasini aniq hisoblab beradi.",
    faq: [
      { question: "Bir necha kompyuterda o'ynagan guruh uchun umumiy hisob avtomatik chiqariladimi?", answer: "Ha, tizim guruhdagi har bir kompyuter seansini alohida hisoblab, umumiy to'lovni bitta chekka jamlab beradi." },
      { question: "Kunlik yoki oylik tushum hisobotini olish mumkinmi?", answer: "Ha, CRM barcha seanslar asosida kunlik va oylik tushum hisobotlarini avtomatik shakllantiradi." },
    ],
  },
  "sayohat-gid-xizmatlari__telegram-bot": {
    intro: "Telegram bot — sayohat gidining kunlik bandligini avtomatik boshqaruvchi tizim. Toshkentdagi sayohat gid xizmatlari uchun FRONTIX gidning bo'sh va band vaqtlarini bot orqali ko'rsatib, turistlarni to'g'ri sanaga yo'naltiradigan yechim yaratadi.",
    bridge: "Gidning bandligi shaxsiy yozishmalarda yo'qolib, ikki tur bir vaqtga tushib qolishi o'rniga, bot har bir turni band qilishdan oldin gidning shu kundagi jadvalini avtomatik tekshiradi va faqat bo'sh vaqtlarni taklif qiladi.",
    faq: [
      { question: "Bot orqali gidning qaysi kunlari bandligini oldindan bilish mumkinmi?", answer: "Ha, bot gidning kalendarini saqlaydi va turist so'ragan sanada gid bo'sh yoki bandligini darhol ko'rsatadi." },
      { question: "Bitta gid bir nechta til bo'yicha xizmat ko'rsatsa, bot buni hisobga oladimi?", answer: "Ha, bot gidning ko'rsatadigan tillari va shu tildagi bandligini alohida kuzatib, turistni mos gid va vaqtga yo'naltiradi." },
    ],
  },
  "sayohat-gid-xizmatlari__website-development": {
    intro: "Veb-sayt — xorijiy turistlar uchun tur haqini onlayn to'lash imkonini beruvchi platforma. Toshkentdagi sayohat gid xizmatlari uchun FRONTIX turistlar naqd pulsiz, xalqaro kartalar orqali oldindan to'lov qila oladigan ko'p tilli sayt yaratadi.",
    bridge: "Xorijiy turist tur haqini naqd to'lashga majbur bo'lish o'rniga, saytda xalqaro to'lov tizimlari orqali oldindan onlayn to'lov qilish imkoni beriladi, bu esa xorijiy mehmonlar uchun qulaylikni oshiradi.",
    faq: [
      { question: "Saytda xorijiy valyutada to'lov qilish mumkinmi?", answer: "Ha, sayt xalqaro to'lov tizimlari orqali dollar yoki boshqa asosiy valyutalarda onlayn to'lovni qabul qiladi." },
      { question: "To'lov qilingach turist tasdiqnoma oladimi?", answer: "Ha, to'lov amalga oshgach turistning elektron pochtasiga tur sanasi, gid ma'lumotlari va tasdiqnoma avtomatik yuboriladi." },
    ],
  },
  "sayohat-gid-xizmatlari__business-automation": {
    intro: "CRM avtomatlashtirish — turistlarning til va marshrut bo'yicha so'rovlarini avtomatik yig'ib, mos gidga taqsimlaydigan tizim. Toshkentdagi sayohat gid xizmatlari uchun FRONTIX har bir so'rovni til, marshrut afzalligi va sana bo'yicha tartiblab, tegishli gidga yo'naltiradigan yechim yaratadi.",
    bridge: "Turistning qaysi tilda gid xohlashi va marshrut istaklari og'zaki yoki tarqoq yozishmalarda yo'qolib qolishi o'rniga, tizim har bir so'rovni til va marshrut belgilari bilan qayd etadi hamda avtomatik ravishda mos gidga biriktiradi.",
    faq: [
      { question: "Tizim turistni qanday qilib mos tildagi gidga biriktiradi?", answer: "Turist so'rovda kerakli tilni belgilaydi, tizim shu tilda xizmat ko'rsatuvchi va shu kunga bo'sh gidlar ro'yxatidan avtomatik moslashtiradi." },
      { question: "Marshrut bo'yicha alohida istaklarni CRM saqlab qoladimi?", answer: "Ha, har bir turistning marshrut afzalliklari va maxsus istaklari uning kartasida saqlanadi, gid turdan oldin bu ma'lumotga kira oladi." },
    ],
  },

  "import-eksport-kompaniyalari__business-automation": {
    intro: "CRM avtomatlashtirish — bu kompaniyaning kontrakt, hujjat va bitimlarni bitta tizimda boshqarishga imkon beruvchi yechim. Toshkentdagi import-eksport kompaniyalari uchun FRONTIX barcha bitimlar, hujjatlar va to'lov muddatlarini bitta joyda kuzatib boradigan CRM tizimini yaratadi.",
    bridge: "Kontrakt va invoyslar turli Excel fayllarda tarqalib yotish o'rniga, CRM tizimi har bir bitim uchun hujjatlarni, to'lov muddatlarini va valyuta shartlarini bitta kartochkada saqlaydi, muddat yaqinlashganda avtomatik eslatma yuboradi.",
    faq: [
      { question: "Bojxona hujjatlarini CRM ichida saqlash mumkinmi?", answer: "Ha, har bir bitim kartochkasiga kontrakt, invoys, sertifikat va deklaratsiya fayllarini biriktirish mumkin, ular alohida qidiruv orqali osongina topiladi." },
      { question: "CRM valyuta kursini kuzatadimi?", answer: "Tizimga bitim summasi va valyuta turini kiritish mumkin, kurs o'zgarishi bo'yicha eslatmalar sozlanadi, bu to'lov muddatlarini nazorat qilishni osonlashtiradi." },
    ],
  },
  "import-eksport-kompaniyalari__custom-software": {
    intro: "Maxsus dasturiy yechim — bu kompaniyaning o'ziga xos jarayonlariga moslab yaratiladigan individual dastur. Toshkentdagi import-eksport kompaniyalari uchun FRONTIX bojxona deklaratsiyasi, sertifikatlash va yuk kuzatuvi jarayonlarini birlashtiruvchi maxsus tizim ishlab chiqadi.",
    bridge: "Yukning qaysi bosqichda ekanligini (ishlab chiqarish, yo'lda, bojxonada, omborda) qo'lda kuzatish o'rniga, maxsus dastur har bir yuk uchun bosqichlarni belgilaydi va mijozga real vaqtda status ko'rsatadi, bu qo'ng'iroqlar sonini kamaytiradi.",
    faq: [
      { question: "Maxsus dastur bojxona tizimlari bilan integratsiya qila oladimi?", answer: "Ha, dastur bojxona deklaratsiyasi raqamlari va statuslarini qo'lda yoki API orqali kiritish imkonini beradi, shu asosda yukning bosqichini avtomatik yangilaydi." },
      { question: "Narx hisoblash funksiyasi ham qo'shiladimi?", answer: "Ha, yetkazib berish muddati, valyuta kursi va qo'shimcha xarajatlarni hisobga olgan holda narx taklifini avtomatik hisoblaydigan modul qo'shish mumkin." },
    ],
  },
  "import-eksport-kompaniyalari__website-development": {
    intro: "Veb-sayt — bu kompaniyaning yetkazib beradigan mahsulotlari, yo'nalishlari va xizmatlari haqida hamkorlarga ishonch beradigan rasmiy manba. Toshkentdagi import-eksport kompaniyalari uchun FRONTIX xalqaro hamkorlar va mahalliy xaridorlar uchun ko'p tilli, professional sayt yaratadi.",
    bridge: "Yangi hamkorlar kompaniya haqida faqat og'zaki ma'lumotga tayanishi o'rniga, sayt orqali mahsulot katalogi, yetkazib berish yo'nalishlari va sertifikatlar ko'rsatiladi, bu ishonchni oshiradi va birlamchi so'rovlarni onlayn qabul qilish imkonini beradi.",
    faq: [
      { question: "Sayt ingliz yoki rus tilida ham bo'lishi kerakmi?", answer: "Ha, xalqaro hamkorlar bilan ishlaydigan kompaniyalar uchun ko'p tilli sayt tavsiya etiladi, FRONTIX o'zbek, rus va ingliz tillarida versiya tayyorlaydi." },
      { question: "Saytda mahsulot narxlarini ko'rsatish shart emasmi?", answer: "Yo'q, ko'pincha narxlar bitimga qarab o'zgargani uchun saytga so'rov formasi qo'yiladi, mijoz mahsulot va hajmni ko'rsatib so'rov qoldiradi." },
    ],
  },
  "ombor-ijarasi-xizmatlari__business-automation": {
    intro: "CRM avtomatlashtirish — bu ijara shartnomalari, mijozlar va to'lovlarni bitta tizimda kuzatishga imkon beruvchi yechim. Toshkentdagi ombor ijarasi xizmatlari uchun FRONTIX har bir ombor maydoni, ijaraga oluvchi va to'lov holatini aniq ko'rsatadigan CRM tizimini yaratadi.",
    bridge: "Bo'sh va band maydonlar haqida ma'lumot menejer xotirasida qolib ketish o'rniga, CRM tizimida har bir ombor bo'limi statusi (bo'sh, band, zaxirada) real vaqtda ko'rinadi, bu yangi mijozga tezkor javob berish imkonini beradi.",
    faq: [
      { question: "CRM to'lov kechikishlarini kuzatadimi?", answer: "Ha, har bir shartnoma uchun to'lov muddati kiritiladi, muddat yaqinlashganda yoki o'tib ketganda tizim menejerga avtomatik eslatma yuboradi." },
      { question: "Bir nechta ombor filiali bo'lsa ham ishlaydimi?", answer: "Ha, tizim har bir filial va undagi bo'limlarni alohida kuzatish imkonini beradi, umumiy bandlik hisobotini bir joydan ko'rish mumkin." },
    ],
  },
  "ombor-ijarasi-xizmatlari__custom-software": {
    intro: "Maxsus dasturiy yechim — bu ombor maydoni va tovar aylanmasini boshqarish uchun individual ishlab chiqiladigan dastur. Toshkentdagi ombor ijarasi xizmatlari uchun FRONTIX maydon bandligi va mijozlarning ombordagi tovar hisobini yurituvchi maxsus tizim yaratadi.",
    bridge: "Mijozning o'zi ombordagi tovar hajmini bilmay qolishi o'rniga, maxsus dastur har bir mijoz uchun alohida hisob ochadi, tovar kirim-chiqimini qayd qiladi va mijoz shaxsiy kabinet orqali qoldiqni istalgan vaqtda ko'ra oladi.",
    faq: [
      { question: "Mijozlar uchun alohida shaxsiy kabinet yaratish mumkinmi?", answer: "Ha, har bir ijaraga oluvchi o'z login orqali kirib, o'z tovarlari qoldig'i va band maydon hajmini ko'ra oladi." },
      { question: "Ombordagi joy sxemasini vizual ko'rsatish mumkinmi?", answer: "Ha, dastur ombor planini bo'limlarga bo'lib, har birining bandlik holatini rangli sxema ko'rinishida ko'rsatishi mumkin." },
    ],
  },
  "ombor-ijarasi-xizmatlari__website-development": {
    intro: "Veb-sayt — bu ombor kompaniyasining mavjud maydonlari, joylashuvi va narxlari haqida ma'lumot beradigan onlayn vitrina. Toshkentdagi ombor ijarasi xizmatlari uchun FRONTIX bo'sh maydonlar va shartlarni ko'rsatadigan, so'rov qoldirish formasi bilan jihozlangan sayt yaratadi.",
    bridge: "Yangi mijoz ombor haqida faqat qo'ng'iroq qilib bilib olishi o'rniga, sayt orqali maydon hajmi, joylashuv xaritasi va narxlar ko'rsatiladi, mijoz kerakli hajmni tanlab onlayn so'rov qoldira oladi.",
    faq: [
      { question: "Saytda ombor joylashuvini xaritada ko'rsatish mumkinmi?", answer: "Ha, sayt harakat qulayligi uchun ombor manzilini interaktiv xarita orqali ko'rsatadi, bu joylashuv qulayligini mijozga darhol tushuntiradi." },
      { question: "Bo'sh maydonlar sonini saytda avtomatik yangilash mumkinmi?", answer: "Ha, sayt CRM tizimi bilan bog'lanib, bo'sh maydon hajmi haqida ma'lumotni avtomatik yangilab turishi mumkin." },
    ],
  },
  "avtomobil-ijarasi__website-development": {
    intro: "Veb-sayt — bu ijaraga beriladigan mashinalar ro'yxati, narxlari va bandligi haqida ma'lumot beradigan onlayn vitrina. Toshkentdagi avtomobil ijarasi xizmatlari uchun FRONTIX mashinalar katalogi va onlayn band qilish formasi bilan jihozlangan sayt yaratadi.",
    bridge: "Mijoz mashina bandligini bilish uchun qo'ng'iroq qilib, operator band bo'lganda javob kuta olmay ketib qolishi o'rniga, sayt har bir mashinaning bo'sh kunlarini kalendar orqali ko'rsatadi va mijoz onlayn band qilish so'rovini istalgan vaqt yuboradi.",
    faq: [
      { question: "Saytda har bir mashinaning bandlik kalendari ko'rinadimi?", answer: "Ha, har bir mashina kartochkasida band va bo'sh kunlar kalendar shaklida ko'rsatiladi, mijoz mos sanani tanlab so'rov qoldiradi." },
      { question: "Narxlar mashina turiga qarab saytda alohida ko'rsatiladimi?", answer: "Ha, har bir mashina uchun kunlik va uzoq muddatli ijaraning narxi alohida ko'rsatiladi, mijoz taqqoslab tanlov qila oladi." },
    ],
  },
  "avtomobil-ijarasi__telegram-bot": {
    intro: "Telegram bot — bu mijozlar bilan tezkor muloqot va band qilishni avtomatlashtiruvchi vosita. Toshkentdagi avtomobil ijarasi xizmatlari uchun FRONTIX mashina bandligini ko'rsatadigan va band qilish so'rovlarini qabul qiluvchi Telegram bot yaratadi.",
    bridge: "Ikkita mijozga bitta mashina tasodifan band qilinib qo'yilishi o'rniga, bot barcha band qilingan sanalarni bitta bazada saqlaydi va yangi so'rov kelganda avtomatik tekshirib, band kunlarni mijozga taklif qilmaydi.",
    faq: [
      { question: "Bot orqali band qilish real vaqtda tasdiqlanadimi?", answer: "Ha, mijoz sanani tanlagach, bot mavjud mashinalar ro'yxatini tekshirib, band bo'lmagan mashinalarni taklif qiladi, bu ikki marta band qilish xatosining oldini oladi." },
      { question: "Bot orqali mashina qaytarish vaqtida eslatma yuborish mumkinmi?", answer: "Ha, bot ijaraga olingan mashinani qaytarish sanasi yaqinlashganda mijozga avtomatik eslatma yuboradi." },
    ],
  },
  "avtomobil-ijarasi__business-automation": {
    intro: "CRM avtomatlashtirish — bu mashinalar bandligi, mijozlar va shartnomalarni bitta tizimda boshqarish imkonini beruvchi yechim. Toshkentdagi avtomobil ijarasi xizmatlari uchun FRONTIX har bir mashinaning holati, bandligi va texnik ko'rik muddatlarini kuzatuvchi CRM tizimini yaratadi.",
    bridge: "Mashina qaytarilganda uning holati hujjatlashtirilmasdan qolib, keyinchalik nizolar kelib chiqishi o'rniga, CRM tizimi har bir ijara yakunida mashina holati (yoqilg'i, km, shikastlar) haqida checklist to'ldirishni talab qiladi va bu ma'lumotni mijoz kartochkasida saqlaydi.",
    faq: [
      { question: "CRM texnik ko'rik va sug'urta muddatlarini kuzatadimi?", answer: "Ha, har bir mashina uchun texnik ko'rik va sug'urta muddati kiritiladi, muddat yaqinlashganda tizim avtomatik eslatma beradi, bu muddati o'tgan mashinani yo'lga chiqarish xavfini kamaytiradi." },
      { question: "Nizoli holatlarda mashina holatini isbotlash uchun rasm biriktirish mumkinmi?", answer: "Ha, har bir ijara yakunida mashina holatining fotosuratlarini kartochkaga biriktirish mumkin, bu kelgusi nizolarda dalil sifatida ishlatiladi." },
    ],
  },
  "avtosalonlar__website-development": {
    intro: "Veb-sayt — bu savdodagi mashinalar katalogi, narxlari va shartlarini ko'rsatadigan onlayn vitrina. Toshkentdagi avtosalonlar uchun FRONTIX barcha mavjud modellarni filtrlash imkoni bilan ko'rsatadigan, test drayvga yozilish formasi bilan jihozlangan sayt yaratadi.",
    bridge: "Xaridor mavjud modellarni ijtimoiy tarmoqlarda tarqoq holda qidirishi o'rniga, sayt barcha sotuvdagi mashinalarni narx, marka va yil bo'yicha filtrlab ko'rsatadi, xaridor yoqqan mashina uchun to'g'ridan-to'g'ri test drayvga yozilishi mumkin.",
    faq: [
      { question: "Saytda har bir mashina uchun batafsil texnik xususiyatlar ko'rsatiladimi?", answer: "Ha, har bir mashina kartochkasida yil, yurgan masofa, dvigatel hajmi va boshqa texnik ma'lumotlar ko'rsatiladi." },
      { question: "Kredit kalkulyatorini saytga qo'shish mumkinmi?", answer: "Ha, sayt xaridorga oylik to'lov summasini boshlang'ich to'lov va muddatga qarab taxminiy hisoblab beruvchi kredit kalkulyatori bilan jihozlanadi." },
    ],
  },
  "avtosalonlar__telegram-bot": {
    intro: "Telegram bot — bu xaridorlar bilan tezkor muloqot va yangi mashinalar haqida xabardor qilish vositasi. Toshkentdagi avtosalonlar uchun FRONTIX yangi kelgan mashinalar haqida xabar beradigan va test drayvga yozadigan Telegram bot yaratadi.",
    bridge: "Test drayvga yozilish uchun telefon orqali navbat aralashib ketishi o'rniga, bot mijozga bo'sh vaqt oralig'ini ko'rsatadi va tanlangan vaqtni avtomatik band qilib, salon menejeriga xabar yuboradi.",
    faq: [
      { question: "Bot orqali yangi kelgan mashinalar haqida xabar olish mumkinmi?", answer: "Ha, mijoz o'zi qiziqqan marka yoki byudjetni tanlasa, bot mos mashina salonga kelganda avtomatik xabar yuboradi." },
      { question: "Trade-in so'rovini bot orqali qoldirish mumkinmi?", answer: "Ha, mijoz eski mashinasining rasmi va ma'lumotlarini botga yuborsa, so'rov menejerga tushadi va u bilan bog'lanish uchun asos bo'ladi." },
    ],
  },
  "avtosalonlar__business-automation": {
    intro: "CRM avtomatlashtirish — bu xaridorlar, mashinalar zaxirasi va bitimlarni bitta tizimda boshqarish imkonini beruvchi yechim. Toshkentdagi avtosalonlar uchun FRONTIX har bir mashinaning holati, xaridor bilan muzokaralar bosqichi va trade-in so'rovlarini kuzatuvchi CRM tizimini yaratadi.",
    bridge: "Trade-in so'rovlari va kelishilgan narxlar qog'ozda yo'qolib qolishi o'rniga, CRM tizimi har bir xaridor uchun alohida bitim kartochkasi ochadi, unda eski mashina holati, taklif qilingan narx va muzokara bosqichi saqlanadi.",
    faq: [
      { question: "CRM mashinalar zaxirasini kuzatadimi?", answer: "Ha, har bir mashinaning statusi (sotuvda, bron qilingan, sotilgan) tizimda ko'rsatiladi, bu menejerlarga real vaqtda mavjud zaxirani bilish imkonini beradi." },
      { question: "Bir nechta menejer bitta mijoz bilan bir vaqtda ishlab qolmasligi uchun nima qilinadi?", answer: "CRM har bir mijozni ma'sul menejerga biriktiradi, shu orqali ikki menejer bir xaridor bilan mustaqil ishlab, chalkashlik yuzaga kelishining oldi olinadi." },
    ],
  },
  "lombard-xizmatlari__website-development": {
    intro: "Veb-sayt — bu lombard xizmatlari, garovga qabul qilinadigan buyum turlari va taxminiy baholash shartlarini ko'rsatadigan onlayn manba. Toshkentdagi lombard xizmatlari uchun FRONTIX buyum turlari bo'yicha taxminiy summalarni ko'rsatadigan va onlayn so'rov qabul qiluvchi sayt yaratadi.",
    bridge: "Mijoz qancha summa olishi mumkinligini bilish uchun filialga borishga majbur bo'lishi o'rniga, sayt oltin, texnika va boshqa buyum turlari bo'yicha taxminiy baholash jadvalini ko'rsatadi, mijoz oldindan hisoblab, keyin filialga keladi.",
    faq: [
      { question: "Saytda buyumning aniq bahosini bilish mumkinmi?", answer: "Sayt taxminiy summani ko'rsatadi, chunki aniq baho buyumni ko'zdan kechirgandan so'ng filialda belgilanadi, lekin bu mijozga oldindan tasavvur beradi." },
      { question: "Saytda filiallar manzili va ish vaqti ko'rsatiladimi?", answer: "Ha, barcha filiallar manzili, telefon raqami va ish vaqti alohida sahifada, xaritada ko'rsatiladi." },
    ],
  },
  "lombard-xizmatlari__telegram-bot": {
    intro: "Telegram bot — bu mijozlarga garov muddati va to'lovlar haqida avtomatik eslatma beruvchi vosita. Toshkentdagi lombard xizmatlari uchun FRONTIX garov muddati tugashidan oldin mijozga xabar yuboradigan Telegram bot yaratadi.",
    bridge: "Mijoz garov muddatini unutib, foizi oshib ketishi yoki buyumini yo'qotib qo'yishi o'rniga, bot har bir garov shartnomasi muddati yaqinlashganda mijozga avtomatik eslatma yuboradi, mijoz muddatni uzaytirish yoki buyumni qaytarib olish haqida oldindan qaror qabul qiladi.",
    faq: [
      { question: "Bot qaysi kanaldan eslatma yuboradi, mijoz ro'yxatdan o'tishi kerakmi?", answer: "Mijoz garov rasmiylashtirilganda botga bir marta ulanadi, shundan so'ng barcha eslatmalar avtomatik keladi, qo'shimcha ro'yxatdan o'tish talab qilinmaydi." },
      { question: "Bot orqali muddatni uzaytirish so'rovini yuborish mumkinmi?", answer: "Ha, mijoz eslatma kelgach, bot orqali muddatni uzaytirish yoki to'lov qilish niyatini bildirishi mumkin, so'rov filialga tushadi." },
    ],
  },
  "lombard-xizmatlari__business-automation": {
    intro: "CRM avtomatlashtirish — bu garov shartnomalari, mijozlar va muddatlarni bitta tizimda boshqarish imkonini beruvchi yechim. Toshkentdagi lombard xizmatlari uchun FRONTIX har bir garov buyumi, summasi va muddatini kuzatuvchi CRM tizimini yaratadi.",
    bridge: "Garovga qo'yilgan buyumlar va ularning saqlanish joyi qog'ozda tarqoq qayd qilinishi o'rniga, CRM tizimi har bir buyum uchun alohida kartochka ochadi, unda buyum turi, bahosi, saqlanish joyi va muddat ko'rsatiladi, bu buyumni tez topishni osonlashtiradi.",
    faq: [
      { question: "CRM muddati o'tgan garovlarni avtomatik ko'rsatadimi?", answer: "Ha, tizim muddati o'tgan yoki yaqinlashayotgan garovlarni alohida ro'yxatda ko'rsatadi, bu xodimlarga ularni birinchi navbatda ko'rib chiqish imkonini beradi." },
      { question: "Bir nechta filial ishlayotgan bo'lsa, har biri alohida hisob yuritadimi?", answer: "Ha, tizim har bir filialning garov va mijozlar bazasini alohida yuritadi, shu bilan birga umumiy hisobotni markazlashtirilgan holda ko'rish mumkin." },
    ],
  },
  "tarjima-xizmatlari__website-development": {
    intro: "Veb-sayt — bu tarjima byurosining til yo'nalishlari, xizmat narxlari va buyurtma berish tartibini ko'rsatadigan onlayn manba. Toshkentdagi tarjima xizmatlari uchun FRONTIX til va hujjat turiga qarab narxni ko'rsatadigan, hujjat yuklab buyurtma berish formasi bilan jihozlangan sayt yaratadi.",
    bridge: "Mijoz narxni bilish uchun qo'ng'iroq qilishga majbur bo'lishi o'rniga, sayt har bir til yo'nalishi va hujjat turi bo'yicha narxlarni jadval ko'rinishida ko'rsatadi, mijoz hujjatini yuklab, narxni ko'rib, onlayn buyurtma beradi.",
    faq: [
      { question: "Saytda notarial tasdiqlash xizmati alohida ko'rsatiladimi?", answer: "Ha, notarial tasdiqlash qo'shimcha xizmat sifatida alohida narx va muddat bilan ko'rsatiladi, mijoz kerak bo'lsa uni buyurtmaga qo'shadi." },
      { question: "Shoshilinch tarjima buyurtmasini saytdan berish mumkinmi?", answer: "Ha, sayt oddiy va shoshilinch (tezlashtirilgan) tarjima variantlarini narx farqi bilan ko'rsatadi, mijoz kerakli muddatni tanlaydi." },
    ],
  },
  "tarjima-xizmatlari__telegram-bot": {
    intro: "Telegram bot — bu mijozga buyurtma holati haqida avtomatik xabar beruvchi vosita. Toshkentdagi tarjima xizmatlari uchun FRONTIX hujjat qaysi bosqichda (tarjima, tahrir, notarial tasdiq) ekanligini ko'rsatadigan Telegram bot yaratadi.",
    bridge: "Mijoz hujjat holatini bilish uchun doim qo'ng'iroq qilishi o'rniga, bot buyurtma raqami orqali hujjatning joriy bosqichini ko'rsatadi va har bir bosqich yakunlanganda mijozga avtomatik xabar yuboradi.",
    faq: [
      { question: "Bot orqali tayyor hujjatni olish vaqti haqida xabar keladimi?", answer: "Ha, hujjat notarial tasdiqdan o'tib, olishga tayyor bo'lganda bot mijozga darhol xabar yuboradi." },
      { question: "Bot orqali yangi buyurtma berish mumkinmi?", answer: "Ha, mijoz botga hujjat faylini yuborib, kerakli til yo'nalishini tanlashi orqali yangi buyurtma bera oladi." },
    ],
  },
  "tarjima-xizmatlari__business-automation": {
    intro: "CRM avtomatlashtirish — bu hujjatlar, tarjimonlar va muddatlarni bitta tizimda boshqarish imkonini beruvchi yechim. Toshkentdagi tarjima xizmatlari uchun FRONTIX har bir hujjatning qaysi tarjimonda va qaysi bosqichda ekanligini kuzatuvchi CRM tizimini yaratadi.",
    bridge: "Bir nechta tarjimon orasida hujjatlar taqsimoti messenjerlarda tarqoq qayd qilinib, muddatlar chalkashib ketishi o'rniga, CRM tizimi har bir hujjatni mas'ul tarjimonga biriktiradi va bosqichlarni (tarjima, tahrir, notarial tasdiq) belgilab, muddat yaqinlashganda avtomatik eslatma beradi.",
    faq: [
      { question: "CRM shoshilinch buyurtmalarni ajratib ko'rsatadimi?", answer: "Ha, shoshilinch buyurtmalar tizimda alohida belgi bilan ajratiladi va ro'yxat boshida ko'rsatiladi, bu ularning muddatidan kechikib qolmasligini ta'minlaydi." },
      { question: "Tarjimonlarning ish yuklamasini taqqoslash mumkinmi?", answer: "Ha, tizim har bir tarjimonga biriktirilgan hujjatlar sonini ko'rsatadi, bu yangi buyurtmani eng bo'sh tarjimonga taqsimlashga yordam beradi." },
    ],
  },
  "audit-va-konsalting__website-development": {
    intro: "Veb-sayt — bu kompaniyaning xizmat yo'nalishlari, tajribasi va mutaxassislari haqida ishonch beradigan rasmiy manba. Toshkentdagi audit va konsalting kompaniyalari uchun FRONTIX mutaxassislik yo'nalishlari va amalga oshirilgan loyihalarni ko'rsatadigan, konsultatsiyaga yozilish formasi bilan jihozlangan sayt yaratadi.",
    bridge: "Yangi mijoz kompaniya tajribasi haqida faqat tavsiyanoma orqali bilib olishi o'rniga, sayt orqali mutaxassislik yo'nalishlari, sertifikatlar va oldingi loyihalar ko'rsatiladi, bu ishonchni oshiradi va mijoz onlayn konsultatsiyaga yoziladi.",
    faq: [
      { question: "Saytda mijozlar bilan tuzilgan shartnomalar tafsilotlarini ko'rsatish shart emasmi?", answer: "Yo'q, maxfiylik saqlanadi, sayt shartnoma tafsilotlari o'rniga umumiy yo'nalish va natija (masalan, tarmoq, ish hajmi) ko'rinishida tajriba ko'rsatiladi." },
      { question: "Saytga narxlarni qo'yish kerakmi?", answer: "Har bir loyiha hajmiga qarab narx belgilangani uchun sayt aniq narx o'rniga so'rov formasi orqali dastlabki bahoni olish imkonini beradi." },
    ],
  },
  "audit-va-konsalting__business-automation": {
    intro: "CRM avtomatlashtirish — bu mijozlar, loyihalar va hisobot muddatlarini bitta tizimda boshqarish imkonini beruvchi yechim. Toshkentdagi audit va konsalting kompaniyalari uchun FRONTIX har bir mijoz loyihasining bosqichi va muddatlarini kuzatuvchi CRM tizimini yaratadi.",
    bridge: "Bir nechta mijoz bilan bir vaqtda ishlaganda hisobot muddatlari chalkashib ketishi o'rniga, CRM tizimi har bir loyiha uchun bosqichlarni (hujjat yig'ish, tahlil, hisobot tayyorlash) belgilaydi va muddat yaqinlashganda mas'ul xodimga avtomatik eslatma yuboradi.",
    faq: [
      { question: "CRM mijoz hujjatlarini saqlash uchun ham ishlatiladimi?", answer: "Ha, har bir mijoz kartochkasiga moliyaviy hujjatlar va hisobotlarni biriktirish mumkin, bu elektron pochtada tarqoq yuborilgan fayllarni qidirish zaruratini yo'qotadi." },
      { question: "Bir loyihada bir nechta xodim ishlasa, vazifalarni taqsimlash mumkinmi?", answer: "Ha, tizim loyiha ichida har bir vazifani aniq xodimga biriktirish va bajarilish holatini kuzatish imkonini beradi." },
    ],
  },
  "audit-va-konsalting__telegram-bot": {
    intro: "Telegram bot — bu mijozlarga loyiha holati va hisobot muddatlari haqida avtomatik xabar beruvchi vosita. Toshkentdagi audit va konsalting kompaniyalari uchun FRONTIX loyiha bosqichi va konsultatsiya uchrashuvlari haqida eslatma yuboradigan Telegram bot yaratadi.",
    bridge: "Mijoz loyihaning qaysi bosqichda ekanligini bilish uchun elektron pochta orqali so'rashga majbur bo'lishi o'rniga, bot loyiha bosqichi o'zgarganda (hujjat qabul qilindi, tahlil boshlandi, hisobot tayyor) mijozga avtomatik xabar yuboradi.",
    faq: [
      { question: "Bot orqali konsultatsiya uchrashuviga yozilish mumkinmi?", answer: "Ha, mijoz bot orqali bo'sh vaqt oralig'ini tanlab, konsultatsiya uchrashuviga onlayn yoziladi." },
      { question: "Bot orqali kerakli hujjatlar ro'yxatini olish mumkinmi?", answer: "Ha, loyiha boshlanganda bot mijozga audit yoki konsalting uchun zarur hujjatlar ro'yxatini avtomatik yuboradi." },
    ],
  },
  "kadrlar-agentliklari__website-development": {
    intro: "Veb-sayt — bu agentlikning mavjud vakansiyalari va xizmatlari haqida ma'lumot beradigan onlayn manba. Toshkentdagi HR va kadrlar agentliklari uchun FRONTIX yangilanib turadigan vakansiyalar ro'yxati va rezyume topshirish formasi bilan jihozlangan sayt yaratadi.",
    bridge: "Ish qidiruvchi vakansiyalar haqida faqat qo'ng'iroq qilib yoki tashrif buyurib bilib olishi o'rniga, sayt barcha ochiq vakansiyalarni yo'nalish va shahar bo'yicha filtrlab ko'rsatadi, nomzod o'zi mos vakansiyaga onlayn rezyume topshiradi.",
    faq: [
      { question: "Saytda vakansiyalar avtomatik yangilanadimi?", answer: "Ha, yangi vakansiya qo'shilganda yoki yopilganda sayt ro'yxati CRM tizimi bilan bog'lanib avtomatik yangilanadi." },
      { question: "Kompaniyalar saytdan vakansiya so'rovi qoldira oladimi?", answer: "Ha, mijoz kompaniyalar uchun alohida forma qo'yiladi, unda kerakli lavozim va talablarni ko'rsatib xodim qidirish so'rovi yuboriladi." },
    ],
  },
  "kadrlar-agentliklari__business-automation": {
    intro: "CRM avtomatlashtirish — bu nomzodlar, vakansiyalar va mijoz kompaniyalarni bitta tizimda boshqarish imkonini beruvchi yechim. Toshkentdagi HR va kadrlar agentliklari uchun FRONTIX nomzodlar bazasi va vakansiyalarni mos keltiruvchi CRM tizimini yaratadi.",
    bridge: "Nomzodlarning rezyumelari turli papkalarda tarqoq saqlanib, mos nomzodni topish qiyinlashishi o'rniga, CRM tizimi har bir nomzodning malakasi, tajribasi va xohlagan yo'nalishini saqlaydi, yangi vakansiya kelganda mos nomzodlarni avtomatik filtrlab ko'rsatadi.",
    faq: [
      { question: "CRM qaysi vakansiya ochiq, qaysisi yopilganini ko'rsatadimi?", answer: "Ha, har bir mijoz kompaniyaning vakansiya so'rovi alohida kartochkada saqlanadi, uning holati (qidiruvda, nomzod tanlangan, yopilgan) real vaqtda ko'rinadi." },
      { question: "Intervyu jadvalini CRM orqali boshqarish mumkinmi?", answer: "Ha, tizim har bir nomzod uchun intervyu sanasi va vaqtini belgilaydi, bir vaqtga ikkita uchrashuv tasodifan qo'yilib qolishining oldini oladi." },
    ],
  },
  "kadrlar-agentliklari__telegram-bot": {
    intro: "Telegram bot — bu nomzodlar va mijoz kompaniyalar bilan tezkor muloqot vositasi. Toshkentdagi HR va kadrlar agentliklari uchun FRONTIX yangi vakansiyalar haqida xabar beradigan va intervyuga yozadigan Telegram bot yaratadi.",
    bridge: "Intervyu vaqtlarini telefon orqali kelishish natijasida uchrashuvlar bir-biriga to'g'ri kelib qolishi o'rniga, bot nomzodga bo'sh vaqt oralig'ini ko'rsatadi va tanlangan vaqtni avtomatik band qilib, agentlik kalendariga qo'shadi.",
    faq: [
      { question: "Bot orqali o'z yo'nalishimga mos vakansiyalar haqida xabar olish mumkinmi?", answer: "Ha, nomzod botga qiziqqan soha va lavozimni ko'rsatsa, mos vakansiya paydo bo'lganda bot avtomatik xabar yuboradi." },
      { question: "Bot orqali rezyume yuborish mumkinmi?", answer: "Ha, nomzod rezyume faylini to'g'ridan-to'g'ri botga yuborishi mumkin, u agentlik bazasiga avtomatik qo'shiladi." },
    ],
  },

  "repetitorlik-markazlari__website-development": {
    intro: "Repetitorlik markazi — bu o'quvchilarga fan yoki imtihonga (DTM, IELTS, SAT) tayyorgarlik bo'yicha individual yoki kichik guruhli darslar beradigan ta'lim xizmati. Toshkentdagi repetitorlik markazlari uchun FRONTIX har bir repetitorning yo'nalishi, tajribasi va bo'sh soatlarini ko'rsatadigan, ota-onalarga ishonch uyg'otadigan veb-sayt yaratadi.",
    bridge: "Yangi mijoz qaysi repetitorda qaysi fan bo'yicha bo'sh joy borligini bilish uchun barcha raqamlarga qo'ng'iroq qilishga majbur bo'lishi o'rniga, sayt har bir repetitorning yo'nalishi, darajasi va band bo'lmagan vaqt oralig'ini ko'rsatib, mijozni to'g'ridan-to'g'ri ariza qoldirishga yo'naltiradi.",
    faq: [
      { question: "Saytda har bir repetitorning bo'sh soatlarini alohida ko'rsatish mumkinmi?", answer: "Ha, har bir repetitor uchun alohida sahifa yaratiladi, unda fan, daraja (masalan DTM yoki IELTS) va joriy hafta uchun bo'sh soatlar ko'rsatiladi, mijoz mos vaqtni tanlab ariza qoldiradi." },
      { question: "Sayt orqali probniy test natijalarini ham joylash mumkinmi?", answer: "Ha, markazning yutuqlari (masalan, o'tgan yili nechta o'quvchi DTMda yuqori ball to'plagani) alohida bo'limda ko'rsatiladi, bu yangi ota-onalarga ishonch beradi." },
    ],
  },
  "repetitorlik-markazlari__telegram-bot": {
    intro: "Repetitorlik markazi — bu o'quvchilarga fan yoki imtihonga tayyorgarlik bo'yicha individual darslar tashkil qiluvchi ta'lim xizmati. Toshkentdagi repetitorlik markazlari uchun FRONTIX ota-onalar va o'quvchilar bilan bevosita muloqot qiladigan, dars jadvalini boshqaradigan Telegram bot ishlab chiqadi.",
    bridge: "Bitta xonada kuniga bir nechta o'quvchi bilan 30-45 daqiqalik darslar telefon orqali og'zaki kelishilib, ikki kishi bir vaqtga yozilib qolishi o'rniga, bot har bir repetitorning band va bo'sh vaqtlarini real vaqtda ko'rsatib, dars vaqtini avtomatik bron qiladi.",
    faq: [
      { question: "Bot ota-onaga farzandining darsi qachonligini eslatib turadimi?", answer: "Ha, bot har bir dars boshlanishidan bir necha soat oldin ota-onaga avtomatik eslatma yuboradi, shuningdek dars bekor qilingan yoki ko'chirilgan holatlarda ham xabar beradi." },
      { question: "Imtihon sanasiga qancha kun qolganini bot orqali kuzatish mumkinmi?", answer: "Ha, o'quvchi DTM yoki IELTS sanasini botga kiritsa, bot qolgan kunlarni hisoblab, tayyorgarlik jadvali bo'yicha eslatmalar yuboradi." },
    ],
  },
  "repetitorlik-markazlari__business-automation": {
    intro: "Repetitorlik markazi — bu o'quvchilarga fan yoki imtihonga individual tayyorgarlik ko'rsatadigan ta'lim xizmati. Toshkentdagi repetitorlik markazlari uchun FRONTIX har bir o'quvchining shaxsiy progressi va to'lovlarini bir tizimda yurituvchi CRM avtomatlashtirish yechimini joriy qiladi.",
    bridge: "Har bir o'quvchining individual dasturi va probniy test ballari qog'ozda yoki repetitorning xotirasida saqlanib, ota-onaga progress ko'rsatib bo'lmasligi o'rniga, CRM har bir o'quvchi kartochkasida o'zlashtirilgan mavzular va test natijalari tarixini saqlaydi, ota-onaga istalgan vaqtda hisobot chiqarib berish mumkin bo'ladi.",
    faq: [
      { question: "CRM orqali o'quvchining probniy test natijalari grafigini ko'rsatish mumkinmi?", answer: "Ha, har bir o'quvchi uchun test natijalari vaqt bo'yicha kiritiladi va tizim avtomatik progress grafigini shakllantiradi, buni ota-onaga taqdim etish mumkin." },
      { question: "Bir nechta repetitorning jadvalini bitta tizimda boshqarish mumkinmi?", answer: "Ha, CRM barcha repetitorlarning band va bo'sh soatlarini bitta markazda ko'rsatadi, shu orqali yangi mijozni band bo'lmagan repetitorga tez yo'naltirish mumkin." },
    ],
  },

  "xalq-tabobati-markazlari__website-development": {
    intro: "Xalq tabobati markazi — bu fitoterapiya, girudoterapiya, iglouqalash kabi an'anaviy davolash usullarini qo'llaydigan sog'liqni saqlash xizmati. Toshkentdagi xalq tabobati markazlari uchun FRONTIX mutaxassislarning sertifikati va tajribasini ochiq ko'rsatadigan, mijozda ishonch uyg'otadigan veb-sayt yaratadi.",
    bridge: "Mijozlar davolash usuli xavfsizligiga shubha bilan qarab, mutaxassis tajribasi haqida faqat og'zaki ma'lumot olishi o'rniga, sayt har bir mutaxassisning sertifikatlari, ta'lim va yillar tajribasini rasmiy sahifada ko'rsatib, mijozga qaror qabul qilishdan oldin ishonch beradi.",
    faq: [
      { question: "Saytda mutaxassislarning sertifikatlarini skanerlab joylash mumkinmi?", answer: "Ha, har bir mutaxassis sahifasida uning diplomlari, sertifikatlari va ixtisoslashgan yo'nalishlari rasm shaklida joylanadi, bu mijozga ishonch uyg'otadi." },
      { question: "Xalq tabobati usullari haqida noto'g'ri tushunchalarni saytda tushuntirish mumkinmi?", answer: "Ha, har bir muolaja turi uchun alohida sahifa yaratilib, unda usul qanday ishlashi, necha seans kerakligi va realistik natija haqida aniq ma'lumot beriladi." },
    ],
  },
  "xalq-tabobati-markazlari__telegram-bot": {
    intro: "Xalq tabobati markazi — bu an'anaviy usullar (fitoterapiya, iglouqalash, girudoterapiya) orqali davolash xizmatlarini ko'rsatadigan muassasa. Toshkentdagi xalq tabobati markazlari uchun FRONTIX mijozlarning ochiq qo'ng'iroq qilishga cho'chishi o'rniga, yozma savol berishi mumkin bo'lgan Telegram bot yaratadi.",
    bridge: "Rasmiy shifo emasligi sababli mijozlar avval qo'ng'iroq qilishga tortinishi o'rniga, bot orqali mijoz savolini yozma tarzda yuboradi, admin yoki mutaxassis unga bosim ostida qolmasdan batafsil javob beradi, bu birinchi qadamni osonlashtiradi.",
    faq: [
      { question: "Bot orqali keyingi seans sanasini eslatish mumkinmi?", answer: "Ha, 8-10 seansdan iborat kurs davomida bot har bir keyingi seansdan bir kun oldin mijozga eslatma yuboradi, shu orqali kursning uzilib qolishi oldi olinadi." },
      { question: "Mijoz botga davolash usuli haqida savol yozsa, kim javob beradi?", answer: "Savol avtomatik ravishda administratorga yoki mos mutaxassisga yuboriladi, mijoz botda yozma javob oladi, telefon qilish shart emas." },
    ],
  },
  "xalq-tabobati-markazlari__business-automation": {
    intro: "Xalq tabobati markazi — bu an'anaviy davolash usullarini qo'llaydigan sog'liqni saqlash muassasasi. Toshkentdagi xalq tabobati markazlari uchun FRONTIX mijozning muolaja kursi davomiyligini va davomatini kuzatadigan CRM avtomatlashtirish tizimini joriy qiladi.",
    bridge: "8-10 seansdan iborat kursni mijoz oralab qolsa samarasi pasayishi, ammo hech kim eslatmasligi o'rniga, CRM har bir mijozning kurs jadvalini saqlab, navbatdagi seans yaqinlashganda avtomatik eslatma yuborishni tashkil qiladi, shu bilan kursni oxirigacha yetkazish ehtimoli oshadi.",
    faq: [
      { question: "CRM orqali mijozning qaysi seansda ekanini kuzatish mumkinmi?", answer: "Ha, har bir mijoz kartochkasida qancha seans o'tkazilgani va nechtasi qolgani ko'rsatiladi, bu asosida keyingi tashrif avtomatik rejalashtiriladi." },
      { question: "Mutaxassislarning sertifikat muddati tugashini CRM kuzatib boradimi?", answer: "Ha, tizimga har bir mutaxassisning sertifikat muddati kiritiladi va muddat yaqinlashganda administratorga eslatma beriladi, bu ishonchni saqlab turishga yordam beradi." },
    ],
  },

  "fizioterapiya-markazlari__website-development": {
    intro: "Fizioterapiya va reabilitatsiya markazi — jarohat yoki kasallikdan keyin bemorning harakat qobiliyatini tiklashga qaratilgan uzoq muddatli davolash xizmati. Toshkentdagi fizioterapiya markazlari uchun FRONTIX reabilitatsiya dasturlari va mutaxassislar haqida aniq ma'lumot beruvchi veb-sayt yaratadi.",
    bridge: "Reabilitatsiya kursini bemor natijani sezmayapman deb yarmida tashlab ketishi o'rniga, sayt orqali oldingi bemorlarning reabilitatsiya davomida qanday progress ko'rsatgani (masalan, harakat diapazoni o'zgarishi) misollar bilan ko'rsatiladi, bu yangi bemorga sabr qilish kerakligini tushuntiradi.",
    faq: [
      { question: "Saytda reabilitatsiya dasturining necha seansdan iboratligini ko'rsatish mumkinmi?", answer: "Ha, har bir holat turi (masalan, insultdan keyingi yoki jarohatdan keyingi reabilitatsiya) uchun taxminiy seanslar soni va bosqichlari alohida sahifada tushuntiriladi." },
      { question: "Sayt orqali bemor birinchi konsultatsiyaga yozilishi mumkinmi?", answer: "Ha, sayt onlayn ariza formasi orqali bemorning holati haqida qisqa ma'lumot olib, mos mutaxassisga birlamchi konsultatsiya vaqtini belgilaydi." },
    ],
  },
  "fizioterapiya-markazlari__telegram-bot": {
    intro: "Fizioterapiya va reabilitatsiya markazi — bemorning harakat qobiliyatini uzoq muddatli dastur orqali tiklaydigan davolash xizmati. Toshkentdagi fizioterapiya markazlari uchun FRONTIX bemorga uyda bajarish kerak bo'lgan mashqlarni va progress ma'lumotlarini yuboradigan Telegram bot yaratadi.",
    bridge: "Uyda bajarilishi kerak bo'lgan individual mashqlar to'plami qog'ozga chizib berilib, bemor uni yo'qotib qo'yishi yoki noto'g'ri bajarishi o'rniga, bot har bir bemorga o'ziga tayinlangan mashqlarni video yoki rasm ko'rinishida yuboradi, bemor istalgan vaqt qayta ko'rishi mumkin bo'ladi.",
    faq: [
      { question: "Bot orqali bemorning harakat diapazoni progressini ko'rsatish mumkinmi?", answer: "Ha, har bir seansdan keyin mutaxassis o'lchovlarni botga kiritadi, bot esa bemorga oddiy grafik yoki qisqa xulosa ko'rinishida progressni yuboradi." },
      { question: "Bir nechta mutaxassis (fizioterapevt, massajist) bilan ishlayotgan bemor haqida ma'lumot bot orqali ulashiladimi?", answer: "Ha, bot bemorning umumiy davolanish tarixini saqlaydi, shu orqali istalgan mutaxassis bemorning oldingi seanslarini qayta so'ramasdan ko'ra oladi." },
    ],
  },
  "fizioterapiya-markazlari__business-automation": {
    intro: "Fizioterapiya va reabilitatsiya markazi — bemorning harakat qobiliyatini bosqichma-bosqich tiklashga qaratilgan uzoq muddatli davolash xizmati. Toshkentdagi fizioterapiya markazlari uchun FRONTIX bemorning har seansdagi ko'rsatkichlarini saqlaydigan CRM avtomatlashtirish tizimini joriy qiladi.",
    bridge: "Bemorning har seansdagi harakat diapazoni o'lchovlari qog'ozga yozilib, umumiy progress grafigi hech qachon ko'rsatilmasligi o'rniga, CRM har bir bemor kartochkasida barcha seanslar bo'yicha o'lchovlarni saqlaydi va avtomatik progress grafigini shakllantiradi, buni bemorga ko'rsatib, davom etish uchun motivatsiya berish mumkin bo'ladi.",
    faq: [
      { question: "CRM turli mutaxassislar (fizioterapevt, massajist, instruktor) o'rtasida bemor ma'lumotini ulashadimi?", answer: "Ha, bemorning umumiy kartochkasiga barcha mutaxassislar kirish huquqiga ega bo'ladi, shu orqali har safar bemorning holatini qaytadan so'rash shart bo'lmaydi." },
      { question: "CRM orqali reabilitatsiya kursini yarmida tashlab ketish holatlarini kamaytirish mumkinmi?", answer: "Ha, tizim progressni raqamlar bilan ko'rsatgani uchun bemor natijani sezmasa ham, haqiqiy o'zgarishni grafikda ko'rib, kursni davom ettirishga ishontirish osonlashadi." },
    ],
  },

  "tibbiy-buyumlar-dokonlari__online-ordering": {
    intro: "Tibbiy buyumlar do'koni — nogironlar aravachasi, bosim o'lchagich, yurish tayoqchasi kabi tibbiy jihoz va buyumlarni sotadigan savdo nuqtasi. Toshkentdagi tibbiy buyumlar do'konlari uchun FRONTIX mahsulotni ko'rmasdan turib buyurtma berish imkonini beruvchi onlayn buyurtma tizimini yaratadi.",
    bridge: "Shahardan tashqarida yashovchi mijoz qarigan ota-onasi uchun aravacha sotib olishda mahsulotni ko'rmasdan telefon orqali tavsif berib buyurtma berishga majbur bo'lishi o'rniga, onlayn buyurtma tizimi har bir mahsulotning o'lchami, texnik xususiyati va rasmlarini ko'rsatib, mijoz o'zi tanlab, yetkazib berish manzilini kiritib buyurtma berishi mumkin bo'ladi.",
    faq: [
      { question: "Onlayn buyurtma tizimida mahsulotning zaxirada bor-yo'qligi ko'rsatiladimi?", answer: "Ha, har bir mahsulot kartochkasida real vaqtda zaxira holati ko'rsatiladi, shu orqali mijoz do'konga borib mahsulot tugaganini bilib qolish holatidan qutuladi." },
      { question: "Shifokor tavsiya qilgan model bo'yicha buyurtma berish mumkinmi?", answer: "Ha, mijoz buyurtma formasida shifokor tavsiyasi yoki retsept rasmi va izohini qoldirishi mumkin, sotuvchi shunga mos mahsulotni tanlab tasdiqlash uchun bog'lanadi." },
    ],
  },
  "tibbiy-buyumlar-dokonlari__website-development": {
    intro: "Tibbiy buyumlar do'koni — nogironlar aravachasi, bosim o'lchagich, ortopedik buyumlar kabi mahsulotlarni sotuvchi ixtisoslashgan do'kon. Toshkentdagi tibbiy buyumlar do'konlari uchun FRONTIX mahsulot katalogini texnik xususiyatlari bilan to'liq ko'rsatadigan veb-sayt yaratadi.",
    bridge: "Mijoz aravacha yoki bosim o'lchagich tanlashda o'lcham va texnik xususiyatlarni bilmasdan do'konga borib har birini qo'lda ko'rib chiqishga majbur bo'lishi o'rniga, sayt har bir mahsulot uchun batafsil texnik jadval, taqqoslash jadvali va foydalanish bo'yicha tavsiyalarni taqdim etadi, mijoz uydan turib mos mahsulotni tanlashi mumkin bo'ladi.",
    faq: [
      { question: "Saytda mahsulotlarni taqqoslash imkoniyati bormi?", answer: "Ha, bir toifadagi (masalan, aravachalar) turli modellarni og'irligi, yuk ko'tarish qobiliyati va narxi bo'yicha yonma-yon taqqoslash mumkin." },
      { question: "Ortopedik matras yoki kompression trikotaj kabi shifokor tavsiyasiga bog'liq mahsulotlar uchun sayt yordam beradimi?", answer: "Ha, har bir bunday mahsulot sahifasida qaysi holatlarda qaysi model tavsiya etilishi tushuntiriladi, shubha bo'lsa mijoz konsultatsiya so'rovi qoldirishi mumkin." },
    ],
  },
  "tibbiy-buyumlar-dokonlari__telegram-bot": {
    intro: "Tibbiy buyumlar do'koni — tibbiy jihoz va buyumlarni sotadigan ixtisoslashgan savdo nuqtasi. Toshkentdagi tibbiy buyumlar do'konlari uchun FRONTIX mijozga mahsulot tanlashda tez maslahat beradigan Telegram bot yaratadi.",
    bridge: "Shifokor tavsiyasini telefon orqali tushuntirganda sotuvchi to'g'ri mahsulotni topa olmasligi o'rniga, bot mijozdan holat va tavsiya haqida qisqa savollar orqali ma'lumot yig'ib, mos mahsulot variantlarini rasm va narx bilan taklif qiladi, kerak bo'lsa mutaxassisga ulaydi.",
    faq: [
      { question: "Bot orqali mahsulotning zaxirada borligini tekshirish mumkinmi?", answer: "Ha, mijoz mahsulot nomini yozganda yoki katalogdan tanlaganda, bot real vaqtda zaxira holatini ko'rsatadi." },
      { question: "Bot orqali buyurtma berib, yetkazib berishni buyurtma qilish mumkinmi?", answer: "Ha, mijoz botda mahsulotni tanlab, manzilini kiritib buyurtma bera oladi, bot buyurtmani do'kon jamoasiga avtomatik yuboradi." },
    ],
  },

  "optom-savdo-kompaniyalari__business-automation": {
    intro: "Optom savdo kompaniyasi — chakana do'konlarga yirik hajmda tovar yetkazib beradigan savdo korxonasi. Toshkentdagi optom savdo kompaniyalari uchun FRONTIX narx darajalari, qoldiq va qarzdorlikni bir joyda boshqaradigan CRM avtomatlashtirish tizimini joriy qiladi.",
    bridge: "Mijozlarga individual chegirma va narx darajalari Excel jadvalida qo'lda hisoblanib, xatolarga yo'l qo'yilishi o'rniga, CRM har bir mijoz uchun belgilangan narx darajasini avtomatik qo'llaydi va buyurtma summasini xatosiz hisoblab beradi.",
    faq: [
      { question: "CRM orqali mijozning qarzdorlik holatini kuzatish mumkinmi?", answer: "Ha, har bir mijoz kartochkasida joriy qarz summasi, to'lov tarixi va ombordagi mavjud limit avtomatik hisoblanib ko'rsatiladi." },
      { question: "Buyurtmaning qaysi bosqichda (tasdiqlangan, yig'ilmoqda, jo'natilgan) ekanini CRM orqali kuzatish mumkinmi?", answer: "Ha, har bir buyurtma bosqichma-bosqich statusga ega bo'ladi, sotuvchi, omborchi va buxgalter bir xil tizimda buyurtma holatini real vaqtda ko'radi." },
    ],
  },
  "optom-savdo-kompaniyalari__custom-software": {
    intro: "Optom savdo kompaniyasi — chakana savdo nuqtalariga yirik partiyalarda tovar sotadigan biznes. Toshkentdagi optom savdo kompaniyalari uchun FRONTIX ombor, narx darajalari va mijozlar bilan hisob-kitobni bitta tizimga birlashtiruvchi maxsus dasturiy yechim ishlab chiqadi.",
    bridge: "Ombordagi tovar qoldig'i va mijozlarning qarzdorlik holati alohida-alohida yuritilib, menejer aniq ma'lumotga ega bo'lmasligi o'rniga, maxsus dasturiy yechim ombor va moliyaviy hisobotni real vaqtda bog'lab, menejer bir ekranda mijozning qarzi va ombordagi mavjud tovar miqdorini bir vaqtda ko'rishi mumkin bo'ladi.",
    faq: [
      { question: "Maxsus dasturiy yechim mavjud buxgalteriya dasturi bilan integratsiya qila oladimi?", answer: "Ha, tizim kompaniya ishlatayotgan buxgalteriya yoki ombor dasturi bilan integratsiya qilinishi mumkin, ma'lumotlar ikki tomonlama sinxronlanadi." },
      { question: "Bir nechta filial yoki ombor uchun alohida qoldiq hisobini yuritish mumkinmi?", answer: "Ha, tizim har bir ombor yoki filial uchun alohida qoldiq va buyurtma oqimini yuritadi, umumiy hisobot esa markazlashtirilgan holda ko'rsatiladi." },
    ],
  },
  "optom-savdo-kompaniyalari__website-development": {
    intro: "Optom savdo kompaniyasi — chakana do'konlarga yirik hajmda tovar sotuvchi savdo tashkiloti. Toshkentdagi optom savdo kompaniyalari uchun FRONTIX assortiment va shartlar haqida ma'lumot beruvchi korporativ veb-sayt yaratadi.",
    bridge: "Yangi mijoz (chakana do'kon egasi) kompaniya assortimenti va minimal buyurtma hajmi haqida ma'lumot olish uchun faqat sotuvchiga qo'ng'iroq qilishga majbur bo'lishi o'rniga, sayt to'liq mahsulot katalogini, narx darajalarini va hamkorlik shartlarini ko'rsatib, mijoz mustaqil tanishib chiqib so'rov qoldirishi mumkin bo'ladi.",
    faq: [
      { question: "Saytda faqat ro'yxatdan o'tgan hamkorlarga narxlarni ko'rsatish mumkinmi?", answer: "Ha, sayt kirish tizimi orqali umumiy katalogni ochiq, aniq narxlarni esa faqat tasdiqlangan hamkorlarga ko'rsatadigan qilib sozlanishi mumkin." },
      { question: "Yangi hamkor bo'lish uchun ariza saytdan qoldirilishi mumkinmi?", answer: "Ha, sayt orqali yangi mijoz o'z do'koni haqida ma'lumot va hamkorlik so'rovini yuborishi, kompaniya esa buni CRM orqali qabul qilib ko'rib chiqishi mumkin." },
    ],
  },

  "bilbord-ijarasi__website-development": {
    intro: "Bilbord ijarasi xizmati — shahar bo'ylab reklama taxtalarini reklama beruvchilarga ijaraga beradigan biznes. Toshkentdagi bilbord ijarasi kompaniyalari uchun FRONTIX har bir bilbordning joylashuvi va bandligini xaritada ko'rsatuvchi veb-sayt yaratadi.",
    bridge: "Mijoz bilbordning joylashuvi va ko'rinish burchagini baholash uchun joyga borib ko'rishga majbur bo'lishi o'rniga, sayt har bir bilbordni xarita, sifatli surat va texnik o'lchamlari bilan ko'rsatadi, mijoz uydan turib mos joyni tanlab so'rov qoldirishi mumkin bo'ladi.",
    faq: [
      { question: "Saytda bilbordlarning bo'sh yoki band ekanligi ko'rsatiladimi?", answer: "Ha, har bir bilbord uchun joriy holat (bo'sh yoki band, band bo'lsa qachongacha) real vaqtda yangilanib turadi." },
      { question: "Mijoz sayt orqali bilbordni muayyan sanaga bron qilishi mumkinmi?", answer: "Ha, mijoz kerakli bilbordni tanlab, xohlagan boshlanish sanasi va muddatini ko'rsatib so'rov yuboradi, jamoa tasdiqlab bog'lanadi." },
    ],
  },
  "bilbord-ijarasi__telegram-bot": {
    intro: "Bilbord ijarasi xizmati — reklama taxtalarini turli muddatga ijaraga beruvchi biznes. Toshkentdagi bilbord ijarasi kompaniyalari uchun FRONTIX bo'sh bilbordlar va ijaraga muddat tugashi haqida eslatib turadigan Telegram bot yaratadi.",
    bridge: "Ijaraga olingan bilbord muddati tugashiga necha kun qolganini qo'lda kuzatib borish natijasida mijozga vaqtida eslatilmay bilbord bo'sh turib qolishi o'rniga, bot ijaraga tugash sanasidan bir necha kun oldin ham mijozga, ham menejerga avtomatik eslatma yuboradi, shu orqali bilbord uzluksiz band bo'lib turadi.",
    faq: [
      { question: "Bot orqali yangi mijoz bo'sh bilbordlarni tekshirishi mumkinmi?", answer: "Ha, mijoz botga hudud yoki yo'nalishni yozganda, bot o'sha hududdagi bo'sh bilbordlar ro'yxatini surat va narxi bilan yuboradi." },
      { question: "Bot menejerga muddati tugayotgan bilbordlar haqida qanday xabar beradi?", answer: "Bot har hafta muddati 7 kun ichida tugaydigan barcha bilbordlar ro'yxatini menejerga avtomatik yuboradi, shu orqali yangi mijoz izlashni oldindan boshlash mumkin bo'ladi." },
    ],
  },
  "bilbord-ijarasi__business-automation": {
    intro: "Bilbord ijarasi xizmati — shahar bo'ylab reklama taxtalarini ijaraga beruvchi biznes. Toshkentdagi bilbord ijarasi kompaniyalari uchun FRONTIX barcha bilbordlarning bandligi va to'lovlarini boshqaradigan CRM avtomatlashtirish tizimini joriy qiladi.",
    bridge: "Turli mijozlarga turli muddat va narxda ijaraga berilgan bilbordlar bo'yicha to'lov muddatlari qog'ozda yuritilib, o'tib ketgan to'lovlar payqalmay qolishi o'rniga, CRM har bir bilbord uchun ijaraga muddati va to'lov jadvalini saqlaydi, to'lov sanasi yaqinlashganda yoki o'tib ketganda avtomatik ogohlantiradi.",
    faq: [
      { question: "CRM orqali qaysi bilbord qachon bo'shashini oldindan rejalashtirish mumkinmi?", answer: "Ha, tizim barcha bilbordlarning ijaraga muddatlarini kalendar ko'rinishida ko'rsatadi, shu orqali bo'shab qoladigan bilbordlar uchun oldindan yangi mijoz izlash mumkin." },
      { question: "CRM mijozning to'lov tarixini saqlab boradimi?", answer: "Ha, har bir mijoz kartochkasida barcha to'lovlar tarixi va joriy qarzdorlik ko'rsatiladi, bu kelgusi shartnomalar uchun ham asos bo'ladi." },
    ],
  },

  "klining-kompaniyalari__telegram-bot": {
    intro: "Klining kompaniyasi — ofis, kvartira yoki ta'mirdan keyingi xonalarni professional tozalash xizmatini ko'rsatadigan biznes. Toshkentdagi klining kompaniyalari uchun FRONTIX buyurtma qabul qilish va brigada holatini kuzatuvchi Telegram bot yaratadi.",
    bridge: "Mijoz brigada qachon kelishini bilish uchun qayta-qayta qo'ng'iroq qilishga majbur bo'lishi o'rniga, bot brigadaning yo'lga chiqqani, obyektga yetib borgani va ishni tugatgani haqida mijozga real vaqtda xabar yuboradi, mijoz qo'ng'iroq qilmasdan holatdan xabardor bo'ladi.",
    faq: [
      { question: "Bot orqali narxni maydon o'lchami va xizmat turiga qarab hisoblash mumkinmi?", answer: "Ha, mijoz botga xona maydoni va tozalash turini (umumiy, ta'mirdan keyingi va h.k.) kiritganda, bot avtomatik taxminiy narxni hisoblab beradi." },
      { question: "Doimiy mijozlar uchun haftalik tozalashni bot orqali eslatish mumkinmi?", answer: "Ha, ofis kabi doimiy mijozlar uchun bot navbatdagi tozalash sanasidan bir kun oldin ham mijozga, ham brigadaga eslatma yuboradi, shu orqali unutilib qolish holatlari kamayadi." },
    ],
  },
  "klining-kompaniyalari__business-automation": {
    intro: "Klining kompaniyasi — turli obyektlarni (ofis, kvartira, ta'mirdan keyingi) tozalash xizmatini ko'rsatadigan biznes. Toshkentdagi klining kompaniyalari uchun FRONTIX brigadalar va mijozlar tarixini boshqaruvchi CRM avtomatlashtirish tizimini joriy qiladi.",
    bridge: "Tozalashdan keyin mijozning norozi bo'lgan holatlari qayd etilmasdan, keyingi safar xuddi shu muammo takrorlanishi o'rniga, CRM har bir obyekt bo'yicha mijoz izohlari va shikoyatlarini saqlaydi, keyingi brigada yo'lga chiqishdan oldin oldingi eslatmalarni ko'rib chiqadi.",
    faq: [
      { question: "CRM orqali bir kunda qaysi brigada qaysi obyektga ketayotganini kuzatish mumkinmi?", answer: "Ha, tizim har bir brigadaning kunlik marshrutini va joriy obyektdagi ish holatini (boshlangan, tugagan) real vaqtda ko'rsatadi." },
      { question: "Doimiy mijozlarning takroriy tozalash jadvalini CRM avtomatik boshqaradimi?", answer: "Ha, haftalik yoki oylik kelishilgan jadval tizimga bir marta kiritiladi, CRM navbatdagi sanalarni avtomatik yaratib, brigadaga va mijozga eslatib turadi." },
    ],
  },
  "klining-kompaniyalari__website-development": {
    intro: "Klining kompaniyasi — ofis va turar-joylarni professional tozalash xizmatini taqdim etadigan biznes. Toshkentdagi klining kompaniyalari uchun FRONTIX xizmat turlari va narxlarni aniq ko'rsatadigan veb-sayt yaratadi.",
    bridge: "Mijoz aniq narxni bilish uchun har safar menejer bilan telefon orqali qo'lda hisoblashishga majbur bo'lishi o'rniga, sayt xona maydoni va xizmat turiga qarab taxminiy narxni avtomatik hisoblab beruvchi kalkulyator taqdim etadi, mijoz taxminiy narxni ko'rib darhol buyurtma so'rovi qoldiradi.",
    faq: [
      { question: "Saytda narx kalkulyatori qanday ishlaydi?", answer: "Mijoz xona maydoni, tozalash turi (umumiy, ta'mirdan keyingi, generalka) va qo'shimcha xizmatlarni tanlaydi, sayt shu asosda taxminiy narxni darhol ko'rsatadi." },
      { question: "Doimiy (ofis) mijozlar uchun saytda alohida shartnoma bo'limi bormi?", answer: "Ha, doimiy xizmat kerak bo'lgan ofislar uchun sayt alohida so'rov formasi orqali oylik yoki haftalik xizmat shartlarini kelishishga imkon beradi." },
    ],
  },

  "quyosh-panellari-ornatish__website-development": {
    intro: "Quyosh panellari o'rnatish xizmati — uy yoki obyektga quyosh energiyasidan foydalanadigan panel tizimini loyihalash va o'rnatish bo'yicha xizmat. Toshkentdagi quyosh panellari o'rnatish kompaniyalari uchun FRONTIX mijozga taxminiy hisob-kitob taqdim etuvchi veb-sayt yaratadi.",
    bridge: "Mijoz qancha quvvatlik panel kerakligini bilish uchun mutaxassisning uyiga kelishini kutishi o'rniga, sayt oylik elektr sarfi va tom maydonini kiritish orqali taxminiy quvvat va narxni hisoblab beruvchi kalkulyator taqdim etadi, mijoz dastlabki tasavvurga ega bo'lib, keyin aniq o'lchov uchun mutaxassis chaqiradi.",
    faq: [
      { question: "Saytdagi kalkulyator qanday ma'lumot asosida hisoblaydi?", answer: "Mijoz oylik elektr to'lovi yoki sarfini kiritadi, sayt shu asosda taxminan qancha panel va quvvat kerakligini hamda taxminiy narxni ko'rsatadi." },
      { question: "Sayt orqali lizing yoki subsidiya shartlari haqida ma'lumot olish mumkinmi?", answer: "Ha, sayt alohida sahifada davlat subsidiyasi va bo'lib-bo'lib to'lash shartlarini tushuntiradi, mijoz mos kelish-kelmasligini oldindan bilib oladi." },
    ],
  },
  "quyosh-panellari-ornatish__telegram-bot": {
    intro: "Quyosh panellari o'rnatish xizmati — uy yoki korxonaga quyosh energiyasi tizimini o'rnatish bo'yicha xizmat ko'rsatadigan biznes. Toshkentdagi quyosh panellari o'rnatish kompaniyalari uchun FRONTIX yangi murojaatlarni yig'uvchi va mijozga hisobot yuboruvchi Telegram bot yaratadi.",
    bridge: "Yangi buyurtmalar turli manbalardan (qo'ng'iroq, ijtimoiy tarmoq) kelib, ba'zilari javobsiz qolib ketishi o'rniga, bot barcha murojaatlarni bitta joyga yig'ib, har bir mijozga manzil, tom turi va byudjet haqida savollar berib, ma'lumotni jamoaga avtomatik yuboradi, shu orqali hech bir murojaat e'tiborsiz qolmaydi.",
    faq: [
      { question: "Bot orqali o'rnatilgan panelning ishlab chiqarish ko'rsatkichini mijozga yuborish mumkinmi?", answer: "Ha, o'rnatishdan keyin panel tizimidan olingan ma'lumotlar asosida bot mijozga oylik yoki haftalik ishlab chiqarilgan energiya va tejalgan xarajat hisobotini yuborishi mumkin." },
      { question: "Bot orqali subsidiya yoki lizing bo'yicha dastlabki maslahat olish mumkinmi?", answer: "Ha, mijoz botga savol yozganda, bot umumiy shartlar haqida qisqa ma'lumot beradi va aniq hisob-kitob uchun mutaxassisga ulaydi." },
    ],
  },
  "quyosh-panellari-ornatish__business-automation": {
    intro: "Quyosh panellari o'rnatish xizmati — uy yoki obyektlarga quyosh energiyasi tizimlarini loyihalash va o'rnatish bo'yicha xizmat. Toshkentdagi quyosh panellari o'rnatish kompaniyalari uchun FRONTIX barcha murojaatlar va loyihalarni boshqaruvchi CRM avtomatlashtirish tizimini joriy qiladi.",
    bridge: "Yangi murojaatlar turli manbalardan kelib, bitta joyda yig'ilmagani sababli ba'zilari javobsiz qolishi o'rniga, CRM barcha murojaatlarni (qo'ng'iroq, sayt, ijtimoiy tarmoq) bitta ro'yxatga yig'adi va har biriga mas'ul menejer tayinlab, loyiha bosqichini (o'lchov, hisob-kitob, o'rnatish) kuzatib boradi.",
    faq: [
      { question: "CRM orqali o'rnatilgan tizimlarning kafolat muddatini kuzatish mumkinmi?", answer: "Ha, har bir mijoz kartochkasida o'rnatilgan sana va kafolat muddati saqlanadi, muddat yaqinlashganda tizim avtomatik eslatma beradi." },
      { question: "CRM mijozga tejalgan xarajat bo'yicha davriy hisobot tayyorlashga yordam beradimi?", answer: "Ha, panel ishlab chiqargan energiya ma'lumotlari kiritilsa, tizim mijoz uchun oylik tejash hisobotini avtomatik shakllantiradi, bu tavsiya berish ehtimolini oshiradi." },
    ],
  },
};

export function getSolutionKey(industrySlug: string, serviceSlug: string): string {
  return `${industrySlug}__${serviceSlug}`;
}

export function getSolution(industrySlug: string, serviceSlug: string): SolutionContent | undefined {
  return solutions[getSolutionKey(industrySlug, serviceSlug)];
}
