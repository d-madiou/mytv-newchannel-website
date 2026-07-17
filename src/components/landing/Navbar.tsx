"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";

// Brought back "What's On", removed "Updates"
const landingNavLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "What's On", id: "whats-on" },
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
      {/* Reduced min-height from 90px to 70px and cut inner padding */}
      <div className="mx-auto flex min-h-[70px] max-w-7xl items-center justify-between pl-4 pr-4 lg:pr-6 xl:pl-0 xl:pr-0">
        
        {/* Logo Only - Reduced padding from py-4 to py-2 */}
        <button
          onClick={() => scrollToSection("home")}
          className="z-50 flex items-center py-2"
        >
          <Image
            src="/images/logo/Untitled-1.png"
            alt={siteConfig.name}
            width={180}
            height={70}
            className="h-auto w-[110px] object-contain sm:w-[130px]"
            priority
          />
        </button>

        {/* Desktop Nav Links - Reduced gap from gap-10 to gap-6 */}
        <nav className="hidden items-center gap-6 py-2 lg:flex">
          {landingNavLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`group relative text-[15px] font-bold uppercase tracking-wider transition-colors duration-300 ${
                  isActive ? "text-[#F37A20]" : "text-black/80 hover:text-[#F37A20]"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] w-full origin-left bg-[#F37A20] transition-transform duration-300 ease-out ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle Button - Slightly reduced size */}
        <button
          className="z-50 rounded-md p-1.5 text-black/80 transition-colors hover:bg-gray-100 hover:text-[#F37A20] focus:outline-none lg:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay - Adjusted top position to match 70px height */}
      <div
        className={`absolute left-0 top-[70px] w-full origin-top transform flex-col overflow-hidden bg-white shadow-xl transition-all duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? "max-h-[500px] border-t opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-2">
          {landingNavLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`block border-b border-gray-100 py-3.5 text-left text-[15px] font-bold uppercase tracking-wider transition-colors last:border-0 ${
                  isActive ? "text-[#F37A20]" : "text-black/80 hover:text-[#F37A20]"
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}