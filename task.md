# FRONTIX — Task holati

## Bajarildi

- [x] Loyiha skeleton (Vite + React + TS + Tailwind v4)
- [x] Dizayn tokenlari (qora/oq/ko'k brend rangi, logotipga moslab)
- [x] Layout: Navbar (mobil hamburger bilan), Footer, dark/light rejim
- [x] Bosh sahifa: Hero (vizual mockup bilan), Services preview, Why FRONTIX, Team preview, How We Work, Testimonials, CTA
- [x] Xizmatlar sahifasi (6 ta xizmat, har biriga alohida illyustratsiya, hover animatsiya)
- [x] SEO: meta/OG/robots.txt/sitemap.xml/JSON-LD/llms.txt
- [x] Framer Motion animatsiyalar (fade-in, slide-up, scroll reveal)
- [x] i18n: UZ/RU/EN — to'liq tarjima lug'ati va til almashtirgich
- [x] "Loyihalar" o'rniga "Jamoa" (Team) sahifasi — 2 founder, 8 developer, 1 admin, 1 designer, generativ avatar + bio
- [x] FRX — lokal AI yordamchi (chat widget, kattalashtirilgan, 3 tilda javob beradi, API key kerak emas)
- [x] Contact formasini Telegram botga ulaydigan `/api/contact.ts` (Vercel serverless funksiya, fallback bilan)
- [x] Aloqa sahifasida FAQ bo'limi
- [x] Biz haqimizda sahifasida kompaniya tarixi/bosqichlari (timeline) + texnologiyalar stack'i
- [x] Yakuniy `npm run build` / lint / route smoke test — barchasi toza o'tdi

## Foydalanuvchi tomonidan qilinishi kerak

- [ ] Loyihani Vercel'ga (yoki boshqa hostingga) joylash
- [ ] `@BotFather`dan Telegram bot token olish
- [ ] Botga `/start` yozib `chat_id` olish
- [ ] Vercel > Settings > Environment Variables: `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`
- [ ] `src/data/team.ts` — placeholder ismlarni haqiqiy xodimlar bilan almashtirish
- [ ] `src/data/site.ts` — telefon/email/Telegram/Instagram havolalarini haqiqiysiga almashtirish
- [ ] `og-image.png` rasmini `public/`ga qo'shish
