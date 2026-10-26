export type MapPin = {
  country: string;
  x: number;
  y: number;
  isHub?: boolean;
};

export const mapPins: MapPin[] = [
  { country: "Malaysia", x: 78.3, y: 47.8, isHub: true },
  { country: "Singapore", x: 78.9, y: 49.4 },
  { country: "China", x: 83.6, y: 32.8 },
  { country: "Germany", x: 52.8, y: 21.6 },
  { country: "Australia", x: 87.2, y: 63.9 },
];