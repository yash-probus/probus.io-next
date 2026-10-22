"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

export default function SolarCommissioning() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const steps = [
    {
      step: "1",
      img: "/images/uploads/2025/06/solrCslide01.png",
      text: "Gateway\nInstallation",
      isFirst: true,
    },
    {
      step: "2",
      img: "/images/uploads/2025/06/solrCslide02.png",
      text: "Sensor\nInstallation",
    },
    {
      step: "3",
      img: "/images/uploads/2025/06/solrCslide03.png",
      text: "CT Calibration,\nif required",
    },
    {
      step: "4",
      img: "/images/uploads/2025/06/solrCslide04.png",
      text: "Master creation\non application",
    },
    {
      step: "5",
      img: "/images/uploads/2025/06/solrCslide05.png",
      text: "Training",
    },
    {
      step: "6",
      img: "/images/uploads/2025/06/solrCslide06.png",
      text: "Data\nMonitoring",
      isLast: true,
    },
  ];

  const updateScrollButtons = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 15);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 15);
    }
  };

  useEffect(() => {
    updateScrollButtons();
    window.addEventListener("resize", updateScrollButtons);
    return () => window.removeEventListener("resize", updateScrollButtons);
  }, []);

  const handleStepScroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -280 : 280;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

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
                Step 3: Commissioning
              </h6>
            </div>
            <h1 className="text-white text-[28px] md:text-[40px] font-medium leading-[1.2] font-sans m-0">
              A systematic approach for commissioning
            </h1>
          </div>

          {/* 6 Step Process Slider */}
          <div className="relative max-w-[1200px] mx-auto py-[15px] md:py-[25px] mb-[40px]">
            {canScrollLeft && (
              <button
                type="button"
                onClick={() => handleStepScroll("left")}
                className="absolute left-[-10px] md:left-[-35px] top-[40%] -translate-y-1/2 z-20 w-[40px] h-[40px] flex items-center justify-center cursor-pointer bg-transparent border-0 hover:scale-110 transition-transform"
                aria-label="Previous step"
              >
                <Image
                  src="/images/arrow-white.png"
                  alt="Previous"
                  width={24}
                  height={24}
                  className="rotate-180"
                />
              </button>
            )}

            {canScrollRight && (
              <button
                type="button"
                onClick={() => handleStepScroll("right")}
                className="absolute right-[-10px] md:right-[-35px] top-[40%] -translate-y-1/2 z-20 w-[40px] h-[40px] flex items-center justify-center cursor-pointer bg-transparent border-0 hover:scale-110 transition-transform"
                aria-label="Next step"
              >
                <Image
                  src="/images/arrow-white.png"
                  alt="Next"
                  width={24}
                  height={24}
                />
              </button>
            )}

            <div
              ref={sliderRef}
              onScroll={updateScrollButtons}
              className="flex items-start overflow-x-auto scroll-smooth gap-[15px] md:gap-[20px] pb-[20px] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {steps.map((item, index) => (
                <div
                  key={index}
                  className="w-[180px] sm:w-[200px] md:w-[220px] shrink-0 text-center flex flex-col items-center"
                >
                  <div className="w-[120px] h-[120px] md:w-[140px] md:h-[140px] rounded-full overflow-hidden bg-transparent border border-white/20 flex items-center justify-center p-2 mb-[15px]">
                    <Image
                      src={item.img}
                      alt={`Step ${item.step}`}
                      width={120}
                      height={120}
                      className="w-[85%] h-[85%] object-contain"
                    />
                  </div>

                  <div className="relative w-full flex items-center justify-center">
                    {!item.isFirst && (
                      <div className="absolute left-0 right-1/2 top-1/2 -translate-y-1/2 h-[2px] border-b-[2px] border-dashed border-white -z-0">
                        {item.isLast && (
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[9px] h-[9px] rounded-full bg-white"></div>
                        )}
                      </div>
                    )}
                    {!item.isLast && (
                      <div className="absolute left-1/2 right-0 top-1/2 -translate-y-1/2 h-[2px] border-b-[2px] border-dashed border-white -z-0">
                        {item.isFirst && (
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[9px] h-[9px] rounded-full bg-white"></div>
                        )}
                      </div>
                    )}

                    <div
                      className="relative z-10 w-[45px] h-[45px] md:w-[50px] md:h-[50px] rounded-full flex items-center justify-center font-sans text-[22px] md:text-[26px] text-white font-normal bg-cover bg-center"
                      style={{
                        backgroundImage: "url(/images/bg-number.png)",
                      }}
                    >
                      <span>{item.step}</span>
                    </div>
                  </div>

                  <p className="font-sans text-[14px] md:text-[15px] leading-[20px] md:leading-[22px] text-white font-normal mt-[14px] whitespace-pre-line text-center">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Solar String Monitoring Application Card */}
          <div className="max-w-[1200px] mx-auto">
            <div className="rounded-[12px] p-[35px_20px] sm:p-[45px_40px] md:p-[50px_90px] bg-gradient-to-b from-[#2e4eff] to-[#20c4f5] text-center shadow-lg">
              <div className="mb-[25px]">
                <h2 className="text-white text-[24px] md:text-[30px] font-medium leading-[34px] md:leading-[42px] font-sans m-0">
                  Solar String Monitoring Application
                </h2>
              </div>
              <div className="max-w-[950px] mx-auto">
                <Image
                  src="/images/uploads/2025/06/solar-site-big.png"
                  alt="Solar String Monitoring Application"
                  width={900}
                  height={450}
                  className="w-full h-auto mx-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
