import CountUp from "@/components/ui/CountUp";
import type { TrustStat } from "@/sanity/types";

export default function TrustBar({ stats }: { stats: TrustStat[] }) {
  return (
    <section className="border-b border-parchment-200 bg-parchment-50">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 md:grid-cols-4 md:py-16">
        {stats.map((stat) => {
          const match = stat.value.match(/^([\d.]+)(.*)$/);
          
          if (!match) {
            return (
              <div key={stat.label} className="text-center">
                <p className="font-display text-5xl text-brick-red-500 md:text-6xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-base font-medium text-taupe-grey-600">{stat.label}</p>
              </div>
            );
          }

          const numericValue = parseFloat(match[1]);
          const suffix = match[2] || "";
          const decimals = match[1].includes(".") ? match[1].split(".")[1].length : 0;

          return (
            <div key={stat.label} className="text-center">
              <p className="font-display text-5xl text-brick-red-500 md:text-6xl">
                <CountUp
                  to={numericValue}
                  decimals={decimals}
                  suffix={suffix}
                  duration={1.2}
                  easing="expo"
                  mode="count"
                />
              </p>
              <p className="mt-3 text-base font-medium text-taupe-grey-600">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}