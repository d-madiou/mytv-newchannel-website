export interface FeaturedProgram {
  id: string;
  title: string;
  posterUrl: string;
}

export interface HeroData {
  logoUrl: string;
  backgroundImages: string[];
  featuredPrograms: FeaturedProgram[];
}