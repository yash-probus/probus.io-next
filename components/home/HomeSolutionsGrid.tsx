"use client";

import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    title: "Smart Metering Solutions",
    desc: "Gain complete visibility and control over your energy consumption with our solutions",
    img: "/wp-content/uploads/2025/06/pricing.png",
    link: "/smart-meter-solutions",
    btnClass: "needbtn1",
    btnColor: "#6BA9E4",
  },
  {
    title: "Solar Solutions",
    desc: "Embrace renewable energy with our scalable and customized solar solutions",
    img: "/wp-content/uploads/2025/06/oemsbiogas.png",
    link: "/solar-solutions",
    btnClass: "needbtn2",
    btnColor: "#FFAA36",
  },
  {
    title: "Smart Grid Integration",
    desc: "Seamlessly integrate into the intelligent grid of the future with our smart grid solutions",
    img: "/wp-content/uploads/2025/06/grid-1.png",
    link: "/smart-grid-integration",
    btnClass: "needbtn3",
    btnColor: "#F3B384",
  },
];

const ArrowSvg = ({ color }: { color: string }) => (
  <svg
    viewBox="0 0 448 512"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: "20px", height: "auto" }}
  >
    <path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z" />
  </svg>
);

export default function HomeSolutionsGrid() {
  return (
    /* .sub-section.home-needs.pb-0 */
    <section
      className="home-needs"
      style={{
        padding: "55px 0 0 0",
        backgroundImage: "url(/wp-content/themes/probus/assets/images/bg-hslolution.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top left",
      }}
    >
      {/* Heading */}
      <div className="container" style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 15px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", margin: "0 -15px" }}>
          <div style={{ width: "100%", padding: "0 15px", boxSizing: "border-box" }}>
            <div className="headingmain" style={{ marginBottom: "20px" }}>
              <div className="text-center">
                <h6 style={{ font: "14px/19px 'Roboto', sans-serif", color: "#636363", marginBottom: "5px", textTransform: "uppercase", margin: 0, padding: 0, display: "none" }}>
                  Solutions
                </h6>
                <h2 style={{ fontSize: "30px", position: "relative", zIndex: 1, lineHeight: "44px", marginBottom: "12px", fontWeight: 500, margin: 0, padding: 0 }}>
                  Transform your <span style={{ color: "#000000" }}>Energy Efficiency Needs</span>
                </h2>
                <p style={{ fontSize: "16px", lineHeight: "26px", fontWeight: 400 }}>
                  Explore our comprehensive range of energy solutions and take the first step towards a more sustainable future
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* .needthree */}
      <div
        className="needthree"
        style={{
          margin: "20px 0 0 0",
          width: "100%",
          maxWidth: "1920px",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="itemsBox"
            style={{
              position: "relative",
              width: "33.3%",
              transition: "all .4s ease",
              overflow: "hidden",
            }}
          >
            {/* Image */}
            <div className="Items-img">
              <Image
                src={card.img}
                alt={card.title}
                width={500}
                height={400}
                style={{
                  maxWidth: "100%",
                  position: "relative",
                  zIndex: 2,
                  transition: "all .4s ease",
                  display: "block",
                  width: "100%",
                }}
                className="needsImg"
              />
            </div>

            {/* Content overlay */}
            <div
              className="content"
              style={{
                padding: "40px 45px",
                color: "#fff",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 4,
                width: "100%",
                boxSizing: "border-box",
              }}
            >
              <h3 style={{ fontSize: "24px", lineHeight: "44px", marginBottom: "12px", fontWeight: 500, color: "#fff", margin: "0 0 12px 0", padding: 0 }}>
                {card.title}
              </h3>
              <p style={{ fontSize: "16px", lineHeight: "24px", marginBottom: "20px", color: "#fff", margin: "0 0 20px 0", padding: 0 }}>
                {card.desc}
              </p>
              <Link
                href={card.link}
                className={card.btnClass}
                style={{
                  borderRadius: "20px",
                  background: "#fff",
                  padding: "10px 11px",
                  transition: "all 0.1s ease-in-out",
                  display: "inline-flex",
                  height: "40px",
                  alignItems: "center",
                  textDecoration: "none",
                  color: card.btnColor,
                  gap: "0px",
                }}
              >
                <span
                  className="needsSpan"
                  style={{
                    transition: "all .3s ease-out",
                    fontSize: "16px",
                    lineHeight: "19px",
                    whiteSpace: "nowrap",
                    paddingRight: "10px",
                    opacity: 0,
                    width: 0,
                    overflow: "hidden",
                    display: "inline-block",
                    color: card.btnColor,
                  }}
                >
                  Know More
                </span>
                <ArrowSvg color={card.btnColor} />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .itemsBox:hover .needsImg {
          transform: scale(1.04);
          z-index: 3;
        }
        .itemsBox:hover .content a {
          padding: 10px 20px !important;
        }
        .itemsBox:hover .needsSpan {
          opacity: 1 !important;
          width: auto !important;
        }
        @media (max-width: 768px) {
          .itemsBox { width: 100% !important; }
          .needthree { flex-direction: column; }
          .content { padding: 20px 20px !important; }
        }
      `}</style>
    </section>
  );
}
