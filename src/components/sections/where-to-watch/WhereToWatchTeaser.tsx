"use client";

import Link from "next/link";
import Image from "next/image";
import { whereToWatchData } from "@/data/where-to-watch";
import { PlayCircle } from "lucide-react";

export default function WhereToWatchTeaser() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 md:py-12">
      {/* ── Compact Banner Container ── */}
      <div className="relative flex flex-col overflow-hidden rounded-2xl bg-gradient-to-r from-brand-navy via-[#112444] to-[#1A365D] shadow-xl md:flex-row">
        
        {/* ── Left Side: Blue Gradient & Content ── */}
        <div className="relative z-10 flex flex-1 flex-col justify-center p-6 sm:p-8 md:p-10">
          
          <div className="mb-2 inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange animate-pulse" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-blue-200">
              Broadcast Network
            </span>
          </div>

          <h2 className="font-sans text-2xl font-black uppercase tracking-tight text-white sm:text-3xl md:text-4xl">
            Where to Watch
          </h2>
          
          <p className="mt-2 text-sm font-medium text-blue-200/80 max-w-sm">
            Available across satellite and streaming platforms.
          </p>

          {/* Naked Platform Logos (Badges) */}
          <div className="mt-6 flex flex-wrap items-center gap-4">
            {whereToWatchData.ottLinks.map((link) => (
              <Image
                key={link.platform}
                src={link.iconUrl}
                alt={link.platform}
                width={135}
                height={45}
                className="h-10 w-auto object-contain drop-shadow-sm transition-transform hover:scale-105"
              />
            ))}
          </div>

          {/* Action Button */}
          <div className="mt-8">
            <Link
              href="/where-to-watch"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-orange px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-black transition-all hover:scale-105 hover:bg-white"
            >
              See All Platforms
              <PlayCircle className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {/* ── Right Side: Image ── */}
        <div className="relative min-h-[220px] w-full shrink-0 md:min-h-[280px] md:w-2/5 lg:w-[45%]">
          
          {/* Blend Gradient (Desktop) - Fades the image seamlessly into the blue background */}
          <div className="absolute inset-y-0 left-0 z-10 hidden w-24 bg-gradient-to-r from-[#1A365D] to-transparent md:block" />
          
          {/* Blend Gradient (Mobile) - Fades the image up into the blue background */}
          <div className="absolute inset-x-0 top-0 z-10 h-16 w-full bg-gradient-to-b from-[#1A365D] to-transparent md:hidden" />
          
          <Image
            src="/images/where-to-watch/imageWatch.png"
            alt="Watch on our platforms"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 45vw"
          />
        </div>

      </div>
    </section>
  );
}