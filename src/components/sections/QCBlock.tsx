type Props = {
  heading: string;
  body: string;
  checks: string[];
};

export default function QCBlock({ heading, body, checks }: Props) {
  return (
    <section className="border-t border-parchment-200 bg-parchment-100">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-taupe-grey-950 md:text-3xl">
            {heading}
          </h2>
          <p className="mt-3 text-base text-taupe-grey-600">{body}</p>
        </div>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {checks.map((check) => (
            <li
              key={check}
              className="flex items-start gap-3 rounded-lg bg-white p-4 ring-1 ring-parchment-200"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-taupe-grey-950" />
              <span className="text-sm text-taupe-grey-700">{check}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}