import Image from "next/image";
import Link from "next/link";

export default function SolutionsList() {
  const sections = [
    {
      title: "Smart Metering Solutions",
      desc: "Gain complete visibility and control over your energy consumption with our smart metering solutions.",
      img: "/images/uploads/2025/06/solution_01.jpg",
      link: "/smart-meter-solutions",
      reverse: false,
      features: [
        { icon: "/images/uploads/2025/06/meter01.png", text: "REAL-TIME ENERGY MONITORING" },
        { icon: "/images/uploads/2025/06/meter02.png", text: "PATENTED COMMUNICATIONS NIC CARD – RF/NBIOT/4G (BLE INTEGRATED)" },
        { icon: "/images/uploads/2025/06/meter03.png", text: "AUTOMATED METER READING" },
        { icon: "/images/uploads/2025/06/meter04.png", text: "IOT-POWERED AUTOMATION" },
      ]
    },
    {
      title: "Smart Grid Integration",
      desc: "Seamlessly integrate into the intelligent grid of the future with our smart grid solutions.",
      img: "/images/uploads/2025/06/solution_03.jpg",
      link: "/smart-grid-integration",
      reverse: true,
      bg: true,
      features: [
        { icon: "/images/uploads/2025/06/grid01-1.png", text: "GRID OPTIMIZATION AND STABILITY" },
        { icon: "/images/uploads/2025/06/meter04.png", text: "DEMAND RESPONSE MANAGEMENT" },
        { icon: "/images/uploads/2025/06/grid03.png", text: "ADVANCED GRID ANALYTICS" },
        { icon: "/images/uploads/2025/06/grid02.png", text: "INDUSTRY-FIRST WIRELESS SENSORS" },
      ]
    },
    {
      title: "Solar Solutions",
      desc: "Embrace renewable energy with our scalable and customized solar solutions.",
      img: "/images/uploads/2025/06/solution_02.jpg",
      link: "/solar-solutions",
      reverse: false,
      features: [
        { icon: "/images/uploads/2025/06/solar01.png", text: "TRULY WIRELESS STRING AND MODULE LEVEL MONITORING" },
        { icon: "/images/uploads/2025/06/solar03.png", text: "COST SAVINGS AND ROI" },
        { icon: "/images/uploads/2025/06/solar02.png", text: "REAL-TIME VISIBILITY – SOILING AND WEATHER IMPACT" },
        { icon: "/images/uploads/2025/06/meter04.png", text: "INCREASED OPERATIONAL PLANT PERFORMANCE" },
      ]
    }
  ];

  return (
    <div className="w-full">
      {sections.map((section, idx) => (
        <section 
          key={idx} 
          className={`py-[60px] md:py-[100px] w-full ${section.bg ? "bg-[#F9F9F9]" : "bg-white"}`}
        >
          <div className="container mx-auto px-4 md:px-[15px] max-w-[1140px]">
            <div className={`flex flex-col lg:flex-row items-center gap-[40px] lg:gap-[60px] ${section.reverse ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Content Side */}
              <div className="w-full lg:w-1/2">
                <div className="mb-[40px]">
                  <h2 className="text-[28px] md:text-[35px] font-bold text-[#000000] mb-[15px] leading-tight font-sans">
                    {section.title}
                  </h2>
                  <p className="text-[#000000] font-normal text-[15px] leading-[26px] font-sans">
                    {section.desc}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-x-[30px] gap-y-[40px] mb-[45px]">
                  {section.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-[15px]">
                      <div className="flex-shrink-0 w-[45px] h-[45px] md:w-[55px] md:h-[55px] relative">
                        <Image src={feat.icon} alt={feat.text} fill className="object-contain" />
                      </div>
                      <p className="text-[#000000] font-bold text-[10px] md:text-[11px] uppercase tracking-wide leading-[16px] font-sans pt-[5px]">
                        {feat.text}
                      </p>
                    </div>
                  ))}
                </div>

                <Link href={section.link} className="inline-flex justify-center items-center bg-[#033361] hover:bg-black text-white text-[13px] font-medium h-[40px] px-[30px] rounded-[30px] transition-colors duration-300 font-sans">
                  Know More
                </Link>
              </div>

              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                <div className="relative w-full aspect-[4/3] rounded-[15px] overflow-hidden group">
                  <Image 
                    src={section.img} 
                    alt={section.title} 
                    fill 
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-[1.05]"
                  />
                </div>
              </div>
              
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
