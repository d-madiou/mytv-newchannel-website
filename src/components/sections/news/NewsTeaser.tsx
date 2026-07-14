import Link from "next/link";
import Image from "next/image";
import { newsData } from "@/data/news";

export default function NewsTeaser() {
  const latest = newsData[0];

  if (!latest) return null;

  return (
    <section className="mx-auto max-w-3xl px-4 py-16 text-center">
      <h2 className="text-3xl font-bold text-brand-navy">Latest News</h2>

      <article className="mx-auto mt-8 max-w-xl overflow-hidden rounded-lg border border-black/10 text-left">
        {latest.imageUrl && (
          <div className="relative h-48 w-full">
            <Image
              src={latest.imageUrl}
              alt={latest.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div className="p-5">
          <time className="text-xs font-medium uppercase tracking-wide text-brand-orange">
            {new Date(latest.date).toLocaleDateString("en-MY", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>

          <h3 className="mt-2 text-lg font-semibold text-brand-navy">
            {latest.title}
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-black/70">
            {latest.summary}
          </p>
        </div>
      </article>

      <Link
        href="/news"
        className="mt-8 inline-block rounded-md bg-brand-navy px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
      >
        See All News
      </Link>
    </section>
  );
}