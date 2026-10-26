"use client";

import { useState } from "react";

export default function BesMeetingForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <section id="meeting-form" className="py-24 bg-brand-dark/5 scroll-mt-20">
      <div className="max-w-[1140px] mx-auto px-4 md:px-[15px]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Book a Discovery Meeting</h2>
            <p className="text-lg text-gray-600">Schedule a 1-on-1 session with our grid modernization experts at BES 2026.</p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-gray-100 relative">
            {status === "success" ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-brand-teal text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-3xl font-medium text-brand-dark mb-3">Request Received!</h3>
                <p className="text-gray-600 text-lg mb-8">We will contact you shortly to confirm your meeting slot for the summit.</p>
                <button onClick={() => setStatus("idle")} className="text-brand-orange font-medium hover:underline">
                  Schedule another meeting
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-brand-dark">Full Name *</label>
                    <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-brand-dark">Designation *</label>
                    <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-brand-dark">DISCOM / Utility Name *</label>
                    <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-brand-dark">Preferred Date *</label>
                    <select required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-all appearance-none cursor-pointer">
                      <option value="">Select a day</option>
                      <option value="19-mar">19 March 2026</option>
                      <option value="20-mar">20 March 2026</option>
                      <option value="21-mar">21 March 2026</option>
                      <option value="22-mar">22 March 2026</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-brand-dark">Email ID *</label>
                    <input required type="email" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-brand-dark">Phone Number *</label>
                    <input required type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-all" />
                  </div>
                </div>

                <div className="pt-4 flex justify-center">
                  <button 
                    type="submit" 
                    disabled={status === "submitting"}
                    className="w-full md:w-auto bg-brand-orange hover:bg-brand-teal text-white font-medium px-16 py-4 rounded-full transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-wider text-sm"
                    style={{ cursor: status === "submitting" ? "not-allowed" : "pointer" }}
                  >
                    {status === "submitting" ? "Processing..." : "Confirm Meeting"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
