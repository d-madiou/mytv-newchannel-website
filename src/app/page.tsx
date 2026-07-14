import Hero from "@/components/sections/hero";
import AboutChannelTeaser from "@/components/sections/about-channel/AboutChannelTeaser";
import WhereToWatchTeaser from "@/components/sections/where-to-watch/WhereToWatchTeaser";
import NewsTeaser from "@/components/sections/news/NewsTeaser";
import AdvertiseCTA from "@/components/sections/advertise/AdvertiseCTA";
import ContactTeaser from "@/components/sections/contact/ContactTeaser";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutChannelTeaser />
      <WhereToWatchTeaser />
      <NewsTeaser />
      <AdvertiseCTA />
      <ContactTeaser />
    </>
  );
}