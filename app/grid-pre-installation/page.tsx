import { Metadata } from "next";
import { GridPreInstallation } from "@/components/solution";

export const metadata: Metadata = {
  title: "Smart Grid Pre-Installation | DTs, Meters & Feeders with Probus",
  description:
    "Explore smart grid function with Probus pre-installation management. Streamline DTs, meters, feeders, and user data for efficient grid setup.",
  alternates: {
    canonical: "/grid-pre-installation",
  },
  openGraph: {
    title: "Smart Grid Pre-Installation | DTs, Meters & Feeders with Probus",
    description:
      "Explore smart grid function with Probus pre-installation management. Streamline DTs, meters, feeders, and user data for efficient grid setup.",
    url: "/grid-pre-installation",
    siteName: "Probus",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function GridPreInstallationPage() {
  return <GridPreInstallation />;
}
