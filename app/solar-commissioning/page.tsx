import { Metadata } from "next";
import { SolarCommissioning } from "@/components/solution";

export const metadata: Metadata = {
  title: "Solar Commissioning | Systematic Approach for Commissioning",
  description:
    "A systematic approach for solar commissioning including gateway installation, sensor installation, CT calibration, and data monitoring.",
  alternates: {
    canonical: "/solar-commissioning",
  },
  openGraph: {
    title: "Solar Commissioning | Systematic Approach for Commissioning",
    description:
      "A systematic approach for solar commissioning including gateway installation, sensor installation, CT calibration, and data monitoring.",
    url: "/solar-commissioning",
    siteName: "Probus",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function SolarCommissioningPage() {
  return <SolarCommissioning />;
}
