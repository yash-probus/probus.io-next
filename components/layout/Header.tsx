import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-[0px_0px_6px_#0000001A] sticky top-0 z-50 min-h-[80px] flex items-center">
      <div className="w-full px-[15px] md:px-[15px] flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 py-[13px]">
          <Image
            src="/wp-content/uploads/2025/06/logo.png"
            alt="Probus Logo"
            width={119}
            height={34}
            className="w-auto h-[30px] md:h-[34px] object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block py-[20px]">
          <ul className="flex items-center m-0 p-0 h-full">
            <li className="h-full relative">
              <Link href="/about-us" className="text-[#232330] hover:text-brand-teal text-[15px] font-medium leading-[28px] px-[12px] py-[6px] transition-colors flex items-center h-full">
                About Us
              </Link>
            </li>
            <li className="h-full relative group">
              <Link href="/solution" className="text-[#232330] hover:text-brand-teal text-[15px] font-medium leading-[28px] px-[12px] py-[6px] transition-colors flex items-center h-full">
                Solution
                <svg className="w-4 h-4 ml-1 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </Link>
              {/* Dropdown */}
              <div className="absolute top-full left-0 mt-0 w-64 bg-white rounded-[12px] shadow-[0_12px_30px_rgba(0,0,0,0.12)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-4">
                <Link href="/smart-meter-solutions" className="group flex items-center px-6 py-2.5 text-[15px] font-semibold text-[#1B1B1B] hover:text-[#1B1B1B] transition-colors relative">
                  <span className="absolute left-4 w-2 h-[3px] bg-[#F2A032] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="transform transition-transform group-hover:translate-x-3">Smart Meter Solutions</span>
                </Link>
                <Link href="/solar-solutions" className="group flex items-center px-6 py-2.5 text-[15px] font-semibold text-[#1B1B1B] hover:text-[#1B1B1B] transition-colors relative">
                  <span className="absolute left-4 w-2 h-[3px] bg-[#F2A032] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="transform transition-transform group-hover:translate-x-3">Solar Solutions</span>
                </Link>
                <Link href="/smart-grid-integration" className="group flex items-center px-6 py-2.5 text-[15px] font-semibold text-[#1B1B1B] hover:text-[#1B1B1B] transition-colors relative">
                  <span className="absolute left-4 w-2 h-[3px] bg-[#F2A032] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="transform transition-transform group-hover:translate-x-3">Smart Grid Integration</span>
                </Link>
              </div>
            </li>
            <li className="h-full relative">
              <Link href="/partners" className="text-[#232330] hover:text-brand-teal text-[15px] font-medium leading-[28px] px-[12px] py-[6px] transition-colors flex items-center h-full">
                Partners
              </Link>
            </li>
            <li className="h-full relative group">
              <Link href="/statutory-documents" className="text-[#232330] hover:text-brand-teal text-[15px] font-medium leading-[28px] px-[12px] py-[6px] transition-colors flex items-center h-full">
                Statutory Documents
                <svg className="w-4 h-4 ml-1 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </Link>
              {/* Dropdown */}
              <div className="absolute top-full left-0 mt-0 w-[280px] bg-white rounded-[12px] shadow-[0_12px_30px_rgba(0,0,0,0.12)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-4">
                <a href="/wp-content/uploads/2026/08/CERC-Trading-Lic.-Application.pdf" target="_blank" rel="noopener noreferrer" className="group flex items-center px-6 py-2.5 text-[15px] font-semibold text-[#1B1B1B] hover:text-[#1B1B1B] transition-colors relative">
                  <span className="absolute left-4 w-2 h-[3px] bg-[#F2A032] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span className="transform transition-transform group-hover:translate-x-3">CERC Trading Lic. Application</span>
                </a>
              </div>
            </li>
            <li className="h-full relative">
              <Link href="/career" className="text-[#232330] hover:text-brand-teal text-[15px] font-medium leading-[28px] px-[12px] py-[6px] transition-colors flex items-center h-full">
                Career
              </Link>
            </li>
            <li className="h-full relative">
              <Link href="/blogs" className="text-[#232330] hover:text-brand-teal text-[15px] font-medium leading-[28px] px-[12px] py-[6px] transition-colors flex items-center h-full">
                Blogs
              </Link>
            </li>
            <li className="h-full relative">
              <Link href="/contact-us" className="text-[#232330] hover:text-brand-teal text-[15px] font-medium leading-[28px] px-[12px] py-[6px] transition-colors flex items-center h-full">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button className="lg:hidden p-2 text-gray-600 hover:text-brand-teal transition-colors" aria-label="Toggle Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

      </div>
    </header>
  );
}
