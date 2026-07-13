"use client";

import Image from "next/image";
import { advertiseData } from "@/data/advertise";
import { ArrowRight, Download } from "lucide-react";

export default function Advertise() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-12 md:py-20 text-black border-b border-neutral-200">
      <div className="mx-auto max-w-5xl px-4 md:px-8 space-y-8 md:space-y-12">
        
        {/* ── Top Visual Anchor Frame ── */}
        <div className="relative aspect-[21/9] w-full overflow-hidden bg-neutral-900 border border-neutral-200 shadow-sm">
          <Image
            src="/images/hero/hero1.png" // Using existing hero media path as visual anchor
            alt="Partnership broadcast showcase"
            fill
            className="object-cover opacity-95 transition-transform duration-700 hover:scale-102"
            priority
          />
          {/* Subtle gradient treatment over image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          
          {/* Floating Contextual Badge */}
          <div className="absolute left-4 top-4 inline-flex items-center gap-2 bg-brand-orange px-3 py-1.5 shadow-md">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-black" />
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-black">
              Partnership Engine
            </span>
          </div>
        </div>

        {/* ── Editorial Data & Control Slate ── */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-start">
          
          {/* Left Column: Core Values & Description */}
          <div className="lg:col-span-7 space-y-4">
            <h2 className="font-sans text-[clamp(1.75rem,4vw,3.5rem)] font-black uppercase leading-[0.95] tracking-tighter text-brand-navy">
              {advertiseData.title}
            </h2>
            <p className="text-base leading-relaxed text-neutral-600 max-w-xl">
              {advertiseData.description}
            </p>
          </div>

          {/* Right Column: Execution Array */}
          <div className="lg:col-span-5 lg:pt-2 w-full">
            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 max-w-md ml-auto">
              
              {/* Primary Interaction Vector */}
              <a
                href={`mailto:${advertiseData.contactEmail}`}
                className="group flex w-full items-center justify-between bg-brand-navy p-4 font-sans text-xs font-black uppercase tracking-widest text-white transition-all duration-200 hover:bg-brand-orange hover:text-black shadow-sm"
              >
                <span>Initiate Contact</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>

              {/* Secondary Asset Retrieval */}
              {advertiseData.mediaKitUrl && (
                <a
                  href={advertiseData.mediaKitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full items-center justify-between border border-neutral-200 bg-white p-4 font-sans text-xs font-black uppercase tracking-widest text-neutral-600 transition-all duration-200 hover:border-neutral-900 hover:text-black"
                >
                  <span>Download Media Kit</span>
                  <Download className="h-4 w-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>
              )}
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}