// Partner detail slugs (/partners/:slug, served in every language). Plain data
// so prerender.mjs and generate-sitemap.mjs (run via plain `node`, no TS
// loader) can import it. Keep in sync with the `slug` fields in
// src/data/partners.ts.
export const PARTNER_SLUGS = ["tezcode", "coremed", "ai-solution", "mars-it-school"];

export const PARTNER_PATHS = PARTNER_SLUGS.map((slug) => `/partners/${slug}`);
