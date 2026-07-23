import { HomeHero } from "@/components/home/hero";
import { ServicesSection } from "@/components/home/services-section";
import { OurWorks } from "@/components/home/our-works";
import { Achievements } from "@/components/home/achievements";
import { FAQSection } from "@/components/home/faq-section";
import { CtaStrip } from "@/components/cta-strip";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ServicesSection />
      <OurWorks />
      <Achievements />
      <FAQSection />
      <CtaStrip />
    </>
  );
}
