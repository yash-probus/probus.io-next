import Image from "next/image";
import Link from "next/link";

export default function OpenPositions() {
  const jobs = [
    {
      title: "Embedded Software Development Engineer-IV",
      location: "Noida",
      experience: "Exp. 7 Yrs of Above",
      desc: "Job Profile: Embedded Software Development Engineer-IV Location: Noida Sector 125 Experience- 7 Yrs or Above Do you want to be a part of enabling the next wave of innovation in communication protocols, building sensors and cutting-edge hardware? Does working with IoT devices, sensors, wearables, controllers which can seamlessly merge the digital world with the physical [...]",
      link: "/contact-us"
    },
    {
      title: "Project Manager/Associate Project Manager",
      location: "Noida",
      experience: "Exp. Mid-senior level",
      desc: "Do you want to be a part of enabling the next wave of innovation in communication protocols, building sensors and cutting-edge hardware? Does working with IoT devices, sensors, wearables, controllers which can seamlessly merge the digital world with the physical world around us interests you? Who we are? We are Probus Smart Things and are [...]",
      link: "/contact-us"
    },
    {
      title: "Embedded Software Development Engineer-II",
      location: "Noida",
      experience: "Exp. 4-6 Yrs",
      desc: "Job Profile- Embedded Software Development Engineer-II Experience- 3.5-6 Yrs Location: Noida Sector 125 Do you want to be a part of enabling the next wave of innovation in communication protocols, building sensors and cutting-edge hardware? Does working with IoT devices, sensors, wearables, controllers which can seamlessly merge the digital world with the physical world around [...]",
      link: "/contact-us"
    },
    {
      title: "Associate Customer Success",
      location: "Noida",
      experience: "Exp. 1.5-4 Years",
      desc: "Designation- Associate Customer Success/Associate Project Manager Experience- 1.5-4 Years Do you want to be a part of enabling the next wave of innovation in communication protocols, building sensors and cutting-edge hardware? Does working with IoT devices, sensors, wearables, controllers which can seamlessly merge the digital world with the physical world around us interests you? Who [...]",
      link: "/contact-us"
    },
    {
      title: "Business Development-Executive",
      location: "Noida",
      experience: "Exp. Fresher-2 Years",
      desc: "Designation- Business Development-Executive Experience- Fresher-2 Years Do you want to be a part of enabling the next wave of innovation in communication protocols, building sensors and cutting-edge hardware? Does working with IoT devices, sensors, wearables, controllers which can seamlessly merge the digital world with the physical world around us interests you? Who we are? We [...]",
      link: "/contact-us"
    },
    {
      title: "Finance Manager",
      location: "Noida",
      experience: "Exp. 4-6 Yrs",
      desc: "Designation- Finance Manager Experience- 4-6 Yrs Do you want to be a part of enabling the next wave of innovation in communication protocols, building sensors and cutting-edge hardware? Does working with IoT devices, sensors, wearables, controllers which can seamlessly merge the digital world with the physical world around us interests you? Who we are? We [...]",
      link: "/contact-us"
    },
    {
      title: "Program Manager",
      location: "Noida Sector 125",
      experience: "Exp. 5-7 Years",
      desc: "Job-Profile- Program Manager Experience- 5-6 Years Location-Noida  Do you want to be a part of enabling the next wave of innovation in communication protocols, building sensors and cutting-edge hardware? Does working with IoT devices, sensors, wearables, and controllers that can seamlessly merge the digital world with the physical world around us interests you? Who [...]",
      link: "/contact-us"
    }
  ];

  return (
    <section className="sub-section opening_wrap" style={{ background: "#FBFBFB", padding: "65px 0" }}>
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
                    Full-time
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
                    {job.desc}
                  </p>
                  <Link 
                    href={job.link}
                    style={{ fontSize: "15px", color: "#097DF5", lineHeight: "24px", fontWeight: 500, marginTop: "auto", display: "inline-block" }}
                    className="hover:underline"
                  >
                    Apply Now
                  </Link>
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
