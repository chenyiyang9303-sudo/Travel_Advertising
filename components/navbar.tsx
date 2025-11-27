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

import { Logo } from "./logo";
import { Button } from "./button";
import { useCalEmbed } from "@/app/hooks/useCalEmbed";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: "Home", link: "/" },
  { name: "Services", link: "/#services" },
  { name: "Solutions", link: "/#process" },
  { name: "Case Studies", link: "/#case-studies" },
  { name: "Pricing", link: "/#pricing" },
  { name: "AI Tools", link: "/#ai-tools" },
  { name: "Blog", link: "/blog" },
  { name: "About Us", link: "/about" },
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
        "hidden lg:flex items-center justify-between px-6 py-4 mx-auto max-w-6xl rounded-full transition-colors duration-300 border",
        visible
          ? "bg-white/90 text-[#1c1c1c] border-white/60 shadow-[0_20px_60px_rgba(15,25,45,0.08)]"
          : "bg-white/5 text-white border-white/10"
      )}
    >
      <Logo showText />

      <nav
        className={cn(
          "flex items-center gap-1 text-[0.65rem] font-semibold uppercase tracking-[0.3em]",
          visible ? "text-[#6e6e6e]" : "text-white/80"
        )}
      >
        {NAV_ITEMS.map((item, idx) => (
          <Link
            key={item.name}
            href={item.link}
            className={cn(
              "relative px-4 py-2 transition-colors duration-200",
              visible ? "hover:text-primary-500" : "hover:text-white"
            )}
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
            <span className="relative z-10 whitespace-nowrap">
              {item.name}
            </span>
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
          <span>Get Started</span>
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
        visible || open
          ? "bg-white/95 border border-white/60 shadow-[0_15px_50px_rgba(15,25,45,0.12)]"
          : "bg-white/10 text-white"
      )}
    >
      <Logo showText />
      <button
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-full border",
          visible || open
            ? "border-[#ece3d9] text-[#1f1f1f]"
            : "border-white/30 text-white"
        )}
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
            className="absolute top-16 left-0 right-0 mx-auto flex w-full flex-col gap-4 rounded-3xl border border-white px-5 py-8 shadow-soft backdrop-blur-xl bg-white/95 text-[#1f1f1f]"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold uppercase tracking-[0.35em] text-[#6e6e6e] transition-colors duration-200 hover:text-primary-500"
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
                className="w-full"
                onClick={() => setOpen(false)}
              >
                <span>Get Started</span>
              </Button>

              <Button
                as={Link}
                href="/case-studies"
                variant="secondary"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                <span>View Cases</span>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
