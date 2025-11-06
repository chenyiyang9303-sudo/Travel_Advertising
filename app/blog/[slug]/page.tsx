import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { marked } from "marked";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Eye,
  Share2,
  Tag,
} from "lucide-react";

import {
  getBlogPostBySlug,
  getAllBlogPosts,
  getRelatedBlogPosts,
  blogCategories,
} from "@/lib/blog-data";
import { formatDate } from "@/lib/utils";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedBlogPosts(params.slug);

  marked.setOptions({
    gfm: true,
    breaks: true,
  });

  return (
    <div className="min-h-screen bg-app text-fg">
      <section className="relative border-b border-white/10 bg-[#050505] pt-32 pb-20 text-white">
        <div className="container mx-auto px-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.4em] text-white/70 transition-colors duration-200 hover:text-primary-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Insights
          </Link>

          <div className="mt-10 max-w-4xl space-y-8">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-primary-500/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-black">
                {blogCategories.find((cat) => cat.value === post.category)?.label ||
                  post.category}
              </span>
              <div className="flex items-center gap-4 text-xs uppercase tracking-[0.35em] text-white/60">
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {formatDate(post.publishDate)}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
              </div>
            </div>

            <h1 className="text-4xl font-semibold uppercase tracking-[0.3em] text-white sm:text-5xl">
              {post.title}
            </h1>

            <p className="text-base leading-relaxed text-neutral-300 sm:text-lg">
              {post.excerpt}
            </p>

            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/40 text-sm font-semibold uppercase tracking-[0.4em] text-white">
                  {post.author.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-white">
                    {post.author.name}
                  </h3>
                  <p className="text-[11px] uppercase tracking-[0.35em] text-neutral-500">
                    {post.author.title}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {["LinkedIn", "Twitter / X"].map((platform) => (
                  <button
                    key={platform}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white transition-colors duration-200 hover:border-primary-400"
                  >
                    <Share2 className="h-4 w-4" />
                    {platform}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="mx-auto overflow-hidden rounded-3xl border border-white/10 bg-[#0f0f0f] shadow-soft">
          <div className="relative h-96">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <div className="container mx-auto grid gap-12 px-4 pb-20 lg:grid-cols-4">
        <article className="space-y-12 rounded-3xl border border-white/10 bg-[#0f0f0f] p-10 shadow-soft lg:col-span-3">
          <div
            className="prose prose-invert max-w-none text-neutral-200
              [&>h1]:text-3xl [&>h1]:font-semibold [&>h1]:tracking-[0.25em] [&>h1]:uppercase
              [&>h2]:text-2xl [&>h2]:font-semibold [&>h2]:tracking-[0.25em] [&>h2]:uppercase
              [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:tracking-[0.25em] [&>h3]:uppercase
              [&>p]:text-neutral-300 [&>p]:leading-8 [&>strong]:text-white
              [&>ul]:space-y-3 [&>ul>li]:text-neutral-300 [&>ul>li]:leading-8"
            dangerouslySetInnerHTML={{
              __html: marked(post.content),
            }}
          />

          <div className="space-y-4 border-t border-white/10 pt-8">
            <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.4em] text-neutral-400">
              <Tag className="h-4 w-4" />
              Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[11px] uppercase tracking-[0.35em] text-neutral-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/25 p-8">
            <div className="flex items-start gap-6">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border border-white/15 bg-black/40 text-sm font-semibold uppercase tracking-[0.4em] text-white">
                {post.author.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold uppercase tracking-[0.3em] text-white">
                  {post.author.name}
                </h3>
                <p className="text-[11px] uppercase tracking-[0.35em] text-neutral-500">
                  {post.author.title}
                </p>
                <p className="text-sm leading-relaxed text-neutral-300">
                  {post.author.bio}
                </p>
              </div>
            </div>
          </div>
        </article>

        <aside className="space-y-8">
          <div className="space-y-4 rounded-3xl border border-white/10 bg-[#0f0f0f] p-6 shadow-soft">
            <h3 className="text-xs font-semibold uppercase tracking-[0.4em] text-neutral-400">
              Article Highlights
            </h3>
            <div className="space-y-3 text-sm text-neutral-300">
              <p>
                Published {formatDate(post.publishDate)} · {post.readTime} read
              </p>
              <p>Author: {post.author.name}</p>
            </div>
          </div>

          <div className="space-y-4 rounded-3xl border border-white/10 bg-[#0f0f0f] p-6 shadow-soft">
            <h3 className="text-xs font-semibold uppercase tracking-[0.4em] text-neutral-400">
              Research Proposal
            </h3>
            <p className="text-sm text-neutral-300">
              Discuss bespoke research or capital strategy needs with RSFM’s
              advisory team.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white transition-colors duration-200 hover:border-primary-400"
            >
              Engage RSFM
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </aside>
      </div>

      {relatedPosts.length > 0 && (
        <section className="border-t border-white/10 bg-[#050505] py-20 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-semibold uppercase tracking-[0.4em]">
              Related Articles
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <div
                  key={relatedPost.slug}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f0f] transition-all duration-300 hover:-translate-y-1 hover:border-primary-400"
                >
                  <div className="relative h-48">
                    <Image
                      src={relatedPost.coverImage}
                      alt={relatedPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-4 p-6">
                    <span className="inline-block rounded-full bg-black/70 px-3 py-1 text-[10px] uppercase tracking-[0.4em] text-neutral-300">
                      {blogCategories.find((cat) => cat.value === relatedPost.category)?.label ||
                        relatedPost.category}
                    </span>
                    <h3 className="text-lg font-semibold text-white">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-neutral-400 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.35em] text-neutral-500">
                      <span className="flex items-center gap-2">
                        <Calendar className="h-3 w-3" />
                        {formatDate(relatedPost.publishDate)}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock className="h-3 w-3" />
                        {relatedPost.readTime}
                      </span>
                    </div>
                    <Link
                      href={`/blog/${relatedPost.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-white transition-all duration-200 hover:text-primary-300"
                    >
                      Read Article
                      <Eye className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
