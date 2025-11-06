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
  title: "RSFM | Institutional Capital Advisory & Portfolio Stewardship",
  description:
    "RSFM partners with institutional allocators, family offices, and founders to architect capital solutions, manage portfolio risk, and execute complex transactions with discretion.",
  keywords:
    "RSFM, institutional capital, asset management, portfolio advisory, investment strategy, family office, corporate finance, transaction advisory, risk governance",
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
