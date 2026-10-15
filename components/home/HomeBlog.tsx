"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const blogs = [
  {
    type: "Blog",
    title:
      "How IoT-Based Smart Grid Integration Improves Outage Management and Fault Detection",
    img: "/images/uploads/2026/04/Blog-04-1024x536.png",
    link: "/blogs/iot-smart-grid-integration-outage-management-fault-detection",
  },
  {
    type: "Blog",
    title:
      "PLC vs RF Mesh vs 4G: Which Communication Technology Is Right for Your AMI Network?",
    img: "/images/uploads/2026/04/blog-03-1024x536.png",
    link: "/blogs/plc-vs-rf-mesh-vs-4g-ami-communication-technology-comparison",
  },
  {
    type: "Blog",
    title:
      "Smart Metering Rollout Under RDSS: What Every DISCOM Needs to Know in 2026",
    img: "/images/uploads/2026/04/Blog-02-1024x534.png",
    link: "/blogs/smart-metering-rollout-rdss-what-every-discom-needs-to-know-2026",
  },
  {
    type: "Blog",
    title:
      "How Wireless Solar String Monitoring Reduces O&M Costs for Large-Scale Plants",
    img: "/images/uploads/2026/04/Blog-01-1024x536.png",
    link: "/blogs/wireless-solar-string-monitoring-reduces-om-costs-large-scale-plants",
  },
];

export default function HomeBlog() {
  const [startIndex, setStartIndex] = useState(0);
  const maxIndex = blogs.length - 3; // 4 - 3 = 1

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section
      className="sub-section home-resource"
      style={{
        background: "#FBFBFB",
        padding: "55px 0",
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: "1800px",
          margin: "0 auto",
          padding: "0 75px",
          position: "relative",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* Header row */}
        <div className="row" style={{ position: "relative" }}>
          <div className="col-12" style={{ width: "100%" }}>
            <div className="headingmain" style={{ marginBottom: "25px" }}>
              <div className="text-center" style={{ textAlign: "center" }}>
                <h6
                  style={{
                    font: "14px/19px 'Roboto', sans-serif",
                    position: "relative",
                    color: "#636363",
                    marginBottom: "5px",
                    textTransform: "uppercase",
                    display: "none",
                  }}
                >
                  Blogs
                </h6>
                <h2
                  style={{
                    fontSize: "30px",
                    position: "relative",
                    zIndex: 1,
                    lineHeight: "44px",
                    marginBottom: "12px",
                    fontWeight: 500,
                    color: "#000000",
                  }}
                >
                  Explore innovative energy insights
                </h2>
              </div>
            </div>
          </div>

          {/* Slider Arrows — positioned top right exactly like WordPress .slick-nav */}
          <div
            className="slider-nav-arrows"
            style={{
              position: "absolute",
              right: "0",
              top: "10px",
              display: "flex",
              alignItems: "center",
              gap: "15px",
              zIndex: 10,
            }}
          >
            <button
              type="button"
              onClick={handlePrev}
              disabled={startIndex === 0}
              aria-label="Previous slide"
              className="slick-nav-btn prev-btn"
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                border: "none",
                backgroundColor: startIndex === 0 ? "#d0d0d0" : "#9d9d9d",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: startIndex === 0 ? "default" : "pointer",
                transition: "background-color 0.3s ease",
                padding: 0,
              }}
            >
              <svg width="12" height="12" viewBox="0 0 320 512" fill="#ffffff">
                <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" />
              </svg>
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={startIndex === maxIndex}
              aria-label="Next slide"
              className="slick-nav-btn next-btn"
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                border: "none",
                backgroundColor: startIndex === maxIndex ? "#d0d0d0" : "#9d9d9d",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: startIndex === maxIndex ? "default" : "pointer",
                transition: "background-color 0.3s ease",
                padding: 0,
              }}
            >
              <svg width="12" height="12" viewBox="0 0 320 512" fill="#ffffff">
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Window */}
        <div
          className="hresource-carousel-window"
          style={{
            overflow: "hidden",
            width: "100%",
            marginTop: "10px",
          }}
        >
          <div
            className="hresource-slider"
            style={{
              display: "flex",
              transform: `translateX(-${startIndex * 33.3333}%)`,
              transition: "transform 0.5s ease-in-out",
              margin: "0 -15px",
            }}
          >
            {blogs.map((b, idx) => (
              <div
                key={idx}
                className="h-resource-slide"
                style={{
                  minWidth: "33.3333%",
                  maxWidth: "33.3333%",
                  padding: "0 15px",
                  boxSizing: "border-box",
                }}
              >
                <div
                  className="h-resource"
                  style={{
                    background: "#ffffff",
                    boxShadow: "0px 4px 18px rgba(0, 0, 0, 0.08)",
                    borderRadius: "10px",
                    padding: "20px 22px",
                    transition: "all 0.3s ease-in-out",
                    boxSizing: "border-box",
                    minHeight: "260px",
                    display: "flex",
                  }}
                >
                  <div
                    className="infobox_wrapper"
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "stretch",
                    }}
                  >
                    <div
                      className="infobox_icon_container"
                      style={{
                        minHeight: "210px",
                        display: "block",
                        overflow: "hidden",
                        width: "48%",
                        borderRadius: "8px",
                        flexShrink: 0,
                        position: "relative",
                      }}
                    >
                      <Image
                        src={b.img}
                        alt={b.title}
                        fill
                        sizes="(max-width: 600px) 100vw, (max-width: 991px) 50vw, (max-width: 1800px) 25vw, 360px"
                        className="blog-thumb object-cover"
                      />
                    </div>
                    <div
                      className="contntright"
                      style={{
                        width: "52%",
                        boxSizing: "border-box",
                        paddingLeft: "20px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <h4
                          className="infobox_title"
                          style={{
                            fontSize: "14px",
                            color: "#707070",
                            lineHeight: "22px",
                            paddingBottom: "4px",
                            fontWeight: 400,
                            margin: 0,
                          }}
                        >
                          {b.type}
                        </h4>
                        <p
                          className="time"
                          style={{
                            fontSize: "20px",
                            color: "#000000",
                            lineHeight: "28px",
                            fontWeight: 700,
                            paddingRight: "5px",
                            margin: "4px 0 0 0",
                          }}
                        >
                          {b.title}
                        </p>
                      </div>
                      <div style={{ marginTop: "16px" }}>
                        <Link
                          href={b.link}
                          className="know-more"
                          style={{
                            fontSize: "16px",
                            color: "#097DF5",
                            lineHeight: "24px",
                            fontWeight: 600,
                            display: "inline-block",
                            textDecoration: "none",
                          }}
                        >
                          Know More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .h-resource:hover {
          box-shadow: 0px 8px 26px rgba(0, 0, 0, 0.12) !important;
        }
        .h-resource:hover .blog-thumb {
          transform: scale(1.08);
        }
        .h-resource:hover .know-more {
          text-decoration: underline !important;
        }
        .slick-nav-btn:hover:not(:disabled) {
          background-color: #033361 !important;
        }
        @media (max-width: 1200px) {
          .container {
            padding: 0 30px !important;
          }
        }
        @media (max-width: 991px) {
          .container {
            padding: 0 20px !important;
          }
          .h-resource-slide {
            min-width: 50% !important;
            max-width: 50% !important;
          }
        }
        @media (max-width: 600px) {
          .container {
            padding: 0 15px !important;
          }
          .h-resource-slide {
            min-width: 100% !important;
            max-width: 100% !important;
          }
          .slider-nav-arrows {
            position: static !important;
            justify-content: center !important;
            margin-bottom: 15px !important;
          }
          .infobox_wrapper {
            flex-direction: column !important;
          }
          .infobox_icon_container {
            width: 100% !important;
            height: 180px !important;
            min-height: 180px !important;
          }
          .contntright {
            width: 100% !important;
            padding-left: 0 !important;
            margin-top: 15px !important;
          }
        }
      `}</style>
    </section>
  );
}
