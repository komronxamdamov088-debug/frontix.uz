import { services } from "@/data/services";
import { useLanguage } from "@/context/LanguageContext";

const track = [...services, ...services];

export function ServicesMarquee() {
  const { t } = useLanguage();

  return (
    <section
      className="relative overflow-hidden border-y border-ink/10 bg-paper-2 py-6 dark:border-white/10 dark:bg-ink-2"
      aria-label={t.servicesPreview.title}
    >
      <div className="flex w-max gap-12 pl-6 motion-safe:animate-marquee motion-safe:hover:[animation-play-state:paused] sm:gap-16 sm:pl-10">
        {track.map((service, i) => {
          const Icon = service.icon;
          return (
            <div
              key={`${service.slug}-${i}`}
              className="flex shrink-0 items-center gap-2.5 whitespace-nowrap text-sm font-medium text-ink/60 dark:text-paper/60"
              aria-hidden={i >= services.length}
            >
              <Icon size={18} className="text-brand-500" />
              {t.services[service.slug].title}
            </div>
          );
        })}
      </div>

      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-paper-2 to-transparent dark:from-ink-2 sm:w-24"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-paper-2 to-transparent dark:from-ink-2 sm:w-24"
        aria-hidden="true"
      />
    </section>
  );
}
