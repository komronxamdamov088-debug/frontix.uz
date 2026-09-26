// Blog post slugs (/blog/:slug, in every language). Plain data so both prerender.mjs and
// generate-sitemap.mjs (run via plain `node`, no TS loader) can import it
// without duplicating the list twice. Keep in sync with the `blogPosts` array
// in src/data/blog.ts.
export const BLOG_SLUGS = [
  "qr-menyu-nima-va-qanday-ishlaydi",
  "telegram-bot-orqali-mijozlar-bilan-ishlash",
  "kichik-biznes-uchun-veb-sayt-kerakmi",
];

export const BLOG_ROUTES = BLOG_SLUGS.map((slug) => `/blog/${slug}`);
