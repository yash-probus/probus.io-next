"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import SectionHeading from "@/components/common/SectionHeading";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Anand Singh",
    role: "Founder & CEO",
    image: "/images/uploads/2025/06/tm3-1.jpg",
    linkedin: "https://www.linkedin.com/in/anand-singh-9906bb3b/",
  },
  {
    name: "Sunny Kumar Jadoon",
    role: "Co-founder",
    image: "/images/uploads/2025/06/tm4.jpg",
    linkedin: "https://www.linkedin.com/in/sunny-kumar-jadoon-20a02028/",
  },
  {
    name: "Ahmad Raza",
    role: "Cofounder & CTO",
    image: "/images/uploads/2025/06/tm5.jpg",
    linkedin: "https://www.linkedin.com/in/ahmad-raza-0a6ab3106/",
  },
  {
    name: "Rahul Mishra",
    role: "COO",
    image: "/images/uploads/2025/06/tm6.jpg",
    linkedin: "https://www.linkedin.com/in/rahul-mishra-28b7015a/",
  },
  {
    name: "Ankit Vaish",
    role: "Co-founder & CFO",
    image: "/images/uploads/2025/06/tm7.jpg",
    linkedin: "https://www.linkedin.com/in/ankit-vaish-56289162/",
  },
];

// Extended list for infinite circular carousel (5 repeated sets = 25 items)
const EXTENDED_TEAM: TeamMember[] = [
  ...TEAM_MEMBERS,
  ...TEAM_MEMBERS,
  ...TEAM_MEMBERS,
  ...TEAM_MEMBERS,
  ...TEAM_MEMBERS,
];

const N = TEAM_MEMBERS.length; // 5

export default function LeadershipTeam() {
  const [itemsToShow, setItemsToShow] = useState<number>(3);
  // Start in the middle set (index 10)
  const [currentIndex, setCurrentIndex] = useState<number>(2 * N);
  const [withTransition, setWithTransition] = useState<boolean>(true);

  const isAnimatingRef = useRef<boolean>(false);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setWithTransition(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setWithTransition(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    isAnimatingRef.current = false;

    // Reset invisibly to keep within middle set (N to 2N)
    setCurrentIndex((prev) => {
      if (prev >= 3 * N) {
        setWithTransition(false);
        return prev - N;
      }
      if (prev < 2 * N) {
        setWithTransition(false);
        return prev + N;
      }
      return prev;
    });
  };

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section
      className="py-[40px] md:py-[65px] bg-cover bg-no-repeat w-full"
      style={{
        backgroundImage: "url(/images/leadership-bg.png)",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="ml-[15px] md:ml-[75px] mr-[-15px] md:mr-[-30px] flex flex-wrap items-start">
        {/* Left Heading */}
        <div className="w-full lg:w-[35%] xl:w-[40%] pr-[30px] md:pr-[70px] mb-10 lg:mb-0 relative">
          <SectionHeading
            badge="LEADERSHIP"
            title="Meet the team with diverse backgrounds and expertise"
            description="Our team consists of passionate and experienced professionals who are dedicated to driving energy efficiency and sustainability."
            theme="light"
            align="left"
          />

          {/* Slider controls (Circular Arrows) */}
          <div className="flex space-x-2 mt-8 absolute md:bottom-[-60px] left-0">
            <button
              onClick={handlePrev}
              className="w-[34px] h-[34px] rounded-full bg-white text-[#0795F8] flex items-center justify-center cursor-pointer shadow-md transition-all duration-200 hover:bg-[#033361] hover:text-white hover:scale-110 hover:shadow-lg active:scale-95 select-none font-bold text-[16px]"
              aria-label="Previous Team Member"
            >
              &lt;
            </button>
            <button
              onClick={handleNext}
              className="w-[34px] h-[34px] rounded-full bg-white text-[#0795F8] flex items-center justify-center cursor-pointer shadow-md transition-all duration-200 hover:bg-[#033361] hover:text-white hover:scale-110 hover:shadow-lg active:scale-95 select-none font-bold text-[16px]"
              aria-label="Next Team Member"
            >
              &gt;
            </button>
          </div>
        </div>

        {/* Right Slider with Infinite Circular Motion */}
        <div className="w-full lg:w-[65%] xl:w-[60%] overflow-hidden relative">
          <div
            className="flex pb-8 pt-4 select-none"
            onTransitionEnd={handleTransitionEnd}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
              transition: withTransition
                ? "transform 400ms cubic-bezier(0.25, 1, 0.5, 1)"
                : "none",
              willChange: "transform",
            }}
          >
            {EXTENDED_TEAM.map((member, idx) => (
              <div
                key={idx}
                className="shrink-0 px-[10px] md:px-[12px] box-border"
                style={{ width: `${100 / itemsToShow}%` }}
              >
                <div className="bg-white rounded-[6px] pt-[14px] px-[12px] pb-0 h-full flex flex-col shadow-lg transition-transform duration-200 hover:-translate-y-1">
                  <div className="w-full h-[250px] relative rounded-sm overflow-hidden mb-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top pointer-events-none"
                    />
                  </div>
                  <div className="w-full flex items-end justify-between px-[7px] py-[10px] md:py-[12px] mt-auto">
                    <div className="flex-1">
                      <h5 className="text-[#0A080C] text-[16px] leading-[28px] font-medium m-0">
                        {member.name}
                      </h5>
                      <p className="text-[#2C2C2C] text-[15px] leading-[28px] font-light m-0">
                        {member.role}
                      </p>
                    </div>
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 ml-2 mb-1 transition-transform hover:scale-110 cursor-pointer"
                    >
                      <Image
                        src="/images/linkedin.svg"
                        alt="LinkedIn"
                        width={24}
                        height={24}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
