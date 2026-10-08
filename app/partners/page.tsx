import { Metadata } from "next";
import PartnersHero from "@/components/partners/PartnersHero";
import PartnersIntro from "@/components/partners/PartnersIntro";
import PartnersGrid from "@/components/partners/PartnersGrid";
import PartnersCta from "@/components/partners/PartnersCta";

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
