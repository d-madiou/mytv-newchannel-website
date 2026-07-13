"use client";

import { advertiseData } from "@/data/advertise";
import { ArrowRight, Download } from "lucide-react";

export default function Advertise() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 md:py-24 text-black border-b border-neutral-200">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        
        {/* ── Dynamic Editorial Layout Matrix ── */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16 items-start">
          
          {/* Left Block: Dynamic Messaging Structure */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">
                Partnership
              </span>
            </div>

            <h2 className="font-sans text-[clamp(2rem,5vw,4.5rem)] font-black uppercase leading-[0.95] tracking-tighter text-brand-navy">
              {advertiseData.title}
            </h2>

            <p className="max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
              {advertiseData.description}
            </p>
          </div>

          {/* Right Block: Technical Action Control Slate */}
          <div className="lg:col-span-4 lg:pt-8 w-full">
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 max-w-sm">
              
              {/* Primary: Inquire / Contact */}
              <a
                href={`mailto:${advertiseData.contactEmail}`}
                className="group flex w-full items-center justify-between border border-neutral-900 bg-white p-4 font-sans text-xs font-black uppercase tracking-widest text-black transition-all duration-200 hover:bg-neutral-50 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
              >
                <span>Contact Us</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>

              {/* Secondary: Technical Assets / Media Kit */}
              {advertiseData.mediaKitUrl && (
                <a
                  href={advertiseData.mediaKitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full items-center justify-between border border-neutral-200 bg-neutral-50/50 p-4 font-sans text-xs font-black uppercase tracking-widest text-neutral-600 transition-all duration-200 hover:bg-white hover:border-neutral-900 hover:text-black"
                >
                  <span>Media Kit</span>
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