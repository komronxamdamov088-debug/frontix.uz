import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/components/i18n/LocalizedLink";
import type { Service } from "@/data/services";
import { useLanguage } from "@/context/LanguageContext";

export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  const Icon = service.icon;
  const { t } = useLanguage();
  const text = t.services[service.slug];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="group relative flex h-full flex-col rounded-3xl border border-ink/10 dark:border-white/10 bg-paper dark:bg-white/[0.02] p-8 shadow-soft transition-colors duration-300 hover:border-brand-500/40"
    >
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-500 transition-transform duration-300 group-hover:scale-110">
          <Icon size={22} strokeWidth={1.75} />
        </div>
        <ArrowUpRight
          size={18}
          className="text-ink/25 dark:text-paper/25 opacity-0 -translate-x-1 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-brand-500"
        />
      </div>

      <h3 className="mt-6 text-xl font-semibold">{text.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink/60 dark:text-paper/60">
        {text.shortDescription}
      </p>

      <Link
        to="/contact"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink/70 dark:text-paper/70 group-hover:text-brand-500 transition-colors"
      >
        {t.servicesPreview.more}
        <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </motion.div>
  );
}
