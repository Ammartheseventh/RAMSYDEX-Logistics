import type { Metadata } from "next";
import "./globals.css";
import { bodyFont, displayFont } from "@/lib/fonts";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "RAMSYDEX GLOBAL LOGISTICS",
  description:
    "Freight, customs clearance, QC inspection, and last-mile delivery from Central Malaysia.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body className="flex min-h-screen flex-col bg-parchment-50">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}