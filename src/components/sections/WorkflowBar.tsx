import type { WorkflowStep } from "@/sanity/types";

type Props = {
  heading: string;
  steps: WorkflowStep[];
};

const StepIcons = [
  <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>,
  <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>,
  <svg key="3" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
  <svg key="4" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>,
];

export default function WorkflowBar({ heading, steps }: Props) {
  return (
    <section className="border-t border-parchment-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="font-display text-3xl text-taupe-grey-950 md:text-4xl">
            {heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-4 lg:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex h-full">
              <div className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-brick-red-200 bg-parchment-50 p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-lg">
                <span className="pointer-events-none absolute right-0 top-0 select-none font-display text-7xl font-bold text-parchment-200/50 transition-colors duration-300 group-hover:text-parchment-300/80">
                  0{index + 1}
                </span>

                <div className="relative z-10 mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-taupe-grey-700 transition-all duration-300 group-hover:scale-110 group-hover:bg-brick-red-500 group-hover:text-parchment-50">
                  {StepIcons[index] || StepIcons[0]}
                </div>

                <div className="relative z-10 flex flex-col">
                  <h3 className="text-lg font-bold leading-tight text-taupe-grey-950">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-taupe-grey-500">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}