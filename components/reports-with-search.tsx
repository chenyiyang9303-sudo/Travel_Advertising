"use client";
import { Container } from "@/components/container";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import FuzzySearch from "fuzzy-search";
import { getAllReports, getFeaturedReports, reportCategories, Report } from "@/lib/reports-data";

export function ReportsWithSearch() {
  const allReports = getAllReports();
  const featuredReports = getFeaturedReports();

  return (
    <div className="relative overflow-hidden">
      <Container className="flex flex-col items-center justify-between pb-20">
        <div className="relative z-20 py-10 text-center">
          <h2 className="font-display text-display-md md:text-display-lg font-bold text-fg mb-4">
            Market Intelligence Reports
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            Deep-dive analysis and data-driven insights from corporate finance markets to inform your strategic decisions.
          </p>
        </div>

        {featuredReports.slice(0, 1).map((report, index) => (
          <ReportCard report={report} key={report.title + index} />
        ))}

        <ReportPostRows reports={allReports} />
      </Container>
    </div>
  );
}

export const ReportPostRows = ({ reports }: { reports: Report[] }) => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState(reports);

  useEffect(() => {
    const searcher = new FuzzySearch(reports, ["title", "description"], {
      caseSensitive: false,
    });
    const searchResults = searcher.search(search);
    setResults(searchResults);
  }, [search, reports]);
  
  return (
    <div className="w-full py-20">
      <div className="flex sm:flex-row flex-col justify-between gap-4 items-center mb-10">
        <p className="text-2xl font-bold text-fg">
          All Reports
        </p>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search reports"
          className="text-sm max-w-xl w-full sm:min-w-96 border border-subtle p-2 rounded-md bg-surface shadow-soft focus:border-primary-300/70 focus:ring-2 focus:ring-primary-500/60 focus:outline-none text-fg placeholder:text-subtle"
        />
      </div>

      <div className="divide-y divide-[rgba(var(--color-border),0.45)]">
        {results.length === 0 ? (
          <p className="text-subtle text-center p-4">No results found</p>
        ) : (
          results.map((report, index) => (
            <ReportPostRow report={report} key={report.id + index} />
          ))
        )}
      </div>
    </div>
  );
};

export const ReportPostRow = ({ report }: { report: Report }) => {
  return (
    <Link
      href={`/reports/${report.id}`}
      key={`${report.id}`}
      className="flex md:flex-row flex-col items-start justify-between md:items-center group/report-row py-4"
    >
      <div>
        <p className="text-fg text-lg font-medium transition duration-200 group-hover/report-row:text-primary-600">
          {report.title}
        </p>
        <p className="text-muted text-sm mt-2 max-w-xl transition duration-200">
          {truncate(report.description, 80)}
        </p>

        <div className="flex gap-4 items-center my-4">
          <p className="text-subtle text-sm max-w-xl transition duration-200">
            {format(new Date(report.publishDate), "MMMM dd, yyyy")}
          </p>
          <span className="px-2 py-1 bg-primary-100/70 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200 text-xs rounded">
            {reportCategories.find(cat => cat.value === report.category)?.label || report.category}
          </span>
          <span className="text-xs text-subtle">
            {report.readTime} • {report.fileSize}
          </span>
        </div>
      </div>
      <div className="text-muted text-sm mt-4 md:mt-0">
        {report.author.name}
      </div>
    </Link>
  );
};

export const ReportCard = ({ report }: { report: Report }) => {
  return (
    <Link
      className="shadow-soft grid grid-cols-1 md:grid-cols-2 rounded-3xl group/report border border-subtle w-full bg-surface overflow-hidden hover:scale-[1.02] hover:shadow-elevated hover:border-primary-300/70 transition duration-200"
      href={`/reports/${report.id}`}
    >
      <div className="">
        <BlurImage
          src={report.coverImage || ""}
          alt={report.title}
          height="800"
          width="800"
          className="h-full max-h-96 object-cover object-top w-full rounded-3xl"
        />
      </div>
      <div className="p-4 md:p-8 bg-surface flex flex-col justify-between group-hover/report:bg-surface-subtle transition-colors duration-200">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2 py-1 bg-primary-100/70 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200 text-xs rounded">
              {reportCategories.find(cat => cat.value === report.category)?.label || report.category}
            </span>
            {report.featured && (
              <span className="px-2 py-1 bg-yellow-500 text-white text-xs rounded">
                Featured
              </span>
            )}
          </div>
          <p className="text-lg md:text-4xl font-bold mb-4 text-fg">
            {report.title}
          </p>
          <p className="text-left text-base md:text-xl mt-2 text-muted">
            {truncate(report.description, 500)}
          </p>
        </div>
        <div className="flex space-x-2 items-center mt-6">
          <div className="w-5 h-5 bg-primary-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
            {report.author.name.split(' ').map(n => n[0]).join('')}
          </div>
          <p className="text-sm font-normal text-fg">
            {report.author.name}
          </p>
          <div className="h-1 w-1 bg-neutral-300 rounded-full"></div>
          <p className="text-subtle text-sm max-w-xl transition duration-200">
            {format(new Date(report.publishDate), "MMMM dd, yyyy")}
          </p>
        </div>
      </div>
    </Link>
  );
};

interface IBlurImage {
  height?: any;
  width?: any;
  src?: string | any;
  objectFit?: any;
  className?: string | any;
  alt?: string | undefined;
  layout?: any;
  [x: string]: any;
}

export const BlurImage = ({
  height,
  width,
  src,
  className,
  objectFit,
  alt,
  layout,
  ...rest
}: IBlurImage) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn(
        "transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={src}
      layout={layout}
      alt={alt ? alt : "Report cover"}
      {...rest}
    />
  );
};

export const truncate = (text: string, length: number) => {
  return text.length > length ? text.slice(0, length) + "..." : text;
};
