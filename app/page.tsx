import { Services } from "@/components/services";
import { CaseStudies } from "@/components/case-studies";
import { Process } from "@/components/process";
import { Testimonials } from "@/components/testimonials";
import { CTAWithDashedGridLines } from "@/components/cta";
import { Hero } from "@/components/hero";
import { FeaturedContent } from "@/components/featured-content";
import { ComplianceDisclaimer } from "@/components/compliance-disclaimer";
import { FAQSection } from "@/components/faq";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <ComplianceDisclaimer />
      <Services />
      <Process />
      <CaseStudies />
      <FeaturedContent />
      <Testimonials />
      <FAQSection />
      <CTAWithDashedGridLines />
    </main>
  );
}
