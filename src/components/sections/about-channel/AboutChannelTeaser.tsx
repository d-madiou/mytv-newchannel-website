"use client";

import Link from "next/link";
import { aboutChannelData } from "@/data/about-channel";
import { ArrowRight } from "lucide-react";

export default function AboutChannelTeaser() {
  // Dynamically break down the description to establish an editorial typography hierarchy
  const sentences = aboutChannelData.description.split(". ");
  const leadSentence = sentences[0] + (sentences.length > 1 ? "." : "");
  const remainingNarrative = sentences.slice(1).join(". ");

  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32 text-brand-navy">
      {/* Editorial top rule to frame the container */}
      <div className="absolute top-0 left-0 right-0 h-px bg-neutral-200/80" />

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
          
          {/* Left Column: Dossier Metadata & Headings */}
          <div className="flex flex-col justify-between space-y-12 lg:col-span-5">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 bg-brand-orange" />
                <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">
                  Corporate Dossier
                </span>
              </div>
              <h2 className="font-sans text-4xl font-extrabold uppercase tracking-tight text-brand-navy sm:text-5xl lg:text-6xl leading-[0.95]">
                {aboutChannelData.title}
              </h2>
            </div>

            {/* Structured Station Coordinates (Desktop) */}
            <div className="hidden border-t border-neutral-150 pt-6 lg:block">
              <div className="grid grid-cols-2 gap-6 font-mono text-[10px] tracking-wider text-neutral-500">
                <div>
                  <p className="font-bold uppercase text-neutral-400">Parent Network</p>
                  <p className="mt-1 font-semibold text-brand-navy">MYTV</p>
                </div>
                <div>
                  <p className="font-bold uppercase text-neutral-400">Broadcast Zone</p>
                  <p className="mt-1 font-semibold text-brand-navy">Malaysia (Nationwide)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Sharp CTA */}
          <div className="relative flex flex-col justify-between lg:col-span-7 lg:border-l lg:border-neutral-200/80 lg:pl-16">
            <div className="space-y-8">
              {/* Bold Lead Statement */}
              <p className="font-sans text-xl font-semibold leading-relaxed text-neutral-900 md:text-2xl md:leading-snug">
                {leadSentence}
              </p>
              
              {/* Secondary Body Text */}
              {remainingNarrative && (
                <p className="font-sans text-sm leading-relaxed text-neutral-500 max-w-xl">
                  {remainingNarrative}
                </p>
              )}
            </div>

            {/* Call To Action Container */}
            <div className="mt-12 pt-8 border-t border-neutral-100">
              <Link
                href="/about"
                className="group inline-flex items-center justify-between gap-10 border border-brand-navy bg-brand-navy px-6 py-4 text-white transition-all duration-300 hover:bg-brand-orange hover:border-brand-orange hover:text-black"
              >
                <span className="font-mono text-xs font-bold uppercase tracking-[0.2em]">
                  Explore Full Profile
                </span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}