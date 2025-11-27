"use client";

import { motion } from "framer-motion";
import { Bot, PenSquare, Palette, GaugeCircle } from "lucide-react";
import Image from "next/image";

const aiTools = [
  {
    title: "AI Video Generation",
    description:
      "Upload visitor footage or scripts to auto-generate vertical vlogs, short dramas, and ads, with one-click brand integration for subtitles, music, and logos.",
    icon: <Bot className="h-5 w-5" />,
    metrics: "Saves 65% production time on average",
  },
  {
    title: "AI Copywriting & Script Studio",
    description:
      "Enter campaign theme and audience profile to generate ad copy, livestream scripts, post titles, and hashtags in 5 seconds, auto-filtering sensitive words.",
    icon: <PenSquare className="h-5 w-5" />,
    metrics: "10+ platform content templates",
  },
  {
    title: "Asset Scoring & Heat Rankings",
    description:
      "AI identifies visual emotion, shot types, and composition to score assets and generate improvement suggestions, quickly finding viral elements.",
    icon: <Palette className="h-5 w-5" />,
    metrics: "83% prediction accuracy",
  },
  {
    title: "Smart Ad Recommendations",
    description:
      "Real-time data-driven budget recommendations, audience expansion, and creative fatigue alerts for Douyin, Bytedance, Kuaishou, WeChat ads, and more.",
    icon: <GaugeCircle className="h-5 w-5" />,
    metrics: "32% average ROI increase",
  },
];

export function AISuite() {
  return (
    <section id="ai-tools" className="w-full bg-[#fbfcff] py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="space-y-4">
            <p className="text-sm font-semibold tracking-[0.4em] uppercase text-accent-500">
              AI Tools
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-fg">
              WanderAds AI Studio
            </h2>
            <p className="text-lg text-muted">
              Connecting creativity, production, advertising, and data—enabling teams to launch campaigns anytime, anywhere. Each tool works standalone or integrates with your existing workflows.
            </p>
          </div>
          <div className="mt-10 grid gap-4">
            {aiTools.map((tool, index) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="rounded-2xl border border-white shadow-[0_20px_60px_rgba(74,143,255,0.08)] bg-white/90 backdrop-blur p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-2xl bg-accent-50 text-accent-500 flex items-center justify-center shadow-inner">
                    {tool.icon}
                  </div>
                  <div>
                    <p className="font-display text-xl text-fg">{tool.title}</p>
                    <p className="text-xs uppercase tracking-[0.3em] text-accent-500">
                      {tool.metrics}
                    </p>
                  </div>
                </div>
                <p className="text-muted mt-4 leading-relaxed">{tool.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-[32px] border border-[#e6ebff] bg-gradient-to-br from-white via-[#eef2ff] to-[#f9f4ff] shadow-[0_25px_80px_rgba(23,35,90,0.18)] p-6 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(74,143,255,0.2),transparent_60%),radial-gradient(circle_at_bottom,_rgba(139,77,255,0.2),transparent_55%)]" />
          <div className="relative bg-white/80 rounded-3xl p-6 shadow-inner border border-white/60">
            <p className="text-xs uppercase tracking-[0.4em] text-primary-500">
              Live Dashboard
            </p>
            <h3 className="text-2xl font-display text-fg mt-3">
              Omni-Channel Traveler Data Dashboard
            </h3>
            <p className="text-sm text-muted mt-2">
              Aggregates exposure, GMV, visitor origins, and asset performance with real-time alerts on anomalies and opportunities.
            </p>
            <div className="mt-6 rounded-2xl overflow-hidden border border-white shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1000&q=80"
                alt="AI dashboard preview"
                width={800}
                height={600}
                className="h-64 w-full object-cover"
              />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-muted">
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.3em] text-primary-500">
                  Live GMV
                </p>
                <p className="text-3xl font-semibold text-fg mt-2">¥8.7M</p>
                <p className="text-xs text-success mt-1">+62% WoW</p>
              </div>
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.3em] text-primary-500">
                  Top Source Cities
                </p>
                <p className="text-xl font-semibold text-fg mt-2">Shanghai · Chengdu · Bangkok</p>
                <p className="text-xs text-muted mt-1">Auto-increased budget by 15%</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
