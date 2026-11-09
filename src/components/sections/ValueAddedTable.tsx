type Props = {
  heading: string;
  intro?: string;
  standardServices: string[];
  valueAddedServices: string[];
};

export default function ValueAddedTable({
  heading,
  standardServices,
  valueAddedServices,
}: Props) {
  return (
    <section className="border-t border-parchment-200 bg-parchment-50">
      <div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <h2 className="font-display text-[clamp(32px,4vw,52px)] leading-[1.15] tracking-tight text-taupe-grey-950">
            {heading || "Standard vs. Value-Added Services"}
          </h2>
        </div>

        {/* The Split Contrast Container */}
        <div className="grid overflow-hidden rounded-3xl shadow-xl ring-1 ring-parchment-200 lg:grid-cols-2">
          
          {/* Left Panel: Standard */}
          <div className="bg-parchment-100 px-8 py-16 md:px-16 md:py-20">
            <h3 className="font-display text-3xl text-taupe-grey-950 md:text-4xl">
              Standard Operations
            </h3>
            <p className="mt-3 text-sm font-medium uppercase tracking-widest text-taupe-grey-500">
              Included in every shipment
            </p>
            
            <ul className="mt-10 space-y-5">
              {standardServices.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-taupe-grey-400" />
                  <span className="text-lg leading-relaxed text-taupe-grey-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Panel: Value-Added */}
          <div className="bg-taupe-grey-950 px-8 py-16 text-parchment-50 md:px-16 md:py-20">
            <h3 className="font-display text-3xl text-tuscan-sun-400 md:text-4xl">
              Value-Added Services
            </h3>
            <p className="mt-3 text-sm font-medium uppercase tracking-widest text-taupe-grey-400">
              Tailored to your needs
            </p>
            
            <ul className="mt-10 space-y-5">
              {valueAddedServices.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  {/* Yellow Plus Icon */}
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-tuscan-sun-500/20 text-tuscan-sun-500">
                    <svg 
                      width="14" 
                      height="14" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="3" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </span>
                  <span className="text-lg font-medium leading-relaxed text-parchment-100">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}