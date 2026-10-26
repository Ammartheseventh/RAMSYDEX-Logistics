"use client";

import { WorldMap } from "react-country-map";
import "react-country-map/styles.css";
import type { MapPin } from "@/data/networkData";

export default function NetworkMap({ pins }: { pins: MapPin[] }) {
  const data = pins.map((pin, i) => ({
    country: pin.country,
    value: pin.isHub ? 100 : 50 - i,
  }));

  return (
    <div className="w-full">
      <WorldMap data={data} className="h-auto w-full" />
    </div>
  );
}