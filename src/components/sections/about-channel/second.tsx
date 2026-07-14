"use client";

import { aboutChannelData } from "@/data/about-channel";
import Image from "next/image";
import { Calendar, Film, Globe, ArrowRight } from "lucide-react";

export default function AboutChannel() {
  return (
    <section id="about" className="scroll-mt-24 bg-white pt-24 pb-10 text-black overflow-hidden md:pt-28 md:pb-16">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        
        {/* ── Compact Cinematic Letterbox Panel ── */}
        <div className="relative h-40 md:h-56 w-full bg-brand-navy overflow-hidden group border border-neutral-200">
          <Image
            src="/images/hero/hero3.png"
            alt="Broadcast master suite"
            fill
            className="object-cover opacity-50 transition-transform duration-700 group-hover:scale-102"
            priority
            sizes="100vw"
          />
          {/* Precise viewfinding target lines */}
          <div className="absolute inset-3 pointer-events-none border border-white/5">
            <div className="absolute top-1/2 left-2 -translate-y-1/2 text-white/20 font-mono text-[10px]">+</div >
            <div className="absolute top-1/2 right-2 -translate-y-1/2 text-white/20 font-mono text-[10px]">+</div >
          </div>
          
          <div className="absolute bottom-4 left-4 z-20">
            <span className="inline-block bg-brand-orange px-2 py-0.5 text-[9px] font-black uppercase tracking-[0.15em] text-black">
              Profile Korporat
            </span>
          </div>
        </div>

        {/* ── High-Density Content Grid ── */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-start">
          
          {/* Left Column: Focused Copy & Compressed Data Ribbon */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h2 className="font-sans text-2xl font-black uppercase tracking-tight text-brand-navy sm:text-3xl lg:text-4xl leading-tight">
                {aboutChannelData.title}
              </h2>
              <p className="text-sm leading-relaxed text-neutral-600 md:text-base border-l-2 border-brand-orange pl-4 max-w-2xl">
                {aboutChannelData.description}
              </p>
            </div>

            {/* Premium Low-Profile Data Strip */}
            <div className="border-t border-b border-neutral-200 py-4 grid grid-cols-3 gap-4">
              <div className="space-y-0.5">
                <div className="flex items-center gap-1.5 text-brand-orange">
                  <Film className="h-3.5 w-3.5" />
                  <span className="text-[9px] font-bold uppercase tracking-wider text-neutral-400">Format</span>
                </div>
                <p className="font-sans text-xs font-black uppercase tracking-wide text-brand-navy">{aboutChannelData.genre}</p>
              </div>
              
              <div className="space-y-0.5 border-l border-neutral-200 pl-4">
                <div className="flex items-center gap-1.5 text-brand-orange">
                  <Globe className="h-3.5 w-3.5" />
                  <span className="text-[9px] font-bold uppercase tracking-wider text-neutral-400">Bahasa</span>
                </div>
                <p className="font-sans text-xs font-black uppercase tracking-wide text-brand-navy">{aboutChannelData.language}</p>
              </div>

              <div className="space-y-0.5 border-l border-neutral-200 pl-4">
                <div className="flex items-center gap-1.5 text-brand-orange">
                  <Calendar className="h-3.5 w-3.5" />
                  <span className="text-[9px] font-bold uppercase tracking-wider text-neutral-400">Pelancaran</span>
                </div>
                <p className="font-sans text-xs font-black uppercase tracking-wide text-brand-navy whitespace-nowrap">
                  {new Date(aboutChannelData.launchDate).toLocaleDateString("en-MY", {
                    year: "numeric",
                    month: "short",
                  })}
                </p>
              </div>
            </div>

            {/* Restrained Matrix Columns */}
            <div className="space-y-3">
              <h3 className="text-[9px] font-black uppercase tracking-[0.15em] text-neutral-400">
                Direktif Utama Saluran
              </h3>
              <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {aboutChannelData.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2 group">
                    <div className="mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center bg-brand-navy text-white transition-colors group-hover:bg-brand-orange group-hover:text-black">
                      <ArrowRight className="h-2.5 w-2.5" />
                    </div>
                    <span className="text-xs font-medium text-neutral-700 leading-tight">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Precise Micro-Framed Master Feature */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xs">
              
              {/* Crisp Offset Shadow Rule */}
              <div className="absolute inset-0 translate-x-2 translate-y-2 bg-neutral-900 border border-neutral-200 z-0" />
              
              {/* Image Frame Box */}
              <div className="relative z-10 border border-neutral-900 bg-white p-1.5">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-50">
                  <Image
                    src="/images/about-channel/studio.png"
                    alt="Arus TV Broadcast Deck"
                    fill
                    className="object-cover"
                    sizes="(max-w-1024px) 100vw, 300px"
                  />
                  
                  {/* Clean Technical Lower Third Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-brand-navy p-3 text-white">
                    <div className="flex items-center justify-between border-b border-white/10 pb-1 mb-1">
                      <span className="font-mono text-[8px] tracking-widest text-white/40">LOC // KUALA_LUMPUR</span>
                      <span className="h-1 w-1 rounded-full bg-brand-orange animate-pulse" />
                    </div>
                    <p className="font-sans text-[10px] font-black uppercase tracking-wide text-brand-orange">
                      Pusat Penyiaran Arus TV
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}