import { Job } from "@/types/job";

interface JobContentProps {
  job: Job;
}

export default function JobContent({ job }: JobContentProps) {
  return (
    <div className="over-content" style={{ color: "#333", fontSize: "15px", lineHeight: "1.7" }}>
      {/* Intro text */}
      <div style={{ marginBottom: "28px" }}>
        <p style={{ margin: "0 0 12px 0", fontSize: "16px", color: "#1F2937" }}>
          Do you want to be a part of enabling the next wave of innovation in communication protocols, building sensors and cutting-edge hardware?
        </p>
        <p style={{ margin: "0", fontSize: "16px", color: "#1F2937" }}>
          Does working with IoT devices, sensors, wearables, controllers which can seamlessly merge the digital world with the physical world around us interest you?
        </p>
      </div>

      {/* Who we are */}
      <div style={{ marginBottom: "30px" }}>
        <h4 style={{ fontSize: "19px", fontWeight: 700, color: "#033361", margin: "0 0 14px 0" }}>
          Who we are?
        </h4>
        <ul style={{ paddingLeft: "20px", margin: 0 }}>
          {job.whoWeAre.map((item, idx) => (
            <li key={idx} style={{ marginBottom: "10px", color: "#4B5563" }}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* We - */}
      <div style={{ marginBottom: "30px" }}>
        <h4 style={{ fontSize: "19px", fontWeight: 700, color: "#033361", margin: "0 0 14px 0" }}>
          We –
        </h4>
        <ul style={{ paddingLeft: "20px", margin: 0 }}>
          {job.we.map((item, idx) => (
            <li key={idx} style={{ marginBottom: "10px", color: "#4B5563" }}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* You - */}
      <div style={{ marginBottom: "30px" }}>
        <h4 style={{ fontSize: "19px", fontWeight: 700, color: "#033361", margin: "0 0 14px 0" }}>
          You –
        </h4>
        <ul style={{ paddingLeft: "20px", margin: 0 }}>
          {job.you.map((item, idx) => (
            <li key={idx} style={{ marginBottom: "10px", color: "#4B5563" }}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Culture */}
      <div style={{ marginBottom: "30px" }}>
        <h4 style={{ fontSize: "19px", fontWeight: 700, color: "#033361", margin: "0 0 14px 0" }}>
          Our Culture –
        </h4>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {job.culture.map((c, idx) => (
            <p key={idx} style={{ margin: 0, color: "#4B5563" }}>
              <strong style={{ color: "#111827" }}>{c.title} – </strong>
              {c.description}
            </p>
          ))}
        </div>
      </div>

      {/* Responsibilities */}
      {job.responsibilities && job.responsibilities.length > 0 && (
        <div style={{ marginBottom: "30px" }}>
          <h4 style={{ fontSize: "19px", fontWeight: 700, color: "#033361", margin: "0 0 14px 0" }}>
            During your time at Probus Smart Things,
          </h4>
          <ul style={{ paddingLeft: "20px", margin: 0 }}>
            {job.responsibilities.map((item, idx) => (
              <li key={idx} style={{ marginBottom: "10px", color: "#4B5563" }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Qualifications / Skills */}
      {job.qualifications && job.qualifications.length > 0 && (
        <div style={{ marginBottom: "30px" }}>
          <h4 style={{ fontSize: "19px", fontWeight: 700, color: "#033361", margin: "0 0 14px 0" }}>
            {job.qualificationsTitle || "Qualifications Required-"}
          </h4>
          <ul style={{ paddingLeft: "20px", margin: 0 }}>
            {job.qualifications.map((item, idx) => (
              <li key={idx} style={{ marginBottom: "10px", color: "#4B5563" }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
