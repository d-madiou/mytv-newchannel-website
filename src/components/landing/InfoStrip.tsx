import { Tv, MapPin, Headphones, Check, CalendarDays, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";
import { aboutChannelData } from "@/data/about-channel";

export default function InfoStrip() {
  return (
    <section className="bg-[#f8f9fa] px-6 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
        
        {/* WHAT Card */}
        <div className="group flex flex-col border border-gray-200 bg-white p-8 transition-colors duration-300 hover:border-gray-300 lg:p-12">
          {/* Sharp, colored icon box */}
          <div className="mb-8 flex h-14 w-14 shrink-0 items-center justify-center bg-brand-orange transition-transform duration-300 group-hover:-translate-y-1">
            <Tv className="h-6 w-6 text-white" strokeWidth={1.5} />
          </div>
          
          <span className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-orange">
            What
          </span>
          <h3 className="mb-4 text-xl font-bold tracking-tight text-[#002B4A] lg:text-2xl">
            {siteConfig?.name || "SIARA TV"}
          </h3>
          <p className="text-[15px] leading-relaxed text-gray-600">
            {aboutChannelData?.genre === "Public Service Announcements"
              ? "Malaysia's official promotional and public information channel dedicated to showcasing programmes, campaigns, and information across Malaysia's free-to-air television platform."
              : aboutChannelData?.description}
          </p>
        </div>

        {/* WHERE Card */}
        <div className="group flex flex-col border border-gray-200 bg-white p-8 transition-colors duration-300 hover:border-gray-300 lg:p-12">
          <div className="mb-8 flex h-14 w-14 shrink-0 items-center justify-center bg-[#002B4A] transition-transform duration-300 group-hover:-translate-y-1">
            <MapPin className="h-6 w-6 text-white" strokeWidth={1.5} />
          </div>
          
          <span className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-orange">
            Where
          </span>
          <h3 className="mb-4 text-xl font-bold tracking-tight text-[#002B4A] lg:text-2xl">
            Channel {siteConfig?.channel?.number || "200"}
          </h3>
          <p className="mb-8 text-[15px] leading-relaxed text-gray-600">
            Available <strong className="font-semibold text-black">FREE</strong> nationwide through {siteConfig?.channel?.platform || "MYTV Digital Television"}.
          </p>
          
          <ul className="mt-auto space-y-3 border-t border-gray-100 pt-6">
            <li className="flex items-start gap-3 text-[14px] text-gray-600">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#002B4A]" strokeWidth={2.5} />
              <span>No subscription required.</span>
            </li>
            <li className="flex items-start gap-3 text-[14px] text-gray-600">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#002B4A]" strokeWidth={2.5} />
              <span>No monthly fee.</span>
            </li>
          </ul>
        </div>

        {/* ENQUIRIES Card */}
        <div className="group flex flex-col border border-gray-200 bg-white p-8 transition-colors duration-300 hover:border-gray-300 lg:p-12">
          <div className="mb-8 flex h-14 w-14 shrink-0 items-center justify-center bg-brand-orange transition-transform duration-300 group-hover:-translate-y-1">
            <Headphones className="h-6 w-6 text-white" strokeWidth={1.5} />
          </div>
          
          <span className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-orange">
            Enquiries
          </span>
          <h3 className="mb-4 text-xl font-bold tracking-tight text-[#002B4A] lg:text-2xl">
            {siteConfig?.channel?.phone || "1300 80 6988"}
          </h3>
          
          <div className="mt-auto flex flex-col gap-4 border-t border-gray-100 pt-6">
            <div className="flex items-center gap-3">
              <CalendarDays className="h-5 w-5 text-[#002B4A]" strokeWidth={1.5} />
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Days</span>
                <span className="text-[14px] font-medium text-gray-700">Monday – Friday</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-[#002B4A]" strokeWidth={1.5} />
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Hours</span>
                <span className="text-[14px] font-medium text-gray-700">9.00am – 5.00pm</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}