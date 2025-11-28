"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";

export function FAQSection() {
  return (
    <section
      id="faq"
      className="relative w-full bg-surface-subtle py-24 px-4 md:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 xl:grid-cols-[0.9fr_1.1fr]">
          <aside className="space-y-10">
            <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-subtle">
              FAQ
              <span className="h-px w-10 bg-primary-500/70" />
            </div>
            <div className="space-y-6">
              <h2 className="font-display text-display-md font-bold text-fg md:text-display-lg">
                Your Top Partnership Questions
              </h2>
              <p className="max-w-xl text-lg text-muted">
                Learn how we plan travel shoots, advertising, and AI tool deployment to ensure every campaign has both inspiration and certainty.
              </p>
            </div>

            <div className="grid gap-6 text-sm text-muted">
              <div className="rounded-3xl border border-primary-400/60 bg-gradient-to-br from-primary-500/10 via-surface to-orange-400/10 p-8 shadow-soft">
                <div className="flex items-start gap-4">
                  <span className="rounded-full bg-primary-500/15 p-2 text-primary-600">
                    <HelpCircle className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-fg">
                      Want a Custom Campaign?
                    </h3>
                    <p className="mt-2 text-sm text-muted">
                      Book a 30-minute workshop where we'll simulate campaign paths based on your destination, target audience, and budget.
                    </p>
                    <Link
                      href="/#contact"
                      className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary-600 px-5 py-2 text-sm font-semibold text-white shadow transition hover:bg-primary-700"
                    >
                      Book Strategy Session
                    </Link>
                  </div>
                </div>
              </div>
              <ul className="space-y-3 text-xs text-subtle">
                <li>
                  <span className="font-semibold text-fg">Office Hours:</span>{" "}
                  Mon–Fri 10:00 - 19:00 (GMT+8)
                </li>
                <li>
                  <span className="font-semibold text-fg">Response Time:</span>{" "}
                  New projects within 24 hours
                </li>
                <li>
                  <span className="font-semibold text-fg">Contact:</span>{" "}
                  <Link
                    href="mailto:Executive@iglobaltravel.top"
                    className="text-primary-400 transition-colors hover:text-primary-300"
                  >
                    Executive@iglobaltravel.top
                  </Link>
                </li>
              </ul>
            </div>
          </aside>

          <div className="space-y-10">
            {faqGroups.map((group, groupIndex) => (
              <div
                key={group.category}
                className="rounded-3xl border border-subtle/80 bg-surface px-6 py-8 shadow-soft"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-subtle">
                      {group.category}
                    </p>
                    <p className="mt-2 text-sm text-muted">
                      {group.description}
                    </p>
                  </div>
                  <span className="rounded-full bg-primary-500/10 p-2 text-primary-500">
                    <Sparkles className="h-5 w-5" />
                  </span>
                </div>
                <div className="mt-6 space-y-4">
                  {group.items.map((item, itemIndex) => (
                    <FAQItem
                      key={`${group.category}-${item.question}`}
                      item={item}
                      defaultOpen={groupIndex === 0 && itemIndex === 0}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const FAQItem = ({
  item,
  defaultOpen = false,
}: {
  item: FAQ;
  defaultOpen?: boolean;
}) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      className={cn(
        "rounded-2xl border px-5 py-4 transition-all duration-300",
        open
          ? "border-primary-400/60 bg-surface shadow-soft"
          : "border-subtle/70 bg-surface-subtle/40 hover:border-primary-400/30"
      )}
    >
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 text-left"
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-fg">
          {item.question}
        </span>
        <ChevronDown
          className={cn(
            "h-5 w-5 transform text-primary-500 transition-transform duration-300",
            open && "-rotate-180"
          )}
        />
      </button>

      <div
        className={cn(
          "grid overflow-hidden text-sm leading-relaxed text-muted transition-all duration-300",
          open ? "mt-3 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="min-h-0">{item.answer}</div>
      </div>

      {item.footnote && (
        <p className="mt-3 text-xs text-subtle">{item.footnote}</p>
      )}
    </div>
  );
};

interface FAQ {
  question: string;
  answer: string;
  footnote?: string;
}

interface FAQGroup {
  category: string;
  description: string;
  items: FAQ[];
}

const faqGroups: FAQGroup[] = [
  {
    category: "Partnership Model",
    description: "How we start projects, define goals, and structure fees",
    items: [
      {
        question: "What does the collaboration fee include?",
        answer:
          "Typically includes strategy fees, content/production fees, advertising management fees, and optional AI tool subscriptions. Budgets can be phased, with different ratios for peak/off seasons. We'll provide a proposal and quote within 3 business days after the Brief Workshop.",
      },
      {
        question: "Do we need to provide materials or scripts?",
        answer:
          "If you have existing materials, great—we'll collaborate with our in-house travel content team. If not, we can handle the complete process: scripting, scouting, shooting, editing, and post-production, ensuring consistent tone across all platforms.",
      },
      {
        question: "How long does a project typically take?",
        answer:
          "Regular campaigns take about 4-6 weeks from research to launch. For urgent activations, we can complete core content and deployment within two weeks. Large destination renewal projects are typically planned quarterly.",
      },
    ],
  },
  {
    category: "Execution & Delivery",
    description: "How content, creators, and advertising connect",
    items: [
      {
        question: "Can we select specific creators or platforms?",
        answer:
          "Yes. We have a database of 800+ creators, filtered by destination tone, audience demographics, and historical performance. Platform-wise, we support combinations of Douyin, Xiaohongshu, Kuaishou, Video Account, OTA, and programmatic media.",
      },
      {
        question: "How do you manage livestreams or large offline events?",
        answer:
          "We provide complete rundowns, scripts, and material lists, deploy on-site directors and ad monitoring, while setting up contingency content and camera positions to ensure smooth cross-platform streaming and interaction.",
      },
      {
        question: "What deliverables are included?",
        answer:
          "Includes strategy docs, creative scripts, travel content (raw footage + platform-specific versions), creator co-creation handbook, ad assets, and real-time data dashboards. Projects conclude with a review and secondary distribution recommendations.",
      },
    ],
  },
  {
    category: "Budget & Performance",
    description: "How to evaluate ROI? Do you provide data tools?",
    items: [
      {
        question: "What's the typical starting budget for advertising?",
        answer:
          "Small-scale activities suggest ≥ $43K to form a complete content + advertising loop; destination-level campaigns typically range from $115-290K. We'll provide detailed ratio recommendations based on seasonality and channels.",
      },
      {
        question: "How do you measure effectiveness?",
        answer:
          "We establish baselines for exposure, leads, GMV, visitor origins, and membership growth before project launch, provide dashboard + weekly reports during execution, and deliver ROI/GMV/repeat purchase rate comparisons upon completion.",
      },
      {
        question: "Can I use only AI tools or individual services?",
        answer:
          "Yes. AI Studio, content production, creator partnerships, and advertising management can all be standalone projects; we also welcome gradual expansion into a complete growth plan.",
      },
    ],
  },
];
