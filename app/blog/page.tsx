"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, User, ArrowRight, Search, Filter, Star } from "lucide-react";
import { getAllBlogPosts, getFeaturedBlogPosts, blogCategories, BlogPost } from "@/lib/blog-data";
import { formatDate } from "@/lib/utils";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");

  const allPosts = getAllBlogPosts();
  const featuredPosts = getFeaturedBlogPosts();

  const filteredPosts = allPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    const search = searchTerm.toLowerCase();
    const matchesSearch =
      post.title.toLowerCase().includes(search) ||
      post.excerpt.toLowerCase().includes(search) ||
      post.tags.some((tag) => tag.toLowerCase().includes(search));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-app text-fg">
      {/* Hero Section */}
      <div className="border-b border-white/10 bg-[#050505] pt-36 pb-24 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-semibold text-white sm:text-5xl"
            >
              Travel Marketing Insights
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-base leading-relaxed text-neutral-300 sm:text-lg"
            >
              The WanderAds team shares destination strategies, creator co-creation, and AI tool practices to help you find inspiration for your next campaign faster.
            </motion.p>

            {/* Search and Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mx-auto mt-10 flex max-w-2xl flex-col gap-4 md:flex-row"
            >
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-neutral-500" />
                <input
                  type="text"
                  placeholder="Search articles or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-full border border-white/20 bg-white/10 px-10 py-3 text-sm tracking-[0.15em] text-white placeholder:text-neutral-500 focus:border-primary-400 focus:outline-none"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="rounded-full border border-white/20 bg-white/10 px-4 py-3 text-xs uppercase tracking-[0.2em] text-neutral-300 focus:border-primary-400 focus:outline-none"
              >
                {blogCategories.map((category) => (
                  <option key={category.value} value={category.value} className="text-black">
                    {category.label}
                  </option>
                ))}
              </select>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="border-b border-white/10 bg-app py-20">
          <div className="container mx-auto px-4">
            <div className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-primary-400">
              <Star className="h-5 w-5 text-primary-400" />
              Featured Research
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {featuredPosts.slice(0, 2).map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="h-full"
                >
                  <FeaturedPostCard post={post} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="bg-app py-20">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-xl font-semibold uppercase tracking-[0.4em] text-fg">
              Latest Articles
            </h2>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-neutral-500">
              <Filter className="h-4 w-4" />
              {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="h-full"
              >
                <BlogPostCard post={post} />
              </motion.div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="py-16 text-center text-neutral-400">
              <Search className="mx-auto mb-4 h-16 w-16 text-neutral-600" />
              <h3 className="text-lg font-semibold uppercase tracking-[0.4em]">
                No Articles Found
              </h3>
              <p className="mt-2 text-sm text-neutral-500">
                Adjust your filters or search query.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Reports CTA */}
      <section className="border-t border-white/10 bg-[#050505] pt-20 pb-10 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-semibold uppercase tracking-[0.35em]">
              Looking for Market Data?
            </h2>
            <p className="mt-4 text-sm uppercase tracking-[0.4em] text-neutral-400">
              Get comprehensive market intelligence and research reports to inform your strategic decisions.
            </p>
            <Link
              href="/reports"
              className="inline-flex items-center gap-3 rounded-full border border-white/20 px-8 py-3 text-xs font-semibold uppercase tracking-[0.35em] transition-all duration-200 hover:border-primary-400"
            >
              Explore Reports
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-[#050505] pt-0 pb-20 text-white mt-0">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold uppercase tracking-[0.4em]">
              Stay Updated with Travel Trends
            </h2>
            <p className="mt-4 text-sm uppercase tracking-[0.4em] text-neutral-400">
              Get weekly insights, market analysis, and technology updates delivered to your inbox.
            </p>
            <div className="mx-auto mt-8 flex max-w-md flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-full border border-white/20 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:border-primary-400 focus:outline-none"
              />
              <button className="rounded-full border border-white/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-white transition-colors duration-200 hover:border-primary-400">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeaturedPostCard({ post }: { post: BlogPost }) {
  return (
    <div className="group h-full overflow-hidden rounded-3xl border border-white/70 bg-white shadow-[0_20px_60px_rgba(81,98,128,0.1)] transition-all duration-300 hover:-translate-y-1 hover:border-primary-400">
      <div className="flex h-full flex-col lg:flex-row">
        <div className="relative h-48 w-full lg:h-64 lg:w-1/2">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute left-4 top-4 flex gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-primary-500/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-black">
              <Star className="h-3 w-3" />
              Featured
            </span>
            <span className="rounded-full bg-black/70 px-3 py-1 text-[10px] uppercase tracking-[0.4em] text-white">
              {blogCategories.find((cat) => cat.value === post.category)?.label ||
                post.category}
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-between p-6 lg:w-1/2 lg:p-8">
          <div>
            <h3 className="mb-3 text-xl font-semibold text-fg transition-colors duration-200 group-hover:text-primary-500">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h3>
            <p className="text-sm text-muted line-clamp-3">
              {post.excerpt}
            </p>
          </div>
          <div>
            <div className="mb-4 flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] text-muted">
              <span className="flex items-center gap-1">
                <User className="h-4 w-4 text-muted" />
                {post.author.name}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4 text-muted" />
                {formatDate(post.publishDate)}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4 text-muted" />
                {post.readTime}
              </span>
            </div>
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary-600 transition-all duration-200 hover:text-primary-500"
            >
              Read Article
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function BlogPostCard({ post }: { post: BlogPost }) {
  const categoryLabel =
    blogCategories.find((cat) => cat.value === post.category)?.label ||
    post.category;

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/70 bg-white shadow-[0_20px_60px_rgba(81,98,128,0.1)] transition-all duration-300 hover:-translate-y-1 hover:border-primary-400">
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-black/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-white">
            {categoryLabel}
          </span>
          {post.featured && (
            <span className="inline-flex items-center gap-1 rounded-full bg-primary-500/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-black">
              <Star className="h-3 w-3" />
              Spotlight
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between gap-6 p-6 sm:p-7">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold uppercase tracking-[0.25em] text-fg transition-colors duration-200 group-hover:text-primary-500">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h3>
          <p className="text-sm leading-relaxed text-neutral-400">
            {post.excerpt}
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-4 text-[11px] uppercase tracking-[0.35em] text-neutral-500">
            <span className="flex items-center gap-1">
              <User className="h-4 w-4 text-neutral-500" />
              {post.author.name}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4 text-neutral-500" />
              {formatDate(post.publishDate)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4 text-neutral-500" />
              {post.readTime}
            </span>
          </div>

          <div className="flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.35em] text-neutral-600">
            {post.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1"
              >
                {tag}
              </span>
            ))}
            {post.tags.length > 4 && (
              <span className="rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1">
                +{post.tags.length - 4} more
              </span>
            )}
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-primary-600 transition-all duration-200 hover:text-primary-500"
          >
            Read Article
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
