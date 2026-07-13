import Image from "next/image";
import { newsData } from "@/data/news";

export default function News() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <h2 className="text-3xl font-bold text-brand-navy">News & Updates</h2>
      <p className="mt-2 text-black/70">
        The latest announcements from Arus TV.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
        {newsData.map((item) => (
          <article
            key={item.id}
            className="overflow-hidden rounded-lg border border-black/10"
          >
            {item.imageUrl && (
              <div className="relative h-48 w-full">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div className="p-5">
              <time className="text-xs font-medium uppercase tracking-wide text-brand-orange">
                {new Date(item.date).toLocaleDateString("en-MY", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>

              <h3 className="mt-2 text-lg font-semibold text-brand-navy">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-black/70">
                {item.summary}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}