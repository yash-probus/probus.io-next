import Image from "next/image";
import SectionHeading from "@/components/common/SectionHeading";
import Container from "@/components/common/Container";

export default function CompanyJourney() {
  const journeys = [
    {
      year: "2017",
      image: "/wp-content/uploads/2025/06/2017.png",
      items: [
        "India's first Wireless Distribution Grid Monitoring Platform Deployed across 3 leading utilities",
        "3 Patents"
      ]
    },
    {
      year: "2020",
      image: "/wp-content/uploads/2025/06/2020.png",
      items: [
        "Distribution Grid Monitoring expands across 4 utilities including LV monitoring",
        "Raise Seed funding"
      ]
    },
    {
      year: "2023",
      image: "/wp-content/uploads/2025/06/2017.png", // Original HTML reuses 2017.png
      items: [
        "450,000 LV assets being monitored on our analytical platform",
        "Deploy pathbreaking wireless solar string monitoring sensors",
        "Series A round raised"
      ]
    },
    {
      year: "2027",
      image: "/wp-content/uploads/2025/06/2020.png", // Original HTML reuses 2020.png
      items: [
        "40 million assets on platform",
        "4 million tonnes of decarbonization"
      ]
    }
  ];

  return (
    <section className="py-[40px] md:py-[65px] bg-white overflow-hidden">
      <Container size="wide">
        <SectionHeading
          badge="OUR JOURNEY"
          title="Building the future together"
          align="left"
          className="mb-[60px]"
        />

        <div className="relative mt-[60px] max-w-[1200px] mx-auto hidden md:block">
          {/* Horizontal Line connecting the dots */}
          <div className="absolute top-[172px] left-[11%] w-[78%] h-[2px] bg-[#9E9E9E] z-10 flex justify-between items-center">
            {/* Dots */}
            <div className="w-[12px] h-[12px] bg-[#033361] rounded-full shrink-0 -ml-[6px]"></div>
            <div className="w-[12px] h-[12px] bg-[#033361] rounded-full shrink-0 -ml-[6px]"></div>
            <div className="w-[12px] h-[12px] bg-[#033361] rounded-full shrink-0 -mr-[6px]"></div>
            <div className="w-[12px] h-[12px] bg-[#033361] rounded-full shrink-0 -mr-[6px]"></div>
          </div>

          <div className="flex justify-between relative z-20">
            {journeys.map((journey, idx) => (
              <div key={idx} className="w-[22%]">
                <div className="h-[160px] mb-[25px] w-[90%] overflow-hidden rounded-[8px] mx-auto shadow-sm">
                  <Image 
                    src={journey.image} 
                    alt={journey.year} 
                    width={250} 
                    height={160} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Fixed height space for items */}
                <div className="min-h-[120px]">
                  <ul className="list-none p-0 m-0">
                    {journey.items.map((item, i) => (
                      <li key={i} className="relative pl-[15px] mb-[10px] text-[13px] leading-[20px] text-[#000] font-light">
                        <span className="absolute left-0 top-[7px] w-[6px] h-[6px] bg-[#033361] rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <h3 className="text-[#033361] text-[26px] leading-[36px] font-medium font-sans mt-[35px] text-center">
                  {journey.year}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View (Stacked) */}
        <div className="md:hidden space-y-12 relative">
          <div className="absolute left-[20px] top-0 bottom-0 w-[2px] bg-[#9E9E9E] z-0"></div>
          {journeys.map((journey, idx) => (
            <div key={idx} className="relative z-10 pl-[50px]">
              <div className="absolute left-[15px] top-[20px] w-[12px] h-[12px] bg-[#033361] rounded-full"></div>
              <h3 className="text-[#033361] text-[26px] leading-[36px] font-medium font-sans mb-4">
                {journey.year}
              </h3>
              <div className="h-[160px] mb-[20px] w-full overflow-hidden rounded-[8px] shadow-sm">
                <Image 
                  src={journey.image} 
                  alt={journey.year} 
                  width={300} 
                  height={160} 
                  className="w-full h-full object-cover"
                />
              </div>
              <ul className="list-none p-0 m-0">
                {journey.items.map((item, i) => (
                  <li key={i} className="relative pl-[15px] mb-[10px] text-[14px] leading-[22px] text-[#000] font-light">
                    <span className="absolute left-0 top-[8px] w-[6px] h-[6px] bg-[#033361] rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}
