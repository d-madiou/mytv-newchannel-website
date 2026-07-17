import { aboutChannelData } from "@/data/about-channel";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white px-6 py-10 sm:py-12 lg:py-16">
      
      {/* Massive Abstract Watermark / Background Element */}
      <div className="absolute -right-40 top-0 -z-10 h-[800px] w-[800px] rounded-full border-[100px] border-neutral-50 opacity-50 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-12">
        
        {/* Left: Reduced Typography Copy (Spans 6 columns) */}
        <div className="flex flex-col lg:col-span-6">
          
          {/* Reduced Title Size */}
          <h2 className="text-3xl font-black uppercase leading-[1.1] tracking-tight text-[#F37A20] sm:text-5xl lg:text-6xl">
            About
            <br />
            {aboutChannelData.title.replace("About ", "")}
          </h2>

          {/* Reduced Subtitle Size */}
          <h3 className="mt-6 border-l-4 border-[#002B4A] pl-4 text-xl font-light tracking-tight text-[#002B4A] sm:text-2xl lg:mt-8">
            Connecting Malaysians
            <br className="hidden sm:block" />
            <strong className="font-bold">Through Information.</strong>
          </h3>

          {/* Reduced Paragraph Text Size */}
          <div className="mt-8 max-w-xl space-y-4 pl-4 sm:pl-5 lg:mt-8">
            {aboutChannelData.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-[15px] leading-[1.8] text-justify text-slate-600 xl:text-[16px]">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Right: Taller Video Container (Spans 6 columns) */}
        <div className="relative mx-auto w-full max-w-2xl lg:col-span-6 lg:max-w-none lg:h-full">
          
          {/* The decorative navy block matching the video height */}
          <div className="absolute -bottom-6 -left-6 hidden h-[calc(100%-1rem)] w-full rounded-[24px] bg-[#002B4A] transition-transform duration-700 hover:translate-x-2 hover:-translate-y-2 sm:block" />
          
          {/* Video Wrapper - set to match height of text column */}
          <div className="relative h-full w-full overflow-hidden rounded-[24px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)]">
            <div className="absolute inset-0 z-10 bg-[#002B4A]/10 mix-blend-multiply pointer-events-none" />
            
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover object-center transition-transform duration-1000 hover:scale-105"
            >
              <source src="/videos/about/IMG_4448.MP4" type="video/mp4" />
            </video>
          </div>
        </div>

      </div>
    </section>
  );
}