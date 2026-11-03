"use client";

import { useMemo } from "react";
import { motion } from "motion/react";
import DottedMap from "dotted-map";
import countriesData from "world-countries";
import type { MapCountry, MapRoute } from "@/sanity/types";

const getCoordinates = (isoCode: string) => {
  const country = countriesData.find(
    (c) => c.cca2.toUpperCase() === isoCode.toUpperCase()
  );
  return {
    lat: country?.latlng[0] ?? 0,
    lng: country?.latlng[1] ?? 0,
  };
};

type Props = {
  countries?: MapCountry[];
  routes?: MapRoute[];
};

export default function WorldMap({ countries = [], routes = [] }: Props) {
  const map = useMemo(() => new DottedMap({ height: 100, grid: "diagonal" }), []);

  const svgMap = useMemo(() => {
    return map.getSVG({
      radius: 0.22,
      color: "#9e9494", // Taupe-grey-400
      shape: "circle",
      backgroundColor: "transparent",
    });
  }, [map]);

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <div className="relative w-full aspect-[2/1] bg-transparent">
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full pointer-events-none select-none opacity-90"
        alt="world map"
        height="495"
        width="1056"
        draggable={false}
      />
      
      <svg
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        {/* Draw Routes */}
        {routes.map((route, i) => {
          const origin = countries.find((c) => c.id === route.from);
          const destination = countries.find((c) => c.id === route.to);
          if (!origin || !destination) return null;

          const startCoords = getCoordinates(origin.id);
          const endCoords = getCoordinates(destination.id);
          
          if (startCoords.lat === 0 || endCoords.lat === 0) return null;

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
            />
          );
        })}

        {/* Draw Markers with isHub Logic */}
        {countries.map((country, i) => {
          const coords = getCoordinates(country.id);
          if (coords.lat === 0) return null;
          
          const point = projectPoint(coords.lat, coords.lng);
          
          return (
            <g key={country.id}>
              {/* Static dot */}
              <motion.circle
                cx={point.x}
                cy={point.y}
                r={country.isHub ? "4" : "2.5"}
                fill={country.isHub ? "#eac148" : "#c93f36"} // Gold Hub, Brick Red destinations
                stroke="#f5f3ef"
                strokeWidth="1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.5 * i }}
              />
              {/* Pulsing ring */}
              <motion.circle
                cx={point.x}
                cy={point.y}
                r={country.isHub ? "4" : "2.5"}
                fill="none"
                stroke={country.isHub ? "#eac148" : "#c93f36"}
                strokeWidth="1.5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: [0, 0.8, 0], scale: [1, 3, 1] }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 * i }}
              />
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