export const siteConfig = {
  name: "Probus Smart Things",
  shortName: "Probus",
  description:
    "Pioneering IoT and smart grid solutions for modern utility automation and sustainable energy distribution.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://probus.io",
  ogImage: "https://probus.io/images/uploads/2025/06/logo.png",
  contact: {
    email: "contact@probus.io",
    supportEmail: "info@probus.io",
    phone: "011 4103 3012",
    address: "4th Floor, No. 15A, Tradex Tower, Noida Sector-125, Uttar Pradesh, INDIA",
  },
  links: {
    linkedin: "https://www.linkedin.com/company/probus-smart-things/",
    twitter: "https://twitter.com/probus_io",
  },
} as const;

export type SiteConfig = typeof siteConfig;
