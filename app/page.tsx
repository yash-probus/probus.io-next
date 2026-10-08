import { Metadata } from "next";
import HomeHero from "@/components/home/HomeHero";
import HomeTechnology from "@/components/home/HomeTechnology";
import HomeSolutionsGrid from "@/components/home/HomeSolutionsGrid";
import HomePartners from "@/components/home/HomePartners";
import HomeTestimonial from "@/components/home/HomeTestimonial";
import HomeBlog from "@/components/home/HomeBlog";

export const metadata: Metadata = {
  title: "Smart Energy Solutions for Metering Solar and Grids",
  description: "Integrated smart energy solutions combining metering solar and smart grid integration for reliable efficient and future ready power systems.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Smart Energy Solutions for Metering Solar and Grids",
    description: "Integrated smart energy solutions combining metering solar and smart grid integration for reliable efficient and future ready power systems.",
    url: "/",
    siteName: "Probus",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeTechnology />
      <HomeSolutionsGrid />
      <HomePartners />
      <HomeTestimonial />
      <HomeBlog />
    </>
  );
}
