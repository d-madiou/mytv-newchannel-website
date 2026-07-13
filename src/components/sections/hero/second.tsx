"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroData } from "@/data/hero";

const ROTATE_INTERVAL_MS = 6000;

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const programs = heroData.featuredPrograms;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % programs.length);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [programs.length]);

  const goToPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? programs.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % programs.length);
  };

  return (
    <section className="relative min-h-[85vh] bg-white flex flex-col overflow-hidden">
      {/* ── Channel logo bug (top left) ── */}
      <div className="absolute top-6 left-6 z-20 flex items-center gap-2">
        <Image
          src={heroData.logoUrl}
          alt="Arus TV"
          width={40}
          height={40}
          className="h-8 w-auto rounded-full shadow-sm"
        />
        <span className="text-sm font-black uppercase tracking-wider text-brand-navy">
          Arus TV
        </span>
      </div>

      {/* ── Section heading ── */}
      <div className="relative z-10 pt-20 pb-6 text-center px-4">
        <div className="inline-flex items-center gap-3 mb-1">
          <span className="h-px w-6 bg-brand-orange" />
          <span className="text-xs font-bold uppercase tracking-[0.35em] text-brand-orange">
            Featured Programs
          </span>
        </div>
        <h2 className="text-4xl font-extrabold text-brand-navy sm:text-5xl lg:text-6xl mt-2">
          What&apos;s On Now
        </h2>
      </div>

      {/* ── Carousel container ── */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="relative w-full max-w-6xl mx-auto">
          {/* Program slides */}
          <div className="relative overflow-hidden rounded-2xl bg-neutral-100">
            {programs.map((program, idx) => (
              <div
                key={program.id}
                className={`transition-all duration-700 ease-out ${
                  idx === activeIndex
                    ? "translate-x-0 opacity-100"
                    : "absolute inset-0 translate-x-full opacity-0"
                }`}
              >
                <div className="grid md:grid-cols-2 items-center gap-0">
                  {/* Poster image */}
                  <div className="relative aspect-[4/3] md:aspect-[16/9] overflow-hidden bg-neutral-200">
                    <Image
                      src={program.posterUrl}
                      alt={program.title}
                      fill
                      className="object-cover"
                      priority={idx === activeIndex}
                    />
                  </div>

                  {/* Program title overlay on mobile / side on desktop */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent md:hidden flex items-end p-6">
                    <h3 className="text-2xl font-black uppercase tracking-tight text-white drop-shadow-lg">
                      {program.title}
                    </h3>
                  </div>

                  {/* Desktop title panel */}
                  <div className="hidden md:flex flex-col justify-center p-8 lg:p-12 bg-white h-full">
                    <div className="space-y-4">
                      <div className="h-1 w-10 bg-brand-orange" />
                      <h3 className="text-3xl lg:text-5xl font-black uppercase tracking-tight text-brand-navy">
                        {program.title}
                      </h3>
                      <p className="text-lg text-neutral-600">Watch Now</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={goToPrev}
            aria-label="Previous program"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-brand-navy shadow-lg backdrop-blur-sm transition-all hover:bg-brand-orange hover:text-white"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={goToNext}
            aria-label="Next program"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-brand-navy shadow-lg backdrop-blur-sm transition-all hover:bg-brand-orange hover:text-white"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Progress dots */}
      <div className="relative z-10 flex justify-center gap-2 pb-8 pt-6">
        {programs.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`rounded-full transition-all duration-300 ${
              idx === activeIndex
                ? "h-2 w-8 bg-brand-orange"
                : "h-2 w-2 bg-neutral-300 hover:bg-neutral-400"
            }`}
            aria-label={`Program ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}