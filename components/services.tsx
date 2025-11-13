"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";
import {
  Handshake,
  RefreshCw,
  TrendingUp,
  Scale
} from "lucide-react";

export function Services() {
  return (
    <div
      id="services"
      className="w-full mx-auto bg-surface-subtle py-24 px-4 md:px-8"
    >
      <Header>
        <h2 className="font-display text-display-md md:text-display-lg text-center mx-auto text-fg">
          Core Advisory Services
        </h2>
      </Header>
      <p className="max-w-3xl text-lg text-muted text-center mx-auto mt-6">
        Expert financial advisory and strategic consulting services to help businesses navigate complex corporate finance challenges—from M&A and restructuring to fundraising and compliance optimization.
      </p>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <ServiceCard
          icon={<Handshake className="h-6 w-6" />}
          title="Mergers & Acquisitions Advisory"
          description="Comprehensive M&A advisory from target identification and due diligence to deal structuring and post-merger integration planning."
          features={[
            "Strategic target identification & screening",
            "Financial & operational due diligence",
            "Valuation analysis (DCF, comparable, precedent)",
            "Deal structuring & negotiation support",
            "Post-merger integration planning"
          ]}
          disclaimer="RSFM provides advisory services only; clients retain full control of transaction decisions and execution."
        />

        <ServiceCard
          icon={<RefreshCw className="h-6 w-6" />}
          title="Financial Restructuring & Turnaround"
          description="Expert guidance for businesses facing financial distress—from debt restructuring and working capital optimization to comprehensive turnaround strategies."
          features={[
            "Financial health diagnostic assessment",
            "Debt restructuring & negotiation strategy",
            "Working capital optimization programs",
            "Cost reduction & efficiency initiatives",
            "Stakeholder communication frameworks"
          ]}
          disclaimer="We provide strategic advisory only; clients maintain responsibility for all operational and financial decisions."
        />

        <ServiceCard
          icon={<TrendingUp className="h-6 w-6" />}
          title="Fundraising & Valuation Advisory"
          description="Strategic support for capital raises from financial modeling and investor materials preparation to valuation analysis and term sheet negotiation."
          features={[
            "Financial projections & modeling",
            "Investor presentation development",
            "Valuation methodology & benchmarking",
            "Investor targeting & outreach strategy",
            "Term sheet review & negotiation support"
          ]}
          disclaimer="Our role is advisory; capital allocation decisions and investor agreements remain with the client."
        />

        <ServiceCard
          icon={<Scale className="h-6 w-6" />}
          title="Tax Optimization & Compliance"
          description="Strategic tax planning, regulatory compliance advisory, and risk management to optimize corporate tax structures while ensuring full regulatory adherence."
          features={[
            "Corporate tax structure optimization",
            "Transfer pricing strategy & documentation",
            "Regulatory compliance assessment",
            "Risk management framework design",
            "Cross-border transaction advisory"
          ]}
          disclaimer="RSFM provides strategic guidance; clients should engage licensed tax and legal professionals for implementation."
        />
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
      className="group relative p-8 rounded-2xl bg-surface border border-subtle hover:border-primary-300/70 shadow-soft hover:shadow-elevated transition-all duration-300"
    >
      <div className="mb-6">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-100/70 dark:bg-primary-900/40 text-primary-600 dark:text-primary-300 mb-4">
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
