const steps = [
  {
    number: "1",
    title: "Inbound Cargo Receiving",
    description: "Cargo received and logged at our Central Malaysia hub.",
  },
  {
    number: "2",
    title: "QC Check & Customs Clearance",
    description: "Inspection, documentation, and customs filing handled in one step.",
  },
  {
    number: "3",
    title: "Central Hub Sorting",
    description: "Sorted and staged for regional and last-mile distribution.",
  },
  {
    number: "4",
    title: "Last-Mile Delivery",
    description: "Delivered to the destination with signed proof of delivery (POD).",
  },
];

export default function WorkflowBar() {
  return (
    <section className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            How Your Cargo Moves
          </h2>
          <p className="mt-3 text-base text-gray-600">
            A single, coordinated process from arrival at our hub to signed
            delivery at the destination.
          </p>
        </div>

        <ol className="mt-10 grid gap-6 md:grid-cols-4">
          {steps.map((step) => (
            <li key={step.number} className="relative rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-sm font-bold text-white">
                {step.number}
              </div>
              <h3 className="mt-4 text-sm font-semibold text-gray-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}