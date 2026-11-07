"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import DottedMap from "dotted-map";
import type { MapCountry, MapRoute } from "@/sanity/types";
import { getCoordinates, projectPoint, createCurvedPath } from "@/lib/geo";

type Props = {
  countries?: MapCountry[];
  routes?: MapRoute[];
  selectedCountryId?: string | null;
  onSelectCountry?: (country: MapCountry) => void;
  className?: string;
};

export default function WorldMap({
  countries = [],
  routes = [],
  selectedCountryId = null,
  onSelectCountry,
  className = "aspect-2/1",
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

  const interactive = Boolean(onSelectCountry);

  const hubRadius = interactive ? "5.5" : "4";
  const dotRadius = interactive ? "4" : "2.5";
  const hitRadius = interactive ? "20" : "15";

  return (
    <div className={`relative w-full ${className}`}>
      <Image
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        fill
        unoptimized
        className={`pointer-events-none select-none object-fill ${interactive ? "opacity-80" : "opacity-90"}`}
        alt="world map"
        draggable={false}
      />

      <svg
        viewBox="0 0 800 400"
        preserveAspectRatio="none"
        className="w-full h-full absolute inset-0 select-none"
      >
        {routes.map((route, i) => {
          const origin = countries.find((c) => c.id === route.from);
          const destination = countries.find((c) => c.id === route.to);
          if (!origin || !destination) return null;

          const startCoords = getCoordinates(origin.id);
          const endCoords = getCoordinates(destination.id);
          if (!startCoords || !endCoords) return null;

          const startPoint = projectPoint(startCoords.lat, startCoords.lng);
          const endPoint = projectPoint(endCoords.lat, endCoords.lng);

          return (
            <motion.path
              key={`path-${i}`}
              d={createCurvedPath(startPoint, endPoint)}
              fill="none"
              stroke="url(#path-gradient)"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, delay: 0.5 * i, ease: "easeOut" }}
              className="pointer-events-none"
            />
          );
        })}

        {countries.map((country, i) => {
          const coords = getCoordinates(country.id);
          if (!coords) return null;

          const point = projectPoint(coords.lat, coords.lng);
          const isSelected = selectedCountryId === country.id;
          const isHovered = hoveredCountry?.id === country.id;

          const fill = isSelected || country.isHub ? "#eac148" : "#c93f36";
          const pinStroke = interactive && isSelected ? "#c93f36" : "#f5f3ef";
          const pinStrokeWidth = interactive
            ? isSelected
              ? "2"
              : "1.5"
            : "1";

          const showPulse = interactive
            ? country.isHub || isSelected
            : true;
          const pulseStroke = interactive
            ? "#eac148"
            : country.isHub
              ? "#eac148"
              : "#c93f36";

          return (
            <g
              key={country.id}
              className={interactive ? "cursor-pointer" : undefined}
              onClick={
                onSelectCountry ? () => onSelectCountry(country) : undefined
              }
              onMouseEnter={() => setHoveredCountry(country)}
              onMouseLeave={() => setHoveredCountry(null)}
            >
              <circle
                cx={point.x}
                cy={point.y}
                r={hitRadius}
                fill="transparent"
              />

              <motion.circle
                cx={point.x}
                cy={point.y}
                r={country.isHub ? hubRadius : dotRadius}
                fill={fill}
                stroke={pinStroke}
                strokeWidth={pinStrokeWidth}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.5 * i }}
                className="pointer-events-none"
              />

              {showPulse && (
                <motion.circle
                  cx={point.x}
                  cy={point.y}
                  r={country.isHub ? hubRadius : dotRadius}
                  fill="none"
                  stroke={pulseStroke}
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

        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="5%" stopColor="#c93f36" />
            <stop offset="95%" stopColor="#c93f36" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}