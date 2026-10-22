"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

export default function GridPostCommissioning() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeItem, setActiveItem] = useState(0);

  const steps = [
    {
      step: "1",
      img: "/images/gridPslide01.png",
      text: "Cluster of assets\ndeployed with Probus",
      isFirst: true,
    },
    {
      step: "2",
      img: "/images/gridPslide02.png",
      text: "Assets identified\nwith an alert",
    },
    {
      step: "3",
      img: "/images/gridPslide03.png",
      text: "Assets visible in the\ndashboard and IoMS",
    },
    {
      step: "4",
      img: "/images/gridPslide04.png",
      text: "Ticket generated\nthrough dashboard",
    },
    {
      step: "5",
      img: "/images/gridPslide05.png",
      text: "Ticket accepted\nthrough FFA and\nrectified by field team",
      isLast: true,
    },
  ];

  const dashboardFeatures = [
    {
      title: "Real-time Data: Map View",
      img: "/images/gridPdashboard01.png",
    },
    {
      title: "Real-time Alerts: Map View",
      img: "/images/gridPdashboard02.png",
    },
    {
      title: "Ticket Life Cycle Management",
      img: "/images/gridPdashboard03.png",
    },
    {
      title: "Sensor Communication and Data details",
      img: "/images/gridPdashboard04.png",
    },
    {
      title: "AMR Communication and Data details",
      img: "/images/gridPdashboard05.png",
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

  const handleFeatureClick = (index: number) => {
    setActiveItem(index);
    if (dashboardRef.current) {
      const targetImg = dashboardRef.current.children[index] as HTMLElement;
      if (targetImg) {
        dashboardRef.current.scrollTo({
          top: targetImg.offsetTop - dashboardRef.current.offsetTop,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <>
      {/* Floating Close Button */}
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

      {/* Step 4 Top Section: Post-project implementation approach */}
      <section className="bg-[#182026] text-white pt-[110px] pb-[50px] md:pb-[70px]">
        <div className="container mx-auto px-4 md:px-6 max-w-[1280px]">
          {/* Header Pin & Title */}
          <div className="text-center mb-[30px] md:mb-[40px] relative">
            <div className="flex flex-col items-center mb-3">
              <div className="w-[1px] h-[60px] bg-white relative">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[5px] h-[5px] bg-white rounded-full"></div>
              </div>
              <h6 className="text-white text-[13px] md:text-[14px] leading-[19px] font-sans font-normal uppercase tracking-wider mt-3">
                Step 4: Post Commissioning
              </h6>
            </div>
            <h1 className="text-white text-[28px] md:text-[40px] font-medium leading-[1.2] font-sans m-0">
              Post-project implementation approach
            </h1>
          </div>

          {/* Step Slider Carousel */}
          <div className="relative max-w-[1200px] mx-auto py-[20px] md:py-[30px]">
            {/* Left Prev Arrow */}
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

            {/* Right Next Arrow */}
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

            {/* Scrollable Step Items Container */}
            <div
              ref={sliderRef}
              onScroll={updateScrollButtons}
              className="flex items-start overflow-x-auto scroll-smooth gap-[15px] md:gap-[25px] pb-[20px] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {steps.map((item, index) => (
                <div
                  key={index}
                  className="w-[200px] sm:w-[220px] md:w-[245px] shrink-0 text-center flex flex-col items-center"
                >
                  {/* Step Circular Image */}
                  <div className="w-[125px] h-[125px] md:w-[145px] md:h-[145px] rounded-full overflow-hidden bg-transparent border border-white/20 flex items-center justify-center p-2 mb-[15px]">
                    <Image
                      src={item.img}
                      alt={`Step ${item.step}`}
                      width={130}
                      height={130}
                      className="w-[85%] h-[85%] object-contain"
                    />
                  </div>

                  {/* Number Badge & Connecting Dashed Line */}
                  <div className="relative w-full flex items-center justify-center">
                    {/* Connecting dashed line behind number */}
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

                    {/* Step Number Circle */}
                    <div
                      className="relative z-10 w-[45px] h-[45px] md:w-[50px] md:h-[50px] rounded-full flex items-center justify-center font-sans text-[22px] md:text-[26px] text-white font-normal bg-cover bg-center"
                      style={{
                        backgroundImage: "url(/images/bg-number.png)",
                      }}
                    >
                      <span>{item.step}</span>
                    </div>
                  </div>

                  {/* Step Description */}
                  <p className="font-sans text-[14px] md:text-[15px] leading-[20px] md:leading-[22px] text-white font-normal mt-[14px] whitespace-pre-line text-center">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overview of the Probus Dashboard Section */}
      <section className="bg-gradient-to-b from-[#03ABF4] to-[#0791FA] py-[60px] md:py-[80px]">
        <div className="container mx-auto px-4 md:px-6 max-w-[1280px]">
          {/* Section Heading */}
          <div className="text-center mb-[40px] md:mb-[50px]">
            <h2 className="text-white text-[28px] md:text-[34px] font-medium leading-[38px] md:leading-[46px] font-sans m-0">
              Overview of the Probus Dashboard
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-[35px] lg:gap-[50px] max-w-[1200px] mx-auto">
            {/* Left 5 Checklist Features */}
            <div className="w-full lg:w-[42%] shrink-0">
              <ul className="list-none p-0 m-0 space-y-[12px] md:space-y-[15px]">
                {dashboardFeatures.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => handleFeatureClick(index)}
                    className={`flex items-center p-[12px_20px] rounded-[31px] cursor-pointer transition-all duration-300 ${
                      activeItem === index
                        ? "bg-[#16b2fa] shadow-md"
                        : "hover:bg-[#16b2fa]/60 bg-transparent"
                    }`}
                  >
                    <Image
                      src="/images/check-whitebg.svg"
                      alt="Checkmark"
                      width={30}
                      height={30}
                      className="w-[28px] h-[28px] md:w-[30px] md:h-[30px] mr-[13px] shrink-0"
                    />
                    <h5 className="font-sans text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] text-white font-medium m-0">
                      {item.title}
                    </h5>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Dashboard Mockup Container */}
            <div className="w-full lg:w-[58%]">
              <div className="bg-white rounded-[16px] md:rounded-[20px] border-[5px] md:border-[7px] border-white/90 shadow-2xl overflow-hidden">
                <div
                  ref={dashboardRef}
                  className="max-h-[380px] md:max-h-[465px] overflow-y-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                >
                  {dashboardFeatures.map((item, index) => (
                    <div key={index} className="w-full bg-white">
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={900}
                        height={550}
                        className="w-full h-auto object-contain block"
                        priority={index === 0}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
