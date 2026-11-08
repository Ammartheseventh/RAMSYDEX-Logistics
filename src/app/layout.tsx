import type { Metadata } from "next";
import "./globals.css";
import { bodyFont, displayFont } from "@/lib/fonts";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getSiteSettings } from "@/sanity/getSiteSettings";
import type { SiteSettings } from "@/sanity/types";

export const metadata: Metadata = {
  title: "RAMSYDEX GLOBAL LOGISTICS",
  description:
    "Freight, customs clearance, QC inspection, and last-mile delivery from Central Malaysia.",
};

const FALLBACK_SETTINGS: SiteSettings = {
  companyName: "RAMSYDEX GLOBAL LOGISTICS",
  companyShortName: "RAMSYDEX",
  tagline: "Global Logistics",
  logoUrl: null,
  logoLightUrl: null,
  logoIconUrl: null,
  email: "info@ramsydex.example",
  phone: "+60 12-345 6789",
  whatsapp: "60123456789",
  address: "Central Malaysia (address to be confirmed)",
  hours: "Mon–Fri 9am–6pm MYT",
  responsePromise: "We respond within 24 hours during business hours.",
  footerSummary:
    "Freight, customs clearance, QC inspection, and last-mile delivery from Central Malaysia.",
  ssmNumber: "[to be confirmed]",
  privacyLabel: "Privacy Policy",
  termsLabel: "Terms & Conditions",
};

async function getSafeSettings(): Promise<SiteSettings> {
  try {
    return await getSiteSettings();
  } catch (err) {
    console.error("Sanity unreachable — using fallback site settings", err);
    return FALLBACK_SETTINGS;
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSafeSettings();

  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body className="flex min-h-screen flex-col bg-parchment-50">
        <Header
          logoUrl={settings.logoUrl}
          logoIconUrl={settings.logoIconUrl}
          phone={settings.phone}
        />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}