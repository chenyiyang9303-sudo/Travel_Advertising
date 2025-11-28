"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  PenTool,
  Camera,
  Megaphone,
  LineChart,
  ArrowRight,
} from "lucide-react";

export function Process() {
  return (
    <div
      id="process"
      className="w-full mx-auto bg-app py-24 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-display-md md:text-display-lg font-bold text-fg mb-4">
            Five-Step Travel Growth Process
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            From insights to execution, every step revolves around "how to inspire travelers and drive action." Average 6 weeks to see dual lift in exposure and inquiries.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ProcessStep
              step={1}
              icon={<MapPin className="h-8 w-8" />}
              title="Research & Communication · Destination Insights"
              description="Clarify brand positioning, source markets, core products, and seasonal rhythms. Combine traveler profiles and competitor tactics to identify key campaign challenges."
              details={[
                "Customer/product/scenario interviews & desk research",
                "Online data & offline experience review",
                "Traveler decision journey & content needs analysis",
                "Campaign KPI & budget boundary confirmation",
              ]}
              delay={0}
            />

            <ProcessStep
              step={2}
              icon={<PenTool className="h-8 w-8" />}
              title="Strategy Design · Narrative Planning"
              description="Establish brand narrative framework, campaign rhythm, and channel roles to form a complete roadmap of 'content matrix + media layering + creator plan.'"
              details={[
                "Hero banner & theme concept draft",
                "Content pillar/thematic directions",
                "Channel division & deployment rhythm",
                "Creator/media partnership recommendations",
              ]}
              delay={0.1}
            />

            <ProcessStep
              step={3}
              icon={<Camera className="h-8 w-8" />}
              title="Content Production · Travel Shoot Execution"
              description="Travel directors, editing, and AI workflows proceed simultaneously, delivering premium content, vlogs, and livestream teasers for all channels."
              details={[
                "Scripting/storyboarding/location scouting & reconnaissance",
                "Photography/aerial/underwater/night shooting",
                "AI asset expansion & multilingual subtitles",
                "Asset library & rights management",
              ]}
              delay={0.2}
            />

            <ProcessStep
              step={4}
              icon={<Megaphone className="h-8 w-8" />}
              title="Advertising & Creator Synergy"
              description="Creator seeding + brand accounts + paid advertising work in concert, using audience/scenario-based tactics to amplify reach and conversion simultaneously."
              details={[
                "Creator outreach, livestream scripts & scheduling",
                "Instagram/TikTok/OTA coordinated launches",
                "Smart ad recommendations, asset A/B testing",
                "On-ground activations + private domain touchpoints",
              ]}
              delay={0.3}
            />

            <ProcessStep
              step={5}
              icon={<LineChart className="h-8 w-8" />}
              title="Data Optimization & Review"
              description="Track exposure, GMV, visitor origins, and leads via real-time dashboards. Accumulate review templates to turn insights into local team assets."
              details={[
                "Multi-channel data integration & dashboard setup",
                "AI insights on traveler preferences & conversion points",
                "ROI / GMV / lead weekly reports",
                "Mid-to-late stage activities & secondary distribution plans",
              ]}
              delay={0.4}
            />
          </div>
        </div>

        <div className="text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="inline-flex items-center gap-3 bg-white px-8 py-5 rounded-full border border-primary-100 shadow-soft"
          >
            <span className="text-primary-600 font-semibold text-lg">
              Ready to launch your next destination hit campaign?
            </span>
            <ArrowRight className="h-5 w-5 text-primary-600" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const ProcessStep = ({
  step,
  icon,
  title,
  description,
  details,
  delay,
}: {
  step: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="relative group bg-white rounded-2xl p-8 border border-white/60 hover:border-primary-300/70 shadow-[0_20px_60px_rgba(80,96,120,0.12)] hover:shadow-elevated transition-all duration-300"
    >
      <div className="text-left">
        {/* Step Number and Icon */}
        <div className="relative w-16 h-16 mb-6">
          <div className="absolute inset-0 bg-primary-50 rounded-xl group-hover:scale-110 transition-transform duration-300" />
          <div className="absolute inset-1 bg-primary-500 rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:bg-primary-600 transition-colors duration-300">
            {step}
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {icon}
          </div>
        </div>

        {/* Content */}
        <h3 className="font-display text-xl font-bold text-fg mb-4">
          {title}
        </h3>

        <p className="text-muted mb-6 leading-relaxed">
          {description}
        </p>

        {/* Details */}
        <ul className="text-sm text-subtle space-y-3">
          {details.map((detail, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary-500 flex-shrink-0 mt-1.5" />
              <span className="leading-relaxed">{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
