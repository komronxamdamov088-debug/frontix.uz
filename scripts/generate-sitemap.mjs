// Generates public/sitemap.xml before the build, listing every page in every
// language (uz canonical + /ru + /en) with hreflang alternates so search
// engines can tell they're translations of the same page, not duplicates.
// Keep PAGES/LANG_PREFIXES in sync with src/App.tsx and scripts/prerender.mjs.
import { writeFileSync } from "node:fs";
import { join } from "node:path";

const SITE_URL = "https://frontix-uz.vercel.app";
const PAGES = [
  { path: "/", priority: "1.0" },
  { path: "/services", priority: "0.9" },
  { path: "/team", priority: "0.8" },
  { path: "/partners", priority: "0.7" },
  { path: "/about", priority: "0.7" },
  { path: "/contact", priority: "0.8" },
];
const LANGS = ["uz", "ru", "en"];
const LANG_PREFIXES = { uz: "", ru: "/ru", en: "/en" };

function localize(lang, path) {
  const suffix = path === "/" ? "" : path;
  return `${LANG_PREFIXES[lang]}${suffix}` || "/";
}

const today = new Date().toISOString().slice(0, 10);

const urlEntries = LANGS.flatMap((lang) =>
  PAGES.map((page) => {
    const loc = `${SITE_URL}${localize(lang, page.path)}`;
    const alternates = LANGS.map(
      (l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${SITE_URL}${localize(l, page.path)}" />`,
    ).join("\n");
    const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${localize("uz", page.path)}" />`;
    return `  <url>\n    <loc>${loc}</loc>\n${alternates}\n${xDefault}\n    <lastmod>${today}</lastmod>\n    <priority>${page.priority}</priority>\n  </url>`;
  }),
);

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urlEntries.join("\n")}\n</urlset>\n`;

writeFileSync(join(process.cwd(), "public", "sitemap.xml"), xml, "utf-8");
console.log(`[sitemap] wrote ${urlEntries.length} URLs to public/sitemap.xml`);
