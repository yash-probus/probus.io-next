import { Metadata } from "next";
import { GridPreInstallation } from "@/components/solution";

export const metadata: Metadata = {
  title: "Smart Grid Pre-Installation | DTs, Meters & Feeders with Probus",
  description:
    "Explore smart grid function with Probus pre-installation management. Streamline DTs, meters, feeders, and user data for efficient grid setup.",
  alternates: {
    canonical: "/pre-installation",
  },
};

export default function PreInstallationPage() {
  return <GridPreInstallation />;
}
