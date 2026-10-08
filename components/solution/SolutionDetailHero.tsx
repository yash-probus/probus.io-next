import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  title: string | React.ReactNode;
  bgImage: string;
  bgImageMobile: string;
  videoSrc?: string;
  breadcrumb: string;
}

export default function SolutionDetailHero({ title, bgImage, bgImageMobile, videoSrc, breadcrumb }: HeroProps) {
  return (
    <section className="relative w-full h-[600px] md:h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image / Video */}
      <div className="absolute inset-0 z-[-1] before:content-[''] before:absolute before:inset-0 before:bg-black/50 before:z-[1]">
        <Image 
          src={bgImage} 
          alt="Hero Desktop" 
          fill 
          className="object-cover hidden md:block"
        />
        <Image 
          src={bgImageMobile} 
          alt="Hero Mobile" 
          fill 
          className="object-cover md:hidden scale-100"
        />
        {videoSrc && (
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover hidden"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}
      </div>

      {/* Breadcrumbs */}
      <div className="absolute top-[40px] left-0 w-full z-20">
        <div className="max-w-[1140px] mx-auto px-4 md:px-[15px] text-left">
          <div className="flex items-center space-x-2 text-white font-semibold text-[13px] md:text-[14px] font-sans">
            <Link href="/" className="hover:underline">Home</Link>
            <span>&gt;</span>
            <Link href="/solution" className="hover:underline">Solution</Link>
            <span>&gt;</span>
            <span>{breadcrumb}</span>
          </div>
        </div>
      </div>

      <div className="text-center z-10 px-4 mt-8">
        <h1 className="text-white text-[32px] md:text-[45px] leading-[1.2] font-bold font-sans tracking-wide">
          {title}
        </h1>
      </div>
    </section>
  );
}
