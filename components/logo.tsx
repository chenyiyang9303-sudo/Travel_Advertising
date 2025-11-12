"use client";
import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  showText?: boolean;
};

export const Logo = ({ showText = true }: LogoProps) => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm px-2 py-1 relative z-20"
    >
      <div className="flex items-center gap-3">
        <Image
          src="/logo.png"
          alt="Radiant Soaring Fund Management logo"
          width={952}
          height={280}
          className="h-12 w-auto md:h-[3.75rem]"
          priority
        />
        {showText && (
          <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent dark:from-orange-400 dark:to-amber-400 tracking-wide">
            RSFM
          </span>
        )}
      </div>
    </Link>
  );
};
