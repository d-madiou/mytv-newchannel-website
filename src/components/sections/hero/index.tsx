"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroData } from "@/data/hero";

const ROTATE_INTERVAL_MS = 5000;

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto rotate
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroData.backgroundImages.length);
    }, ROTATE_INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  // Manual navigation
  const goToPrev = useCallback(() => {
    setActiveIndex((prev) =>
      prev === 0 ? heroData.backgroundImages.length - 1 : prev - 1
    );
  }, []);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % heroData.backgroundImages.length);
  }, []);

  return (
    <section className="relative flex min-h-[90vh] w-full items-end overflow-hidden bg-brand-navy">
      {/* Full-bleed background carousel */}
      <div className="absolute inset-0">
        {heroData.backgroundImages.map((src, idx) => (
          <div
            key={src}
            className={`absolute inset-0 transition-all duration-[1.5s] ease-in-out ${
              idx === activeIndex
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover"
              priority={idx === 0}
            />
          </div>
        ))}

        {/* Scan-line overlay – subtle broadcast texture */}
        <div
          className="pointer-events-none absolute inset-0 z-10 bg-[repeating-linear-gradient(transparent,transparent_3px,rgba(0,0,0,0.03)_3px,rgba(0,0,0,0.03)_6px)]"
          aria-hidden="true"
        />

        {/* Directional gradient: dark at bottom for text, letting image breathe at top */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-brand-navy/95 via-brand-navy/40 to-brand-navy/10" />
      </div>

      {/* On‑air bug – top right */}
      <div className="absolute right-4 top-4 z-20 flex items-center gap-2 rounded-full bg-black/50 px-3 py-1.5 backdrop-blur-sm sm:right-8 sm:top-6">
        <div className="flex h-2.5 w-2.5 items-center justify-center rounded-full bg-brand-orange shadow-[0_0_10px_#FE7F2D]" />
        <span className="text-[11px] font-bold uppercase tracking-widest text-white">
          On Air
        </span>
        {heroData.logoUrl && (
          <Image
            src={heroData.logoUrl}
            alt=""
            width={20}
            height={20}
            className="h-5 w-5 opacity-90"
          />
        )}
      </div>

      {/* Main content – anchored bottom left */}
      <div className="relative z-20 w-full pb-12 pl-6 pr-6 sm:pb-16 sm:pl-10 md:pl-16 lg:pb-20 lg:pl-20">
        <div className="max-w-3xl space-y-5">
          {/* Accent line */}
          <div className="h-1 w-12 bg-brand-orange" />

          <h1 className="font-sans text-5xl font-black uppercase tracking-[-0.03em] text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
            {heroData.channelName}
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-white/80 sm:text-lg md:text-xl">
            {heroData.tagline}
          </p>
        </div>
      </div>

      {/* Previous / Next buttons – centered vertically */}
      <div className="absolute left-4 top-1/2 z-20 -translate-y-1/2 sm:left-6">
        <button
          onClick={goToPrev}
          aria-label="Previous slide"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/25 hover:scale-110 focus-visible:outline-2 focus-visible:outline-brand-orange"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
      </div>
      <div className="absolute right-4 top-1/2 z-20 -translate-y-1/2 sm:right-6">
        <button
          onClick={goToNext}
          aria-label="Next slide"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/25 hover:scale-110 focus-visible:outline-2 focus-visible:outline-brand-orange"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Carousel progress – bottom center (thin, interactive) */}
      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 sm:bottom-6">
        {heroData.backgroundImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`rounded-full transition-all duration-300 ${
              idx === activeIndex
                ? "h-1.5 w-8 bg-brand-orange"
                : "h-1.5 w-1.5 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}