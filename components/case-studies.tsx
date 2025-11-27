"use client";

import { cn } from "@/lib/utils";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getAllCaseStudies } from "@/lib/case-studies-data";

export function CaseStudies() {
  const caseStudies = getAllCaseStudies();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
      setTimeout(checkScrollability, 300);
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
      setTimeout(checkScrollability, 300);
    }
  };

  React.useEffect(() => {
    checkScrollability();
    const handleResize = () => checkScrollability();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      id="case-studies"
      className="w-full mx-auto bg-surface-subtle py-24 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-display-md md:text-display-lg font-bold text-fg mb-4">
            Featured Cases · Making Destinations Stand Out
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            From mountain resorts to island luxury travel, we help clients achieve 3-6x growth in exposure and GMV through creative content + data-driven advertising. Browse real-world strategies, execution, and results.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className={cn(
              "absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-surface shadow-soft border border-subtle flex items-center justify-center transition-all duration-200",
              canScrollLeft
                ? "hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer"
                : "opacity-50 cursor-not-allowed text-subtle"
            )}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={scrollRight}
            disabled={!canScrollRight}
            className={cn(
              "absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-surface shadow-soft border border-subtle flex items-center justify-center transition-all duration-200",
              canScrollRight
                ? "hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer"
                : "opacity-50 cursor-not-allowed text-subtle"
            )}
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Scrollable Cards Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-4"
            style={{ scrollSnapType: 'x-mandatory' }}
            onScroll={checkScrollability}
          >
            {caseStudies.map((caseStudy, index) => (
              <div
                key={caseStudy.slug}
                className="flex-shrink-0 w-80 md:w-96"
                style={{ scrollSnapAlign: 'start' }}
              >
                <CaseStudyCard
                  slug={caseStudy.slug}
                  company={caseStudy.company}
                  industry={caseStudy.industry}
                  challenge={caseStudy.challenge}
                  solution={caseStudy.solution}
                  results={caseStudy.results}
                  timeline={caseStudy.timeline}
                  image={caseStudy.image}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <motion.a
            href="/case-studies"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all duration-200 cursor-pointer text-lg"
          >
            View All Cases
            <ArrowUpRight className="h-5 w-5" />
          </motion.a>
        </div>
      </div>
    </div>
  );
}

const CaseStudyCard = ({
  slug,
  company,
  industry,
  challenge,
  solution,
  results,
  timeline,
  image,
  index,
}: {
  slug: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: { metric: string; value: string }[];
  timeline: string;
  image: string;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group bg-surface rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 border border-subtle hover:border-primary-300/70 h-full"
    >
      <Link href={`/case-studies/${slug}`}>
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={company}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-xl font-bold">{company}</h3>
            <p className="text-sm opacity-90">{industry}</p>
          </div>
        </div>

        <div className="p-6">
          <div className="mb-4">
            <h4 className="font-semibold text-fg mb-2 text-sm uppercase tracking-wide">
              Campaign Objectives
            </h4>
            <p className="text-sm text-muted leading-relaxed">
              {challenge}
            </p>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold text-fg mb-2 text-sm uppercase tracking-wide">
              Execution Highlights
            </h4>
            <p className="text-sm text-muted leading-relaxed">
              {solution}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-2 mb-6">
            {results.slice(0, 3).map((result, idx) => (
              <div key={idx} className="flex justify-between items-center py-2 px-3 bg-surface-subtle rounded-lg">
                <span className="text-xs text-muted font-medium">
                  {result.metric}
                </span>
                <span className="font-bold text-fg text-sm">
                  {result.value}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between text-sm mt-auto">
            <span className="text-subtle font-medium">
              {timeline}
            </span>
            <motion.div
              whileHover={{ x: 2 }}
              className="flex items-center gap-1 text-primary-600 dark:text-primary-400 font-semibold cursor-pointer"
            >
              Learn More
              <ArrowUpRight className="h-4 w-4" />
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
