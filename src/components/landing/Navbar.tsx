"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";

// Removed "What's On" and "PSAs & Campaigns"
const landingNavLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
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
      <div className="mx-auto flex min-h-[90px] max-w-7xl items-center justify-between pl-6 pr-6 lg:pr-6 xl:pl-0 xl:pr-0">
        
        {/* Logo Only - No tagline */}
        <button
          onClick={() => scrollToSection("home")}
          className="z-50 flex items-center py-4"
        >
          <Image
            src="/images/logo/logosiara.png"
            alt={siteConfig.name}
            width={160}
            height={50}
            className="h-auto w-[130px] object-contain sm:w-[150px]"
            priority
          />
        </button>

        {/* Desktop Nav Links - Increased Font Size */}
        <nav className="hidden items-center gap-10 py-4 lg:flex">
          {landingNavLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`group relative text-[16px] font-bold uppercase tracking-wider transition-colors duration-300 ${
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

        {/* Mobile Menu Toggle Button */}
        <button
          className="z-50 rounded-md p-2 text-black/80 transition-colors hover:bg-gray-100 hover:text-[#F37A20] focus:outline-none lg:hidden"
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

      {/* Mobile Menu Overlay - Updated to match new links */}
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
                className={`block border-b border-gray-100 py-4 text-left text-[15px] font-bold uppercase tracking-wider transition-colors last:border-0 ${
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