"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  // Close menu on browser history navigation (back/forward)
  useEffect(() => {
    const handlePopState = () => {
      setIsOpen(false);
      setOpenDropdown(null);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key press
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, handleKeyDown]);

  const toggleDropdown = (name: string) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  return (
    <div className="lg:hidden">
      {/* Hamburger / Close Button */}
      <button
        type="button"
        className="w-10 h-10 flex items-center justify-center rounded-lg text-slate-700 hover:text-brand-teal hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-teal/40"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      >
        <div className="w-5 h-4 relative flex flex-col justify-between">
          <span
            className={`block h-0.5 w-full bg-current rounded-full transform transition-all duration-300 ease-in-out ${
              isOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-current rounded-full transition-all duration-200 ease-in-out ${
              isOpen ? "opacity-0 scale-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-current rounded-full transform transition-all duration-300 ease-in-out ${
              isOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </div>
      </button>

      {/* Backdrop overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 top-[80px] bg-slate-900/40 backdrop-blur-xs z-[97] transition-opacity duration-300"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Drawer menu */}
      {isOpen && (
        <div
          className="fixed top-[80px] left-0 right-0 max-h-[calc(100vh-80px)] bg-white z-[98] overflow-y-auto border-t border-slate-100 shadow-2xl transition-all duration-300 flex flex-col"
          style={{ overscrollBehavior: "contain" }}
        >
          <div className="px-6 py-4 flex flex-col divide-y divide-slate-100">
            {/* About Us */}
            <div className="py-3">
              <Link
                href="/about-us"
                className={`block text-[16px] font-medium transition-colors hover:text-brand-teal ${
                  pathname === "/about-us" ? "text-brand-teal font-semibold" : "text-[#232330]"
                }`}
                onClick={closeMenu}
              >
                About Us
              </Link>
            </div>

            {/* Solutions Dropdown */}
            <div className="py-3">
              <button
                type="button"
                className="w-full flex items-center justify-between text-[16px] font-medium text-[#232330] hover:text-brand-teal transition-colors focus:outline-none"
                onClick={() => toggleDropdown("solutions")}
                aria-expanded={openDropdown === "solutions"}
              >
                <span>Solution</span>
                <svg
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                    openDropdown === "solutions" ? "rotate-180 text-brand-teal" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === "solutions" && (
                <div className="mt-2 pl-4 space-y-2 border-l-2 border-brand-teal/30 py-1">
                  <Link
                    href="/solution"
                    className="block text-[15px] text-slate-600 hover:text-brand-teal py-1.5 transition-colors"
                    onClick={closeMenu}
                  >
                    All Solutions
                  </Link>
                  <Link
                    href="/smart-meter-solutions"
                    className="block text-[15px] text-slate-600 hover:text-brand-teal py-1.5 transition-colors"
                    onClick={closeMenu}
                  >
                    Smart Meter Solutions
                  </Link>
                  <Link
                    href="/solar-solutions"
                    className="block text-[15px] text-slate-600 hover:text-brand-teal py-1.5 transition-colors"
                    onClick={closeMenu}
                  >
                    Solar Solutions
                  </Link>
                  <Link
                    href="/smart-grid-integration"
                    className="block text-[15px] text-slate-600 hover:text-brand-teal py-1.5 transition-colors"
                    onClick={closeMenu}
                  >
                    Smart Grid Integration
                  </Link>
                </div>
              )}
            </div>

            {/* Partners */}
            <div className="py-3">
              <Link
                href="/partners"
                className={`block text-[16px] font-medium transition-colors hover:text-brand-teal ${
                  pathname === "/partners" ? "text-brand-teal font-semibold" : "text-[#232330]"
                }`}
                onClick={closeMenu}
              >
                Partners
              </Link>
            </div>

            {/* Statutory Documents Dropdown */}
            <div className="py-3">
              <button
                type="button"
                className="w-full flex items-center justify-between text-[16px] font-medium text-[#232330] hover:text-brand-teal transition-colors focus:outline-none"
                onClick={() => toggleDropdown("statutory")}
                aria-expanded={openDropdown === "statutory"}
              >
                <span>Statutory Documents</span>
                <svg
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                    openDropdown === "statutory" ? "rotate-180 text-brand-teal" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === "statutory" && (
                <div className="mt-2 pl-4 space-y-2 border-l-2 border-brand-teal/30 py-1">
                  <Link
                    href="/statutory-documents"
                    className="block text-[15px] text-slate-600 hover:text-brand-teal py-1.5 transition-colors"
                    onClick={closeMenu}
                  >
                    Statutory Overview
                  </Link>
                  <a
                    href="/docs/CERC-Trading-Lic.-Application.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[15px] text-slate-600 hover:text-brand-teal py-1.5 transition-colors"
                    onClick={closeMenu}
                  >
                    <span>CERC Trading Lic. Application</span>
                    <svg className="w-3.5 h-3.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              )}
            </div>

            {/* Career */}
            <div className="py-3">
              <Link
                href="/career"
                className={`block text-[16px] font-medium transition-colors hover:text-brand-teal ${
                  pathname === "/career" ? "text-brand-teal font-semibold" : "text-[#232330]"
                }`}
                onClick={closeMenu}
              >
                Career
              </Link>
            </div>

            {/* BES 2026 */}
            <div className="py-3">
              <Link
                href="/bes-2026"
                className={`block text-[16px] font-medium transition-colors hover:text-brand-teal ${
                  pathname === "/bes-2026" ? "text-brand-teal font-semibold" : "text-[#232330]"
                }`}
                onClick={closeMenu}
              >
                BES 2026
              </Link>
            </div>

            {/* Blogs */}
            <div className="py-3">
              <Link
                href="/blogs"
                className={`block text-[16px] font-medium transition-colors hover:text-brand-teal ${
                  pathname === "/blogs" ? "text-brand-teal font-semibold" : "text-[#232330]"
                }`}
                onClick={closeMenu}
              >
                Blogs
              </Link>
            </div>
          </div>

          {/* Contact Us CTA button */}
          <div className="px-6 pt-2 pb-8 bg-slate-50/50">
            <Link
              href="/contact-us"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-white text-[15px] font-medium shadow-md transition-all duration-200"
              style={{
                background: "linear-gradient(90deg, #033361 0%, #0795F8 100%)",
              }}
              onClick={closeMenu}
            >
              <span>Contact Us</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
