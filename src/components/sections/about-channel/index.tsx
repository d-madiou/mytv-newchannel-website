"use client";

import { aboutChannelData } from "@/data/about-channel";
import Image from "next/image";

export default function AboutChannel() {
  return (
    // No top padding here – the first child handles the offset
    <section className="bg-white text-neutral-900">
      {/* ── Sleek Panoramic Header ── */}
      {/* Added pt-[88px] to perfectly clear the 88px fixed navbar (24px bar + 64px header) */}
      <div className="relative flex h-[30vh] min-h-[240px] w-full flex-col justify-end overflow-hidden pt-[88px] lg:h-[35vh] lg:min-h-[300px]">
        <Image
          src="/images/hero/hero3.png"
          alt="About Arus TV"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />

        {/* Controlled gradient for crisp text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent" />

        {/* Header Content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-8 md:px-8 md:pb-10">
          <div className="flex flex-col gap-6 border-b border-white/20 pb-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.25em] text-brand-orange">
                Corporate Profile
              </span>
              <h2 className="font-sans text-2xl font-black uppercase tracking-tight text-white sm:text-3xl lg:text-4xl leading-[1.05]">
                {aboutChannelData.title}
              </h2>
            </div>

            {/* Right-aligned metadata */}
            <div className="hidden md:block md:text-right">
              <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-white/50">
                Network Status
              </span>
              <div className="mt-1 flex items-center justify-end gap-2 text-xs font-bold uppercase tracking-wide text-white">
                <span className="h-1.5 w-1.5 bg-brand-orange" />
                Active Broadcast
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Asymmetrical Editorial Layout ── */}
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-16">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-20">
          {/* Left Column */}
          <div className="flex flex-col lg:col-span-6 lg:sticky lg:top-32">
            <p className="text-base font-medium leading-relaxed text-neutral-600 md:text-lg md:leading-loose">
              {aboutChannelData.description}
            </p>

            {/* Data Grid */}
            <div className="mt-10 flex flex-col gap-8 border-t border-neutral-200 pt-8 sm:flex-row sm:gap-16">
              <div className="flex flex-col gap-6">
                <div>
                  <span className="text-[9px] font-semibold uppercase tracking-widest text-neutral-400">
                    Format
                  </span>
                  <p className="mt-1 text-sm font-semibold text-brand-navy">
                    {aboutChannelData.genre}
                  </p>
                </div>
                <div>
                  <span className="text-[9px] font-semibold uppercase tracking-widest text-neutral-400">
                    Language
                  </span>
                  <p className="mt-1 text-sm font-semibold text-brand-navy">
                    {aboutChannelData.language}
                  </p>
                </div>
              </div>
              <div>
                <span className="text-[9px] font-semibold uppercase tracking-widest text-neutral-400">
                  Launched
                </span>
                <p className="mt-1 text-sm font-semibold text-brand-navy">
                  {new Date(aboutChannelData.launchDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Image & Highlights */}
          <div className="flex flex-col gap-10 lg:col-span-6 lg:pt-2">
            <div className="group relative w-full overflow-hidden bg-neutral-100 aspect-[16/10] lg:aspect-[4/3]">
              <Image
                src="/images/about-channel/studio.png"
                alt="Arus TV Studio"
                fill
                className="object-cover transition-transform duration-[10s] ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 border border-black/5 mix-blend-overlay" />
            </div>

            <div>
              <h3 className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                Channel Directives
              </h3>
              <ul className="flex flex-col">
                {aboutChannelData.highlights.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-5 border-b border-neutral-100 py-4 first:pt-0 last:border-0 last:pb-0"
                  >
                    <span className="mt-0.5 font-mono text-xs font-semibold text-brand-orange">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-medium leading-relaxed text-neutral-800">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}