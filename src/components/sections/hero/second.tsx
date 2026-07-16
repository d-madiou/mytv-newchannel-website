import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative flex w-full items-start overflow-hidden pt-12 pb-56 sm:pt-16 sm:pb-64 lg:min-h-[750px] lg:items-center lg:py-0"
    >
      
      {/* Full Section Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-image1.png"
          alt="SIARA TV Hero Background"
          fill
          priority
          className="object-cover object-bottom sm:object-center lg:object-right"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:pt-0">
        
        {/* Left-Aligned Copy */}
        <div className="max-w-lg lg:max-w-xl">
          <h1 className="text-[40px] font-extrabold leading-[1.1] tracking-tight text-[#002B4A] sm:text-5xl lg:text-[56px]">
            Discover What&rsquo;s On
            <br />
            Malaysia&rsquo;s
            <br />
            <span className="text-[#F37A20]">Free-to-Air TV</span>
          </h1>

          <p className="mt-6 text-[17px] leading-relaxed text-black/70">
            {siteConfig?.name || "SIARA TV"} is Malaysia&rsquo;s dedicated promotional and
            public information channel, connecting you to the best of the
            nation&rsquo;s free-to-air television platform.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#whats-on"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#F37A20] px-8 py-4 text-[14px] font-bold uppercase tracking-wider text-white shadow-lg shadow-[#F37A20]/25 transition-all hover:scale-105 hover:shadow-xl"
            >
              {/* Play Icon with White Circle matching design */}
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
                <svg className="ml-0.5 h-3 w-3 fill-[#F37A20]" viewBox="0 0 24 24">
                  <path d="M5 3l14 9-14 9V3z" />
                </svg>
              </div>
              Watch Channel {siteConfig?.channel?.number || "200"}
            </Link>

            <Link
              href="#about"
              className="inline-flex items-center justify-center rounded-lg border-2 border-black/10 bg-white/80 px-8 py-4 text-[14px] font-bold uppercase tracking-wider text-black/90 backdrop-blur-sm transition-colors hover:border-[#F37A20] hover:bg-white"
            >
              Learn More
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}