import Link from "next/link";
import type { SanityService } from "@/sanity/types";
import TiltedCard, { TiltedCardLayer } from "@/components/ui/TiltedCard";

type Props = {
  heading: string;
  intro: string;
  services: SanityService[];
};

export default function SolutionsGrid({ heading, intro, services }: Props) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl text-taupe-grey-950 md:text-4xl">
            {heading}
          </h2>
          <p className="mt-3 text-base text-taupe-grey-600">{intro}</p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service._id} className="h-70 w-full">
              <TiltedCard
                imageSrc={service.image || undefined}
                altText={service.title}
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                rotateAmplitude={4}
                scaleOnHover={1.03}
                glare={0.1}
                shadow={0.5}
                radius={16}
                backContent={
                  <div className="flex h-full w-full flex-col justify-between bg-parchment-50 p-6">
                    <div>
                      <h3 className="text-xl font-semibold text-taupe-grey-950">
                        {service.title}
                      </h3>
                      <ul className="mt-4 space-y-3">
                        {service.bullets?.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-start gap-2 text-sm text-taupe-grey-700"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brick-red-500" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-auto pt-6">
                      <Link
                        href={`/solutions#${service.slug}`}
                        className="inline-flex w-full items-center justify-center rounded-full bg-taupe-grey-950 px-6 py-3 text-sm font-semibold text-parchment-50 transition hover:bg-brick-red-500"
                      >
                        Learn more â†’
                      </Link>
                    </div>
                  </div>
                }
              >
                <TiltedCardLayer depth={20} className="w-full h-full">
                  <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-taupe-grey-950/90 via-transparent to-transparent p-6 [text-shadow:0_2px_10px_rgba(0,0,0,0.8)]">
                    <h3 className="text-2xl font-semibold text-parchment-50">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-parchment-200">
                      {service.description}
                    </p>
                  </div>
                </TiltedCardLayer>
              </TiltedCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}