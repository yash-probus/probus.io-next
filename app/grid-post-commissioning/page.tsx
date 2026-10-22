import { Metadata } from "next";
import { GridPostCommissioning } from "@/components/solution";

export const metadata: Metadata = {
  title: "Post Commissioning | Probus Smart Energy Solutions",
  description:
    "Probus post commissioning services ensure ongoing performance, system optimization, maintenance support, and analytics for smart energy deployments.",
  alternates: {
    canonical: "/grid-post-commissioning",
  },
  openGraph: {
    title: "Post Commissioning | Probus Smart Energy Solutions",
    description:
      "Probus post commissioning services ensure ongoing performance, system optimization, maintenance support, and analytics for smart energy deployments.",
    url: "/grid-post-commissioning",
    siteName: "Probus",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function GridPostCommissioningPage() {
  return <GridPostCommissioning />;
}
