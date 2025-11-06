"use client";

import Image from "next/image";
import { Quote as QuoteIcon, Star } from "lucide-react";

import { cn } from "@/lib/utils";

const testimonialMetrics = [
  {
    value: "215%",
    label: "Average ROI",
    description: "Across transformation engagements over the last 24 months.",
  },
  {
    value: "98%",
    label: "Client retention",
    description: "Clients who renew or expand advisory partnerships annually.",
  },
  {
    value: "12 weeks",
    label: "Time to impact",
    description: "Median period to deliver measurable financial uplift.",
  },
];

export function Testimonials() {
  if (!testimonials.length) {
    return null;
  }

  const [spotlight, ...others] = testimonials;

  return (
    <section
      id="testimonials"
      className="relative w-full bg-app py-24 px-4 md:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-12 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-subtle">
              Testimonials
              <span className="h-px w-10 bg-primary-500/70" />
            </div>
            <div className="space-y-6">
              <h2 className="font-display text-display-md font-bold text-fg md:text-display-lg">
                Trusted partners for mission-critical finance initiatives
              </h2>
              <p className="max-w-2xl text-lg text-muted">
                Board members, CFOs, and founders rely on our team to navigate
                capital market inflection points, restructure complex portfolios,
                and unlock measurable performance gains.
              </p>
            </div>
            <dl className="grid gap-6 sm:grid-cols-3">
              {testimonialMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-subtle/80 bg-surface px-6 py-5 shadow-soft"
                >
                  <dt className="text-xs font-semibold uppercase tracking-wide text-subtle">
                    {metric.label}
                  </dt>
                  <dd className="mt-3 text-2xl font-semibold text-fg">
                    {metric.value}
                  </dd>
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    {metric.description}
                  </p>
                </div>
              ))}
            </dl>
          </div>
          <TestimonialSpotlight testimonial={spotlight} />
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {others.map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.name}-${index}`}
              testimonial={testimonial}
              accentIndex={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const badgeLabels = [
  "Capital Strategy",
  "Operational Excellence",
  "Risk & Compliance",
  "Growth Advisory",
];

const TestimonialSpotlight = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <article className="relative isolate overflow-hidden rounded-3xl border border-primary-300/60 bg-gradient-to-br from-primary-500/15 via-surface to-orange-500/10 px-8 py-10 shadow-elevated backdrop-blur">
      <QuoteIcon
        className="pointer-events-none absolute -top-14 -right-12 h-56 w-56 text-primary-500/15"
        aria-hidden="true"
      />
      <div className="flex items-center gap-4">
        <Image
          src={testimonial.src}
          alt={testimonial.name}
          width={64}
          height={64}
          className="h-16 w-16 rounded-full border-4 border-white/40 object-cover shadow-md"
        />
        <div className="space-y-1">
          <p className="text-base font-semibold text-fg">{testimonial.name}</p>
          {testimonial.designation && (
            <p className="text-sm text-primary-700/80 dark:text-primary-200/80">
              {testimonial.designation}
            </p>
          )}
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <div className="flex items-center gap-1 text-amber-500">
          {Array.from({ length: 5 }).map((_, starIndex) => (
            <Star
              key={`spotlight-star-${starIndex}`}
              className="h-4 w-4"
              fill="currentColor"
              stroke="none"
            />
          ))}
          <span className="ml-2 text-xs font-medium uppercase tracking-[0.3em] text-amber-600">
            5.0 rating
          </span>
        </div>
        <p className="text-lg leading-relaxed text-fg">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>

      <div className="mt-8 grid gap-4 rounded-2xl border border-primary-300/40 bg-surface/70 p-6 text-sm text-muted md:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-wide text-subtle">
            Focus
          </p>
          <p className="mt-1 font-medium text-fg">
            Strategic finance transformation
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-subtle">
            Result
          </p>
          <p className="mt-1">
            Delivered compound EBITDA uplift and liquidity resilience in under
            six months.
          </p>
        </div>
      </div>
    </article>
  );
};

const TestimonialCard = ({
  testimonial,
  accentIndex,
}: {
  testimonial: Testimonial;
  accentIndex: number;
}) => {
  const highlight = accentIndex % 4 === 1;
  const badgeLabel = badgeLabels[accentIndex % badgeLabels.length];

  return (
    <article
      className={cn(
        "relative flex h-full flex-col justify-between rounded-2xl border bg-surface p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated",
        highlight
          ? "border-primary-400/60 bg-gradient-to-br from-primary-500/10 via-surface to-orange-400/5"
          : "border-subtle/80"
      )}
    >
      <QuoteIcon
        className={cn(
          "pointer-events-none absolute -right-6 -top-6 h-24 w-24 text-primary-500/10",
          highlight ? "text-primary-500/15" : "text-primary-500/10"
        )}
        aria-hidden="true"
      />

      {highlight && (
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary-500/10 px-3 py-1 text-xs font-medium text-primary-700 dark:text-primary-200">
          <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
          {badgeLabel}
        </span>
      )}

      <p className="relative mt-4 text-base leading-relaxed text-muted">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      <div className="mt-8 flex items-center gap-4">
        <Image
          src={testimonial.src}
          alt={testimonial.name}
          width={48}
          height={48}
          className="h-12 w-12 rounded-full border border-white/40 object-cover shadow"
        />
        <div className="space-y-1">
          <p className="text-sm font-semibold text-fg">{testimonial.name}</p>
          {testimonial.designation && (
            <p className="text-xs text-subtle">{testimonial.designation}</p>
          )}
        </div>
      </div>
    </article>
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
