import Image from "next/image";
import Link from "next/link";

export default function BesHero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-black">
        <Image
          src="/images/uploads/2026/03/Landing-page-banner-.png"
          alt="Bharat Electricity Summit Banner"
          fill
          className="object-cover opacity-60"
          priority
        />
      </div>

      <div className="relative z-10 w-full max-w-[1140px] mx-auto px-4 md:px-[15px] text-center flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-bold text-white mb-6 leading-tight drop-shadow-md">
          Bharat Electricity <br />
          <span className="bg-gradient-to-r from-[#8fd3f4] to-[#84fab0] bg-clip-text text-transparent font-semibold">
            Summit
          </span>
        </h1>

        <p className="text-xl md:text-3xl text-white/90 mb-12 max-w-4xl font-light tracking-wide">
          Experience Next-Gen Distribution Utility Management
          <br />
          <span className="font-semibold block mt-4 text-white">
            19–22 March 2026 | Yashobhoomi, Dwarka, New Delhi
          </span>
        </p>

        {/* Static Countdown Simulation */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
          {[
            { label: "days", value: "45" },
            { label: "hours", value: "12" },
            { label: "minutes", value: "30" },
            { label: "seconds", value: "00" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 md:p-8 shadow-xl min-w-[100px] md:min-w-[140px] text-center"
            >
              <div className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-300 to-emerald-300 bg-clip-text text-transparent mb-2">
                {item.value}
              </div>
              <div className="text-xs md:text-sm text-white/80 uppercase tracking-widest font-medium">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="#meeting-form"
            className="inline-flex items-center justify-center bg-gradient-to-r from-brand-blue to-brand-teal hover:from-blue-600 hover:to-emerald-600 text-white px-10 py-5 text-lg md:text-xl rounded-full shadow-2xl hover:shadow-brand-teal/50 transition-all duration-300 font-semibold hover:-translate-y-1"
          >
            Book a Meeting
          </Link>
        </div>
      </div>
    </section>
  );
}
