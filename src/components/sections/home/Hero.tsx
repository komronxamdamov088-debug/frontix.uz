import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div className="grain-gradient pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-brand-500/20 blur-[120px] dark:bg-brand-500/25"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-ink/10 dark:border-white/15 bg-paper/60 dark:bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-ink/60 dark:text-paper/60 backdrop-blur-sm"
            >
              <Sparkles size={13} className="text-brand-500" />
              {t.hero.badge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-xl text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-6xl lg:text-5xl xl:text-6xl"
            >
              {t.hero.titlePrefix}
              <span className="text-brand-500">{t.hero.titleHighlight}</span>
              {t.hero.titleSuffix}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mt-7 max-w-xl text-lg leading-relaxed text-ink/60 dark:text-paper/60 text-balance sm:text-xl"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
            >
              <ButtonLink to="/contact" size="lg">
                {t.hero.ctaContact}
                <ArrowRight size={17} />
              </ButtonLink>
              <ButtonLink to="/team" size="lg" variant="secondary">
                {t.hero.ctaTeam}
              </ButtonLink>
            </motion.div>
          </div>

          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}
