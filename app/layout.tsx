import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "WanderAds | Travel Marketing Studio & Smart Promotion",
  description:
    "WanderAds helps destinations, hotels, and travel brands win more bookings through AI-powered content, creator activations, and full-funnel media. Explore services, case studies, and tools built for tourism growth.",
  keywords:
    "WanderAds, travel marketing, tourism advertising, destination campaign, KOL marketing, travel content studio, AI travel ads, tourism digitalization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script src="https://app.cal.com/embed/embed.js" async />
      </head>
      <body
        className={cn(
          "antialiased bg-app text-fg min-h-screen transition-colors duration-300 font-body",
        )}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
