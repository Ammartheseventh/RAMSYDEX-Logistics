import { Unbounded, Jost, Inter, Advent_Pro, Merriweather_Sans } from "next/font/google";

export const displayFont = Merriweather_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});


export const bodyFont = Jost({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

/*



import { Inter, Unbounded } from "next/font/google";

export const displayFont = Unbounded({
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