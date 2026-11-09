"use client";

import { useState } from "react";

type Props = {
  heading: string;
  body: string;
  checks: string[];
};

const DESCRIPTIONS: Record<string, string> = {
  "Physical carton checks": "We thoroughly examine the outer packaging for any signs of damage, moisture, or tampering before moving goods. Any compromised items are immediately quarantined and documented.",
  "Quantity counting": "Our team verifies the exact piece count against your packing list to ensure no shortages or overages. We use a dual-verification system for high-value or high-volume shipments.",
  "Barcode/SKU checks": "We scan and cross-reference every SKU to guarantee that only the correct items are processed. This eliminates human error and ensures your inventory data remains perfectly accurate.",
  "Seal checks": "Container and truck seals are physically inspected, photographed, and documented to maintain absolute security from origin to destination. We verify seal numbers against shipping manifests.",
  "Photo/inspection reports": "A comprehensive digital report with timestamped photos is provided for full transparency. You will receive clear documentation of your cargo's condition before it leaves our facility.",
};

const DEFAULT_DESCRIPTION = 
  "Detailed inspection protocols are applied to ensure this requirement is met to the highest industry standard. Our team follows strict quality control procedures at every touchpoint.";

export default function QCBlock({ heading, checks }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!heading && (!checks || checks.length === 0)) {
    return null;
  }

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="border-t border-taupe-grey-800 bg-taupe-grey-950 text-parchment-50">
      <div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
        
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-5">
            <h2 className="font-display text-[clamp(32px,4vw,52px)] leading-[1.15] tracking-tight text-parchment-50">
              {heading}
            </h2>
          </div>

          {/* Right Column: The Interactive Accordion */}
          <div className="lg:col-span-7">
            {checks && checks.length > 0 ? (
              <ul className="flex flex-col space-y-2">
                {checks.map((check, index) => {
                  const isOpen = openIndex === index;
                  const description = DESCRIPTIONS[check] || DEFAULT_DESCRIPTION;

                  return (
                    <li 
                      key={check} 
                      className={`group flex flex-col border-l-2 border-tuscan-sun-500 transition-all duration-300 ease-out ${
                        isOpen 
                          ? "border-l-[6px] bg-taupe-grey-900" 
                          : "hover:border-l-[6px] hover:bg-taupe-grey-900/50"
                      }`}
                    >
                      {/* Clickable Row */}
                      <button
                        type="button"
                        onClick={() => toggleDropdown(index)}
                        className={`flex w-full items-center gap-6 py-4 pr-4 text-left focus:outline-none md:gap-10 transition-all duration-300 ease-out ${
                          isOpen ? "pl-8" : "pl-6 group-hover:pl-8"
                        }`}
                        aria-expanded={isOpen}
                      >
                        {/* Huge Editorial Number */}
                        <span className={`shrink-0 select-none font-display text-5xl font-bold transition-colors duration-300 md:text-7xl ${
                          isOpen ? "text-taupe-grey-600" : "text-taupe-grey-800 group-hover:text-taupe-grey-600"
                        }`}>
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        
                        {/* Check Text */}
                        <span className="flex-1 text-lg font-medium leading-snug text-parchment-100 md:text-xl">
                          {check}
                        </span>

                        {/* Chevron Arrow */}
                        <svg 
                          className={`h-6 w-6 shrink-0 text-tuscan-sun-500 transition-transform duration-300 ${
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
                          <p className={`pb-6 pr-10 text-base leading-relaxed text-taupe-grey-300 transition-all duration-300 ease-out ${
                            isOpen ? "pl-22 md:pl-30" : "pl-20 md:pl-28"
                          }`}>
                            {description}
                          </p>
                        </div>
                      </div>

                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="text-sm text-taupe-grey-400">
                [QC checks will appear here once added in Sanity]
              </p>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}