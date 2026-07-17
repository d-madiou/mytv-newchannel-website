"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { contactData } from "@/data/contact";

const quickLinks = [
  { label: "About SIARA TV", href: "#about" },
  { label: "What's On", href: "#whats-on" },
  { label: "Contact Us", href: "#contact" },
];

const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  if (!href.startsWith("#")) return;

  e.preventDefault();

  const targetId = href.replace("#", "");
  const element = document.getElementById(targetId);

  if (element) {
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth",
    });
  }
};

export default function Footer() {
  return (
    <footer className="relative bg-white">
      {/* Pro UI Asymmetric Top Border */}
      <div className="flex h-1.5 w-full">
        <div className="bg-[#002B4A] flex-grow" />
        <div className="bg-[#F37A20] w-24 sm:w-48 lg:w-72" />
      </div>

      <div className="mx-auto max-w-[1400px] px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* 1. Brand Block – replaced text with logo */}
          <div className="flex flex-col justify-center gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400">
                Brought to you by
              </span>
              <Image
                src="/images/logo/mytvb.png"
                alt="MYTV Broadcasting"
                width={140}
                height={60}
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h3 className="text-[14px] font-black uppercase tracking-[0.18em] text-[#002B4A]">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="text-[16px] font-medium text-slate-500 transition-colors duration-200 hover:text-[#F37A20]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact Us */}
          <div>
            <h3 className="text-[14px] font-black uppercase tracking-[0.18em] text-[#002B4A]">
              Contact Us
            </h3>
            <ul className="mt-5 space-y-3 text-[16px] font-medium text-slate-500">
              <li className="flex items-center gap-3 group">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center bg-slate-50 text-[#F37A20]">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <span>{siteConfig.channel.phone}</span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center bg-slate-50 text-[#F37A20]">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <Link href={`mailto:${contactData.email}`} className="hover:underline transition-colors hover:text-slate-800">
                  {contactData.email}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Baseline */}
        <div className="mt-14 border-t border-slate-100 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[13px] font-medium text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} MYTV Broadcasting Sdn Bhd.
          </div>
          <div className="flex gap-6">
            <Link href="#contact" onClick={(e) => handleSmoothScroll(e, "#contact")} className="hover:text-[#F37A20] transition-colors">Terms</Link>
            <Link href="#contact" onClick={(e) => handleSmoothScroll(e, "#contact")} className="hover:text-[#F37A20] transition-colors">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}