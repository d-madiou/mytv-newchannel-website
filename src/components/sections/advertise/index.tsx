"use client";

import Image from "next/image";
import { advertiseData } from "@/data/advertise";
import { ArrowRight, Download } from "lucide-react";

export default function Advertise() {
  return (
    <section className="bg-white py-16 text-brand-navy md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-20">
          
          {/* ── Left Column: Sticky Typography ── */}
          <div className="flex flex-col lg:sticky lg:top-32 lg:col-span-5">
            <span className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-brand-orange">
              <span className="h-px w-6 bg-brand-orange" />
              Commercial Partnerships
            </span>
            
            <h2 className="mb-6 font-sans text-4xl font-black uppercase leading-[0.9] tracking-tighter sm:text-5xl lg:text-[4rem]">
              {advertiseData.title}
            </h2>
            
            <p className="text-base font-medium leading-relaxed text-neutral-600 md:text-lg">
              {advertiseData.description}
            </p>
          </div>

          {/* ── Right Column: Media & Action Rows ── */}
          <div className="flex flex-col lg:col-span-7">
            
            {/* Editorial Feature Image */}
            <div className="group relative mb-12 aspect-[16/9] w-full overflow-hidden bg-neutral-100 sm:aspect-[21/9] lg:aspect-[16/10]">
              <Image
                src="/images/hero/hero1.png"
                alt="Partnership broadcast showcase"
                fill
                className="object-cover transition-transform duration-[10s] ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 border border-black/5 mix-blend-overlay" />
              
              {/* Subtle Image Metadata */}
              <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1.5 backdrop-blur-sm">
                <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-brand-navy">
                  Global Reach & Integration
                </span>
              </div>
            </div>

            {/* Premium Action Rows (Replaces blocky buttons) */}
            <div className="flex flex-col border-t border-neutral-200">
              
              {/* Primary Interaction Vector */}
              <a
                href={`mailto:${advertiseData.contactEmail}`}
                className="group flex items-center justify-between border-b border-neutral-200 py-6 transition-colors hover:border-brand-navy"
              >
                <div className="flex flex-col gap-1">
                  <span className="font-sans text-sm font-black uppercase tracking-widest text-brand-navy">
                    Initiate Contact
                  </span>
                  <span className="font-mono text-[10px] text-neutral-400 transition-colors group-hover:text-brand-orange">
                    Direct communication line
                  </span>
                </div>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white transition-all duration-300 group-hover:border-brand-navy group-hover:bg-brand-navy group-hover:text-white">
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </a>

              {/* Secondary Asset Retrieval */}
              {advertiseData.mediaKitUrl && (
                <a
                  href={advertiseData.mediaKitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border-b border-neutral-200 py-6 transition-colors hover:border-brand-navy"
                >
                  <div className="flex flex-col gap-1">
                    <span className="font-sans text-sm font-black uppercase tracking-widest text-brand-navy">
                      Download Media Kit
                    </span>
                    <span className="font-mono text-[10px] text-neutral-400 transition-colors group-hover:text-brand-orange">
                      PDF • Specifications & Rates
                    </span>
                  </div>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white transition-all duration-300 group-hover:border-brand-navy group-hover:bg-brand-navy group-hover:text-white">
                    <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                  </div>
                </a>
              )}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}