"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { contactData } from "@/data/contact";

const quickLinks = [
  { label: "About SIARA TV", href: "#about" },
  { label: "What's On", href: "#whats-on" },
  { label: "PSAs & Campaigns", href: "#psas-campaigns" },
  { label: "Updates", href: "#updates" },
  { label: "Contact Us", href: "#contact" },
];

// 🛡️ FIX: Manual scroll handler to prevent native hash navigation
const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  // Only intercept hash links
  if (!href.startsWith("#")) return;

  e.preventDefault(); // Prevents the browser from appending to the URL

  const targetId = href.replace("#", "");
  const element = document.getElementById(targetId);

  if (element) {
    const offset = 80; // Adjust for sticky header height
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth",
    });

    // Optional: Update the URL hash without causing a jump or history entry
    // window.history.replaceState(null, "", href); // Uncomment if you *must* update URL, otherwise keep it blank
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

      {/* Tighter, compressed layout padding for a ultra-sleek height profile */}
      <div className="mx-auto max-w-[1400px] px-6 py-10 lg:py-14">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* 1. Brand Block - Compact Layout */}
          <div className="flex flex-col justify-between gap-6">
            <div>
              <Link href="#home" onClick={(e) => handleSmoothScroll(e, "#home")}>
                <Image
                  src="/images/logo/logosiara.png"
                  alt={siteConfig.name}
                  width={130}
                  height={38}
                  className="h-auto w-[120px] object-contain"
                  priority
                />
              </Link>
              <span className="mt-1.5 block text-[9px] font-black uppercase tracking-[0.25em] text-[#002B4A]/60">
                Inform &bull; Connect &bull; Empower
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">
                A Channel By
              </span>
              <Image
                src="/images/where-to-watch/mytv.png"
                alt="MYTV Broadcasting"
                width={85}
                height={24}
                className="h-auto w-[85px] object-contain"
              />
            </div>
          </div>

          {/* 2. Quick Links - Reduced Spacing */}
          <div>
            <h3 className="text-[11px] font-black uppercase tracking-[0.18em] text-[#002B4A]">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="text-[13px] font-medium text-slate-500 transition-colors duration-200 hover:text-[#F37A20]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Social Footprint - Merged Items */}
          <div>
            <h3 className="text-[11px] font-black uppercase tracking-[0.18em] text-[#002B4A]">
              Connect With Us
            </h3>
            <ul className="mt-4 space-y-2">
              {contactData.socialLinks
                .filter((social) => !social.iconName.toLowerCase().includes("tiktok"))
                .map((social) => {
                  let svgPath = "";
                  switch (social.iconName.toLowerCase()) {
                    case "facebook":
                      svgPath = "/socialmedia/facebook-color-svgrepo-com.svg";
                      break;
                    case "instagram":
                      svgPath = "/socialmedia/instagram-2-1-logo-svgrepo-com.svg";
                      break;
                    case "youtube":
                      svgPath = "/socialmedia/youtube-color-svgrepo-com.svg";
                      break;
                    default:
                      svgPath = social.iconName;
                  }

                  return (
                    <li key={social.platform}>
                      <Link
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2.5 text-[13px] font-medium text-slate-500 transition-colors duration-200 hover:text-[#F37A20]"
                      >
                        <div className="flex h-6 w-6 items-center justify-center border border-gray-100 bg-slate-50 transition-colors group-hover:border-[#F37A20]/20 group-hover:bg-[#F37A20]/5">
                          <Image
                            src={svgPath}
                            alt={social.platform}
                            width={13}
                            height={13}
                            className="object-contain"
                          />
                        </div>
                        {social.platform}
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>

          {/* 4. Communication Nodes - Streamlined */}
          <div>
            <h3 className="text-[11px] font-black uppercase tracking-[0.18em] text-[#002B4A]">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-2.5 text-[13px] font-medium text-slate-500">
              <li className="flex items-center gap-2.5 group">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center bg-slate-50 text-[#F37A20]">
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <span>{siteConfig.channel.phone}</span>
              </li>
              <li className="flex items-center gap-2.5 group">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center bg-slate-50 text-[#F37A20]">
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <Link href={`mailto:${contactData.email}`} className="hover:underline transition-colors hover:text-slate-800">
                  {contactData.email}
                </Link>
              </li>
              <li className="flex items-center gap-2.5 group">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center bg-slate-50 text-[#F37A20]">
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" x2="22" y1="12" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <Link href="https://mytvbroadcasting.my/?" target="_blank" rel="noopener noreferrer" className="hover:underline transition-colors hover:text-slate-800">
                  mytv.com.my
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Baseline - Tightly integrated */}
        <div className="mt-12 border-t border-slate-100 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] font-medium text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} MYTV Broadcasting Sdn Bhd.
          </div>
          <div className="flex gap-4">
            <Link href="#contact" onClick={(e) => handleSmoothScroll(e, "#contact")} className="hover:text-[#F37A20] transition-colors">Terms</Link>
            <Link href="#contact" onClick={(e) => handleSmoothScroll(e, "#contact")} className="hover:text-[#F37A20] transition-colors">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}