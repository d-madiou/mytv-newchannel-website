"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";

const landingNavLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "What's On", href: "#whats-on" },
  { label: "PSAs & Campaigns", href: "#psas-campaigns" },
  { label: "Updates", href: "#updates" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo - Exact Match */}
        <Link href="#home" className="flex flex-col leading-none">
          <span className="text-[28px] font-black uppercase tracking-tight text-[#F37A20]">
            SIARA<span className="text-[17px] align-top">TV</span>
          </span>
          <span className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.25em] text-[#002B4A]/70">
            Inform &bull; Connect &bull; Empower
          </span>
        </Link>

        {/* Nav Links - Fixed Syntax */}
        <nav className="hidden items-center gap-8 lg:flex">
          {landingNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-bold uppercase tracking-wider text-black/80 transition-colors hover:text-[#F37A20]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Badge - Exact Match */}
        <div className="hidden flex-col items-end rounded-md bg-[#002B4A] px-5 py-2 text-right sm:flex">
          <span className="text-[8px] font-medium uppercase tracking-widest text-white/60">
            A Channel by
          </span>
          <span className="text-[11px] font-bold uppercase tracking-wide text-white">
            MYTV Broadcasting
          </span>
        </div>
        
      </div>
    </header>
  );
}