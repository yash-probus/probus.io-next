import { Metadata } from "next";
import { SolarProbusHardware } from "@/components/solution";

export const metadata: Metadata = {
  title: "Solar Probus Hardware | Solar String Sensing Module",
  description:
    "Probus Solar String Sensing Module and high-performance Gateways designed for solar IoT monitoring and communication.",
  alternates: {
    canonical: "/solar-probus-hardware",
  },
  openGraph: {
    title: "Solar Probus Hardware | Solar String Sensing Module",
    description:
      "Probus Solar String Sensing Module and high-performance Gateways designed for solar IoT monitoring and communication.",
    url: "/solar-probus-hardware",
    siteName: "Probus",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function SolarProbusHardwarePage() {
  return <SolarProbusHardware />;
}
