export interface SocialLink {
  platform: string;
  url: string;
  iconName: string;
}

export interface ContactData {
  email: string;
  phone?: string;
  address?: string;
  socialLinks: SocialLink[];
}