"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";

const landingNavLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "What's On", id: "whats-on" },
  { label: "PSAs & Campaigns", id: "psas-campaigns" },
  { label: "Updates", id: "updates" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMobileMenuOpen(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
    closeMenu();
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto flex min-h-[90px] max-w-7xl items-center justify-between pl-6 pr-6 lg:pr-0 xl:pl-0">
        
        {/* Logo & Tagline */}
        <button
          onClick={() => scrollToSection("home")}
          className="z-50 flex flex-col items-start gap-1 py-4"
        >
          <Image
            src="/images/logo/logosiara.png"
            alt={siteConfig.name}
            width={160}
            height={50}
            className="h-auto w-[130px] object-contain sm:w-[150px]"
            priority
          />
          <span className="text-[7px] font-bold tracking-[0.2em] text-brand-navy sm:text-[9px]">
            INFORM &bull; CONNECT &bull; EMPOWER
          </span>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden items-center gap-8 py-4 lg:flex">
          {landingNavLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`group relative text-[13px] font-bold uppercase tracking-wider transition-colors duration-300 ${
                  isActive ? "text-brand-orange" : "text-black/80 hover:text-brand-orange"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] w-full origin-left bg-brand-orange transition-transform duration-300 ease-out ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Desktop Right Badge */}
        <div className="hidden h-[90px] flex-col items-center justify-center bg-[#182C45] px-10 lg:flex">
          <span className="mb-1.5 text-[9px] font-bold uppercase tracking-widest text-white/90">
            A Channel by
          </span>
          <Image
            src="/images/where-to-watch/mytv.png"
            alt="MYTV Broadcasting"
            width={110}
            height={35}
            className="h-auto w-[100px] object-contain"
          />
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="z-50 rounded-md p-2 text-black/80 transition-colors hover:bg-gray-100 hover:text-brand-orange focus:outline-none lg:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-7 w-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-7 w-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`absolute left-0 top-[90px] w-full origin-top transform flex-col overflow-hidden bg-white shadow-xl transition-all duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? "max-h-[500px] border-t opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4">
          {landingNavLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`block border-b border-gray-100 py-4 text-left text-[14px] font-bold uppercase tracking-wider transition-colors last:border-0 ${
                  isActive ? "text-brand-orange" : "text-black/80 hover:text-brand-orange"
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        <div className="flex flex-col items-center justify-center bg-[#182C45] py-6">
          <span className="mb-2 text-[10px] font-bold uppercase tracking-widest text-white/90">
            A Channel by
          </span>
          <Image
            src="/images/where-to-watch/mytv.png"
            alt="MYTV Broadcasting"
            width={110}
            height={35}
            className="h-auto w-[100px] object-contain"
          />
        </div>
      </div>
    </header>
  );
}