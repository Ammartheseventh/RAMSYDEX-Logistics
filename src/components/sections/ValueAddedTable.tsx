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
    <section className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            {heading}
          </h2>
          <p className="mt-3 text-base text-gray-600">{intro}</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 ring-1 ring-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">
              Standard Services
            </h3>
            <ul className="mt-4 space-y-3">
              {standardServices.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-gray-700"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg bg-gray-900 p-6 text-white">
            <h3 className="text-lg font-semibold">Value-Added Services</h3>
            <ul className="mt-4 space-y-3">
              {valueAddedServices.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-gray-100"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
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