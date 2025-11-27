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
    "group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-[0.7rem] font-semibold tracking-[0.2em] uppercase transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400 cursor-pointer disabled:cursor-not-allowed disabled:opacity-70";

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-primary-500 via-primary-400 to-primary-500 text-white shadow-soft hover:shadow-elevated hover:translate-y-[-2px]",
    secondary:
      "bg-white/80 text-primary-600 border border-white/50 backdrop-blur hover:text-primary-700 hover:bg-white",
    dark:
      "bg-[#1f1f1f] text-white border border-white/20 hover:border-primary-400 hover:bg-[#151515] shadow-soft",
    gradient:
      "bg-gradient-to-r from-primary-500 via-creative-500 to-accent-400 text-white shadow-soft hover:opacity-95",
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
