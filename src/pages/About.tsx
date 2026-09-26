import { Code2 } from "lucide-react";
import { Seo, breadcrumbJsonLd } from "@/components/Seo";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal, staggerContainer, staggerItem } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { valueIcons } from "@/data/values";
import { useLanguage } from "@/context/LanguageContext";
import { Link } from "@/components/i18n/LocalizedLink";
import type { Lang } from "@/i18n/translations";

// "FRONTIX at a glance" — plain facts (all stated elsewhere on the site) in a
// form that search engines and AI answer engines can quote directly.
const FACTS: Record<Lang, { title: string; items: { label: string; value: string; to?: string }[] }> = {
  uz: {
    title: "FRONTIX qisqacha",
    items: [
      { label: "Kim", value: "Toshkentdagi IT kompaniya — bizneslar uchun sayt va dasturlar yaratadi" },
      { label: "Qayerda", value: "Toshkent, O'zbekiston; O'zbekiston bo'ylab bizneslar bilan ishlaydi" },
      { label: "Qachondan", value: "2021-yildan buyon" },
      { label: "Jamoa", value: "15 nafar mutaxassis" },
      { label: "Xizmatlar", value: "Veb-sayt, Telegram bot, QR-menyu, onlayn buyurtma, CRM va avtomatlashtirish, maxsus dasturlar", to: "/services" },
      { label: "Kimlar uchun", value: "Kichik va o'rta biznes, restoran va kafelar, startaplar, onlayn do'konlar" },
      { label: "Muddat", value: "Odatda 1-6 hafta" },
      { label: "Tillar", value: "O'zbek, rus va ingliz" },
    ],
  },
  ru: {
    title: "FRONTIX коротко",
    items: [
      { label: "Кто", value: "IT-компания в Ташкенте — разрабатывает сайты и программы для бизнеса" },
      { label: "Где", value: "Ташкент, Узбекистан; работает с бизнесом по всему Узбекистану" },
      { label: "С какого года", value: "С 2021 года" },
      { label: "Команда", value: "15 специалистов" },
      { label: "Услуги", value: "Сайты, Telegram-боты, QR-меню, онлайн-заказы, CRM и автоматизация, ПО на заказ", to: "/services" },
      { label: "Для кого", value: "Малый и средний бизнес, рестораны и кафе, стартапы, интернет-магазины" },
      { label: "Сроки", value: "Обычно 1-6 недель" },
      { label: "Языки", value: "Узбекский, русский и английский" },
    ],
  },
  en: {
    title: "FRONTIX at a glance",
    items: [
      { label: "Who", value: "An IT company in Tashkent that builds websites and software for businesses" },
      { label: "Where", value: "Tashkent, Uzbekistan; works with businesses across Uzbekistan" },
      { label: "Since", value: "2021" },
      { label: "Team", value: "15 specialists" },
      { label: "Services", value: "Websites, Telegram bots, QR menus, online ordering, CRM and automation, custom software", to: "/services" },
      { label: "For", value: "Small and medium businesses, restaurants and cafes, startups, online stores" },
      { label: "Timeline", value: "Usually 1-6 weeks" },
      { label: "Languages", value: "Uzbek, Russian and English" },
    ],
  },
};
import { motion } from "framer-motion";

export default function About() {
  const { t, lang } = useLanguage();

  return (
    <>
      <Seo
        title={t.seo.about.title}
        description={t.seo.about.description}
        keywords={t.seo.about.keywords}
        path="/about"
        jsonLd={breadcrumbJsonLd(
          [
            { name: t.nav.home, path: "/" },
            { name: t.nav.about, path: "/about" },
          ],
          lang,
        )}
      />
      <PageHero eyebrow={t.about.eyebrow} title={t.about.title} description={t.about.description} />

      <section className="pb-24 sm:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <h2 className="text-2xl font-semibold leading-snug text-balance sm:text-3xl">
                {t.about.heading}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-ink/60 dark:text-paper/60">
                {t.about.paragraph1}
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink/60 dark:text-paper/60">
                {t.about.paragraph2}
              </p>
              <div className="mt-8 rounded-3xl border border-ink/10 p-6 dark:border-white/10">
                <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink/45 dark:text-paper/45">
                  {FACTS[lang].title}
                </h2>
                <dl className="mt-4 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-[auto_1fr]">
                  {FACTS[lang].items.map((item) => (
                    <div key={item.label} className="contents">
                      <dt className="text-sm font-semibold">{item.label}</dt>
                      <dd className="text-sm text-ink/65 dark:text-paper/65">
                        {item.to ? (
                          <Link to={item.to} className="hover:text-brand-500 hover:underline">
                            {item.value}
                          </Link>
                        ) : (
                          item.value
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-[2rem] border border-ink/10 dark:border-white/10 bg-ink dark:bg-white/[0.03] p-10 sm:p-12">
                <div
                  className="pointer-events-none absolute -bottom-20 -right-16 h-64 w-64 rounded-full bg-brand-500/30 blur-[100px]"
                  aria-hidden="true"
                />
                <blockquote className="relative font-display text-2xl font-medium leading-snug text-paper text-balance sm:text-3xl">
                  "{t.about.quote}"
                </blockquote>
                <p className="relative mt-6 text-sm text-paper/50">{t.about.quoteAuthor}</p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container>
          <Reveal className="max-w-xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-ink/10 dark:border-white/15 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-ink/60 dark:text-paper/60">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              {t.about.valuesEyebrow}
            </span>
            <h2 className="text-3xl font-semibold leading-tight text-balance sm:text-4xl">
              {t.about.valuesTitle}
            </h2>
          </Reveal>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {t.values.map((value, i) => {
              const Icon = valueIcons[i];
              return (
                <motion.div
                  key={value.title}
                  variants={staggerItem}
                  whileHover={{ y: -6 }}
                  className="rounded-3xl border border-ink/10 dark:border-white/10 bg-paper dark:bg-white/[0.02] p-7 shadow-soft transition-colors duration-300 hover:border-brand-500/40"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
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
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container>
          <Reveal className="max-w-xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-ink/10 dark:border-white/15 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-ink/60 dark:text-paper/60">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              {t.about.milestonesEyebrow}
            </span>
            <h2 className="text-3xl font-semibold leading-tight text-balance sm:text-4xl">
              {t.about.milestonesTitle}
            </h2>
          </Reveal>

          <div className="relative mt-12 max-w-2xl">
            <div className="absolute top-2 bottom-2 left-[7px] w-px bg-ink/10 dark:bg-white/10 sm:left-[9px]" />
            <div className="space-y-10">
              {t.about.milestones.map((item, i) => (
                <Reveal key={item.year} delay={i * 0.08}>
                  <div className="relative pl-8 sm:pl-10">
                    <span className="absolute left-0 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand-500 ring-4 ring-paper dark:ring-ink sm:h-5 sm:w-5" />
                    <span className="font-display text-sm font-semibold text-brand-500">{item.year}</span>
                    <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink/60 dark:text-paper/60">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container>
          <Reveal>
            <h2 className="text-2xl font-semibold text-balance sm:text-3xl">{t.about.techStackTitle}</h2>
          </Reveal>
          <div className="mt-8 flex flex-wrap gap-3">
            {t.about.techStack.map((tech, i) => (
              <Reveal key={tech} delay={i * 0.03}>
                <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 dark:border-white/15 bg-paper dark:bg-white/[0.03] px-4 py-2 text-sm font-medium text-ink/70 dark:text-paper/70">
                  <Code2 size={14} className="text-brand-500" />
                  {tech}
                </span>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
