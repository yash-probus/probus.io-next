import { Metadata } from "next";
import { GridProbusHardware } from "@/components/solution";

export const metadata: Metadata = {
  title: "Site Commissioning | Probus Smart Energy Solutions",
  description:
    "Probus performs site commissioning with on-site validation, system integration checks, and handover to ensure energy operate flawlessly.",
  alternates: {
    canonical: "/probus-hardware",
  },
  openGraph: {
    title: "Site Commissioning | Probus Smart Energy Solutions",
    description:
      "Probus performs site commissioning with on-site validation, system integration checks, and handover to ensure energy operate flawlessly.",
    url: "/probus-hardware",
    siteName: "Probus",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function ProbusHardwarePage() {
  return <GridProbusHardware />;
}
