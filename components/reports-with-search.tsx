"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import FuzzySearch from "fuzzy-search";
import { cn } from "@/lib/utils";
import {
  Report,
  getAllReports,
  getFeaturedReports,
  reportCategories,
} from "@/lib/reports-data";

const SEARCH_KEYS: Array<keyof Report> = ["title", "description", "category"];

export function ReportsWithSearch() {
  const allReports = getAllReports();
  const featuredReports = getFeaturedReports();

  return (
    <div className="mx-auto max-w-6xl px-4 py-20">
      <div className="space-y-20">
        <div className="text-center">
          <h2 className="text-3xl font-semibold uppercase tracking-[0.35em] text-white sm:text-4xl">
            Market Intelligence Reports
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-neutral-400 sm:text-base">
            Data-backed research, transaction benchmarking, and policy briefings for institutional
            finance leaders navigating complex capital decisions.
          </p>
        </div>

        {featuredReports.length > 0 && (
          <ReportHighlightCard report={featuredReports[0]} />
        )}

        <ReportPostRows reports={allReports} />
      </div>
    </div>
  );
}

export const ReportPostRows = ({ reports }: { reports: Report[] }) => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState(reports);

  useEffect(() => {
    const searcher = new FuzzySearch(reports, SEARCH_KEYS, {
      caseSensitive: false,
    });
    const searchResults = searcher.search(search);
    setResults(searchResults);
  }, [search, reports]);

  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-xl font-semibold uppercase tracking-[0.35em] text-white">
          All Reports
        </h3>
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search reports"
          className="w-full rounded-full border border-white/10 bg-black/40 px-6 py-3 text-sm uppercase tracking-[0.35em] text-white placeholder:text-neutral-500 focus:border-primary-400 focus:outline-none sm:max-w-md"
        />
      </div>

      <div className="divide-y divide-white/10 rounded-3xl border border-white/10 bg-[#0b0b0b] shadow-soft">
        {results.length === 0 ? (
          <div className="px-6 py-12 text-center text-sm uppercase tracking-[0.35em] text-neutral-500 sm:px-10">
            No reports match your query. Adjust filters and try again.
          </div>
        ) : (
          results.map((report) => <ReportPostRow key={report.id} report={report} />)
        )}
      </div>
    </div>
  );
};

export const ReportPostRow = ({ report }: { report: Report }) => {
  const categoryLabel =
    reportCategories.find((cat) => cat.value === report.category)?.label ||
    report.category;

  return (
    <Link
      href={`/reports/${report.id}`}
      className="group flex flex-col gap-4 px-6 py-6 transition-all duration-200 hover:bg-white/5 sm:flex-row sm:items-center sm:justify-between sm:px-10"
    >
      <div className="space-y-3">
        <p className="text-lg font-semibold uppercase tracking-[0.3em] text-white transition-colors duration-200 group-hover:text-primary-300">
          {report.title}
        </p>
        <p className="max-w-3xl text-sm leading-relaxed text-neutral-400">
          {truncate(report.description, 150)}
        </p>
        <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.35em] text-neutral-500">
          <span>{format(new Date(report.publishDate), "MMMM dd, yyyy")}</span>
          <span className="h-0.5 w-6 bg-white/15" />
          <span>{report.readTime}</span>
          <span className="h-0.5 w-6 bg-white/15" />
          <span>{report.fileSize}</span>
          <span className="rounded-full border border-white/12 bg-black/30 px-3 py-1 text-[10px] font-semibold text-white">
            {categoryLabel}
          </span>
        </div>
      </div>
      <div className="text-xs uppercase tracking-[0.35em] text-neutral-500">
        {report.author.name}
      </div>
    </Link>
  );
};

export const ReportHighlightCard = ({ report }: { report: Report }) => {
  const categoryLabel =
    reportCategories.find((cat) => cat.value === report.category)?.label ||
    report.category;

  return (
    <Link
      href={`/reports/${report.id}`}
      className="group grid gap-8 overflow-hidden rounded-3xl border border-white/10 bg-[#0f0f0f] shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary-400 md:grid-cols-2"
    >
      <div className="relative h-64 w-full overflow-hidden md:h-full">
        <BlurImage
          src={report.coverImage}
          alt={report.title}
          width={800}
          height={800}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute left-6 top-6 flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-white/15 bg-black/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-white">
            {categoryLabel}
          </span>
          {report.featured && (
            <span className="rounded-full bg-primary-500/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-black">
              Featured
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col justify-between gap-6 p-6 sm:p-10">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-primary-300">
            Executive Briefing
          </p>
          <h3 className="text-2xl font-semibold uppercase tracking-[0.3em] text-white sm:text-3xl">
            {report.title}
          </h3>
          <p className="text-sm leading-relaxed text-neutral-400 sm:text-base">
            {truncate(report.description, 360)}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-[11px] uppercase tracking-[0.35em] text-neutral-500">
          <span>{format(new Date(report.publishDate), "MMMM dd, yyyy")}</span>
          <span className="h-0.5 w-6 bg-white/15" />
          <span>{report.readTime}</span>
          <span className="h-0.5 w-6 bg-white/15" />
          <span>{report.fileSize}</span>
          <span className="h-0.5 w-6 bg-white/15" />
          <span>{report.author.name}</span>
        </div>
      </div>
    </Link>
  );
};

interface BlurImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export function BlurImage({
  src,
  alt,
  width,
  height,
  className,
}: BlurImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn(
        "object-cover transition duration-500",
        isLoading ? "scale-[1.02] blur-md" : "scale-100 blur-0",
        className
      )}
      onLoadingComplete={() => setIsLoading(false)}
      priority={false}
    />
  );
}

export function truncate(text: string, length: number) {
  return text.length > length ? `${text.slice(0, length)}...` : text;
}
