"use client";

import Image from "next/image";
import { Button } from "@/components/button";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useCalEmbed } from "@/app/hooks/useCalEmbed";

const heroBadges = ["AI Content Factory", "Creator Network", "Full-Funnel Ads"];

const heroStats = [
  { value: "200+", label: "Destination Partners" },
  { value: "3.5x", label: "Avg. Reach Increase" },
  { value: "120+", label: "Content Pieces/Month" },
  { value: "8+", label: "Platform Ad Network" },
];

export function Hero() {
  const calConfig = useCalEmbed();
  return (
    <section className="relative overflow-hidden bg-[#080b14] text-white">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1900&q=80"
          alt="Luxury travel inspiration"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#050914]/80 to-[#050910]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(139,77,255,0.24),transparent_45%),radial-gradient(circle_at_bottom,_rgba(255,107,74,0.35),transparent_45%)] opacity-70" />
      </div>

      <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-center px-6 py-28 md:px-10 lg:px-12">
        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold tracking-[0.35em] text-white/70 uppercase">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-[0.65rem] tracking-[0.3em]">
            <Sparkles className="h-3.5 w-3.5 text-primary-200" />
            One World Global Travel
          </span>
          <span>Travel marketing studio</span>
        </div>

        <div className="mt-10 max-w-4xl space-y-8">
          <h1 className="text-4xl sm:text-5xl lg:text-[4.2rem] leading-tight font-display">
            Help Travel Brands Win More Exposure, Traffic, and Story Reach
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-white/85">
            AI Content + Creator Partnerships + Full-Funnel Advertising, telling destination stories with magazine-quality visuals.
            We create immersive experiences for destinations, hotels, travel brands, and tourism boards, balancing brand warmth with conversion efficiency.
          </p>
          <div className="flex flex-wrap gap-3">
            {heroBadges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-xs tracking-[0.3em]">
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button
            as="button"
            variant="primary"
            data-cal-namespace={calConfig.namespace}
            data-cal-link={calConfig.link}
            data-cal-config={`{"layout":"${calConfig.layout}"}`}
          >
            <span>Get Started</span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Button>

          <Button as="a" href="/#case-studies" variant="secondary" className="group !text-white border-white/40">
            <span>View Cases</span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 transition-all duration-200 group-hover:border-white">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 border-t border-white/15 pt-10 sm:grid-cols-4">
          {heroStats.map((stat) => (
            <div key={stat.label} className="space-y-2">
              <p className="text-3xl font-semibold text-white">{stat.value}</p>
              <p className="text-[0.7rem] uppercase tracking-[0.3em] text-white/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
