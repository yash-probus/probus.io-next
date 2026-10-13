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
          style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 15px" }}
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
                width: "100%",
                padding: "0 15px",
                boxSizing: "border-box",
              }}
            >
              <div className="headingmain" style={{ marginBottom: "20px" }}>
                <div className="text-left">
                  <h6
                    className="withline text-white"
                    style={{
                      font: "14px/19px 'Roboto', sans-serif",
                      position: "relative",
                      color: "#ffffff",
                      marginBottom: "5px",
                      textTransform: "uppercase",
                      paddingLeft: "39px",
                      display: "block",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        top: "50%",
                        transform: "translateY(-50%)",
                        left: 0,
                        backgroundColor: "#FFFFFF",
                        width: "30px",
                        height: "1px",
                      }}
                    />
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
                width: "100%",
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
                    {/* Quotation mark graphics */}
                    <img
                      src="/wp-content/themes/probus/assets/images/3.svg"
                      alt=""
                      style={{
                        position: "absolute",
                        left: "-50px",
                        top: "-20px",
                        width: "40px",
                        opacity: 0.5,
                      }}
                    />
                    <div
                      className="testimonials_quote"
                      style={{
                        fontSize: "20px",
                        lineHeight: "32px",
                        color: "#ffffff",
                        fontStyle: "italic",
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: 300,
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
                      marginTop: "30px",
                    }}
                  >
                    <div
                      className="testimonials_image"
                      style={{ marginRight: "16px" }}
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
                        }}
                      />
                    </div>
                    <div className="testimonials_name_wrap">
                      <h3
                        className="testimonials_name"
                        style={{
                          fontSize: "18px",
                          lineHeight: "24px",
                          fontWeight: 600,
                          color: "#ffffff",
                          margin: 0,
                          fontFamily: "'Roboto', sans-serif",
                        }}
                      >
                        Anil Vashy
                      </h3>
                      <span
                        className="testimonials_status"
                        style={{
                          fontSize: "14px",
                          lineHeight: "20px",
                          color: "rgba(255, 255, 255, 0.8)",
                          display: "block",
                          fontFamily: "'Roboto', sans-serif",
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
        @media (min-width: 992px) {
          .col-lg-5 {
            width: 41.666667% !important;
          }
          .col-lg-7 {
            width: 58.333333% !important;
          }
        }
        @media (max-width: 991px) {
          .testimain_img {
            margin-top: 30px !important;
            margin-bottom: 20px !important;
          }
          .testimonials_item {
            padding: 20px 0 0 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
