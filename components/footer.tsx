import Link from "next/link";
import React from "react";

import { Logo } from "./logo";

const NAV_ITEMS = [
  { title: "Home", href: "/" },
  { title: "Solutions", href: "/#services" },
  { title: "Casework", href: "/#case-studies" },
  { title: "Insights", href: "/blog" },
  { title: "Reports", href: "/reports" },
  { title: "Contact", href: "/#contact" },
];

const SERVICE_ITEMS = [
  { title: "Portfolio Management", href: "/#services" },
  { title: "Private Capital", href: "/#services" },
  { title: "Risk Advisory", href: "/#services" },
  { title: "Institutional Mandates", href: "/#contact" },
];

const LEGAL_ITEMS = [
  { title: "Privacy Policy", href: "/privacy" },
  { title: "Terms of Service", href: "/terms" },
  { title: "Cookie Policy", href: "/cookies" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(196,154,108,0.12),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(185,130,94,0.12),transparent_40%)]" />

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:px-10">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-6">
            <Logo />
            <p className="max-w-sm text-sm leading-relaxed text-neutral-300">
              RSFM partners with institutional allocators, family offices, and
              founders to architect capital solutions, manage complex portfolios,
              and execute transformative transactions with discretion and
              precision.
            </p>
            <div className="space-y-1 text-[11px] uppercase tracking-[0.45em] text-neutral-500">
              <p>RSFM</p>
              <p>575 Lexington Avenue, Suite 4200, New York, NY 10022</p>
              <p>contact@radiantsoaringfm.com</p>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.4em] text-neutral-500">
              Navigate
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-neutral-300">
              {NAV_ITEMS.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="transition-colors duration-200 hover:text-primary-300"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.4em] text-neutral-500">
              Services
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-neutral-300">
              {SERVICE_ITEMS.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="transition-colors duration-200 hover:text-primary-300"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.4em] text-neutral-500">
              Governance
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-neutral-300">
              {LEGAL_ITEMS.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="transition-colors duration-200 hover:text-primary-300"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-sm text-neutral-300">
              <Link
                href="mailto:contact@radiantsoaringfm.com"
                className="inline-flex items-center gap-2 border-b border-transparent pb-1 transition-all duration-200 hover:border-primary-400 hover:text-primary-300"
              >
                contact@radiantsoaringfm.com
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 text-[11px] uppercase tracking-[0.4em] text-neutral-500 sm:flex-row">
          <span>&copy; 2025 Radiant Soaring Fund Management LLC. All rights reserved.</span>
          <div className="flex flex-wrap items-center gap-3 text-neutral-500">
            <span>Excellence</span>
            <span className="h-0.5 w-8 bg-white/20" />
            <span>Discipline</span>
            <span className="h-0.5 w-8 bg-white/20" />
            <span>Stewardship</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
