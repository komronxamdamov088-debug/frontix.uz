import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/context/LanguageContext";
import type { Lang } from "@/i18n/translations";
import { cn } from "@/lib/utils";

interface Plan {
  price: number;
  name: string;
  description: string;
  features: string[];
  featured?: boolean;
  badge?: string;
}

const COPY: Record<Lang, { eyebrow: string; title: string; description: string; from: string; cta: string; note: string; all: string; plans: Plan[] }> = {
  uz: {
    eyebrow: "Narxlar",
    title: "Aniq va shaffof narxlar",
    description: "Veb-sayt uchun belgilangan narxlar. QR-menyu, Telegram bot va CRM narxlarini alohida sahifada ko'ring.",
    from: "dan",
    cta: "Buyurtma berish",
    all: "Barcha xizmatlar narxi",
    note: "QR-menyu $50 dan, Telegram bot $250 dan, CRM 250 000 so'm dan. Maxsus dasturlar individual baholanadi.",
    plans: [
      {
        price: 350,
        name: "Veb-sayt",
        description: "Biznesingiz uchun zamonaviy korporativ sayt yoki landing.",
        features: ["Telefonga moslashgan dizayn", "SEO bilan", "Korporativ sayt, landing yoki onlayn do'kon", "1-6 hafta ichida tayyor"],
      },
      {
        price: 550,
        name: "Admin panelli sayt",
        description: "Kontentni o'zingiz boshqarasiz — dasturchi kerak emas.",
        features: ["Veb-saytdagi hamma narsa", "Admin panel", "Kontentni o'zingiz boshqarasiz", "1-6 hafta ichida tayyor"],
        featured: true,
        badge: "Mashhur",
      },
    ],
  },
  ru: {
    eyebrow: "Цены",
    title: "Понятные и прозрачные цены",
    description: "Фиксированные цены на сайты. Цены на QR-меню, Telegram-ботов и CRM — на отдельной странице.",
    from: "от",
    cta: "Заказать",
    all: "Цены на все услуги",
    note: "QR-меню от $50, Telegram-бот от $250, CRM от 250 000 сум. Индивидуальные программы оцениваются отдельно.",
    plans: [
      {
        price: 350,
        name: "Сайт",
        description: "Современный корпоративный сайт или лендинг для вашего бизнеса.",
        features: ["Адаптивный дизайн", "С учётом SEO", "Корпоративный сайт, лендинг или интернет-магазин", "Готов за 1-6 недель"],
      },
      {
        price: 550,
        name: "Сайт с админ-панелью",
        description: "Управляйте контентом сами — программист не нужен.",
        features: ["Всё из тарифа «Сайт»", "Админ-панель", "Контентом управляете сами", "Готов за 1-6 недель"],
        featured: true,
        badge: "Популярный",
      },
    ],
  },
  en: {
    eyebrow: "Pricing",
    title: "Clear, transparent pricing",
    description: "Fixed prices for websites. See QR menu, Telegram bot and CRM pricing on the full pricing page.",
    from: "from",
    cta: "Order now",
    all: "Prices for all services",
    note: "QR menu from $50, Telegram bot from $250, CRM from 250,000 UZS. Custom software is priced individually.",
    plans: [
      {
        price: 350,
        name: "Website",
        description: "A modern corporate website or landing page for your business.",
        features: ["Responsive design", "SEO-ready", "Corporate site, landing page or online store", "Ready in 1-6 weeks"],
      },
      {
        price: 550,
        name: "Website with admin panel",
        description: "Manage the content yourself — no developer needed.",
        features: ["Everything in Website", "Admin panel", "You manage the content yourself", "Ready in 1-6 weeks"],
        featured: true,
        badge: "Popular",
      },
    ],
  },
};

export function PricingSection({ onHome = false }: { onHome?: boolean }) {
  const { lang } = useLanguage();
  const copy = COPY[lang];

  return (
    <section id="pricing" className={onHome ? "py-24 sm:py-32" : "pb-16 sm:pb-20"}>
      <Container>
        {onHome && <SectionHeading eyebrow={copy.eyebrow} title={copy.title} description={copy.description} align="center" />}

        <div className={cn("mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2", onHome && "mt-14")}>
          {copy.plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.08} className="h-full">
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-3xl border p-7 sm:p-8",
                  plan.featured
                    ? "border-brand-500/40 bg-brand-500/[0.04]"
                    : "border-ink/10 bg-paper dark:border-white/10 dark:bg-white/[0.02]",
                )}
              >
                {plan.badge && (
                  <span className="absolute right-6 top-6 rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold text-white">
                    {plan.badge}
                  </span>
                )}
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <p className="mt-1.5 text-sm text-ink/60 dark:text-paper/60">{plan.description}</p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-sm text-ink/50 dark:text-paper/50">{copy.from}</span>
                  <span className="text-5xl font-bold tracking-tight">${plan.price}</span>
                </div>
                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-ink/75 dark:text-paper/75">
                      <Check size={16} className="mt-0.5 shrink-0 text-brand-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <ButtonLink to="/contact" variant={plan.featured ? "primary" : "secondary"} size="md" className="mt-8 w-full">
                  {copy.cta}
                </ButtonLink>
              </div>
            </Reveal>
          ))}
        </div>

        {onHome && (
          <div className="mt-8 flex flex-col items-center gap-4">
            <p className="max-w-2xl text-center text-sm text-ink/55 dark:text-paper/55">{copy.note}</p>
            <ButtonLink to="/pricing" variant="secondary" size="md">
              {copy.all}
            </ButtonLink>
          </div>
        )}
      </Container>
    </section>
  );
}
