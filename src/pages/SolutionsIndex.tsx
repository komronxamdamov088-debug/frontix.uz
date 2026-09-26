import { ArrowRight } from "lucide-react";
import { Seo, breadcrumbJsonLd } from "@/components/Seo";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { Link } from "@/components/i18n/LocalizedLink";
import { industries, getIndustryText, serviceLabels } from "@/data/industries";
import { useLanguage } from "@/context/LanguageContext";
import type { Lang } from "@/i18n/translations";

const COPY: Record<
  Lang,
  { title: string; description: string; keywords: string; eyebrow: string; heroTitle: string; heroDescription: string }
> = {
  uz: {
    title: "Soha bo'yicha IT yechimlar",
    description:
      "Restoran, go'zallik saloni, klinika, onlayn do'kon, o'quv markazi va fitnes-zallar uchun Toshkentda tayyor IT yechimlar: veb-sayt, Telegram bot, QR-menyu, CRM va onlayn buyurtma tizimlari.",
    keywords:
      "soha bo'yicha IT yechimlar, restoran uchun QR-menyu, go'zallik saloni uchun sayt, klinika uchun CRM, onlayn do'kon yaratish, o'quv markazi uchun Telegram bot, fitnes-zal avtomatlashtirish",
    eyebrow: "Soha bo'yicha yechimlar",
    heroTitle: "Sohangizga mos IT yechimni tanlang",
    heroDescription:
      "Har bir sohaning o'ziga xos muammolari bor — shuning uchun har bir yechim aynan o'sha muammoni hal qilish uchun moslashtirilgan. Sohangizni tanlang va mos xizmatlar bilan tanishing.",
  },
  ru: {
    title: "IT-решения по отраслям",
    description:
      "Готовые IT-решения в Ташкенте для ресторанов, салонов красоты, клиник, интернет-магазинов, учебных центров и фитнес-клубов: сайты, Telegram-боты, QR-меню, CRM и системы онлайн-заказов.",
    keywords:
      "IT-решения по отраслям, QR-меню для ресторана, сайт для салона красоты, CRM для клиники, создание интернет-магазина, Telegram-бот для учебного центра, автоматизация фитнес-клуба",
    eyebrow: "Решения по отраслям",
    heroTitle: "Выберите IT-решение для своей отрасли",
    heroDescription:
      "У каждой отрасли свои проблемы — поэтому каждое решение настроено под конкретную задачу. Выберите свою сферу и посмотрите подходящие услуги.",
  },
  en: {
    title: "IT solutions by industry",
    description:
      "Ready-made IT solutions in Tashkent for restaurants, beauty salons, clinics, online stores, training centres and gyms: websites, Telegram bots, QR menus, CRM and online ordering systems.",
    keywords:
      "IT solutions by industry, QR menu for restaurants, website for beauty salon, CRM for clinic, online store development, Telegram bot for training centre, gym automation",
    eyebrow: "Solutions by industry",
    heroTitle: "Pick the IT solution built for your industry",
    heroDescription:
      "Every industry has its own problems, so every solution is tailored to a specific one. Choose your field and see the services that fit.",
  },
};

export default function SolutionsIndex() {
  const { t, lang } = useLanguage();
  const copy = COPY[lang];

  return (
    <>
      <Seo
        title={copy.title}
        description={copy.description}
        keywords={copy.keywords}
        path="/yechimlar"
        jsonLd={breadcrumbJsonLd(
          [
            { name: t.nav.home, path: "/" },
            { name: t.nav.solutions, path: "/yechimlar" },
          ],
          lang,
        )}
      />
      <PageHero
        eyebrow={copy.eyebrow}
        title={copy.heroTitle}
        description={copy.heroDescription}
      />
      <section className="pb-24 sm:pb-32">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {industries.map((industry, i) => (
              <Reveal key={industry.slug} delay={i * 0.05}>
                <div
                  id={industry.slug}
                  className="h-full rounded-[2rem] border border-ink/10 dark:border-white/10 bg-paper dark:bg-white/[0.02] p-8 shadow-soft"
                >
                  <h2 className="text-xl font-semibold sm:text-2xl">{getIndustryText(industry, lang).name}</h2>
                  <ul className="mt-5 space-y-2.5">
                    {industry.relevantServices.map((service) => (
                      <li key={service}>
                        <Link
                          to={`/yechimlar/${industry.slug}/${service}`}
                          className="group flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-ink/70 dark:text-paper/70 hover:bg-brand-500/[0.06] hover:text-brand-500 transition-colors"
                        >
                          {serviceLabels[lang][service]}
                          <ArrowRight
                            size={15}
                            className="opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
