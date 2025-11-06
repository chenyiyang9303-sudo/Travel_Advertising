"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, Download, FileText, User, Star } from "lucide-react";
import { Report, reportCategories } from "@/lib/reports-data";
import { ReportCover } from "@/components/report-cover-designs";
import { formatDate } from "@/lib/utils";

interface ReportCardProps {
  report: Report;
  variant?: 'standard' | 'featured' | 'related';
  showExcerpt?: boolean;
  className?: string;
}

export function ReportCard({ 
  report, 
  variant = 'standard', 
  showExcerpt = true, 
  className = '' 
}: ReportCardProps) {
  const coverVariants = ['hexagon', 'wave', 'circle', 'diamond', 'organic'] as const;
  const gradients = [
    'from-primary-500 to-amber-500',
    'from-primary-600 to-primary-800',
    'from-amber-400 to-primary-600',
    'from-primary-500 to-rose-400',
    'from-neutral-900 to-primary-500'
  ];
  
  const variantIndex = Math.abs(report.id.split('').reduce((a, b) => a + b.charCodeAt(0), 0)) % coverVariants.length;
  const gradientIndex = Math.abs(report.id.split('').reduce((a, b) => a + b.charCodeAt(0), 0)) % gradients.length;

  if (variant === 'featured') {
    return <FeaturedReportCard report={report} className={className} />;
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={`group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0f0f0f] shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary-400 ${className}`}
    >
      <Link href={`/reports/${report.id}`} className="flex h-full flex-col">
        <div className="relative w-full aspect-[4/3]">
          <ReportCover
            title={report.title}
            subtitle={report.subtitle}
            category={
              reportCategories.find((cat) => cat.value === report.category)?.label ||
              report.category
            }
            publishDate={report.publishDate}
            variant={coverVariants[variantIndex]}
            gradient={gradients[gradientIndex]}
          />
          {report.featured && (
            <div className="absolute right-4 top-4">
              <span className="inline-flex items-center gap-1 rounded-full bg-primary-500/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-black">
                <Star className="h-3 w-3" />
                Featured
              </span>
            </div>
          )}
        </div>

        <div className="flex h-full flex-col justify-between gap-6 p-6 sm:p-7">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold uppercase tracking-[0.3em] text-white transition-colors duration-200 group-hover:text-primary-300">
              {report.title}
            </h3>

            {showExcerpt && (
              <p className="text-sm leading-relaxed text-neutral-400">
                {report.excerpt}
              </p>
            )}
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.35em] text-neutral-500">
              <span className="flex items-center gap-1">
                <User className="h-4 w-4 text-neutral-500" />
                {report.author.name}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4 text-neutral-500" />
                {formatDate(report.publishDate)}
              </span>
              <span className="flex items-center gap-1">
                <FileText className="h-4 w-4 text-neutral-500" />
                {report.fileSize}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.35em] text-neutral-400">
              {report.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/12 bg-black/35 px-3 py-1"
                >
                  {tag}
                </span>
              ))}
              {report.tags.length > 4 && (
                <span className="rounded-full border border-white/12 bg-black/35 px-3 py-1">
                  +{report.tags.length - 4} more
                </span>
              )}
            </div>

            <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-white transition-all duration-200 group-hover:text-primary-300">
              View Report
              <Download className="h-4 w-4" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function FeaturedReportCard({
  report,
  className,
}: {
  report: Report;
  className?: string;
}) {
  const coverVariants = ["hexagon", "wave", "circle", "diamond", "organic"] as const;
  const gradients = [
    "from-primary-600 to-amber-500",
    "from-primary-700 to-primary-900",
    "from-amber-500 to-primary-700",
    "from-primary-600 to-rose-500",
    "from-neutral-900 to-primary-600",
  ];

  const variantIndex =
    Math.abs(
      report.id.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0)
    ) % coverVariants.length;
  const gradientIndex =
    Math.abs(
      report.id.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0)
    ) % gradients.length;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={`group overflow-hidden rounded-3xl border border-white/10 bg-[#0f0f0f] shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary-400 ${className}`}
    >
      <Link href={`/reports/${report.id}`} className="flex h-full flex-col lg:flex-row">
        <div className="relative aspect-[4/3] w-full lg:aspect-[4/3] lg:w-1/2">
          <ReportCover
            title={report.title}
            subtitle={report.subtitle}
            category={
              reportCategories.find((cat) => cat.value === report.category)?.label ||
              report.category
            }
            publishDate={report.publishDate}
            variant={coverVariants[variantIndex]}
            gradient={gradients[gradientIndex]}
          />
          <div className="absolute left-4 top-4">
            <span className="inline-flex items-center gap-1 rounded-full bg-primary-500/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-black">
              <Star className="h-3 w-3" />
              Featured
            </span>
          </div>
        </div>

        <div className="flex h-full flex-1 flex-col justify-between gap-6 p-6 sm:p-8">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-black/35 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-neutral-200">
              {reportCategories.find((cat) => cat.value === report.category)?.label ||
                report.category}
            </span>

            <h3 className="text-2xl font-semibold uppercase tracking-[0.3em] text-white transition-colors duration-200 group-hover:text-primary-300">
              {report.title}
            </h3>

            <p className="text-sm leading-relaxed text-neutral-400">
              {report.excerpt}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 text-[11px] uppercase tracking-[0.35em] text-neutral-500">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4 text-neutral-500" />
              {formatDate(report.publishDate)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4 text-neutral-500" />
              {report.readTime}
            </span>
            <span className="flex items-center gap-1">
              <FileText className="h-4 w-4 text-neutral-500" />
              {report.fileSize}
            </span>
            <span className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white transition-colors duration-200 hover:border-primary-400">
              View Report
              <Download className="h-4 w-4" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// 专门用于相关报告的紧凑版本
export function RelatedReportCard({ report }: { report: Report }) {
  const coverVariants = ['hexagon', 'wave', 'circle', 'diamond', 'organic'] as const;
  const gradients = [
    'from-primary-500 to-amber-500',
    'from-primary-600 to-primary-800',
    'from-amber-400 to-primary-600',
    'from-primary-500 to-rose-400',
    'from-neutral-900 to-primary-500'
  ];
  
  const variantIndex = Math.abs(report.id.split('').reduce((a, b) => a + b.charCodeAt(0), 0)) % coverVariants.length;
  const gradientIndex = Math.abs(report.id.split('').reduce((a, b) => a + b.charCodeAt(0), 0)) % gradients.length;

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0f0f0f] shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary-400"
    >
      <Link href={`/reports/${report.id}`} className="flex h-full flex-col">
        <div className="relative w-full aspect-[4/3]">
          <ReportCover
            title={report.title}
            subtitle={report.subtitle}
            category={
              reportCategories.find((cat) => cat.value === report.category)?.label ||
              report.category
            }
            publishDate={report.publishDate}
            variant={coverVariants[variantIndex]}
            gradient={gradients[gradientIndex]}
          />
        </div>

        <div className="flex h-full flex-col justify-between gap-4 p-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-black/35 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-neutral-200">
            {reportCategories.find((cat) => cat.value === report.category)?.label ||
              report.category}
          </span>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold uppercase tracking-[0.3em] text-white">
              {report.title}
            </h3>
            <p className="text-sm leading-relaxed text-neutral-400 line-clamp-3">
              {report.excerpt}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.35em] text-neutral-500">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4 text-neutral-500" />
              {formatDate(report.publishDate)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4 text-neutral-500" />
              {report.readTime}
            </span>
          </div>
          <div className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-white transition-all duration-200 group-hover:text-primary-300">
            View Report
            <Download className="h-4 w-4" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
