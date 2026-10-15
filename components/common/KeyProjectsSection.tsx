import Image from "next/image";
import React from "react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

const defaultLogos = [
  "/wp-content/uploads/2025/06/key10.png",
  "/wp-content/uploads/2025/06/key03-1.png",
  "/wp-content/uploads/2025/06/key02-1-1.png",
  "/wp-content/uploads/2025/06/key05-1.png",
  "/wp-content/uploads/2025/06/key04-1.png",
  "/wp-content/uploads/2025/06/key06.png",
  "/wp-content/uploads/2025/06/key07.png",
  "/wp-content/uploads/2025/06/key08.png",
  "/wp-content/uploads/2025/06/key09.png",
  "/wp-content/uploads/2025/06/key11.png",
  "/wp-content/uploads/2025/06/key01-1.png",
  "/wp-content/uploads/2025/06/key12.png",
];

interface KeyProjectsSectionProps {
  badge?: string;
  title?: string;
  logos?: string[];
  displayCount?: number;
  className?: string;
}

export default function KeyProjectsSection({
  badge = "KEY PROJECTS",
  title = "Integration with integrity",
  logos = defaultLogos,
  displayCount = 4,
  className = "",
}: KeyProjectsSectionProps) {
  const visibleLogos = logos.slice(0, displayCount);

  return (
    <section className={`py-[60px] md:py-[100px] bg-[#f9f9f9] ${className}`}>
      <Container>
        <SectionHeading
          badge={badge}
          title={title}
          align="left"
          theme="dark"
          badgeClassName="border-b-[3px] border-[#333] text-[#333]"
          titleClassName="font-bold text-[#000]"
        />

        <div className="flex flex-col md:flex-row items-center justify-between gap-[30px] md:gap-[40px] max-w-[1140px] mx-auto overflow-hidden">
          {visibleLogos.map((logo, index) => (
            <div
              key={index}
              className="relative flex justify-center items-center w-[160px] h-[160px] md:w-[200px] md:h-[200px] rounded-full border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <Image
                src={logo}
                alt={`Key Project ${index + 1}`}
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
