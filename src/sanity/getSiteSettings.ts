import { cache } from "react";
import { sanityClient } from "@/sanity/client";
import { SITE_SETTINGS_QUERY } from "@/sanity/queries";
import type { SiteSettings } from "@/sanity/types";

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
  heroHeadline: "Connecting global markets, from the heart of Central Malaysia",
  heroCtaPrimary: "Request a Quote",
  heroCtaSecondary: "Explore Solutions",
  solutionsHeading: "Our Solutions",
  trustStats: [
    { value: "32+", label: "Years of Experience" },
    { value: "99.5%", label: "On-Time Delivery" },
    { value: "20+", label: "Countries Covered" },
    { value: "1,200", label: "Active Clients" },
  ],
  qcHeading: "Quality Control & Inspection",
  qcChecks: [
    "Physical carton checks",
    "Quantity counting",
    "Barcode/SKU checks",
    "Seal checks",
    "Photo/inspection reports",
  ],
  customsHeading: "Multi-Region Customs Clearance",
  customsRegions: ["Singapore", "Thailand", "Indonesia", "Vietnam"],
  tableHeading: "Standard vs. Value-Added Services",
  standardServices: [
    "Freight forwarding (Air, Ocean, Land)",
    "Standard customs clearance",
    "Standard warehouse storage",
    "Port-to-door delivery",
  ],
  valueAddedServices: [
    "Quality Control (QC) inspection",
    "Multi-region customs filing",
    "Repacking and labeling",
    "Cargo insurance",
  ],
  networkMapNote: "",
  mission:
    "Connecting global markets by providing secure and efficient supply chain infrastructure.",
  vision:
    "Supporting business growth, from logistics planning to end delivery.",
  hubAdvantages: [
    {
      title: "Regional seaports",
      description:
        "Direct highway connectivity to Port Klang and Penang Port for rapid ocean freight clearance and minimal port dwell time.",
    },
    {
      title: "International airports",
      description:
        "Minutes from KLIA and Subang SkyPark, ensuring time-critical air cargo is processed and dispatched without delay.",
    },
    {
      title: "Major highways",
      description:
        "Direct access to the North-South Expressway, connecting our cross-border trucking fleet seamlessly to Singapore and Thailand.",
    },
  ],
  teamMembers: [
    {
      name: "[FULL NAME]",
      role: "[ROLE / TITLE]",
      bio: "[One line on experience or years with the company]",
      photoUrl: null,
    },
    {
      name: "[FULL NAME]",
      role: "[ROLE / TITLE]",
      bio: "[One line on experience or years with the company]",
      photoUrl: null,
    },
    {
      name: "[FULL NAME]",
      role: "[ROLE / TITLE]",
      bio: "[One line on experience or years with the company]",
      photoUrl: null,
    },
    {
      name: "[FULL NAME]",
      role: "[ROLE / TITLE]",
      bio: "[One line on experience or years with the company]",
      photoUrl: null,
    },
  ],
  credentials: [
    { title: "Customs agent licence", logoUrl: null },
    { title: "FIATA / MAFFA membership", logoUrl: null },
    { title: "ISO certificates", logoUrl: null },
    { title: "Insurance", logoUrl: null },
  ],
  ctaHeading: "Ready to expand your reach?",
  footerSummary:
    "Freight, customs clearance, QC inspection, and last-mile delivery from Central Malaysia.",
  ssmNumber: "[to be confirmed]",
  privacyLabel: "Privacy Policy",
  termsLabel: "Terms & Conditions",
  privacyNote: "",
  privacyBody: [],
  termsNote: "",
  termsBody: [],
};

export const getSiteSettings = cache(async (): Promise<SiteSettings> => {
  try {
    const data = await sanityClient.fetch<Partial<SiteSettings> | null>(
      SITE_SETTINGS_QUERY
    );

    if (!data) return FALLBACK_SETTINGS;

    const cleaned = Object.fromEntries(
      Object.entries(data).filter(([, v]) => v !== null && v !== undefined)
    ) as Partial<SiteSettings>;

    return { ...FALLBACK_SETTINGS, ...cleaned };
  } catch (err) {
    console.error("Sanity fetch failed, using fallback settings:", err);
    return FALLBACK_SETTINGS;
  }
});