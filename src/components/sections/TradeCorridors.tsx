const corridors = [
  {
    title: "Intra-Asia",
    description:
      "Regular lanes across Southeast Asia and to key Asian markets, connected through our Central Malaysia hub.",
  },
  {
    title: "Asia–Europe",
    description:
      "Ocean and air freight connections to European destinations with customs coordination on both ends.",
  },
  {
    title: "Cross-Border Trucking",
    description:
      "Road freight across regional borders, with documentation and clearance handled in a single process.",
  },
];

export default function TradeCorridors() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Key Trade Corridors
          </h2>
          <p className="mt-3 text-base text-gray-600">
            Routes we operate regularly, anchored in Central Malaysia.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {corridors.map((corridor) => (
            <div
              key={corridor.title}
              className="rounded-lg border border-gray-200 bg-white p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {corridor.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {corridor.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}