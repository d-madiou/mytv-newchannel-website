"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import { programData } from "@/data/program";

export default function ProgramTeaser() {
  const [featured, secondary] = programData;

  if (!featured) return null;

  return (
    <section className="relative overflow-hidden bg-brand-navy py-24 md:py-32">
      {/* ── Background Decorative Elements ── */}
      <div className="absolute -left-[10%] top-0 z-0 select-none opacity-5">
        <h2 className="font-sans text-[15rem] font-black uppercase leading-none tracking-tighter text-white">
          On Air
        </h2>
      </div>
      <div className="absolute right-0 top-1/2 z-0 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/3 rounded-full bg-brand-orange/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          
          {/* Left Column: Copy & CTA */}
          <div className="flex flex-col items-start space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                {/* <span className="relative flex h-2 w-2 items-center justify-center rounded-full bg-brand-orange">
                  <span className="absolute h-4 w-4 animate-ping rounded-full bg-brand-orange/50 motion-reduce:animate-none" />
                </span> */}
                <span className="font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-brand-orange">
                  Explore Our Lineup
                </span>
              </div>
              
              <h2 className="font-sans text-3xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-4xl lg:text-5xl">
                Programs Made <br />
                <span className="text-white/60">For the Public.</span>
              </h2>
            </div>

            <p className="max-w-md font-sans text-[13px] leading-relaxed text-neutral-400">
              {featured.description} Explore our regular lineup of health,
              safety, and civic segments — updated weekly for every Malaysian
              household.
            </p>

            <div className="pt-4">
              <Link
                href="/program"
                className="group relative inline-flex items-center gap-5 overflow-hidden rounded-full bg-white py-2.5 pl-6 pr-2 shadow-lg transition-all duration-500 hover:shadow-brand-orange/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy"
              >
                <span className="absolute inset-0 z-0 h-full w-full origin-left scale-x-0 bg-brand-orange transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
                
                <span className="relative z-10 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-brand-navy transition-colors duration-300 group-hover:text-white">
                  View All Programs
                </span>
                
                <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-brand-navy/5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-white/20">
                  <ArrowRight className="h-3.5 w-3.5 text-brand-navy transition-colors duration-300 group-hover:text-white" />
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: Editorial Image Composition */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            {/* Main Featured Image */}
            <div className="relative z-20 aspect-[4/5] w-3/4 overflow-hidden shadow-2xl md:w-2/3 lg:w-3/4">
              <div className="absolute inset-0 z-10 bg-brand-navy/20 mix-blend-overlay transition-opacity duration-500 hover:opacity-0" />
              <Image
                src={featured.posterUrl}
                alt={featured.title}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-6 left-6 z-20 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-brand-orange text-brand-navy shadow-lg transition-transform hover:scale-110">
                <Play className="ml-0.5 h-4 w-4 fill-current" />
              </div>
            </div>

            {/* Secondary Offset Image */}
            {secondary && (
              <div className="absolute -bottom-8 -right-4 z-30 aspect-square w-1/2 overflow-hidden border-4 border-brand-navy shadow-xl sm:-right-8 md:-bottom-12 lg:-right-4">
                <div className="absolute inset-0 z-10 bg-brand-navy/30 mix-blend-overlay transition-opacity duration-500 hover:opacity-0" />
                <Image
                  src={secondary.posterUrl}
                  alt={secondary.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            
            {/* Minimalist Grid Accent */}
            <div className="absolute -right-8 -top-8 z-10 h-32 w-32 bg-[radial-gradient(circle,rgba(255,255,255,0.15)_1.5px,transparent_1.5px)] bg-[size:12px_12px]" />
          </div>

        </div>
      </div>
    </section>
  );
}