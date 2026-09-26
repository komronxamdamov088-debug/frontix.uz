import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import type { Lang } from "@/i18n/translations";
import { cn } from "@/lib/utils";

const options: { code: Lang; label: string; name: string }[] = [
  { code: "uz", label: "UZ", name: "O'zbekcha" },
  { code: "ru", label: "RU", name: "Русский" },
  { code: "en", label: "EN", name: "English" },
];

interface LanguageSwitcherProps {
  className?: string;
  /** "dropdown" — navbar uchun ochiladigan menyu, "inline" — mobil menyu uchun tugmalar qatori */
  variant?: "dropdown" | "inline";
}

export function LanguageSwitcher({ className, variant = "dropdown" }: LanguageSwitcherProps) {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  if (variant === "inline") {
    return (
      <div className={cn("grid grid-cols-3 gap-2", className)} role="group" aria-label="Language">
        {options.map((opt) => {
          const active = lang === opt.code;
          return (
            <button
              key={opt.code}
              onClick={() => setLang(opt.code)}
              aria-pressed={active}
              className={cn(
                "flex flex-col items-start rounded-xl border px-3 py-2.5 text-left transition-colors",
                active
                  ? "border-brand-500/40 bg-brand-50 text-brand-600 dark:border-brand-400/40 dark:bg-brand-500/10 dark:text-brand-300"
                  : "border-ink/10 text-ink/70 dark:border-white/10 dark:text-paper/70",
              )}
            >
              <span className="text-[11px] font-semibold tracking-wider opacity-60">{opt.label}</span>
              <span className="text-sm font-medium">{opt.name}</span>
            </button>
          );
        })}
      </div>
    );
  }

  const current = options.find((o) => o.code === lang) ?? options[0];

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Language"
        className={cn(
          "flex h-10 items-center gap-1.5 rounded-xl border px-3 text-sm font-semibold tracking-wide transition-colors",
          open
            ? "border-brand-500/60 bg-brand-50 text-brand-600 dark:border-brand-400/50 dark:bg-brand-500/10 dark:text-brand-300"
            : "border-ink/10 text-ink hover:border-ink/25 dark:border-white/15 dark:text-paper dark:hover:border-white/30",
        )}
      >
        {current.label}
        <ChevronDown
          size={15}
          className={cn("opacity-60 transition-transform duration-200", open && "rotate-180")}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            aria-label="Language"
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-0 top-full z-50 mt-2 w-48 origin-top-right rounded-2xl border border-ink/[0.06] bg-paper p-1.5 shadow-[0_12px_40px_-12px_rgba(5,5,6,0.25)] dark:border-white/10 dark:bg-ink-2 dark:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.7)]"
          >
            {options.map((opt) => {
              const active = lang === opt.code;
              return (
                <li key={opt.code}>
                  <button
                    role="option"
                    aria-selected={active}
                    onClick={() => {
                      setLang(opt.code);
                      setOpen(false);
                    }}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors",
                      active
                        ? "bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-300"
                        : "text-ink/80 hover:bg-ink/[0.04] dark:text-paper/80 dark:hover:bg-white/[0.06]",
                    )}
                  >
                    <span
                      className={cn(
                        "w-6 text-[11px] font-semibold tracking-wider",
                        active ? "opacity-70" : "text-ink/40 dark:text-paper/40",
                      )}
                    >
                      {opt.label}
                    </span>
                    <span className="flex-1 font-medium">{opt.name}</span>
                    {active && <Check size={15} strokeWidth={2.5} />}
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
