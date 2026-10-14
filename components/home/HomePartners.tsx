"use client";

import Link from "next/link";

const row1Logos = [
  { src: "/wp-content/uploads/2025/06/p1-1-1.png", alt: "Google" },
  { src: "/wp-content/uploads/2025/06/p2-1.png", alt: "AWS" },
  { src: "/wp-content/uploads/2025/06/p3-1.png", alt: "Silicon Labs" },
  { src: "/wp-content/uploads/2025/06/p4-1.png", alt: "Wirepas" },
  { src: "/wp-content/uploads/2025/06/p5-1.png", alt: "DLMS" },
];

const row2Logos = [
  { src: "/wp-content/uploads/2025/06/p6-1.png", alt: "Wi-SUN Alliance" },
  { src: "/wp-content/uploads/2025/06/p7-1.png", alt: "Renesas" },
  { src: "/wp-content/uploads/2025/06/p8-1.png", alt: "NXP" },
  { src: "/wp-content/uploads/2025/06/p9-1.png", alt: "HPL" },
];

export default function HomePartners() {
  return (
    <section className="sub-section home-partners" style={{ padding: "55px 0", backgroundColor: "#fff" }}>
      <div
        className="container"
        style={{
          maxWidth: "1800px",
          margin: "0 auto",
          padding: "0 75px",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div className="row">
          <div className="col-lg-12">
            <div className="headingmain" style={{ marginBottom: "25px" }}>
              <div className="text-center" style={{ textAlign: "center" }}>
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "26px",
                    fontWeight: 700,
                    color: "#000000",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    margin: 0,
                    fontFamily: "'Roboto', sans-serif",
                  }}
                >
                  WE ARE TRUSTED BY THE BEST PARTNERS
                </p>
              </div>
            </div>

            <div
              className="partnerlists"
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {/* Row 1 — 5 logos matching www */}
              <div
                className="partner-row partner-row-1"
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  width: "100%",
                }}
              >
                {row1Logos.map((item, index) => (
                  <div
                    key={index}
                    className="partner-item"
                    style={{
                      height: "56px",
                      margin: "15px 32px",
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      style={{
                        maxWidth: "100%",
                        height: "100%",
                        objectFit: "contain",
                        display: "block",
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Row 2 — 4 logos matching www */}
              <div
                className="partner-row partner-row-2"
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  width: "100%",
                  marginTop: "8px",
                }}
              >
                {row2Logos.map((item, index) => (
                  <div
                    key={index}
                    className="partner-item"
                    style={{
                      height: "56px",
                      margin: "15px 32px",
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      style={{
                        maxWidth: "100%",
                        height: "100%",
                        objectFit: "contain",
                        display: "block",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="homePbtn" style={{ marginTop: "40px", textAlign: "center" }}>
              <Link
                href="/partners"
                className="bth-Blue"
                style={{
                  backgroundColor: "#033361",
                  border: "1px solid #033361",
                  display: "inline-block",
                  transition: "all .4s ease",
                  fontSize: "15px",
                  lineHeight: "28px",
                  color: "#ffffff",
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: 500,
                  borderRadius: "30px",
                  padding: "6px 24px",
                  textDecoration: "none",
                }}
              >
                Learn more about Partner Ecosystem
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bth-Blue:hover {
          background-color: #fff !important;
          color: #033361 !important;
        }
        @media (max-width: 1200px) {
          .container {
            padding: 0 30px !important;
          }
          .partner-item {
            margin: 12px 20px !important;
            height: 48px !important;
          }
        }
        @media (max-width: 767px) {
          .container {
            padding: 0 15px !important;
          }
          .partner-item {
            margin: 10px 14px !important;
            height: 38px !important;
          }
        }
      `}</style>
    </section>
  );
}
