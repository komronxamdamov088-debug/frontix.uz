import { Seo } from "@/components/Seo";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <>
      <Seo title={t.notFound.title} description={t.notFound.description} path="/404" />
      <section className="flex min-h-[70vh] items-center py-32">
        <Container className="text-center">
          <span className="font-display text-7xl font-semibold text-brand-500/30 sm:text-8xl">
            404
          </span>
          <h1 className="mt-6 text-2xl font-semibold sm:text-3xl">{t.notFound.title}</h1>
          <p className="mx-auto mt-3 max-w-md text-base text-ink/60 dark:text-paper/60">
            {t.notFound.description}
          </p>
          <ButtonLink to="/" className="mt-8 inline-flex">
            <ArrowLeft size={16} />
            {t.notFound.back}
          </ButtonLink>
        </Container>
      </section>
    </>
  );
}
