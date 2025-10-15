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
      className="w-full mx-auto bg-gray-50 dark:bg-gray-800 py-24 px-4 md:px-8"
    >
      <Header>
        <h2 className="font-display text-display-md md:text-display-lg text-center mx-auto text-accent-900 dark:text-white">
          Comprehensive Financial Advisory Services
        </h2>
      </Header>
      <p className="max-w-3xl text-lg text-accent-600 dark:text-accent-300 text-center mx-auto mt-6">
        Expert consulting services designed to optimize your corporate financial strategy, manage risks, and ensure regulatory compliance.
      </p>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <ServiceCard
          icon={<Building2 className="h-6 w-6" />}
          title="Corporate Finance Consulting"
          description="Strategic financial planning and advisory services to drive business growth and maximize shareholder value. We provide expert guidance on capital structure, financial optimization, and strategic decision-making."
          features={[
            "Financial planning & analysis (FP&A)",
            "Capital structure optimization",
            "M&A advisory and due diligence support",
            "Corporate valuation & financial modeling",
            "Working capital management strategies"
          ]}
        />

        <ServiceCard
          icon={<Shield className="h-6 w-6" />}
          title="Risk Management & Compliance Advisory"
          description="Comprehensive risk assessment and mitigation strategies to protect your business. We help identify vulnerabilities and implement robust compliance frameworks aligned with regulatory requirements."
          features={[
            "Enterprise risk assessment & mapping",
            "Regulatory compliance frameworks",
            "Internal controls & governance design",
            "Financial risk mitigation strategies",
            "Audit preparation & compliance monitoring"
          ]}
        />

        <ServiceCard
          icon={<TrendingUp className="h-6 w-6" />}
          title="Investment Strategy Consulting"
          description="Data-driven investment recommendations to align your portfolio with strategic objectives. We provide independent analysis and advisory services—we do not manage client assets."
          features={[
            "Investment policy development",
            "Portfolio analysis & optimization recommendations",
            "Market research & opportunity assessment",
            "Strategic investment framework design",
            "Performance benchmarking & review"
          ]}
          disclaimer="Advisory services only - we do not manage client funds"
        />

        <ServiceCard
          icon={<PieChart className="h-6 w-6" />}
          title="Corporate Asset Advisory"
          description="Strategic guidance on corporate asset allocation and treasury management. Expert recommendations to optimize returns while maintaining liquidity and managing corporate financial risks."
          features={[
            "Asset allocation strategy consulting",
            "Treasury management advisory",
            "Liquidity optimization recommendations",
            "Cash flow forecasting & analysis",
            "Investment guideline development"
          ]}
          disclaimer="Advisory services only - we do not manage client assets"
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
        className="absolute inset-0 h-full border border-neutral-200 dark:border-neutral-800 w-full"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute -top-1 -left-1 h-2 w-2 dark:bg-neutral-800 bg-neutral-200"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute -top-1 -right-1 h-2 w-2 dark:bg-neutral-800 bg-neutral-200"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute -bottom-1 -left-1 h-2 w-2 dark:bg-neutral-800 bg-neutral-200"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute -bottom-1 -right-1 h-2 w-2 dark:bg-neutral-800 bg-neutral-200"
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
      className="group relative p-8 rounded-2xl bg-white dark:bg-accent-800 border border-accent-200/50 dark:border-accent-700/50 hover:border-blue-300 dark:hover:border-blue-600 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="mb-6">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4">
          {icon}
        </div>
        <h3 className="font-display text-xl font-semibold text-accent-900 dark:text-white">
          {title}
        </h3>
      </div>

      <p className="text-accent-600 dark:text-accent-300 mb-6 leading-relaxed text-base">
        {description}
      </p>

      <ul className="space-y-3 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-sm text-accent-600 dark:text-accent-400">
            <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      {disclaimer && (
        <div className="mt-4 pt-4 border-t border-accent-200 dark:border-accent-700">
          <p className="text-xs text-accent-500 dark:text-accent-500 italic flex items-start gap-2">
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