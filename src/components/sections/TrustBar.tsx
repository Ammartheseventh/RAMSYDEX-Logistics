import CountUp from "@/components/ui/CountUp";
import type { TrustStat } from "@/sanity/types";

export default function TrustBar({ stats }: { stats: TrustStat[] }) {
  return (
    <section className="border-b border-parchment-200 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4">
        {stats.map((stat) => {
          // 1. Parse the string from Sanity (e.g., "99.5%" -> 99.5 and "%")
          const match = stat.value.match(/^([\d.]+)(.*)$/);
          
          // If it's a non-numeric string like "X", fallback to standard text
          if (!match) {
            return (
              <div key={stat.label} className="text-center">
                <p className="font-display text-4xl text-brick-red-500">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-taupe-grey-600">{stat.label}</p>
              </div>
            );
          }

          const numericValue = parseFloat(match[1]);
          const suffix = match[2] || "";
          const decimals = match[1].includes(".") ? match[1].split(".")[1].length : 0;

          return (
            <div key={stat.label} className="text-center">
              <p className="font-display text-4xl text-brick-red-500">
                <CountUp
                  to={numericValue}
                  decimals={decimals}
                  suffix={suffix}
                  duration={1.2}
                  easing="expo"
                  mode="count" // Change to "roll" to try the slot machine effect
                />
              </p>
              <p className="mt-1 text-sm text-taupe-grey-600">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}