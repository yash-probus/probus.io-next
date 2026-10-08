"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  
  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <div className="lg:hidden flex items-center">
      <button 
        className="text-brand-dark hover:text-brand-teal p-2 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        <div className="w-6 h-5 relative flex flex-col justify-between">
          <span className={`block h-1 w-full bg-current rounded transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-1 w-full bg-current rounded transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-1 w-full bg-current rounded transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </div>
      </button>

      {isOpen && (
        <div className="fixed inset-0 top-[80px] bg-[#636363] text-white z-50 overflow-y-auto pb-10 shadow-inner">
          <ul className="flex flex-col">
            <li className="border-b border-white/10">
              <button 
                className="w-full text-left px-6 py-4 flex justify-between items-center text-[15px]"
                onClick={() => toggleDropdown('company')}
              >
                <span>Company</span>
                <span className="text-xl">{openDropdown === 'company' ? '-' : '+'}</span>
              </button>
              {openDropdown === 'company' && (
                <ul className="bg-black/30 py-2">
                  <li><Link href="/about-us" className="block py-2 px-10 hover:text-brand-teal transition-colors" onClick={() => setIsOpen(false)}>About Us</Link></li>
                  <li><Link href="/partners" className="block py-2 px-10 hover:text-brand-teal transition-colors" onClick={() => setIsOpen(false)}>Partners</Link></li>
                  <li><Link href="/career" className="block py-2 px-10 hover:text-brand-teal transition-colors" onClick={() => setIsOpen(false)}>Career</Link></li>
                  <li><Link href="/bes-2026" className="block py-2 px-10 hover:text-brand-teal transition-colors" onClick={() => setIsOpen(false)}>BES 2026</Link></li>
                </ul>
              )}
            </li>
            
            <li className="border-b border-white/10">
              <button 
                className="w-full text-left px-6 py-4 flex justify-between items-center text-[15px]"
                onClick={() => toggleDropdown('solutions')}
              >
                <span>Solutions</span>
                <span className="text-xl">{openDropdown === 'solutions' ? '-' : '+'}</span>
              </button>
              {openDropdown === 'solutions' && (
                <ul className="bg-black/30 py-2">
                  <li><Link href="/solution" className="block py-2 px-10 hover:text-brand-teal transition-colors" onClick={() => setIsOpen(false)}>All Solutions</Link></li>
                  <li><Link href="/smart-meter-solutions" className="block py-2 px-10 hover:text-brand-teal transition-colors" onClick={() => setIsOpen(false)}>Smart Meter Solutions</Link></li>
                  <li><Link href="/solar-solutions" className="block py-2 px-10 hover:text-brand-teal transition-colors" onClick={() => setIsOpen(false)}>Solar Solutions</Link></li>
                  <li><Link href="/smart-grid-integration" className="block py-2 px-10 hover:text-brand-teal transition-colors" onClick={() => setIsOpen(false)}>Smart Grid Integration</Link></li>
                </ul>
              )}
            </li>
            
            <li className="border-b border-white/10">
              <Link href="/blogs" className="block px-6 py-4 text-[15px] hover:text-brand-teal transition-colors" onClick={() => setIsOpen(false)}>Blog</Link>
            </li>
            
            <li className="px-6 py-6">
              <Link href="/contact-us" className="block text-center bg-brand-darkBlue hover:bg-brand-teal text-white py-3 rounded-full text-[15px] transition-colors" onClick={() => setIsOpen(false)}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
