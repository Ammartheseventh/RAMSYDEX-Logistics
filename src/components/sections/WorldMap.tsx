"use client";

import { WorldMap } from "react-country-map";
import "react-country-map/styles.css";

// PLACEHOLDER countries — replace with the client's confirmed list
const networkData = [
  { country: "Malaysia", value: 100 },
  { country: "Singapore", value: 80 },
  { country: "China", value: 70 },
  { country: "Germany", value: 50 },
  { country: "Australia", value: 40 },
];

export default function NetworkMap() {
  return (
    <div className="w-full">
      <WorldMap
        data={networkData}
        className="h-auto w-full"
      />
    </div>
  );
}