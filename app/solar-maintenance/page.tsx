import { Metadata } from "next";
import { SolarMaintenance } from "@/components/solution";

export const metadata: Metadata = {
  title: "Solar Maintenance | Web application to monitor SLA and O&M",
  description:
    "Web application to monitor SLA and to carry out operation & maintenance for solar plants with Probus.",
  alternates: {
    canonical: "/solar-maintenance",
  },
  openGraph: {
    title: "Solar Maintenance | Web application to monitor SLA and O&M",
    description:
      "Web application to monitor SLA and to carry out operation & maintenance for solar plants with Probus.",
    url: "/solar-maintenance",
    siteName: "Probus",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function SolarMaintenancePage() {
  return <SolarMaintenance />;
}
