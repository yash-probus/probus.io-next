import { Metadata } from "next";
import {
  BesHero,
  BesOverview,
  BesSolutionsSpotlight,
  BesBoothLocation,
  BesMeetingForm,
} from "@/components/bes-2026";

export const metadata: Metadata = {
  title: "Bharat Electricity Summit 2026 | Probus",
  description: "Join Probus at the Bharat Electricity Summit (BES) 2026 to discover our patented smart grid solutions, Next-Gen Smart Meters, and AI Outage Analytics.",
  alternates: {
    canonical: "/bes-2026",
  },
  openGraph: {
    title: "Bharat Electricity Summit 2026 | Probus",
    description: "Join Probus at the Bharat Electricity Summit (BES) 2026 to discover our patented smart grid solutions, Next-Gen Smart Meters, and AI Outage Analytics.",
    url: "/bes-2026",
    siteName: "Probus",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function Bes2026Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <BesHero />
      <BesOverview />
      <BesSolutionsSpotlight />
      <BesBoothLocation />
      <BesMeetingForm />
    </div>
  );
}
