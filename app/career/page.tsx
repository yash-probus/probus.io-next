import { Metadata } from "next";
import CareerHero from "@/components/career/CareerHero";
import CulturePerks from "@/components/career/CulturePerks";
import OpenPositions from "@/components/career/OpenPositions";
import CareerTestimonial from "@/components/career/CareerTestimonial";

export const metadata: Metadata = {
  title: "Career - Probus",
  description: "Join the Probus team and shape the future of smart energy metering. We are looking for talented people to innovate in IoT and sustainable energy solutions.",
  alternates: {
    canonical: "/career",
  },
  openGraph: {
    title: "Career - Probus",
    url: "/career",
    siteName: "Probus",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function CareerPage() {
  return (
    <>
      <CareerHero />
      <CulturePerks />
      <OpenPositions />
      <CareerTestimonial />
    </>
  );
}
