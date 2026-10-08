import Image from "next/image";
import Link from "next/link";

interface LeverageIoTProps {
  steps: { title: string; num: string; href: string }[];
}

export default function LeverageIoT({ steps }: LeverageIoTProps) {
  return (
    <section 
      className="relative overflow-hidden py-[50px] md:py-[100px]" 
      id="leveragewrap"
      style={{ background: 'linear-gradient(90deg, #0692f9 0%, #04c3ee 48%, #01f1e2 100%)' }}
    >
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-10"
      >
        <source src="/wp-content/themes/probus/assets/images/technology.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10">
        <div className="container mx-auto px-4 md:px-[15px] max-w-[1140px]">
          <div className="flex flex-wrap -mx-[15px] items-center">
            
            {/* Left side text */}
            <div className="w-full lg:w-5/12 px-[15px] mb-[40px] lg:mb-0">
              <div className="text-left m-0">
                <h2 className="text-white text-[32px] md:text-[40px] font-bold leading-[1.2] mb-4 font-sans">
                  Leverage IoT and advanced analytics solutions
                </h2>
                <p className="text-white text-[16px] leading-[24px] mb-8 font-sans">
                  Implement IoT services for your company for enhancing operational effectiveness data with real-time data.
                </p>
                <div className="mt-[30px]">
                  <Link 
                    href="/contact-us" 
                    className="inline-flex items-center justify-center bg-white hover:bg-[#033361] text-[#0795F8] hover:text-white text-[15px] font-medium h-[50px] px-[35px] rounded-[30px] transition-colors duration-300 font-sans"
                  >
                    Connect with our team
                  </Link>
                </div>
              </div>
            </div>

            {/* Right side ring */}
            <div className="w-full lg:w-7/12 px-[15px]">
              <div className="relative max-w-[500px] mx-auto min-h-[400px] flex items-center justify-center">
                <div className="softhardRing relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
                  <Image 
                    src="/wp-content/themes/probus/assets/images/soft-hard-cercle.png" 
                    alt="Soft Hard Circle" 
                    fill 
                    className="object-contain"
                  />
                  
                  {/* Absolute positioned numbers */}
                  {/* Top: n1 */}
                  <div className="number-list n1 absolute -top-[20px] left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
                    <Link href={steps[0].href} className="flex flex-col items-center justify-center bg-transparent p-2 text-white text-center group no-underline">
                      <span className="text-[24px] font-bold font-sans bg-[#0795F8] w-[40px] h-[40px] rounded-full flex items-center justify-center border-2 border-white">{steps[0].num}</span>
                      <span className="text-[12px] md:text-[14px] font-medium mt-1 font-sans text-center whitespace-nowrap px-2">{steps[0].title}</span>
                    </Link>
                  </div>

                  {/* Right: n2 */}
                  <div className="number-list n2 absolute top-1/2 -right-[60px] md:-right-[80px] -translate-y-1/2 flex flex-col items-center z-10">
                    <Link href={steps[1].href} className="flex flex-col items-center justify-center bg-transparent p-2 text-white text-center group no-underline">
                      <span className="text-[24px] font-bold font-sans bg-[#0795F8] w-[40px] h-[40px] rounded-full flex items-center justify-center border-2 border-white">{steps[1].num}</span>
                      <span className="text-[12px] md:text-[14px] font-medium mt-1 font-sans text-center whitespace-nowrap px-2">{steps[1].title}</span>
                    </Link>
                  </div>

                  {/* Bottom: n3 */}
                  <div className="number-list n3 absolute -bottom-[40px] md:-bottom-[20px] left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
                    <Link href={steps[2].href} className="flex flex-col items-center justify-center bg-transparent p-2 text-white text-center group no-underline">
                      <span className="text-[24px] font-bold font-sans bg-[#0795F8] w-[40px] h-[40px] rounded-full flex items-center justify-center border-2 border-white">{steps[2].num}</span>
                      <span className="text-[12px] md:text-[14px] font-medium mt-1 font-sans text-center whitespace-nowrap px-2">{steps[2].title}</span>
                    </Link>
                  </div>

                  {/* Left: n4 */}
                  <div className="number-list n4 absolute top-1/2 -left-[60px] md:-left-[80px] -translate-y-1/2 flex flex-col items-center z-10">
                    <Link href={steps[3].href} className="flex flex-col items-center justify-center bg-transparent p-2 text-white text-center group no-underline">
                      <span className="text-[24px] font-bold font-sans bg-[#0795F8] w-[40px] h-[40px] rounded-full flex items-center justify-center border-2 border-white">{steps[3].num}</span>
                      <span className="text-[12px] md:text-[14px] font-medium mt-1 font-sans text-center whitespace-nowrap px-2">{steps[3].title}</span>
                    </Link>
                  </div>
                </div>

                <div className="absolute left-1/2 bottom-[-80px] md:bottom-[-60px] -translate-x-1/2 w-full text-center">
                  <p className="text-white text-[13px] tracking-widest font-sans font-medium uppercase opacity-80">
                    CLICK EACH STEP TO KNOW MORE
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
