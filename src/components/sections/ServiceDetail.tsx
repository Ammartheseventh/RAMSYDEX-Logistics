import type { SanityService } from "@/sanity/types";

export default function ServiceDetail({ service }: { service: SanityService }) {
  return (
    <section
      id={service.slug}
      className="scroll-mt-24 border-t border-parchment-200 py-12"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-8 px-4 md:grid-cols-2 md:py-8">
        {/* Image */}
        {service.image ? (
          <div
            className="aspect-4/3 w-full rounded-lg bg-parchment-200 bg-cover bg-center"
            style={{ backgroundImage: `url('${service.image}')` }}
            aria-hidden="true"
          />
        ) : (
          <div
            className="aspect-4/3 w-full rounded-lg bg-parchment-200"
            aria-hidden="true"
          />
        )}

        {/* Details */}
        <div>
          <h2 className="text-2xl font-bold text-taupe-grey-950 md:text-3xl">
            {service.title}
          </h2>
          <p className="mt-3 text-base text-taupe-grey-600">
            {service.detailIntro ?? service.description}
          </p>

          <dl className="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-taupe-grey-500">
                Cargo types
              </dt>
              <dd className="mt-1 text-sm text-taupe-grey-700">
                {service.cargoTypes ?? "[PLACEHOLDER]"}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-taupe-grey-500">
                Vehicle types
              </dt>
              <dd className="mt-1 text-sm text-taupe-grey-700">
                {service.vehicleTypes ?? "[PLACEHOLDER]"}
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-xs font-semibold uppercase tracking-wide text-taupe-grey-500">
                Operating areas
              </dt>
              <dd className="mt-1 text-sm text-taupe-grey-700">
                {service.operatingAreas ?? "[PLACEHOLDER]"}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}