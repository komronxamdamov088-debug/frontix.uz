import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TeamCard } from "@/components/ui/TeamCard";
import { ButtonLink } from "@/components/ui/Button";
import { team } from "@/data/team";
import { useLanguage } from "@/context/LanguageContext";

export function TeamPreview() {
  const { t } = useLanguage();
  const featured = [
    team.find((m) => m.roleKey === "founder")!,
    team.find((m) => m.roleKey === "coFounder")!,
    team.find((m) => m.roleKey === "designer")!,
    team.find((m) => m.roleKey === "admin")!,
  ];

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow={t.team.previewEyebrow}
            title={t.team.previewTitle}
            description={t.team.previewDescription}
          />
          <ButtonLink to="/team" variant="secondary" className="hidden shrink-0 sm:inline-flex">
            {t.team.viewAll}
            <ArrowRight size={16} />
          </ButtonLink>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((member, i) => (
            <TeamCard key={member.slug} member={member} index={i} />
          ))}
        </div>

        <ButtonLink to="/team" variant="secondary" className="mt-10 flex sm:hidden">
          {t.team.viewAll}
          <ArrowRight size={16} />
        </ButtonLink>
      </Container>
    </section>
  );
}
