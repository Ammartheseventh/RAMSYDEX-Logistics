type Props = {
  heading: string;
  body: string;
  note: string;
};

export default function CustomsBlock({ heading }: Props) {
  return (
    <section className="border-t border-parchment-200 bg-parchment-50">
      <div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
        <div className="max-w-3xl">
          <h2 className="text-2xl text-taupe-grey-950 md:text-3xl">
            {heading}
          </h2>
        </div>
      </div>
    </section>
  );
}