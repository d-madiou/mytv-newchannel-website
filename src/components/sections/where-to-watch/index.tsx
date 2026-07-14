"use client";

import { whereToWatchData } from "@/data/where-to-watch";
import Image from "next/image";
import { Smartphone, Monitor, MapPin } from "lucide-react";

export default function WhereToWatch() {
  return (
    <section className="bg-white">
      {/* ── Top banner: Hero section with refined textual scaling ── */}
      <div className="relative overflow-hidden">
        <Image
          src="/images/where-to-watch/imageWatch.png"
          alt="Watch Siara TV on your devices"
          fill
          className="object-cover object-[center_35%]"
          priority
          sizes="100vw"
        />
        {/* Immersive overlay styling */}
        <div className="absolute inset-0 bg-brand-navy/75" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[length:12px_12px]" />

        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-brand-orange" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand-orange">
                Tune In
              </span>
            </div>
            <h2 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl lg:text-5xl leading-none">
              Where to Watch
            </h2>
            <p className="max-w-2xl text-base text-white/90 md:text-lg font-medium leading-relaxed">
              Siara TV is available across satellite and streaming platforms, so you never miss a single moment.
            </p>
          </div>
        </div>

        {/* Smooth layout transition clip */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-white" />
      </div>

      {/* ── Main Content Area ── */}
      <div className="mx-auto max-w-6xl px-6 py-10 sm:py-16 lg:py-20">
        
        {/* Stream Online Block */}
        <div className="mb-14">
          <div className="mb-8 flex items-center gap-2.5">
            <Smartphone className="h-4 w-4 text-brand-orange" />
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-black/50">
              Stream Online
            </h3>
          </div>
          <div className="flex flex-wrap items-center gap-8 sm:gap-12">
            {whereToWatchData.ottLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:scale-102 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-brand-orange"
              >
                <div className="w-32 sm:w-40">
                  <Image
                    src={link.iconUrl}
                    alt={link.platform}
                    width={160}
                    height={50}
                    className="h-auto w-full object-contain"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Digital Terrestrial TV Section */}
        <div className="mb-14">
          <div className="mb-6 flex items-center gap-2.5">
            <Monitor className="h-4 w-4 text-brand-orange" />
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-black/50">
              Digital Terrestrial TV
            </h3>
          </div>
          
          <div className="max-w-xs border border-black/10 bg-white p-6 transition-all duration-300 hover:border-black/20">
            <div className="flex items-center gap-6">
              <div className="h-10 w-24">
                <Image
                  src="/images/where-to-watch/mytv.png"
                  alt="MYTV Broadcast Network"
                  width={100}
                  height={50}
                  className="h-full w-full object-contain"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className="h-10 w-px bg-black/10" />
              <div className="flex flex-col">
                <span className="text-[9px] font-bold text-black/40 uppercase tracking-wider">Channel</span>
                <span className="text-xl font-black text-brand-navy tracking-tight leading-none">
                  {whereToWatchData.satellite[0].frequency}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Available Regions Layer */}
        <div className="border-t border-black/10 pt-10">
          <div className="mb-5 flex items-center gap-2.5">
            <MapPin className="h-4 w-4 text-brand-orange" />
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-black/50">
              Available Regions
            </h3>
          </div>
          
          <div className="flex flex-wrap gap-2.5">
            {whereToWatchData.availableRegions.map((region) => (
              <span
                key={region}
                className="inline-flex items-center gap-2 rounded-full border border-brand-orange/20 bg-brand-orange/5 px-4 py-1.5 text-xs font-bold text-brand-orange tracking-wide uppercase"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand-orange animate-pulse" />
                <div className="h-3.5 w-3.5 shrink-0 border border-black/5 shadow-2xs">
                  <Image
                    src="/images/shared/malaysia-flag.png"
                    alt="Malaysia Flag"
                    width={18}
                    height={12}
                    className="h-full w-full object-contain"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <span>{region}</span>
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}