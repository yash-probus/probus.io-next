import { Metadata } from "next";
import {
  PartnersHero,
  PartnersIntro,
  PartnersGrid,
  PartnersCta,
} from "@/components/partners";

export const metadata: Metadata = {
  title: "Probus | Smart Energy Meter Solutions & Smart Metering Services",
  description: "Partner with Probus to deliver smart energy meter solutions and smart metering services powered by leading smart electricity meter technology",
  alternates: {
    canonical: "/partners",
  },
  openGraph: {
    title: "Probus | Smart Energy Meter Solutions & Smart Metering Services",
    description: "Partner with Probus to deliver smart energy meter solutions and smart metering services powered by leading smart electricity meter technology",
    url: "/partners",
    siteName: "Probus",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function PartnersPage() {
  return (
    <>
      <PartnersHero />
      <PartnersIntro />
      <PartnersGrid />
      <PartnersCta />
    </>
  );
}
