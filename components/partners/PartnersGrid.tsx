"use client";

import Image from "next/image";
import { useState } from "react";

export default function PartnersGrid() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, label: "Strategic Alliance" },
    { id: 1, label: "Technology Partners" },
    { id: 2, label: "Certifications" },
    { id: 3, label: "Customers" },
  ];

  const tabData = {
    0: [
      "/images/uploads/2025/06/pa1.png",
      "/images/uploads/2025/06/pa2.png",
      "/images/uploads/2025/06/pa5.png",
      "/images/uploads/2025/06/pa7.png",
      "/images/uploads/2025/06/aew.png",
      "/images/uploads/2025/06/cu15.png",
    ],
    1: [
      "/images/uploads/2025/06/p1-1-1.png",
      "/images/uploads/2025/06/p2-1.png",
      "/images/uploads/2025/06/p3-1.png",
      "/images/uploads/2025/06/p4-1.png",
      "/images/uploads/2025/06/p5-1.png",
      "/images/uploads/2025/06/p6-1.png",
      "/images/uploads/2025/06/p7-1.png",
      "/images/uploads/2025/06/p8-1.png",
      "/images/uploads/2025/06/p9-1.png",
    ],
    2: [
      "/images/uploads/2025/06/c5.jpg",
      "/images/uploads/2025/06/c4.png",
      "/images/uploads/2025/06/c3.png",
      "/images/uploads/2025/06/c2.png",
      "/images/uploads/2025/06/c1.png",
    ],
    3: [
      "/images/uploads/2025/06/cu1.png",
      "/images/uploads/2025/06/cu2.png",
      "/images/uploads/2025/06/cu10.png",
      "/images/uploads/2025/06/cu9.png",
      "/images/uploads/2025/06/cu8.png",
      "/images/uploads/2025/06/cu7.png",
      "/images/uploads/2025/06/cu6.png",
      "/images/uploads/2025/06/cu5.png",
      "/images/uploads/2025/06/cu4.png",
      "/images/uploads/2025/06/cu3.png",
      "/images/uploads/2025/06/cu11.png",
      "/images/uploads/2025/06/cu12.png",
      "/images/uploads/2025/06/cu13.png",
      "/images/uploads/2025/06/cu14.png",
    ],
  };

  return (
    <section className="py-[60px] bg-white">
      <div className="container mx-auto px-4 max-w-[1140px]">
        <div className="text-center mb-[30px]">
          <h2 className="text-[28px] md:text-[35px] font-bold text-[#000000] font-sans">
            Meet our trusted partners
          </h2>
        </div>
        
        <div>
          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center items-center gap-[15px] mb-[50px]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-[6px] px-[20px] text-[13px] font-medium font-sans rounded-[20px] cursor-pointer transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-sm hover:shadow ${
                  activeTab === tab.id
                    ? "bg-[#7A7A7A] text-white"
                    : "bg-[#C4C4C4] text-white hover:bg-[#7A7A7A]"
                }`}
                style={{ cursor: "pointer" }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[200px]">
            <div className="flex flex-wrap justify-center items-center gap-x-[50px] gap-y-[40px] max-w-[1000px] mx-auto">
              {tabData[activeTab as keyof typeof tabData].map((logo, index) => (
                <div key={index} className="relative flex justify-center items-center h-[50px] md:h-[60px]">
                  <Image 
                    src={logo} 
                    alt="Partner Logo" 
                    width={180}
                    height={60}
                    className="max-h-[50px] md:max-h-[60px] w-auto max-w-[180px] object-contain mix-blend-multiply"
                    style={{ width: "auto", height: "auto" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
