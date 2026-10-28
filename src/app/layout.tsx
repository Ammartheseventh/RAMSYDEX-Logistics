import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getSiteSettings } from "@/sanity/getSiteSettings";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
  display: "swap",
});

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
  const settings = await getSiteSettings();

  return (
    <html
      lang="en"
      className={`${inter.className} ${instrumentSerif.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-parchment-50">
        <Header
          companyShortName={settings.companyShortName}
          tagline={settings.tagline}
          phone={settings.phone}
          experienceYears={settings.experienceYears}
          experienceLabel={settings.experienceLabel}
        />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}