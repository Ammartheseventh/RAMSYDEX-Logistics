type Props = {
  heading: string;
  body: string;
  note: string;
};

export default function CustomsBlock({ heading, body, note }: Props) {
  return (
    <section className="border-t border-parchment-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-taupe-grey-950 md:text-3xl">
            {heading}
          </h2>
          <p className="mt-3 text-base text-taupe-grey-600">{body}</p>
          <p className="mt-3 text-sm text-taupe-grey-500">
            <span className="font-medium text-taupe-grey-700">{note}</span>
          </p>
        </div>
      </div>
    </section>
  );
}