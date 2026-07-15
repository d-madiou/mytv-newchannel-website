"use client";

import Link from "next/link";
import Image from "next/image";
import { newsData } from "@/data/news";
import { ArrowRight } from "lucide-react";

export default function NewsTeaser() {
  const latest = newsData[0];

  if (!latest) return null;

  return (
    <section className="bg-white py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
          
          {/* ── Left Column: Header & CTA ── */}
          <div className="flex flex-col items-start justify-center lg:col-span-4">
            
            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-0.5 w-6 bg-brand-orange" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                Press Wire
              </span>
            </div>
            
            <h2 className="mb-6 font-sans text-4xl font-black uppercase leading-[0.95] tracking-tight text-brand-navy sm:text-5xl lg:text-6xl">
              Latest <br className="hidden lg:block" />
              Dispatch.
            </h2>
            
            <p className="mb-12 font-sans text-sm leading-relaxed text-neutral-500">
              Stay up to date with the newest programming announcements, press releases, and corporate updates from the network.
            </p>

            {/* Signature Animated CTA */}
            <Link
              href="/news"
              className="group relative inline-flex items-center gap-6 overflow-hidden bg-brand-navy py-3 pl-8 pr-3 shadow-lg transition-all duration-500 hover:shadow-xl hover:shadow-brand-orange/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2"
            >
              <span className="absolute inset-0 z-0 h-full w-full origin-left scale-x-0 bg-brand-orange transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
              
              <span className="relative z-10 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors duration-300 group-hover:text-brand-navy">
                All Dispatches
              </span>
              
              <span className="relative z-10 flex h-10 w-10 items-center justify-center bg-white/10 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-brand-navy/10">
                <ArrowRight className="h-4 w-4 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-brand-navy" />
              </span>
            </Link>
          </div>

          {/* ── Right Column: Featured Article ── */}
          <div className="lg:col-span-8">
            <article className="group relative flex flex-col border-t-4 border-brand-navy pt-8">
              
              {/* Invisible full-card link */}
              <Link href={`/news/${latest.id}`} className="absolute inset-0 z-10">
                <span className="sr-only">Read {latest.title}</span>
              </Link>

              {/* Metadata Row */}
              <div className="mb-6 flex items-center justify-between">
                <time className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand-orange">
                  {new Date(latest.date).toLocaleDateString("en-MY", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-neutral-400">
                  Featured Story
                </span>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-12">
                
                {/* Article Content */}
                <div className="flex flex-col justify-center lg:col-span-5 lg:order-last">
                  <h3 className="mb-4 font-sans text-2xl font-black uppercase leading-[1.1] tracking-tight text-brand-navy transition-colors duration-300 group-hover:text-brand-orange sm:text-3xl">
                    {latest.title}
                  </h3>
                  
                  <p className="mb-8 font-sans text-sm leading-relaxed text-neutral-500 line-clamp-4">
                    {latest.summary}
                  </p>

                  <div className="mt-auto flex items-center gap-3">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-brand-navy transition-colors duration-300 group-hover:text-brand-orange">
                      Read Full Story
                    </span>
                    <ArrowRight className="h-4 w-4 text-brand-navy transition-all duration-300 group-hover:translate-x-1 group-hover:text-brand-orange" />
                  </div>
                </div>

                {/* Article Image */}
                {latest.imageUrl && (
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100 lg:col-span-7 lg:order-first">
                    <Image
                      src={latest.imageUrl}
                      alt={latest.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                    />
                    {/* Dark overlay fade on hover */}
                    <div className="absolute inset-0 bg-brand-navy/0 mix-blend-overlay transition-colors duration-500 group-hover:bg-brand-navy/20" />
                  </div>
                )}
                
              </div>
            </article>
          </div>

        </div>
      </div>
    </section>
  );
}