import { Metadata } from "next";
import { SolarPreInstallation } from "@/components/solution";

export const metadata: Metadata = {
  title: "Solar Pre-Installation | RF Deployment Schema Generator",
  description:
    "Identifying the optimal location for gateway installation using latitude and longitude data optimizes communication efficiency for solar installations.",
  alternates: {
    canonical: "/solar-pre-installation",
  },
  openGraph: {
    title: "Solar Pre-Installation | RF Deployment Schema Generator",
    description:
      "Identifying the optimal location for gateway installation using latitude and longitude data optimizes communication efficiency for solar installations.",
    url: "/solar-pre-installation",
    siteName: "Probus",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function SolarPreInstallationPage() {
  return <SolarPreInstallation />;
}
