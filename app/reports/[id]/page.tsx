import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Download,
  FileText,
  Eye,
  Share2,
  Target,
  BookOpen,
  Database,
  Users,
  Star,
} from "lucide-react";

import {
  getReportById,
  getAllReports,
  getRelatedReports,
  reportCategories,
} from "@/lib/reports-data";
import { ReportCover } from "@/components/report-cover-designs";
import { RelatedReportCard } from "@/components/report-card";
import { formatDate } from "@/lib/utils";

interface ReportPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const reports = getAllReports();
  return reports.map((report) => ({
    id: report.id,
  }));
}

export default function ReportDetailPage({ params }: ReportPageProps) {
  const report = getReportById(params.id);

  if (!report) {
    notFound();
  }

  const relatedReports = getRelatedReports(params.id);
  const categoryLabel =
    reportCategories.find((cat) => cat.value === report.category)?.label ||
    report.category;

  return (
    <div className="min-h-screen bg-app text-fg">
      <section className="border-b border-white/10 bg-[#050505] pt-36 pb-24 text-white">
        <div className="mx-auto max-w-5xl px-4">
          <Link
            href="/reports"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.4em] text-white/70 transition-colors duration-200 hover:text-primary-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Reports
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-[3fr_2fr]">
            <div className="space-y-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-primary-500/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-black">
                  {categoryLabel}
                </span>
                {report.featured && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-white">
                    <Star className="h-3 w-3" />
                    Featured
                  </span>
                )}
              </div>

              <h1 className="text-4xl font-semibold uppercase tracking-[0.3em] text-white sm:text-5xl">
                {report.title}
              </h1>

              <p className="text-base uppercase tracking-[0.35em] text-neutral-400 sm:text-sm">
                {report.subtitle}
              </p>

              <p className="text-base leading-relaxed text-neutral-300 sm:text-lg">
                {report.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-[11px] uppercase tracking-[0.35em] text-white/65">
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {formatDate(report.publishDate)}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {report.readTime}
                </span>
                <span className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  {report.fileSize}
                </span>
                <span className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  Preview {report.previewPages} pages
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                <button className="inline-flex items-center gap-3 rounded-full border border-white/20 px-8 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white transition-colors duration-200 hover:border-primary-400">
                  <Download className="h-4 w-4" />
                  Download Report
                </button>
                <button className="inline-flex items-center gap-3 rounded-full border border-white/20 px-8 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white/80 transition-colors duration-200 hover:border-primary-400 hover:text-white">
                  <Share2 className="h-4 w-4" />
                  Share Briefing
                </button>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#0f0f0f] p-6 shadow-soft">
              <ReportCover
                title={report.title}
                subtitle={report.subtitle}
                category={categoryLabel}
                publishDate={report.publishDate}
                variant="organic"
                gradient="from-primary-600 to-amber-500"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-24 pt-16 lg:grid-cols-[minmax(0,3fr)_minmax(0,1.35fr)]">
        <div className="space-y-12">
          <SectionCard title="Executive Summary">
            <p>{report.excerpt}</p>
          </SectionCard>

          <SectionCard
            title="Key Findings"
            icon={<Target className="h-6 w-6 text-primary-300" />}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {report.keyFindings.map((finding, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/35 px-5 py-4"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-500/90 text-xs font-semibold uppercase tracking-[0.3em] text-black">
                    {index + 1}
                  </span>
                  <span>{finding}</span>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard
            title="Table of Contents"
            icon={<BookOpen className="h-6 w-6 text-primary-200" />}
          >
            <div className="divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-black/25">
              {report.tableOfContents.map((section, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between gap-4 px-6 py-4 text-sm text-neutral-300"
                >
                  <span className="font-semibold uppercase tracking-[0.25em]">
                    {section.section}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.3em] text-neutral-500">
                    Page {section.page}
                  </span>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard
            title="Methodology"
            icon={<Database className="h-6 w-6 text-primary-200" />}
          >
            <p>{report.methodology}</p>
            <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
              <h3 className="text-xs font-semibold uppercase tracking-[0.4em] text-neutral-400">
                Data Sources
              </h3>
              <p className="mt-3 text-sm text-neutral-300">{report.dataSource}</p>
            </div>
          </SectionCard>

          <SectionCard
            title="About the Author"
            icon={<Users className="h-6 w-6 text-primary-300" />}
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border border-white/15 bg-black/45 text-sm font-semibold uppercase tracking-[0.4em] text-white">
                {report.author.name
                  .split(" ")
                  .map((name) => name[0])
                  .join("")}
              </div>
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.35em] text-white">
                  {report.author.name}
                </p>
                <p className="text-[11px] uppercase tracking-[0.35em] text-neutral-500">
                  {report.author.title}
                </p>
                <p className="text-sm leading-relaxed text-neutral-300">
                  The WanderAds research team tracks traveler behavior, content trends, and channel models long-term to provide actionable growth insights for destinations and travel brands.
                </p>
              </div>
            </div>
          </SectionCard>
        </div>

        <aside className="space-y-8">
          <div className="rounded-3xl border border-white/10 bg-[#0f0f0f] p-6 shadow-soft">
            <h3 className="text-xs font-semibold uppercase tracking-[0.4em] text-neutral-400">
              Download Options
            </h3>
            <div className="mt-6 space-y-3">
              <button className="flex w-full items-center justify-between rounded-full border border-white/12 bg-black/40 px-5 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white transition-colors duration-200 hover:border-primary-400">
                <span>Full Report PDF</span>
                <Download className="h-4 w-4" />
              </button>
              <button className="flex w-full items-center justify-between rounded-full border border-white/12 bg-black/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white/80 transition-colors duration-200 hover:border-primary-400 hover:text-white">
                <span>Preview {report.previewPages} Pages</span>
                <Eye className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#0f0f0f] p-6 shadow-soft">
            <h3 className="text-xs font-semibold uppercase tracking-[0.4em] text-neutral-400">
              Topics Covered
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {report.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[11px] uppercase tracking-[0.35em] text-neutral-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#0f0f0f] p-6 shadow-soft">
            <h3 className="text-xs font-semibold uppercase tracking-[0.4em] text-neutral-400">
              Report Details
            </h3>
            <div className="mt-4 space-y-3 text-sm text-neutral-300">
              <DetailRow label="Category" value={categoryLabel} />
              <DetailRow label="File Size" value={report.fileSize} />
              <DetailRow label="Length" value="Approx. 50 pages" />
              <DetailRow label="Format" value="PDF" />
            </div>
          </div>

          <div className="rounded-3xl border border-primary-500/30 bg-[radial-gradient(circle_at_top_right,rgba(196,154,108,0.25),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(185,130,94,0.18),transparent_40%),linear-gradient(135deg,rgba(197,154,108,0.18),rgba(10,10,10,0.8))] p-6 text-white shadow-soft">
            <h3 className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-100">
              Need Custom Research?
            </h3>
            <p className="mt-4 text-sm text-primary-50/80">
              Invite the WanderAds research team to formulate destination strategies, creator matrices, or AI advertising plans that match your market rhythm.
            </p>
            <Link
              href="/#contact"
              className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white transition-colors duration-200 hover:border-primary-400"
            >
              Contact Our Team
            </Link>
          </div>
        </aside>
      </div>

      {relatedReports.length > 0 && (
        <section className="border-t border-white/10 bg-[#050505] py-20 text-white">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-xl font-semibold uppercase tracking-[0.4em]">
              Related Reports
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {relatedReports.map((relatedReport) => (
                <RelatedReportCard key={relatedReport.id} report={relatedReport} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

function SectionCard({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-white/10 bg-[#0f0f0f] p-8 shadow-soft">
      <div className="space-y-6">
        <h2 className="flex items-center gap-3 text-lg font-semibold uppercase tracking-[0.35em] text-white">
          {icon}
          {title}
        </h2>
        <div className="space-y-4 text-sm leading-relaxed text-neutral-300">
          {children}
        </div>
      </div>
    </section>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-[13px] uppercase tracking-[0.3em]">
      <span className="text-neutral-500">{label}</span>
      <span className="text-white">{value}</span>
    </div>
  );
}
