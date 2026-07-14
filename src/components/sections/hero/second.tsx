"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { heroData } from "@/data/hero";

const ROTATE_INTERVAL_MS = 6000;

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [filled, setFilled] = useState(false);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const totalPrograms = heroData.featuredPrograms.length;

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalPrograms);
    }, ROTATE_INTERVAL_MS);
  }, [totalPrograms]);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  useEffect(() => {
    setFilled(false);
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => setFilled(true));
    });
    return () => cancelAnimationFrame(raf);
  }, [activeIndex]);

  const goToPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? totalPrograms - 1 : prev - 1));
    startTimer();
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalPrograms);
    startTimer();
  };

  const goToIndex = (idx: number) => {
    setActiveIndex(idx);
    startTimer();
  };

  if (!heroData || totalPrograms === 0) return null;

  const activeProgram = heroData.featuredPrograms[activeIndex];

  return (
    <section className="relative flex min-h-[90vh] w-full flex-col justify-between bg-brand-navy pt-24 text-white">
      
      {/* ── Background Carousel with Custom Gradient Stack ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {heroData.backgroundImages.map((src, idx) => (
          <div
            key={src}
            className={`absolute inset-0 h-full w-full transition-all ease-in-out duration-[1200ms] ${
              idx === activeIndex
                ? "z-10 opacity-85 scale-100" // Elevated opacity so the top is perfectly clear and crisp
                : "z-0 opacity-0 scale-105"
            }`}
          >
            <Image
              src={src}
              alt=""
              fill
              priority={idx === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        ))}
        
        {/* 
          Gradient Stack:
          - Starts fully solid/opaque brand-navy at the absolute base.
          - Blends beautifully through the content mid-section.
          - Terminates into 100% transparent space at the top.
        */}
        <div className="absolute inset-x-0 bottom-0 z-20 h-full bg-gradient-to-t from-brand-navy via-brand-navy/85 to-transparent" />
      </div>

      {/* ── Main Layout Container ── */}
      <div className="relative z-30 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-between px-6 py-12 md:px-12 md:py-16">
        
        {/* Top Section: Corporate Brand Header (Clean, crystal clear zone) */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          <div className="relative h-9 w-28 md:h-10 md:w-36">
            <Image
              src={heroData.logoUrl}
              alt="Arus TV"
              fill
              priority
              className="object-contain object-left"
            />
          </div>
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-white/80">
              {heroData.badge}
            </span>
          </div>
        </div>

        {/* Middle Section: Sophisticated Two-Column Info Box */}
        <div className="grid grid-cols-1 gap-12 py-16 md:py-24 lg:grid-cols-12 lg:items-end lg:gap-20">
          
          {/* Left Column: Mission / Tagline statement */}
          <div className="space-y-6 lg:col-span-7">
            <h2 className="font-sans text-3xl font-extrabold uppercase leading-[1.05] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Broadcasting <br />
              <span className="text-brand-orange">with purpose.</span>
            </h2>
            <p className="max-w-xl font-sans text-base leading-relaxed text-white/90 md:text-lg">
              {heroData.tagline}
            </p>
            
            <div className="pt-2">
              <a
                href={heroData.ctaUrl}
                className="group inline-flex items-center gap-3 bg-brand-orange px-6 py-3.5 font-sans text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-white"
              >
                <span>{heroData.ctaText}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right Column: Featured Program Information card */}
          <div className="space-y-8 border-t border-white/10 pt-8 lg:col-span-5 lg:border-t-0 lg:pt-0 lg:pl-10">
            <div className="space-y-3">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand-orange">
                Now Showcasing
              </span>
              <h3 className="font-sans text-2xl font-bold tracking-tight text-white transition-all duration-500">
                {activeProgram.title}
              </h3>
              <p className="font-sans text-sm leading-relaxed text-white/80">
                {activeProgram.description}
              </p>
            </div>

            {/* Premium, Simple Watch-On Partners Segment */}
            <div className="space-y-3">
              <span className="block font-mono text-[9px] font-bold uppercase tracking-widest text-white/40">
                Watch Live On
              </span>
              <div className="flex items-center gap-5">
                <div className="relative h-5 w-14 opacity-80 transition-opacity hover:opacity-100">
                  <Image
                    src="/images/hero/mana.png"
                    alt="Mana"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <div className="h-3.5 w-px bg-white/20" />
                <div className="relative h-5 w-14 opacity-80 transition-opacity hover:opacity-100">
                  <Image
                    src="/images/where-to-watch/mytv.png"
                    alt="MYTV"
                    fill
                    className="object-contain object-left"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ── Bottom Section: Minimalist University/Agency Carousel Indicators ── */}
      <div className="relative z-30 border-t border-white/10 bg-brand-navy px-6 py-6 backdrop-blur-md md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          
          {/* Numeric Timeline Indicator & Running Progress Line */}
          <div className="flex flex-1 items-center gap-6">
            <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-white/50">
              <span className="text-white">0{activeIndex + 1}</span>
              <span>/</span>
              <span>0{totalPrograms}</span>
            </div>
            
            {/* Minimal Horizontal Navigation Track */}
            <div className="relative h-[2px] max-w-xs flex-1 bg-white/10">
              <div
                className={`h-full bg-brand-orange transition-[width] duration-[6000ms] ease-linear ${
                  filled ? "w-full" : "w-0"
                }`}
              />
            </div>
          </div>

          {/* Simple Clean Toggle Controllers */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            {heroData.featuredPrograms.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToIndex(idx)}
                className={`h-2 w-2 rounded-full transition-all ${
                  idx === activeIndex
                    ? "bg-brand-orange w-6"
                    : "bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
            
            <div className="ml-4 h-5 w-px bg-white/25" />

            <div className="flex items-center gap-1">
              <button
                onClick={goToPrev}
                aria-label="Previous slide"
                className="flex h-8 w-8 items-center justify-center border border-white/15 text-white/60 transition-colors hover:border-brand-orange hover:text-brand-orange"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={goToNext}
                aria-label="Next slide"
                className="flex h-8 w-8 items-center justify-center border border-white/15 text-white/60 transition-colors hover:border-brand-orange hover:text-brand-orange"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}