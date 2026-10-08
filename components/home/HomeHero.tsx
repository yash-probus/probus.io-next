import Image from "next/image";
import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="relative w-full h-[600px] md:h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/wp-content/uploads/2026/03/Landing-page-banner-.png"
          alt="Bandra-Worli Sea Link Night Skyline"
          fill
          className="object-cover"
          priority
        />
        {/* High contrast dark overlay to match the night skyline aesthetic */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full container max-w-[1140px] mx-auto px-4 md:px-[15px] text-center flex flex-col items-center">
        <h1 className="text-white font-medium text-4xl md:text-5xl lg:text-6xl tracking-tight max-w-5xl leading-[1.2]">
          Revamping India&apos;s Smart Metering landscape
        </h1>
        
        <p className="text-white/90 font-light text-lg md:text-xl mt-4 max-w-3xl">
          Leveraging Patented Communications &amp; Data Analytics
        </p>
        
        <Link 
          href="/smart-meter-solutions"
          className="mt-8 bg-white hover:bg-gray-100 text-brand-dark font-medium px-8 py-3 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl inline-block"
        >
          Discover Smart Metering
        </Link>
      </div>

      {/* Slider Indicators (4 horizontal white dash lines centered at bottom) */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20">
        <button className="w-8 h-1 bg-white rounded-full transition-all duration-300" aria-label="Slide 1"></button>
        <button className="w-8 h-1 bg-white/40 hover:bg-white/70 rounded-full transition-all duration-300" aria-label="Slide 2"></button>
        <button className="w-8 h-1 bg-white/40 hover:bg-white/70 rounded-full transition-all duration-300" aria-label="Slide 3"></button>
        <button className="w-8 h-1 bg-white/40 hover:bg-white/70 rounded-full transition-all duration-300" aria-label="Slide 4"></button>
      </div>
    </section>
  );
}
