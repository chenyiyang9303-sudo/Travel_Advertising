"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export function Testimonials() {
  return (
    <div
      id="testimonials"
      className="relative w-full bg-white dark:bg-gray-900 py-24 px-4 md:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-display-md md:text-display-lg font-bold text-accent-900 dark:text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-accent-600 dark:text-accent-300 max-w-3xl mx-auto">
            20+ companies trust us to deliver transformational results. Here's what industry leaders say about working with our team to unlock exponential growth.
          </p>
        </div>

        <div className="relative">
          <div className="h-full overflow-hidden w-full">
            <TestimonialsGrid />
          </div>
        </div>
      </div>
    </div>
  );
}

export const TestimonialsGrid = () => {
  const first = testimonials.slice(0, 6);
  const second = testimonials.slice(6, 12);

  return (
    <div className="relative [mask-image:linear-gradient(to_right,transparent_0%,white_10%,white_90%,transparent_100%)]">
      <Marquee direction="right" pauseOnHover speed={50}>
        {first.map((testimonial, index) => (
          <Card key={`testimonial-${testimonial.src}-${index}`}>
            <Quote>{testimonial.quote}</Quote>
            <div className="flex gap-2 items-center mt-8">
              <Image
                src={testimonial.src}
                alt={testimonial.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <QuoteDescription className="text-neutral-600 dark:text-neutral-300">
                  {testimonial.name}
                </QuoteDescription>
                <QuoteDescription className="text-neutral-400">
                  {testimonial.designation}
                </QuoteDescription>
              </div>
            </div>
          </Card>
        ))}
      </Marquee>
      <Marquee className="mt-10" direction="right" pauseOnHover speed={70}>
        {second.map((testimonial, index) => (
          <Card key={`testimonial-${testimonial.src}-${index}`}>
            <Quote>{testimonial.quote}</Quote>
            <div className="flex gap-2 items-center mt-8">
              <Image
                src={testimonial.src}
                alt={testimonial.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <QuoteDescription className="text-neutral-300">
                  {testimonial.name}
                </QuoteDescription>
                <QuoteDescription className="text-neutral-400">
                  {testimonial.designation}
                </QuoteDescription>
              </div>
            </div>
          </Card>
        ))}
      </Marquee>
    </div>
  );
};
export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "p-6 md:p-8 rounded-2xl min-h-[230px] h-full max-w-md md:max-w-lg mx-4 bg-white dark:bg-accent-800 border border-accent-100 dark:border-accent-700/50 hover:border-primary-200 dark:hover:border-primary-600 shadow-sm hover:shadow-xl transition-all duration-300 group",
        className
      )}
    >
      {children}
    </div>
  );
};

export const Quote = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-sm md:text-base font-medium dark:text-accent-200 text-accent-700 py-2 leading-relaxed",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const QuoteDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-xs md:text-sm font-medium dark:text-accent-400 text-accent-600 max-w-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

interface Testimonial {
  src: string;
  quote: string;
  name: string;
  designation?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Michael Chen",
    quote:
      "Their M&A advisory was exceptional. We successfully acquired a complementary business, achieving $3.2M in annual cost synergies and strengthening our market position significantly.",
    src: "https://i.pravatar.cc/150?img=1",
    designation: "CEO, TechManu Corp",
  },
  {
    name: "Jennifer Li",
    quote:
      "The financial restructuring plan saved our company. EBITDA improved from -$2.1M to +$4.3M in 14 months, and we reduced debt by 56%.",
    src: "https://i.pravatar.cc/150?img=2",
    designation: "CFO, RetailMax Inc",
  },
  {
    name: "David Zhang",
    quote:
      "Their fundraising advisory was instrumental. We secured $12M Series A at a $45M valuation with 8 term sheets. Their financial modeling was world-class.",
    src: "https://i.pravatar.cc/150?img=3",
    designation: "Founder & CEO, FinFlow Technologies",
  },
  {
    name: "Dr. Sarah Martinez",
    quote:
      "The compliance framework they built was comprehensive. We remediated 23 gaps, passed regulatory audits with zero major findings, and achieved full SOX compliance.",
    src: "https://i.pravatar.cc/150?img=4",
    designation: "Chief Compliance Officer, MedCare Systems",
  },
  {
    name: "Robert Kim",
    quote:
      "Outstanding working capital optimization. They unlocked $2.8M in hidden cash through receivables management and inventory optimization.",
    src: "https://i.pravatar.cc/150?img=5",
    designation: "VP Finance, GlobalTrade Logistics",
  },
  {
    name: "Amanda Rodriguez",
    quote:
      "Their valuation analysis for our divestiture was spot-on. We achieved 18% premium over initial offers and closed the deal in 5 months.",
    src: "https://i.pravatar.cc/150?img=6",
    designation: "Corporate Development Director, IndustrialTech Holdings",
  },
  {
    name: "James Park",
    quote:
      "Debt restructuring strategy was brilliant. We refinanced $18M at 3.2% lower rates, extending maturity by 4 years and saving $1.1M annually.",
    src: "https://i.pravatar.cc/150?img=7",
    designation: "CFO, UrbanDev Properties",
  },
  {
    name: "Lisa Thompson",
    quote:
      "Financial due diligence uncovered $800K in hidden liabilities and negotiation leverage. The deal price adjusted 12% in our favor.",
    src: "https://i.pravatar.cc/150?img=8",
    designation: "M&A Director, Pacific Ventures",
  },
  {
    name: "Dr. William Chang",
    quote:
      "Their tax optimization strategy reduced our effective rate by 7 percentage points while maintaining full compliance. Saved $1.4M in first year.",
    src: "https://i.pravatar.cc/150?img=9",
    designation: "CFO, BioPharmaTech Inc",
  },
  {
    name: "Maria Santos",
    quote:
      "Capital structure optimization improved our debt-to-equity ratio from 3.2 to 1.8, reduced interest expense by $600K annually.",
    src: "https://i.pravatar.cc/150?img=10",
    designation: "Treasurer, NorthStar Manufacturing",
  },
  {
    name: "Daniel Lee",
    quote:
      "IPO readiness program was comprehensive. We successfully listed at $220M valuation with strong institutional demand and raised $35M.",
    src: "https://i.pravatar.cc/150?img=11",
    designation: "CEO, CloudServe Solutions",
  },
  {
    name: "Emma Wilson",
    quote:
      "Financial transformation project delivered 40% faster month-end close, real-time reporting dashboards, and eliminated 95% of manual reconciliations.",
    src: "https://i.pravatar.cc/150?img=12",
    designation: "Controller, MegaRetail Group",
  },
];
