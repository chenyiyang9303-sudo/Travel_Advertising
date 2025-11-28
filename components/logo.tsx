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
          alt="One World Global Travel travel marketing logo"
          width={952}
          height={280}
          className="h-8 w-auto md:h-10"
          priority
        />
        {showText && (
          <span className="text-lg md:text-xl font-bold tracking-wide">
            One World Global Travel
          </span>
        )}
      </div>
    </Link>
  );
};
