import { motion } from "framer-motion";
import { Globe, Send, QrCode, TrendingUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function HeroVisual() {
  const { t } = useLanguage();

  return (
    <div className="relative mx-auto w-full max-w-[420px] lg:mx-0">
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden rounded-[1.75rem] border border-ink/10 dark:border-white/10 bg-paper dark:bg-ink-2 shadow-soft-dark"
      >
        <div className="flex items-center gap-1.5 border-b border-ink/10 dark:border-white/10 px-4 py-3.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          <div className="ml-3 flex-1 truncate rounded-full bg-paper-2 dark:bg-white/5 px-3 py-1 text-[10px] text-ink/40 dark:text-paper/40">
            frontix.uz
          </div>
        </div>

        <div className="space-y-4 p-5">
          <div className="relative h-28 overflow-hidden rounded-xl bg-gradient-to-br from-brand-500/25 via-brand-500/10 to-transparent">
            <div className="absolute inset-0 grain-gradient" />
            <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
              <div className="h-14 w-14 rounded-lg bg-paper/70 dark:bg-ink/60 backdrop-blur-sm" />
              <div className="flex items-end gap-1.5">
                {[10, 18, 13, 22, 16].map((h, i) => (
                  <div key={i} className="w-2 rounded-full bg-brand-500/70" style={{ height: h }} />
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="h-2.5 w-3/4 rounded-full bg-ink/10 dark:bg-white/10" />
            <div className="h-2.5 w-1/2 rounded-full bg-ink/10 dark:bg-white/10" />
          </div>

          <div className="grid grid-cols-3 gap-2.5">
            {[
              { icon: Globe, label: "Website" },
              { icon: Send, label: "Bot" },
              { icon: QrCode, label: "QR" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-1.5 rounded-xl bg-paper-2/70 dark:bg-white/[0.04] py-3"
              >
                <Icon size={16} className="text-brand-500" strokeWidth={1.75} />
                <span className="text-[10px] text-ink/50 dark:text-paper/50">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 16, y: -12 }}
        animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.7 },
          x: { duration: 0.6, delay: 0.7 },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
        }}
        className="absolute -top-5 -right-5 hidden items-center gap-2 rounded-2xl border border-ink/10 dark:border-white/10 bg-paper dark:bg-ink-2 px-4 py-3 shadow-soft-dark sm:flex"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500/15 text-brand-500">
          <TrendingUp size={15} />
        </span>
        <div>
          <div className="text-xs font-semibold">+42%</div>
          <div className="text-[10px] text-ink/45 dark:text-paper/45">{t.hero.statLabel}</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -16, y: 12 }}
        animate={{ opacity: 1, x: 0, y: [0, 8, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.9 },
          x: { duration: 0.6, delay: 0.9 },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.4 },
        }}
        className="absolute -bottom-5 -left-5 hidden items-center gap-2 rounded-2xl border border-ink/10 dark:border-white/10 bg-ink dark:bg-paper px-3.5 py-2.5 shadow-soft-dark sm:flex"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-500/20">
          <Send size={13} className="text-brand-400" />
        </span>
        <div className="text-xs font-medium text-paper dark:text-ink">{t.hero.newOrder}</div>
      </motion.div>
    </div>
  );
}
