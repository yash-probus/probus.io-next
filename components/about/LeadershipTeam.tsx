"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import SectionHeading from "@/components/common/SectionHeading";

export default function LeadershipTeam() {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" 
        ? scrollLeft - clientWidth / 2 
        : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const team = [
    {
      name: "Anand Singh",
      role: "Founder & CEO",
      image: "/images/uploads/2025/06/tm3-1.jpg",
      linkedin: "https://www.linkedin.com/in/anand-singh-9906bb3b/"
    },
    {
      name: "Sunny Kumar Jadoon",
      role: "Co-founder",
      image: "/images/uploads/2025/06/tm4.jpg",
      linkedin: "https://www.linkedin.com/in/sunny-kumar-jadoon-20a02028/"
    },
    {
      name: "Ahmed Raza",
      role: "Cofounder & CTO",
      image: "/images/uploads/2025/06/tm5.jpg",
      linkedin: "https://www.linkedin.com/in/ahmad-raza-0a6ab3106/"
    },
    {
      name: "Rahul Mishra",
      role: "COO",
      image: "/images/uploads/2025/06/tm6.jpg",
      linkedin: "https://www.linkedin.com/in/rahul-mishra-28b7015a/"
    },
    {
      name: "Ankit Vaish",
      role: "Co-founder & CFO",
      image: "/images/uploads/2025/06/tm7.jpg",
      linkedin: "https://www.linkedin.com/in/ankit-vaish-56289162/"
    }
  ];

  return (
    <section 
      className="py-[40px] md:py-[65px] bg-cover bg-no-repeat w-full"
      style={{ backgroundImage: 'url(/images/leadership-bg.png)', backgroundSize: '100% 100%' }}
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
          
          {/* Slider controls (Arrows) */}
          <div className="flex space-x-2 mt-8 absolute md:bottom-[-60px] left-0">
            <button 
              onClick={() => scroll("left")}
              className="w-[32px] h-[32px] rounded-full bg-white text-[#0795F8] flex items-center justify-center hover:bg-gray-100 shadow-md transition-colors"
              aria-label="Previous"
            >
              &lt;
            </button>
            <button 
              onClick={() => scroll("right")}
              className="w-[32px] h-[32px] rounded-full bg-white text-[#0795F8] flex items-center justify-center hover:bg-gray-100 shadow-md transition-colors"
              aria-label="Next"
            >
              &gt;
            </button>
          </div>
        </div>
        
        {/* Right Slider */}
        <div className="w-full lg:w-[65%] xl:w-[60%]">
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 pt-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {team.map((member, idx) => (
              <div key={idx} className="shrink-0 snap-center mx-[10px] md:mx-[15px] w-[260px] md:w-[280px]">
                <div className="bg-white rounded-[6px] pt-[14px] px-[12px] pb-0 h-full flex flex-col shadow-lg">
                  <div className="w-full h-[250px] relative rounded-sm overflow-hidden mb-0">
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      fill 
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="w-full flex items-end justify-between px-[7px] py-[10px] md:py-[12px] mt-auto">
                    <div className="flex-1">
                      <h5 className="text-[#0A080C] text-[16px] leading-[28px] font-medium m-0">{member.name}</h5>
                      <p className="text-[#2C2C2C] text-[15px] leading-[28px] font-light m-0">{member.role}</p>
                    </div>
                    <Link href={member.linkedin} target="_blank" rel="noopener noreferrer" className="shrink-0 ml-2 mb-1">
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
      
      {/* Hide scrollbar styles for WebKit */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
