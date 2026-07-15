"use client";

import Image from "next/image";
import { programData } from "@/data/program";
import { ArrowRight } from "lucide-react";

export default function Program() {
  return (
    <section className="w-full bg-neutral-50 pb-24 md:pb-32">
      
      {/* ── Top Hero Banner ── */}
      <div className="relative flex h-[35vh] min-h-[300px] w-full items-center justify-center overflow-hidden bg-brand-navy md:h-[40vh]">
        {/* Abstract Background Image placeholder - replace src with your actual banner image */}
        <Image
          src="/images/hero/mana.png" // Fallback placeholder, adjust path as needed
          alt="Programs Banner"
          fill
          className="object-cover opacity-20 grayscale mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-transparent" />
        
        <div className="relative z-10 flex flex-col items-center px-6 text-center">
          <span className="mb-3 inline-block bg-brand-orange px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.3em] text-brand-navy">
            Siara TV Exclusives
          </span>
          {/* Scaled down heading for a more modern, balanced look */}
          <h2 className="font-sans text-3xl font-black uppercase tracking-tight text-white sm:text-4xl md:text-5xl">
            Featured Programs
          </h2>
        </div>
      </div>

      {/* ── Ticket-Style List Container ── */}
      <div className="relative z-20 mx-auto -mt-16 max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:gap-5">
          {programData.map((program) => (
            <article
              key={program.id}
              className="group relative flex w-full overflow-hidden bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-navy/5"
            >
              {/* Hover Accent Line */}
              <div className="absolute left-0 top-0 z-20 h-full w-1 bg-brand-orange origin-top scale-y-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100" />

              {/* Left Side: Image */}
              <div className="relative w-1/3 shrink-0 overflow-hidden bg-neutral-200 sm:w-40 md:w-56 lg:w-64">
                <Image
                  src={program.posterUrl}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
              </div>

              {/* Middle Section: Main Content */}
              <div className="flex flex-1 flex-col justify-center p-4 sm:p-5 lg:p-6 lg:pl-8">
                
                {/* Category & Mobile Frequency */}
                <div className="mb-2.5 flex flex-wrap items-center gap-2.5">
                  <span className="bg-brand-navy px-2 py-0.5 text-[8px] font-bold uppercase tracking-widest text-white sm:text-[9px]">
                    {program.category}
                  </span>
                  <span className="text-[8px] font-bold uppercase tracking-widest text-brand-orange sm:hidden">
                    {program.frequency}
                  </span>
                </div>

                {/* Refined, modern title sizing */}
                <h3 className="font-sans text-sm font-extrabold uppercase leading-tight tracking-tight text-brand-navy sm:text-base lg:text-lg">
                  {program.title}
                </h3>
                
                {/* Sleeker description text */}
                <p className="mt-1.5 line-clamp-2 text-[11px] leading-relaxed text-neutral-500 sm:mt-2 sm:line-clamp-3 sm:text-xs lg:max-w-xl">
                  {program.description}
                </p>

              </div>

              {/* Right Side: Ticket Stub (Visible on Tablet & Desktop) */}
              <div className="relative hidden w-28 shrink-0 flex-col items-center justify-center border-l border-dashed border-neutral-200 p-4 sm:flex md:w-36 lg:p-5">
                
                {/* Ticket Cutouts */}
                <div className="absolute -left-2.5 -top-2.5 h-5 w-5 rounded-full bg-neutral-50 shadow-inner" />
                <div className="absolute -bottom-2.5 -left-2.5 h-5 w-5 rounded-full bg-neutral-50 shadow-inner" />

                <div className="text-center">
                  <p className="font-mono text-[8px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                    Broadcast
                  </p>
                  <p className="mt-1 font-sans text-[10px] font-bold uppercase tracking-wider text-brand-navy md:text-xs">
                    {program.frequency}
                  </p>
                </div>

                <div className="mt-5 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-brand-navy transition-all duration-300 group-hover:bg-brand-orange group-hover:text-white group-hover:shadow-md group-hover:shadow-brand-orange/30 md:h-10 md:w-10">
                  <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
                </div>

              </div>

            </article>
          ))}
        </div>
      </div>
      
    </section>
  );
}