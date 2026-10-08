import Image from "next/image";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative h-[400px] md:h-[60vh] min-h-[350px] w-full flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src="/wp-content/uploads/2025/06/aboutbanner.jpg" 
          alt="Crafting a Sustainable Legacy" 
          fill 
          priority
          className="object-cover hidden md:block"
        />
        <Image 
          src="/wp-content/uploads/2025/06/aboutbannerm.jpg" 
          alt="Crafting a Sustainable Legacy" 
          fill 
          priority
          className="object-cover md:hidden"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-[15px] w-[95%] text-center">
        <h2 className="text-white text-[28px] md:text-[50px] leading-[44px] md:leading-[56px] font-medium font-sans">
          Crafting a Sustainable Legacy
        </h2>
      </div>

      {/* Breadcrumbs */}
      <div className="absolute top-[40px] left-0 w-full z-20 hidden md:block">
        <div className="container mx-auto px-4 md:px-[15px]">
          <div className="text-white text-[14px] leading-[26px] font-sans font-medium flex items-center">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2 text-[10px] opacity-80">&gt;</span>
            <span className="font-semibold">About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
}
