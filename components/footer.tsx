import Link from "next/link";
import React from "react";
import { Instagram, LinkedinIcon, Youtube } from "lucide-react";

import { Logo } from "./logo";

// lucide-react doesn't ship a TikTok glyph, so we keep a simple custom SVG for consistency.
const TiktokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <path d="M15 4.2c.9 1.6 2.4 2.6 4 2.8v3.1c-1.6 0-3.2-.6-4-1.3v6.3a5.7 5.7 0 1 1-5.7-5.6c.5 0 .9 0 1.4.1v3.2a2.2 2.2 0 1 0 1.5 2.1V2.5H15Z" />
  </svg>
);

const GUIDE_LINKS = [
  { title: "Top Destinations", href: "/blog" },
  { title: "Latest Guides", href: "/blog" },
  { title: "Themed Photography", href: "/#case-studies" },
];

const SERVICE_LINKS = [
  { title: "Full-Funnel Advertising", href: "/#services" },
  { title: "Travel Content Studio", href: "/#services" },
  { title: "Creator/KOL Partnerships", href: "/#services" },
  { title: "AI Travel Marketing Tools", href: "/#ai-tools" },
];

const SOLUTION_LINKS = [
  { title: "Destination Solutions", href: "/#process" },
  { title: "Hotel Solutions", href: "/#process" },
  { title: "City Tourism Boards", href: "/#process" },
  { title: "Travel Agencies/Brands", href: "/#process" },
];

const RESOURCE_LINKS = [
  { title: "Case Studies", href: "/#case-studies" },
  { title: "Blog", href: "/blog" },
  { title: "Reports", href: "/reports" },
  { title: "Contact Us", href: "mailto:hello@wanderads.studio" },
];

const SOCIAL_LINKS = [
  { name: "TikTok", href: "https://www.tiktok.com", icon: TiktokIcon },
  { name: "Instagram", href: "https://www.instagram.com", icon: Instagram },
  { name: "YouTube", href: "https://www.youtube.com", icon: Youtube },
  { name: "LinkedIn", href: "https://www.linkedin.com", icon: LinkedinIcon },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#111111] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,107,74,0.18),transparent_50%),radial-gradient(circle_at_bottom,_rgba(74,143,255,0.18),transparent_45%)] opacity-70" />
      <div className="relative mx-auto max-w-6xl px-6 py-20 md:px-10 space-y-12">
        <div className="grid gap-10 lg:grid-cols-6">
          <div className="lg:col-span-2 space-y-6">
            <Logo showText />
            <p className="text-sm leading-relaxed text-white/70 max-w-sm">
              WanderAds is a creative + data studio for travel brands. We help destinations be seen on the global stage through magazine-grade content, creator alliances, AI tools, and media strategy.
            </p>
            <p className="text-xs uppercase tracking-[0.4em] text-white/50">
              hello@wanderads.studio
            </p>
          </div>

          <FooterColumn title="Travel Guides" links={GUIDE_LINKS} />
          <FooterColumn title="Advertising & Services" links={SERVICE_LINKS} />
          <FooterColumn title="Solutions" links={SOLUTION_LINKS} />
          <FooterColumn title="Resources" links={RESOURCE_LINKS} />
        </div>

        <div className="flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-3">
            {SOCIAL_LINKS.map(({ name, href, icon: Icon }) => (
              <Link
                key={name}
                href={href}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:border-primary-400 hover:text-primary-200"
              >
                <Icon className="h-4 w-4" />
                {name}
              </Link>
            ))}
          </div>
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">
            © 2025 WanderAds — Travel Inspiration & Smart Promotion
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { title: string; href: string }[];
}) {
  return (
    <div className="space-y-4">
      <h4 className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
        {title}
      </h4>
      <ul className="space-y-3 text-sm text-white/70">
        {links.map((link) => (
          <li key={link.title}>
            <Link
              href={link.href}
              className="transition-colors duration-200 hover:text-primary-200"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
