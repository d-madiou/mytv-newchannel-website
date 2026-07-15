"use client";

import { whereToWatchData } from "@/data/where-to-watch";
import Image from "next/image";
import { Smartphone, Monitor, MapPin } from "lucide-react";

export default function WhereToWatch() {
  return (
    <section className="bg-white">
      {/* ── Top Hero: Editorial Full-Bleed ── */}
      <div className="relative flex min-h-[45vh] w-full items-end justify-start overflow-hidden bg-brand-navy">
        <Image
          src="/images/where-to-watch/imageWatch.png"
          alt="Watch Siara TV on your devices"
          fill
          className="object-cover object-[center_35%] opacity-40 mix-blend-luminosity grayscale"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent" />
        
        {/* Subtle grid texture */}
        <div className="absolute inset-0 z-0 mix-blend-overlay bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:12px_12px]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-32 lg:px-8 lg:pb-24">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-brand-orange" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-brand-orange">
                Access Network
              </span>
            </div>
            <h1 className="font-sans text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-7xl">
              Where to Watch
            </h1>
            <p className="max-w-xl font-sans text-sm leading-relaxed text-white/70 sm:text-base">
              Siara TV is available across satellite and digital streaming platforms. Access our exclusive broadcasts, premium segments, and live shows seamlessly from any location.
            </p>
          </div>
        </div>
      </div>

      {/* ── Main Content Area: Architectural Grid ── */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
        
        {/* Network Infrastructure Split */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          
          {/* Left Column: Digital & OTT Network (Parent: Mana) */}
          <div className="flex flex-col border-t-4 border-brand-navy pt-8">
            <div className="mb-10 flex items-center gap-3">
              <Smartphone className="h-6 w-6 text-brand-orange" />
              <h2 className="font-sans text-2xl font-black uppercase tracking-tight text-brand-navy">
                Digital Streaming
              </h2>
            </div>
            
            {/* OTT Parent Carrier */}
            <div className="mb-12">
              <span className="mb-4 block font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                Powered By
              </span>
              {/* Dark block to ensure the white text in the Mana logo is fully visible */}
              <div className="inline-flex items-center justify-center bg-brand-navy px-8 py-5 shadow-lg">
                <Image
                  src="/images/hero/mana.png"
                  alt="Mana Digital"
                  width={140}
                  height={45}
                  className="h-8 w-auto object-contain sm:h-10"
                />
              </div>
            </div>

            {/* Mobile / App Logos (Naked Display, Full Color) */}
            <div className="border-t border-neutral-150 pt-8">
              <span className="mb-6 block font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                Available Apps & Platforms
              </span>
              <div className="flex flex-wrap items-center gap-8 sm:gap-10">
                {whereToWatchData.ottLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105 hover:-translate-y-0.5"
                  >
                    <Image
                      src={link.iconUrl}
                      alt={link.platform}
                      width={120}
                      height={40}
                      className="h-8 w-auto object-contain sm:h-9"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Terrestrial Network (Parent: MYTV) */}
          <div className="flex flex-col border-t-4 border-brand-navy pt-8">
            <div className="mb-10 flex items-center gap-3">
              <Monitor className="h-6 w-6 text-brand-orange" />
              <h2 className="font-sans text-2xl font-black uppercase tracking-tight text-brand-navy">
                Terrestrial TV
              </h2>
            </div>
            
            {/* DTT Parent Carrier */}
            <div className="mb-12">
              <span className="mb-4 block font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                Broadcast Carrier
              </span>
              <Image
                src="/images/where-to-watch/mytv.png"
                alt="MYTV Broadcasting"
                width={160}
                height={50}
                className="h-10 w-auto object-contain"
              />
            </div>

            {/* Channel Frequency */}
            <div className="border-t border-neutral-150 pt-8">
              <span className="mb-4 block font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                Assigned Channel
              </span>
              <div className="flex items-baseline gap-4">
                <span className="font-sans text-7xl font-black tracking-tighter text-brand-navy lg:text-8xl">
                  {whereToWatchData.satellite?.[0]?.frequency || "114"}
                </span>
                <span className="font-mono text-sm font-bold uppercase tracking-widest text-brand-orange">
                  HD
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* ── Bottom Section: Broadcast Territories ── */}
        <div className="mt-20 border-t border-neutral-200 pt-12 lg:mt-32">
          <div className="mb-8 flex items-center gap-3">
            <MapPin className="h-5 w-5 text-brand-navy" />
            <h2 className="font-sans text-lg font-extrabold uppercase tracking-tight text-brand-navy">
              Broadcast Territories
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {whereToWatchData.availableRegions.map((region) => (
              <div
                key={region}
                className="flex items-center gap-3 bg-brand-navy px-5 py-2.5"
              >
                <div className="relative h-3.5 w-5 shrink-0">
                  <Image
                    src="/images/shared/malaysia-flag.png"
                    alt="Malaysia Flag"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-white">
                  {region}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}