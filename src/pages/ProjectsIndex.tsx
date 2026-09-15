import { ArrowRight } from "lucide-react";
import { Seo, breadcrumbJsonLd } from "@/components/Seo";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { Link } from "@/components/i18n/LocalizedLink";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";

export default function ProjectsIndex() {
  const { t, lang } = useLanguage();

  return (
    <>
      <Seo
        title="Loyihalar — bajarilgan ishlar"
        description="FRONTIX veb-sayt, Telegram bot, QR-menyu, onlayn buyurtma va biznes avtomatlashtirish bo'yicha bajargan loyihalari: muammo, yechim va natija."
        path="/loyihalar"
        jsonLd={breadcrumbJsonLd(
          [
            { name: t.nav.home, path: "/" },
            { name: "Loyihalar", path: "/loyihalar" },
          ],
          lang,
        )}
      />
      <PageHero
        eyebrow="Bajarilgan ishlar"
        title="Loyihalarimiz: muammo, yechim, natija"
        description="Har bir loyiha mijozning aniq muammosidan boshlanadi. Bu yerda tugallangan ishlarimizni — nima muammo bo'lgani, qanday yechim topilgani va qanday natija berganini — ko'rsatamiz."
      />

      {projects.length > 0 ? (
        <section className="pb-24 sm:pb-32">
          <Container>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, i) => (
                <Reveal key={project.slug} delay={i * 0.06}>
                  <Link
                    to={`/loyihalar/${project.slug}`}
                    className="group flex h-full flex-col rounded-[2rem] border border-ink/10 dark:border-white/10 bg-paper dark:bg-white/[0.02] p-8 shadow-soft transition-colors hover:border-brand-500/30"
                  >
                    <span className="inline-flex w-fit items-center rounded-full bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-500">
                      {project.industry}
                    </span>
                    <h2 className="mt-4 text-lg font-semibold leading-snug sm:text-xl">{project.title}</h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/60 dark:text-paper/60">
                      {project.summary}
                    </p>
                    {project.results[0] && (
                      <div className="mt-6 rounded-xl bg-paper-2/60 dark:bg-white/[0.03] p-3 text-sm">
                        <span className="font-semibold text-brand-500">{project.results[0].metric}</span>{" "}
                        <span className="text-ink/60 dark:text-paper/60">{project.results[0].label}</span>
                      </div>
                    )}
                  </Link>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      ) : (
        <section className="pb-24 sm:pb-32">
          <Container>
            <Reveal>
              <div className="mx-auto max-w-2xl rounded-[2rem] border border-ink/10 dark:border-white/10 bg-paper dark:bg-white/[0.02] p-8 text-center shadow-soft sm:p-10">
                <h2 className="text-xl font-semibold sm:text-2xl">Bajarilgan loyihalar tez orada shu yerda</h2>
                <p className="mt-4 text-sm leading-relaxed text-ink/65 dark:text-paper/65">
                  Har bir loyihani mijozning roziligi bilan, aniq raqam va natijalar bilan e'lon qilamiz — shuning
                  uchun bu bo'lim asta-sekin to'ldiriladi. Hozircha qaysi yo'nalishlarda ishlayotganimiz bilan
                  tanishing:
                </p>
              </div>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, i) => {
                const Icon = service.icon;
                const text = t.services[service.slug];
                return (
                  <Reveal key={service.slug} delay={i * 0.05}>
                    <Link
                      to="/services"
                      className="group flex h-full flex-col rounded-[2rem] border border-ink/10 dark:border-white/10 bg-paper dark:bg-white/[0.02] p-8 shadow-soft transition-colors hover:border-brand-500/30"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-500">
                        <Icon size={22} strokeWidth={1.75} />
                      </div>
                      <h3 className="mt-5 text-base font-semibold">{text.title}</h3>
                      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink/60 dark:text-paper/60">
                        {text.shortDescription}
                      </p>
                    </Link>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.1}>
              <div className="mt-10 text-center">
                <ButtonLink to="/contact" size="lg">
                  Loyihangizni muhokama qilaylik
                  <ArrowRight size={16} />
                </ButtonLink>
              </div>
            </Reveal>
          </Container>
        </section>
      )}

      <CTASection />
    </>
  );
}
