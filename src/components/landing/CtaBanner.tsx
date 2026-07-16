"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import WatchModal from "@/components/landing/WatchModal";
import { siteConfig } from "@/config/site";

export default function CtaBanner() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:py-4">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#002B4A] px-8 py-12 sm:px-12 sm:py-16 lg:px-16">
        
        {/* Background Image Layer with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://i.pinimg.com/1200x/67/1c/e6/671ce610a0bb85a39c187bd90889cf33.jpg"
            alt=""
            fill
            priority
            className="object-cover object-center opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-orange via-brand-orange/60 to-transparent" />
        </div>

        {/* Dynamic Foreground Content */}
        <div className="relative z-10 flex flex-col items-center gap-8 lg:flex-row lg:justify-between lg:gap-12">
          
          {/* Left Block: Heading */}
          <div className="text-center lg:text-left">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-navy">
              Live Broadcasting
            </span>
            <h2 className="mt-2 text-3xl font-black uppercase leading-[1.1] tracking-tight text-white sm:text-4xl">
              Tune In to
              <br />
              SIARA TV Today
            </h2>
          </div>

          {/* Middle Block: Availability Info */}
          <div className="flex flex-col items-center border-t-2 border-white/20 pt-8 text-center text-white lg:items-start lg:border-l-2 lg:border-t-0 lg:pl-8 lg:pt-0 lg:text-left">
            <p className="text-[15px] leading-relaxed tracking-wide text-white/90">
              Available <span className="font-extrabold text-brand-navy">FREE</span> nationwide on
            </p>
            <p className="mt-1 text-lg font-black uppercase tracking-wider text-white">
              {siteConfig.channel.platform.toUpperCase()} &bull; CHANNEL {siteConfig.channel.number}
            </p>
            <p className="mt-1.5 text-[13px] font-medium text-white/60">
              No subscription or special box required.
            </p>
          </div>

          {/* Right Block: Play Button */}
          <div className="flex shrink-0 items-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-5 text-[13px] font-bold uppercase tracking-widest text-[#002B4A] shadow-xl transition-all duration-300 hover:scale-105 hover:bg-brand-orange hover:text-white"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#002B4A] text-white transition-colors duration-300 group-hover:bg-white group-hover:text-brand-orange">
                <Play className="ml-0.5 h-2.5 w-2.5 fill-current" />
              </div>
              Watch Channel {siteConfig.channel.number}
            </button>
          </div>

        </div>
      </div>

      <WatchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}