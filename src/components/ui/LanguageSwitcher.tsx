import { useLanguage } from "@/context/LanguageContext";
import type { Lang } from "@/i18n/translations";
import { cn } from "@/lib/utils";

const options: { code: Lang; label: string }[] = [
  { code: "uz", label: "UZ" },
  { code: "ru", label: "RU" },
  { code: "en", label: "EN" },
];

export function LanguageSwitcher({ className }: { className?: string }) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className={cn(
        "inline-flex items-center gap-0.5 rounded-full border border-ink/10 dark:border-white/15 p-1",
        className,
      )}
      role="group"
      aria-label="Language"
    >
      {options.map((opt) => (
        <button
          key={opt.code}
          onClick={() => setLang(opt.code)}
          aria-pressed={lang === opt.code}
          className={cn(
            "rounded-full px-2.5 py-1.5 text-xs font-semibold tracking-wide transition-colors duration-200",
            lang === opt.code
              ? "bg-ink text-paper dark:bg-paper dark:text-ink"
              : "text-ink/50 dark:text-paper/50 hover:text-ink dark:hover:text-paper",
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
