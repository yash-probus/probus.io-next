import React from "react";
import PageHero from "@/components/common/PageHero";

interface HeroProps {
  title: string | React.ReactNode;
  bgImage: string;
  bgImageMobile: string;
  videoSrc?: string;
  breadcrumb: string;
}

export default function SolutionDetailHero({
  title,
  bgImage,
  bgImageMobile,
  videoSrc,
  breadcrumb,
}: HeroProps) {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Solution", href: "/solution" },
    { label: breadcrumb },
  ];

  return (
    <PageHero
      title={title}
      bgImage={bgImage}
      bgImageMobile={bgImageMobile}
      videoSrc={videoSrc}
      breadcrumbs={breadcrumbItems}
      height="h-[600px] md:h-[500px]"
      overlayClass="bg-black/50"
    />
  );
}
