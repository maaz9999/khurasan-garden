export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Amenities", href: "/amenities" },
  { label: "Location", href: "/location" },
  { label: "Development", href: "/development" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  quickLinks: [
    { label: "Our Vision", href: "/about" },
    { label: "Community Amenities", href: "/amenities" },
    { label: "M-9 Location & Access", href: "/location" },
    { label: "Development Progress", href: "/development" },
    { label: "Masterplan Gallery", href: "/gallery" },
    { label: "Book a Site Visit", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Site Visit Guidelines", href: "#" },
  ],
};
