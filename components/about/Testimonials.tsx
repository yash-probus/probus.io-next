import Image from "next/image";

export default function Testimonials() {
  return (
    <section 
      className="pb-[160px] bg-no-repeat w-full bg-white"
      style={{ backgroundImage: 'url(/wp-content/themes/probus/assets/images/bg-htesti.png)', backgroundPosition: 'right 0px bottom -60px' }}
    >
      <div className="bg-[#0795F8] pt-[54px]">
        <div className="container mx-auto px-4 md:px-[15px] max-w-7xl">
          <div className="flex flex-wrap -mx-4 items-start">
            
            {/* Left Col */}
            <div className="w-full lg:w-5/12 px-4 mb-[40px] lg:mb-0 relative">
              <div className="text-left md:pr-[30px]">
                <h6 className="text-white uppercase font-medium tracking-wide mb-2 inline-block border-b-2 border-white pb-1 text-[13px]">
                  TESTIMONIALS
                </h6>
                <h2 className="text-white text-[32px] md:text-[40px] font-medium leading-tight mt-2 font-sans">
                  Collaborating for success and change
                </h2>
              </div>
              
              <div className="mt-[85px] md:mb-[-100px] relative z-10 w-[85%] mx-auto md:mx-0">
                <Image 
                  src="/wp-content/uploads/2025/06/testmain.png" 
                  alt="Collaborating for success and change" 
                  width={500} 
                  height={350} 
                  className="w-full h-auto rounded-[12px]"
                />
              </div>
            </div>
            
            {/* Right Col */}
            <div className="w-full lg:w-7/12 px-4 md:pl-[60px] relative">
              <div className="max-w-[520px] mx-auto relative mb-[50px]">
                
                {/* SVG Quote Before */}
                <div className="hidden md:block absolute w-[100px] h-[100px] -left-[130px] top-[0px] z-10">
                  <Image src="/wp-content/themes/probus/assets/images/3.svg" alt="Quote" fill className="object-contain" />
                </div>

                {/* SVG Quote After */}
                <div className="hidden md:block absolute w-[100px] h-[100px] -right-[130px] -bottom-[15px] z-10">
                  <Image src="/wp-content/themes/probus/assets/images/2.svg" alt="Quote" fill className="object-contain" />
                </div>

                <div className="pt-[60px]">
                  <div className="relative">
                    <p className="text-[20px] leading-[30px] text-white font-light font-sans z-10 relative m-0">
                      Probus is truly agile – flexible and fast. Commit till the end to deliver tasks even with all the situational challenges on the field. A true partner to make you successful.
                    </p>
                  </div>
                  
                  <div className="flex items-center mt-[40px]">
                    <div className="w-[65px] h-[65px] rounded-full overflow-hidden shrink-0 mr-[10px] bg-white border-2 border-white">
                      <Image 
                        src="/wp-content/uploads/2025/06/anil_vaishy.png" 
                        alt="Anil Vaishy" 
                        width={65} 
                        height={65} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-white text-[14px] leading-[28px] font-normal m-0 font-sans">Anil Vaishy</h3>
                      <span className="text-white text-[14px] leading-[28px] font-light">VP SCADA BSES Yamuna Power</span>
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
