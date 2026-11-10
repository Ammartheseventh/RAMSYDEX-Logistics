"use client";

import { useState } from "react";
import { motion } from "motion/react";

type CustomsRegion = { name: string };

type Props = {
  heading: string;
  body?: string;
  note?: string;
  regions: CustomsRegion[];
};

export default function CustomsBlock({ heading, regions }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="border-t border-parchment-200 bg-parchment-50 py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        
        <div className="relative grid gap-16 lg:grid-cols-12 lg:gap-24 lg:items-center">
          
          {/* Left Column: Heading & Dropdown (Foreground on mobile) */}
          <div className="relative z-10 lg:col-span-6">
            <h2 className="font-display text-[clamp(32px,4vw,52px)] leading-[1.15] tracking-tight text-taupe-grey-950">
              {heading || "Multi-Region Customs Clearance"}
            </h2>

            {/* The Dropdown (No Background, Transparent) */}
            <div 
              className={`group relative z-20 mt-10 flex flex-col border-l-2 border-brick-red-500 transition-all duration-300 ease-out ${
                isOpen ? "border-l-[6px]" : "hover:border-l-[6px]"
              }`}
            >
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`flex w-full items-center justify-between py-4 pr-4 text-left focus:outline-none transition-all duration-300 ease-out ${
                  isOpen ? "pl-8" : "pl-6 group-hover:pl-8"
                }`}
                aria-expanded={isOpen}
              >
                <span className="text-lg font-bold text-taupe-grey-950 md:text-xl">
                  View Covered Regions
                </span>
                <svg 
                  className={`h-6 w-6 shrink-0 text-brick-red-500 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Content */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className={`pb-6 pr-4 transition-all duration-300 ease-out ${
                    isOpen ? "pl-22" : "pl-20"
                  }`}>
                    <ul className="flex flex-col gap-3">
                      {regions.map((region) => (
                        <li
                          key={region.name}
                          className="flex items-center gap-3 text-base font-medium text-taupe-grey-700"
                        >
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brick-red-500" />
                          {region.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: The Animated Stamp Graphic */}
          <div className="absolute -top-20 -right-12 z-0 flex justify-center opacity-20 pointer-events-none lg:static lg:z-auto lg:col-span-6 lg:justify-end lg:opacity-100 lg:pointer-events-auto">
            <motion.div 
              initial={{ scale: 1.8, opacity: 0, rotate: -30, y: -30 }}
              whileInView={{ scale: 1, opacity: 0.9, rotate: -12, y: 0 }}
              whileHover={{ rotate: 0, scale: 1.05 }}
              whileTap={{ rotate: 0, scale: 1.05 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ 
                type: "spring", 
                stiffness: 260, 
                damping: 20, 
                mass: 1.2 
              }}
              className="relative flex h-70 w-70 items-center justify-center rounded-full border-[6px] border-brick-red-500/80 p-3 mix-blend-multiply md:h-90 md:w-90"
            >
              
              <div className="absolute inset-2 rounded-full border-[3px] border-brick-red-500/50 border-dashed" />
              
              <div className="flex flex-col items-center justify-center text-center">
                <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-brick-red-500 md:text-base">
                  Approved
                </p>
                
                <div className="my-3 flex h-16 w-16 items-center justify-center rounded-full border-2 border-brick-red-500/30 bg-brick-red-50/50 md:h-20 md:w-20">
                  <svg 
                    width="40" 
                    height="40" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="text-brick-red-500"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                
                <h3 className="font-display text-4xl font-black uppercase tracking-tighter text-brick-red-500 md:text-5xl">
                  Cleared
                </h3>
                
                <p className="mt-2 font-display text-xs font-bold uppercase tracking-[0.2em] text-brick-red-500/70 md:text-sm">
                  Multi-Region
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}