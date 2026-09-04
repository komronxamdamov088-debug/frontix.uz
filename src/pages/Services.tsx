import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Seo, breadcrumbJsonLd } from "@/components/Seo";
import { SITE } from "@/data/site";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { serviceMockups } from "@/components/sections/services/ServiceMockups";
import { services } from "@/data/services";
import { useLanguage } from "@/context/LanguageContext";
import { localizePath } from "@/i18n/langRoutes";

export default function Services() {
  const { t, lang } = useLanguage();

  const servicesJsonLd = services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: t.services[service.slug].title,
    description: t.services[service.slug].description,
    provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
    areaServed: "UZ",
    url: `${SITE.url}${localizePath(lang, "/services")}`,
  }));

  return (
    <>
      <Seo
        title={t.nav.services}
        description={t.servicesPage.description}
        path="/services"
        jsonLd={[
          breadcrumbJsonLd(
            [
              { name: t.nav.home, path: "/" },
              { name: t.nav.services, path: "/services" },
            ],
            lang,
          ),
          ...servicesJsonLd,
        ]}
      />
      <PageHero
        eyebrow={t.servicesPage.eyebrow}
        title={t.servicesPage.title}
        description={t.servicesPage.description}
      />

      <section className="pb-24 sm:pb-32">
        <Container>
          <div className="flex flex-col gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              const text = t.services[service.slug];
              const reversed = i % 2 === 1;
              const Mockup = serviceMockups[service.slug];
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4 }}
                  className="group grid grid-cols-1 gap-8 rounded-[2rem] border border-ink/10 dark:border-white/10 bg-paper dark:bg-white/[0.02] p-8 shadow-soft transition-colors duration-300 hover:border-brand-500/40 sm:p-10 lg:grid-cols-2 lg:gap-4"
                >
                  <div className={reversed ? "lg:order-2" : ""}>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-500 transition-transform duration-300 group-hover:scale-110">
                      <Icon size={26} strokeWidth={1.75} />
                    </div>
                    <h2 className="mt-6 text-2xl font-semibold sm:text-3xl">{text.title}</h2>
                    <p className="mt-4 text-base leading-relaxed text-ink/60 dark:text-paper/60">
                      {text.description}
                    </p>
                    <ButtonLink to="/contact" variant="secondary" className="mt-7">
                      {t.servicesPage.orderCta}
                      <ArrowRight size={16} />
                    </ButtonLink>
                  </div>

                  <div className={reversed ? "lg:order-1" : ""}>
                    <Mockup />
                    <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      {text.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5 rounded-xl bg-paper-2/60 dark:bg-white/[0.03] p-3 text-sm text-ink/70 dark:text-paper/70"
                        >
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500/15 text-brand-500">
                            <Check size={12} strokeWidth={2.5} />
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
