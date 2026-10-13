"use client";

import Link from "next/link";

const partnerLogos = [
  "/wp-content/uploads/2025/06/p1-1-1.png",
  "/wp-content/uploads/2025/06/p2-1.png",
  "/wp-content/uploads/2025/06/p3-1.png",
  "/wp-content/uploads/2025/06/p4-1.png",
  "/wp-content/uploads/2025/06/p5-1.png",
  "/wp-content/uploads/2025/06/p6-1.png",
  "/wp-content/uploads/2025/06/p7-1.png",
  "/wp-content/uploads/2025/06/p8-1.png",
  "/wp-content/uploads/2025/06/p9-1.png",
];

export default function HomePartners() {
  return (
    <section className="sub-section home-partners" style={{ padding: "55px 0", backgroundColor: "#fff" }}>
      <div className="container" style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 15px" }}>
        <div className="row">
          <div className="col-lg-12">
            <div className="headingmain" style={{ marginBottom: "20px" }}>
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
                alignItems: "flex-end",
                justifyContent: "center",
                flexWrap: "wrap",
                margin: "0 -35px",
              }}
            >
              {partnerLogos.map((logo, index) => (
                <div
                  key={index}
                  className="partner-item"
                  style={{
                    height: "53px",
                    margin: "20px 35px",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={logo}
                    alt={`Partner ${index + 1}`}
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

            <div className="homePbtn" style={{ marginTop: "35px", textAlign: "center" }}>
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
                  padding: "5px 20px",
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
        @media (max-width: 767px) {
          .partnerlists {
            margin: 0 !important;
          }
          .partnerlists .partner-item {
            height: 39px !important;
            margin: 15px 18px !important;
          }
        }
        @media (min-width: 1601px) {
          .partnerlists .partner-item {
            height: 75px !important;
          }
        }
      `}</style>
    </section>
  );
}
