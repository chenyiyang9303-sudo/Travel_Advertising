import Link from "next/link";
import React from "react";
import { Logo } from "./logo";

export function Footer() {
  const pages = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Services",
      href: "/#services",
    },
    {
      title: "Case Studies",
      href: "/#case-studies",
    },
    {
      title: "Reports",
      href: "/reports",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/#contact",
    },
  ];

  const legals = [
    {
      title: "Privacy Policy",
      href: "/privacy",
    },
    {
      title: "Terms of Service",
      href: "/terms",
    },
    {
      title: "Cookie Policy",
      href: "/cookies",
    },
  ];

  const services = [
    {
      title: "Portfolio Management",
      href: "/#services",
    },
    {
      title: "Private Equity",
      href: "/#services",
    },
    {
      title: "Risk Management",
      href: "/#services",
    },
    {
      title: "Institutional Advisory",
      href: "/#contact",
    },
  ];

  const contact = [
    {
      title: "Email Us",
      href: "mailto:contact@radiantsoaring.com",
    },
    {
      title: "Schedule Meeting",
      href: "/#contact",
    },
  ];

  return (
    <footer className="relative w-full overflow-hidden bg-surface-subtle dark:bg-surface">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/5 to-amber-500/5 dark:from-transparent dark:via-orange-400/10 dark:to-amber-400/10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-orange-500/20 via-transparent to-amber-500/20" />
      
      <div className="relative border-t border-subtle px-6 md:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Main footer content */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
            {/* Brand section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center">
                <Logo />
              </div>
              
              {/* Updated tagline */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold bg-gradient-to-r from-orange-600 via-amber-600 to-orange-800 dark:from-orange-400 dark:via-amber-400 dark:to-orange-300 bg-clip-text text-transparent">
                  Elevating Investment Excellence
                </h3>
                <p className="text-sm text-muted leading-relaxed max-w-md">
                  Premier fund management services for institutional investors and high-net-worth clients. Delivering exceptional returns through sophisticated strategies and rigorous risk management.
                </p>
              </div>

              {/* Contact info */}
              <div className="space-y-2 text-sm text-subtle">
                <p>Radiant Soaring Fund Management LLC</p>
                <p>Institutional Investment Management</p>
              </div>
            </div>

            {/* Navigation sections */}
            <div className="space-y-6">
              <h4 className="font-bold text-fg text-sm uppercase tracking-wide">
                Navigate
              </h4>
              <ul className="space-y-3">
                {pages.map((page, idx) => (
                  <li key={"pages" + idx}>
                    <Link
                      className="text-sm text-muted hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-200"
                      href={page.href}
                    >
                      {page.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="font-bold text-fg text-sm uppercase tracking-wide">
                Services
              </h4>
              <ul className="space-y-3">
                {services.map((service, idx) => (
                  <li key={"service" + idx}>
                    <Link
                      className="text-sm text-muted hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-200"
                      href={service.href}
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="font-bold text-fg text-sm uppercase tracking-wide">
                Connect
              </h4>
              <ul className="space-y-3">
                {contact.map((item, idx) => (
                  <li key={"contact" + idx}>
                    <Link
                      className="text-sm text-muted hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-200"
                      href={item.href}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <div className="pt-4">
                <h5 className="font-semibold text-fg text-xs uppercase tracking-wide mb-3">
                  Legal
                </h5>
                <ul className="space-y-2">
                  {legals.map((legal, idx) => (
                    <li key={"legal" + idx}>
                      <Link
                        className="text-xs text-subtle hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors duration-200"
                        href={legal.href}
                      >
                        {legal.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="pt-8 border-t border-subtle">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-xs text-subtle">
                &copy; 2025 Radiant Soaring Fund Management LLC. All rights reserved.
              </div>

              <div className="flex items-center gap-6 text-xs text-subtle">
                <span>Premium Fund Management</span>
                <span className="w-1 h-1 rounded-full bg-orange-500" />
                <span>Institutional Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
