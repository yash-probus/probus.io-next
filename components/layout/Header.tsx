"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const handleScroll = () => {
      if (window.pageYOffset > 150) {
        header.classList.add("is-sticky");
      } else {
        header.classList.remove("is-sticky");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header>
        {/* site-header: matches WordPress .site-header exactly */}
        <div
          ref={headerRef}
          className="site-header"
          style={{
            background: "#fff",
            boxShadow: "0px 0px 6px #0000001A",
            color: "rgba(35, 35, 35, 1)",
            padding: "0 75px",
            minHeight: "80px",
            position: "fixed",
            left: 0,
            right: 0,
            top: 0,
            zIndex: 99,
            display: "flex",
            alignItems: "center",
            width: "100%",
            maxWidth: "1800px",
            margin: "0 auto",
          }}
        >
          <div
            className="header-row_wrapper"
            style={{
              width: "100%",
              display: "flex",
              flexFlow: "row nowrap",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Logo */}
            <div className="logo_main">
              <Link href="/">
                <Image
                  src="/wp-content/uploads/2025/06/logo.png"
                  alt="Probus Logo"
                  width={119}
                  height={34}
                  style={{ width: "auto", height: "34px" }}
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation — matches WordPress .primary-nav */}
            <nav className="primary-nav hidden lg:block" style={{ padding: "20px 0" }}>
              <ul style={{ display: "flex", alignItems: "center", margin: 0, padding: 0, height: "100%" }}>
                <li style={{ height: "100%", position: "relative" }}>
                  <Link
                    href="/about-us"
                    style={{
                      position: "relative",
                      fontSize: "15px",
                      fontWeight: 500,
                      lineHeight: "28px",
                      zIndex: 1,
                      display: "flex",
                      alignItems: "center",
                      height: "100%",
                      color: "#232330",
                      padding: "6px 12px",
                      transition: "all .3s",
                    }}
                    className="nav-link"
                  >
                    <span>About Us</span>
                  </Link>
                </li>

                {/* Solution with dropdown */}
                <li style={{ height: "100%", position: "relative" }} className="group">
                  <Link
                    href="/solution"
                    style={{
                      fontSize: "15px",
                      fontWeight: 500,
                      lineHeight: "28px",
                      display: "flex",
                      alignItems: "center",
                      height: "100%",
                      color: "#232330",
                      padding: "6px 12px",
                      transition: "all .3s",
                    }}
                    className="nav-link"
                  >
                    <span>Solution</span>
                    <svg style={{ marginLeft: "5px", width: "12px", height: "12px", opacity: 0.6 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  {/* Dropdown */}
                  <div
                    className="opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                    style={{
                      position: "absolute",
                      left: 0,
                      top: "100%",
                      minWidth: "280px",
                      whiteSpace: "nowrap",
                      padding: "23px 15px",
                      zIndex: 555,
                      textAlign: "left",
                      transition: "all 200ms",
                      border: 0,
                      boxShadow: "0 15px 38px 0 rgba(0, 0, 0, 0.1)",
                      marginTop: 0,
                      borderRadius: "10px",
                      background: "#fff",
                    }}
                  >
                    {[
                      { href: "/smart-meter-solutions", label: "Smart Meter Solutions" },
                      { href: "/solar-solutions", label: "Solar Solutions" },
                      { href: "/smart-grid-integration", label: "Smart Grid Integration" },
                    ].map((item) => (
                      <div key={item.href} style={{ padding: "7px 30px" }} className="group/item">
                        <Link
                          href={item.href}
                          style={{ color: "inherit", display: "flex", alignItems: "center", transition: "color .4s", fontSize: "15px", fontWeight: 500 }}
                          className="nav-dropdown-link"
                        >
                          <span
                            style={{
                              display: "inline-block",
                              height: "4px",
                              width: 0,
                              borderRadius: "25px",
                              background: "#F7AA47",
                              verticalAlign: "middle",
                              marginRight: 0,
                              opacity: 0,
                              transition: "all .4s ease",
                            }}
                            className="nav-bullet"
                          />
                          {item.label}
                        </Link>
                      </div>
                    ))}
                  </div>
                </li>

                <li style={{ height: "100%", position: "relative" }}>
                  <Link
                    href="/partners"
                    style={{ fontSize: "15px", fontWeight: 500, lineHeight: "28px", display: "flex", alignItems: "center", height: "100%", color: "#232330", padding: "6px 12px", transition: "all .3s" }}
                    className="nav-link"
                  >
                    <span>Partners</span>
                  </Link>
                </li>

                {/* Statutory Documents with dropdown */}
                <li style={{ height: "100%", position: "relative" }} className="group">
                  <Link
                    href="/statutory-documents"
                    style={{ fontSize: "15px", fontWeight: 500, lineHeight: "28px", display: "flex", alignItems: "center", height: "100%", color: "#232330", padding: "6px 12px", transition: "all .3s" }}
                    className="nav-link"
                  >
                    <span>Statutory Documents</span>
                    <svg style={{ marginLeft: "5px", width: "12px", height: "12px", opacity: 0.6 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  <div
                    className="opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                    style={{
                      position: "absolute",
                      left: 0,
                      top: "100%",
                      minWidth: "280px",
                      whiteSpace: "nowrap",
                      padding: "23px 15px",
                      zIndex: 555,
                      transition: "all 200ms",
                      boxShadow: "0 15px 38px 0 rgba(0, 0, 0, 0.1)",
                      borderRadius: "10px",
                      background: "#fff",
                    }}
                  >
                    <div style={{ padding: "7px 30px" }}>
                      <a
                        href="/wp-content/uploads/2026/08/CERC-Trading-Lic.-Application.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "inherit", display: "flex", alignItems: "center", fontSize: "15px", fontWeight: 500 }}
                      >
                        CERC Trading Lic. Application
                      </a>
                    </div>
                  </div>
                </li>

                <li style={{ height: "100%", position: "relative" }}>
                  <Link
                    href="/career"
                    style={{ fontSize: "15px", fontWeight: 500, lineHeight: "28px", display: "flex", alignItems: "center", height: "100%", color: "#232330", padding: "6px 12px", transition: "all .3s" }}
                    className="nav-link"
                  >
                    <span>Career</span>
                  </Link>
                </li>

                <li style={{ height: "100%", position: "relative" }}>
                  <Link
                    href="/blogs"
                    style={{ fontSize: "15px", fontWeight: 500, lineHeight: "28px", display: "flex", alignItems: "center", height: "100%", color: "#232330", padding: "6px 12px", transition: "all .3s" }}
                    className="nav-link"
                  >
                    <span>Blogs</span>
                  </Link>
                </li>

                <li style={{ height: "100%", position: "relative" }}>
                  <Link
                    href="/contact-us"
                    style={{ fontSize: "15px", fontWeight: 500, lineHeight: "28px", display: "flex", alignItems: "center", height: "100%", color: "#232330", padding: "6px 12px", transition: "all .3s" }}
                    className="nav-link"
                  >
                    <span>Contact Us</span>
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 transition-colors"
              style={{ color: "#636363" }}
              aria-label="Toggle Menu"
            >
              <svg style={{ width: "24px", height: "24px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <style>{`
        /* Matches WordPress .site-header.is-sticky */
        .site-header.is-sticky {
          position: fixed !important;
          box-shadow: 0 5px 16px rgba(0, 0, 0, 0.1) !important;
          animation: slideDown 0.35s ease-out;
        }
        @keyframes slideDown {
          from { transform: translateY(-100%); }
          to   { transform: translateY(0); }
        }
        /* Matches WordPress .primary-nav ul li:hover > a > span { color: #0C9D93 } */
        .nav-link:hover span {
          color: #0C9D93;
        }
        /* Matches WordPress dropdown bullet on hover */
        .nav-dropdown-link:hover .nav-bullet {
          width: 10px !important;
          margin-right: 10px !important;
          opacity: 1 !important;
          visibility: visible !important;
        }

        /* Mobile: reduce padding */
        @media (max-width: 768px) {
          .site-header {
            padding: 0 15px !important;
          }
        }
      `}</style>
    </>
  );
}
