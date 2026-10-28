import type { WorkflowStep } from "@/sanity/types";

type Props = {
  heading: string;
  intro: string;
  steps: WorkflowStep[];
};

export default function WorkflowBar({ heading, intro, steps }: Props) {
  return (
    <section className="border-t border-parchment-200 bg-parchment-100">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-taupe-grey-950 md:text-3xl">
            {heading}
          </h2>
          <p className="mt-3 text-base text-taupe-grey-600">{intro}</p>
        </div>

        <ol className="mt-10 grid gap-6 md:grid-cols-4">
          {steps.map((step) => (
            <li
              key={step.number}
              className="relative rounded-lg bg-white p-6 shadow-sm ring-1 ring-parchment-200"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-taupe-grey-950 text-sm font-bold text-tuscan-sun-400">
                {step.number}
              </div>
              <h3 className="mt-4 text-sm font-semibold text-taupe-grey-950">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-taupe-grey-600">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}