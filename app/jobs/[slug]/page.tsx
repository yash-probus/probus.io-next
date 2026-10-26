import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getAllJobs, getJobBySlug } from "@/lib/jobs";
import { JobHeader, JobContent, JobApplicationForm } from "@/components/jobs";

export const instant = false;

export async function generateStaticParams() {
  const jobs = getAllJobs();
  return jobs.map((job) => ({
    slug: job.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    return {
      title: "Job Not Found - Probus",
      description: "The requested job opening could not be found.",
    };
  }

  const title = `${job.title} - Probus`;
  const description =
    job.excerpt ||
    `Join Probus Smart Things as ${job.title}. Location: ${job.location}, Experience: ${job.experience}. Apply now!`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://probus.io/jobs/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://probus.io/jobs/${slug}`,
      siteName: "Probus",
      type: "article",
      images: [
        {
          url: "https://probus.io/images/logo.png",
          width: 221,
          height: 63,
          alt: "Probus",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

async function JobDetailContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    notFound();
  }

  // Schema.org JobPosting structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.excerpt,
    identifier: {
      "@type": "PropertyValue",
      name: "Probus Smart Things",
      value: job.jobId,
    },
    datePosted: "2025-06-02",
    employmentType: job.type.toLowerCase().includes("full") ? "FULL_TIME" : "OTHER",
    hiringOrganization: {
      "@type": "Organization",
      name: "Probus Smart Things",
      sameAs: "https://probus.io",
      logo: "https://probus.io/images/logo.png",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: job.location,
        addressCountry: "IN",
      },
    },
  };

  return (
    <main style={{ backgroundColor: "#FBFBFB", minHeight: "100vh" }}>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <JobHeader job={job} />

      {/* Main Content & Form Grid */}
      <section
        className="sub-section jobdetailswrp"
        style={{
          padding: "60px 0 40px 0",
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
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "40px",
              alignItems: "start",
            }}
          >
            {/* Left Column: Job Description */}
            <div style={{ minWidth: 0 }}>
              <JobContent job={job} />
            </div>

            {/* Right Column: Application Form */}
            <div style={{ minWidth: 0, position: "sticky", top: "100px" }}>
              <JobApplicationForm jobTitle={job.title} jobId={job.jobId} />
            </div>
          </div>
        </div>
      </section>

      {/* About Probus Section */}
      <section
        className="sub-section jobdetailswrp jobdetail_about"
        style={{
          background: "#fff",
          borderTop: "1px solid #E5E7EB",
          padding: "50px 0",
          marginTop: "40px",
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
          <div style={{ maxWidth: "680px" }}>
            <h4
              style={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#033361",
                marginBottom: "12px",
              }}
            >
              About Probus
            </h4>
            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.7",
                color: "#4B5563",
                marginBottom: "20px",
              }}
            >
              At Probus, we specialize in delivering innovative energy solutions
              that drive efficiency and sustainability. With our cutting-edge
              hardware and software offerings, we empower businesses to optimize
              their energy consumption, reduce costs, and make a positive
              environmental impact.
            </p>
            <Link
              href="/empowering-the-future-probus-smart-things-journey-in-smart-grid-innovation"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "#0066cc",
                fontWeight: 600,
                fontSize: "15px",
                textDecoration: "none",
              }}
            >
              <span>Know More</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function JobDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense
      fallback={
        <div style={{ minHeight: "100vh", backgroundColor: "#FBFBFB" }} />
      }
    >
      <JobDetailContent params={params} />
    </Suspense>
  );
}
