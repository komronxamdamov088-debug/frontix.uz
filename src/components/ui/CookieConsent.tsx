import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Cookie } from "lucide-react";
import { Link } from "@/components/i18n/LocalizedLink";
import { useLanguage } from "@/context/LanguageContext";

const STORAGE_KEY = "frontix-cookie-consent";

export function CookieConsent() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem(STORAGE_KEY) !== "accepted") setVisible(true);
  }, []);

  function accept() {
    window.localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          role="dialog"
          aria-label={t.cookieConsent.message}
          className="fixed inset-x-4 bottom-5 z-40 mx-auto flex max-w-md flex-col gap-3 rounded-2xl border border-ink/10 dark:border-white/10 bg-paper dark:bg-ink-2 p-5 shadow-soft-dark sm:inset-x-auto sm:left-5 sm:bottom-6"
        >
          <div className="flex items-start gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-500/10 text-brand-500">
              <Cookie size={17} />
            </span>
            <p className="text-sm leading-relaxed text-ink/70 dark:text-paper/70">
              {t.cookieConsent.message}{" "}
              <Link to="/contact" className="underline underline-offset-2 hover:text-ink dark:hover:text-paper">
                {t.cookieConsent.learnMore}
              </Link>
            </p>
          </div>
          <button
            onClick={accept}
            className="w-full rounded-full bg-ink dark:bg-paper px-5 py-2.5 text-sm font-medium text-paper dark:text-ink transition-colors hover:bg-ink/85 dark:hover:bg-paper/85"
          >
            {t.cookieConsent.accept}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
