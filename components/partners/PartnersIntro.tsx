import Image from "next/image";

export default function PartnersIntro() {
  const items = [
    {
      title: "Smart Meters?",
      desc: "We make communications NIC Cards, Gateways for Meters Technologies – RF Mesh, 4G, NBIoT, Hybrid – 4G + Bluetooth, NBIoT + Bluetooth Data Analytics for actionable insights",
      img: "/wp-content/uploads/2025/06/icon03-1.png"
    },
    {
      title: "Solar O&M ?",
      desc: "String Monitoring for Central Inverter Solar Plant Advance Analytics for Soiling and clouding",
      img: "/wp-content/uploads/2025/06/solar.png"
    },
    {
      title: "Distribution Automation/ Energy Efficiency?",
      desc: "Industry -first wireless sensor suit for LV grid automation Massive scale data analytics for gird visibility and control",
      img: "/wp-content/uploads/2025/06/icon04-1.png"
    }
  ];

  return (
    <section className="py-[60px] md:py-[80px] bg-white">
      <div className="container mx-auto px-4 md:px-[15px] max-w-[1140px]">
        
        {/* Top Text Content */}
        <div className="mb-[40px] text-left">
          <h2 className="text-[#000000] text-[28px] md:text-[35px] font-bold leading-tight font-sans mb-[15px]">
            The synergy of collaborative endeavors
          </h2>
          <p className="text-[#000000] font-normal text-[16px] leading-[26px] font-sans max-w-[800px]">
            Creativity, ingenuity, and collaboration fuel our success. They enable us to envision new possibilities, devise innovative solutions, and leverage diverse perspectives, propelling us towards continuous growth and remarkable outcomes.
          </p>
        </div>
        
        {/* Blue Box with 3 Columns */}
        <div className="relative w-full rounded-[10px] overflow-hidden bg-[#033361] p-[40px_30px] md:p-[60px_40px]">
          {/* Background Texture Image */}
          <Image 
            src="/wp-content/uploads/2025/06/bg-partners-m1.jpg" 
            alt="Partners Background" 
            fill 
            className="object-cover opacity-80 mix-blend-screen"
          />
          
          <div className="relative z-10 flex flex-wrap -mx-[15px]">
            {items.map((item, idx) => (
              <div 
                key={idx} 
                className={`w-full md:w-1/3 px-[15px] md:px-[30px] mb-[30px] md:mb-0 ${idx !== items.length - 1 ? 'md:border-r md:border-white/20' : ''}`}
              >
                <div className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center mb-[20px]">
                  <Image 
                    src={item.img} 
                    alt={item.title} 
                    width={24} 
                    height={24} 
                    className="max-h-[24px] w-auto object-contain"
                  />
                </div>
                <h6 className="text-white text-[16px] leading-[24px] font-bold font-sans mb-[15px]">
                  {item.title}
                </h6>
                <p className="text-white text-[14px] leading-[22px] font-normal font-sans pr-[10px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
