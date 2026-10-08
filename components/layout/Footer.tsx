import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = 2024;

  return (
    <footer 
      className="bg-[#121619] relative bg-cover bg-center"
      style={{ backgroundImage: 'url(/wp-content/themes/probus/assets/images/footerbg.png)' }}
    >
      <div className="pt-[40px] border-t border-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-wrap -mx-4">
            
            {/* Column 1 */}
            <div className="w-full lg:w-3/12 px-4 mb-[20px] lg:mb-0">
              <div className="mb-[20px]">
                <div className="mb-[20px] h-[55px]">
                  <Image 
                    src="/wp-content/uploads/2025/06/logo-footer.png" 
                    alt="Probus Logo" 
                    width={180} 
                    height={55} 
                    className="w-auto h-auto max-h-[55px] object-contain" 
                  />
                </div>
                <p className="text-white text-[16px] leading-[28px]">
                  Pioneering the future of sustainable energy with cutting-edge solutions tailored to empower communities and industries. Committed to excellence, we fuse innovation with reliability to light up a greener tomorrow
                </p>
                <div className="mt-[15px]">
                  <Link 
                    href="/contact-us" 
                    className="inline-block bg-white text-[#161E26] text-[15px] leading-[28px] font-medium py-[5px] px-[20px] rounded-[20px] border border-white hover:bg-transparent hover:text-white transition-all duration-300"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            {/* Columns 2, 3, 4 */}
            <div className="w-full lg:w-5/12 px-4">
              <div className="flex items-start w-full mt-[30px] lg:pl-[50px] flex-wrap md:flex-nowrap">
                
                {/* Nav Col 1 (About, Partners, Careers) */}
                <ul className="w-[30%] list-none m-0 p-0 pr-4">
                  <li className="block mb-[28px]">
                    <Link href="/about-us" className="text-white text-[16px] leading-[28px] hover:underline transition-all duration-300 block relative">
                      About Us
                    </Link>
                  </li>
                  <li className="block mb-[28px]">
                    <Link href="/partners" className="text-white text-[16px] leading-[28px] hover:underline transition-all duration-300 block relative">
                      Partners
                    </Link>
                  </li>
                  <li className="block mb-[28px]">
                    <Link href="/career" className="text-white text-[16px] leading-[28px] hover:underline transition-all duration-300 block relative">
                      Careers
                    </Link>
                  </li>
                </ul>

                {/* Nav Col 2 (Solutions) */}
                <ul className="w-[40%] list-none m-0 p-0 pr-4">
                  <li className="block mb-[28px]">
                    <Link href="/solution" className="text-white text-[16px] leading-[28px] hover:underline transition-all duration-300 block relative">
                      Solutions
                    </Link>
                    <ol className="list-none p-0 m-0 mt-[15px]">
                      <li className="list-none p-0 m-0">
                        <Link href="/smart-meter" className="text-[#D8D8D8] text-[14px] leading-[22px] mb-[10px] hover:underline transition-all duration-300 block relative">
                          Smart Metering Solutions
                        </Link>
                      </li>
                      <li className="list-none p-0 m-0">
                        <Link href="/solar-solutions" className="text-[#D8D8D8] text-[14px] leading-[22px] mb-[10px] hover:underline transition-all duration-300 block relative">
                          Solar Solutions
                        </Link>
                      </li>
                      <li className="list-none p-0 m-0">
                        <Link href="/smart-grid-integration" className="text-[#D8D8D8] text-[14px] leading-[22px] mb-[10px] hover:underline transition-all duration-300 block relative">
                          Smart Grid Integration
                        </Link>
                      </li>
                    </ol>
                  </li>
                </ul>

                {/* Nav Col 3 (Blog, Contact, CERC) */}
                <ul className="w-[30%] list-none m-0 p-0">
                  <li className="block mb-[28px]">
                    <Link href="/blogs" className="text-white text-[16px] leading-[28px] hover:underline transition-all duration-300 block relative">
                      Blog
                    </Link>
                  </li>
                  <li className="block mb-[28px]">
                    <Link href="/contact-us" className="text-white text-[16px] leading-[28px] hover:underline transition-all duration-300 block relative">
                      Contact Us
                    </Link>
                  </li>
                  <li className="block mb-[28px]">
                    <Link href="/wp-content/uploads/2026/08/CERC-Trading-Lic.-Application.pdf" target="_blank" className="text-white text-[16px] leading-[28px] hover:underline transition-all duration-300 block relative">
                      CERC Trading Lic.<br />Application
                    </Link>
                  </li>
                </ul>

              </div>
            </div>

          </div>

          {/* Footer Bottom */}
          <div className="py-[30px] border-t border-[#6c7174] text-white text-[14px] leading-[28px] mt-[30px] lg:mr-[75px] flex flex-col md:flex-row justify-between items-center">
            <div className="text-left w-full md:w-1/2 mb-4 md:mb-0">
              © {currentYear} Probus Smart Things Pvt. Ltd.
            </div>
            <div className="text-right w-full md:w-1/2">
              <Link href="/privacy-policy" className="text-white text-[14px] leading-[28px] hover:underline">
                Privacy Policy
              </Link>
              <span className="mx-1">|</span>
              <Link href="/terms-and-conditions" className="text-white text-[14px] leading-[28px] hover:underline">
                Terms and Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
