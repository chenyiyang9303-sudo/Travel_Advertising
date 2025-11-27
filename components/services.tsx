"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Megaphone,
  Video,
  Users,
  Cpu,
  Globe,
} from "lucide-react";

const services = [
  {
    icon: <Megaphone className="h-6 w-6" />,
    title: "Full-Funnel Advertising",
    description:
      "Integrate Douyin, Bytedance, WeChat ecosystem, OTA, search, and programmatic channels, targeting by traveler interests and journey stages to optimize exposure, leads, and conversion across the full funnel.",
    features: [
      "Budget planning & cross-channel pacing design",
      "Audience/geography/theme segmentation strategy",
      "Livestream, feed, search coordination",
      "Real-time advertising dashboard & auto-alerts",
    ],
    disclaimer: "Covering media resources across 32 cities nationwide, providing specialized models for destinations, hotels, travel photography, and tourism boards.",
  },
  {
    icon: <Video className="h-6 w-6" />,
    title: "Premium Travel Content",
    description:
      "In-house imaging team + creator co-creation, delivering magazine-quality visuals, vlogs, short dramas, aerial footage, and immersive photo stories to make destinations more compelling.",
    features: [
      "Travel shoot scripts, storyboards & scene direction",
      "Aerial/underwater/night multi-scene shooting",
      "Multilingual subtitles & social editing standards",
      "Content asset platform + AI tagging organization",
    ],
    disclaimer: "Single shoot takes 3-7 days to produce 30+ assets adapted for different channels.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Creator/KOL/Livestream Collaboration",
    description:
      "Covering 800+ travel, family, photography creators; matching optimal content tone through audience profiles and real conversion data, balancing reach with sales.",
    features: [
      "Creator screening, negotiation & scheduling management",
      "Livestream scripts & product mix recommendations",
      "Xiaohongshu + Douyin dual-platform matrix",
      "Brand partnership media PR solutions",
    ],
    disclaimer: "Coordinating with official organizational accounts, supporting city/regional tourism themed promotions.",
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: "AI Travel Marketing Tools",
    description:
      "Providing AI copywriting, asset scoring, ad recommendations, and data dashboards to help teams instantly turn inspiration into executable campaigns.",
    features: [
      "AI copywriting + title + hashtag recommendations",
      "Traveler preference insights & intelligent budget allocation",
      "Asset heat rankings & auto-editing",
      "Data dashboard real-time syncs visitor source locations",
    ],
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Destination Digitalization Solutions",
    description:
      "Build ticketing funnels, CRM & membership systems, integrating offline navigation, interactive installations, and WeChat private domain to achieve closed-loop communication and operations.",
    features: [
      "Membership growth path & benefits design",
      "AR navigation / smart wayfinding / interactive installations",
      "OTA / OTA+private domain integration strategy",
      "Data tracking & incremental analysis",
    ],
  },
];

export function Services() {
  return (
    <div
      id="services"
      className="w-full mx-auto bg-surface-subtle py-24 px-4 md:px-8"
    >
      <Header>
        <h2 className="font-display text-display-md md:text-display-lg text-center mx-auto text-fg">
          Core Service Portfolio
        </h2>
      </Header>
      <p className="max-w-3xl text-lg text-muted text-center mx-auto mt-6">
        Growth templates for destinations, hotels, city tourism, and emerging travel brands, coordinating content, creators, advertising, and data as four main pillars to deliver implementable, replicable solutions.
      </p>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </div>
  );
}

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-fit mx-auto p-4 flex items-center justify-center">
      <motion.div
        initial={{
          width: 0,
          height: 0,
          borderRadius: 0,
        }}
        whileInView={{
          width: "100%",
          height: "100%",
        }}
        style={{
          transformOrigin: "top-left",
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="absolute inset-0 h-full border border-subtle w-full"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute -top-1 -left-1 h-2 w-2 bg-surface"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute -top-1 -right-1 h-2 w-2 bg-surface"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute -bottom-1 -left-1 h-2 w-2 bg-surface"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute -bottom-1 -right-1 h-2 w-2 bg-surface"
        />
      </motion.div>
      {children}
    </div>
  );
};

const ServiceCard = ({
  icon,
  title,
  description,
  features,
  disclaimer,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  disclaimer?: string;
}) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative p-8 rounded-2xl bg-white border border-white/60 hover:border-primary-300/70 shadow-[0_20px_60px_rgba(80,96,120,0.1)] hover:shadow-elevated transition-all duration-300"
    >
      <div className="mb-6">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 mb-4 shadow-inner">
          {icon}
        </div>
        <h3 className="font-display text-xl font-semibold text-fg">
          {title}
        </h3>
      </div>

      <p className="text-muted mb-6 leading-relaxed text-base">
        {description}
      </p>

      <ul className="space-y-3 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-sm text-muted">
            <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      {disclaimer && (
        <div className="mt-4 pt-4 border-t border-subtle">
          <p className="text-xs text-subtle italic flex items-start gap-2">
            <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <span>{disclaimer}</span>
          </p>
        </div>
      )}
    </motion.div>
  );
};
