import {
  Clapperboard,
  Star,
  Megaphone,
  Landmark,
  HeartHandshake,
  RadioTower,
} from "lucide-react";
import { contentCategoriesData } from "@/data/content-categories";
import { siteConfig } from "@/config/site";
import Image from "next/image";

const iconMap = {
  clapperboard: Clapperboard,
  star: Star,
  megaphone: Megaphone,
  landmark: Landmark,
  "heart-handshake": HeartHandshake,
  "radio-tower": RadioTower,
};

export default function WhatsOn() {
  return (
    <section id="whats-on" className="bg-white px-6 py-10 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-[1400px] text-center">
        
        {/* Centered Header */}
        <span className="text-[22px] font-bold uppercase tracking-[0.2em] text-[#F37A20]">
          Programmes
        </span>
        
        <h2 className="mt-3 flex items-center justify-center gap-2 text-3xl font-extrabold uppercase tracking-tight text-[#002B4A] sm:text-4xl">
          What You&rsquo;ll Find on 
          <Image
            src="/images/logo/logosiara.png"
            alt={siteConfig.name}
            width={160}
            height={50}
            className="h-auto w-[130px] object-contain sm:w-[150px]"
            priority
          />
        </h2>
        
        <div className="mx-auto mt-6 h-1.5 w-16 bg-[#F37A20]" />

        {/* 6-Column Row Grid */}
        <div className="mx-auto mt-8 grid grid-cols-2 gap-[1px] border-y border-gray-200 bg-gray-200 sm:grid-cols-3 lg:grid-cols-6">
          
          {contentCategoriesData.map((category) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap];
            
            // Split title by space and map to 2 separate lines with <br />
            const formattedTitle = category.title.split(' ').map((word, index, arr) => (
              <span key={index}>
                {word}
                {/* Add a <br /> after every word except the last one */}
                {index < arr.length - 1 && <br />}
              </span>
            ));

            return (
              <div
                key={category.id}
                className="group flex flex-col items-center bg-white px-4 py-10 transition-colors duration-500 hover:bg-[#F37A20] sm:px-5 sm:py-12"
              >
                {/* Clean, enlarged icon with transition */}
                <div className="text-[#F37A20] transition-colors duration-500 group-hover:text-white">
                  {Icon && <Icon className="h-10 w-10 sm:h-12 sm:w-12" strokeWidth={1.25} />}
                </div>
                
                {/* Title - Now strictly 2 lines with proper responsive sizing */}
                <h3 className="mt-5 text-center text-[15px] font-black uppercase tracking-wider text-[#002B4A] transition-colors duration-500 group-hover:text-white sm:text-[16px]">
                  {formattedTitle}
                </h3>
                
                {/* Description */}
                <p className="mt-3 text-center text-[14px] leading-relaxed text-slate-500 transition-colors duration-500 group-hover:text-white/90 sm:text-[15px]">
                  {category.description}
                </p>
              </div>
            );
          })}
          
        </div>
      </div>
    </section>
  );
}