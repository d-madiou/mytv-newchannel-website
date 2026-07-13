"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* ── Top accent bar: Siaran 24 Jam ── */}
      <div className="flex h-7 w-full items-center justify-center bg-brand-orange">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
          Siaran 24 Jam
        </span>
      </div>

      {/* ── Main Header ── */}
      <header className="w-full border-b border-border bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          {/* Logo & brand name */}
          <Link
            href="/"
            className="flex items-center gap-2.5"
            onClick={() => setIsMobileMenuOpen(false)}
          >
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

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
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

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
            className="flex h-10 w-10 items-center justify-center border border-neutral-200 text-brand-navy transition-colors hover:bg-brand-orange/5 lg:hidden"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </header>

      {/* ── Mobile menu ── */}
      <div
        className={`fixed inset-0 top-[92px] z-40 flex flex-col justify-between bg-white px-6 pb-12 pt-8 transition-all duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-6">
          {siteConfig.navLinks.map((link, idx) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="group flex items-center gap-4 border-b border-neutral-100 pb-6 transition-all"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <span className="font-mono text-xs font-bold text-brand-orange">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span className="text-2xl font-black uppercase tracking-tight text-brand-navy transition-colors group-hover:text-brand-orange">
                {link.label}
              </span>
            </Link>
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-1.5 border-t border-neutral-100 pt-8">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">
            {siteConfig.name} • Official Network
          </p>
        </div>
      </div>
    </>
  );
}