"use client";

export default function HomeTestimonial() {
  return (
    <section
      className="testimonial-wrap hbg"
      style={{
        paddingBottom: "160px",
        backgroundImage: "url(/wp-content/themes/probus/assets/images/bg-htesti.png)",
        backgroundPosition: "right 0px bottom -60px",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#ffffff",
      }}
    >
      <div
        className="testimonail-box"
        style={{
          background: "#0795F8",
          paddingTop: "54px",
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
            style={{
              display: "flex",
              flexWrap: "wrap",
              margin: "0 -15px",
              alignItems: "flex-start",
            }}
          >
            {/* Left col — .col-lg-5 */}
            <div
              className="col-lg-5"
              style={{
                width: "41.666667%",
                padding: "0 15px",
                boxSizing: "border-box",
              }}
            >
              <div className="headingmain" style={{ marginBottom: "20px" }}>
                <div className="text-left">
                  {/* Matches WordPress .headingmain h6 { display: none; } */}
                  <h6
                    className="withline text-white"
                    style={{
                      display: "none",
                    }}
                  >
                    TESTIMONIALS
                  </h6>
                  <h2
                    className="text-white"
                    style={{
                      fontSize: "30px",
                      lineHeight: "44px",
                      color: "#ffffff",
                      fontWeight: 500,
                      margin: "0 0 12px 0",
                      fontFamily: "'Roboto', sans-serif",
                    }}
                  >
                    Collaborating for success and change
                  </h2>
                </div>
              </div>

              <div
                className="testimain_img"
                style={{
                  marginBottom: "-100px",
                  marginTop: "85px",
                  position: "relative",
                  zIndex: 2,
                  width: "85%",
                }}
              >
                <img
                  src="/wp-content/uploads/2025/06/testmain.png"
                  alt="Collaborating for success and change"
                  style={{
                    maxWidth: "100%",
                    borderRadius: "12px",
                    display: "block",
                  }}
                />
              </div>
            </div>

            {/* Right col — .col-lg-7 */}
            <div
              className="col-lg-7"
              style={{
                width: "58.333333%",
                padding: "0 15px",
                boxSizing: "border-box",
              }}
            >
              <div
                className="testimoni_slider"
                style={{
                  maxWidth: "520px",
                  margin: "0 auto 50px auto",
                  position: "relative",
                }}
              >
                {/* Quotation Marks: 3.svg on top-left, 2.svg on bottom-right matching WordPress ::before and ::after */}
                <div
                  className="quote-decor-left"
                  style={{
                    position: "absolute",
                    left: "-130px",
                    top: "0px",
                    width: "100px",
                    height: "100px",
                    backgroundImage: "url(/wp-content/themes/probus/assets/images/3.svg)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100px auto",
                    zIndex: 1,
                    pointerEvents: "none",
                  }}
                />
                <div
                  className="quote-decor-right"
                  style={{
                    position: "absolute",
                    right: "-130px",
                    bottom: "-15px",
                    width: "100px",
                    height: "100px",
                    backgroundImage: "url(/wp-content/themes/probus/assets/images/2.svg)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100px auto",
                    zIndex: 1,
                    pointerEvents: "none",
                  }}
                />

                <div
                  className="testimonials_item"
                  style={{
                    padding: "60px 0 0 0",
                  }}
                >
                  <div
                    className="testimonials_content_wrap"
                    style={{
                      position: "relative",
                    }}
                  >
                    <div
                      className="testimonials_quote"
                      style={{
                        fontSize: "20px",
                        lineHeight: "30px",
                        color: "#ffffff",
                        fontStyle: "normal",
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: 300,
                        letterSpacing: 0,
                      }}
                    >
                      Probus is truly agile – flexible and fast. Commit till the end to
                      deliver tasks even with all the situational challenges on the
                      field. A true partner to make you successful.
                    </div>
                  </div>

                  <div
                    className="testimonials_meta_wrap"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "40px",
                    }}
                  >
                    <div
                      className="testimonials_image"
                      style={{ marginRight: "12px" }}
                    >
                      <img
                        src="/wp-content/uploads/2025/06/test_member.png"
                        alt="Anil Vashy"
                        style={{
                          width: "65px",
                          height: "65px",
                          borderRadius: "50%",
                          objectFit: "cover",
                          border: "2px solid #ffffff",
                          display: "block",
                        }}
                      />
                    </div>
                    <div className="testimonials_name_wrap">
                      <h3
                        className="testimonials_name"
                        style={{
                          fontSize: "16px",
                          lineHeight: "28px",
                          fontWeight: 600,
                          color: "#ffffff",
                          margin: 0,
                          fontFamily: "'Roboto', sans-serif",
                          display: "block",
                        }}
                      >
                        Anil Vashy
                      </h3>
                      <span
                        className="testimonials_status"
                        style={{
                          fontSize: "14px",
                          lineHeight: "28px",
                          color: "#ffffff",
                          display: "block",
                          fontFamily: "'Roboto', sans-serif",
                          fontWeight: 300,
                        }}
                      >
                        AVP SCADA BSES Yamuna Power
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1200px) {
          .container {
            padding: 0 30px !important;
          }
          .quote-decor-left {
            left: -80px !important;
            width: 70px !important;
            height: 70px !important;
            background-size: 70px auto !important;
          }
          .quote-decor-right {
            right: -80px !important;
            width: 70px !important;
            height: 70px !important;
            background-size: 70px auto !important;
          }
        }
        @media (max-width: 991px) {
          .container {
            padding: 0 20px !important;
          }
          .col-lg-5,
          .col-lg-7 {
            width: 100% !important;
          }
          .testimain_img {
            margin-top: 30px !important;
            margin-bottom: 20px !important;
            width: 100% !important;
          }
          .testimonials_item {
            padding: 20px 0 0 0 !important;
          }
          .quote-decor-left {
            left: -30px !important;
            top: -20px !important;
            width: 50px !important;
            height: 50px !important;
            background-size: 50px auto !important;
          }
          .quote-decor-right {
            right: -20px !important;
            bottom: -20px !important;
            width: 50px !important;
            height: 50px !important;
            background-size: 50px auto !important;
          }
        }
        @media (max-width: 600px) {
          .container {
            padding: 0 15px !important;
          }
          .quote-decor-left,
          .quote-decor-right {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
