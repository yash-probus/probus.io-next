import Image from "next/image";
import Link from "next/link";

export default function HomePartners() {
  const partnerLogos = [
    "/wp-content/uploads/2025/06/p1-1-1.png",
    "/wp-content/uploads/2025/06/p2-1.png",
    "/wp-content/uploads/2025/06/p3-1.png",
    "/wp-content/uploads/2025/06/p4-1.png",
    "/wp-content/uploads/2025/06/p5-1.png",
    "/wp-content/uploads/2025/06/p6-1.png",
    "/wp-content/uploads/2025/06/p7-1.png",
    "/wp-content/uploads/2025/06/p8-1.png",
    "/wp-content/uploads/2025/06/p9-1.png",
  ];

  return (
    <section className="py-[60px] md:py-[100px] bg-white">
      <div className="container mx-auto px-4 md:px-[15px] max-w-[1140px]">
        <div className="text-center mb-[50px]">
          <p className="text-[#000000] uppercase text-[12px] md:text-[14px] font-bold font-sans tracking-wide">
            WE ARE TRUSTED BY THE BEST PARTNERS
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-x-[40px] md:gap-x-[80px] gap-y-[40px] mb-[60px] max-w-[1000px] mx-auto">
          {partnerLogos.map((logo, index) => (
            <div key={index} className="relative flex justify-center items-center h-[50px] md:h-[60px]">
              <Image 
                src={logo} 
                alt={`Partner ${index + 1}`} 
                width={150}
                height={60}
                className="max-h-[50px] md:max-h-[60px] max-w-full w-auto h-auto object-contain mix-blend-multiply"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
