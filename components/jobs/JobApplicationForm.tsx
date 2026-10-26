"use client";

import { useState } from "react";
import Link from "next/link";

interface JobApplicationFormProps {
  jobTitle: string;
  jobId: string;
}

export default function JobApplicationForm({ jobTitle, jobId }: JobApplicationFormProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    company: "",
    currentTitle: "",
    startMonth: "",
    startYear: "",
    endMonth: "",
    endYear: "",
    isCurrent: false,
    agreePolicy: false,
  });

  const [fileName, setFileName] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 5 * 1024 * 1024) {
        setErrorMsg("File size exceeds 5MB limit.");
        return;
      }
      setErrorMsg("");
      setFileName(file.name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.phone || !formData.email) {
      setErrorMsg("Please fill out all required fields.");
      return;
    }
    if (!formData.agreePolicy) {
      setErrorMsg("Please agree to the Privacy Policy to proceed.");
      return;
    }

    setSubmitting(true);
    setErrorMsg("");

    // Simulate clean form submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div
        className="formgrp"
        style={{
          background: "#fff",
          borderRadius: "12px",
          padding: "40px 30px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          border: "1px solid #EAEAEA",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            background: "#E8F8F0",
            color: "#189B54",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "32px",
            marginBottom: "20px",
          }}
        >
          ✓
        </div>
        <h4 style={{ fontSize: "22px", color: "#111", fontWeight: 700, marginBottom: "10px" }}>
          Application Received!
        </h4>
        <p style={{ color: "#666", fontSize: "15px", lineHeight: "1.6", marginBottom: "20px" }}>
          Thank you for applying for the <strong>{jobTitle}</strong> (Job ID: {jobId}) position. Our talent acquisition team will review your application and get in touch with you shortly.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFileName("");
          }}
          style={{
            background: "#033361",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            padding: "10px 24px",
            fontSize: "14px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Submit Another Response
        </button>
      </div>
    );
  }

  return (
    <div
      id="apply-form"
      className="formgrp"
      style={{
        background: "#fff",
        borderRadius: "12px",
        padding: "36px 30px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
        border: "1px solid #EAEAEA",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
        <h4 style={{ margin: 0, fontSize: "20px", color: "#111", fontWeight: 700 }}>
          Fill out the form below
        </h4>
        <span style={{ fontSize: "13px", color: "#888" }}>
          <span style={{ color: "#e53e3e", fontWeight: 700 }}>*</span> Required
        </span>
      </div>

      {errorMsg && (
        <div
          style={{
            background: "#FFF5F5",
            color: "#C53030",
            border: "1px solid #FEB2B2",
            borderRadius: "6px",
            padding: "10px 14px",
            fontSize: "14px",
            marginBottom: "20px",
          }}
        >
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Name Fields */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
          <div>
            <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#333", marginBottom: "6px" }}>
              First Name <span style={{ color: "#e53e3e" }}>*</span>
            </label>
            <input
              type="text"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              style={{
                width: "100%",
                padding: "10px 14px",
                border: "1px solid #D1D5DB",
                borderRadius: "6px",
                fontSize: "14px",
                boxSizing: "border-box",
                outline: "none",
              }}
            />
          </div>
          <div>
            <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#333", marginBottom: "6px" }}>
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              style={{
                width: "100%",
                padding: "10px 14px",
                border: "1px solid #D1D5DB",
                borderRadius: "6px",
                fontSize: "14px",
                boxSizing: "border-box",
                outline: "none",
              }}
            />
          </div>
        </div>

        {/* Contact Fields */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
          <div>
            <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#333", marginBottom: "6px" }}>
              Contact Number <span style={{ color: "#e53e3e" }}>*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 9876543210"
              style={{
                width: "100%",
                padding: "10px 14px",
                border: "1px solid #D1D5DB",
                borderRadius: "6px",
                fontSize: "14px",
                boxSizing: "border-box",
                outline: "none",
              }}
            />
          </div>
          <div>
            <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#333", marginBottom: "6px" }}>
              Email ID <span style={{ color: "#e53e3e" }}>*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              style={{
                width: "100%",
                padding: "10px 14px",
                border: "1px solid #D1D5DB",
                borderRadius: "6px",
                fontSize: "14px",
                boxSizing: "border-box",
                outline: "none",
              }}
            />
          </div>
        </div>

        {/* Resume / CV Upload */}
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#333", marginBottom: "6px" }}>
            Resume / CV <span style={{ color: "#e53e3e" }}>*</span>
          </label>
          <div
            style={{
              border: "2px dashed #CBD5E1",
              borderRadius: "8px",
              padding: "16px",
              textAlign: "center",
              background: "#F8FAFC",
              cursor: "pointer",
              position: "relative",
            }}
          >
            <input
              type="file"
              id="resume-file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                opacity: 0,
                cursor: "pointer",
              }}
            />
            <div style={{ fontSize: "14px", color: fileName ? "#033361" : "#64748B", fontWeight: fileName ? 600 : 400 }}>
              {fileName ? `Attached: ${fileName}` : "Click or drag to attach Resume (.pdf, .doc, .docx)"}
            </div>
            <div style={{ fontSize: "12px", color: "#94A3B8", marginTop: "4px" }}>
              Max size 5 MB
            </div>
          </div>
        </div>

        {/* Experience / Employment Details */}
        <div style={{ background: "#F9FAFB", padding: "16px", borderRadius: "8px", marginBottom: "20px" }}>
          <h5 style={{ fontSize: "14px", fontWeight: 700, color: "#1F2937", margin: "0 0 12px 0" }}>
            Current / Latest Employment
          </h5>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "12px" }}>
            <div>
              <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "#4B5563", marginBottom: "4px" }}>
                Company Name
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Current Company"
                style={{
                  width: "100%",
                  padding: "8px 12px",
                  border: "1px solid #D1D5DB",
                  borderRadius: "6px",
                  fontSize: "13px",
                  boxSizing: "border-box",
                }}
              />
            </div>
            <div>
              <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "#4B5563", marginBottom: "4px" }}>
                Designation / Title
              </label>
              <input
                type="text"
                name="currentTitle"
                value={formData.currentTitle}
                onChange={handleChange}
                placeholder="Job Title"
                style={{
                  width: "100%",
                  padding: "8px 12px",
                  border: "1px solid #D1D5DB",
                  borderRadius: "6px",
                  fontSize: "13px",
                  boxSizing: "border-box",
                }}
              />
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "8px" }}>
            <input
              type="checkbox"
              id="isCurrent"
              name="isCurrent"
              checked={formData.isCurrent}
              onChange={handleChange}
              style={{ cursor: "pointer" }}
            />
            <label htmlFor="isCurrent" style={{ fontSize: "13px", color: "#374151", cursor: "pointer" }}>
              I currently work in this role
            </label>
          </div>
        </div>

        {/* Privacy Agreement */}
        <div style={{ marginBottom: "24px" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
            <input
              type="checkbox"
              id="agreePolicy"
              name="agreePolicy"
              checked={formData.agreePolicy}
              onChange={handleChange}
              style={{ marginTop: "4px", cursor: "pointer" }}
            />
            <label htmlFor="agreePolicy" style={{ fontSize: "13px", color: "#4B5563", lineHeight: "1.5", cursor: "pointer" }}>
              By checking this box, you agree to our{" "}
              <Link href="/privacy-policy" style={{ color: "#0066cc", textDecoration: "underline" }} target="_blank">
                Privacy Policy
              </Link>{" "}
              and consent to processing of your personal data for recruitment.
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={submitting}
          style={{
            width: "100%",
            background: "#033361",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            padding: "14px",
            fontSize: "15px",
            fontWeight: 700,
            cursor: submitting ? "not-allowed" : "pointer",
            transition: "all 0.2s ease",
            opacity: submitting ? 0.7 : 1,
          }}
        >
          {submitting ? "Submitting Application..." : "Submit Application"}
        </button>
      </form>
    </div>
  );
}
