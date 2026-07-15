"use client";

import Link from "next/link";
import Image from "next/image";
import { aboutChannelData } from "@/data/about-channel";
import { ArrowRight } from "lucide-react";

export default function AboutChannelTeaser() {
  const sentences = aboutChannelData.description.split(". ");
  const leadSentence = sentences[0] + (sentences.length > 1 ? "." : "");
  const remainingNarrative = sentences.slice(1).join(". ");

  return (
    <section className="relative overflow-hidden bg-neutral-50 py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          
          {/* ── Left Column: Corporate Narrative ── */}
          <div className="flex flex-col items-start">
            
            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-0.5 w-6 bg-brand-orange" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                Corporate Profile
              </span>
            </div>
            
            <h2 className="mb-8 font-sans text-4xl font-black uppercase leading-[1] tracking-tight text-brand-navy sm:text-5xl lg:text-6xl">
              {aboutChannelData.title}
            </h2>

            {/* Narrative text anchored by a colored border */}
            <div className="mb-12 space-y-6 border-l-2 border-brand-orange pl-6">
              <p className="font-sans text-lg font-bold leading-snug text-brand-navy md:text-xl">
                {leadSentence}
              </p>
              
              {remainingNarrative && (
                <p className="max-w-md font-sans text-sm leading-relaxed text-neutral-500">
                  {remainingNarrative}
                </p>
              )}
            </div>

            {/* Sharp Editorial CTA */}
            <Link
              href="/about"
              className="group relative inline-flex items-center gap-6 overflow-hidden bg-brand-navy py-3 pl-8 pr-3 shadow-lg transition-all duration-500 hover:shadow-xl hover:shadow-brand-orange/20"
            >
              <span className="absolute inset-0 z-0 h-full w-full origin-left scale-x-0 bg-brand-orange transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
              
              <span className="relative z-10 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors duration-300 group-hover:text-brand-navy">
                Explore Full Profile
              </span>
              
              <span className="relative z-10 flex h-10 w-10 items-center justify-center bg-white/10 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-brand-navy/10">
                <ArrowRight className="h-4 w-4 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-brand-navy" />
              </span>
            </Link>

          </div>

          {/* ── Right Column: Architectural Image & Overlapping Metadata ── */}
          <div className="relative w-full pt-8 lg:pt-0">
            
            {/* Main Editorial Image */}
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden bg-neutral-200 lg:ml-auto">
              <Image
                src={aboutChannelData.imageUrl}
                alt={aboutChannelData.title}
                fill
                className="object-cover grayscale transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105 hover:grayscale-0"
              />
              <div className="absolute inset-0 z-10 bg-brand-navy/10 mix-blend-overlay transition-opacity duration-700 hover:opacity-0" />
            </div>

            {/* Overlapping Tech Specs / Dossier Card */}
            <div className="absolute -bottom-8 left-0 z-20 w-[85%] max-w-[280px] bg-white p-6 shadow-2xl sm:-left-8 sm:bottom-12 md:p-8">
              <div className="space-y-5 font-mono text-[10px] uppercase tracking-widest text-neutral-400">
                <div>
                  <p className="mb-1.5 font-bold">Network Origin</p>
                  <p className="font-sans text-sm font-black text-brand-navy">CyberJaya</p>
                </div>
                <div className="h-px w-full bg-neutral-100" />
                <div>
                  <p className="mb-1.5 font-bold">Broadcast Zone</p>
                  <p className="font-sans text-sm font-black text-brand-navy">Malaysia (Nationwide)</p>
                </div>
                <div className="h-px w-full bg-neutral-100" />
                <div>
                  <p className="mb-1.5 font-bold">Transmission</p>
                  <p className="font-sans text-sm font-black text-brand-orange">DTT & Digital</p>
                </div>
              </div>
              
              {/* Sharp geometric corner accent */}
              <div className="absolute right-0 top-0 h-5 w-5 border-r-2 border-t-2 border-brand-orange" />
            </div>
            
            {/* Background Grid Accent */}
            <div className="absolute -right-8 -top-8 -z-10 h-64 w-64 bg-[radial-gradient(circle,rgba(11,25,44,0.08)_1.5px,transparent_1.5px)] bg-[size:16px_16px]" />
            
          </div>

        </div>
      </div>
    </section>
  );
}