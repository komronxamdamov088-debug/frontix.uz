import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, staggerContainer, staggerItem } from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import { valueIcons } from "@/data/values";
import { useLanguage } from "@/context/LanguageContext";

export function WhyFrontix() {
  const { t } = useLanguage();

  return (
    <section className="py-24 sm:py-32 bg-paper-2/60 dark:bg-ink-2/60 border-y border-ink/10 dark:border-white/10">
      <Container>
        <SectionHeading
          eyebrow={t.whyFrontix.eyebrow}
          title={t.whyFrontix.title}
          description={t.whyFrontix.description}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {t.values.map((value, i) => {
            const Icon = valueIcons[i];
            return (
              <motion.div
                key={value.title}
                variants={staggerItem}
                className="rounded-3xl border border-ink/10 dark:border-white/10 bg-paper dark:bg-white/[0.02] p-7 shadow-soft"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-paper dark:bg-paper dark:text-ink">
                  <Icon size={19} strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60 dark:text-paper/60">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <Reveal delay={0.1}>
          <div className="mt-16 grid grid-cols-2 gap-6 rounded-3xl border border-ink/10 dark:border-white/10 bg-paper dark:bg-white/[0.02] p-8 sm:grid-cols-4 sm:p-10">
            {t.whyFrontix.stats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="font-display text-3xl font-semibold sm:text-4xl">{stat.value}</div>
                <div className="mt-1 text-sm text-ink/55 dark:text-paper/55">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
