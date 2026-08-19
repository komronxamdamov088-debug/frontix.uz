# FRONTIX

FRONTIX — bizneslar uchun zamonaviy raqamli yechimlar (website, QR menyu, Telegram bot, onlayn buyurtma, business automation, custom software) yaratadigan IT kompaniyaning korporativ sayti. UZ/RU/EN tillarida, FRX AI yordamchisi bilan.

## Tech stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- React Router
- Framer Motion

## Ishga tushirish

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Loyiha tuzilishi

```
src/
  components/
    layout/     — Navbar, Footer, Layout, ScrollToTop
    sections/   — sahifa bo'limlari (Hero, CTA, xizmat/jamoa illyustratsiyalari va h.k.)
    ui/         — qayta ishlatiluvchi UI komponentlar (Button, Card, Reveal...)
    frx/        — FRX AI yordamchi widget (lokal, API key kerak emas)
  context/      — Theme (dark/light) va Language (UZ/RU/EN) holatlari
  i18n/         — translations.ts — barcha sayt matni uchta tilda
  data/         — statik kontent (services, team, site...)
  pages/        — Home, Services, Team, About, Contact, NotFound
api/
  contact.ts    — Vercel serverless funksiya: kontakt formasini Telegram botga yuboradi
```

## Kontakt formasini Telegram botga ulash

Forma `/api/contact` orqali to'g'ridan-to'g'ri sizning Telegram botingizga xabar yuboradi. Sozlash:

1. Loyihani [Vercel](https://vercel.com)ga joylang (`vercel` CLI yoki GitHub integratsiyasi orqali).
2. Telegram'da `@BotFather`ga yozib, yangi bot yarating va tokenini oling.
3. Botingizga `/start` deb yozing, so'ng `https://api.telegram.org/bot<TOKEN>/getUpdates` manzilini ochib `chat_id`ni toping (yoki `@userinfobot` orqali oling).
4. Vercel loyihasida **Settings → Environment Variables** bo'limiga qo'shing:
   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_CHAT_ID`
5. Qayta deploy qiling — forma endi botga to'g'ridan-to'g'ri yuboradi.

Environment variable'lar sozlanmagan bo'lsa (masalan lokal devda), forma avtomatik ravishda eski usulga — Telegram deep link ochishga qaytadi, shuning uchun sayt har doim ishlayveradi.

## Nashrdan oldin almashtirish kerak bo'lgan placeholder kontent

- `src/data/team.ts` — jamoa a'zolarining ismlari
- `src/data/site.ts` — telefon, email, Telegram, Instagram havolalari
- `public/og-image.png` — Open Graph rasmi (hozircha mavjud emas)
