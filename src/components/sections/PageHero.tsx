import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
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
            {eyebrow}
          </span>
          <h1 className="text-4xl font-semibold leading-[1.1] text-balance sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink/60 dark:text-paper/60 text-balance">
            {description}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
