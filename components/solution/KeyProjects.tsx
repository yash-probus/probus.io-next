import Image from "next/image";

export default function KeyProjects() {
  const projectLogos = [
    "/wp-content/uploads/2025/06/key10.png",
    "/wp-content/uploads/2025/06/key03-1.png",
    "/wp-content/uploads/2025/06/key02-1-1.png",
    "/wp-content/uploads/2025/06/key05-1.png",
    "/wp-content/uploads/2025/06/key04-1.png",
    "/wp-content/uploads/2025/06/key06.png",
    "/wp-content/uploads/2025/06/key07.png",
    "/wp-content/uploads/2025/06/key08.png",
    "/wp-content/uploads/2025/06/key09.png",
    "/wp-content/uploads/2025/06/key11.png",
    "/wp-content/uploads/2025/06/key01-1.png",
    "/wp-content/uploads/2025/06/key12.png",
  ];

  return (
    <section className="py-[60px] md:py-[100px] bg-[#f9f9f9]">
      <div className="container mx-auto px-4 md:px-[15px] max-w-[1140px]">
        <div className="text-left mb-[40px] md:mb-[60px]">
          <h6 className="text-[#333] uppercase font-medium tracking-wide mb-2 inline-block border-b-[3px] border-[#333] pb-1 text-[13px] font-sans">
            KEY PROJECTS
          </h6>
          <h2 className="text-[#000] text-[32px] md:text-[40px] font-bold leading-tight mt-2 font-sans">
            Integration with integrity
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-[40px] md:gap-[60px] max-w-[1140px] mx-auto overflow-hidden">
          {/* We show only 4 for the static layout matching screenshot 2, or 4 at a time */}
          {projectLogos.slice(0, 4).map((logo, index) => (
            <div key={index} className="relative flex justify-center items-center w-[160px] h-[160px] md:w-[200px] md:h-[200px] rounded-full border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
              <Image 
                src={logo} 
                alt={`Key Project ${index + 1}`} 
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
