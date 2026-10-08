import Image from "next/image";
import Link from "next/link";

export default function HomeTechnology() {
  return (
    <section className="relative overflow-hidden bg-[#0795F8]">
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="absolute w-full h-full object-cover z-0 hidden"
      >
        <source src="/wp-content/themes/probus/assets/images/technology.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 pt-[50px] md:pt-[70px] pb-[70px]">
        <div className="container mx-auto px-4 md:px-[15px] max-w-[1140px]">
          <div className="flex flex-wrap -mx-[15px] items-center">
            
            <div className="w-full lg:w-1/2 px-[15px]">
              <div className="text-left m-0 mb-[30px] lg:mb-0">
                <h6 className="text-white uppercase font-medium tracking-wide mb-2 inline-block border-b-[3px] border-white pb-1 text-[13px] font-sans">
                  OVERVIEW
                </h6>
                <h2 className="text-white text-[32px] md:text-[40px] font-bold leading-tight mt-2 font-sans mb-[20px]">
                  Ensuring A Greener Planet by leveraging Our Strengths in Communications & Data Analytics
                </h2>
                <p className="text-white font-normal text-[16px] mb-[30px] font-sans leading-[24px]">
                  At Probus, we specialize in delivering innovative energy solutions that drive efficiency and sustainability 
                </p>
                
                <ul className="flex flex-wrap m-0 p-0 list-none mb-[40px]">
                  {[
                    { img: "icon01-1.png", text: "EXPERTISE IN ENERGY EFFICIENCY" },
                    { img: "icon02-1.png", text: "IOT-POWERED AUTOMATION" },
                    { img: "icon03-2.png", text: "SMART METERING SOLUTIONS" },
                    { img: "icon04-2.png", text: "SMART GRID INTEGRATION" }
                  ].map((item, idx) => (
                    <li key={idx} className="w-1/2 mb-[30px] pr-[15px] flex items-center group cursor-pointer">
                      <div className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center mr-[15px] shrink-0">
                        <Image src={`/wp-content/uploads/2025/06/${item.img}`} alt={item.text} width={30} height={30} className="w-auto max-h-[30px] object-contain transition-transform duration-300 ease-in-out group-hover:scale-110" />
                      </div>
                      <p className="text-white text-[14px] font-medium leading-[20px] font-sans m-0">
                        {item.text}
                      </p>
                    </li>
                  ))}
                </ul>
                <Link href="/about-us" className="inline-flex items-center justify-center bg-[#033361] hover:bg-[#20202d] text-white text-[15px] font-medium h-[50px] px-[35px] rounded-[30px] transition-colors duration-300 font-sans">
                  Know More About Us
                </Link>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 px-[15px] mt-[20px] lg:mt-0">
               <div className="relative">
                 <Image 
                   src="/wp-content/uploads/2025/06/overviewRimg-1.png" 
                   alt="Grid Image 1" 
                   width={800} 
                   height={600} 
                   className="w-full h-auto object-cover block" 
                 />
               </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
