"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AdvertiseCTA() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* ── Architectural Split Container ── */}
        <div className="relative flex flex-col border border-neutral-200 bg-white shadow-2xl shadow-brand-navy/5 lg:flex-row">
          
          {/* ── Left Side: Content & Typography ── */}
          <div className="flex flex-1 flex-col items-start justify-center border-b border-neutral-200 p-10 sm:p-16 lg:border-b-0 lg:border-r lg:p-24">
            
            {/* Structural Eyebrow */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-0.5 w-6 bg-brand-orange" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                Commercial Partnerships
              </span>
            </div>
            
            <h2 className="mb-6 font-sans text-4xl font-black uppercase leading-[0.95] tracking-tight text-brand-navy sm:text-5xl">
              Advertise <br className="hidden sm:block" /> With Us.
            </h2>
            
            <p className="mb-10 max-w-md font-sans text-sm leading-relaxed text-neutral-500">
              Reach a growing audience across satellite, cable, and OTT platforms. Integrate your brand directly into our broadcast ecosystem with premium placement and targeted campaigns.
            </p>

            {/* Signature Animated CTA */}
            <Link
              href="/advertise"
              className="group relative inline-flex items-center gap-6 overflow-hidden bg-brand-navy py-3 pl-8 pr-3 shadow-lg transition-all duration-500 hover:shadow-xl hover:shadow-brand-orange/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2"
            >
              <span className="absolute inset-0 z-0 h-full w-full origin-left scale-x-0 bg-brand-orange transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
              
              <span className="relative z-10 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors duration-300 group-hover:text-brand-navy">
                Explore Opportunities
              </span>
              
              <span className="relative z-10 flex h-10 w-10 items-center justify-center bg-white/10 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-brand-navy/10">
                <ArrowRight className="h-4 w-4 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-brand-navy" />
              </span>
            </Link>
            
          </div>

          {/* ── Right Side: Hard-Edge Image Masking ── */}
          <div className="group relative min-h-[350px] w-full shrink-0 overflow-hidden bg-brand-navy lg:w-[45%]">
            
            <Image
              src="/images/hero/hero2.png" 
              alt="Broadcast studio environment"
              fill
              className="object-cover grayscale transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:grayscale-0"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            
            {/* Stark dark multiply overlay instead of a soft gradient fade */}
            <div className="absolute inset-0 bg-brand-navy/30 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-0" />
            
            {/* Geometric Corner Accent */}
            <div className="absolute bottom-0 right-0 flex h-16 w-16 items-center justify-center bg-brand-orange">
              <div className="h-2 w-2 bg-brand-navy" />
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}