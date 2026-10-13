"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const slides = [
  {
    img: "/wp-content/uploads/2025/06/slide01.jpg",
    imgMobile: "/wp-content/uploads/2025/06/slide01m.jpg",
    video: "/wp-content/uploads/2025/06/hpvid.mp4",
    title: "Empowering smarter energy solutions",
    subTitle: "Innovative Technologies for Sustainable Efficiency",
    btnLabel: "Explore Solutions",
    btnHref: "/smart-grid-integration",
  },
  {
    img: "/wp-content/uploads/2025/06/smart-grid.jpg",
    imgMobile: "/wp-content/uploads/2025/06/smart-grid-m.jpg",
    video: "/wp-content/uploads/2025/06/hpvideo2.mov",
    title: "Optimizing Solar Plant Production for Sustainable Planet",
    subTitle: "Pathbreaking Wireless Monitoring Sensors",
    btnLabel: "Explore Solutions",
    btnHref: "/solar-solutions",
  },
  {
    img: "/wp-content/uploads/2025/06/slide02.jpg",
    imgMobile: "/wp-content/uploads/2025/06/slide02m.jpg",
    video: "/wp-content/uploads/2025/06/hpvideo3.mp4",
    title: "Revamping India’s Smart Metering landscape",
    subTitle: "Leveraging Patented Communications & Data Analytics",
    btnLabel: "Discover Smart Metering",
    btnHref: "/smart-meter-solutions",
  },
  {
    img: "/wp-content/uploads/2026/03/Home-page-banner-1.png",
    imgMobile: "/wp-content/uploads/2026/03/Home-page-banner-1.png",
    video: null,
    title: "Probus At\nBharat Electricity Summit 2026",
    subTitle:
      "Join us as we explore the future of energy storage and grid intelligence in India.\nYashobhoomi, New Delhi",
    btnLabel: "Discover More",
    btnHref: "/bes-2026",
  },
];

export default function HomeHero() {
  const [current, setCurrent] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Autoplay video when active
  useEffect(() => {
    videoRefs.current.forEach((vid, index) => {
      if (vid) {
        vid.muted = true;
        vid.defaultMuted = true;
        if (index === current) {
          vid.play().catch(() => {});
        }
      }
    });
  }, [current]);

  // Slide rotation every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="banner__slider afterheaderspace" style={{ position: "relative" }}>
      <div className="slider stick-dots" style={{ position: "relative", overflow: "hidden" }}>
        <div className="slides-container" style={{ position: "relative", width: "100%", height: "calc(100vh - 80px)" }}>
          {slides.map((s, index) => {
            const isActive = index === current;
            return (
              <div
                key={index}
                className={`slide sl5 ${isActive ? "active" : ""}`}
                style={{
                  position: "absolute",
                  inset: 0,
                  opacity: isActive ? 1 : 0,
                  visibility: isActive ? "visible" : "hidden",
                  transition: "opacity 1s ease-in-out, visibility 1s ease-in-out",
                  zIndex: isActive ? 2 : 1,
                  overflow: "hidden",
                }}
              >
                {/* Background Image / Video container */}
                <div
                  className="slide__img"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={s.img}
                    alt=""
                    className="full-image hide768"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />

                  {s.video && (
                    <div
                      className="videowrapper"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        display: "block",
                      }}
                    >
                      <video
                        ref={(el) => {
                          videoRefs.current[index] = el;
                          if (el) {
                            el.muted = true;
                            el.defaultMuted = true;
                          }
                        }}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      >
                        <source src={s.video} type="video/mp4" />
                        <source src={s.video} type="video/quicktime" />
                      </video>
                    </div>
                  )}
                </div>

                {/* Text Content */}
                <div
                  className="slide__content slide__content__right"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "7%",
                    transform: "translateY(-50%)",
                    width: "86%",
                    textAlign: "center",
                    zIndex: 4,
                  }}
                >
                  <div className="slide__content--headings" style={{ color: "#ffffff" }}>
                    <h2
                      style={{
                        fontSize: "34px",
                        lineHeight: "44px",
                        color: "#ffffff",
                        textShadow: "0px 0px 3px #23233039",
                        whiteSpace: "pre-line",
                        marginBottom: "12px",
                        fontWeight: 700,
                        fontFamily: "'Roboto', sans-serif",
                      }}
                    >
                      {s.title}
                    </h2>
                    <p
                      style={{
                        fontSize: "18px",
                        lineHeight: "28px",
                        color: "#ffffff",
                        textShadow: "0px 0px 3px #23233039",
                        whiteSpace: "pre-line",
                        margin: "0 auto 20px auto",
                        maxWidth: "800px",
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: 400,
                      }}
                    >
                      {s.subTitle}
                    </p>
                    <Link
                      href={s.btnHref}
                      className="btnexplore"
                      style={{
                        backgroundColor: "#ffffff",
                        border: "1px solid #ffffff",
                        marginTop: "10px",
                        display: "inline-block",
                        transition: "all .4s ease",
                        fontSize: "15px",
                        lineHeight: "22px",
                        color: "#002952",
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: 500,
                        borderRadius: "30px",
                        padding: "10px 25px",
                        textDecoration: "none",
                      }}
                    >
                      {s.btnLabel}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stick Dots at bottom 35px */}
        <ul
          className="slick-dots"
          style={{
            position: "absolute",
            bottom: "35px",
            left: 0,
            right: 0,
            listStyle: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            padding: 0,
            margin: 0,
            width: "100%",
            zIndex: 10,
          }}
        >
          {slides.map((_, index) => (
            <li
              key={index}
              style={{
                display: "inline-block",
                cursor: "pointer",
              }}
              onClick={() => setCurrent(index)}
            >
              <button
                type="button"
                style={{
                  width: "50px",
                  height: "3px",
                  backgroundColor: "#ffffff",
                  opacity: current === index ? 0.95 : 0.3,
                  border: "none",
                  outline: "none",
                  padding: 0,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  display: "block",
                }}
                aria-label={`Slide ${index + 1}`}
              />
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        .afterheaderspace {
          margin-top: 80px;
        }
        @media (max-width: 991px) {
          .afterheaderspace {
            margin-top: 80px;
          }
          .slides-container {
            height: 60vh !important;
          }
          .slide__content--headings h2 {
            font-size: 28px !important;
          }
          .slide__content--headings p {
            font-size: 16px !important;
          }
        }
        @media (max-width: 767px) {
          .afterheaderspace {
            margin-top: 60px;
          }
          .slides-container {
            height: 420px !important;
          }
          .slide__content--headings h2 {
            font-size: 24px !important;
          }
          .slide__content--headings p {
            font-size: 14px !important;
          }
          .stick-dots .slick-dots {
            bottom: 20px !important;
          }
        }
        @media (min-width: 1601px) {
          .slide__content--headings h2 {
            font-size: 42px !important;
          }
          .slide__content--headings p {
            font-size: 20px !important;
            padding: 20px 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
