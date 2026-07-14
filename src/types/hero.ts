export interface FeaturedProgram {
  id: string;
  title: string;
  description: string;
  posterUrl: string;
}

export interface HeroData {
  badge: string;
  tagline: string;
  ctaText: string;
  ctaUrl: string;
  logoUrl: string;
  backgroundImages: string[];
  featuredPrograms: FeaturedProgram[];
}