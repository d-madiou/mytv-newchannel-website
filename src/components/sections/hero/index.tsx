"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { heroData } from "@/data/hero";

const ROTATE_INTERVAL_MS = 6000;

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalPrograms = heroData.featuredPrograms.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalPrograms);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [totalPrograms]);

  const goToPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? totalPrograms - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalPrograms);
  };

  if (!heroData || totalPrograms === 0) return null;

  const activeProgram = heroData.featuredPrograms[activeIndex];

  return (
    <section className="relative flex min-h-[75svh] w-full flex-col justify-end overflow-hidden bg-white lg:min-h-[85svh]">
      {/* ── Cinematic Backgrounds ── */}
      <div className="absolute inset-0 z-0 bg-brand-navy">
        {heroData.backgroundImages.map((src, idx) => (
          <div
            key={src}
            className={`absolute inset-0 transition-all duration-[1.5s] ease-out ${
              idx === activeIndex
                ? "z-10 scale-100 opacity-100"
                : "z-0 scale-105 opacity-0"
            }`}
          >
            <Image
              src={src}
              alt="Featured program background"
              fill
              className="object-cover"
              priority={idx === 0}
            />
          </div>
        ))}

        {/* Reduced top gradient, strong bottom for readability */}
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-brand-navy/30 via-transparent to-transparent" />
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent" />
      </div>

      {/* ── Main Content Overlay ── */}
      <div className="relative z-30 mx-auto flex h-full w-full max-w-7xl flex-col justify-between px-6 pb-12 pt-8 md:px-8 md:pb-16 md:pt-16">
        {/* Top: Badge & Network Logo */}
        <div className="flex items-start justify-between">
          <div className="inline-flex items-center gap-3 bg-brand-orange px-4 py-2 shadow-lg">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
              Featured Program
            </span>
          </div>
        </div>

        {/* Bottom Area: Watch On, Title & Carousel */}
        <div className="mt-auto flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          {/* Left: Watch On logos → then program title */}
          <div className="max-w-3xl space-y-5">
            {/* Watch On row – larger logos, immediately after badge */}
            <div className="flex items-center gap-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-white/70">
                Watch on
              </span>
              <div className="flex items-center gap-4">
                <Image
                  src="/images/hero/mana.png"
                  alt="Mana"
                  width={72}
                  height={32}
                  className="h-8 w-auto object-contain"
                />
                <div className="h-6 w-px bg-white/40" />
                <Image
                  src="/images/where-to-watch/mytv.png"
                  alt="MYTV"
                  width={88}
                  height={32}
                  className="h-8 w-auto object-contain"
                />
              </div>
            </div>

            {/* Program title – compact, after logos */}
            <h1
              key={activeProgram.id}
              className="animate-in slide-in-from-bottom-4 fade-in duration-700 font-sans text-2xl font-extrabold uppercase tracking-tight text-white sm:text-3xl lg:text-4xl"
            >
              {activeProgram.title}
            </h1>
          </div>

          {/* Right: Program Posters Carousel */}
          <div className="flex flex-col gap-4 border-t border-white/20 pt-6 lg:border-t-0 lg:pt-0 shrink-0">
            <div className="flex items-center justify-between lg:justify-end gap-6">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50">
                Up Next
              </span>

              <div className="flex gap-1">
                <button
                  onClick={goToPrev}
                  className="flex h-8 w-8 items-center justify-center border border-white/20 bg-brand-navy/40 backdrop-blur-md transition-colors hover:bg-brand-orange hover:text-black"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={goToNext}
                  className="flex h-8 w-8 items-center justify-center border border-white/20 bg-brand-navy/40 backdrop-blur-md transition-colors hover:bg-brand-orange hover:text-black"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Poster Track */}
            <div className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-hide lg:pb-0">
              {heroData.featuredPrograms.map((program, idx) => (
                <button
                  key={program.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`group relative aspect-[16/9] w-32 shrink-0 overflow-hidden border transition-all duration-500 sm:w-40 md:w-48 ${
                    idx === activeIndex
                      ? "border-brand-orange ring-1 ring-brand-orange scale-100 opacity-100"
                      : "border-white/10 opacity-40 hover:opacity-100 hover:border-white/40 scale-95"
                  }`}
                >
                  <Image
                    src={program.posterUrl}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 128px, 192px"
                  />
                  <div
                    className={`absolute inset-0 bg-brand-navy/40 transition-opacity ${
                      idx === activeIndex
                        ? "opacity-0"
                        : "opacity-100 group-hover:opacity-50"
                    }`}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-2">
                    <p className="text-left text-[9px] font-bold lowercase tracking-wider text-white line-clamp-1">
                      {program.title}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}