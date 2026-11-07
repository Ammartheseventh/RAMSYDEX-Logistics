import Image from "next/image";

type Props = {
  imageUrl: string | null;
  heading: string;
  subheading?: string | null;
  note?: string | null;
};

export default function PageHero({ imageUrl, heading, subheading, note }: Props) {
  return (
    <section className="relative bg-taupe-grey-950 text-parchment-50">
      {imageUrl && (
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={imageUrl}
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-taupe-grey-950/70" />
        </div>
      )}

      <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-20">
        <h1 className="font-display text-3xl text-parchment-50 md:text-4xl lg:text-5xl">
          {heading}
        </h1>
        {subheading && (
          <p className="mt-4 max-w-3xl text-base text-parchment-200 md:text-lg">
            {subheading}
          </p>
        )}
        {note && (
          <p className="mt-3 text-xs text-parchment-400">{note}</p>
        )}
      </div>
    </section>
  );
}