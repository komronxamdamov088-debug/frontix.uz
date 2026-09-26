import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, HelpCircle } from "lucide-react";
import { Seo, breadcrumbJsonLd } from "@/components/Seo";
import { SITE } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { getBlogPost } from "@/data/blog";
import { useLanguage } from "@/context/LanguageContext";
import NotFound from "@/pages/NotFound";
import type { Lang } from "@/i18n/translations";

const COPY: Record<Lang, { readTime: string; faq: string; needService: string; order: string }> = {
  uz: { readTime: "{n} daqiqa o'qish", faq: "Ko'p so'raladigan savollar", needService: "{service} kerakmi?", order: "Buyurtma berish" },
  ru: { readTime: "{n} мин чтения", faq: "Частые вопросы", needService: "Нужна услуга «{service}»?", order: "Заказать" },
  en: { readTime: "{n} min read", faq: "Frequently asked questions", needService: "Need {service}?", order: "Order now" },
};

export default function BlogPost() {
  const { slug = "" } = useParams();
  const { t, lang } = useLanguage();

  const post = getBlogPost(slug, lang);
  const copy = COPY[lang];
  if (!post) return <NotFound />;

  const path = `/blog/${post.slug}`;
  const relatedServiceText = t.services[post.relatedService];
  const keywords = `${post.category}, ${post.title}, ${relatedServiceText.title}, FRONTIX blog`;

  const jsonLd = [
    breadcrumbJsonLd(
      [
        { name: t.nav.home, path: "/" },
        { name: t.nav.blog, path: "/blog" },
        { name: post.title, path },
      ],
      lang,
    ),
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.publishDate,
      dateModified: post.publishDate,
      author: { "@type": "Organization", name: SITE.name, url: SITE.url },
      publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
      mainEntityOfPage: `${SITE.url}${path}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: post.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ];

  return (
    <>
      <Seo title={post.title} description={post.excerpt} keywords={keywords} path={path} jsonLd={jsonLd} />

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
              {post.category}
            </span>
            <h1 className="text-4xl font-semibold leading-[1.1] text-balance sm:text-5xl md:text-6xl">
              {post.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink/60 dark:text-paper/60 text-balance">{post.excerpt}</p>
            <div className="mt-6 inline-flex items-center gap-1.5 text-sm text-ink/45 dark:text-paper/45">
              <Clock size={14} />
              {copy.readTime.replace("{n}", String(post.readMinutes))}
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <div className="mx-auto max-w-2xl space-y-10">
            {post.sections.map((section, i) => (
              <Reveal key={section.heading} delay={i * 0.05}>
                <h2 className="text-xl font-semibold sm:text-2xl">{section.heading}</h2>
                <p className="mt-4 text-[15px] leading-relaxed text-ink/70 dark:text-paper/70">{section.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="mx-auto max-w-2xl">
            <Reveal>
              <h2 className="text-2xl font-semibold sm:text-3xl">{copy.faq}</h2>
            </Reveal>
            <div className="mt-8 space-y-4">
              {post.faq.map((item, i) => (
                <Reveal key={item.question} delay={i * 0.06}>
                  <div className="rounded-2xl border border-ink/10 dark:border-white/10 bg-paper dark:bg-white/[0.02] p-6">
                    <h3 className="flex items-start gap-2.5 text-base font-semibold">
                      <HelpCircle size={18} className="mt-0.5 shrink-0 text-brand-500" />
                      {item.question}
                    </h3>
                    <p className="mt-3 pl-[26px] text-sm leading-relaxed text-ink/60 dark:text-paper/60">
                      {item.answer}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <div className="mt-12 rounded-[2rem] border border-brand-500/20 bg-brand-500/[0.04] p-8 text-center sm:p-10">
                <h3 className="text-lg font-semibold sm:text-xl">{copy.needService.replace("{service}", relatedServiceText.title)}</h3>
                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink/65 dark:text-paper/65">
                  {relatedServiceText.shortDescription}
                </p>
                <ButtonLink to="/contact" size="lg" className="mt-6">
                  {copy.order}
                  <ArrowRight size={16} />
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
