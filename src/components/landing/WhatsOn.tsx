import {
  Clapperboard,
  Star,
  Megaphone,
  Landmark,
  HeartHandshake,
  RadioTower,
} from "lucide-react";
import { contentCategoriesData } from "@/data/content-categories";

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
    <section id="whats-on" className="bg-white px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] text-center">
        
        {/* Centered Header */}
        <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-brand-orange">
          Programmes
        </span>
        <h2 className="mt-3 text-3xl font-extrabold uppercase tracking-tight text-[#002B4A] sm:text-4xl">
          What You&rsquo;ll Find on Siara TV
        </h2>
        <div className="mx-auto mt-6 h-1.5 w-16 bg-brand-orange" />

        {/* 
          6-Column Row Grid 
          Using a gray background layer with a 1px gap to create sharp vertical borders.
        */}
        <div className="mx-auto mt-16 grid grid-cols-2 gap-[1px] border-y border-gray-200 bg-gray-200 sm:grid-cols-3 lg:grid-cols-6">
          
          {contentCategoriesData.map((category) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap];
            return (
              <div
                key={category.id}
                className="group flex flex-col items-center bg-white px-5 py-12 transition-colors duration-500 hover:bg-brand-orange"
              >
                {/* Clean, enlarged icon with transition */}
                <div className="text-brand-orange transition-colors duration-500 group-hover:text-white">
                  {Icon && <Icon className="h-10 w-10" strokeWidth={1.25} />}
                </div>
                
                {/* Title */}
                <h3 className="mt-6 text-center text-[13px] font-black uppercase tracking-wider text-[#002B4A] transition-colors duration-500 group-hover:text-white">
                  {category.title}
                </h3>
                
                {/* Description */}
                <p className="mt-3 text-center text-[13px] leading-relaxed text-slate-500 transition-colors duration-500 group-hover:text-white/90">
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