import Link from "next/link";

type Props = {
  heading: string;
  buttonText: string;
  buttonHref: string;
};

export default function CtaBanner({ heading, buttonText, buttonHref }: Props) {
  return (
    <section className="bg-brick-red-600 px-[clamp(20px,5vw,64px)] py-20 text-white">
      <div className="mx-auto flex max-w-300 flex-wrap items-center justify-between gap-8">
        <h2 className="max-w-175 font-display text-[clamp(28px,3.2vw,40px)] leading-[1.15]">
          {heading}
        </h2>
        <Link
          href={buttonHref}
          className="inline-flex min-h-13 items-center justify-center rounded-full bg-tuscan-sun-500 px-8 text-lg font-semibold text-taupe-grey-950 transition-colors hover:bg-tuscan-sun-400"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}