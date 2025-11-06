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
    "inline-flex items-center justify-center px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 cursor-pointer disabled:cursor-not-allowed disabled:opacity-70";

  const variantStyles = {
    primary:
      "bg-primary-600 text-white shadow-soft hover:bg-primary-700 hover:shadow-elevated",
    secondary:
      "bg-surface border border-subtle text-fg hover:text-primary-600 hover:border-primary-300/70 dark:hover:text-primary-400",
    dark:
      "bg-surface-elevated text-fg shadow-soft hover:bg-primary-600 hover:text-white",
    gradient:
      "bg-gradient-to-r from-primary-500 via-amber-500 to-primary-600 text-white shadow-soft hover:from-primary-600 hover:via-amber-500 hover:to-primary-700",
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
