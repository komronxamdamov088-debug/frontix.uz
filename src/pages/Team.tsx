import { useMemo, useState } from "react";
import { Seo, breadcrumbJsonLd } from "@/components/Seo";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { TeamCard } from "@/components/ui/TeamCard";
import { CTASection } from "@/components/sections/CTASection";
import { team, type TeamCategory } from "@/data/team";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

type FilterKey = TeamCategory | "all";

export default function Team() {
  const { t } = useLanguage();
  const [active, setActive] = useState<FilterKey>("all");

  const categories: FilterKey[] = useMemo(() => ["all", "founder", "developer", "admin", "designer"], []);

  const filtered = active === "all" ? team : team.filter((m) => m.category === active);

  return (
    <>
      <Seo
        title={t.team.pageTitle}
        description={t.team.pageDescription}
        path="/team"
        jsonLd={breadcrumbJsonLd([
          { name: t.nav.home, path: "/" },
          { name: t.nav.team, path: "/team" },
        ])}
      />
      <PageHero eyebrow={t.team.pageEyebrow} title={t.team.pageTitle} description={t.team.pageDescription} />

      <section className="pb-24 sm:pb-32">
        <Container>
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200",
                  active === cat
                    ? "border-ink bg-ink text-paper dark:border-paper dark:bg-paper dark:text-ink"
                    : "border-ink/12 dark:border-white/15 text-ink/60 dark:text-paper/60 hover:border-ink/30 dark:hover:border-white/30",
                )}
              >
                {t.team.categories[cat]}
              </button>
            ))}
            <span className="ml-1 text-sm text-ink/40 dark:text-paper/40">
              {team.length} {t.team.count}
            </span>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filtered.map((member, i) => (
              <TeamCard key={member.slug} member={member} index={i} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
