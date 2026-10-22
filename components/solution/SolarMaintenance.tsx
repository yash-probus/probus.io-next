"use client";

import Image from "next/image";
import Link from "next/link";

export default function SolarMaintenance() {
  const maintenanceFeatures = [
    {
      icon: "/images/uploads/2025/06/solr_mainten_icon01.png",
      text: "Strings not giving any data will be shown in the FMS page",
    },
    {
      icon: "/images/uploads/2025/06/solr_mainten_icon02.png",
      text: "User can create an FMS outage and its reason",
    },
    {
      icon: "/images/uploads/2025/06/solr_mainten_icon03.png",
      text: "Parent mapping to properly identify the faulty string",
    },
  ];

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
                Step 4: Maintenance
              </h6>
            </div>
            <h1 className="text-white text-[28px] md:text-[40px] font-medium leading-[1.2] font-sans m-0">
              Web application to monitor SLA and to carry out O&M
            </h1>
          </div>

          {/* Solar Maintenance Card */}
          <div className="max-w-[1200px] mx-auto">
            <div className="rounded-[12px] p-[35px_20px] sm:p-[45px_30px] md:p-[50px_60px] bg-gradient-to-t from-[#00FFD8] to-[#0780FC] shadow-lg">
              {/* Row of 3 Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] md:gap-[30px] mb-[40px] md:mb-[50px]">
                {maintenanceFeatures.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-[15px] p-[10px_15px] md:p-[10px_20px] ${
                      index !== maintenanceFeatures.length - 1
                        ? "md:border-r border-[#72c2ff]/60 border-dashed"
                        : ""
                    }`}
                  >
                    <Image
                      src={item.icon}
                      alt={item.text}
                      width={48}
                      height={48}
                      className="w-[44px] h-[44px] md:w-[48px] md:h-[48px] shrink-0 object-contain"
                    />
                    <h5 className="font-sans text-[15px] md:text-[16px] leading-[22px] md:leading-[24px] text-white font-normal m-0 text-left">
                      {item.text}
                    </h5>
                  </div>
                ))}
              </div>

              {/* Big Maintenance Image */}
              <div className="max-w-[1000px] mx-auto">
                <Image
                  src="/images/uploads/2025/06/solar-maintation-big.png"
                  alt="Solar SLA and O&M Dashboard"
                  width={950}
                  height={480}
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
