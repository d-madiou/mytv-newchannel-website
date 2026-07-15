"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { heroData } from "@/data/hero";

const ROTATE_INTERVAL_MS = 6000;

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [filled, setFilled] = useState(false);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const totalPrograms = heroData?.featuredPrograms?.length || 0;

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalPrograms);
    }, ROTATE_INTERVAL_MS);
  }, [totalPrograms]);

  useEffect(() => {
    if (totalPrograms > 0) startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer, totalPrograms]);

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
    <section className="relative flex min-h-[90svh] w-full flex-col justify-center bg-[#0b192c] lg:min-h-[95vh]">
      
      {/* ── Full-Bleed Background Carousel ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {heroData.backgroundImages.map((src, idx) => (
          <div
            key={src}
            className={`absolute inset-0 h-full w-full transition-opacity ease-in-out duration-[1200ms] ${
              idx === activeIndex
                ? "z-10 opacity-100"
                : "z-0 opacity-0"
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

        {/* Deep Blue gradient masks adjusted for both mobile & desktop text legibility */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0b192c] via-[#0b192c]/80 to-transparent md:w-3/4 lg:w-[70%]" />
        <div className="absolute inset-x-0 bottom-0 z-10 h-2/3 bg-gradient-to-t from-[#0b192c] via-[#0b192c]/80 to-transparent md:h-1/2" />
      </div>

      {/* ── Main Layout Container (Left-aligned text block) ── */}
      {/* Increased padding to naturally expand the overall height */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 pt-28 pb-32 md:px-12 md:py-32">
        
        {/* Logo Placement */}
        {heroData.logoUrl && (
          <div className="mb-10 md:mb-12">
            <Image
              src={heroData.logoUrl}
              alt="Logo"
              width={120}
              height={40}
              className="h-8 w-auto object-contain md:h-10"
            />
          </div>
        )}

        <div className="flex max-w-3xl flex-col items-start">
          
          {/* Eyebrow Text */}
          {heroData.badge && (
            <span className="mb-3 font-sans text-[10px] font-bold uppercase tracking-widest text-[#FFC107] sm:text-xs md:mb-4 md:text-sm">
              {heroData.badge}
            </span>
          )}

          {/* Main Headline */}
          <h1 
            key={`title-${activeIndex}`}
            className="animate-in fade-in slide-in-from-bottom-4 mb-4 font-sans text-4xl font-bold uppercase leading-[1.05] tracking-tight text-white duration-700 sm:text-5xl md:mb-6 md:text-6xl lg:text-7xl"
          >
            {activeProgram.title}
          </h1>

          {/* Paragraph Description */}
          <p 
            key={`desc-${activeIndex}`}
            className="animate-in fade-in slide-in-from-bottom-4 mb-8 max-w-2xl font-sans text-sm leading-relaxed text-white/90 duration-700 delay-100 sm:text-base md:mb-10 md:text-lg"
          >
            {activeProgram.description}
          </p>

          {/* Buttons Layout */}
          <div className="mb-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center md:mb-12">
            
            {/* Primary Button */}
            {heroData.ctaUrl && heroData.ctaText && (
              <Link
                href={heroData.ctaUrl}
                className="group flex w-full items-center justify-center gap-3 bg-[#FFC107] px-8 py-3.5 font-sans text-sm font-bold uppercase tracking-wider text-black transition-transform hover:scale-105 sm:w-auto"
              >
                <span>{heroData.ctaText}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            )}

            {/* Secondary Button */}
            <Link
              href="/program"
              className="flex w-full items-center justify-center border border-white/80 px-8 py-3.5 font-sans text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-black sm:w-auto"
            >
              View Schedule
            </Link>
            
          </div>

          {/* "Watch Live On" Partner Logos */}
          <div className="flex flex-col gap-3 border-t border-white/15 pt-6 sm:gap-4 sm:pt-8">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-white/60">
              Watch Live On
            </span>
            <div className="flex items-center gap-5 sm:gap-6">
              <Image
                src="/images/hero/mana.png"
                alt="Mana"
                width={110}
                height={36}
                className="h-7 w-auto object-contain transition-transform hover:scale-105 sm:h-8 lg:h-9"
              />
              <div className="h-5 w-px bg-white/30" />
              <Image
                src="/images/where-to-watch/mytv.png"
                alt="MYTV"
                width={130}
                height={36}
                className="h-7 w-auto object-contain transition-transform hover:scale-105 sm:h-8 lg:h-9"
              />
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom Carousel Controls ── */}
      <div className="absolute bottom-0 right-0 z-30 w-full p-6 sm:w-auto md:p-12 md:pb-10">
        <div className="flex items-center justify-between gap-4 sm:justify-end sm:gap-6">
          
          {/* Progress Dots */}
          <div className="flex gap-2">
            {heroData.featuredPrograms.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToIndex(idx)}
                className={`h-1.5 transition-all duration-300 ${
                  idx === activeIndex
                    ? "w-8 bg-[#FFC107]"
                    : "w-1.5 bg-white/40 hover:bg-white"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="hidden h-4 w-px bg-white/30 sm:block" />

          {/* Nav Arrows */}
          <div className="flex gap-2">
            <button
              onClick={goToPrev}
              aria-label="Previous"
              className="flex h-10 w-10 items-center justify-center border border-white/20 text-white transition-colors hover:border-[#FFC107] hover:bg-[#FFC107] hover:text-black"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={goToNext}
              aria-label="Next"
              className="flex h-10 w-10 items-center justify-center border border-white/20 text-white transition-colors hover:border-[#FFC107] hover:bg-[#FFC107] hover:text-black"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
          
        </div>
      </div>
      
    </section>
  );
}