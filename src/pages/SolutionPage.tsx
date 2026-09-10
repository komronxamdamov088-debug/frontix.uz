import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { AlertTriangle, Check, ArrowRight, HelpCircle } from "lucide-react";
import { Seo, breadcrumbJsonLd } from "@/components/Seo";
import { SITE } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { Link } from "@/components/i18n/LocalizedLink";
import { services } from "@/data/services";
import { getIndustry, serviceLabelsUz } from "@/data/industries";
import { getSolution } from "@/data/solutions";
import { useLanguage } from "@/context/LanguageContext";
import NotFound from "@/pages/NotFound";

// Uzbek-only pilot: 6 industries x 3 services = 18 problem/solution pages at
// /yechimlar/:industry/:service. Content lives in src/data/industries.ts and
// src/data/solutions.ts — this component only renders it.
export default function SolutionPage() {
  const { industry: industrySlug = "", service: serviceSlug = "" } = useParams();
  const { t, lang } = useLanguage();

  const industry = getIndustry(industrySlug);
  const service = services.find((s) => s.slug === serviceSlug);
  const solution = industry && service ? getSolution(industry.slug, service.slug) : undefined;

  if (!industry || !service || !solution || !industry.relevantServices.includes(service.slug)) {
    return <NotFound />;
  }

  const serviceText = t.services[service.slug];
  const serviceLabel = serviceLabelsUz[service.slug];
  const h1 = `${industry.name} uchun ${serviceLabel}`;
  const metaTitle = `${industry.shortName} uchun ${serviceLabel}`;
  const metaDescription = solution.intro.split(". ")[0] + ".";
  const path = `/yechimlar/${industry.slug}/${service.slug}`;
  const otherServices = industry.relevantServices.filter((s) => s !== service.slug);

  const jsonLd = [
    breadcrumbJsonLd(
      [
        { name: t.nav.home, path: "/" },
        { name: "Yechimlar", path: "/yechimlar" },
        { name: h1, path },
      ],
      lang,
    ),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: h1,
      description: metaDescription,
      provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
      areaServed: "UZ",
      url: `${SITE.url}${path}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: solution.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ];

  return (
    <>
      <Seo title={metaTitle} description={metaDescription} path={path} jsonLd={jsonLd} />

      <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-20">
        <div className="grain-gradient pointer-events-none absolute inset-0" aria-hidden="true" />
        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-ink/10 dark:border-white/15 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-ink/60 dark:text-paper/60">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              {industry.shortName}
            </span>
            <h1 className="text-4xl font-semibold leading-[1.1] text-balance sm:text-5xl md:text-6xl">{h1}</h1>
            <p className="mt-5 text-lg leading-relaxed text-ink/60 dark:text-paper/60 text-balance">{solution.intro}</p>
            <ButtonLink to="/contact" size="lg" className="mt-8">
              Buyurtma berish
              <ArrowRight size={16} />
            </ButtonLink>
          </motion.div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-[2rem] border border-ink/10 dark:border-white/10 bg-paper dark:bg-white/[0.02] p-8 shadow-soft sm:p-10">
                <h2 className="text-xl font-semibold sm:text-2xl">Bugungi muammo</h2>
                <ul className="mt-6 space-y-4">
                  {industry.problems.map((problem) => (
                    <li
                      key={problem}
                      className="flex items-start gap-3 text-sm leading-relaxed text-ink/65 dark:text-paper/65"
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-500">
                        <AlertTriangle size={13} strokeWidth={2} />
                      </span>
                      {problem}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="h-full rounded-[2rem] border border-brand-500/20 bg-brand-500/[0.04] p-8 shadow-soft sm:p-10">
                <h2 className="text-xl font-semibold sm:text-2xl">FRONTIX yechimi</h2>
                <p className="mt-4 text-sm leading-relaxed text-ink/65 dark:text-paper/65">{solution.bridge}</p>
                <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {serviceText.features.map((feature) => (
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
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <Reveal>
            <h2 className="text-2xl font-semibold sm:text-3xl">Ko'p so'raladigan savollar</h2>
          </Reveal>
          <div className="mt-8 space-y-4">
            {solution.faq.map((item, i) => (
              <Reveal key={item.question} delay={i * 0.06}>
                <div className="rounded-2xl border border-ink/10 dark:border-white/10 bg-paper dark:bg-white/[0.02] p-6">
                  <h3 className="flex items-start gap-2.5 text-base font-semibold">
                    <HelpCircle size={18} className="mt-0.5 shrink-0 text-brand-500" />
                    {item.question}
                  </h3>
                  <p className="mt-3 pl-[26px] text-sm leading-relaxed text-ink/60 dark:text-paper/60">{item.answer}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {otherServices.length > 0 && (
            <Reveal delay={0.1}>
              <div className="mt-12 rounded-2xl border border-ink/10 dark:border-white/10 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink/40 dark:text-paper/40">
                  {industry.shortName} uchun boshqa yechimlar
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {otherServices.map((s) => (
                    <Link
                      key={s}
                      to={`/yechimlar/${industry.slug}/${s}`}
                      className="rounded-full border border-ink/10 dark:border-white/15 px-4 py-2 text-sm text-ink/70 dark:text-paper/70 hover:border-brand-500/40 hover:text-brand-500 transition-colors"
                    >
                      {serviceLabelsUz[s]}
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>
          )}
        </Container>
      </section>

      <CTASection />
    </>
  );
}
