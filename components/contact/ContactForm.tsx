"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  if (status === "success") {
    return (
      <div className="bg-[#F9F9F9] p-[30px] md:p-[40px] rounded-[15px] text-center shadow-[0_0_15px_rgba(0,0,0,0.05)] w-full max-w-[600px] ml-auto h-full flex flex-col justify-center items-center">
        <h3 className="text-[24px] font-bold text-[#000000] mb-[10px]">Thank You!</h3>
        <p className="text-[#000000] text-[14px] mb-[20px]">Your message has been received.</p>
        <button onClick={() => setStatus("idle")} className="text-[#097DF5] hover:underline">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#F9F9F9] p-[30px] md:p-[40px] rounded-[15px] shadow-[0_0_15px_rgba(0,0,0,0.05)] relative font-sans w-full max-w-[600px] ml-auto">
      <div className="text-[10px] text-[#000000] font-bold text-right mb-[20px]">
        <span className="text-[#D32F2F]">*</span> Required
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-[20px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
          <div className="space-y-[8px]">
            <label className="text-[#000000] font-normal text-[11px]">Full Name<span className="text-[#D32F2F]">*</span></label>
            <input required type="text" className="w-full bg-white h-[45px] px-[15px] border border-transparent focus:outline-none focus:border-[#097DF5] transition-all font-sans text-[13px]" />
          </div>
          <div className="space-y-[8px]">
            <label className="text-[#000000] font-normal text-[11px]">Organisation Name<span className="text-[#D32F2F]">*</span></label>
            <input required type="text" className="w-full bg-white h-[45px] px-[15px] border border-transparent focus:outline-none focus:border-[#097DF5] transition-all font-sans text-[13px]" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
          <div className="space-y-[8px]">
            <label className="text-[#000000] font-normal text-[11px]">Contact Number<span className="text-[#D32F2F]">*</span></label>
            <input required type="tel" className="w-full bg-white h-[45px] px-[15px] border border-transparent focus:outline-none focus:border-[#097DF5] transition-all font-sans text-[13px]" />
          </div>
          <div className="space-y-[8px]">
            <label className="text-[#000000] font-normal text-[11px]">Email ID<span className="text-[#D32F2F]">*</span></label>
            <input required type="email" className="w-full bg-white h-[45px] px-[15px] border border-transparent focus:outline-none focus:border-[#097DF5] transition-all font-sans text-[13px]" />
          </div>
        </div>

        <div className="space-y-[8px]">
          <label className="text-[#000000] font-normal text-[11px]">Message<span className="text-[#D32F2F]">*</span></label>
          <textarea required rows={4} className="w-full bg-white px-[15px] py-[15px] border border-transparent focus:outline-none focus:border-[#097DF5] transition-all resize-none font-sans text-[13px]"></textarea>
        </div>

        <div className="flex items-center gap-[10px] pt-[5px]">
          <input required type="checkbox" id="privacy" className="w-[14px] h-[14px] accent-[#097DF5]" />
          <label htmlFor="privacy" className="text-[#000000] font-normal text-[10px] cursor-pointer select-none">
            By checking this box, you agree to the Privacy Policy
          </label>
        </div>

        <div className="pt-[10px]">
          <button 
            type="submit" 
            disabled={status === "submitting"}
            className="bg-[#097DF5] hover:bg-[#033361] text-white font-medium text-[13px] px-[30px] h-[35px] rounded-[20px] transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-sm hover:shadow-md cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
            style={{ cursor: status === "submitting" ? "not-allowed" : "pointer" }}
          >
            {status === "submitting" ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
