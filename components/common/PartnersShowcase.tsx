"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PartnerLogo } from "@/types/common";

const defaultRow1Logos: PartnerLogo[] = [
  { src: "/wp-content/uploads/2025/06/p1-1-1.png", alt: "Google" },
  { src: "/wp-content/uploads/2025/06/p2-1.png", alt: "AWS" },
  { src: "/wp-content/uploads/2025/06/p3-1.png", alt: "Silicon Labs" },
  { src: "/wp-content/uploads/2025/06/p4-1.png", alt: "Wirepas" },
  { src: "/wp-content/uploads/2025/06/p5-1.png", alt: "DLMS" },
];

const defaultRow2Logos: PartnerLogo[] = [
  { src: "/wp-content/uploads/2025/06/p6-1.png", alt: "Wi-SUN Alliance" },
  { src: "/wp-content/uploads/2025/06/p7-1.png", alt: "Renesas" },
  { src: "/wp-content/uploads/2025/06/p8-1.png", alt: "NXP" },
  { src: "/wp-content/uploads/2025/06/p9-1.png", alt: "HPL" },
];

interface PartnersShowcaseProps {
  title?: string;
  showButton?: boolean;
  buttonText?: string;
  buttonHref?: string;
  row1Logos?: PartnerLogo[];
  row2Logos?: PartnerLogo[];
  className?: string;
}

export default function PartnersShowcase({
  title = "WE ARE TRUSTED BY THE BEST PARTNERS",
  showButton = true,
  buttonText = "Learn more about Partner Ecosystem",
  buttonHref = "/partners",
  row1Logos = defaultRow1Logos,
  row2Logos = defaultRow2Logos,
  className = "",
}: PartnersShowcaseProps) {
  return (
    <section className={`py-[55px] bg-white sub-section home-partners ${className}`}>
      <div className="container mx-auto px-4 md:px-[75px] max-w-[1800px] w-full">
        <div className="text-center mb-[25px]">
          <p className="text-[16px] leading-[26px] font-bold text-black uppercase tracking-[0.5px] font-sans m-0">
            {title}
          </p>
        </div>

        <div className="w-full flex flex-col items-center">
          {/* Row 1 */}
          <div className="flex items-end justify-center flex-wrap w-full">
            {row1Logos.map((item, index) => (
              <div
                key={index}
                className="h-[48px] md:h-[56px] m-[12px_18px] md:m-[15px_32px] flex items-end justify-center"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={140}
                  height={56}
                  className="max-w-full h-full object-contain block hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex items-end justify-center flex-wrap w-full mt-2">
            {row2Logos.map((item, index) => (
              <div
                key={index}
                className="h-[48px] md:h-[56px] m-[12px_18px] md:m-[15px_32px] flex items-end justify-center"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={140}
                  height={56}
                  className="max-w-full h-full object-contain block hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
        </div>

        {showButton && (
          <div className="mt-[40px] text-center">
            <Link
              href={buttonHref}
              className="inline-block bg-[#033361] hover:bg-white text-white hover:text-[#033361] border border-[#033361] text-[15px] leading-[28px] font-medium font-sans rounded-[30px] px-[24px] py-[6px] transition-all duration-300 shadow-sm"
            >
              {buttonText}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
