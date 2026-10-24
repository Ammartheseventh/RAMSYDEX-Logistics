export default function QCBlock() {
  const checks = [
    "Physical carton and seal checks",
    "Quantity counting against documentation",
    "Barcode and SKU verification",
    "Damage inspection",
    "Photo inspection reports on request",
  ];

  return (
    <section className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Quality Control &amp; Inspection
          </h2>
          <p className="mt-3 text-base text-gray-600">
            Every shipment can be checked at our Central Malaysia hub before it
            moves on — so problems are caught early, not at the destination.
          </p>
        </div>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {checks.map((check) => (
            <li
              key={check}
              className="flex items-start gap-3 rounded-lg bg-white p-4 ring-1 ring-gray-200"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-900" />
              <span className="text-sm text-gray-700">{check}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}