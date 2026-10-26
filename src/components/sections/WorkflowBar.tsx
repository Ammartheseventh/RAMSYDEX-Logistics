import type { WorkflowStep } from "@/sanity/types";

type Props = {
  heading: string;
  intro: string;
  steps: WorkflowStep[];
};

export default function WorkflowBar({ heading, intro, steps }: Props) {
  return (
    <section className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            {heading}
          </h2>
          <p className="mt-3 text-base text-gray-600">{intro}</p>
        </div>

        <ol className="mt-10 grid gap-6 md:grid-cols-4">
          {steps.map((step) => (
            <li
              key={step.number}
              className="relative rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200"
            >
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