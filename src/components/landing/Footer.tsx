import Link from "next/link";
import { siteConfig } from "@/config/site";
import { contactData } from "@/data/contact";

const quickLinks = [
  { label: "About SIARA TV", href: "#about" },
  { label: "What's On", href: "#whats-on" },
  { label: "PSAs & Campaigns", href: "#psas-campaigns" },
  { label: "Updates", href: "#updates" },
  { label: "Contact Us", href: "#contact" },
];

// SVG Helper Component to keep code clean
const SocialIcon = ({ type, className }: { type: string; className?: string }) => {
  switch (type) {
    case "facebook":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    case "instagram":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      );
    case "youtube":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    default:
      return null;
  }
};

export default function Footer() {
  return (
    <footer className="bg-white px-6 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        
        {/* 1. Brand */}
        <div className="flex flex-col">
          <span className="block text-[28px] font-black uppercase tracking-tight text-[#F37A20]">
            SIARA<span className="text-[17px] align-top">TV</span>
          </span>
          <span className="mt-0.5 block text-[9px] font-bold uppercase tracking-[0.25em] text-[#002B4A]/70">
            Inform &bull; Connect &bull; Empower
          </span>

          <div className="mt-8">
            <span className="block text-[8px] font-medium uppercase tracking-widest text-black/40">
              A CHANNEL BY
            </span>
            <span className="block text-sm font-bold uppercase tracking-wide text-[#002B4A]">
              MYTV broadcasting
            </span>
          </div>
        </div>

        {/* 2. Quick Links */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#002B4A]">
            Quick Links
          </h3>
          <ul className="mt-5 space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[14px] text-black/60 transition-colors hover:text-[#F37A20]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Connect With Us (Using SVGs) */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#002B4A]">
            Connect With Us
          </h3>
          <ul className="mt-5 space-y-3">
            {contactData.socialLinks.map((social) => (
              <li key={social.platform}>
                <Link
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[14px] text-black/60 transition-colors hover:text-[#F37A20]"
                >
                  <SocialIcon type={social.iconName} className="h-5 w-5 text-[#002B4A]" />
                  {social.platform}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 4. Contact Us (Using SVGs) */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#002B4A]">
            Contact Us
          </h3>
          <ul className="mt-5 space-y-3.5 text-[14px] text-black/60">
            <li className="flex items-center gap-3">
              <svg className="h-5 w-5 text-[#F37A20]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {siteConfig.channel.phone}
            </li>
            <li className="flex items-center gap-3">
              <svg className="h-5 w-5 text-[#F37A20]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              {contactData.email}
            </li>
            <li className="flex items-center gap-3">
              <svg className="h-5 w-5 text-[#F37A20]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" x2="22" y1="12" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              www.mytv.com.my
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="mx-auto mt-16 max-w-7xl border-t border-black/5 pt-6 text-[11px] text-black/40">
        &copy; {new Date().getFullYear()} MYTV Broadcasting Sdn Bhd. All rights reserved.
      </div>
    </footer>
  );
}