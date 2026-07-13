"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-brand-navy px-6 pt-16 pb-8 md:px-12 md:pt-24 text-white">
      {/* ── Top Accent Bar ── */}
      <div className="absolute top-0 left-0 h-1.5 w-full bg-brand-orange" aria-hidden="true" />

      <div className="mx-auto max-w-7xl">
        {/* ── Main Footer Content ── */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          
          {/* Brand Column */}
          <div className="space-y-4 max-w-md">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <span className="font-sans text-4xl font-black uppercase tracking-tighter text-white transition-colors group-hover:text-brand-orange">
                {siteConfig.name}
              </span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 14 14"
                fill="none"
                className="shrink-0"
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
            </Link>
            <p className="text-sm font-medium tracking-wide text-white/70">
              Saluran televisyen 24 jam baharu di bawah pengurusan <span className="font-bold text-white">ESPACE TV</span>.
            </p>
          </div>

          {/* Navigation Column */}
          <nav className="flex flex-col flex-wrap gap-4 sm:flex-row sm:gap-x-12 sm:gap-y-4 lg:pt-2">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative text-sm font-bold uppercase tracking-widest text-white/80 transition-colors hover:text-brand-orange"
              >
                <span>{link.label}</span>
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-brand-orange transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>
        </div>

        {/* ── Structural Separator ── */}
        <div className="mt-16 mb-8 h-px w-full bg-white/10" />

        {/* ── Bottom Meta Bar ── */}
        <div className="flex flex-col-reverse gap-6 sm:flex-row sm:items-center sm:justify-between font-mono text-xs text-white/40">
          <div className="space-y-1">
            <p>&copy; {new Date().getFullYear()} {siteConfig.name.toUpperCase()}. Hak Cipta Terpelihara.</p>
            <p className="text-[10px] tracking-wider text-white/20">ESPACE TV NETWORKS MALAYSIA</p>
          </div>

          {/* Elegant Back to Top Control */}
          <button
            onClick={scrollToTop}
            aria-label="Kembali ke atas"
            className="group flex h-10 w-10 items-center justify-center border border-white/20 bg-white/5 transition-all hover:border-brand-orange hover:bg-brand-orange hover:text-black focus-visible:outline-2 focus-visible:outline-brand-orange"
          >
            <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
}