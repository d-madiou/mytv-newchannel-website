"use client";

import Link from "next/link";
import Image from "next/image";
import { whereToWatchData } from "@/data/where-to-watch";
import { ArrowRight } from "lucide-react";

export default function WhereToWatchTeaser() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      {/* ── Sharp Editorial Container ── */}
      <div className="relative flex flex-col overflow-hidden bg-brand-navy shadow-2xl shadow-brand-navy/10 md:flex-row">
        
        {/* ── Left Side: Content & Typography ── */}
        <div className="relative z-10 flex flex-1 flex-col justify-center p-8 sm:p-10 md:p-12 lg:p-16">
          
          {/* Eyebrow (Professional Static Indicator) */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-0.5 w-6 bg-brand-orange" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
              Broadcast Network
            </span>
          </div>

          <h2 className="font-sans text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Where to Watch
          </h2>
          
          <p className="mt-4 max-w-md font-sans text-sm leading-relaxed text-white/70">
            Stream live broadcasts, exclusive segments, and premium programming seamlessly across our satellite and digital partner platforms.
          </p>

          {/* Platform Logos with Hover Dynamics */}
          <div className="mt-10 border-t border-white/10 pt-8">
            <span className="mb-5 block font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">
              Available Platforms
            </span>
            <div className="flex flex-wrap items-center gap-6 sm:gap-8">
              {whereToWatchData.ottLinks.map((link) => (
                <div key={link.platform} className="relative group/logo">
                  <Image
                    src={link.iconUrl}
                    alt={link.platform}
                    width={135}
                    height={45}
                    className="h-9 w-auto object-contain opacity-60 mix-blend-luminosity transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/logo:scale-105 group-hover/logo:opacity-100 group-hover/logo:mix-blend-normal sm:h-10"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-12">
            <Link
              href="/where-to-watch"
              className="group relative inline-flex items-center gap-6 overflow-hidden bg-white py-3 pl-8 pr-3 transition-all duration-500 hover:shadow-xl hover:shadow-brand-orange/10"
            >
              {/* Animated Background Fill */}
              <span className="absolute inset-0 z-0 h-full w-full origin-left scale-x-0 bg-brand-orange transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
              
              {/* Button Text */}
              <span className="relative z-10 font-mono text-xs font-bold uppercase tracking-[0.2em] text-brand-navy transition-colors duration-300 group-hover:text-white">
                View Full Guide
              </span>
              
              {/* Icon Wrapper */}
              <span className="relative z-10 flex h-10 w-10 items-center justify-center bg-brand-navy/5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-white/20">
                <ArrowRight className="h-4 w-4 text-brand-navy transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-white" />
              </span>
            </Link>
          </div>
        </div>

        {/* ── Right Side: Image with Seamless Fade ── */}
        <div className="relative min-h-[260px] w-full shrink-0 md:min-h-full md:w-[45%] lg:w-1/2">
          
          {/* Edge-to-Edge Image */}
          <Image
            src="/images/where-to-watch/imageWatch.png"
            alt="Watch on our platforms"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          {/* Smooth Blend Gradients to fade image into the navy container */}
          {/* Desktop Gradient */}
          <div className="absolute inset-y-0 left-0 z-10 hidden w-32 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-transparent md:block" />
          
          {/* Mobile Gradient */}
          <div className="absolute inset-x-0 top-0 z-10 h-24 w-full bg-gradient-to-b from-brand-navy via-brand-navy/80 to-transparent md:hidden" />
          
          {/* Subtle Editorial Overlay Noise/Texture */}
          <div className="absolute inset-0 z-20 mix-blend-overlay bg-[radial-gradient(circle,rgba(0,0,0,0.2)_1px,transparent_1px)] bg-[size:4px_4px] opacity-30" />
        </div>

      </div>
    </section>
  );
}