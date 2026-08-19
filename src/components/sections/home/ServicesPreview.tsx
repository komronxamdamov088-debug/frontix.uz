import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { ButtonLink } from "@/components/ui/Button";
import { services } from "@/data/services";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight } from "lucide-react";

export function ServicesPreview() {
  const { t } = useLanguage();

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow={t.servicesPreview.eyebrow}
            title={t.servicesPreview.title}
            description={t.servicesPreview.description}
          />
          <ButtonLink to="/services" variant="secondary" className="hidden shrink-0 sm:inline-flex">
            {t.servicesPreview.viewAll}
            <ArrowRight size={16} />
          </ButtonLink>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>

        <ButtonLink to="/services" variant="secondary" className="mt-10 flex sm:hidden">
          {t.servicesPreview.viewAll}
          <ArrowRight size={16} />
        </ButtonLink>
      </Container>
    </section>
  );
}
