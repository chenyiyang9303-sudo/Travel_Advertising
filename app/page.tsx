import { Services } from "@/components/services";
import { CaseStudies } from "@/components/case-studies";
import { Process } from "@/components/process";
import { Testimonials } from "@/components/testimonials";
import { CTAWithDashedGridLines } from "@/components/cta";
import { Hero } from "@/components/hero";
import { FeaturedContent } from "@/components/featured-content";
import { ValueProposition } from "@/components/value-proposition";
import { FAQSection } from "@/components/faq";
import { AISuite } from "@/components/ai-suite";
import { PartnerWall } from "@/components/partner-logos";
import { Pricing } from "@/components/pricing";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <ValueProposition />
      <Services />
      <CaseStudies />
      <AISuite />
      <PartnerWall />
      <Process />
      <FeaturedContent />
      <Testimonials />
      <Pricing />
      <FAQSection />
      <CTAWithDashedGridLines />
    </main>
  );
}
