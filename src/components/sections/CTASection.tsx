import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/context/LanguageContext";

export function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-ink dark:bg-white/[0.03] px-8 py-16 text-center sm:px-16 sm:py-24 border border-ink/10 dark:border-white/10">
            <div
              className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[520px] -translate-x-1/2 rounded-full bg-brand-500/30 blur-[110px]"
              aria-hidden="true"
            />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-semibold leading-[1.15] text-paper text-balance sm:text-4xl md:text-5xl">
                {t.cta.title}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-paper/60 text-balance sm:text-lg">
                {t.cta.description}
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <ButtonLink to="/contact" size="lg" className="!bg-paper !text-ink hover:!opacity-90">
                  {t.cta.ctaContact}
                  <ArrowRight size={17} />
                </ButtonLink>
                <ButtonLink
                  to="/team"
                  size="lg"
                  variant="secondary"
                  className="!border-white/20 !text-paper hover:!border-white/40 hover:!bg-white/5"
                >
                  {t.cta.ctaTeam}
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
