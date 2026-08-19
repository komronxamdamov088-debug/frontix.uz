import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/data/process";
import { useLanguage } from "@/context/LanguageContext";

export function HowWeWork() {
  const { t } = useLanguage();

  return (
    <section className="py-24 sm:py-32 bg-paper-2/60 dark:bg-ink-2/60 border-y border-ink/10 dark:border-white/10">
      <Container>
        <SectionHeading
          eyebrow={t.process.eyebrow}
          title={t.process.title}
          description={t.process.description}
        />

        <div className="relative mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute top-6 left-0 hidden h-px w-full bg-gradient-to-r from-transparent via-ink/10 dark:via-white/10 to-transparent lg:block" />
          {t.process.steps.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1} className="relative">
              <span className="font-display text-4xl font-semibold text-brand-500/30">
                {processSteps[i]}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60 dark:text-paper/60">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
