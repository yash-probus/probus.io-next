import Image from "next/image";
import Link from "next/link";

export default function HomeSolutionsGrid() {
  const cards = [
    {
      title: "Smart Metering Solutions",
      desc: "Gain complete visibility and control over your energy consumption with our solutions",
      img: "pricing.png",
      link: "/smart-meter"
    },
    {
      title: "Solar Solutions",
      desc: "Embrace renewable energy with our scalable and customized solar solutions",
      img: "oemsbiogas.png",
      link: "/solar-solutions"
    },
    {
      title: "Smart Grid Integration",
      desc: "Seamlessly integrate into the intelligent grid of the future with our smart grid solutions",
      img: "grid-1.png",
      link: "/smart-grid-integration"
    }
  ];

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 md:px-[15px] max-w-[1140px] pt-[70px]">
        <div className="text-center mb-[40px]">
          <h2 className="text-[#000000] text-[32px] md:text-[38px] font-bold leading-[1.3] font-sans mb-[15px]">
            Transform your Energy Efficiency Needs
          </h2>
          <p className="text-[#000000] font-normal text-[18px] md:text-[20px] font-sans leading-[1.6] max-w-[800px] mx-auto px-[15px]">
            Explore our comprehensive range of energy solutions and take the first step towards a more sustainable future
          </p>
        </div>
      </div>
      
      <div className="flex flex-wrap w-full max-w-[1920px] mx-auto mt-[30px] md:mt-[40px]">
        {cards.map((card, idx) => (
          <div key={idx} className="w-full md:w-1/3 relative group">
            <div className="w-full relative z-[2]">
              <Image 
                src={`/wp-content/uploads/2025/06/${card.img}`} 
                alt={card.title} 
                width={800}
                height={600}
                className="w-full h-auto block relative z-[2] transition-transform duration-[400ms] ease-in-out group-hover:scale-[1.04] group-hover:z-[3]" 
              />
            </div>
            
            <div className="absolute top-0 left-0 p-[20px_25px] xl:p-[40px_45px] text-white z-[4] w-full h-full flex flex-col justify-start pointer-events-none">
              <h3 className="text-[22px] xl:text-[24px] leading-[30px] xl:leading-[44px] font-bold mb-[12px] font-sans drop-shadow-sm pointer-events-auto">
                {card.title}
              </h3>
              <p className="text-[16px] leading-[24px] mb-[20px] font-normal font-sans max-w-[95%] drop-shadow-sm pointer-events-auto">
                {card.desc}
              </p>
              <div className="mt-0 flex pointer-events-auto">
                <Link 
                  href={card.link} 
                  className="bg-white rounded-[20px] h-[40px] inline-flex items-center px-[11px] group-hover:px-[20px] transition-all duration-300 ease-in-out"
                >
                  <div className="overflow-hidden flex items-center transition-all duration-300 ease-in-out max-w-0 group-hover:max-w-[100px] opacity-0 group-hover:opacity-100 mr-0 group-hover:mr-[8px]">
                    <span className="text-[#6BA9E4] text-[16px] font-medium whitespace-nowrap">
                      Know More
                    </span>
                  </div>
                  <div className="w-[20px] h-[20px] shrink-0 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-[14px] h-[14px] fill-[#6BA9E4]" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
