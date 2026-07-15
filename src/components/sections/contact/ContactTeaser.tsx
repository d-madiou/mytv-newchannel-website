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
    <section className="relative overflow-hidden bg-brand-navy py-24 md:py-32">
      
      {/* Subtle background grid accent */}
      <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay bg-[radial-gradient(circle,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:16px_16px]" />
      <div className="absolute -left-12 -top-12 z-0 h-48 w-48 border border-white/5 bg-transparent" />
      <div className="absolute bottom-0 right-0 z-0 h-px w-2/3 bg-gradient-to-l from-brand-orange to-transparent opacity-50" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          
          {/* ── Left Column: Typography & Corporate HQ ── */}
          <div className="flex flex-col items-start justify-center">
            
            {/* Structural Eyebrow */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-0.5 w-6 bg-brand-orange" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-brand-orange">
                Network Operations
              </span>
            </div>
            
            <h2 className="mb-6 font-sans text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Connect <br className="hidden sm:block" /> With Us.
            </h2>
            
            <p className="mb-12 max-w-md font-sans text-sm leading-relaxed text-white/70">
              Reach out to our production teams, submit commercial inquiries, or stay connected across our active network broadcast channels.
            </p>

            {/* Structured HQ Metadata */}
            <div className="border-l-2 border-brand-orange pl-6">
              <span className="mb-2 block font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                HQ Coordinates
              </span>
              <p className="font-sans text-sm font-bold uppercase tracking-wider text-white">
                Global Desk
              </p>
              <p className="font-sans text-xs text-white/60">
                Cyberjaya, Selangor, Malaysia
              </p>
            </div>
            
          </div>

          {/* ── Right Column: Social Matrix & Action Array ── */}
          <div className="flex flex-col justify-center border-t border-white/10 pt-10 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
            
            <span className="mb-6 block font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
              Active Frequencies
            </span>

            {/* Social Grid */}
            {contactData.socialLinks && contactData.socialLinks.length > 0 && (
              <div className="mb-12 flex flex-wrap gap-4">
                {contactData.socialLinks.map((social) => {
                  const Icon = iconMap[social.iconName as keyof typeof iconMap];
                  return (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.platform}
                      className="group flex h-16 w-16 items-center justify-center border border-white/20 bg-transparent text-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-brand-orange hover:bg-brand-orange hover:text-brand-navy hover:shadow-lg hover:shadow-brand-orange/20"
                    >
                      {Icon && <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />}
                    </a>
                  );
                })}
              </div>
            )}

            {/* Signature Animated CTA (Inverted for Dark Mode) */}
            <div>
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-6 overflow-hidden bg-white py-3 pl-8 pr-3 shadow-lg transition-all duration-500 hover:shadow-xl hover:shadow-brand-orange/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy"
              >
                <span className="absolute inset-0 z-0 h-full w-full origin-left scale-x-0 bg-brand-orange transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
                
                <span className="relative z-10 font-mono text-xs font-bold uppercase tracking-[0.2em] text-brand-navy transition-colors duration-300 group-hover:text-brand-navy">
                  Access Directory
                </span>
                
                <span className="relative z-10 flex h-10 w-10 items-center justify-center bg-brand-navy/5 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-brand-navy/10">
                  <ArrowRight className="h-4 w-4 text-brand-navy transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}