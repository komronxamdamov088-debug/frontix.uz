import type { Lang } from "@/i18n/translations";

export const LANGS: Lang[] = ["uz", "ru", "en"];
export const DEFAULT_LANG: Lang = "uz";

const LANG_PREFIXES: Record<Lang, string> = { uz: "", ru: "/ru", en: "/en" };

export function getLangFromPathname(pathname: string): Lang {
  const first = pathname.split("/")[1];
  return first === "ru" || first === "en" ? first : DEFAULT_LANG;
}

export function stripLangPrefix(pathname: string): string {
  const lang = getLangFromPathname(pathname);
  if (lang === DEFAULT_LANG) return pathname || "/";
  const rest = pathname.slice(LANG_PREFIXES[lang].length);
  return rest === "" ? "/" : rest;
}

export function localizePath(lang: Lang, canonicalPath: string): string {
  const suffix = canonicalPath === "/" ? "" : canonicalPath;
  return `${LANG_PREFIXES[lang]}${suffix}` || "/";
}
