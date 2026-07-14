"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setIsScrolled(currentScrollY > 20);
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <div
        className={`fixed left-0 top-0 z-50 w-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isHidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        {/* Thin top accent bar */}
        <div className="flex h-6 w-full items-center justify-center bg-brand-orange px-4">
          <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white">
            24/7 Broadcast
          </span>
        </div>

        {/* Main header – reduced vertical padding */}
        <header
          className={`w-full transition-all duration-300 ${
            isScrolled
              ? "bg-white/90 backdrop-blur-lg border-b border-neutral-200/60 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]"
              : "bg-white border-b border-neutral-100"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2.5 lg:py-3">
            {/* Logo & Brand */}
            <Link
              href="/"
              className="group flex items-center gap-2.5 transition-transform hover:scale-[0.98]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Image
                src="/images/shared/logo.webp"
                alt={siteConfig.name}
                width={32}
                height={32}
                priority
                className="h-6 w-auto shrink-0 drop-shadow-sm"
              />
              <span className="flex items-center gap-1">
                <span className="text-sm font-black tracking-tight text-brand-navy">
                  {siteConfig.name}
                </span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 13 13"
                  fill="none"
                  className="shrink-0"
                  aria-label="Verified Network"
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

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-6 lg:flex">
              {siteConfig.navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative py-1 text-xs font-bold uppercase tracking-wide text-brand-navy transition-colors duration-300 after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-brand-orange after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-brand-orange hover:after:scale-x-100"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/advertise"
                className="ml-2 rounded-full bg-brand-navy px-5 py-2 text-xs font-bold uppercase tracking-wide text-white transition-all duration-300 hover:bg-brand-orange hover:shadow-lg hover:shadow-brand-orange/20"
              >
                Advertise
              </Link>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
              className="group flex h-9 w-9 items-center justify-center rounded-full bg-neutral-50 text-brand-navy transition-all duration-300 hover:bg-brand-orange hover:text-white lg:hidden"
            >
              {isMobileMenuOpen ? (
                <X className="h-4 w-4 transition-transform group-hover:rotate-90" />
              ) : (
                <Menu className="h-4 w-4 transition-transform group-hover:scale-110" />
              )}
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-between bg-white px-6 pb-12 pt-[88px] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-2 mt-4">
          {siteConfig.navLinks.map((link, idx) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`group flex items-baseline gap-4 border-b border-neutral-100 py-5 transition-all duration-500 ${
                isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
              }`}
              style={{ transitionDelay: `${idx * 75 + 100}ms` }}
            >
              <span className="font-mono text-sm font-medium text-neutral-300 transition-colors group-hover:text-brand-orange">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span className="text-3xl font-black uppercase tracking-tighter text-brand-navy transition-all duration-300 group-hover:translate-x-2 group-hover:text-brand-orange">
                {link.label}
              </span>
            </Link>
          ))}
        </nav>

        <div
          className={`mt-auto flex flex-col gap-4 border-t border-neutral-100 pt-8 transition-all duration-700 delay-300 ${
            isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <Link
            href="/advertise"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex w-full items-center justify-center rounded-full bg-brand-orange py-4 text-sm font-bold uppercase tracking-wide text-white transition-transform active:scale-95"
          >
            Advertise With Us
          </Link>
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
            {siteConfig.name} • ESPACE TV NETWORK
          </p>
        </div>
      </div>
    </>
  );
}