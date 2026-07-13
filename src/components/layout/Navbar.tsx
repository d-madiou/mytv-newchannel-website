"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export default function Navbar() {
  return (
    <>
      {/* Top accent bar – thinner, compact */}
      <div className="flex h-6 w-full items-center justify-center bg-brand-orange">
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white">
          Siaran 24 Jam
        </span>
      </div>

      <header className="w-full border-b border-border bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          {/* Logo + brand name + verified badge */}
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/images/shared/logo.webp"
              alt={siteConfig.name}
              width={36}
              height={36}
              priority
              className="h-7 w-auto shrink-0"
            />
            <span className="flex items-center gap-1.5">
              <span className="text-sm font-bold tracking-tight text-brand-navy">
                {siteConfig.name}
              </span>
              {/* Blue verification checkmark – Facebook-style */}
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                className="shrink-0"
                aria-label="Verified"
              >
                <circle cx="6.5" cy="6.5" r="6.5" fill="#1877F2" />
                <path
                  d="M4 6.5l1.5 1.5 3-3"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>

          {/* Main navigation */}
          <nav className="flex items-center gap-6">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-xs font-semibold uppercase tracking-wide text-black transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-brand-orange after:transition-all hover:text-brand-navy hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}