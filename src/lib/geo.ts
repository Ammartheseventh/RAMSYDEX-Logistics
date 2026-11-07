import countriesData from "world-countries";

type CountryWithCapital = {
  cca2: string;
  latlng: [number, number];
  capitalInfo?: {
    latlng: [number, number];
  };
};

export function getCoordinates(isoCode: string): { lat: number; lng: number } | null {
  const country = countriesData.find(
    (c) => c.cca2.toUpperCase() === isoCode.toUpperCase()
  ) as CountryWithCapital | undefined;

  if (!country) return null;

  const capitalCoords = country.capitalInfo?.latlng;

  return {
    lat: capitalCoords?.[0] ?? country.latlng[0],
    lng: capitalCoords?.[1] ?? country.latlng[1],
  };
}

export function projectPoint(lat: number, lng: number) {
  const x = (lng + 180) * (800 / 360);
  const y = (90 - lat) * (400 / 180);
  return { x, y };
}

export function createCurvedPath(
  start: { x: number; y: number },
  end: { x: number; y: number }
) {
  const midX = (start.x + end.x) / 2;
  const midY = Math.min(start.y, end.y) - 50;
  return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
}