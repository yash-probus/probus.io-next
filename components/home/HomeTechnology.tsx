"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const overviewImages = [
  "/wp-content/uploads/2025/06/overviewRimg-1.png",
  "/wp-content/uploads/2025/06/overviewRimg1.png",
  "/wp-content/uploads/2025/06/overviewRimg2.png",
  "/wp-content/uploads/2025/06/overviewRimg3.png",
];

const features = [
  {
    icon: "/wp-content/uploads/2025/06/icon01-1.png",
    text: "EXPERTISE IN ENERGY EFFICIENCY",
  },
  {
    icon: "/wp-content/uploads/2025/06/icon02-1.png",
    text: "IOT-POWERED AUTOMATION",
  },
  {
    icon: "/wp-content/uploads/2025/06/icon03-2.png",
    text: "SMART METERING SOLUTIONS",
  },
  {
    icon: "/wp-content/uploads/2025/06/icon04-2.png",
    text: "SMART GRID INTEGRATION",
  },
];

export default function HomeTechnology() {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % overviewImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="overviewhome"
      className="sub-section overviewhome"
      style={{
        position: "relative",
        background:
          "transparent linear-gradient(109deg, #0694f9 0%, #449AF5 48%, #08BEB7 100%) 0% 0% no-repeat padding-box",
        padding: 0,
      }}
    >
      {/* Background circuit video at opacity 0.1 */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          objectFit: "unset",
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: 1,
          opacity: 0.1,
          top: 0,
          left: 0,
        }}
      >
        <source
          src="/wp-content/themes/probus/assets/images/technology.mp4"
          type="video/mp4"
        />
      </video>

      {/* Content wrapper */}
      <div
        className="overview-content"
        style={{
          margin: "0 auto",
          position: "relative",
          padding: "82px 0 60px 0",
          zIndex: 3,
        }}
      >
        <div
          className="container"
          style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 15px" }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              margin: "0 -15px",
              alignItems: "center",
            }}
          >
            {/* Left Column */}
            <div
              className="col-lg-6-left"
              style={{
                width: "100%",
                padding: "0 15px",
                boxSizing: "border-box",
              }}
            >
              <div className="headingmain m-0">
                <div className="text-left">
                  <h2
                    style={{
                      fontSize: "30px",
                      position: "relative",
                      zIndex: 1,
                      lineHeight: "44px",
                      marginBottom: "12px",
                      fontWeight: 500,
                      color: "#ffffff",
                      fontFamily: "'Roboto', sans-serif",
                    }}
                  >
                    Ensuring A Greener Planet by leveraging Our Strengths in
                    Communications &amp; Data Analytics
                  </h2>
                  <p
                    style={{
                      fontSize: "16px",
                      lineHeight: "26px",
                      fontWeight: 400,
                      color: "#ffffff",
                      fontFamily: "'Roboto', sans-serif",
                      marginBottom: "20px",
                    }}
                  >
                    At Probus, we specialize in delivering innovative energy
                    solutions that drive efficiency and sustainability
                  </p>
                </div>

                <div className="over-cont-box" style={{ margin: "20px 0 0 0" }}>
                  <ul
                    style={{
                      listStyle: "none",
                      display: "flex",
                      flexWrap: "wrap",
                      width: "100%",
                      padding: 0,
                      margin: "0 0 20px 0",
                    }}
                  >
                    {features.map((item, idx) => (
                      <li
                        key={idx}
                        style={{
                          listStyle: "none",
                          display: "inline-flex",
                          width: "45%",
                          marginRight: "5%",
                          alignItems: "center",
                          marginBottom: "26px",
                        }}
                      >
                        <img
                          src={item.icon}
                          alt=""
                          style={{
                            marginRight: "11px",
                            width: "48px",
                            height: "48px",
                            objectFit: "contain",
                            flexShrink: 0,
                          }}
                        />
                        <p
                          style={{
                            color: "#ffffff",
                            fontSize: "13px",
                            lineHeight: "18px",
                            fontWeight: 500,
                            margin: 0,
                            padding: 0,
                            fontFamily: "'Roboto', sans-serif",
                          }}
                        >
                          {item.text}
                        </p>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/about-us"
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
                      padding: "6px 22px",
                      textDecoration: "none",
                    }}
                  >
                    Know More About Us
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Photo Slider with 4 dots */}
            <div
              className="col-lg-6-right"
              style={{
                width: "100%",
                padding: "0 15px",
                boxSizing: "border-box",
              }}
            >
              <div
                className="overviewRimgslider-wrap"
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "540px",
                  margin: "0 auto",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    minHeight: "360px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {overviewImages.map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt="Overview preview"
                      style={{
                        position: index === 0 ? "relative" : "absolute",
                        top: index === 0 ? "auto" : 0,
                        left: index === 0 ? "auto" : 0,
                        width: "100%",
                        height: "auto",
                        maxWidth: "100%",
                        opacity: index === currentImg ? 1 : 0,
                        transition: "opacity 0.8s ease-in-out",
                        pointerEvents: index === currentImg ? "auto" : "none",
                      }}
                    />
                  ))}
                </div>

                {/* Dots */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "8px",
                    marginTop: "16px",
                  }}
                >
                  {overviewImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImg(index)}
                      type="button"
                      style={{
                        width: "20px",
                        height: "6px",
                        backgroundColor: "#ffffff",
                        opacity: currentImg === index ? 1 : 0.4,
                        border: "none",
                        borderRadius: "2px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        padding: 0,
                      }}
                      aria-label={`Slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 992px) {
          .col-lg-6-left {
            width: 50% !important;
          }
          .col-lg-6-right {
            width: 50% !important;
          }
        }
        @media (max-width: 991px) {
          .overview-content {
            padding: 50px 0 40px 0 !important;
          }
          .col-lg-6-right {
            margin-top: 30px;
          }
        }
        .bth-Blue:hover {
          background-color: #ffffff !important;
          color: #033361 !important;
        }
      `}</style>
    </section>
  );
}
