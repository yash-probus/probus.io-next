import { Metadata } from "next";
import { GridCommissioning } from "@/components/solution";

export const metadata: Metadata = {
  title: "Commissioning | Probus Smart Energy Solutions",
  description:
    "Probus provides complete commissioning support with on-site validation, system integration checks, and handover to ensure energy solutions operate flawlessly.",
  alternates: {
    canonical: "/site-commissioning",
  },
  openGraph: {
    title: "Commissioning | Probus Smart Energy Solutions",
    description:
      "Probus provides complete commissioning support with on-site validation, system integration checks, and handover to ensure energy solutions operate flawlessly.",
    url: "/site-commissioning",
    siteName: "Probus",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function SiteCommissioningPage() {
  return <GridCommissioning />;
}
