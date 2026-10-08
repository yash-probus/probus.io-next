import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="bg-white min-h-[60vh]">
      <div className="max-w-[1140px] mx-auto px-[15px] pt-4 pb-12">
        
        <aside className="w-full text-left font-sans text-[#333]">
          
          {/* Search */}
          <section className="mb-10 flex justify-end">
             <form className="flex" action="/search">
                <input 
                  type="search" 
                  className="border border-[#ccc] px-2 py-1 w-[220px] focus:outline-none focus:border-[#0A83F8]" 
                  placeholder="" 
                />
                <button 
                  type="submit" 
                  className="bg-[#f7f7f7] border border-[#ccc] border-l-0 px-4 py-1 text-[14px] text-[#333] hover:bg-[#e6e6e6]"
                >
                  Search
                </button>
             </form>
          </section>

          {/* Recent Posts */}
          <section className="mb-10">
            <h2 className="text-[24px] font-bold text-black mb-2 font-sans">Recent Posts</h2>
            <ul className="space-y-1.5 pl-0">
              <li>
                <Link href="/blogs/iot-smart-grid-integration-outage-management-fault-detection" className="text-[#0A83F8] hover:text-[#0056b3] text-[14px]">
                  How IoT-Based Smart Grid Integration Improves Outage Management and Fault Detection
                </Link>
              </li>
              <li>
                <Link href="/blogs/plc-vs-rf-mesh-vs-4g-ami-communication-technology-comparison" className="text-[#0A83F8] hover:text-[#0056b3] text-[14px]">
                  PLC vs RF Mesh vs 4G: Which Communication Technology Is Right for Your AMI Network?
                </Link>
              </li>
              <li>
                <Link href="/blogs/smart-metering-rollout-rdss-what-every-discom-needs-to-know-2026" className="text-[#0A83F8] hover:text-[#0056b3] text-[14px]">
                  Smart Metering Rollout Under RDSS: What Every DISCOM Needs to Know in 2026
                </Link>
              </li>
              <li>
                <Link href="/blogs/wireless-solar-string-monitoring-reduces-om-costs-large-scale-plants" className="text-[#0A83F8] hover:text-[#0056b3] text-[14px]">
                  How Wireless Solar String Monitoring Reduces O&M Costs for Large-Scale Plants
                </Link>
              </li>
              <li>
                <Link href="/blogs/why-power-supply-design-determines-the-life-of-smart-grid-hardware" className="text-[#0A83F8] hover:text-[#0056b3] text-[14px]">
                  Why Power Supply Design Determines the Life of Smart Grid Hardware
                </Link>
              </li>
            </ul>
          </section>

          {/* Recent Comments */}
          <section className="mb-10">
            <h2 className="text-[24px] font-bold text-black mb-2 font-sans">Recent Comments</h2>
            <div className="text-[#333] text-[14px]">No comments to show.</div>
          </section>

          {/* Archives */}
          <section className="mb-10">
            <h2 className="text-[24px] font-bold text-black mb-2 font-sans">Archives</h2>
            <ul className="space-y-1.5 pl-0">
              <li><Link href="/blogs" className="text-[#0A83F8] hover:text-[#0056b3] text-[14px]">March 2026</Link></li>
              <li><Link href="/blogs" className="text-[#0A83F8] hover:text-[#0056b3] text-[14px]">February 2026</Link></li>
              <li><Link href="/blogs" className="text-[#0A83F8] hover:text-[#0056b3] text-[14px]">January 2026</Link></li>
              <li><Link href="/blogs" className="text-[#0A83F8] hover:text-[#0056b3] text-[14px]">December 2025</Link></li>
              <li><Link href="/blogs" className="text-[#0A83F8] hover:text-[#0056b3] text-[14px]">November 2025</Link></li>
              <li><Link href="/blogs" className="text-[#0A83F8] hover:text-[#0056b3] text-[14px]">June 2025</Link></li>
              <li><Link href="/blogs" className="text-[#0A83F8] hover:text-[#0056b3] text-[14px]">May 2025</Link></li>
              <li><Link href="/blogs" className="text-[#0A83F8] hover:text-[#0056b3] text-[14px]">April 2024</Link></li>
              <li><Link href="/blogs" className="text-[#0A83F8] hover:text-[#0056b3] text-[14px]">March 2024</Link></li>
            </ul>
          </section>

          {/* Categories */}
          <section className="mb-12">
            <h2 className="text-[24px] font-bold text-black mb-2 font-sans">Categories</h2>
            <ul className="space-y-1.5 pl-0">
              <li><Link href="/blogs" className="text-[#0A83F8] hover:text-[#0056b3] text-[14px]">Blog</Link></li>
              <li><Link href="/blogs" className="text-[#0A83F8] hover:text-[#0056b3] text-[14px]">Featured</Link></li>
              <li><Link href="/smart-grid-integration" className="text-[#0A83F8] hover:text-[#0056b3] text-[14px]">Smart Grid Integration</Link></li>
              <li><Link href="/smart-meter-solutions" className="text-[#0A83F8] hover:text-[#0056b3] text-[14px]">Smart Metering Solutions</Link></li>
              <li><Link href="/solar-solutions" className="text-[#0A83F8] hover:text-[#0056b3] text-[14px]">Solar Solutions</Link></li>
              <li><Link href="/blogs" className="text-[#0A83F8] hover:text-[#0056b3] text-[14px]">Uncategorized</Link></li>
            </ul>
          </section>

        </aside>

      </div>
    </main>
  );
}
