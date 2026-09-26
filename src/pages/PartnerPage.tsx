import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Seo, breadcrumbJsonLd } from "@/components/Seo";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { getPartner, partners } from "@/data/partners";
import { useLanguage } from "@/context/LanguageContext";
import { localizePath } from "@/i18n/langRoutes";
import NotFound from "@/pages/NotFound";

const ease = [0.16, 1, 0.3, 1] as const;

export default function PartnerPage() {
  const { slug = "" } = useParams();
  const { t, lang } = useLanguage();

  const partner = getPartner(slug);
  if (!partner) return <NotFound />;

  const path = `/partners/${partner.slug}`;
  const withName = (text: string) => text.replaceAll("{name}", partner.name);
  const others = partners.filter((p) => p.slug !== partner.slug);

  const jsonLd = [
    breadcrumbJsonLd(
      [
        { name: t.nav.home, path: "/" },
        { name: t.nav.partners, path: "/partners" },
        { name: partner.name, path },
      ],
      lang,
    ),
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: partner.name,
      description: partner.description[lang],
      ...(partner.website ? { url: partner.website } : {}),
    },
  ];

  return (
    <>
      <Seo
        title={`${partner.name} — ${partner.tagline[lang]}`}
        description={partner.description[lang]}
        keywords={`${partner.name}, FRONTIX, ${t.nav.partners}`}
        path={path}
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div
          className="pointer-events-none absolute inset-0 text-ink/[0.05] dark:text-white/[0.05] [mask-image:linear-gradient(to_bottom,black,transparent)]"
          style={{
            backgroundImage:
              "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
          aria-hidden="true"
        />
        <Container className="relative">
          <Link
            to={localizePath(lang, "/partners")}
            className="group mb-10 inline-flex items-center gap-1.5 text-sm font-medium text-ink/55 transition-colors hover:text-ink dark:text-paper/55 dark:hover:text-paper"
          >
            <ArrowLeft size={15} className="transition-transform duration-300 group-hover:-translate-x-1" />
            {t.partners.backToAll}
          </Link>

          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
              className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-paper px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-600 shadow-soft dark:border-white/15 dark:bg-white/[0.04] dark:text-brand-300"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              {t.partners.badge}
            </motion.span>

            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease }}
              className="mt-8 flex h-32 w-32 items-center justify-center rounded-[2rem] border border-ink/[0.06] bg-white p-5 shadow-[0_20px_50px_-20px_rgba(5,5,6,0.25)] dark:border-white/10"
            >
              <img src={partner.logo} alt={`${partner.name} logo`} width={88} height={88} className="max-h-full max-w-full object-contain" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16, ease }}
            >
              <h1 className="mt-8 text-4xl font-semibold tracking-tight sm:text-5xl">{partner.name}</h1>
              <p className="mt-3 text-lg font-medium text-brand-500">{partner.tagline[lang]}</p>
              <p className="mt-6 text-base leading-relaxed text-ink/65 text-balance dark:text-paper/65 sm:text-lg">
                {partner.description[lang]}
              </p>
              {partner.website && (
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-medium text-white shadow-[0_12px_30px_-10px_var(--color-brand-500)] transition-colors hover:bg-brand-600"
                >
                  {t.partners.visitWebsite}
                  <ArrowUpRight size={16} />
                </a>
              )}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      {partner.stats && partner.stats.length > 0 && (
        <section className="pb-20">
          <Container className="max-w-5xl">
            <Reveal>
              <h2 className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-ink/50 dark:text-paper/50">
                {withName(t.partners.statsTitle)}
              </h2>
            </Reveal>
            <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {partner.stats.map((stat, i) => (
                <Reveal key={stat.value + i} delay={i * 0.06}>
                  <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-ink/[0.06] bg-paper px-4 py-8 text-center shadow-soft transition-transform duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-white/[0.03]">
                    <div className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">{stat.value}</div>
                    <div className="mt-2 text-sm text-ink/55 dark:text-paper/55">{stat.label[lang]}</div>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-5 text-center text-xs text-ink/45 dark:text-paper/45">{withName(t.partners.statsNote)}</p>
          </Container>
        </section>
      )}

      <Container className="max-w-5xl">
        {/* About */}
        <Reveal>
          <section className="pb-16 sm:pb-20">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{withName(t.partners.aboutTitle)}</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-ink/70 dark:text-paper/70 sm:text-lg">
              {partner.about[lang].map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        </Reveal>

        {/* Offerings */}
        <section className="pb-16 sm:pb-20">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{t.partners.offeringsTitle}</h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {partner.offerings.map((item, i) => (
              <Reveal key={item.title.en} delay={(i % 2) * 0.06}>
                <div className="group h-full rounded-3xl border border-ink/[0.06] bg-paper p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/30 dark:border-white/10 dark:bg-white/[0.03]">
                  <div className="flex items-center gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-sm font-semibold text-brand-600 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white dark:bg-brand-500/10 dark:text-brand-300">
                      {i + 1}
                    </span>
                    <h3 className="text-lg font-semibold tracking-tight">{item.title[lang]}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-ink/60 dark:text-paper/60 sm:text-base">
                    {item.description[lang]}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Partnership */}
        {partner.partnership && (
          <Reveal>
            <section className="pb-16 sm:pb-20">
              <div className="rounded-[2rem] border border-brand-500/20 bg-brand-500/[0.04] p-8 sm:p-10">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{t.partners.partnershipTitle}</h2>
                <div className="mt-5 space-y-4 text-base leading-relaxed text-ink/70 dark:text-paper/70 sm:text-lg">
                  {partner.partnership[lang].map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </section>
          </Reveal>
        )}

        {/* Other partners */}
        <section className="pb-24">
          <Reveal>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/50 dark:text-paper/50">
              {t.partners.otherPartners}
            </h2>
          </Reveal>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {others.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.05}>
                <Link
                  to={localizePath(lang, `/partners/${p.slug}`)}
                  className="group flex items-center gap-3 rounded-2xl border border-ink/[0.06] bg-paper p-3 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-500/30 dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white p-1.5 ring-1 ring-ink/[0.06]">
                    <img src={p.logo} alt={`${p.name} logo`} width={32} height={32} loading="lazy" className="max-h-full max-w-full object-contain" />
                  </span>
                  <span className="truncate text-sm font-medium">{p.name}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      </Container>

      <CTASection />
    </>
  );
}
