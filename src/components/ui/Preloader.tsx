import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;
const MIN_VISIBLE_MS = 1500;

export function Preloader() {
  const [visible, setVisible] = useState(() => document.documentElement.dataset.prerendered !== "true");

  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => setVisible(false), MIN_VISIBLE_MS);
    return () => clearTimeout(timer);
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          data-preloader-root="true"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-paper dark:bg-ink"
        >
          <motion.svg
            viewBox="0 0 44 44"
            className="h-16 w-16"
            fill="none"
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <motion.polygon
              points="10,7 38,7 30,17 2,17"
              className="fill-ink dark:fill-paper"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
            />
            <motion.polygon
              points="10,21 25,21 16,42 1,42"
              className="fill-ink dark:fill-paper"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
            />
            <motion.rect
              x="27.5"
              y="23.5"
              width="8"
              height="8"
              rx="1.6"
              className="fill-brand-500"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.35, ease: EASE }}
            />
          </motion.svg>

          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.42, ease: EASE }}
            className="font-display text-3xl font-bold tracking-[0.22em] uppercase"
          >
            FRX
          </motion.span>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: EASE }}
            className="h-[2px] w-20 origin-left rounded-full bg-brand-500"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
