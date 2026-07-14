"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AdvertiseCTA() {
  return (
    <section className="bg-white px-6 py-12 md:px-8 md:py-16">
      
      {/* ── Floating Inset Card ── */}
      <div className="mx-auto flex w-full max-w-7xl flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 md:flex-row">
        
        {/* ── Left Side: Content & Typography ── */}
        <div className="flex flex-1 flex-col items-start justify-center p-8 md:p-12">
          
          {/* Stripped down to just clean, structural typography */}
          <span className="mb-3 block font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-400">
            Commercial Partnerships
          </span>
          
          <h2 className="font-sans text-2xl font-bold uppercase tracking-tight text-brand-navy md:text-3xl">
            Advertise With Us
          </h2>
          
          <p className="mt-2 max-w-md text-sm leading-relaxed text-neutral-600 md:text-base">
            Reach a growing audience across satellite, cable, and OTT platforms. Integrate your brand directly into our broadcast ecosystem.
          </p>

          <div className="mt-8">
            <Link
              href="/advertise"
              className="group flex w-max items-center gap-3 bg-brand-navy px-6 py-3.5 font-sans text-[11px] font-bold uppercase tracking-widest text-white shadow-sm transition-colors duration-200 hover:bg-brand-orange hover:text-black"
            >
              <span>Explore Opportunities</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
          
        </div>

        {/* ── Right Side: Image Masking ── */}
        <div className="relative min-h-[240px] w-full shrink-0 md:min-h-full md:w-2/5 lg:w-[45%]">
          
          {/* Gradients to seamlessly blend the image into the neutral card background */}
          <div className="absolute inset-y-0 left-0 z-10 hidden w-24 bg-gradient-to-r from-neutral-50 to-transparent md:block" />
          <div className="absolute inset-x-0 top-0 z-10 h-24 w-full bg-gradient-to-b from-neutral-50 to-transparent md:hidden" />
          
          <Image
            src="/images/hero/hero2.png" 
            alt="Broadcast studio environment"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 45vw"
          />
        </div>
        
      </div>
    </section>
  );
}