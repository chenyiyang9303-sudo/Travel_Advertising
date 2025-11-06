"use client";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm px-2 py-1 relative z-20"
    >
      <div className="flex items-center gap-3">
        <Image
          src="/logo.png"
          alt="RSFM Logo"
          width={40}
          height={40}
          className="h-8 w-8 md:h-10 md:w-10"
        />
        <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent dark:from-orange-400 dark:to-amber-400 tracking-wide">
          RSFM
        </span>
      </div>
    </Link>
  );
};
