import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check, Quote } from "lucide-react";
import { Seo, breadcrumbJsonLd } from "@/components/Seo";
import { SITE } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { getProject } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";
import NotFound from "@/pages/NotFound";
import type { Lang } from "@/i18n/translations";

// Case-study content itself (src/data/projects.ts) is uz-only until real,
// client-approved projects exist; only the page chrome is translated.
const COPY: Record<Lang, { problem: string; solution: string; cta: string; keywords: string }> = {
  uz: { problem: "Muammo", solution: "Yechim", cta: "Shunga o'xshash loyiha kerakmi?", keywords: "FRONTIX loyiha, case study" },
  ru: { problem: "Проблема", solution: "Решение", cta: "Нужен похожий проект?", keywords: "проект FRONTIX, кейс" },
  en: { problem: "Problem", solution: "Solution", cta: "Need a similar project?", keywords: "FRONTIX project, case study" },
};

export default function ProjectPage() {
  const { slug = "" } = useParams();
  const { t, lang } = useLanguage();

  const project = getProject(slug);
  if (!project) return <NotFound />;

  const copy = COPY[lang];
  const path = `/loyihalar/${project.slug}`;
  const serviceText = t.services[project.service];
  const keywords = `${project.title}, ${project.industry}, ${serviceText.title}, ${copy.keywords}`;

  const jsonLd = [
    breadcrumbJsonLd(
      [
        { name: t.nav.home, path: "/" },
        { name: t.nav.projects, path: "/loyihalar" },
        { name: project.title, path },
      ],
      lang,
    ),
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: project.title,
      description: project.summary,
      about: serviceText.title,
      dateCreated: project.completedDate,
      creator: { "@type": "Organization", name: SITE.name, url: SITE.url },
      ...(project.clientWebsite ? { url: project.clientWebsite } : {}),
    },
    ...(project.testimonial
      ? [
          {
            "@context": "https://schema.org",
            "@type": "Review",
            itemReviewed: { "@type": "Organization", name: SITE.name, url: SITE.url },
            reviewBody: project.testimonial.quote,
            author: { "@type": "Person", name: project.testimonial.author },
          },
        ]
      : []),
  ];

  return (
    <>
      <Seo title={project.title} description={project.summary} keywords={keywords} path={path} jsonLd={jsonLd} />

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
              {project.industry}
            </span>
            <h1 className="text-4xl font-semibold leading-[1.1] text-balance sm:text-5xl md:text-6xl">
              {project.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink/60 dark:text-paper/60 text-balance">
              {project.summary}
            </p>
            {project.clientWebsite && (
              <a
                href={project.clientWebsite}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand-500 hover:underline"
              >
                {project.clientName}
                <ArrowUpRight size={14} />
              </a>
            )}
          </motion.div>
        </Container>
      </section>

      {project.results.length > 0 && (
        <section className="pb-16">
          <Container>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {project.results.map((result) => (
                <Reveal key={result.label}>
                  <div className="rounded-2xl border border-brand-500/20 bg-brand-500/[0.04] p-6 text-center">
                    <div className="text-3xl font-semibold text-brand-500">{result.metric}</div>
                    <div className="mt-1.5 text-sm text-ink/60 dark:text-paper/60">{result.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="pb-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-[2rem] border border-ink/10 dark:border-white/10 bg-paper dark:bg-white/[0.02] p-8 shadow-soft sm:p-10">
                <h2 className="text-xl font-semibold sm:text-2xl">{copy.problem}</h2>
                <p className="mt-4 text-sm leading-relaxed text-ink/65 dark:text-paper/65">{project.problem}</p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="h-full rounded-[2rem] border border-brand-500/20 bg-brand-500/[0.04] p-8 shadow-soft sm:p-10">
                <h2 className="text-xl font-semibold sm:text-2xl">{copy.solution}</h2>
                <p className="mt-4 text-sm leading-relaxed text-ink/65 dark:text-paper/65">{project.solution}</p>
                <div className="mt-6 flex items-center gap-2.5 rounded-xl bg-paper-2/60 dark:bg-white/[0.03] p-3 text-sm text-ink/70 dark:text-paper/70">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500/15 text-brand-500">
                    <Check size={12} strokeWidth={2.5} />
                  </span>
                  {serviceText.title}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {project.testimonial && (
        <section className="pb-20">
          <Container>
            <Reveal>
              <div className="mx-auto max-w-2xl rounded-[2rem] border border-ink/10 dark:border-white/10 bg-paper dark:bg-white/[0.02] p-8 shadow-soft sm:p-10">
                <Quote size={28} className="text-brand-500/50" />
                <p className="mt-5 text-lg leading-relaxed text-ink/75 dark:text-paper/75">
                  "{project.testimonial.quote}"
                </p>
                <div className="mt-6">
                  <div className="text-sm font-semibold">{project.testimonial.author}</div>
                  <div className="text-xs text-ink/50 dark:text-paper/50">{project.testimonial.role}</div>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>
      )}

      <section className="pb-20">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <ButtonLink to="/contact" size="lg">
                {copy.cta}
                <ArrowRight size={16} />
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
