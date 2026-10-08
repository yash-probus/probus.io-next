import Image from "next/image";

export default function CompanyOverview() {
  const items = [
    {
      icon: "/wp-content/uploads/2025/06/vision.png",
      title: "VISION",
      description: "To connect and make information available"
    },
    {
      icon: "/wp-content/uploads/2025/06/mission.png",
      title: "MISSION",
      description: "Increase 10X energy consumption with 50% reduction in losses and 40 million tonnes of decarbonization"
    },
    {
      icon: "/wp-content/uploads/2025/06/commit.png",
      title: "COMMITMENT",
      description: "Striving for a greener planet for generations to come"
    }
  ];

  return (
    <section className="py-[65px] bg-white">
      <div className="container mx-auto px-4 md:px-[15px] max-w-7xl">
        <div className="flex flex-wrap -mx-4 items-center">
          
          <div className="w-full lg:w-1/2 px-4 mb-10 lg:mb-0">
            <div className="w-full h-auto">
              <Image 
                src="/wp-content/uploads/2025/06/aboutoverview.jpg" 
                alt="Company Overview" 
                width={800} 
                height={600} 
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 px-4">
            <div className="mb-0">
              <div className="text-left mb-[30px]">
                <h6 className="text-[#0A080C] uppercase font-medium tracking-wide mb-2 inline-block border-b-2 border-black pb-1 text-[13px]">
                  COMPANY OVERVIEW
                </h6>
                <h2 className="text-[#0A080C] text-[32px] md:text-[40px] font-medium leading-tight mt-2 font-sans">
                  WE MAKE THINGS TALK
                </h2>
              </div>
              
              <ul className="list-none mt-[30px] p-0 m-0">
                {items.map((item, idx) => (
                  <li key={idx} className="flex items-center mb-[37px] last:mb-0 w-[90%] max-w-full">
                    <div className="shrink-0 mr-[13px] md:mr-[18px]">
                      <Image 
                        src={item.icon} 
                        alt={item.title} 
                        width={75} 
                        height={75} 
                        className="w-[54px] h-[54px] md:w-[75px] md:h-[75px] rounded-full"
                      />
                    </div>
                    <div>
                      <h4 className="text-[#5F5F5F] text-[12px] md:text-[16px] leading-[28px] font-medium mb-[7px] md:mb-0 uppercase tracking-wide">
                        {item.title}
                      </h4>
                      <p className="text-[#000] text-[16px] md:text-[21px] leading-[26px] md:leading-[27px] font-medium">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
