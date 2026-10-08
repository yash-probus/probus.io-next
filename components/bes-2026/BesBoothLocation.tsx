import Image from "next/image";

const partners = [
  "p1-1-1.png", "p2-1.png", "p3-1.png", 
  "p4-1.png", "p5-1.png", "p6-1.png", 
  "p7-1.png", "p8-1.png", "p9-1.png"
];

export default function BesBoothLocation() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-4 md:px-[15px]">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center bg-brand-dark rounded-[2.5rem] p-10 md:p-16 lg:p-20 shadow-2xl relative overflow-hidden mb-24">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-brand-teal fill-current">
              <polygon points="0,100 100,0 100,100" />
            </svg>
          </div>

          <div className="w-full lg:w-1/2 relative z-10 text-white">
            <h6 className="text-brand-orange font-semibold tracking-wider text-sm uppercase mb-4">Location</h6>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Meet the Probus Team
            </h2>
            
            <div className="space-y-6 text-lg font-light">
              <div className="flex items-center gap-4">
                <span className="text-2xl bg-white/10 p-3 rounded-full">📅</span>
                <p><strong className="font-semibold text-white">Date:</strong> 19–22 March 2026</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-2xl bg-white/10 p-3 rounded-full">📍</span>
                <p><strong className="font-semibold text-white">Venue:</strong> Hall 2, Stand 2F19, Yashobhoomi, Dwarka, New Delhi</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-2xl bg-white/10 p-3 rounded-full">🤝</span>
                <p><strong className="font-semibold text-white">Association Partner:</strong> India Energy Storage Alliance (IESA)</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative z-10">
            <div className="bg-white p-8 rounded-3xl shadow-xl flex flex-col items-center justify-center text-center h-full">
               <div className="w-24 h-24 bg-brand-teal/10 text-brand-teal rounded-full flex items-center justify-center mb-6">
                 <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
               </div>
               <h3 className="text-2xl font-bold text-brand-dark mb-2">Hall 2, Stand 2F19</h3>
               <p className="text-gray-500 mb-6">Find us in the central technology exhibition area.</p>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-12">Trusted By The Best Partners</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 hover:opacity-100 transition-opacity">
            {partners.map((partner, idx) => (
              <div key={idx} className="relative w-32 h-16 grayscale hover:grayscale-0 transition-all">
                <Image 
                  src={`/wp-content/uploads/2025/06/${partner}`} 
                  alt={`Partner ${idx + 1}`} 
                  fill 
                  className="object-contain" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
