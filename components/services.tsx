"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Shield,
  TrendingUp,
  PieChart
} from "lucide-react";

export function Services() {
  return (
    <div
      id="services"
      className="w-full mx-auto bg-surface-subtle py-24 px-4 md:px-8"
    >
      <Header>
        <h2 className="font-display text-display-md md:text-display-lg text-center mx-auto text-fg">
          Premier Fund Management Services
        </h2>
      </Header>
      <p className="max-w-3xl text-lg text-muted text-center mx-auto mt-6">
        Institutional-grade investment solutions and fund management for sophisticated investors seeking exceptional returns.
      </p>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <ServiceCard
          icon={<Building2 className="h-6 w-6" />}
          title="Portfolio Management"
          description="Active portfolio management strategies designed to maximize risk-adjusted returns. Our experienced team leverages proprietary research and advanced analytics to deliver superior performance."
          features={[
            "Discretionary portfolio management",
            "Multi-asset class strategies",
            "Alternative investment allocation",
            "Dynamic rebalancing & risk control",
            "Performance reporting & attribution"
          ]}
        />

        <ServiceCard
          icon={<Shield className="h-6 w-6" />}
          title="Risk Management & Hedging"
          description="Sophisticated risk management frameworks to protect capital and optimize portfolio outcomes. We implement advanced hedging strategies and stress testing protocols."
          features={[
            "Quantitative risk modeling",
            "Derivatives-based hedging strategies",
            "VaR & scenario analysis",
            "Counterparty risk management",
            "Liquidity stress testing"
          ]}
        />

        <ServiceCard
          icon={<TrendingUp className="h-6 w-6" />}
          title="Private Equity & Alternative Investments"
          description="Access to exclusive private equity opportunities and alternative investment strategies. We source, structure, and manage investments in high-growth private companies and specialized funds."
          features={[
            "Private equity deal sourcing",
            "Venture capital investments",
            "Real assets & infrastructure",
            "Credit & distressed opportunities",
            "Co-investment structures"
          ]}
        />

        <ServiceCard
          icon={<PieChart className="h-6 w-6" />}
          title="Institutional Advisory"
          description="Tailored investment solutions for institutional clients including pension funds, endowments, and family offices. Strategic asset allocation aligned with long-term objectives and liability profiles."
          features={[
            "Custom mandate design",
            "Asset-liability modeling",
            "Manager selection & oversight",
            "ESG integration & impact investing",
            "Capital markets execution"
          ]}
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
