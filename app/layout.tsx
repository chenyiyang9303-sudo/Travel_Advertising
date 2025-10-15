import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/context/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Orient Blackstone Asset Management | Corporate Finance Advisory & Risk Management",
  description:
    "Orient Blackstone Asset Management LLC provides expert corporate finance consulting, risk management, and compliance advisory services. Strategic guidance on financial planning, investment strategy, and asset allocation to drive business growth.",
  keywords: "Orient Blackstone, asset management, corporate finance consulting, risk management advisory, compliance consulting, financial planning, investment strategy advisory, corporate asset advisory, CFO advisory services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://app.cal.com/embed/embed.js" async />
      </head>
      <body
        className={cn("antialiased dark:bg-black bg-white", inter.className)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
