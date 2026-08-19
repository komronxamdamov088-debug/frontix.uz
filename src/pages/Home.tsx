import { Seo } from "@/components/Seo";
import { Hero } from "@/components/sections/home/Hero";
import { ServicesPreview } from "@/components/sections/home/ServicesPreview";
import { WhyFrontix } from "@/components/sections/home/WhyFrontix";
import { TeamPreview } from "@/components/sections/home/TeamPreview";
import { HowWeWork } from "@/components/sections/home/HowWeWork";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { CTASection } from "@/components/sections/CTASection";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <Seo title={t.meta.title} description={t.meta.description} path="/" />
      <Hero />
      <ServicesPreview />
      <WhyFrontix />
      <TeamPreview />
      <HowWeWork />
      <Testimonials />
      <CTASection />
    </>
  );
}
