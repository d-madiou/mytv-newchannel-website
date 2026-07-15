export const siteConfig = {
  name: "Siara TV",
  description:
    "Siara TV is Malaysia's dedicated promotional and public information channel, connecting you to the best of the nation's free-to-air television platform.",
  url: "https://www.siaratv-placeholder.com",
  ogImage: "/images/shared/og-image-placeholder.jpg",
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Where to Watch", href: "/where-to-watch" },
    { label: "Program", href: "/program" },
    { label: "News", href: "/news" },
    { label: "Contact", href: "/contact" },
  ],
  parentBadge: {
    label: "A Channel by",
    name: "MYTV Broadcasting",
  },
  channel: {
    number: "200",
    platform: "MYTV Digital Television",
    phone: "1300 80 6988",
    operatingHours: "Monday – Friday, 9:00am – 5:00pm",
  },
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