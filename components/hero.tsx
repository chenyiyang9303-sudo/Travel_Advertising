"use client";
"use client";

import { Button } from "@/components/button";
import { ArrowUpRight, Minus } from "lucide-react";
import { useCalEmbed } from "@/app/hooks/useCalEmbed";

const heroStats = [
  { value: "$2.8B+", label: "Transaction Value Advised" },
  { value: "15 yrs", label: "M&A Advisory Experience" },
  { value: "95%", label: "Client Success Rate" },
  { value: "120+", label: "Deals Completed" },
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
          Corporate Finance Excellence
        </div>

        <div className="max-w-4xl space-y-8">
          <h1 className="text-4xl font-semibold leading-[1.2] text-white sm:text-5xl lg:text-[3.75rem]">
            Strategic Financial Advisory for Corporate Growth and Transformation
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            RSFM partners with businesses, founders, and boards to navigate complex
            financial decisions—from mergers and acquisitions to restructuring,
            fundraising, and compliance optimization. We provide expert advisory
            and strategic consulting services only; clients retain full control
            of all capital and operational decisions.
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
