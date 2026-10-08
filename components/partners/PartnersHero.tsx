import Image from "next/image";
import Link from "next/link";

export default function PartnersHero() {
  return (
    <section className="relative h-[300px] md:h-[400px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/wp-content/uploads/2025/06/bg-partners1.jpg" 
          alt="Partners Hero Background" 
          fill 
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30 z-10" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-[15px] max-w-[1140px] relative z-20 h-full flex flex-col justify-center text-center">
        
        {/* Breadcrumbs */}
        <div className="absolute top-[40px] left-[15px] text-white text-[14px] leading-[26px] font-sans font-semibold text-left">
          <Link href="/" className="text-white hover:underline">Home</Link>
          <span className="mx-2">&gt;</span>
          <span className="font-semibold">Partners</span>
        </div>

        <h2 className="text-white text-[28px] md:text-[50px] leading-[32px] md:leading-[56px] font-bold font-sans drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)] mt-[40px]">
          Driving change through partnerships
        </h2>
      </div>
    </section>
  );
}
