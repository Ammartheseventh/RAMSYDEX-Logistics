import Link from "next/link";
import { getMapData } from "@/sanity/getMapData";
import WorldMap from "@/components/ui/WorldMap";

export default async function MapTeaser() {
  const mapData = await getMapData();

  return (
    <section className="border-t border-parchment-200 w-full bg-parchment-100 py-20 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-4">
        
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl text-taupe-grey-950 md:text-4xl">
            Connecting Global Markets
          </h2>
        </div>

        <div className="relative w-full overflow-hidden rounded-3xl border border-parchment-300 bg-parchment-50 shadow-sm">
          <WorldMap 
            countries={mapData?.countries || []} 
            routes={mapData?.routes || []} 
          />
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/network"
            className="inline-flex items-center justify-center rounded-full bg-brick-red-500 px-10 py-4 text-sm font-semibold text-parchment-50 transition hover:bg-brick-red-600"
          >
            View Global Network &amp; Focus Countries
          </Link>
        </div>

      </div>
    </section>
  );
}