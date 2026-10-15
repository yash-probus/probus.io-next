"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        backgroundColor: "#121619",
        backgroundImage: "url(/wp-content/themes/probus/assets/images/footerbg.png)",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
        position: "relative",
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      <div
        className="footertop"
        style={{
          width: "100%",
          padding: "40px 0 0 0",
          borderTop: "1px solid #ffffff",
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: "1800px",
            margin: "0 auto",
            padding: "0 75px",
            boxSizing: "border-box",
            width: "100%",
          }}
        >
          <div
            className="row"
            style={{
              display: "flex",
              flexWrap: "wrap",
              margin: "0 -15px",
            }}
          >
            {/* Column 1 — About Probus */}
            <div
              className="col-about"
              style={{
                width: "28%",
                minWidth: "300px",
                maxWidth: "380px",
                padding: "0 15px",
                boxSizing: "border-box",
                marginBottom: "20px",
              }}
            >
              <div className="footer-about">
                <div
                  className="flogo"
                  style={{
                    marginBottom: "20px",
                    height: "55px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src="/wp-content/uploads/2025/06/logo-footer.png"
                    alt="Probus Logo"
                    width={150}
                    height={55}
                    style={{
                      height: "55px",
                      width: "auto",
                      display: "block",
                    }}
                  />
                </div>
                <p
                  style={{
                    color: "#ffffff",
                    fontSize: "15px",
                    lineHeight: "26px",
                    fontWeight: 300,
                    margin: "0 0 15px 0",
                    maxWidth: "340px",
                  }}
                >
                  Pioneering the future of sustainable energy with cutting-edge
                  solutions tailored to empower communities and industries.
                  Committed to excellence, we fuse innovation with reliability
                  to light up a greener tomorrow
                </p>
                <div>
                  <Link
                    href="/contact-us"
                    style={{
                      marginTop: "15px",
                      display: "inline-block",
                      transition: "all 0.3s ease-in-out",
                      fontSize: "15px",
                      color: "#161E26",
                      lineHeight: "28px",
                      backgroundColor: "#ffffff",
                      borderRadius: "20px",
                      border: "1px solid #ffffff",
                      padding: "5px 22px",
                      fontWeight: 500,
                      textDecoration: "none",
                    }}
                    className="contact-btn"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            {/* Column 2 — Navigation Links (col-lg-5 matching WordPress) */}
            <div
              className="col-nav"
              style={{
                width: "48%",
                padding: "0 15px",
                boxSizing: "border-box",
              }}
            >
              <div
                className="fnavbx"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  width: "100%",
                  marginTop: "25px",
                  paddingLeft: "50px",
                  boxSizing: "border-box",
                }}
              >
                {/* Nav Col 1: About Us, Partners, Careers */}
                <ul
                  style={{
                    width: "30%",
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                  }}
                >
                  <li style={{ listStyle: "none", margin: "0 0 28px 0" }}>
                    <Link
                      href="/about-us"
                      style={{
                        color: "#ffffff",
                        fontSize: "16px",
                        lineHeight: "28px",
                        transition: "all 0.3s ease-in-out",
                        display: "block",
                        textDecoration: "none",
                      }}
                      className="f-link"
                    >
                      About Us
                    </Link>
                  </li>
                  <li style={{ listStyle: "none", margin: "0 0 28px 0" }}>
                    <Link
                      href="/partners"
                      style={{
                        color: "#ffffff",
                        fontSize: "16px",
                        lineHeight: "28px",
                        transition: "all 0.3s ease-in-out",
                        display: "block",
                        textDecoration: "none",
                      }}
                      className="f-link"
                    >
                      Partners
                    </Link>
                  </li>
                  <li style={{ listStyle: "none", margin: "0 0 28px 0" }}>
                    <Link
                      href="/career"
                      style={{
                        color: "#ffffff",
                        fontSize: "16px",
                        lineHeight: "28px",
                        transition: "all 0.3s ease-in-out",
                        display: "block",
                        textDecoration: "none",
                      }}
                      className="f-link"
                    >
                      Careers
                    </Link>
                  </li>
                </ul>

                {/* Nav Col 2: Solutions + Sub-items */}
                <ul
                  style={{
                    width: "40%",
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                  }}
                >
                  <li style={{ listStyle: "none", margin: "0 0 10px 0" }}>
                    <Link
                      href="/solution"
                      style={{
                        color: "#ffffff",
                        fontSize: "16px",
                        lineHeight: "28px",
                        transition: "all 0.3s ease-in-out",
                        display: "block",
                        textDecoration: "none",
                      }}
                      className="f-link"
                    >
                      Solutions
                    </Link>
                    <ol
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: "15px 0 0 0",
                      }}
                    >
                      <li style={{ listStyle: "none", margin: "0 0 10px 0" }}>
                        <Link
                          href="/smart-meter"
                          style={{
                            color: "#D8D8D8",
                            fontSize: "14px",
                            lineHeight: "28px",
                            transition: "all 0.3s ease-in-out",
                            display: "block",
                            textDecoration: "none",
                          }}
                          className="f-link"
                        >
                          Smart Metering Solutions
                        </Link>
                      </li>
                      <li style={{ listStyle: "none", margin: "0 0 10px 0" }}>
                        <Link
                          href="/solar-solutions"
                          style={{
                            color: "#D8D8D8",
                            fontSize: "14px",
                            lineHeight: "28px",
                            transition: "all 0.3s ease-in-out",
                            display: "block",
                            textDecoration: "none",
                          }}
                          className="f-link"
                        >
                          Solar Solutions
                        </Link>
                      </li>
                      <li style={{ listStyle: "none", margin: "0 0 10px 0" }}>
                        <Link
                          href="/smart-grid-integration"
                          style={{
                            color: "#D8D8D8",
                            fontSize: "14px",
                            lineHeight: "28px",
                            transition: "all 0.3s ease-in-out",
                            display: "block",
                            textDecoration: "none",
                          }}
                          className="f-link"
                        >
                          Smart Grid Integration
                        </Link>
                      </li>
                    </ol>
                  </li>
                </ul>

                {/* Nav Col 3: Blog, Contact Us, CERC Application */}
                <ul
                  style={{
                    width: "30%",
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                  }}
                >
                  <li style={{ listStyle: "none", margin: "0 0 28px 0" }}>
                    <Link
                      href="/blogs"
                      style={{
                        color: "#ffffff",
                        fontSize: "16px",
                        lineHeight: "28px",
                        transition: "all 0.3s ease-in-out",
                        display: "block",
                        textDecoration: "none",
                      }}
                      className="f-link"
                    >
                      Blog
                    </Link>
                  </li>
                  <li style={{ listStyle: "none", margin: "0 0 28px 0" }}>
                    <Link
                      href="/contact-us"
                      style={{
                        color: "#ffffff",
                        fontSize: "16px",
                        lineHeight: "28px",
                        transition: "all 0.3s ease-in-out",
                        display: "block",
                        textDecoration: "none",
                      }}
                      className="f-link"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li style={{ listStyle: "none", margin: "0 0 28px 0" }}>
                    <a
                      href="/wp-content/uploads/2026/08/CERC-Trading-Lic.-Application.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#ffffff",
                        fontSize: "16px",
                        lineHeight: "22px",
                        transition: "all 0.3s ease-in-out",
                        display: "block",
                        textDecoration: "none",
                      }}
                      className="f-link"
                    >
                      CERC Trading Lic.
                      <br />
                      Application
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div
            className="footerbottom"
            style={{
              padding: "30px 0",
              borderTop: "1px solid #6c7174",
              color: "#ffffff",
              fontSize: "14px",
              lineHeight: "28px",
              marginTop: "30px",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div style={{ textAlign: "left" }}>
              © 2024 Probus Smart Things Pvt. Ltd.
            </div>
            <div className="botmbx" style={{ textAlign: "right" }}>
              <Link
                href="/privacy-policy"
                style={{
                  color: "#ffffff",
                  fontSize: "14px",
                  lineHeight: "28px",
                  textDecoration: "none",
                }}
                className="f-link"
              >
                Privacy Policy
              </Link>
              <span style={{ margin: "0 8px", color: "#6c7174" }}>|</span>
              <Link
                href="/terms-and-conditions"
                style={{
                  color: "#ffffff",
                  fontSize: "14px",
                  lineHeight: "28px",
                  textDecoration: "none",
                }}
                className="f-link"
              >
                Terms and Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-btn:hover {
          background-color: transparent !important;
          color: #ffffff !important;
        }
        .f-link:hover {
          text-decoration: underline !important;
        }
        @media (max-width: 991px) {
          .container {
            padding: 0 30px !important;
          }
          .col-about {
            width: 100% !important;
            max-width: 100% !important;
          }
          .col-nav {
            width: 100% !important;
          }
          .fnavbx {
            padding-left: 0 !important;
            margin-top: 20px !important;
          }
        }
        @media (max-width: 600px) {
          .container {
            padding: 0 15px !important;
          }
          .fnavbx {
            flex-direction: column !important;
          }
          .fnavbx ul {
            width: 100% !important;
            margin-bottom: 20px !important;
          }
          .footerbottom {
            flex-direction: column !important;
            gap: 10px;
            text-align: center !important;
          }
          .botmbx {
            text-align: center !important;
          }
        }
      `}</style>
    </footer>
  );
}
