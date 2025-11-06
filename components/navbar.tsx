"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { ArrowUpRight } from "lucide-react";

import { Logo } from "./logo";
import { Button } from "./button";
import { useCalEmbed } from "@/app/hooks/useCalEmbed";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: "The Firm", link: "/about" },
  { name: "Solutions", link: "/#services" },
  { name: "Casework", link: "/#case-studies" },
  { name: "Insights", link: "/blog" },
  { name: "Reports", link: "/reports" },
  { name: "Contact", link: "/#contact" },
];

export const Navbar = () => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 80);
  });

  return (
    <motion.header className="fixed inset-x-0 top-0 z-50 w-full">
      <DesktopNav visible={visible} />
      <MobileNav visible={visible} />
    </motion.header>
  );
};

const DesktopNav = ({ visible }: { visible: boolean }) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const calConfig = useCalEmbed();

  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(18px)" : "none",
        y: visible ? 20 : 10,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 40 }}
      className={cn(
        "hidden lg:flex items-center justify-between px-6 py-4 mx-auto max-w-6xl rounded-full transition-colors duration-300 border border-transparent",
        visible ? "bg-black/82 border border-white/10 shadow-soft" : "bg-transparent"
      )}
    >
      <Logo />

      <nav className="flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/65">
        {NAV_ITEMS.map((item, idx) => (
          <Link
            key={item.name}
            href={item.link}
            className="relative px-4 py-2 transition-colors duration-200 hover:text-primary-300"
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            {hovered === idx && (
              <motion.span
                layoutId="nav-hover"
                className="absolute inset-0 rounded-full bg-white/6"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
            <span className="relative z-10">{item.name}</span>
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <Button
          as="button"
          variant="primary"
          data-cal-namespace={calConfig.namespace}
          data-cal-link={calConfig.link}
          data-cal-config={`{"layout":"${calConfig.layout}"}`}
          className="hidden md:inline-flex"
        >
          <span>Book A Call</span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-all duration-200 group-hover:bg-primary-200 group-hover:text-black">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </Button>
      </div>
    </motion.div>
  );
};

const MobileNav = ({ visible }: { visible: boolean }) => {
  const [open, setOpen] = useState(false);
  const calConfig = useCalEmbed();

  return (
    <motion.div
      animate={{
        backdropFilter: visible || open ? "blur(16px)" : "none",
        y: visible ? 18 : 8,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 40 }}
      className={cn(
        "relative mx-auto flex w-[calc(100%-1.5rem)] items-center justify-between rounded-full px-4 py-3 lg:hidden",
        visible || open ? "bg-black/85 border border-white/12 shadow-soft" : "bg-transparent"
      )}
    >
      <Logo />
      <button
        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle navigation"
      >
        {open ? <IconX size={18} /> : <IconMenu2 size={18} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ type: "spring", stiffness: 240, damping: 30 }}
            className="absolute top-16 left-0 right-0 mx-auto flex w-full flex-col gap-4 rounded-3xl border border-white/12 bg-black/92 px-5 py-8 shadow-soft backdrop-blur-xl"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold uppercase tracking-[0.4em] text-white/70 transition-colors duration-200 hover:text-primary-300"
              >
                {item.name}
              </Link>
            ))}

            <div className="flex w-full flex-col gap-3 border-t border-white/10 pt-6">
              <Button
                as="button"
                variant="primary"
                data-cal-namespace={calConfig.namespace}
                data-cal-link={calConfig.link}
                data-cal-config={`{"layout":"${calConfig.layout}"}`}
                className="w-full justify-between"
                onClick={() => setOpen(false)}
              >
                <span>Book A Call</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-all duration-200 group-hover:bg-primary-200 group-hover:text-black">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Button>

              <Button
                as={Link}
                href="/reports"
                variant="secondary"
                className="w-full justify-between"
                onClick={() => setOpen(false)}
              >
                <span>View Research</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 transition-colors duration-200 group-hover:border-primary-400">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
