// Service detail slugs (/services/:slug, served in every language). Plain data
// so prerender.mjs and generate-sitemap.mjs (run via plain `node`, no TS
// loader) can import it. Keep in sync with src/data/services.ts.
export const SERVICE_SLUGS = [
  "website-development",
  "qr-menu",
  "telegram-bot",
  "online-ordering",
  "business-automation",
  "custom-software",
];

export const SERVICE_PATHS = SERVICE_SLUGS.map((slug) => `/services/${slug}`);
