import Image from "next/image";
import Link from "next/link";
import { getAllJobs } from "@/lib/jobs";

export default function OpenPositions() {
  const jobs = getAllJobs();

  return (
    <section id="open-positions" className="sub-section opening_wrap" style={{ background: "#FBFBFB", padding: "65px 0" }}>
      <div 
        className="container" 
        style={{ 
          maxWidth: "100%", 
          padding: "0 75px", 
          margin: "0 auto", 
          width: "100%", 
          boxSizing: "border-box" 
        }}
      >
        <div className="row" style={{ display: "flex", flexWrap: "wrap", margin: "0 -15px" }}>
          <div style={{ width: "100%", padding: "0 15px", boxSizing: "border-box" }}>
            <div className="headingmain" style={{ marginBottom: "20px", textAlign: "center" }}>
              <h6 style={{ display: "none", fontSize: "14px", color: "#636363", marginBottom: "5px", textTransform: "uppercase" }}>
                COMPANY OVERVIEW
              </h6>
              <h2 style={{ fontSize: "30px", lineHeight: "44px", fontWeight: 700, marginBottom: "12px", color: "#000" }}>
                We&apos;re looking for talented people like you
              </h2>
            </div>
          </div>
        </div>

        <div className="openinglist-wrp" style={{ margin: "10px 0 30px 0" }}>
          <div className="row" style={{ display: "flex", flexWrap: "wrap", margin: "0 -15px" }}>
            {jobs.map((job, idx) => (
              <div 
                key={idx} 
                className="col-md-6 col-lg-3 opening-col"
                style={{
                  padding: "0 15px",
                  marginBottom: "30px",
                  boxSizing: "border-box"
                }}
              >
                <div 
                  className="opening-list"
                  style={{
                    boxShadow: "0px 0px 6px #0000001A",
                    height: "100%",
                    borderRadius: "8px",
                    borderBottom: "4px solid #033361",
                    padding: "38px 24px",
                    boxSizing: "border-box",
                    backgroundColor: "#fff",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <h6 style={{ color: "#5F5F5F", fontSize: "13px", lineHeight: "28px", margin: 0, fontWeight: 400 }}>
                    {job.type}
                  </h6>
                  <h3 style={{ color: "#000000", fontSize: "17px", lineHeight: "24px", marginBottom: "10px", marginTop: 0, fontWeight: 500, minHeight: "48px" }}>
                    {job.title}
                  </h3>
                  <ul style={{ listStyle: "none", margin: "15px 0", padding: 0 }}>
                    <li style={{ listStyle: "none", margin: 0, display: "inline-flex", alignItems: "center", fontSize: "15px", lineHeight: "24px", fontWeight: 500, marginRight: "25px", color: "#000000" }}>
                      <Image 
                        src="/images/loc-opening-icon.svg" 
                        alt="Location" 
                        width={30} 
                        height={30} 
                        style={{ width: "30px", height: "auto", marginRight: "8px", filter: "grayscale(100%)", opacity: 0.7 }}
                      />
                      <span>{job.location}</span>
                    </li>
                    <li style={{ listStyle: "none", margin: 0, display: "inline-flex", alignItems: "center", fontSize: "15px", lineHeight: "24px", fontWeight: 500, color: "#000000" }}>
                      <Image 
                        src="/images/exp-opening-icon.svg" 
                        alt="Experience" 
                        width={30} 
                        height={30} 
                        style={{ width: "30px", height: "auto", marginRight: "8px", filter: "grayscale(100%)", opacity: 0.7 }}
                      />
                      <span>{job.experience}</span>
                    </li>
                  </ul>
                  <p style={{
                    color: "#000000",
                    marginBottom: "10px",
                    fontWeight: 400,
                    display: "-webkit-box",
                    maxWidth: "100%",
                    height: "74px",
                    fontSize: "15px",
                    lineHeight: "23px",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}>
                    {job.excerpt}
                  </p>
                  <div style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "12px", borderTop: "1px solid #f0f0f0" }}>
                    <Link 
                      href={`/jobs/${job.slug}`}
                      style={{ fontSize: "15px", color: "#097DF5", lineHeight: "24px", fontWeight: 500 }}
                      className="hover:underline"
                    >
                      Apply Now
                    </Link>
                    <Link
                      href="/empowering-the-future-probus-smart-things-journey-in-smart-grid-innovation"
                      style={{ fontSize: "13px", color: "#666", lineHeight: "24px", fontWeight: 400 }}
                      className="hover:text-[#033361] hover:underline"
                    >
                      Know More &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .opening-col {
          width: 25%;
        }
        @media (max-width: 991px) {
          .opening-col {
            width: 50% !important;
          }
          .opening_wrap .opening-list {
            margin-bottom: 20px !important;
          }
        }
        @media (max-width: 768px) {
          .opening_wrap .container {
            padding: 0 15px !important;
          }
          .opening-col {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
