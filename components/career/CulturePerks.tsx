"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import SectionHeading from "@/components/common/SectionHeading";
import Container from "@/components/common/Container";

export default function CulturePerks() {
  const slides = [
    {
      src: "/images/uploads/2025/06/careerslide1.jpg",
      alt: "Life at Probus - Engineering Lab"
    },
    {
      src: "/images/uploads/2025/06/careerslide2.jpg",
      alt: "Life at Probus - Team Discussion"
    },
    {
      src: "/images/uploads/2025/06/developer-1.jpg",
      alt: "Life at Probus - Hardware Development"
    }
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  // Smooth auto-slide every 5 seconds (matches WordPress Slick autoplay), pauses on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  // Touch swipe support for mobile/tablet
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="py-[40px] md:py-[65px] bg-white relative">
      <Container size="wide">
        <div className="flex flex-wrap -mx-4 items-center">
          
          {/* Left Slider */}
          <div className="w-full lg:w-1/2 px-4 mb-[40px] lg:mb-0">
            <div 
              className="relative mx-auto w-full max-w-[90%] lg:max-w-[80%] py-[20px] px-[15px] bg-no-repeat bg-center"
              style={{ backgroundImage: 'url(/images/careersliderbg.jpg)', backgroundSize: '100% 100%' }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              
              {/* Slider Box */}
              <div className="bg-white rounded-[5px] p-[12px] shadow-[0_0_10px_rgba(0,0,0,0.19)] relative overflow-hidden">
                <div className="relative w-full overflow-hidden rounded-[3px]">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {slides.map((s, idx) => (
                      <div key={idx} className="w-full shrink-0 relative aspect-[983/594]">
                        <Image 
                          src={s.src} 
                          alt={s.alt} 
                          fill
                          priority={idx === 0}
                          className="object-cover rounded-[3px]"
                        />
                        <Link 
                          href="https://www.linkedin.com/company/probus-smart-things/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="absolute bottom-[20px] left-[30px] z-10 w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-md"
                          aria-label="Probus LinkedIn"
                        >
                          <Image src="/images/linkedin.svg" alt="LinkedIn" width={24} height={24} />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Slider Arrows (Positioned Outside) */}
              <button 
                onClick={prevSlide}
                className="absolute top-1/2 -translate-y-1/2 left-[-20px] md:left-[-35px] w-[32px] h-[32px] bg-[#9d9d9d] hover:bg-[#033361] text-white flex items-center justify-center rounded-full transition-colors z-20 shadow-md cursor-pointer"
                aria-label="Previous Slide"
              >
                <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextSlide}
                className="absolute top-1/2 -translate-y-1/2 right-[-20px] md:right-[-35px] w-[32px] h-[32px] bg-[#9d9d9d] hover:bg-[#033361] text-white flex items-center justify-center rounded-full transition-colors z-20 shadow-md cursor-pointer"
                aria-label="Next Slide"
              >
                <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 px-4">
            <SectionHeading
              badge="COMPANY OVERVIEW"
              title="Why work at Probus?"
              align="left"
            />
            
            <ul className="list-none p-0 m-0 mt-[30px]">
              <li className="flex items-start mb-[25px]">
                <Image src="/images/check-career.svg" alt="Check" width={24} height={24} className="mr-[20px] shrink-0 mt-[2px]" />
                <h5 className="text-[15px] leading-[24px] text-black font-normal m-0 font-sans">
                  Collaboration is at the heart of what we do. Tackle complex challenges and find innovative solutions to reshape the energy landscape.
                </h5>
              </li>
              <li className="flex items-start mb-[25px]">
                <Image src="/images/check-career.svg" alt="Check" width={24} height={24} className="mr-[20px] shrink-0 mt-[2px]" />
                <h5 className="text-[15px] leading-[24px] text-black font-normal m-0 font-sans">
                  We believe in nurturing talent and fostering professional growth
                </h5>
              </li>
              <li className="flex items-start mb-[25px]">
                <Image src="/images/check-career.svg" alt="Check" width={24} height={24} className="mr-[20px] shrink-0 mt-[2px]" />
                <h5 className="text-[15px] leading-[24px] text-black font-normal m-0 font-sans">
                  We value work-life balance and understand the importance of personal well-being.
                </h5>
              </li>
              <li className="flex items-start mb-[25px]">
                <Image src="/images/check-career.svg" alt="Check" width={24} height={24} className="mr-[20px] shrink-0 mt-[2px]" />
                <h5 className="text-[15px] leading-[24px] text-black font-normal m-0 font-sans">
                  Get to play a vital role in developing and implementing energy-efficient solutions that reduce carbon footprints and promote sustainability.
                </h5>
              </li>
            </ul>

            <div className="mt-[35px]">
              <Link 
                href="/empowering-the-future-probus-smart-things-journey-in-smart-grid-innovation"
                className="inline-flex items-center gap-2 bg-[#033361] hover:bg-[#022244] text-white px-7 py-3 rounded-[30px] font-sans text-[15px] font-medium transition-all shadow-sm"
              >
                Know More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
          
        </div>
      </Container>
    </section>
  );
}
