// Project case-study slugs (/loyihalar/:slug, in every language). Plain data so both
// prerender.mjs and generate-sitemap.mjs (run via plain `node`, no TS loader)
// can import it without duplicating the list twice. Keep in sync with the
// `projects` array in src/data/projects.ts — intentionally empty until real,
// client-approved case studies are added there.
export const PROJECT_SLUGS = [];

export const PROJECT_ROUTES = PROJECT_SLUGS.map((slug) => `/loyihalar/${slug}`);
