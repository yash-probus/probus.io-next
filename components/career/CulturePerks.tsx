"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CulturePerks() {
  const slides = [
    "/wp-content/uploads/2025/06/careerslide1.jpg",
    "/wp-content/uploads/2025/06/careerslide2.jpg",
    "/wp-content/uploads/2025/06/developer-1.jpg"
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="py-[40px] md:py-[65px] bg-white relative">
      {/* Optional faint background pattern behind the whole section if needed, but original uses bgrightbottom class which we can skip or add if needed */}
      
      <div className="container mx-auto px-4 md:px-[15px] max-w-7xl">
        <div className="flex flex-wrap -mx-4 items-center">
          
          {/* Left Slider */}
          <div className="w-full lg:w-1/2 px-4 mb-[40px] lg:mb-0">
            <div 
              className="relative mx-auto w-full max-w-[90%] lg:max-w-[80%] py-[20px] px-[15px] bg-no-repeat bg-center"
              style={{ backgroundImage: 'url(/wp-content/themes/probus/assets/images/careersliderbg.jpg)', backgroundSize: '100% 100%' }}
            >
              
              {/* Slider Box */}
              <div className="bg-white rounded-[5px] p-[12px] shadow-[0_0_10px_rgba(0,0,0,0.19)] relative">
                <div className="relative w-full overflow-hidden">
                  <Image 
                    src={slides[currentSlide]} 
                    alt="Life at Probus" 
                    width={800} 
                    height={500} 
                    className="w-full h-auto object-cover rounded-[3px]"
                  />
                  <Link 
                    href="https://www.linkedin.com/company/probus-smart-things/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute bottom-[20px] left-[30px] z-10 w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Image src="/wp-content/themes/probus/assets/images/linkedin.svg" alt="LinkedIn" width={24} height={24} />
                  </Link>
                </div>
              </div>

              {/* Slider Arrows (Positioned Outside) */}
              <button 
                onClick={prevSlide}
                className="absolute top-1/2 -translate-y-1/2 left-[-20px] md:left-[-40px] w-[30px] h-[30px] bg-[#9d9d9d] hover:bg-[#033361] text-white flex items-center justify-center rounded-full transition-colors z-20"
                aria-label="Previous"
              >
                &lt;
              </button>
              <button 
                onClick={nextSlide}
                className="absolute top-1/2 -translate-y-1/2 right-[-20px] md:right-[-40px] w-[30px] h-[30px] bg-[#9d9d9d] hover:bg-[#033361] text-white flex items-center justify-center rounded-full transition-colors z-20"
                aria-label="Next"
              >
                &gt;
              </button>
              
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="text-left mb-[30px]">
              <h6 className="text-[#0A080C] uppercase font-medium tracking-wide mb-2 inline-block border-b-2 border-black pb-1 text-[13px]">
                COMPANY OVERVIEW
              </h6>
              <h2 className="text-[#0A080C] text-[32px] md:text-[40px] font-medium leading-tight mt-2 font-sans">
                Why work at Probus?
              </h2>
            </div>
            
            <ul className="list-none p-0 m-0 mt-[30px]">
              <li className="flex items-start mb-[25px]">
                <Image src="/wp-content/themes/probus/assets/images/check-career.svg" alt="Check" width={24} height={24} className="mr-[20px] shrink-0 mt-[2px]" />
                <h5 className="text-[15px] leading-[24px] text-black font-normal m-0 font-sans">
                  Collaboration is at the heart of what we do. Tackle complex challenges and find innovative solutions to reshape the energy landscape.
                </h5>
              </li>
              <li className="flex items-start mb-[25px]">
                <Image src="/wp-content/themes/probus/assets/images/check-career.svg" alt="Check" width={24} height={24} className="mr-[20px] shrink-0 mt-[2px]" />
                <h5 className="text-[15px] leading-[24px] text-black font-normal m-0 font-sans">
                  We believe in nurturing talent and fostering professional growth
                </h5>
              </li>
              <li className="flex items-start mb-[25px]">
                <Image src="/wp-content/themes/probus/assets/images/check-career.svg" alt="Check" width={24} height={24} className="mr-[20px] shrink-0 mt-[2px]" />
                <h5 className="text-[15px] leading-[24px] text-black font-normal m-0 font-sans">
                  We value work-life balance and understand the importance of personal well-being.
                </h5>
              </li>
              <li className="flex items-start mb-[25px]">
                <Image src="/wp-content/themes/probus/assets/images/check-career.svg" alt="Check" width={24} height={24} className="mr-[20px] shrink-0 mt-[2px]" />
                <h5 className="text-[15px] leading-[24px] text-black font-normal m-0 font-sans">
                  Get to play a vital role in developing and implementing energy-efficient solutions that reduce carbon footprints and promote sustainability.
                </h5>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
}
