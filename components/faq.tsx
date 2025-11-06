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
                Answers to the questions we hear most
              </h2>
              <p className="max-w-xl text-lg text-muted">
                Explore how we scope engagements, align incentives, and deliver
                measurable financial outcomes. Each answer draws from recent
                mandates with corporate finance leaders.
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
                      Need tailored guidance?
                    </h3>
                    <p className="mt-2 text-sm text-muted">
                      Schedule a confidential strategy session with one of our
                      partners to map next steps for your finance agenda.
                    </p>
                    <Link
                      href="/#contact"
                      className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary-600 px-5 py-2 text-sm font-semibold text-white shadow transition hover:bg-primary-700"
                    >
                      Start a conversation
                    </Link>
                  </div>
                </div>
              </div>
              <ul className="space-y-3 text-xs text-subtle">
                <li>
                  <span className="font-semibold text-fg">Office Hours:</span>{" "}
                  Monday to Friday, 8:00–18:00 CST
                </li>
                <li>
                  <span className="font-semibold text-fg">Response Time:</span>{" "}
                  Within 24 hours for new inquiries
                </li>
                <li>
                  <span className="font-semibold text-fg">Contact:</span>{" "}
                  <Link
                    href="mailto:advisory@radiantsoaringfm.com"
                    className="text-primary-600 underline-offset-4 transition hover:underline"
                  >
                    advisory@radiantsoaringfm.com
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
    category: "ENGAGEMENT",
    description: "How we scope work and define success metrics.",
    items: [
      {
        question: "What does a typical engagement timeline look like?",
        answer:
          "Discovery and diagnostic work generally spans two to three weeks. We then sequence delivery in 6 to 8 week sprints with executive readouts every fortnight and KPI tracking dashboards from day one.",
        footnote: "Urgent transactions can be accelerated based on stakeholder availability.",
      },
      {
        question: "How do you structure fees and incentives?",
        answer:
          "We combine a fixed advisory retainer for strategic leadership with performance-based components tied to tangible financial outcomes. This keeps both sides aligned on value creation rather than hourly utilization.",
      },
      {
        question: "Do you integrate with internal teams or external partners?",
        answer:
          "Yes. We embed alongside corporate finance, treasury, and legal teams, and coordinate with external auditors, banks, and counsel to maintain momentum across workstreams.",
      },
    ],
  },
  {
    category: "DELIVERY",
    description: "What collaboration and reporting look like in practice.",
    items: [
      {
        question: "How often will we receive progress updates?",
        answer:
          "Expect weekly written dashboards, live steering committee sessions every other week, and ad-hoc war room support for critical decisions. Stakeholders also receive secure access to the real-time metrics workspace.",
      },
      {
        question: "Can you work across multiple geographies and entities?",
        answer:
          "We frequently orchestrate cross-border engagements. Our operating cadence accounts for regional regulatory nuances, currency impacts, and local filing requirements to keep programmes synchronized.",
      },
      {
        question: "What tools and artifacts will our team receive?",
        answer:
          "Deliverables include integrated financial models, scenario playbooks, risk registers, and implementation roadmaps with ownership clearly assigned for each workstream.",
      },
    ],
  },
  {
    category: "IMPACT",
    description: "Ensuring outcomes are measurable and durable.",
    items: [
      {
        question: "How do you measure success after the engagement ends?",
        answer:
          "We establish baseline metrics during discovery and agree on target ranges with your leadership. Post-engagement, we run quarterly impact reviews to validate that EBITDA, liquidity, and compliance indicators remain on track.",
      },
      {
        question: "Do you support knowledge transfer to internal teams?",
        answer:
          "Absolutely. Every workstream includes playbooks, training workshops, and handover sessions so internal teams can sustain improvements without external dependency.",
      },
      {
        question: "What happens if market conditions change mid-project?",
        answer:
          "We build scenario pivots into the operating model and run rapid response simulations. This allows us to re-sequence initiatives or hedge exposures while maintaining momentum toward core outcomes.",
      },
    ],
  },
];
