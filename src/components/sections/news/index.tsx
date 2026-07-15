"use client";

import Image from "next/image";
import { newsData } from "@/data/news";
import { ArrowRight } from "lucide-react";
import Link from "next/link"; // Assuming these will eventually link to a full article

export default function News() {
  return (
    <section className="bg-white py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* ── Section Header (Newsroom Style) ── */}
        <div className="mb-16 flex flex-col gap-6 border-b-2 border-brand-navy pb-8 md:flex-row md:items-end md:justify-between lg:mb-20">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-0.5 w-6 bg-brand-orange" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                Network Dispatches
              </span>
            </div>
            <h2 className="font-sans text-4xl font-black uppercase leading-none tracking-tight text-brand-navy sm:text-5xl lg:text-6xl">
              News & Updates
            </h2>
          </div>
          <p className="max-w-sm font-sans text-sm leading-relaxed text-neutral-500 md:text-right">
            The latest announcements, press releases, and programming updates directly from the Siara TV network.
          </p>
        </div>

        {/* ── Editorial Grid ── */}
        <div className="grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {newsData.map((item) => (
            // Using a group here to trigger hover states across the whole article block
            <article key={item.id} className="group relative flex flex-col">
              
              <Link href={`/news/${item.id}`} className="absolute inset-0 z-10">
                <span className="sr-only">Read {item.title}</span>
              </Link>

              {/* Image Container */}
              {item.imageUrl && (
                <div className="relative mb-6 aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  />
                  {/* Subtle dark overlay on hover */}
                  <div className="absolute inset-0 bg-brand-navy/0 mix-blend-overlay transition-colors duration-500 group-hover:bg-brand-navy/20" />
                </div>
              )}

              {/* Metadata Row */}
              <div className="mb-4 flex items-center justify-between border-t border-neutral-200 pt-4">
                <time className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand-orange">
                  {new Date(item.date).toLocaleDateString("en-MY", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  })}
                </time>
                <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-neutral-400">
                  Press Release
                </span>
              </div>

              {/* Headline */}
              <h3 className="mb-3 font-sans text-xl font-extrabold uppercase leading-[1.15] tracking-tight text-brand-navy transition-colors duration-300 group-hover:text-brand-orange">
                {item.title}
              </h3>

              {/* Summary */}
              <p className="mb-6 flex-1 font-sans text-sm leading-relaxed text-neutral-500 line-clamp-3">
                {item.summary}
              </p>

              {/* Interactive Read Trigger */}
              <div className="mt-auto flex items-center gap-3">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-brand-navy transition-colors duration-300 group-hover:text-brand-orange">
                  Read Article
                </span>
                <ArrowRight className="h-3.5 w-3.5 text-brand-navy transition-all duration-300 group-hover:translate-x-1 group-hover:text-brand-orange" />
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}