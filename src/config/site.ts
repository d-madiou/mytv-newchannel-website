export const siteConfig = {
  name: "Siara TV | Malaysia's Promotional & Public Information Channel",
  description:
    "Siara TV is Malaysia's dedicated promotional and public information channel, connecting you to the best of the nation's free-to-air television platform.",
  url: "https://www.siaratv.my",
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
    platform: "MYTV Platform",
    phone: "1300 80 6988",
    operatingHours: "Monday – Friday, 9:00am – 5:00pm",
  },
  brand: {
  colors: {
    primary: "#e06b22",
    secondary: "#001f5b",
    white: "#FFFFFF",
    black: "#000000",
  },
  font: "Lato",
},
};

export type SiteConfig = typeof siteConfig;