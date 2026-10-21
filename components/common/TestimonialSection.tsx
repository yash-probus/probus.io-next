import Image from "next/image";
import React from "react";

export interface TestimonialProps {
  badge?: string;
  showBadge?: boolean;
  title?: React.ReactNode;
  mainImage?: string;
  mainImageAlt?: string;
  quote?: string;
  authorName?: string;
  authorRole?: string;
  authorImage?: string;
}

const defaultTestimonial = {
  badge: "TESTIMONIALS",
  showBadge: true,
  title: "Collaborating for success and change",
  mainImage: "/images/uploads/2025/06/testmain.png",
  mainImageAlt: "Collaborating for success and change",
  quote:
    "Probus is truly agile – flexible and fast. Commit till the end to deliver tasks even with all the situational challenges on the field. A true partner to make you successful.",
  authorName: "Anil Vaishy",
  authorRole: "VP SCADA BSES Yamuna Power",
  authorImage: "/images/uploads/2025/06/anil_vaishy.png",
};

export default function TestimonialSection({
  badge = defaultTestimonial.badge,
  showBadge = defaultTestimonial.showBadge,
  title = defaultTestimonial.title,
  mainImage = defaultTestimonial.mainImage,
  mainImageAlt = defaultTestimonial.mainImageAlt,
  quote = defaultTestimonial.quote,
  authorName = defaultTestimonial.authorName,
  authorRole = defaultTestimonial.authorRole,
  authorImage = defaultTestimonial.authorImage,
}: TestimonialProps) {
  return (
    <section
      className="pb-[140px] md:pb-[160px] bg-no-repeat w-full bg-white relative"
      style={{
        backgroundImage: "url(/images/bg-htesti.png)",
        backgroundPosition: "right 0px bottom -60px",
      }}
    >
      <div className="bg-[#0795F8] pt-[50px] md:pt-[54px]">
        <div className="container mx-auto px-4 md:px-[75px] max-w-[1800px] w-full">
          <div className="flex flex-wrap -mx-[15px] items-start">
            
            {/* Left Col */}
            <div className="w-full lg:w-[41.666667%] px-[15px] mb-[40px] lg:mb-0 relative">
              <div className="text-left">
                {showBadge && (
                  <h6 className="text-white uppercase font-medium tracking-wide mb-2 inline-block border-b-2 border-white pb-1 text-[13px] font-sans">
                    {badge}
                  </h6>
                )}
                <h2 className="text-white text-[28px] md:text-[34px] lg:text-[40px] font-medium leading-[1.25] mt-1 font-sans">
                  {title}
                </h2>
              </div>

              <div className="mt-[40px] md:mt-[85px] md:mb-[-100px] relative z-10 w-[85%] mx-auto md:mx-0">
                <Image
                  src={mainImage}
                  alt={mainImageAlt}
                  width={500}
                  height={350}
                  className="w-full h-auto rounded-[12px] shadow-lg"
                />
              </div>
            </div>

            {/* Right Col */}
            <div className="w-full lg:w-[58.333333%] px-[15px] relative">
              <div className="max-w-[520px] mx-auto relative mb-[40px] md:mb-[50px]">
                
                {/* SVG Quote Before */}
                <div className="hidden md:block absolute w-[70px] lg:w-[100px] h-[70px] lg:h-[100px] -left-[90px] lg:-left-[130px] top-[0px] z-10 pointer-events-none">
                  <Image
                    src="/images/3.svg"
                    alt="Quote Decor Left"
                    fill
                    className="object-contain"
                  />
                </div>

                {/* SVG Quote After */}
                <div className="hidden md:block absolute w-[70px] lg:w-[100px] h-[70px] lg:h-[100px] -right-[90px] lg:-right-[130px] -bottom-[15px] z-10 pointer-events-none">
                  <Image
                    src="/images/2.svg"
                    alt="Quote Decor Right"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="pt-[40px] md:pt-[60px]">
                  <div className="relative">
                    <p className="text-[17px] md:text-[20px] leading-[28px] md:leading-[30px] text-white font-light font-sans z-10 relative m-0">
                      {quote}
                    </p>
                  </div>

                  <div className="flex items-center mt-[30px] md:mt-[40px]">
                    <div className="w-[60px] h-[60px] md:w-[65px] md:h-[65px] rounded-full overflow-hidden shrink-0 mr-[12px] bg-white border-2 border-white shadow-sm">
                      <Image
                        src={authorImage}
                        alt={authorName}
                        width={65}
                        height={65}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-white text-[15px] md:text-[16px] leading-[24px] font-semibold m-0 font-sans">
                        {authorName}
                      </h3>
                      <span className="text-white text-[13px] md:text-[14px] leading-[22px] font-light block font-sans">
                        {authorRole}
                      </span>
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
