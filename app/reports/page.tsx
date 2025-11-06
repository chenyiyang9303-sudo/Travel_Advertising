"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Search, Filter, FileText } from "lucide-react";
import { ReportsWithSearch } from "@/components/reports-with-search";

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-app">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-50/70 via-surface-subtle to-amber-100/40 dark:from-primary-900/20 dark:via-surface-subtle dark:to-amber-900/30 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-fg mb-6"
            >
              Industry Reports & Research
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted mb-8"
            >
              In-depth analysis and insights on corporate finance strategies, market trends, and best practices
              to guide your strategic decisions.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Reports with Search */}
      <section className="bg-app">
        <ReportsWithSearch />
      </section>

      {/* Featured Articles CTA */}
      <section className="bg-surface-subtle py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-fg mb-4">
              Stay Informed with Expert Insights
            </h2>
            <p className="text-lg text-muted mb-8">
              Read our latest analysis and expert commentary on corporate finance trends and market developments.
            </p>
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
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
