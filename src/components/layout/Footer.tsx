"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto max-w-7xl px-6 py-8 md:px-8 md:py-10">
        
        {/* ── Console Eyebrow Bar ── */}
        <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-4">
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-500">
            End of Transmission
          </span>
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-500">
            {currentYear}
          </span>
        </div>

        {/* ── Main Grid Layout ── */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          
          {/* ── Left Column: Brand Ident & Info ── */}
          <div className="flex flex-col items-start lg:col-span-7">
            
            <Link href="/" className="group flex items-center gap-3">
              <span className="font-sans text-3xl font-black uppercase tracking-tight text-white transition-colors duration-300 group-hover:text-brand-orange md:text-4xl">
                {siteConfig.name}
              </span>
              {/* Verified Badge */}
              <div className="flex shrink-0">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-label="Official Channel"
                >
                  <circle cx="7" cy="7" r="7" fill="#1877F2" />
                  <path
                    d="M4.5 7l1.5 1.5 3.5-3.5"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                  />
                </svg>
              </div>
            </Link>

            <p className="mt-4 max-w-sm text-sm font-medium leading-relaxed text-neutral-400">
              Saluran televisyen 24 jam baharu di bawah pengurusan{" "}
              <span className="font-bold text-white">ESPACE TV</span>.
            </p>

            {/* ── Watch On Platforms ── */}
            <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-500">
                Watch on
              </span>
              <div className="flex items-center gap-4">
                <Image
                  src="/images/hero/mana.png"
                  alt="Mana"
                  width={72}
                  height={28}
                  className="h-6 w-auto object-contain opacity-90 transition-opacity hover:opacity-100"
                />
                <div className="h-4 w-px bg-white/10" />
                <Image
                  src="/images/where-to-watch/mytv.png"
                  alt="MYTV"
                  width={88}
                  height={28}
                  className="h-6 w-auto object-contain opacity-90 transition-opacity hover:opacity-100"
                />
              </div>
            </div>

            {/* Slim "Back to Top" Block */}
            <button
              onClick={scrollToTop}
              aria-label="Kembali ke atas"
              className="group mt-8 flex h-10 items-center gap-3 bg-white/5 px-5 transition-colors duration-200 hover:bg-brand-orange"
            >
              <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-white transition-colors duration-200 group-hover:text-black">
                Back to Top
              </span>
              <ArrowUp className="h-3.5 w-3.5 text-neutral-400 transition-colors duration-200 group-hover:text-black" />
            </button>
            
          </div>

          {/* ── Right Column: Numbered Directory ── */}
          <div className="lg:col-span-5 pt-2 lg:pt-0">
            <span className="mb-3 block font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-500">
              Site Directory
            </span>
            
            <nav className="flex flex-col border-t border-white/10">
              {siteConfig.navLinks.map((link, idx) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center justify-between border-b border-white/10 py-3 transition-colors duration-300 hover:border-brand-orange"
                >
                  <div className="flex items-center gap-5">
                    <span className="font-mono text-[11px] font-bold text-neutral-500 transition-colors duration-300 group-hover:text-brand-orange">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="font-sans text-[12px] font-bold uppercase tracking-widest text-neutral-300 transition-colors duration-300 group-hover:text-white">
                      {link.label}
                    </span>
                  </div>
                  <ArrowUpRight className="h-3.5 w-3.5 text-neutral-600 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-orange" />
                </Link>
              ))}
            </nav>
          </div>
          
        </div>

        {/* ── Bottom Status Strip ── */}
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center">
          <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-500">
            &copy; {currentYear} {siteConfig.name}. Hak Cipta Terpelihara.
          </p>
          <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-500">
            MYTV Networks Malaysia
          </p>
        </div>
        
      </div>
    </footer>
  );
}