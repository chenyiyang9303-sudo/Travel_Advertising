"use client";
"use client";

import { Button } from "@/components/button";
import { ArrowUpRight, Minus } from "lucide-react";
import { useCalEmbed } from "@/app/hooks/useCalEmbed";

const heroStats = [
  { value: "$5B+", label: "Assets Under Advisory" },
  { value: "18 yrs", label: "Institutional Track Record" },
  { value: "92%", label: "Client Retention" },
  { value: "40+", label: "Jurisdictions Covered" },
];

export function Hero() {
  const calConfig = useCalEmbed();
  return (
    <section className="relative overflow-hidden bg-[#0b0b0d] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(196,154,108,0.12),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(185,130,94,0.12),transparent_40%)]" />
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(0deg,transparent_90%,rgba(196,154,108,0.25)_100%),linear-gradient(90deg,transparent_90%,rgba(196,154,108,0.25)_100%)] bg-[length:28px_28px]" />
      </div>

      <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-6 py-32 md:px-10 lg:px-12">
        <div className="mb-10 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.5em] text-primary-400">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-primary-500/60">
            <Minus className="h-4 w-4" />
          </span>
          Institutional Financial Leadership
        </div>

        <div className="max-w-4xl space-y-8">
          <h1 className="text-4xl font-semibold leading-[1.2] text-white sm:text-5xl lg:text-[3.75rem]">
            RSFM guides global capital toward resilient, performance-led
            outcomes.
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            We partner with boards, investment committees, and family offices to
            structure capital, manage risk, and deploy bespoke investment
            mandates. Precision, discipline, and accountability define every
            engagement.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button
            as="button"
            variant="primary"
            data-cal-namespace={calConfig.namespace}
            data-cal-link={calConfig.link}
            data-cal-config={`{"layout":"${calConfig.layout}"}`}
          >
            <span>Schedule Consultation</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-colors duration-200 group-hover:text-black group-hover:bg-primary-200">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Button>

          <Button
            as="a"
            href="/#services"
            variant="secondary"
            className="group"
          >
            <span>Explore Services</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 transition-all duration-200 group-hover:border-primary-400">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Button>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-6 border-t border-white/10 pt-12 sm:grid-cols-4">
          {heroStats.map((stat) => (
            <div key={stat.label} className="space-y-2">
              <p className="text-2xl font-semibold tracking-[0.3em] uppercase text-white">
                {stat.value}
              </p>
              <p className="text-xs uppercase tracking-[0.4em] text-neutral-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
