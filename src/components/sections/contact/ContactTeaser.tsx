"use client";

import Link from "next/link";
import { contactData } from "@/data/contact";
import { Music2, ArrowRight } from "lucide-react";

// Inline SVG components
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.32-.04-1.37-.14-2.69-.14C12.07 2 10 3.36 10 6.5v3H7v4h3v8h4v-8Z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2.5 17.5v-11c0-1.1.9-2 2-2h15c1.1 0 2 .9 2 2v11c0 1.1-.9 2-2 2h-15c-1.1 0-2-.9-2-2z" />
    <polygon points="10 8.5 16 12 10 15.5" fill="currentColor" stroke="none" />
  </svg>
);

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
  "music-2": Music2,
};

export default function ContactTeaser() {
  if (!contactData) return null;

  return (
    <section className="border-t border-neutral-200 bg-[#FAFAFA] px-6 py-16 md:px-8 md:py-24">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        
        {/* Clean typographic label */}
        <span className="mb-4 block font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-400">
          Global Desk
        </span>
        
        <h2 className="mb-4 font-sans text-2xl font-bold uppercase tracking-tight text-brand-navy md:text-3xl">
          Connect With Us
        </h2>
        
        <p className="mb-10 text-sm leading-relaxed text-neutral-600 md:text-base">
          Reach out to our production teams or stay connected across our active network channels.
        </p>

        {/* ── Side-by-Side Modular Array ── */}
        <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4">
          
          {/* Individual Blue Social Containers */}
          {contactData.socialLinks && contactData.socialLinks.length > 0 && (
            <div className="flex items-center gap-2">
              {contactData.socialLinks.map((social) => {
                const Icon = iconMap[social.iconName as keyof typeof iconMap];
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.platform}
                    className="flex h-14 w-14 items-center justify-center bg-brand-navy text-white transition-colors duration-200 hover:bg-brand-orange hover:text-black"
                  >
                    {Icon && <Icon className="h-5 w-5" />}
                  </a>
                );
              })}
            </div>
          )}

          {/* Primary Action Button */}
          <Link
            href="/contact"
            className="group flex h-14 items-center justify-center gap-3 bg-brand-navy px-8 font-sans text-[11px] font-bold uppercase tracking-widest text-white shadow-sm transition-colors duration-200 hover:bg-brand-orange hover:text-black"
          >
            <span>Access Directory</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
          
        </div>
        
      </div>
    </section>
  );
}