"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import WatchModal from "@/components/landing/WatchModal";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Manual smooth scroll handler for internal anchors
  const scrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      const offset = 80; // Adjust for sticky header height
      const top = aboutSection.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="relative flex w-full items-start overflow-hidden pt-12 pb-56 sm:pt-16 sm:pb-64 lg:min-h-[750px] lg:items-center lg:py-0"
    >
      
      {/* Full Section Background Image & Overlay */}
      <div className="absolute inset-0 z-0 bg-black">
        <Image
          src="/images/hero/website-h.png"
          alt="SIARA TV Hero Background"
          fill
          priority
          className="object-cover object-bottom sm:object-center lg:object-right"
        />
        {/* OTT-Style Cinematic Gradient (Deep Black left, Transparent right) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent w-full lg:w-[85%] pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:pt-0">
        
        {/* Left-Aligned Copy */}
        <div className="max-w-lg lg:max-w-xl">
          {/* Increased Heading Size */}
          <h1 className="text-[28px] font-extrabold leading-[1.1] tracking-tight text-white sm:text-[56px] lg:text-[52px] drop-shadow-md">
            Discover What&rsquo;s On
            <br />
            MYTV
            <br />
            <span className="text-[#F37A20]">Free-to-Air Digital TV</span>
          </h1>

          {/* Increased Paragraph Size */}
          <p className="mt-6 text-[18px] leading-relaxed text-gray-300 drop-shadow-sm sm:text-[19px]">
            SIARA TV connects viewers to the latest highlights, updates, public messages and national campaigns on MYTV’s free-to-air digital TV platform.
          </p>

          {/* Increased Button Sizes */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            
            {/* Watch Now Link - stays external */}
            <Link
              href="https://mana2.my"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#F37A20] px-10 py-5 text-[14px] font-bold uppercase tracking-wider text-white shadow-lg shadow-[#F37A20]/25 transition-all hover:scale-105 hover:bg-[#ff8833] hover:shadow-xl"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
                <svg className="ml-0.5 h-3 w-3 fill-[#F37A20]" viewBox="0 0 24 24">
                  <path d="M5 3l14 9-14 9V3z" />
                </svg>
              </div>
              Watch Now
            </Link>

            {/* Learn More Link - Shortened text & Internal scroll */}
            <Link
              href="#about"
              onClick={scrollToAbout}
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/20 bg-black/20 px-10 py-5 text-[16px] font-bold uppercase tracking-wider text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white hover:text-black"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Video / Watch Modal Component */}
      <WatchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}