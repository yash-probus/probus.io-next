import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import Container from "@/components/common/Container";

export default function CareerHero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Breadcrumbs */}
      <div className="absolute top-[30px] left-0 w-full z-20">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Careers" },
            ]}
            theme="light"
          />
        </Container>
      </div>

      <div className="flex flex-col md:flex-row w-full max-w-[1920px] mx-auto min-h-[400px] md:h-[600px]">
        {/* Left Side (Blue Background with Quotes) */}
        <div className="w-full md:w-1/2 h-[400px] md:h-full relative order-last md:order-first flex items-center">
          <Image 
            src="/images/header-left.png" 
            alt="Background" 
            fill 
            className="object-fill w-full h-full absolute inset-0"
            priority
          />
          
          <div className="relative w-full px-[30px] md:px-[15px] z-10 text-center">
            <div className="w-[70%] mx-auto relative text-left">
              {/* Quote Top Left */}
              <div className="hidden md:block absolute w-[70px] h-[70px] left-[-25px] top-[-70px] z-10">
                <Image src="/images/3.svg" alt="Quote" fill className="object-contain" />
              </div>
              
              <div className="relative z-20">
                <p className="text-white text-[20px] md:text-[20px] leading-[30px] tracking-normal font-sans m-0 text-left">
                  Learnt some of the best practices at global level in my three years at Probus
                </p>
              </div>

              {/* Quote Bottom Right */}
              <div className="hidden md:block absolute w-[70px] h-[70px] right-[-25px] bottom-[-20px] z-10">
                <Image src="/images/2.svg" alt="Quote" fill className="object-contain" />
              </div>
            </div>
            <div className="w-[70%] mx-auto relative text-left pt-[40px] z-20 flex flex-wrap gap-4 items-center">
                <a 
                  href="#open-positions" 
                  className="bg-transparent hover:bg-white text-white hover:text-[#033361] border border-white rounded-[30px] py-[10px] px-[25px] font-sans text-[16px] font-medium transition-all inline-block shadow-sm"
                >
                  View Job Opening
                </a>
                <Link
                  href="/empowering-the-future-probus-smart-things-journey-in-smart-grid-innovation"
                  className="bg-white/10 hover:bg-white text-white hover:text-[#033361] border border-white/60 rounded-[30px] py-[10px] px-[25px] font-sans text-[16px] font-medium transition-all inline-block shadow-sm"
                >
                  Know More
                </Link>
            </div>
          </div>
        </div>

        {/* Right Side (Image) */}
        <div className="w-full md:w-1/2 h-[400px] md:h-full relative">
          <Image 
            src="/images/uploads/2025/06/tm2-1.jpg" 
            alt="Careers at Probus" 
            fill 
            className="object-cover object-left"
            priority
          />
        </div>
      </div>
    </section>
  );
}
