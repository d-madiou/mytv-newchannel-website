export const siteConfig = {
  name: "Rus TV",
  description:
    "Rus TV is a 24/7 channel bringing entertainment, news, and culture to Russian-speaking audiences worldwide. Discover where to watch, our latest news, and advertising opportunities.",
  url: "https://www.rustv-placeholder.com",
  ogImage: "/images/shared/og-image-placeholder.jpg",
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Where to Watch", href: "/where-to-watch" },
    { label: "Advertise", href: "/advertise" },
    { label: "News", href: "/news" },
    { label: "Contact", href: "/contact" },
  ],
  brand: {
    colors: {
      primary: "#FE7F2D",
      secondary: "#112E81",
      white: "#FFFFFF",
      black: "#000000",
    },
    font: "Inter",
  },
};

export type SiteConfig = typeof siteConfig;