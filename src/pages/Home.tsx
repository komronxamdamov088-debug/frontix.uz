import { Seo } from "@/components/Seo";
import { Hero } from "@/components/sections/home/Hero";
import { ServicesMarquee } from "@/components/sections/home/ServicesMarquee";
import { ServicesPreview } from "@/components/sections/home/ServicesPreview";
import { ProductsShowcase } from "@/components/sections/home/ProductsShowcase";
import { WhyFrontix } from "@/components/sections/home/WhyFrontix";
import { TeamPreview } from "@/components/sections/home/TeamPreview";
import { HowWeWork } from "@/components/sections/home/HowWeWork";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { CTASection } from "@/components/sections/CTASection";
import { FaqSection, faqJsonLd } from "@/components/sections/FaqSection";
import { useLanguage } from "@/context/LanguageContext";
import { SITE } from "@/data/site";
import { products } from "@/data/products";
import type { Lang } from "@/i18n/translations";

/** FRONTIX's own software products as schema.org SoftwareApplication, so search and AI engines can cite them. */
function productsJsonLd(lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "FRONTIX products",
    itemListElement: products
      .filter((p) => p.id !== "sportfit")
      .map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "SoftwareApplication",
          name: p.name,
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description: p.description[lang],
          featureList: p.features[lang],
          ...(p.website ? { url: p.website } : {}),
          author: { "@type": "Organization", name: SITE.name, url: SITE.url },
        },
      })),
  };
}

export default function Home() {
  const { t, lang } = useLanguage();

  return (
    <>
      <Seo title={t.meta.title} description={t.meta.description} keywords={t.meta.keywords} path="/" jsonLd={[faqJsonLd(lang), productsJsonLd(lang)]} />
      <Hero />
      <ServicesMarquee />
      <ServicesPreview />
      <ProductsShowcase />
      <WhyFrontix />
      <TeamPreview />
      <HowWeWork />
      <Testimonials />
      <FaqSection />
      <CTASection />
    </>
  );
}
