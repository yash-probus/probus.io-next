import { Metadata } from "next";
import {
  SolutionHero,
  SolutionsList,
  TechArchitecture,
  SolutionCta,
} from "@/components/solution";

export const metadata: Metadata = {
  title: "Smart Meter Technology in India with IoT & Smart Grids | Probus",
  description: "Probus offers next-gen smart meter technology in India featuring real-time monitoring, IoT automation, & integrated smart grid solutions.",
  alternates: {
    canonical: "/solution",
  },
  openGraph: {
    title: "Smart Meter Technology in India with IoT & Smart Grids | Probus",
    description: "Probus offers next-gen smart meter technology in India featuring real-time monitoring, IoT automation, & integrated smart grid solutions.",
    url: "/solution",
    siteName: "Probus",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function SolutionPage() {
  return (
    <>
      <SolutionHero />
      <SolutionsList />
      <TechArchitecture />
      <SolutionCta />
    </>
  );
}
