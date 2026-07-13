import { aboutChannelData } from "@/data/about-channel";

export default function AboutChannel() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <h2 className="text-3xl font-bold text-brand-navy">
        {aboutChannelData.title}
      </h2>

      <p className="mt-4 text-base leading-relaxed text-black/80">
        {aboutChannelData.description}
      </p>

      <dl className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div>
          <dt className="text-sm font-medium text-black/50">Genre</dt>
          <dd className="mt-1 text-base font-semibold text-brand-navy">
            {aboutChannelData.genre}
          </dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-black/50">Language</dt>
          <dd className="mt-1 text-base font-semibold text-brand-navy">
            {aboutChannelData.language}
          </dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-black/50">Launch Date</dt>
          <dd className="mt-1 text-base font-semibold text-brand-navy">
            {new Date(aboutChannelData.launchDate).toLocaleDateString("en-MY", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </dd>
        </div>
      </dl>

      <ul className="mt-8 space-y-2">
        {aboutChannelData.highlights.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2 text-sm text-black/80"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}