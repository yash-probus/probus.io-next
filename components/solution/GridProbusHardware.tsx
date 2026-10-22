"use client";

import Image from "next/image";
import Link from "next/link";

export default function GridProbusHardware() {
  const nicFeatures = [
    {
      icon: "/images/uploads/2025/06/nic_icon01.png",
      text: "Single PCB that is designed as per the meter",
    },
    {
      icon: "/images/uploads/2025/06/nic_icon02.png",
      text: "Better performance as no extra soldering parts are exposed",
    },
    {
      icon: "/images/uploads/2025/06/nic_icon03.png",
      text: "The card has automotive-grade components",
    },
    {
      icon: "/images/uploads/2025/06/nic_icon04.png",
      text: "Silicon based protective surface coating",
    },
  ];

  const leftGatewayFeatures = [
    {
      icon: "/images/uploads/2025/06/site-ser05.png",
      text: "Dual-SIM, ensuring seamless connectivity and data transmission",
    },
    {
      icon: "/images/uploads/2025/06/site-ser01.png",
      text: "Equipped with dual antennas, with normal and diversity connections",
    },
    {
      icon: "/images/uploads/2025/06/site-ser02.png",
      text: "Option of multiple RF receivers",
    },
  ];

  const rightGatewayFeatures = [
    {
      icon: "/images/uploads/2025/06/site-ser06.png",
      text: "Optional High-Gain RF Antenna for max. range",
    },
    {
      icon: "/images/uploads/2025/06/site-ser08-1.png",
      text: "Neutral-phase reversal, can run on any one phase",
    },
    {
      icon: "/images/uploads/2025/06/site-ser07.png",
      text: "10kV protected 3-Phase Power Supply",
    },
  ];

  return (
    <>
      {/* Close button that navigates back */}
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

      {/* Step 2 Top Section: Network Interface Card (NIC) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#04CBFB] to-[#4887FF] pt-[110px] pb-[70px] md:pb-[95px] after:content-[''] after:absolute after:top-0 after:left-0 after:w-[180%] after:h-full after:ml-[-40%] after:rounded-[50%] after:shadow-[0_100px_0_#ffffff] after:pointer-events-none after:z-[1]">
        <div className="container mx-auto px-4 md:px-6 relative z-[2] max-w-[1240px]">
          {/* Top Heading */}
          <div className="text-center mb-[20px] relative">
            <div className="flex flex-col items-center mb-3">
              <div className="w-[1px] h-[60px] bg-white relative">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[5px] h-[5px] bg-white rounded-full"></div>
              </div>
              <h6 className="text-white text-[14px] leading-[19px] font-sans font-normal uppercase tracking-wider mt-3">
                Step 2: Probus Hardware
              </h6>
            </div>
          </div>

          {/* NIC Card Section */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-[30px] md:gap-[60px] max-w-[1100px] mx-auto pt-[5px]">
            {/* Meter Image with Inner Card Overlay */}
            <div className="relative w-full max-w-[340px] md:max-w-[400px] shrink-0 order-2 md:order-1">
              <div className="relative w-full aspect-square">
                <Image
                  src="/images/sms/sms-meter.png"
                  alt="Probus Meter"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain mix-blend-screen"
                  priority
                />
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src="/images/uploads/2025/06/sms-meterinner.png"
                    alt="Network Interface Card (NIC)"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* NIC Content */}
            <div className="w-full md:flex-1 order-1 md:order-2">
              <div className="text-center md:text-left mb-[15px]">
                <h2 className="text-white text-[26px] md:text-[30px] font-medium leading-[36px] md:leading-[44px] font-sans m-0">
                  Network Interface Card (NIC)
                </h2>
              </div>

              <ul className="list-none p-0 m-0 mt-[15px] space-y-[12px] md:space-y-[15px]">
                {nicFeatures.map((item, index) => (
                  <li key={index} className="flex items-center py-[5px]">
                    <Image
                      src={item.icon}
                      alt={item.text}
                      width={30}
                      height={30}
                      className="w-[30px] h-[30px] mr-[13px] shrink-0 object-contain"
                    />
                    <h5 className="font-sans text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] text-white font-normal m-0">
                      {item.text}
                    </h5>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gateway Section: 2/4-core processor Gateway */}
      <section
        className="py-[60px] md:py-[80px] bg-[#ffffff] bg-no-repeat bg-left-top"
        style={{
          backgroundImage: "url(/images/bg-contactSec.png)",
          backgroundSize: "80%",
        }}
      >
        <div className="container mx-auto px-4 md:px-6 max-w-[1240px]">
          {/* Section Heading */}
          <div className="max-w-[440px] mx-auto text-center mb-[40px] md:mb-[50px]">
            <h1 className="text-[26px] md:text-[30px] leading-[36px] md:leading-[44px] text-black font-medium font-sans mb-[12px]">
              2/4-core processor Gateway with the highest Gateway to Meter ratio
            </h1>
          </div>

          {/* Gateway Features Grid */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-[20px] lg:gap-[40px] max-w-[1150px] mx-auto">
            {/* Left 3 Features */}
            <ul className="list-none p-0 m-0 w-full lg:w-[calc(50%-195px)] order-2 lg:order-1">
              {leftGatewayFeatures.map((item, index) => (
                <li
                  key={index}
                  className={`flex items-center py-[20px] md:py-[25px] ${
                    index !== leftGatewayFeatures.length - 1
                      ? "border-b-[2px] border-dashed border-[#ababab]"
                      : ""
                  }`}
                >
                  <Image
                    src={item.icon}
                    alt={item.text}
                    width={50}
                    height={50}
                    className="w-[45px] h-[45px] md:w-[50px] md:h-[50px] mr-[20px] shrink-0 object-contain"
                  />
                  <h5 className="font-sans text-[15px] md:text-[17px] leading-[24px] md:leading-[26px] text-black font-medium m-0">
                    {item.text}
                  </h5>
                </li>
              ))}
            </ul>

            {/* Center Gateway Image */}
            <div className="w-full max-w-[300px] md:max-w-[350px] text-center my-[20px] lg:my-0 order-1 lg:order-2 shrink-0">
              <Image
                src="/images/uploads/2025/06/sms-meter-middle.png"
                alt="2/4-core processor Gateway with the highest Gateway to Meter ratio"
                width={350}
                height={400}
                className="w-full h-auto mx-auto object-contain"
              />
            </div>

            {/* Right 3 Features */}
            <ul className="list-none p-0 m-0 w-full lg:w-[calc(50%-195px)] order-3">
              {rightGatewayFeatures.map((item, index) => (
                <li
                  key={index}
                  className={`flex items-center py-[20px] md:py-[25px] ${
                    index !== rightGatewayFeatures.length - 1
                      ? "border-b-[2px] border-dashed border-[#ababab]"
                      : ""
                  }`}
                >
                  <Image
                    src={item.icon}
                    alt={item.text}
                    width={50}
                    height={50}
                    className="w-[45px] h-[45px] md:w-[50px] md:h-[50px] mr-[20px] shrink-0 object-contain"
                  />
                  <h5 className="font-sans text-[15px] md:text-[17px] leading-[24px] md:leading-[26px] text-black font-medium m-0">
                    {item.text}
                  </h5>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
