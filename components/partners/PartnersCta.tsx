import Image from "next/image";
import Link from "next/link";

export default function PartnersCta() {
  return (
    <section className="py-[60px] md:py-[100px] bg-white">
      <div className="container mx-auto px-4 md:px-[15px] max-w-[1140px]">
        <div className="flex flex-wrap rounded-[15px] overflow-hidden w-full">
          
          {/* Left Content */}
          <div className="w-full md:w-1/2 bg-[#319FF3] p-[50px_40px] md:p-[80px_60px] flex flex-col justify-center text-left">
            <h2 className="text-white text-[32px] md:text-[38px] font-bold leading-[46px] font-sans mb-[20px]">
              Want to be a part of our success story?
            </h2>
            <p className="text-white text-[15px] md:text-[17px] font-normal font-sans mb-[40px]">
              We're looking forward to bringing a change with you by our side
            </p>
            <div>
              <Link 
                href="/contact-us" 
                className="inline-flex justify-center items-center bg-white text-[#097DF5] font-bold text-[13px] leading-[20px] h-[40px] px-[25px] rounded-[30px] transition-all hover:bg-[#033361] hover:text-white font-sans"
              >
                Get in touch now
              </Link>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="w-full md:w-1/2 h-[300px] md:h-[450px] relative">
            <Image 
              src="/wp-content/uploads/2025/06/partnerwith.jpg" 
              alt="Handshake Partner with Probus" 
              fill 
              className="object-cover"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}
