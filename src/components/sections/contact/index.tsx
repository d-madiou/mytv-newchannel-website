"use client";

import { contactData } from "@/data/contact";
import { Music2, Mail, Phone, MapPin } from "lucide-react";

// Inline SVGs for social brands
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

export default function Contact() {
  if (!contactData) return null;

  return (
    <section className="relative w-full overflow-hidden bg-white py-16 md:py-24 text-black">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        {/* Asymmetric Layout Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left Block: Editorial Typography */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
            <div className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-orange animate-pulse" />
              <span className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">
                Global Desk
              </span>
            </div>

            <h2 className="font-sans text-[clamp(2.5rem,6vw,5rem)] font-black uppercase leading-[0.9] tracking-tighter text-brand-navy">
              Contact<br />The Network
            </h2>

            <p className="max-w-md text-base leading-relaxed text-neutral-600 md:text-lg">
              Direct access lines to the Siara TV central production and support teams. Select your channel below.
            </p>
          </div>

          {/* Right Block: Technical Data Array */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Email Block */}
              {contactData.email && (
                <a
                  href={`mailto:${contactData.email}`}
                  className="group flex flex-col justify-between border border-neutral-200 bg-white p-6 transition-colors duration-300 hover:border-neutral-900"
                >
                  <Mail className="mb-6 h-6 w-6 text-brand-orange transition-transform duration-300 group-hover:scale-110" />
                  <div>
                    <p className="mb-1 font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                      Electronic Mail
                    </p>
                    <p className="text-sm font-bold text-brand-navy truncate">
                      {contactData.email}
                    </p>
                  </div>
                </a>
              )}

              {/* Phone Block */}
              {contactData.phone && (
                <div className="group flex flex-col justify-between border border-neutral-200 bg-white p-6 transition-colors duration-300 hover:border-neutral-900">
                  <Phone className="mb-6 h-6 w-6 text-brand-orange transition-transform duration-300 group-hover:scale-110" />
                  <div>
                    <p className="mb-1 font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                      Voice Transmission
                    </p>
                    <p className="text-sm font-bold text-brand-navy">
                      {contactData.phone}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Address Block */}
            {contactData.address && (
              <div className="group flex flex-col border border-neutral-200 bg-neutral-50 p-6 md:p-8">
                <MapPin className="mb-6 h-6 w-6 text-brand-orange" />
                <div>
                  <p className="mb-2 font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                    Physical Coordinates
                  </p>
                  <p className="max-w-sm text-sm font-bold leading-relaxed text-brand-navy">
                    {contactData.address}
                  </p>
                </div>
              </div>
            )}

            {/* Social Frequencies */}
            {contactData.socialLinks && contactData.socialLinks.length > 0 && (
              <div className="mt-4 pt-8 border-t border-neutral-200">
                <p className="mb-5 font-mono text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                  Digital Frequencies
                </p>
                <div className="flex flex-wrap gap-3">
                  {contactData.socialLinks.map((social) => {
                    const Icon = iconMap[social.iconName as keyof typeof iconMap];
                    return (
                      <a
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.platform}
                        className="group flex h-14 w-14 items-center justify-center bg-neutral-100 text-neutral-600 transition-all duration-300 hover:bg-brand-navy hover:text-white"
                      >
                        {Icon && <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />}
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}