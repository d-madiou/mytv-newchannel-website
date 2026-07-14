import { HeroData } from "@/types";

export const heroData: HeroData = {
  badge: "Launching July 2026",
  tagline: "Public service announcements for Malaysia, 24/7.",
  ctaText: "Learn More",
  ctaUrl: "/about",
  logoUrl: "/images/where-to-watch/mytv.png",
  backgroundImages: [
    "/images/hero/hero1.png",
    "/images/hero/hero2.png",
    "/images/hero/hero3.png",
  ],
  featuredPrograms: [
    {
      id: "1",
      title: "Program One",
      description: "Health and safety awareness campaign.",
      posterUrl: "/images/hero/hero1.png",
    },
    {
      id: "2",
      title: "Program Two",
      description: "Civic education for local communities.",
      posterUrl: "/images/hero/hero2.png",
    },
    {
      id: "3",
      title: "Program Three",
      description: "Public safety updates and alerts.",
      posterUrl: "/images/hero/hero3.png",
    },
  ],
};