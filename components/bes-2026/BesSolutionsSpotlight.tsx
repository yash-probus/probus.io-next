const technologies = [
  {
    icon: "📡",
    title: "Dual Communication & RF",
    description: "Reliable and scalable communication infra for seamless meter data connectivity (Cellular + BLE).",
    colSpan: "col-span-1 md:col-span-1",
  },
  {
    icon: "🖥",
    title: "UHES (Unified Head End System)",
    description: "True to nature Unified HES enabling data onboarding from meters deployed on all types of communication technologies.",
    colSpan: "col-span-1 md:col-span-1",
  },
  {
    icon: "🛰",
    title: "Probus Edgelync mini-FRTU",
    description: "Our compact, high-performance, feeder automation controller designed to deliver secure, real-time control across modern distribution networks.",
    colSpan: "col-span-1 md:col-span-1",
  },
  {
    icon: "⚡",
    title: "DTMS",
    description: "State-of-the-art wireless Distribution Transformer Monitoring System for real-time transformer health monitoring and analytics.",
    colSpan: "col-span-1 md:col-span-1",
  },
  {
    icon: "🤖",
    title: "GridSync",
    description: "AI-powered consumer-to-DT mapping solution for efficient and automated grid mapping.",
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2 lg:w-1/2 lg:mx-auto",
  },
];

export default function BesSolutionsSpotlight() {
  return (
    <section className="py-20 bg-slate-50 border-y border-slate-100">
      <div className="max-w-[1140px] mx-auto px-4 md:px-[15px]">
        <div className="text-center mb-16">
          <h3 className="text-sm font-medium tracking-widest text-brand-orange uppercase mb-3">
            WHAT WE&apos;RE BRINGING TO BES 2026
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Key Technologies Showcased
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Insights on Smart Metering, Grid Automation, and Storage Integration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {technologies.map((tech, idx) => (
            <div
              key={idx}
              className={`bg-[#028206] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-green-800/20 group ${tech.colSpan}`}
            >
              <div className="flex gap-6 items-start">
                <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center text-3xl shrink-0 group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    {tech.title}
                  </h4>
                  <p className="text-green-50 leading-relaxed font-light">
                    {tech.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
