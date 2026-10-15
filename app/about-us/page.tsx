import { Metadata } from "next";
import {
  AboutHero,
  CompanyOverview,
  LeadershipTeam,
  CoreStrengths,
  CompanyJourney,
  Testimonials,
} from "@/components/about";

export const metadata: Metadata = {
  title: "Smart Meter Manufacturing Company with Smart Grid IoT Solutions",
  description: "Probus stands among top smart meter manufacturing companies, delivering reliable smart grid IoT solutions for utilities and industries.",
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: "Smart Meter Manufacturing Company with Smart Grid IoT Solutions",
    description: "Probus stands among top smart meter manufacturing companies, delivering reliable smart grid IoT solutions for utilities and industries.",
    url: "/about-us",
    siteName: "Probus",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function AboutUsPage() {
  return (
    <>
      <AboutHero />
      <CompanyOverview />
      <LeadershipTeam />
      <CoreStrengths />
      <CompanyJourney />
      <Testimonials />
    </>
  );
}
