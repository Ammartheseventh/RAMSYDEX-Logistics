"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import WorldMap from "@/components/ui/WorldMap";
import type { MapCountry } from "@/sanity/types";

type Props = {
  countries: MapCountry[];
  mapNote?: string;
};

export default function NetworkMapSection({ countries, mapNote }: Props) {
  const defaultCountry = countries.find((c) => c.isHub) || countries[0] || null;
  const [selectedCountry, setSelectedCountry] = useState<MapCountry | null>(defaultCountry);

  return (
    <section className="bg-parchment-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl text-taupe-grey-950 md:text-4xl">
            Explore Our Network
          </h2>
          <p className="mt-3 text-taupe-grey-600">
            Click a pin on the map to see our capabilities in that region.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          
          {/* Map Container */}
          <div className="lg:col-span-2 relative aspect-2/1 overflow-hidden rounded-xl border border-parchment-200 bg-parchment-100 shadow-sm">
            <WorldMap
              countries={countries}
              selectedCountryId={selectedCountry?.id || null}
              onSelectCountry={setSelectedCountry}
              className="h-full bg-parchment-50 overflow-hidden"
            />
          </div>

          {/* Details Panel */}
          <div className="lg:col-span-1 relative">
            <div className="lg:absolute lg:inset-0">
              <AnimatePresence mode="wait">
                {selectedCountry ? (
                  <motion.div
                    key={selectedCountry.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col rounded-xl border border-parchment-200 bg-parchment-50 p-8 shadow-md lg:h-full overflow-y-auto"
                  >
                    <div className="mb-6 flex items-start justify-between">
                      <h3 className="font-display text-4xl text-taupe-grey-950">
                        {selectedCountry.name}
                      </h3>
                      {selectedCountry.isHub && (
                        <span className="mt-2 text-xs font-medium italic tracking-wide text-taupe-grey-400">
                          Central Hub
                        </span>
                      )}
                    </div>

                    {selectedCountry.description && (
                      <p className="mb-8 text-sm leading-relaxed text-taupe-grey-600">
                        {selectedCountry.description}
                      </p>
                    )}

                    {selectedCountry.transitTime && (
                      <div className="mb-8 rounded-lg bg-parchment-100 p-5 border border-parchment-200">
                        <p className="text-xs font-bold uppercase tracking-wide text-taupe-grey-400">
                          Estimated Transit
                        </p>
                        <p className="mt-1 text-lg font-semibold text-brick-red-600">
                          {selectedCountry.transitTime}
                        </p>
                      </div>
                    )}

                    {selectedCountry.services && (
                      <div>
                        <p className="mb-4 text-xs font-bold uppercase tracking-wide text-taupe-grey-400">
                          Key Capabilities
                        </p>
                        <p className="text-sm leading-relaxed text-taupe-grey-700">
                          {selectedCountry.services}
                        </p>
                      </div>
                    )}
                  </motion.div>
                ) : (
                  <div className="flex h-full items-center justify-center rounded-xl border border-dashed border-parchment-300 bg-parchment-50 p-8 text-center text-taupe-grey-400">
                    Select a country on the map to view details.
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

        {mapNote && (
          <p className="mt-6 text-center text-sm text-taupe-grey-500">
            {mapNote}
          </p>
        )}

      </div>
    </section>
  );
}