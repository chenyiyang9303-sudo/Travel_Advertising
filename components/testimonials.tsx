"use client";

import Image from "next/image";
import { Quote as QuoteIcon, Star } from "lucide-react";

import { cn } from "@/lib/utils";

const testimonialMetrics = [
  {
    value: "235%",
    label: "Average Exposure Increase",
    description: "Average uplift from cross-channel destination campaigns.",
  },
  {
    value: "93%",
    label: "Lead/GMV Growth",
    description: "Combined performance from peak and off-season strategies.",
  },
  {
    value: "14 Days",
    label: "Script to Launch",
    description: "Average delivery cycle for travel content campaigns.",
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
                Growth Partners for Tourism Groups & Premium Hotels
              </h2>
              <p className="max-w-2xl text-lg text-muted">
                City tourism boards, resorts, hotel groups, and travel brands trust us to bring warmer experiences and lasting conversions through creativity and data.
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
  "Destination Launch",
  "Hotel Recovery",
  "Creator Program",
  "AI Media Hub",
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
            Destination Renewal & City Roadshow Campaigns
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-subtle">
            Result
          </p>
          <p className="mt-1">
            Launched omni-channel content within 4 weeks, achieving 3.8x exposure and 2.5x inquiry growth.
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
    name: "Jing Wang",
    quote:
      "After repositioning our hot spring resort's narrative, our first content wave topped the Xiaohongshu local trending list. Livestream + creator seeding brought 4.6x booking growth.",
    src: "https://i.pravatar.cc/150?img=1",
    designation: "Marketing Director · Yunjing Hot Spring Resort",
  },
  {
    name: "Marco Chen",
    quote:
      "WanderAds' travel content team works like a film crew—shot ten short films in three days, delivered edits overnight. We launched our peak season two weeks ahead of schedule.",
    src: "https://i.pravatar.cc/150?img=2",
    designation: "PR Lead · Sanya Travel Photography Base",
  },
  {
    name: "Luca Mirren",
    quote:
      "The bilingual content studio helped us speak to Chinese travelers authentically. Occupancy recovered to 92% within one quarter.",
    src: "https://i.pravatar.cc/150?img=3",
    designation: "GM · Boutique Voyage Hotels",
  },
  {
    name: "Yan Li",
    quote:
      "AI asset scoring is genuinely useful—automatically tells us which vlogs have the highest conversion potential. Advertising efficiency improved 38% versus before.",
    src: "https://i.pravatar.cc/150?img=4",
    designation: "Chief Marketing Officer · Xilu Valley Scenic Area",
  },
  {
    name: "Patricia Gomez",
    quote:
      "Creator program + OTA media boosted our island campaign, delivering 3.1x more bookings from Mainland China versus last year.",
    src: "https://i.pravatar.cc/150?img=5",
    designation: "VP Marketing · Maldives Sun Resorts",
  },
  {
    name: "Xing Song",
    quote:
      "Our city renewal campaign went from script to execution in just 21 days. The night tour routes and AR navigation also became highlights in visitor reviews.",
    src: "https://i.pravatar.cc/150?img=6",
    designation: "Brand Lead · Chengdu Culture & Tourism Group",
  },
  {
    name: "Yuki Yamada",
    quote:
      "They orchestrated our sakura season livestream marathon across TikTok, Douyin, and LINE. Merch sell-through hit 95% in 48 hours.",
    src: "https://i.pravatar.cc/150?img=7",
    designation: "Digital Director · Kyoto Moments",
  },
  {
    name: "Yifan Zhao",
    quote:
      "The creator co-creation handbook was so detailed—covering attraction stories, shot suggestions, risk alerts. Collaboration experience was exceptional, brand tone fully preserved.",
    src: "https://i.pravatar.cc/150?img=8",
    designation: "Marketing Manager · Aranya Living",
  },
  {
    name: "Marta Rossi",
    quote:
      "WanderAds connected us with Chinese creators who truly love mountains. Our Dolomites experience reached 12M views organically.",
    src: "https://i.pravatar.cc/150?img=9",
    designation: "Head of Content · Alpine Trails Italy",
  },
  {
    name: "Yi Tang",
    quote:
      "From 0-to-1 night economy brand building, WanderAds helped us build a private domain system and handed over the data dashboard for continued team iteration.",
    src: "https://i.pravatar.cc/150?img=10",
    designation: "General Manager · Ningxia Shapotou Culture & Tourism",
  },
  {
    name: "Isabelle Perrot",
    quote:
      "The AI media cockpit alerted us when Paris bookings spiked; we redirected budget to focus on Shanghai travelers and doubled ROI.",
    src: "https://i.pravatar.cc/150?img=11",
    designation: "Head of Growth · Voyage Lumière",
  },
  {
    name: "Xi He",
    quote:
      "They connected travel content, advertising, and exhibition interactive installations into one seamless flow, helping us attract 180K visitors in our opening month.",
    src: "https://i.pravatar.cc/150?img=12",
    designation: "Brand Director · Mountain & Sea Story Museum",
  },
];
