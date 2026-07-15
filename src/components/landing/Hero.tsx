import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white px-6 pt-16 pb-24 lg:pt-24 lg:pb-32">
      {/* Subtle Orange Background Wave */}
      <div 
        className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-[#FFF5EB] to-transparent pointer-events-none"
        style={{
          maskImage: "radial-gradient(ellipse at 50% 120%, black 40%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 120%, black 40%, transparent 70%)"
        }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
        
        {/* Left: Copy */}
        <div>
          <h1 className="text-[40px] font-extrabold leading-[1.1] tracking-tight text-[#002B4A] sm:text-5xl lg:text-[56px]">
            Discover What&rsquo;s On
            <br />
            Malaysia&rsquo;s
            <br />
            <span className="text-[#F37A20]">Free-to-Air TV</span>
          </h1>

          <p className="mt-6 max-w-md text-[17px] leading-relaxed text-black/60">
            {siteConfig.name} is Malaysia&rsquo;s dedicated promotional and
            public information channel, connecting you to the best of the
            nation&rsquo;s free-to-air television platform.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#whats-on"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#F37A20] px-8 py-4 text-[14px] font-bold uppercase tracking-wider text-white shadow-lg shadow-[#F37A20]/25 transition-all hover:scale-105 hover:shadow-xl"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M5 3l14 9-14 9V3z" />
              </svg>
              Watch Channel {siteConfig.channel.number}
            </Link>

            <Link
              href="#about"
              className="inline-flex items-center justify-center rounded-lg border-2 border-black/10 bg-white px-8 py-4 text-[14px] font-bold uppercase tracking-wider text-black/90 transition-colors hover:border-[#F37A20] hover:bg-[#FFF5EB]"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right: TV Mockup */}
        <div className="relative mx-auto w-full max-w-[580px] drop-shadow-2xl">
          {/* TV Screen Container */}
          <div className="relative rounded-xl border-[12px] border-[#1a1a1a] bg-black overflow-hidden shadow-2xl aspect-video">
            
            {/* The Screen Background with Orange Glow */}
            <div className="absolute inset-0 bg-[#fafafa]">
              {/* Abstract orange light curves */}
              <div 
                className="absolute -bottom-20 -right-10 w-[150%] h-[150%] bg-gradient-to-tl from-[#F37A20] via-[#F37A20]/60 to-transparent opacity-60 blur-3xl rounded-full"
                style={{ transform: "rotate(-15deg)" }}
              />
              <div 
                className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-[#F37A20]/30 to-transparent"
              />
              <div 
                className="absolute bottom-0 right-0 w-[80%] h-[50%] bg-gradient-to-l from-[#F37A20]/20 to-transparent"
              />
            </div>

            {/* Screen Content */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center p-8 text-center">
              
              {/* Logo on screen */}
              <div className="flex flex-col items-center">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black uppercase tracking-tight text-[#F37A20]">
                    SIARA<span className="text-[20px] align-top">TV</span>
                  </span>
                </div>
                <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.25em] text-[#002B4A]/70">
                  INFORM &bull; CONNECT &bull; EMPOWER
                </span>
              </div>

              {/* Tagline on screen */}
              <div className="mt-6 flex flex-col items-center">
                <p className="text-[15px] font-medium text-black/70">
                  Your gateway to programmes,
                  <br />
                  information and awareness.
                </p>
              </div>

              {/* Channel Badge on screen */}
              <div className="mt-8 bg-[#F37A20] px-4 py-1.5 rounded-full">
                <span className="text-[15px] font-bold uppercase tracking-widest text-white">
                  CHANNEL {siteConfig.channel.number}
                </span>
              </div>
            </div>
          </div>

          {/* TV Stand */}
          <div className="mx-auto mt-[-8px] h-5 w-32 bg-[#1a1a1a]" />
          <div className="mx-auto mt-[-4px] h-3 w-48 rounded-full bg-[#1a1a1a] shadow-xl" />
        </div>
      </div>
    </section>
  );
}