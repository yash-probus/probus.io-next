import Image from "next/image";
import React from "react";
import Breadcrumbs from "./Breadcrumbs";
import Container from "./Container";
import { BreadcrumbItem } from "@/types/common";

interface PageHeroProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  bgImage?: string;
  bgImageMobile?: string;
  videoSrc?: string;
  breadcrumbs?: BreadcrumbItem[];
  height?: string;
  overlayClass?: string;
  titleAs?: "h1" | "h2";
  titleClassName?: string;
  containerSize?: "default" | "wide" | "narrow";
  align?: "center" | "left";
  priority?: boolean;
  children?: React.ReactNode;
}

export default function PageHero({
  title,
  subtitle,
  bgImage,
  bgImageMobile,
  videoSrc,
  breadcrumbs,
  height = "h-[400px] md:h-[500px]",
  overlayClass = "bg-black/40",
  titleAs: TitleTag = "h1",
  titleClassName = "",
  containerSize = "default",
  align = "center",
  priority = true,
  children,
}: PageHeroProps) {
  return (
    <section className={`relative w-full ${height} flex items-center justify-center overflow-hidden bg-[#033361]`}>
      {/* Background Image / Video */}
      {bgImage && (
        <div className={`absolute inset-0 z-0 before:content-[''] before:absolute before:inset-0 before:${overlayClass} before:z-[1]`}>
          <Image
            src={bgImage}
            alt="Hero Background"
            fill
            sizes="100vw"
            priority={priority}
            className={`object-cover ${bgImageMobile ? "hidden md:block" : ""}`}
          />
          {bgImageMobile && (
            <Image
              src={bgImageMobile}
              alt="Hero Background Mobile"
              fill
              sizes="100vw"
              priority={priority}
              className="object-cover md:hidden"
            />
          )}
          {videoSrc && (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover hidden"
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          )}
        </div>
      )}

      {!bgImage && <div className={`absolute inset-0 z-[1] ${overlayClass}`} />}

      {/* Breadcrumbs positioned at top */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <div className="absolute top-[35px] md:top-[40px] left-0 w-full z-20">
          <Container size={containerSize} className="text-left">
            <Breadcrumbs items={breadcrumbs} theme="light" />
          </Container>
        </div>
      )}

      {/* Main Content */}
      <Container
        size={containerSize}
        className={`relative z-10 ${align === "center" ? "text-center" : "text-left"} mt-8`}
      >
        <TitleTag
          className={`text-white text-[32px] md:text-[45px] lg:text-[50px] leading-[1.2] font-bold font-sans tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] ${titleClassName}`}
        >
          {title}
        </TitleTag>

        {subtitle && (
          <p className="text-white/90 text-[16px] md:text-[20px] font-sans font-light mt-4 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}

        {children}
      </Container>
    </section>
  );
}
