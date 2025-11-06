"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Link } from "next-view-transitions";

export const Button = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
  | typeof Link
)) => {
  const baseStyles =
    "group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-[0.35em] uppercase transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 cursor-pointer disabled:cursor-not-allowed disabled:opacity-70";

  const variantStyles = {
    primary:
      "bg-white text-black hover:bg-primary-500 hover:text-black shadow-soft",
    secondary:
      "bg-transparent border border-white/40 text-white hover:border-primary-500 hover:text-primary-200",
    dark:
      "bg-black text-white border border-white/10 hover:border-primary-500 hover:text-primary-100 shadow-soft",
    gradient:
      "bg-gradient-to-r from-primary-600 via-primary-500 to-primary-700 text-black shadow-soft hover:from-primary-500 hover:via-primary-500 hover:to-primary-600",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
