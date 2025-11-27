"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Search, Filter, FileText } from "lucide-react";
import { ReportsWithSearch } from "@/components/reports-with-search";

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-app text-fg">
      {/* Hero Section */}
      <div className="border-b border-white/10 bg-[#050505] pt-36 pb-24 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-semibold uppercase tracking-[0.35em] text-white sm:text-5xl"
            >
              Travel Industry Reports
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-base leading-relaxed text-neutral-300 sm:text-lg"
            >
              Data-driven research on destination marketing trends, creator economy shifts, and AI application in travel to guide your strategic decisions.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Reports with Search */}
      <section className="bg-app">
        <ReportsWithSearch />
      </section>

      {/* Featured Articles CTA */}
      <section className="border-t border-white/10 bg-[#050505] py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-semibold uppercase tracking-[0.35em]">
              Stay Ahead of Travel Trends
            </h2>
            <p className="mt-4 text-sm uppercase tracking-[0.4em] text-neutral-400">
              Read our latest analysis and expert commentary on global travel marketing developments.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-3 rounded-full border border-white/20 px-8 py-3 text-xs font-semibold uppercase tracking-[0.35em] transition-all duration-200 hover:border-primary-400"
            >
              Read Articles
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
