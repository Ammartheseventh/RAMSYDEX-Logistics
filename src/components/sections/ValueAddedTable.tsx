type Props = {
  heading: string;
  intro: string;
  standardServices: string[];
  valueAddedServices: string[];
};

export default function ValueAddedTable({
  heading,
  intro,
  standardServices,
  valueAddedServices,
}: Props) {
  return (
    <section className="border-t border-parchment-200 bg-parchment-100">
      <div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
        <div className="max-w-2xl">
          <h2 className="text-2xl text-taupe-grey-950 md:text-3xl">
            {heading}
          </h2>
          <p className="mt-3 text-base text-taupe-grey-600">{intro}</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-parchment-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-taupe-grey-950">
              Standard Services
            </h3>
            <ul className="mt-4 space-y-3">
              {standardServices.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-taupe-grey-700"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-taupe-grey-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg bg-taupe-grey-950 p-6 text-parchment-50">
            <h3 className="text-lg font-semibold text-tuscan-sun-400">
              Value-Added Services
            </h3>
            <ul className="mt-4 space-y-3">
              {valueAddedServices.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-parchment-200"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-tuscan-sun-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}