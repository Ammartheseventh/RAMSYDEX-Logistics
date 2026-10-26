import type { TrustStat } from "@/sanity/types";

export default function TrustBar({ stats }: { stats: TrustStat[] }) {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            <p className="mt-1 text-sm text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}