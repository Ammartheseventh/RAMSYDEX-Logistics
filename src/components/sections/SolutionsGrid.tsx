import Link from "next/link";
import type { SanityService } from "@/sanity/types";

type Props = {
  heading: string;
  intro: string;
  services: SanityService[];
};

export default function SolutionsGrid({ heading, intro, services }: Props) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            {heading}
          </h2>
          <p className="mt-3 text-base text-gray-600">{intro}</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service._id}
              className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
            >
              {service.image ? (
                <div
                  className="h-40 w-full bg-gray-200 bg-cover bg-center"
                  style={{ backgroundImage: `url('${service.image}')` }}
                  aria-hidden="true"
                />
              ) : (
                <div className="h-40 w-full bg-gray-200" aria-hidden="true" />
              )}

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {service.bullets?.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-900" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/solutions#${service.slug}`}
                  className="mt-6 text-sm font-semibold text-gray-900 hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}