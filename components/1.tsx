"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { getAllBlogPosts } from "@/lib/blog-data";

export function SimpleBlogWithGrid() {
  // Get first 3 featured blog posts from real data
  const blogs = getAllBlogPosts().slice(0, 3);

  return (
    <div className="relative overflow-hidden py-20 md:py-0">
      <div className="py-4 md:py-10 overflow-hidden relative  px-4 md:px-8">
        <GridPatternContainer className="opacity-50" />
        <div className="relative z-20 py-10 text-center">
          <h2 className="font-display text-display-md md:text-display-lg font-bold text-fg mb-4">
            Travel Brand Inspiration
          </h2>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            The One World Global Travel team records destination content trends, creator tactics, and AI tool tips weekly, helping you quickly find inspiration for your next campaign.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between pb-20 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full relative z-20">
          {blogs.map((blog, index) => (
            <BlogCard blog={blog} key={blog.title + index} />
          ))}
        </div>
      </div>
    </div>
  );
}

const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm mr-4 text-fg px-2 py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-surface-elevated rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm" />
      <span className="font-medium text-fg">OBAM</span>
    </Link>
  );
};

export const BlogCard = ({ blog }: { blog: any }) => {
  const truncate = (text: string, length: number) => {
    return text.length > length ? text.slice(0, length) + "..." : text;
  };
  return (
    <Link
      className="shadow-soft rounded-3xl border border-subtle w-full bg-surface overflow-hidden hover:scale-[1.02] hover:shadow-elevated transition duration-200"
      href={`/blog/${blog.slug}`}
    >
      {blog.coverImage ? (
        <BlurImage
          src={blog.coverImage || ""}
          alt={blog.title}
          height="800"
          width="800"
          className="h-52 object-cover object-top w-full"
        />
      ) : (
        <div className="h-52 flex items-center justify-center bg-surface">
          <Logo />
        </div>
      )}
      <div className="p-4 md:p-8 bg-surface">
        <div className="flex space-x-2 items-center  mb-2">
          <div className="rounded-full h-5 w-5 bg-primary-600 flex items-center justify-center text-white text-xs font-bold">
            {blog.author.name.split(' ').map((n: string) => n[0]).join('')}
          </div>
          <p className="text-sm font-normal text-muted">
            {blog.author.name}
          </p>
        </div>
        <p className="text-lg font-bold mb-4 text-fg">
          {blog.title}
        </p>
        <p className="text-left text-sm mt-2 text-muted">
          {truncate(blog.excerpt, 100)}
        </p>
      </div>
    </Link>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: {
  height: string;
  width: string;
  src: string;
  className?: string;
  alt?: string;
  [key: string]: any;
}) => {
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
      width={Number(width)}
      height={Number(height)}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};

const GridPatternContainer = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 h-full w-full stroke-black/10 dark:stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_center,white,transparent)]",
        className
      )}
    >
      <GridPattern />
    </div>
  );
};

const GridPattern = () => {
  const columns = 41;
  const rows = 11;
  return (
    <svg
      className="h-full w-full pointer-events-none absolute inset-0"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="grid-pattern"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
          x="-1"
          y="-1"
        >
          <path
            d="M0 40L40 40L40 0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill="url(#grid-pattern)"
      />
      <svg x="-1" y="-1" className="overflow-visible">
        {Array.from({ length: rows }).map((_, row) =>
          Array.from({ length: columns }).map((_, col) => {
            const opacity = Math.random() * 0.5 + 0.25;
            return (
              <circle
                key={`${col}-${row}`}
                cx={col * 40}
                cy={row * 40}
                r="1.5"
                fill="currentColor"
                fillOpacity={opacity}
              />
            );
          })
        )}
      </svg>
    </svg>
  );
};
