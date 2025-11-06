import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Users, Target, Lightbulb, TrendingUp, Quote } from "lucide-react";
import { getCaseStudyBySlug, getAllCaseStudies } from "@/lib/case-studies-data";

interface CaseStudyPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const caseStudies = getAllCaseStudies();
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const caseStudy = getCaseStudyBySlug(params.slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-app text-fg">
      <div className="relative min-h-[60vh] overflow-hidden border-b border-white/10 bg-[#050505]">
        <Image
          src={caseStudy.image}
          alt={caseStudy.company}
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(196,154,108,0.22),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(185,130,94,0.18),transparent_40%),linear-gradient(to_top,rgba(0,0,0,0.75),rgba(0,0,0,0.25))]" />

        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-16">
            <Link
              href="/#case-studies"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.4em] text-white/70 transition-colors duration-200 hover:text-primary-300"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Case Studies
            </Link>

            <div className="mt-8 max-w-3xl space-y-6">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-primary-500/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-black">
                  {caseStudy.industry}
                </span>
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-white/60">
                  <Calendar className="h-4 w-4" />
                  <span>{caseStudy.timeline}</span>
                </div>
              </div>

              <h1 className="text-4xl font-semibold uppercase tracking-[0.3em] text-white sm:text-5xl">
                {caseStudy.company}
              </h1>

              <p className="text-base leading-relaxed text-white/80 sm:text-lg">
                {caseStudy.overview}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto grid gap-12 px-4 py-20 lg:grid-cols-3">
        <div className="space-y-12 lg:col-span-2">
          <section className="space-y-6 rounded-3xl border border-white/10 bg-[#0f0f0f] p-8 shadow-soft">
            <h2 className="flex items-center gap-3 text-lg font-semibold uppercase tracking-[0.35em] text-white">
              <Users className="h-6 w-6 text-primary-400" />
              Client Background
            </h2>
            <p className="text-sm leading-relaxed text-neutral-300">
              {caseStudy.clientBackground}
            </p>
          </section>

          <section className="space-y-6 rounded-3xl border border-white/10 bg-[#0f0f0f] p-8 shadow-soft">
            <h2 className="flex items-center gap-3 text-lg font-semibold uppercase tracking-[0.35em] text-white">
              <Target className="h-6 w-6 text-primary-400" />
              Challenge
            </h2>
            <p className="text-sm leading-relaxed text-neutral-300">
              {caseStudy.detailedChallenge}
            </p>
          </section>

          <section className="space-y-6 rounded-3xl border border-white/10 bg-[#0f0f0f] p-8 shadow-soft">
            <h2 className="flex items-center gap-3 text-lg font-semibold uppercase tracking-[0.35em] text-white">
              <Lightbulb className="h-6 w-6 text-primary-400" />
              Solution
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {caseStudy.approach.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 px-5 py-4"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-500/90 text-xs font-semibold uppercase tracking-[0.3em] text-black">
                    {index + 1}
                  </span>
                  <span className="text-sm font-medium text-white">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-8 rounded-3xl border border-white/10 bg-[#0f0f0f] p-8 shadow-soft">
            <h2 className="text-lg font-semibold uppercase tracking-[0.35em] text-white">
              Implementation Process
            </h2>
            <div className="space-y-8">
              {caseStudy.implementation.map((phase, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-black/35 p-6"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <h3 className="text-lg font-semibold text-white">
                      {phase.phase}
                    </h3>
                    <span className="rounded-full bg-primary-500/20 px-3 py-1 text-[11px] uppercase tracking-[0.35em] text-primary-200">
                      {phase.duration}
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {phase.activities.map((activity, actIndex) => (
                      <li
                        key={actIndex}
                        className="flex items-start gap-2 text-sm text-neutral-300"
                      >
                        <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-400" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-8 rounded-3xl border border-white/10 bg-[#0f0f0f] p-8 shadow-soft">
            <h2 className="flex items-center gap-3 text-lg font-semibold uppercase tracking-[0.35em] text-white">
              <TrendingUp className="h-6 w-6 text-primary-400" />
              Project Outcomes
            </h2>
            <div className="space-y-8">
              {caseStudy.outcomes.map((outcome, index) => (
                <div
                  key={index}
                  className="space-y-6 rounded-2xl border border-white/10 bg-black/35 p-6"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {outcome.category}
                    </h3>
                    <p className="mt-2 text-sm text-neutral-300">
                      {outcome.description}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {outcome.metrics.map((metric, metricIndex) => (
                      <div
                        key={metricIndex}
                        className="rounded-2xl border border-white/10 bg-black/45 p-4"
                      >
                        <div className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                          {metric.metric}
                        </div>
                        <div className="mt-2 text-[11px] uppercase tracking-[0.35em] text-neutral-500">
                          {metric.before} → {metric.after}
                        </div>
                        <div className="mt-3 text-lg font-semibold text-primary-300">
                          +{metric.improvement}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-[#0f0f0f] p-8 shadow-soft">
            <Quote className="mb-4 h-8 w-8 text-primary-400" />
            <blockquote className="text-lg italic text-neutral-200">
              “{caseStudy.testimonial.quote}”
            </blockquote>
            <div className="mt-4 text-sm uppercase tracking-[0.35em] text-neutral-400">
              {caseStudy.testimonial.author}
              <span className="mx-2 text-neutral-600">/</span>
              {caseStudy.testimonial.position}
            </div>
          </section>
        </div>

        <aside className="space-y-8">
          <div className="space-y-4 rounded-3xl border border-white/10 bg-[#0f0f0f] p-6 shadow-soft">
            <h3 className="text-xs font-semibold uppercase tracking-[0.4em] text-neutral-400">
              Key Metrics
            </h3>
            <div className="space-y-3 text-sm text-neutral-200">
              {caseStudy.results.map((result, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b border-white/10 pb-3 last:border-b-0 last:pb-0"
                >
                  <span className="text-neutral-400">{result.metric}</span>
                  <span className="font-semibold text-white">{result.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 rounded-3xl border border-white/10 bg-[#0f0f0f] p-6 shadow-soft">
            <h3 className="text-xs font-semibold uppercase tracking-[0.4em] text-neutral-400">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {caseStudy.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[11px] uppercase tracking-[0.35em] text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4 rounded-3xl border border-white/10 bg-[#0f0f0f] p-6 shadow-soft">
            <h3 className="text-xs font-semibold uppercase tracking-[0.4em] text-neutral-400">
              Services Provided
            </h3>
            <ul className="space-y-3 text-sm text-neutral-300">
              {caseStudy.services.map((service, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-400" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {caseStudy.nextSteps && (
            <div className="rounded-3xl border border-primary-500/30 bg-primary-500/10 p-6 text-white">
              <h3 className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-200">
                Next Steps
              </h3>
              <p className="mt-3 text-sm text-primary-100/80">
                {caseStudy.nextSteps}
              </p>
            </div>
          )}
        </aside>
      </div>

      <section className="border-t border-white/10 bg-[#050505] py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold uppercase tracking-[0.35em]">
            Ready to Engineer A Similar Outcome?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm uppercase tracking-[0.4em] text-neutral-400">
            Schedule a confidential strategy session with RSFM to map the next
            phase of your transaction or transformation agenda.
          </p>
          <Link
            href="/#contact"
            className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/20 px-10 py-3 text-xs font-semibold uppercase tracking-[0.35em] transition-all duration-200 hover:border-primary-400"
          >
            Schedule Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
