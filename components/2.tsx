"use client";
import { Container } from "@/components/container";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import FuzzySearch from "fuzzy-search";
import { getAllReports } from "@/lib/reports-data";

export function BlogWithSearch() {
  // Get reports from the centralized data source instead of hardcoding
  const reportsData = getAllReports();
  const blogs = reportsData.map(report => ({
    title: report.title,
    description: report.description,
    date: report.publishDate,
    slug: report.id,
    image: report.coverImage || "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=3000&auto=format&fit=crop",
    author: report.author.name,
    authorAvatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`,
  }));

  return (
    <div className="relative overflow-hidden">
      <Container className="flex flex-col items-center justify-between pb-20">
        <div className="relative z-20 py-10 text-center">
          <h2 className="font-display text-display-md md:text-display-lg font-bold text-fg mb-4">
            Destination Intelligence Reports
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            Deep dive into traveler behavior, creator commercialization, and AI advertising research to help you formulate your next destination strategy faster.
          </p>
        </div>

        {blogs.slice(0, 1).map((blog, index) => (
          <BlogCard blog={blog} key={blog.title + index} />
        ))}

        <BlogPostRows blogs={blogs} />
      </Container>
    </div>
  );
}

const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <Link
      className="shadow-soft rounded-3xl border border-subtle w-full bg-surface flex flex-col md:flex-row overflow-hidden mb-20 hover:scale-[1.01] hover:shadow-elevated transition duration-200"
      href={`/reports/${blog.slug}`}
    >
      <div className="md:w-1/2 relative h-64 md:h-auto">
        <Image
          src={blog.image}
          alt={blog.title}
          width={1000}
          height={1000}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-between bg-surface">
        <div>
          <div className="flex space-x-2 items-center mb-4">
            <Image
              src={blog.authorAvatar}
              alt={blog.author}
              width={24}
              height={24}
              className="rounded-full h-6 w-6"
            />
            <p className="text-sm font-normal text-muted">
              {blog.author}
            </p>
            <span className="text-subtle">•</span>
            <p className="text-sm text-muted">
              {format(new Date(blog.date), "MMM dd, yyyy")}
            </p>
          </div>
          <p className="text-2xl font-bold mb-4 text-fg">
            {blog.title}
          </p>
          <p className="text-left text-base mt-4 text-muted leading-relaxed">
            {blog.description}
          </p>
        </div>
        <div className="mt-6">
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition duration-200 inline-flex items-center">
            Read Report
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </Link>
  );
};

const BlogPostRows = ({ blogs }: { blogs: Blog[] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>(blogs);

  useEffect(() => {
    const searcher = new FuzzySearch(blogs, ["title", "description"], {
      caseSensitive: false,
    });
    const result = searcher.search(searchTerm);
    setFilteredBlogs(result);
  }, [searchTerm, blogs]);

  // Skip the first blog as it's shown in BlogCard
  const remainingBlogs = filteredBlogs.slice(1);

  return (
    <div className="w-full">
      <div className="mb-12">
        <input
          type="text"
          placeholder="Search destinations, creators, AI reports..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-6 py-4 rounded-xl border border-subtle bg-surface text-fg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg placeholder:text-subtle"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {remainingBlogs.map((blog, index) => (
          <BlogPostRow blog={blog} key={blog.title + index} />
        ))}
      </div>
    </div>
  );
};

const BlogPostRow = ({ blog }: { blog: Blog }) => {
  return (
    <Link
      className="shadow-soft rounded-2xl border border-subtle bg-surface overflow-hidden hover:scale-[1.02] hover:shadow-elevated transition duration-200 flex flex-col"
      href={`/reports/${blog.slug}`}
    >
      <div className="relative h-48">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="p-6 flex-grow flex flex-col bg-surface">
        <div className="flex space-x-2 items-center mb-3">
          <Image
            src={blog.authorAvatar}
            alt={blog.author}
            width={20}
            height={20}
            className="rounded-full h-5 w-5"
          />
          <p className="text-xs font-normal text-muted">
            {blog.author}
          </p>
          <span className="text-subtle">•</span>
          <p className="text-xs text-muted">
            {format(new Date(blog.date), "MMM dd, yyyy")}
          </p>
        </div>
        <p className="text-lg font-bold mb-3 text-fg line-clamp-2">
          {blog.title}
        </p>
        <p className="text-sm text-muted line-clamp-3 flex-grow">
          {blog.description}
        </p>
        <div className="mt-4 pt-4 border-t border-subtle">
          <span className="text-primary-600 dark:text-primary-400 font-medium text-sm inline-flex items-center hover:gap-2 transition-all">
            Read Report
            <svg
              className="ml-1 h-3 w-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
};

type Blog = {
  title: string;
  description: string;
  date: string;
  slug: string;
  image: string;
  author: string;
  authorAvatar: string;
};
