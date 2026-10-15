export default function TechArchitecture() {
  return (
    <section className="py-20 md:py-32 bg-brand-dark relative overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-4 md:px-[15px] relative z-10">
        <div className="text-center mb-16">
          <h4 className="font-playball text-brand-orange text-3xl mb-4">Under the Hood</h4>
          <h2 className="text-3xl md:text-5xl font-medium text-white uppercase leading-tight max-w-3xl mx-auto">
            Probus Technology Architecture
          </h2>
          <p className="text-gray-300 font-light text-lg mt-6 max-w-2xl mx-auto">
            A fully integrated, device-to-cloud ecosystem ensuring seamless data flow, robust security, and actionable insights.
          </p>
        </div>
        
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-16 max-w-5xl mx-auto shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative">
            
            {/* Connecting Lines for Desktop */}
            <div className="hidden md:block absolute top-[50px] left-[15%] right-[15%] h-[2px] bg-brand-teal/30 border-t border-dashed border-brand-teal z-0"></div>

            {/* Pillar 1 */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-24 h-24 bg-brand-dark border-2 border-brand-orange rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(247,170,71,0.2)]">
                <svg className="w-10 h-10 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">IoT Edge Devices</h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                Hybrid NIC cards and distribution sensors deployed directly on meters and transformers for real-time edge processing.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-24 h-24 bg-brand-dark border-2 border-brand-teal rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(59,160,234,0.2)]">
                <svg className="w-10 h-10 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path></svg>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Secure Communication</h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                Multi-protocol (RF/NB-IoT/4G) resilient networks ensuring 99.9% uptime and encrypted packet delivery.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-24 h-24 bg-brand-dark border-2 border-brand-orange rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(247,170,71,0.2)]">
                <svg className="w-10 h-10 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
              </div>
              <h3 className="text-xl font-medium text-white mb-3">HES / Cloud Analytics</h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                Centralized head-end system processing millions of data points via AI to predict faults and balance the grid.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
