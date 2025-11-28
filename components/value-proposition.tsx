"use client";

import { motion } from "framer-motion";
import { Sparkles, Bot, Target, BarChart3, Video } from "lucide-react";

const valueProps = [
  {
    title: "One-Stop Travel Marketing",
    description:
      "From strategy and content to deployment and data review, full-process team coordination helps you maintain exposure and conversion during peak and off-seasons.",
    icon: <Sparkles className="h-6 w-6" />,
    tag: "Strategy",
  },
  {
    title: "AI-Powered Content & Ads",
    description:
      "Proprietary AI copywriting and asset scoring system generates ad copy in 5 seconds, intelligently recommends budget and audiences, ensuring every advertising dollar is data-driven.",
    icon: <Bot className="h-6 w-6" />,
    tag: "AI Studio",
  },
  {
    title: "Creator Network + Livestream Synergy",
    description:
      "Access to 800+ travel creator library, quickly matching destination/hotel tone, covering Douyin, Xiaohongshu, OTA, WeChat Video, and other channels.",
    icon: <Video className="h-6 w-6" />,
    tag: "Creators",
  },
  {
    title: "Quantifiable Growth Dashboard",
    description:
      "Real-time view of exposure, GMV, leads, visitor source locations, and booking channels, accumulating marketing assets for faster and more accurate decisions.",
    icon: <BarChart3 className="h-6 w-6" />,
    tag: "Insights",
  },
  {
    title: "Precision Destination Targeting",
    description:
      "Segmented advertising by traveler interests, travel windows, and spending power tags, averaging 3.2x conversion rate improvement.",
    icon: <Target className="h-6 w-6" />,
    tag: "Media",
  },
];

export function ValueProposition() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#fbfcff] via-[#f6f4ef] to-[#f6f4ef] py-16 px-4 md:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(74,143,255,0.22),transparent_45%),radial-gradient(circle_at_bottom,_rgba(139,77,255,0.18),transparent_42%)] opacity-70 pointer-events-none" />
      <div className="relative mx-auto max-w-6xl">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold tracking-[0.4em] uppercase text-primary-500">
            Value Proposition
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-fg mt-4">
            Making travel brands warmer and easier to discover
          </h2>
          <p className="text-lg text-muted mt-4 leading-relaxed">
            One World Global Travel combines creative content, data-driven advertising, creator alliances, and AI tools to create immersive experiential advertising, helping destinations, hotels, travel agencies, and tourism brands generate continuous traffic.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valueProps.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-2xl border border-white/70 bg-white/90 shadow-[0_20px_60px_rgba(81,98,128,0.08)] backdrop-blur p-6"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
                  {value.tag}
                </span>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-100 via-white to-white text-primary-600 flex items-center justify-center shadow-sm">
                  {value.icon}
                </div>
              </div>
              <h3 className="text-2xl font-display text-fg mt-6">{value.title}</h3>
              <p className="text-muted mt-3 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
