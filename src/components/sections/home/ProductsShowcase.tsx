import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { products, type Product } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";

export function ProductsShowcase() {
  const { t } = useLanguage();

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow={t.products.eyebrow}
          title={t.products.title}
          description={t.products.description}
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const { t, lang } = useLanguage();

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink/10 dark:border-white/10 bg-paper dark:bg-white/[0.02] p-8 shadow-soft"
      style={{ ["--accent" as string]: product.accent }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-15 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
        style={{ background: product.accent }}
      />

      <div className="relative flex items-center gap-4">
        {product.logo ? (
          <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white ring-1 ring-ink/10">
            <img
              src={product.logo}
              alt={`${product.name} logo`}
              className={cn("h-full w-full object-cover", product.logoZoom !== false && "scale-125")}
              loading="lazy"
            />
          </div>
        ) : (
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#0a0a0a] ring-1 ring-white/10">
            <span className="text-2xl font-black italic tracking-tight text-white">
              {product.monogram?.[0]}
              <span style={{ color: product.accent }}>{product.monogram?.slice(1)}</span>
            </span>
          </div>
        )}
        <div className="min-w-0">
          <h3 className="text-2xl font-semibold">{product.name}</h3>
          <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em]" style={{ color: product.accent }}>
            {product.category[lang]}
          </p>
        </div>
      </div>

      <p className="relative mt-6 text-sm leading-relaxed text-ink/60 dark:text-paper/60">{product.description[lang]}</p>

      <ul className="relative mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        {product.features[lang].map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-ink/80 dark:text-paper/80">
            <Check size={16} className="mt-0.5 shrink-0" style={{ color: product.accent }} />
            {feature}
          </li>
        ))}
      </ul>

      {product.website && (
        <a
          href={product.website}
          target="_blank"
          rel="noopener noreferrer"
          className="relative mt-8 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-ink/70 dark:text-paper/70 transition-colors hover:text-[var(--accent)]"
        >
          {t.products.visit}
          <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      )}
    </motion.article>
  );
}
