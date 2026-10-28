import { Inter, Unbounded } from "next/font/google";

export const displayFont = Unbounded({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

/*

import { Inter, Jost } from "next/font/google";

export const displayFont = Jost({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

import { Inter, Unbounded } from "next/font/google";

export const displayFont = Unbounded({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

import { Inter, Cuprum } from "next/font/google";

export const displayFont = Cuprum({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

*/