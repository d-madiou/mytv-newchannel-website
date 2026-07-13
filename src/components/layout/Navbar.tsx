"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Navbar() {
  return (
    <header className="w-full border-b border-border bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-bold text-brand-navy">
          {siteConfig.name}
        </Link>

        <nav className="flex items-center gap-6">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-black hover:text-brand-orange transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}