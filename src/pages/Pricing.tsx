import { ArrowRight } from "lucide-react";
import { Seo, breadcrumbJsonLd } from "@/components/Seo";
import { PageHero } from "@/components/sections/PageHero";
import { PricingSection } from "@/components/sections/PricingSection";
import { CTASection } from "@/components/sections/CTASection";
import { FaqSection } from "@/components/sections/FaqSection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/services";
import { useLanguage } from "@/context/LanguageContext";
import type { Lang } from "@/i18n/translations";

/** Starting price per service slug, as shown to visitors. `null` = priced individually after a consultation. */
const FROM_PRICE: Record<(typeof services)[number]["slug"], Record<Lang, string> | null> = {
  "website-development": { uz: "$350", ru: "$350", en: "$350" },
  "qr-menu": { uz: "$50", ru: "$50", en: "$50" },
  "telegram-bot": { uz: "$250", ru: "$250", en: "$250" },
  "online-ordering": null,
  "business-automation": { uz: "250 000 so'm", ru: "250 000 сум", en: "250,000 UZS" },
  "custom-software": null,
};

const COPY: Record<Lang, { seoTitle: string; seoDescription: string; keywords: string; eyebrow: string; title: string; description: string; otherTitle: string; otherDescription: string; individual: string; individualHint: string; quote: string; from: string; more: string }> = {
  uz: {
    seoTitle: "Narxlar — sayt $350, admin panelli sayt $550 | FRONTIX",
    seoDescription: "FRONTIX narxlari: veb-sayt $350, admin panelli sayt $550. QR-menyu $50, Telegram bot $250, CRM 250 000 so'm dan.",
    keywords: "sayt narxi, sayt yaratish narxi, telegram bot narxi, qr menyu narxi, crm narxi, Toshkent",
    eyebrow: "Narxlar",
    title: "Xizmatlarimiz narxlari",
    description: "Veb-sayt uchun belgilangan narxlar. Boshlang'ich narxlar ko'rsatilgan; yakuniy narx vazifangizga qarab belgilanadi.",
    otherTitle: "Boshqa xizmatlar",
    otherDescription: "Ko'rsatilgan narx — boshlang'ich. Yakuniy narx funksionallik va muddatga bog'liq, konsultatsiya bepul.",
    individual: "Individual narx",
    individualHint: "Konsultatsiyadan so'ng",
    quote: "Taklif olish",
    from: "dan",
    more: "Batafsil",
  },
  ru: {
    seoTitle: "Цены — сайт $350, сайт с админ-панелью $550 | FRONTIX",
    seoDescription: "Цены FRONTIX: сайт $350, сайт с админ-панелью $550. QR-меню от $50, Telegram-бот от $250, CRM от 250 000 сум.",
    keywords: "цена сайта, стоимость создания сайта, цена telegram бота, цена qr меню, цена crm, Ташкент",
    eyebrow: "Цены",
    title: "Цены на наши услуги",
    description: "Фиксированные цены на сайты. Указаны стартовые цены; итоговая стоимость зависит от вашей задачи.",
    otherTitle: "Другие услуги",
    otherDescription: "Указана стартовая цена. Итог зависит от функциональности и сроков, консультация бесплатная.",
    individual: "Индивидуальная цена",
    individualHint: "После консультации",
    quote: "Получить предложение",
    from: "от",
    more: "Подробнее",
  },
  en: {
    seoTitle: "Pricing — website $350, website with admin panel $550 | FRONTIX",
    seoDescription: "FRONTIX pricing: website $350, website with an admin panel $550. QR menu from $50, Telegram bot from $250, CRM from 250,000 UZS.",
    keywords: "website price, website development cost, telegram bot price, qr menu price, crm price, Tashkent",
    eyebrow: "Pricing",
    title: "Pricing for our services",
    description: "Fixed prices for websites. Starting prices are shown; the final price depends on your task.",
    otherTitle: "Other services",
    otherDescription: "The price shown is a starting point. The final price depends on features and timeline; the consultation is free.",
    individual: "Individual price",
    individualHint: "After a consultation",
    quote: "Get a quote",
    from: "from",
    more: "Learn more",
  },
};

export default function Pricing() {
  const { t, lang } = useLanguage();
  const copy = COPY[lang];
  const others = services.filter((s) => s.slug !== "website-development");

  return (
    <>
      <Seo
        title={copy.seoTitle}
        description={copy.seoDescription}
        keywords={copy.keywords}
        path="/pricing"
        jsonLd={breadcrumbJsonLd(
          [
            { name: t.nav.home, path: "/" },
            { name: t.nav.pricing, path: "/pricing" },
          ],
          lang,
        )}
      />
      <PageHero eyebrow={copy.eyebrow} title={copy.title} description={copy.description} />

      <PricingSection />

      <section className="pb-24 sm:pb-32">
        <Container>
          <SectionHeading title={copy.otherTitle} description={copy.otherDescription} align="center" />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((service, i) => {
              const Icon = service.icon;
              const text = t.services[service.slug];
              const price = FROM_PRICE[service.slug];
              return (
                <Reveal key={service.slug} delay={(i % 3) * 0.08} className="h-full">
                  <div className="flex h-full flex-col rounded-3xl border border-ink/10 bg-paper p-6 transition-colors hover:border-brand-500/40 dark:border-white/10 dark:bg-white/[0.02]">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-500">
                      <Icon size={22} strokeWidth={1.75} />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold">{text.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60 dark:text-paper/60">{text.shortDescription}</p>
                    <div className="mt-5 border-t border-ink/10 pt-4 dark:border-white/10">
                      {price === null ? (
                        <>
                          <div className="font-semibold">{copy.individual}</div>
                          <div className="text-xs text-ink/50 dark:text-paper/50">{copy.individualHint}</div>
                        </>
                      ) : (
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-sm text-ink/50 dark:text-paper/50">{copy.from}</span>
                          <span className="text-2xl font-bold">{price[lang]}</span>
                        </div>
                      )}
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <ButtonLink to="/contact" size="md">
                        {copy.quote}
                      </ButtonLink>
                      <ButtonLink to={`/services/${service.slug}`} variant="ghost" size="md">
                        {copy.more}
                        <ArrowRight size={16} />
                      </ButtonLink>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <FaqSection showContactCta={false} />
      <CTASection />
    </>
  );
}
