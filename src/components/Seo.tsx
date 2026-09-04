import { useEffect } from "react";
import { SITE } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";
import { LANGS, localizePath } from "@/i18n/langRoutes";
import type { Lang } from "@/i18n/translations";

const OG_LOCALE: Record<Lang, string> = { uz: "uz_UZ", ru: "ru_RU", en: "en_US" };

interface SeoProps {
  title: string;
  description: string;
  path?: string;
  jsonLd?: object | object[];
}

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function Seo({ title, description, path = "/", jsonLd }: SeoProps) {
  const { lang } = useLanguage();

  useEffect(() => {
    const fullTitle = title.includes(SITE.name) ? title : `${title} | ${SITE.name}`;
    document.title = fullTitle;

    const url = `${SITE.url}${localizePath(lang, path)}`;

    setMeta("name", "description", description);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", url);
    setMeta("property", "og:site_name", SITE.name);
    setMeta("property", "og:image", `${SITE.url}/og-image.png`);
    setMeta("property", "og:locale", OG_LOCALE[lang]);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);
  }, [title, description, path, lang]);

  // hreflang alternates so search engines know the uz/ru/en URLs are the same
  // page in different languages, not duplicate content.
  useEffect(() => {
    // Defensively clear any alternate-link tags already present (e.g. baked
    // into a static/prerendered shell) before adding this page's own set, so
    // navigating between documents never accumulates duplicates.
    document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove());

    const nodes: HTMLLinkElement[] = [];
    const addAlternate = (hreflang: string, href: string) => {
      const link = document.createElement("link");
      link.setAttribute("rel", "alternate");
      link.setAttribute("hreflang", hreflang);
      link.setAttribute("href", href);
      document.head.appendChild(link);
      nodes.push(link);
    };
    for (const l of LANGS) addAlternate(l, `${SITE.url}${localizePath(l, path)}`);
    addAlternate("x-default", `${SITE.url}${localizePath("uz", path)}`);

    return () => {
      for (const node of nodes) node.remove();
    };
  }, [path]);

  useEffect(() => {
    document.head.querySelectorAll('script[data-page-json-ld="true"]').forEach((el) => el.remove());

    const nodes: HTMLScriptElement[] = [];
    const entries = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
    for (const entry of entries) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.pageJsonLd = "true";
      script.textContent = JSON.stringify(entry);
      document.head.appendChild(script);
      nodes.push(script);
    }
    return () => {
      for (const node of nodes) node.remove();
    };
  }, [jsonLd]);

  return null;
}

export function breadcrumbJsonLd(items: { name: string; path: string }[], lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${localizePath(lang, item.path)}`,
    })),
  };
}
