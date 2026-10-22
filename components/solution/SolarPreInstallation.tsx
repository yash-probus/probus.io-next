"use client";

import Image from "next/image";
import Link from "next/link";

export default function SolarPreInstallation() {
  return (
    <>
      {/* Floating Close Button */}
      <div className="fixed top-[100px] md:top-[115px] right-[25px] md:right-[80px] z-40">
        <Link
          href="/solar-solutions#leveragewrap"
          className="inline-block hover:opacity-80 transition-opacity"
          aria-label="Close"
        >
          <Image
            src="/images/closepop.png"
            alt="Close"
            width={30}
            height={30}
            className="w-[28px] h-[28px] md:w-[30px] md:h-[30px]"
          />
        </Link>
      </div>

      <section className="bg-[#182026] text-white pt-[110px] pb-[70px] md:pb-[90px] min-h-[calc(100vh-80px)]">
        <div className="container mx-auto px-4 md:px-6 max-w-[1280px]">
          {/* Header Pin & Title */}
          <div className="text-center mb-[30px] md:mb-[40px] relative">
            <div className="flex flex-col items-center mb-3">
              <div className="w-[1px] h-[60px] bg-white relative">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[5px] h-[5px] bg-white rounded-full"></div>
              </div>
              <h6 className="text-white text-[13px] md:text-[14px] leading-[19px] font-sans font-normal uppercase tracking-wider mt-3">
                Step 1: Pre-Installation
              </h6>
            </div>
            <h1 className="text-white text-[28px] md:text-[40px] font-medium leading-[1.2] font-sans m-0">
              RF Deployment Schema Generator
            </h1>
          </div>

          {/* Solar Pre-Installation Box */}
          <div className="max-w-[1200px] mx-auto">
            <div className="rounded-[12px] p-[35px_20px] sm:p-[45px_40px] md:p-[50px_90px] bg-gradient-to-b from-[#0780fc] to-[#00ffd8] text-center shadow-lg">
              <p className="font-sans text-[15px] md:text-[16px] leading-[22px] md:leading-[26px] text-white font-normal max-w-[850px] mx-auto mb-[35px] md:mb-[45px]">
                Identifying the optimal location for gateway installation using
                latitude and longitude data optimizes communication efficiency
                by considering user-defined parameters and enhancing overall
                performance.
              </p>
              <div className="max-w-[950px] mx-auto">
                <Image
                  src="/images/uploads/2025/06/solar-pre-img01.png"
                  alt="RF Deployment Schema Generator Diagram"
                  width={900}
                  height={450}
                  className="w-full h-auto mx-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
