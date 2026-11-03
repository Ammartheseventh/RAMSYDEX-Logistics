import Link from "next/link";
import { getMapData } from "@/sanity/getMapData";
import { getHomePage } from "@/sanity/getHomePage"; // <-- Import this
import WorldMap from "@/components/ui/WorldMap";

export default async function MapTeaser() {
  // Fetch both map data and home page data
  const [mapData, page] = await Promise.all([
    getMapData(),
    getHomePage()
  ]);

  return (
    <section className="w-full bg-parchment-50 py-20 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-4">
        
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl text-taupe-grey-950 md:text-4xl">
            {page.networkTeaserHeading}
          </h2>
          <p className="mt-3 text-taupe-grey-600">
            {page.networkTeaserBody}
          </p>
        </div>

        <div className="relative w-full overflow-hidden rounded-3xl border border-parchment-200 bg-parchment-100 shadow-sm">
          <WorldMap 
            countries={mapData?.countries || []} 
            routes={mapData?.routes || []} 
          />
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/network"
            className="inline-flex items-center justify-center rounded-full bg-taupe-grey-950 px-10 py-4 text-sm font-semibold text-parchment-50 transition hover:bg-brick-red-500"
          >
            View Global Network &amp; Focus Countries
          </Link>
        </div>

      </div>
    </section>
  );
}