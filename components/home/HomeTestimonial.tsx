import Image from "next/image";

export default function HomeTestimonial() {
  return (
    <section 
      className="pb-[160px] bg-no-repeat w-full bg-white"
      style={{ backgroundImage: 'url(/wp-content/themes/probus/assets/images/bg-htesti.png)', backgroundPosition: 'right 0px bottom -60px' }}
    >
      <div className="bg-[#0795F8] pt-[70px]">
        <div className="container mx-auto px-4 md:px-[15px] max-w-[1140px]">
          <div className="flex flex-wrap -mx-[15px] items-start">
            
            {/* Left Col */}
            <div className="w-full lg:w-5/12 px-[15px] mb-[40px] lg:mb-0 relative">
              <div className="text-left">
                <h6 className="text-white uppercase font-medium tracking-wide mb-2 inline-block border-b-[3px] border-white pb-1 text-[13px] font-sans">
                  TESTIMONIALS
                </h6>
                <h2 className="text-white text-[32px] md:text-[40px] font-bold leading-[50px] mt-[10px] font-sans pr-10">
                  Collaborating for success and change
                </h2>
              </div>
              
              <div className="mt-[60px] md:mb-[-100px] relative z-10 w-[95%]">
                <Image 
                  src="/wp-content/uploads/2025/06/testmain.png" 
                  alt="Collaborating for success and change" 
                  width={500} 
                  height={350} 
                  className="w-full h-auto rounded-[12px] shadow-lg"
                />
              </div>
            </div>
            
            {/* Right Col */}
            <div className="w-full lg:w-7/12 px-[15px] md:pl-[60px] relative mt-[30px] lg:mt-0">
              <div className="max-w-[550px] mx-auto relative mb-[50px]">
                
                {/* SVG Quote Before */}
                <div className="hidden md:block absolute w-[70px] h-[70px] -left-[100px] top-[0px] z-10">
                  <Image src="/wp-content/themes/probus/assets/images/3.svg" alt="Quote" fill className="object-contain" />
                </div>

                {/* SVG Quote After */}
                <div className="hidden md:block absolute w-[70px] h-[70px] -right-[50px] bottom-[30px] z-10">
                  <Image src="/wp-content/themes/probus/assets/images/2.svg" alt="Quote" fill className="object-contain" />
                </div>

                <div className="pt-[40px]">
                  <div className="relative">
                    <p className="text-[22px] leading-[36px] text-white font-light font-sans z-10 relative m-0 italic pr-8">
                      Probus is truly agile – flexible and fast. Commit till the end to deliver tasks even with all the situational challenges on the field. A true partner to make you successful.
                    </p>
                  </div>
                  
                  <div className="flex items-center mt-[40px]">
                    <div className="w-[70px] h-[70px] rounded-full overflow-hidden shrink-0 mr-[20px] bg-white border-[3px] border-white">
                      <Image 
                        src="/wp-content/uploads/2025/06/anil_vaishy.png" 
                        alt="Anil Vaishy" 
                        width={70} 
                        height={70} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-white text-[16px] leading-[20px] font-bold m-0 font-sans mb-[5px]">Anil Vaishy</h3>
                      <span className="text-white text-[14px] leading-[20px] font-normal opacity-90 block">VP SCADA BSES Yamuna Power</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
