import { useEffect } from "react";
import { SITE } from "@/data/site";

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
  useEffect(() => {
    const fullTitle = title.includes(SITE.name) ? title : `${title} | ${SITE.name}`;
    document.title = fullTitle;

    setMeta("name", "description", description);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", `${SITE.url}${path}`);
    setMeta("property", "og:site_name", SITE.name);
    setMeta("property", "og:image", `${SITE.url}/og-image.png`);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${SITE.url}${path}`);
  }, [title, description, path]);

  useEffect(() => {
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

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}
