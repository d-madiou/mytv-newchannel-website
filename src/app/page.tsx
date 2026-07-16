import About from "@/components/landing/About";
import Contact from "@/components/landing/Contact";
import TuneIn from "@/components/landing/CtaBanner";
import Hero from "@/components/landing/Hero";
import InfoStrip from "@/components/landing/InfoStrip";
import WhatsOn from "@/components/landing/WhatsOn";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <InfoStrip />
      <About />
      <WhatsOn />
      <TuneIn />
      <Contact />
    </>
  );
}