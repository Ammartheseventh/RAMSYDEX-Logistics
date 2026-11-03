"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import DottedMap from "dotted-map";
import countriesData from "world-countries";
import type { MapCountry } from "@/sanity/types";

type CountryWithCapital = {
  cca2: string;
  latlng: [number, number];
  capitalInfo?: {
    latlng: [number, number];
  };
};

const getCoordinates = (isoCode: string) => {
  const country = countriesData.find(
    (c) => c.cca2.toUpperCase() === isoCode.toUpperCase()
  ) as CountryWithCapital | undefined;
  
  const capitalCoords = country?.capitalInfo?.latlng;
  
  return {
    lat: capitalCoords?.[0] ?? country?.latlng[0] ?? 0,
    lng: capitalCoords?.[1] ?? country?.latlng[1] ?? 0,
  };
};

type Props = {
  countries?: MapCountry[];
  selectedCountryId: string | null;
  onSelectCountry: (country: MapCountry) => void;
};

export default function WorldMap({
  countries = [],
  selectedCountryId,
  onSelectCountry,
}: Props) {
  const [hoveredCountry, setHoveredCountry] = useState<MapCountry | null>(null);
  const map = useMemo(() => new DottedMap({ height: 100, grid: "diagonal" }), []);

  const svgMap = useMemo(() => {
    return map.getSVG({
      radius: 0.22,
      color: "#9e9494",
      shape: "circle",
      backgroundColor: "transparent",
    });
  }, [map]);

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  return (
    <div className="relative w-full h-full bg-parchment-50 overflow-hidden">
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        // Removed hardcoded width/height. Added object-fill to guarantee exact overlapping.
        className="absolute inset-0 h-full w-full pointer-events-none select-none object-fill opacity-80"
        alt="world map"
        draggable={false}
      />
      
      <svg
        viewBox="0 0 800 400"
        // Added preserveAspectRatio="none" to force exact overlapping
        preserveAspectRatio="none"
        className="w-full h-full absolute inset-0 select-none"
      >
        {countries.map((country, i) => {
          const coords = getCoordinates(country.id);
          if (coords.lat === 0) return null;

          const point = projectPoint(coords.lat, coords.lng);
          const isSelected = selectedCountryId === country.id;
          const isHovered = hoveredCountry?.id === country.id;

          return (
            <g 
              key={country.id} 
              className="cursor-pointer"
              onClick={() => onSelectCountry(country)}
              onMouseEnter={() => setHoveredCountry(country)}
              onMouseLeave={() => setHoveredCountry(null)}
            >
              <circle cx={point.x} cy={point.y} r="20" fill="transparent" />
              
              <motion.circle
                cx={point.x}
                cy={point.y}
                r={country.isHub ? "5.5" : "4"}
                fill={isSelected ? "#eac148" : country.isHub ? "#eac148" : "#c93f36"}
                stroke={isSelected ? "#c93f36" : "#f5f3ef"}
                strokeWidth={isSelected ? "2" : "1.5"}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.5 * i }}
              />
              
              {(country.isHub || isSelected) && (
                <motion.circle
                  cx={point.x}
                  cy={point.y}
                  r={country.isHub ? "5.5" : "4"}
                  fill="none"
                  stroke="#eac148"
                  strokeWidth="1.5"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: [0, 0.8, 0], scale: [1, 3, 1] }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 * i }}
                  className="pointer-events-none"
                />
              )}

              {isHovered && (
                <foreignObject
                  x={point.x - 60}
                  y={point.y - 45}
                  width={120}
                  height={40}
                  className="pointer-events-none overflow-visible"
                >
                  <div className="flex justify-center items-end h-full">
                    <div className="relative bg-taupe-grey-950 text-parchment-50 text-xs font-semibold px-2.5 py-1 rounded-md shadow-lg whitespace-nowrap">
                      {country.name}
                      <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-transparent border-t-taupe-grey-950" />
                    </div>
                  </div>
                </foreignObject>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}