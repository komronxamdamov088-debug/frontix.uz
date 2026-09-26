import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { faqCategories, faqItems, type FaqCategory } from "@/data/faq";
import { useLanguage } from "@/context/LanguageContext";
import type { Lang } from "@/i18n/translations";
import { cn } from "@/lib/utils";

const COPY: Record<Lang, { eyebrow: string; title: string; description: string; all: string; stillTitle: string; stillText: string; cta: string }> = {
  uz: {
    eyebrow: "FAQ",
    title: "Ko'p beriladigan savollar",
    description: "Muddat, narx, texnik tafsilotlar va qo'llab-quvvatlash haqida eng ko'p so'raladigan savollarga javoblar.",
    all: "Barchasi",
    stillTitle: "Javob topmadingizmi?",
    stillText: "Savolingizni yozing — jamoamiz tez orada javob beradi.",
    cta: "Savol berish",
  },
  ru: {
    eyebrow: "FAQ",
    title: "Часто задаваемые вопросы",
    description: "Ответы на самые частые вопросы о сроках, ценах, технических деталях и поддержке.",
    all: "Все",
    stillTitle: "Не нашли ответ?",
    stillText: "Напишите свой вопрос — наша команда скоро ответит.",
    cta: "Задать вопрос",
  },
  en: {
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    description: "Answers to the most common questions about timelines, pricing, technical details and support.",
    all: "All",
    stillTitle: "Didn't find your answer?",
    stillText: "Send us your question — our team will reply shortly.",
    cta: "Ask a question",
  },
};

/** FAQPage structured data for the site-wide FAQ, in the current language. */
export function faqJsonLd(lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question[lang],
      acceptedAnswer: { "@type": "Answer", text: item.answer[lang] },
    })),
  };
}

export function FaqSection({ showContactCta = true }: { showContactCta?: boolean }) {
  const { lang } = useLanguage();
  const copy = COPY[lang];
  const [category, setCategory] = useState<FaqCategory | "all">("all");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = faqItems.filter((item) => category === "all" || item.category === category);
  const tabs: { id: FaqCategory | "all"; label: string }[] = [
    { id: "all", label: copy.all },
    ...faqCategories.map((c) => ({ id: c.id, label: c.label[lang] })),
  ];

  return (
    <section id="faq" className="py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow={copy.eyebrow} title={copy.title} description={copy.description} align="center" />

        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setCategory(tab.id);
                setOpenIndex(0);
              }}
              aria-pressed={category === tab.id}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                category === tab.id
                  ? "border-ink bg-ink text-paper dark:border-paper dark:bg-paper dark:text-ink"
                  : "border-ink/10 text-ink/60 hover:border-ink/25 hover:text-ink dark:border-white/15 dark:text-paper/60 dark:hover:text-paper",
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-8 flex max-w-3xl flex-col gap-3">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.question.en}
                className={cn(
                  "overflow-hidden rounded-2xl border bg-paper transition-colors dark:bg-white/[0.02]",
                  isOpen ? "border-brand-500/30" : "border-ink/10 dark:border-white/10",
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-sm font-semibold sm:text-base">{item.question[lang]}</span>
                  <span
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors",
                      isOpen ? "bg-brand-500 text-white" : "bg-ink/[0.04] text-ink/50 dark:bg-white/[0.06] dark:text-paper/50",
                    )}
                  >
                    <ChevronDown size={16} className={cn("transition-transform duration-300", isOpen && "rotate-180")} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-ink/65 dark:text-paper/65 sm:text-[15px]">
                        {item.answer[lang]}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {showContactCta && (
          <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-4 rounded-3xl border border-ink/10 bg-paper-2/60 p-6 text-center dark:border-white/10 dark:bg-white/[0.03] sm:flex-row sm:text-left">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-500">
              <MessageCircleQuestion size={20} />
            </span>
            <div className="flex-1">
              <div className="font-semibold">{copy.stillTitle}</div>
              <div className="mt-0.5 text-sm text-ink/60 dark:text-paper/60">{copy.stillText}</div>
            </div>
            <ButtonLink to="/contact" size="md">
              {copy.cta}
            </ButtonLink>
          </div>
        )}
      </Container>
    </section>
  );
}
