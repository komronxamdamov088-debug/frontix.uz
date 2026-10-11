// Project case-study slugs (/loyihalar/:slug, in every language). Plain data so both
// prerender.mjs and generate-sitemap.mjs (run via plain `node`, no TS loader)
// can import it without duplicating the list twice. Keep in sync with the
// `projectData` array in src/data/projects.ts.
export const PROJECT_SLUGS = ["nurafshon-restoran-sayti", "qarzdaftar", "sportfit"];

export const PROJECT_ROUTES = PROJECT_SLUGS.map((slug) => `/loyihalar/${slug}`);
