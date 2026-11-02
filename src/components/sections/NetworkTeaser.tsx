import Link from "next/link";
import TiltedCard from "@/components/ui/TiltedCard";

type Props = {
  heading: string;
  body: string;
  imageUrl: string | null;
};

export default function NetworkTeaser({ heading, body, imageUrl }: Props) {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-32">
      {/* Decorative background glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-tuscan-sun-100/40 blur-[100px] md:h-200 md:w-200" />

      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-16 md:grid-cols-2">
          
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <h2 className="font-display text-3xl leading-tight text-taupe-grey-950 md:text-5xl">
              {heading}
            </h2>
            
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-taupe-grey-600">
              {body}
            </p>
            
            <div className="mt-10">
              <Link
                href="/network"
                className="inline-flex items-center justify-center rounded-full bg-taupe-grey-950 px-8 py-4 text-sm font-semibold text-parchment-50 transition hover:bg-brick-red-500"
              >
                View Global Network &amp; Focus Countries
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Interactive Map Card */}
          <div className="order-1 md:order-2 flex justify-center">
            {imageUrl ? (
              <div className="w-full max-w-125">
                <TiltedCard
                  imageSrc={imageUrl}
                  altText="RAMSYDEX Global Network Map"
                  containerHeight="400px"
                  containerWidth="100%"
                  imageHeight="400px"
                  imageWidth="100%"
                  rotateAmplitude={5}
                  scaleOnHover={1.02}
                  glare={0.3}
                  shadow={0.5}
                  radius={24}
                >
                  {/* Optional: Add a small floating badge on the map */}
                  <div className="absolute top-6 left-6 rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-taupe-grey-950 shadow-sm backdrop-blur-md">
                    Live Trade Lanes
                  </div>
                </TiltedCard>
              </div>
            ) : (
              <div className="flex h-100 w-full max-w-125 items-center justify-center rounded-3xl border border-parchment-200 bg-parchment-50 text-taupe-grey-400">
                Map image pending
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}