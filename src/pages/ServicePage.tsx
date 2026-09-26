import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { AlertTriangle, ArrowRight, Check, HelpCircle, Sparkles } from "lucide-react";
import { Seo, breadcrumbJsonLd } from "@/components/Seo";
import { SITE } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { serviceMockups } from "@/components/sections/services/ServiceMockups";
import { Link } from "@/components/i18n/LocalizedLink";
import { services } from "@/data/services";
import { serviceDetails } from "@/data/serviceDetails";
import { industries, getIndustryText } from "@/data/industries";
import { useLanguage } from "@/context/LanguageContext";
import { localizePath } from "@/i18n/langRoutes";
import type { Lang } from "@/i18n/translations";
import NotFound from "@/pages/NotFound";

const COPY: Record<
  Lang,
  { whoFor: string; benefits: string; problems: string; industries: string; industriesAll: string; faq: string; related: string; order: string; allServices: string; forIndustry: string }
> = {
  uz: {
    whoFor: "Kimlar uchun",
    benefits: "Afzalliklari",
    problems: "Qaysi muammolarni hal qiladi",
    industries: "Sohalar bo'yicha yechimlar",
    industriesAll: "Barcha sohalar",
    faq: "Ko'p beriladigan savollar",
    related: "Boshqa xizmatlar",
    order: "Bepul konsultatsiya olish",
    allServices: "Barcha xizmatlar",
    forIndustry: "{name} uchun",
  },
  ru: {
    whoFor: "Для кого",
    benefits: "Преимущества",
    problems: "Какие проблемы решает",
    industries: "Решения по отраслям",
    industriesAll: "Все отрасли",
    faq: "Частые вопросы",
    related: "Другие услуги",
    order: "Получить бесплатную консультацию",
    allServices: "Все услуги",
    forIndustry: "Для {name}",
  },
  en: {
    whoFor: "Who it's for",
    benefits: "Benefits",
    problems: "Problems it solves",
    industries: "Solutions by industry",
    industriesAll: "All industries",
    faq: "Frequently asked questions",
    related: "Other services",
    order: "Get a free consultation",
    allServices: "All services",
    forIndustry: "For {name}",
  },
};

const MAX_INDUSTRY_LINKS = 12;

// Dedicated service pages at /services/:slug (plus /ru, /en). Content lives
// in src/data/serviceDetails.ts; industry links come from the solution pages
// (src/data/industries.ts) that pair an industry with this service.
export default function ServicePage() {
  const { slug = "" } = useParams();
  const { t, lang } = useLanguage();

  const service = services.find((s) => s.slug === slug);
  if (!service) return <NotFound />;

  const copy = COPY[lang];
  const detail = serviceDetails[service.slug][lang];
  const serviceText = t.services[service.slug];
  const Icon = service.icon;
  const Mockup = serviceMockups[service.slug];
  const path = `/services/${service.slug}`;
  const relatedIndustries = industries.filter((i) => i.relevantServices.includes(service.slug));
  const otherServices = services.filter((s) => s.slug !== service.slug);

  const jsonLd = [
    breadcrumbJsonLd(
      [
        { name: t.nav.home, path: "/" },
        { name: t.nav.services, path: "/services" },
        { name: serviceText.title, path },
      ],
      lang,
    ),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: detail.h1,
      serviceType: serviceText.title,
      description: detail.metaDescription,
      url: `${SITE.url}${localizePath(lang, path)}`,
      provider: {
        "@type": "Organization",
        name: SITE.name,
        url: SITE.url,
        address: { "@type": "PostalAddress", addressLocality: "Tashkent", addressCountry: "UZ" },
      },
      areaServed: [
        { "@type": "City", name: "Tashkent" },
        { "@type": "Country", name: "Uzbekistan" },
      ],
      inLanguage: lang,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: detail.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ];

  return (
    <>
      <Seo title={detail.seoTitle} description={detail.metaDescription} keywords={detail.keywords} path={path} jsonLd={jsonLd} />

      <section className="relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-20">
        <div className="grain-gradient pointer-events-none absolute inset-0" aria-hidden="true" />
        <Container className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              to="/services"
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-ink/10 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-ink/60 transition-colors hover:text-brand-500 dark:border-white/15 dark:text-paper/60"
            >
              <Icon size={13} className="text-brand-500" />
              {serviceText.title}
            </Link>
            <h1 className="text-4xl font-semibold leading-[1.1] text-balance sm:text-5xl">{detail.h1}</h1>
            <p className="mt-5 text-lg leading-relaxed text-ink/60 dark:text-paper/60">{detail.intro}</p>
            <ButtonLink to="/contact" size="lg" className="mt-8">
              {copy.order}
              <ArrowRight size={16} />
            </ButtonLink>
          </motion.div>
          <Reveal delay={0.1}>
            <Mockup />
          </Reveal>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-[2rem] border border-ink/10 bg-paper p-8 shadow-soft dark:border-white/10 dark:bg-white/[0.02] sm:p-10">
                <h2 className="text-xl font-semibold sm:text-2xl">{copy.whoFor}</h2>
                <ul className="mt-6 space-y-3.5">
                  {detail.whoFor.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-ink/70 dark:text-paper/70 sm:text-[15px]">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500/15 text-brand-500">
                        <Check size={12} strokeWidth={2.5} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="h-full rounded-[2rem] border border-ink/10 bg-paper p-8 shadow-soft dark:border-white/10 dark:bg-white/[0.02] sm:p-10">
                <h2 className="text-xl font-semibold sm:text-2xl">{copy.problems}</h2>
                <ul className="mt-6 space-y-3.5">
                  {detail.problems.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-ink/70 dark:text-paper/70 sm:text-[15px]">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-500">
                        <AlertTriangle size={11} strokeWidth={2.25} />
                      </span>
                      {item}
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
            <h2 className="text-2xl font-semibold sm:text-3xl">{copy.benefits}</h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {detail.benefits.map((benefit, i) => (
              <Reveal key={benefit.title} delay={i * 0.06}>
                <div className="h-full rounded-3xl border border-ink/10 bg-paper p-6 dark:border-white/10 dark:bg-white/[0.02]">
                  <h3 className="text-base font-semibold">{benefit.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink/60 dark:text-paper/60">{benefit.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {detail.extra && (
            <Reveal delay={0.1}>
              <div className="mt-6 flex flex-col gap-4 rounded-[2rem] border border-brand-500/20 bg-brand-500/[0.04] p-8 sm:flex-row sm:p-10">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-500">
                  <Sparkles size={20} />
                </span>
                <div>
                  <h2 className="text-xl font-semibold sm:text-2xl">{detail.extra.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65 dark:text-paper/65 sm:text-[15px]">{detail.extra.text}</p>
                </div>
              </div>
            </Reveal>
          )}
        </Container>
      </section>

      {relatedIndustries.length > 0 && (
        <section className="pb-20">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <Reveal>
                <h2 className="text-2xl font-semibold sm:text-3xl">{copy.industries}</h2>
              </Reveal>
              <Link to="/yechimlar" className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-500 hover:underline">
                {copy.industriesAll}
                <ArrowRight size={14} />
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {relatedIndustries.slice(0, MAX_INDUSTRY_LINKS).map((industry) => (
                <Link
                  key={industry.slug}
                  to={`/yechimlar/${industry.slug}/${service.slug}`}
                  className="rounded-full border border-ink/10 px-4 py-2 text-sm text-ink/70 transition-colors hover:border-brand-500/40 hover:text-brand-500 dark:border-white/15 dark:text-paper/70"
                >
                  {copy.forIndustry.replace("{name}", getIndustryText(industry, lang).nameFor)}
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="pb-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <h2 className="text-2xl font-semibold sm:text-3xl">{copy.faq}</h2>
            </Reveal>
            <div className="mt-8 space-y-4">
              {detail.faq.map((item, i) => (
                <Reveal key={item.question} delay={i * 0.06}>
                  <div className="rounded-2xl border border-ink/10 bg-paper p-6 dark:border-white/10 dark:bg-white/[0.02]">
                    <h3 className="flex items-start gap-2.5 text-base font-semibold">
                      <HelpCircle size={18} className="mt-0.5 shrink-0 text-brand-500" />
                      {item.question}
                    </h3>
                    <p className="mt-3 pl-[26px] text-sm leading-relaxed text-ink/60 dark:text-paper/60">{item.answer}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <Reveal>
              <h2 className="text-2xl font-semibold sm:text-3xl">{copy.related}</h2>
            </Reveal>
            <Link to="/services" className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-500 hover:underline">
              {copy.allServices}
              <ArrowRight size={14} />
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {otherServices.map((other) => {
              const OtherIcon = other.icon;
              const otherText = t.services[other.slug];
              return (
                <Link
                  key={other.slug}
                  to={`/services/${other.slug}`}
                  className="group flex flex-col rounded-3xl border border-ink/10 bg-paper p-5 transition-colors hover:border-brand-500/40 dark:border-white/10 dark:bg-white/[0.02]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
                    <OtherIcon size={18} />
                  </span>
                  <span className="mt-4 text-sm font-semibold group-hover:text-brand-500">{otherText.title}</span>
                  <span className="mt-1.5 text-xs leading-relaxed text-ink/55 dark:text-paper/55">{otherText.shortDescription}</span>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
