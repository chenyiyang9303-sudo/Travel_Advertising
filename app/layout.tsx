import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/context/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Radiant Soaring Fund Management | Premier Investment Advisory & Fund Management",
  description:
    "Radiant Soaring Fund Management LLC delivers exceptional fund management and investment advisory services for institutional investors and high-net-worth individuals. Expert portfolio management, risk optimization, and strategic asset allocation for superior returns.",
  keywords: "Radiant Soaring, fund management, investment advisory, portfolio management, institutional investing, wealth management, asset allocation, hedge fund, private equity, high-net-worth advisory",
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
        className={cn(
          "antialiased bg-app text-fg min-h-screen transition-colors duration-300",
          inter.className
        )}
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
