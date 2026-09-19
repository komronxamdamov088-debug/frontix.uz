import { useState } from "react";
import { Seo, breadcrumbJsonLd } from "@/components/Seo";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { PartnerCard } from "@/components/ui/PartnerCard";
import { CTASection } from "@/components/sections/CTASection";
import { partners } from "@/data/partners";
import { useLanguage } from "@/context/LanguageContext";

export default function Partners() {
  const { t, lang } = useLanguage();
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <>
      <Seo
        title={t.seo.partners.title}
        description={t.seo.partners.description}
        keywords={t.seo.partners.keywords}
        path="/partners"
        jsonLd={breadcrumbJsonLd(
          [
            { name: t.nav.home, path: "/" },
            { name: t.nav.partners, path: "/partners" },
          ],
          lang,
        )}
      />
      <PageHero
        eyebrow={t.partners.pageEyebrow}
        title={t.partners.pageTitle}
        description={t.partners.pageDescription}
      />

      <section className="pb-24 sm:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" style={{ perspective: 1200 }}>
            {partners.map((partner, i) => (
              <PartnerCard
                key={partner.id}
                partner={partner}
                index={i}
                flipped={openId === partner.id}
                onToggle={() => setOpenId((current) => (current === partner.id ? null : partner.id))}
              />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
