import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Globe } from "lucide-react";
import { contactData } from "@/data/contact";
import { siteConfig } from "@/config/site";

export default function Contact() {
  return (
    <section id="contact" className="bg-white px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        
        {/* Editorial Section Header */}
        <div className="mb-16 text-center">
          <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#F37A20]">
            Get in Touch
          </span>
          <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-[#002B4A] sm:text-4xl lg:text-5xl">
            Contact Us
          </h2>
          <div className="mx-auto mt-6 h-1.5 w-16 bg-[#F37A20]" />
        </div>

        {/* 
          Architectural 3-Column Grid 
          Using a gray background layer with a 1px gap to create sharp vertical dividers.
          Zero border-radius, zero shadows, pure Pro UI execution.
        */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-[1px] border-y border-gray-200 bg-gray-200 sm:grid-cols-3">
          
          {/* Phone Block */}
          <div className="group flex flex-col items-center bg-white p-12 text-center transition-colors duration-500 hover:bg-[#F37A20]">
            {/* Enlarged clean icon without circle background */}
            <div className="text-[#F37A20] transition-colors duration-500 group-hover:text-white">
              <Phone className="h-10 w-10" strokeWidth={1.25} />
            </div>
            
            <h3 className="mt-6 text-[13px] font-black uppercase tracking-wider text-[#002B4A] transition-colors duration-500 group-hover:text-white">
              Phone Enquiries
            </h3>
            
            <p className="mt-4 text-lg font-bold text-slate-800 transition-colors duration-500 group-hover:text-white">
              {siteConfig.channel.phone}
            </p>
            
            <p className="mt-1 text-xs text-slate-400 transition-colors duration-500 group-hover:text-white/70">
              {siteConfig.channel.operatingHours}
            </p>
          </div>

          {/* Email Block */}
          <div className="group flex flex-col items-center bg-white p-12 text-center transition-colors duration-500 hover:bg-[#F37A20]">
            <div className="text-[#F37A20] transition-colors duration-500 group-hover:text-white">
              <Mail className="h-10 w-10" strokeWidth={1.25} />
            </div>
            
            <h3 className="mt-6 text-[13px] font-black uppercase tracking-wider text-[#002B4A] transition-colors duration-500 group-hover:text-white">
              Email Address
            </h3>
            
            <Link
              href={`mailto:${contactData.email}`}
              className="mt-4 text-lg font-bold text-slate-800 transition-colors duration-500 hover:underline group-hover:text-white"
            >
              {contactData.email}
            </Link>
          </div>

          {/* Website Block */}
          <div className="group flex flex-col items-center bg-white p-12 text-center transition-colors duration-500 hover:bg-[#F37A20]">
            <div className="text-[#F37A20] transition-colors duration-500 group-hover:text-white">
              <Globe className="h-10 w-10" strokeWidth={1.25} />
            </div>
            
            <h3 className="mt-6 text-[13px] font-black uppercase tracking-wider text-[#002B4A] transition-colors duration-500 group-hover:text-white">
              Official Website
            </h3>
            
            <Link
              href="https://www.mytv.com.my"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-lg font-bold text-slate-800 transition-colors duration-500 hover:underline group-hover:text-white"
            >
              www.mytv.com.my
            </Link>
          </div>

        </div>

        {/* Social Links Section */}
        <div className="mt-20 flex flex-col items-center gap-6">
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-slate-400">
            Follow Our Channels
          </span>
          
          <div className="flex gap-6">
            {contactData.socialLinks.map((social) => {
              let svgPath = "";
              let label = "";

              switch (social.iconName) {
                case "facebook":
                  svgPath = "/socialmedia/facebook-color-svgrepo-com.svg";
                  label = "Facebook";
                  break;
                case "instagram":
                  svgPath = "/socialmedia/instagram-2-1-logo-svgrepo-com.svg";
                  label = "Instagram";
                  break;
                case "youtube":
                  svgPath = "/socialmedia/youtube-color-svgrepo-com.svg";
                  label = "YouTube";
                  break;
                default:
                  return null;
              }

              return (
                <Link
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.platform}
                  className="group flex h-14 w-14 items-center justify-center border border-gray-200 bg-white transition-all duration-300 hover:scale-105 hover:border-[#F37A20]"
                >
                  <Image
                    src={svgPath}
                    alt={label}
                    width={26}
                    height={26}
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </Link>
              );
            })}
          </div>
        </div>
        
      </div>
    </section>
  );
}