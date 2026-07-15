"use client";

import Link from "next/link";
import Image from "next/image";
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
        
        {/* Logo - Using Real Image */}
        <Link href="#home" className="flex items-center">
          <Image
            src="/images/logo/logosiara.png"
            alt={siteConfig.name}
            width={140}
            height={40}
            className="h-auto w-[130px] object-contain"
            priority
          />
        </Link>

        {/* Nav Links */}
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

        {/* Right Badge */}
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