"use client";

import { contactData } from "@/data/contact";
import { Music2, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import Image from "next/image";

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

  const channels = [
    contactData.email && {
      key: "email",
      label: "Electronic Mail",
      value: contactData.email,
      freq: "88.1",
      icon: Mail,
      href: `mailto:${contactData.email}`,
    },
    contactData.phone && {
      key: "phone",
      label: "Voice Line",
      value: contactData.phone,
      freq: "94.5",
      icon: Phone,
      href: `tel:${contactData.phone.replace(/[^+\d]/g, "")}`,
    },
    contactData.address && {
      key: "address",
      label: "Studio Address",
      value: contactData.address,
      freq: "101.2",
      icon: MapPin,
      href: undefined,
    },
  ].filter(Boolean) as {
    key: string;
    label: string;
    value: string;
    freq: string;
    icon: typeof Mail;
    href?: string;
  }[];

  return (
    <section id="contact" className="scroll-mt-24 bg-white text-black">
      {/* ── Top banner with background image ── */}
      <div className="relative flex h-[35vh] min-h-[280px] w-full flex-col justify-end overflow-hidden pt-[88px]">
        <Image
          src="/images/where-to-watch/imageWatch.png"
          alt="Contact Arus TV"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent" />

        {/* Headline inside the banner */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-8 md:px-8 md:pb-10">
          <div className="flex items-end justify-between border-b border-white/20 pb-4">
            <div>
              <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.25em] text-brand-orange">
                Get in Touch
              </span>
              <h2 className="font-sans text-2xl font-black uppercase tracking-tight text-white sm:text-3xl lg:text-4xl">
                Contact Us
              </h2>
            </div>
            <span className="hidden font-mono text-xs tabular-nums text-white/50 sm:block">
              04 / 04
            </span>
          </div>
        </div>
      </div>

      {/* ── Contact channels + socials ── */}
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* ── Left: headline ── */}
          <div className="lg:col-span-4">
            <h3 className="max-w-xs font-sans text-2xl font-semibold leading-[1.15] tracking-tight text-brand-navy sm:text-3xl md:text-4xl lg:sticky lg:top-28">
              Reach the studio, on any line.
            </h3>
          </div>

          {/* ── Right: frequency directory ── */}
          <div className="lg:col-span-8">
            <ul className="border-t border-neutral-200">
              {channels.map((channel) => {
                const Icon = channel.icon;
                const isLink = Boolean(channel.href);
                const Wrapper = isLink ? "a" : "div";

                return (
                  <li key={channel.key}>
                    <Wrapper
                      {...(isLink ? { href: channel.href } : {})}
                      className={`group flex items-center gap-5 border-b border-neutral-200 py-5 transition-colors md:gap-8 md:py-6 ${
                        isLink ? "cursor-pointer hover:bg-neutral-50" : ""
                      }`}
                    >
                      <span className="hidden w-14 shrink-0 font-mono text-xs tabular-nums text-brand-orange sm:block">
                        {channel.freq}
                      </span>

                      <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-brand-navy text-white transition-colors group-hover:bg-brand-orange group-hover:text-black">
                        <Icon className="h-4 w-4" />
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="block text-[10px] font-semibold uppercase tracking-widest text-neutral-400">
                          {channel.label}
                        </span>
                        <span className="block truncate text-sm font-semibold text-brand-navy sm:text-base">
                          {channel.value}
                        </span>
                      </span>

                      {isLink && (
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-neutral-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-navy" />
                      )}
                    </Wrapper>
                  </li>
                );
              })}
            </ul>

            {/* Social links */}
            {contactData.socialLinks && contactData.socialLinks.length > 0 && (
              <div className="mt-10">
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-neutral-400">
                  Follow the Signal
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
                        className="group flex items-center gap-2.5 border border-neutral-200 px-4 py-3 transition-colors hover:border-brand-navy hover:bg-brand-navy"
                      >
                        {Icon && (
                          <Icon className="h-4 w-4 text-neutral-500 transition-colors group-hover:text-white" />
                        )}
                        <span className="text-xs font-medium capitalize text-neutral-500 transition-colors group-hover:text-white">
                          {social.platform}
                        </span>
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