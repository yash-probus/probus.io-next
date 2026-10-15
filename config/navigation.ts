export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const solutionsNav: NavItem[] = [
  { label: "Smart Meter Solutions", href: "/smart-meter-solutions" },
  { label: "Solar Solutions", href: "/solar-solutions" },
  { label: "Smart Grid Integration", href: "/smart-grid-integration" },
];

export const mainNav: NavItem[] = [
  { label: "About Us", href: "/about-us" },
  {
    label: "Solution",
    href: "/solution",
    children: solutionsNav,
  },
  { label: "Partners", href: "/partners" },
  { label: "Career", href: "/career" },
  { label: "Blogs", href: "/blogs" },
  { label: "BES 2026", href: "/bes-2026" },
  { label: "Contact Us", href: "/contact-us" },
];

export const footerQuickLinks: NavItem[] = [
  { label: "About Us", href: "/about-us" },
  { label: "Solution", href: "/solution" },
  { label: "Partners", href: "/partners" },
  { label: "Career", href: "/career" },
  { label: "Blogs", href: "/blogs" },
  { label: "BES 2026", href: "/bes-2026" },
  { label: "Contact Us", href: "/contact-us" },
];

export const legalLinks: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Statutory Documents", href: "/statutory-documents" },
];
