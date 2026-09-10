import { ArrowRight } from "lucide-react";
import { Seo, breadcrumbJsonLd } from "@/components/Seo";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/sections/CTASection";
import { Link } from "@/components/i18n/LocalizedLink";
import { industries, serviceLabelsUz } from "@/data/industries";
import { useLanguage } from "@/context/LanguageContext";

export default function SolutionsIndex() {
  const { t, lang } = useLanguage();

  return (
    <>
      <Seo
        title="Soha bo'yicha IT yechimlar"
        description="Restoran, go'zallik saloni, klinika, onlayn do'kon, o'quv markazi va fitnes-zallar uchun Toshkentda tayyor IT yechimlar: veb-sayt, Telegram bot, QR-menyu, CRM va onlayn buyurtma tizimlari."
        path="/yechimlar"
        jsonLd={breadcrumbJsonLd(
          [
            { name: t.nav.home, path: "/" },
            { name: "Yechimlar", path: "/yechimlar" },
          ],
          lang,
        )}
      />
      <PageHero
        eyebrow="Soha bo'yicha yechimlar"
        title="Sohangizga mos IT yechimni tanlang"
        description="Har bir sohaning o'ziga xos muammolari bor — shuning uchun har bir yechim aynan o'sha muammoni hal qilish uchun moslashtirilgan. Sohangizni tanlang va mos xizmatlar bilan tanishing."
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
                  <h2 className="text-xl font-semibold sm:text-2xl">{industry.name}</h2>
                  <ul className="mt-5 space-y-2.5">
                    {industry.relevantServices.map((service) => (
                      <li key={service}>
                        <Link
                          to={`/yechimlar/${industry.slug}/${service}`}
                          className="group flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-ink/70 dark:text-paper/70 hover:bg-brand-500/[0.06] hover:text-brand-500 transition-colors"
                        >
                          {serviceLabelsUz[service]}
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
