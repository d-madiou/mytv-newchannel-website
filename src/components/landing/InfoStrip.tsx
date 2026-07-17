import { Tv, MapPin, Headphones, Check, CalendarDays, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";
import { aboutChannelData } from "@/data/about-channel";

export default function InfoStrip() {
  return (
    <section className="bg-[#f8f9fa] px-6 py-8 sm:py-10 lg:py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-3 lg:gap-5">
        
        {/* WHAT Card */}
        <div className="group flex flex-row border border-gray-200 bg-white p-5 transition-colors duration-300 hover:border-gray-300 md:items-start lg:p-6">
          {/* Left: Enlarged Colored Icon Box */}
          <div className="mr-5 flex h-20 w-20 shrink-0 items-center justify-center bg-[#F37A20] transition-transform duration-300 group-hover:scale-105 md:h-24 md:w-24">
            <Tv className="h-10 w-10 text-white md:h-12 md:w-12" strokeWidth={1.5} />
          </div>
          
          {/* Right: Content - INCREASED TEXT FONT */}
          <div className="flex flex-col">
            <span className="mb-1.5 text-[12px] font-bold uppercase tracking-[0.2em] text-[#F37A20]">
              What
            </span>
            <h3 className="mb-3 text-[22px] font-bold tracking-tight text-[#002B4A] lg:text-[26px]">
              { "SIARA TV"}
            </h3>
            <p className="text-[17px] leading-relaxed text-gray-600 lg:text-[18px]">
              {aboutChannelData?.genre === "Public Service Announcements"
                ? "Malaysia's official promotional and public information channel dedicated to showcasing programmes, campaigns, and information across Malaysia's free-to-air television platform."
                : aboutChannelData?.description}
            </p>
          </div>
        </div>

        {/* WHERE Card */}
        <div className="group flex flex-row border border-gray-200 bg-white p-5 transition-colors duration-300 hover:border-gray-300 md:items-start lg:p-6">
          <div className="mr-5 flex h-20 w-20 shrink-0 items-center justify-center bg-[#002B4A] transition-transform duration-300 group-hover:scale-105 md:h-24 md:w-24">
            <MapPin className="h-10 w-10 text-white md:h-12 md:w-12" strokeWidth={1.5} />
          </div>
          
          {/* Right: Content - INCREASED TEXT FONT */}
          <div className="flex flex-col">
            <span className="mb-1.5 text-[12px] font-bold uppercase tracking-[0.2em] text-[#F37A20]">
              Where
            </span>
            <h3 className="mb-3 text-[22px] font-bold tracking-tight text-[#002B4A] lg:text-[26px]">
              Channel {siteConfig?.channel?.number || "200"}
            </h3>
            <p className="mb-6 text-[17px] leading-relaxed text-gray-600 lg:text-[18px]">
              Available <strong className="font-semibold text-black">FREE</strong> nationwide through {siteConfig?.channel?.platform || "MYTV Digital Television"}.
            </p>
            
            <ul className="mt-auto  border-t border-gray-100 pt-1">
              <li className="flex items-start gap-3 text-[17px] text-gray-600 lg:text-[18px]">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#002B4A]" strokeWidth={2.5} />
                <span>No subscription required.</span>
              </li>
              <li className="flex items-start gap-3 text-[17px] text-gray-600 lg:text-[18px]">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#002B4A]" strokeWidth={2.5} />
                <span>No monthly fee.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ENQUIRIES Card */}
        <div className="group flex flex-row border border-gray-200 bg-white p-5 transition-colors duration-300 hover:border-gray-300 md:items-start lg:p-6">
          <div className="mr-5 flex h-20 w-20 shrink-0 items-center justify-center bg-[#F37A20] transition-transform duration-300 group-hover:scale-105 md:h-24 md:w-24">
            <Headphones className="h-10 w-10 text-white md:h-12 md:w-12" strokeWidth={1.5} />
          </div>
          
          {/* Right: Content - INCREASED TEXT FONT */}
          <div className="flex flex-col">
            <span className="mb-1.5 text-[12px] font-bold uppercase tracking-[0.2em] text-[#F37A20]">
              Enquiries
            </span>
            <h3 className="mb-3 text-[22px] font-bold tracking-tight text-[#002B4A] lg:text-[26px]">
              {siteConfig?.channel?.phone || "1300 80 6988"}
            </h3>
            
            <div className="mt-auto flex flex-col gap-3 border-t border-gray-100 pt-5">
              <div className="flex items-center gap-3">
                <CalendarDays className="h-6 w-6 text-[#002B4A]" strokeWidth={1.5} />
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Days</span>
                  <span className="text-[17px] font-medium text-gray-700 lg:text-[18px]">Monday – Friday</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-6 w-6 text-[#002B4A]" strokeWidth={1.5} />
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Hours</span>
                  <span className="text-[17px] font-medium text-gray-700 lg:text-[18px]">9.00am – 5.00pm</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}