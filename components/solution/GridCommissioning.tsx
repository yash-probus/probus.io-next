"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function GridCommissioning() {
  const [currentPage, setCurrentPage] = useState(0);

  const teamPhotos = [
    { src: "/images/twork01.png", alt: "Probus team at work 1" },
    { src: "/images/twork02.png", alt: "Probus team at work 2" },
    { src: "/images/twork03.png", alt: "Probus team at work 3" },
    { src: "/images/twork04.png", alt: "Probus team at work 4" },
    { src: "/images/twork05.png", alt: "Probus team at work 5" },
    { src: "/images/twork06.png", alt: "Probus team at work 6" },
  ];

  return (
    <>
      {/* Close button that navigates back to Smart Grid Integration */}
      <div className="fixed top-[100px] md:top-[115px] right-[25px] md:right-[80px] z-40">
        <Link
          href="/smart-grid-integration#leveragewrap"
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
                STEP 3: INSTALLATION AND COMMISSIONING
              </h6>
            </div>
            <h1 className="text-white text-[28px] md:text-[40px] font-medium leading-[1.2] font-sans m-0">
              Distribution Substation Monitoring
            </h1>
          </div>

          {/* DSM Gradient Card */}
          <div className="max-w-[1200px] mx-auto mb-[50px] md:mb-[60px]">
            <div className="rounded-[12px] p-[35px_20px] sm:p-[45px_40px] md:p-[50px_100px] bg-gradient-to-b from-[#20C4F5] to-[#3E2EFF] text-center shadow-lg">
              <div className="max-w-[950px] mx-auto mb-[35px] md:mb-[45px]">
                <Image
                  src="/images/grid-dsm.png"
                  alt="Distribution Substation Monitoring Architecture"
                  width={900}
                  height={380}
                  className="w-full h-auto mx-auto object-contain"
                  priority
                />
              </div>
              <p className="font-sans text-[15px] md:text-[16px] leading-[26px] text-white font-normal max-w-[800px] mx-auto m-0">
                Plug and play module for sensor installation at RMU and
                Distribution Transformers, requiring only 30 minutes of downtime
                with no on-site configuration required
              </p>
            </div>
          </div>

          {/* Glimpses of the Probus team at work */}
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-[28px]">
              <h2 className="text-white text-[24px] md:text-[30px] font-medium leading-[34px] md:leading-[44px] font-sans m-0">
                Glimpses of the Probus team at work
              </h2>
            </div>

            {/* Slider with 2 pages of 3 images */}
            <div className="relative overflow-hidden w-full">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentPage * 100}%)` }}
              >
                {/* Page 1 (Images 1, 2, 3) */}
                <div className="w-full shrink-0 grid grid-cols-1 sm:grid-cols-3 gap-[15px] md:gap-[20px]">
                  {teamPhotos.slice(0, 3).map((item, idx) => (
                    <div
                      key={idx}
                      className="overflow-hidden rounded-[10px] aspect-[4/3] bg-[#262F37] relative group"
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  ))}
                </div>

                {/* Page 2 (Images 4, 5, 6) */}
                <div className="w-full shrink-0 grid grid-cols-1 sm:grid-cols-3 gap-[15px] md:gap-[20px]">
                  {teamPhotos.slice(3, 6).map((item, idx) => (
                    <div
                      key={idx}
                      className="overflow-hidden rounded-[10px] aspect-[4/3] bg-[#262F37] relative group"
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Slider Dots */}
              <div className="flex justify-center items-center gap-[8px] mt-[25px]">
                <button
                  type="button"
                  onClick={() => setCurrentPage(0)}
                  className={`h-[4px] rounded-[2px] transition-all duration-300 cursor-pointer border-0 ${
                    currentPage === 0
                      ? "w-[40px] bg-white opacity-100"
                      : "w-[40px] bg-white/40 hover:bg-white/70"
                  }`}
                  aria-label="Slide 1"
                />
                <button
                  type="button"
                  onClick={() => setCurrentPage(1)}
                  className={`h-[4px] rounded-[2px] transition-all duration-300 cursor-pointer border-0 ${
                    currentPage === 1
                      ? "w-[40px] bg-white opacity-100"
                      : "w-[40px] bg-white/40 hover:bg-white/70"
                  }`}
                  aria-label="Slide 2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
