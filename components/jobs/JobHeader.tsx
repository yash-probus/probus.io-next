import Image from "next/image";
import Link from "next/link";
import { Job } from "@/types/job";

interface JobHeaderProps {
  job: Job;
}

export default function JobHeader({ job }: JobHeaderProps) {
  const jobUrl = `https://probus.io/jobs/${job.slug}`;
  const shareText = encodeURIComponent(
    `Check out this job opening at Probus Smart Things: ${job.title} (Job ID: ${job.jobId})`
  );

  return (
    <section
      className="BannerInner afterheaderspace"
      style={{
        position: "relative",
        background: "#0b1926",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      {/* Background Banner Image */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          opacity: 0.35,
        }}
      >
        <Image
          src="/images/jobdetails_banner.jpg"
          alt="Job Details Banner"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "50px 0 45px 0",
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
            boxSizing: "border-box",
          }}
        >
          {/* Breadcrumbs */}
          <div
            style={{
              fontSize: "13px",
              color: "#94A3B8",
              marginBottom: "24px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Link href="/" style={{ color: "#E2E8F0", textDecoration: "none" }}>
              Home
            </Link>
            <span>&gt;</span>
            <Link href="/career" style={{ color: "#E2E8F0", textDecoration: "none" }}>
              Careers
            </Link>
            <span>&gt;</span>
            <span style={{ color: "#38BDF8" }}>Job Description</span>
          </div>

          {/* Job Title & Share */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "20px",
              marginBottom: "20px",
            }}
          >
            <div>
              <h1
                style={{
                  fontSize: "32px",
                  lineHeight: "42px",
                  fontWeight: 700,
                  color: "#ffffff",
                  margin: "0 0 10px 0",
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                {job.title}
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    background: "rgba(56, 189, 248, 0.15)",
                    color: "#38BDF8",
                    border: "1px solid rgba(56, 189, 248, 0.3)",
                    padding: "4px 12px",
                    borderRadius: "20px",
                  }}
                >
                  Job ID: {job.jobId}
                </span>
              </h1>
            </div>

            {/* Social Share Box */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontSize: "14px", color: "#CBD5E1" }}>Share:</span>
              <a
                href={`https://api.whatsapp.com/send?text=${shareText}%20${encodeURIComponent(jobUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Share on WhatsApp"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: "50%",
                  transition: "background 0.2s",
                }}
              >
                <Image src="/images/whatsapp.png" alt="WhatsApp" width={20} height={20} />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${shareText}&url=${encodeURIComponent(jobUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Share on X (Twitter)"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: "50%",
                  transition: "background 0.2s",
                }}
              >
                <Image src="/images/twitter.png" alt="Twitter" width={20} height={20} />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(jobUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Share on LinkedIn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: "50%",
                  transition: "background 0.2s",
                }}
              >
                <Image src="/images/linkedin.png" alt="LinkedIn" width={20} height={20} />
              </a>
            </div>
          </div>

          {/* Job Meta Info */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "24px",
              fontSize: "15px",
              color: "#E2E8F0",
              borderTop: "1px solid rgba(255,255,255,0.15)",
              paddingTop: "18px",
            }}
          >
            <div>
              <strong style={{ color: "#94A3B8" }}>Location: </strong>
              <span>{job.location}</span>
            </div>
            <div>
              <strong style={{ color: "#94A3B8" }}>Type: </strong>
              <span
                style={{
                  background: "rgba(255,255,255,0.1)",
                  padding: "2px 8px",
                  borderRadius: "4px",
                }}
              >
                {job.type}
              </span>
            </div>
            <div>
              <strong style={{ color: "#94A3B8" }}>Experience: </strong>
              <span>{job.experience}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
