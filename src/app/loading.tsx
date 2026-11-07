export default function Loading() {
  return (
    <div className="animate-pulse">
      {/* Intro section skeleton */}
      <div className="border-b border-parchment-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
          <div className="h-9 w-2/3 rounded bg-parchment-200 md:w-1/2" />
          <div className="mt-4 h-5 w-full rounded bg-parchment-100 md:w-2/3" />
          <div className="mt-2 h-5 w-3/4 rounded bg-parchment-100 md:w-1/2" />
        </div>
      </div>

      {/* Content grid skeleton */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
          <div className="h-8 w-1/3 rounded bg-parchment-200" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="rounded-lg border border-parchment-200 bg-white p-6"
              >
                <div className="h-6 w-3/4 rounded bg-parchment-200" />
                <div className="mt-3 h-4 w-full rounded bg-parchment-100" />
                <div className="mt-2 h-4 w-5/6 rounded bg-parchment-100" />
                <div className="mt-2 h-4 w-4/6 rounded bg-parchment-100" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}