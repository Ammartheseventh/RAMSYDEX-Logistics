import Link from "next/link";

type Props = {
  heading: string;
  body: string;
  imageUrl: string | null;
};

export default function NetworkTeaser({ heading, body, imageUrl }: Props) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-taupe-grey-950 md:text-3xl">
              {heading}
            </h2>
            <p className="mt-4 text-base text-taupe-grey-600">{body}</p>
            <Link
              href="/network"
              className="mt-6 inline-block rounded-md bg-brick-red-500 px-6 py-3 text-sm font-semibold text-parchment-50 hover:bg-brick-red-600"
            >
              View Global Network &amp; Focus Countries
            </Link>
          </div>

          <div
            className="relative aspect-4/3 w-full overflow-hidden rounded-lg border border-parchment-200 bg-parchment-100 bg-cover bg-center"
            style={
              imageUrl ? { backgroundImage: `url('${imageUrl}')` } : undefined
            }
          >
            {!imageUrl && (
              <div className="absolute inset-0 flex items-center justify-center text-sm text-taupe-grey-500">
                World map preview — placeholder
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}