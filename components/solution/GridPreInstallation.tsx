"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function GridPreInstallation() {
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const items = [
    {
      icon: "/images/grid_pre_icon01.svg",
      title: "Quantity and type of DTs",
    },
    {
      icon: "/images/grid_pre_icon02.svg",
      title: "Hierarchy of the area",
    },
    {
      icon: "/images/grid_pre_icon03.svg",
      title: "Type of meter manufacturer",
    },
    {
      icon: "/images/grid_pre_icon04.svg",
      title: "No. of Ring Main Units",
    },
    {
      icon: "/images/grid_pre_icon05.svg",
      title: "No. of LT feeder and LTACB",
    },
    {
      icon: "/images/grid_pre_icon06.svg",
      title: "Type of users",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setShowModal(false);
      setSubmitted(false);
    }, 2000);
  };

  return (
    <>
      {/* Close button that navigates back */}
      <div className="fixed top-[100px] md:top-[115px] right-[25px] md:right-[80px] z-40">
        <Link
          href="/smart-grid-integration#leveragewrap"
          className="inline-block hover:opacity-80 transition-opacity"
          aria-label="Close"
        >
          <Image
            src="/images/closepop.png"
            alt="Close"
            width={30}
            height={30}
            className="w-[28px] h-[28px] md:w-[30px] md:h-[30px]"
          />
        </Link>
      </div>

      <section className="bg-[#182026] text-white pt-[110px] pb-[70px] min-h-[calc(100vh-80px)]">
        <div className="container mx-auto px-4 md:px-[75px] max-w-[1800px]">
          {/* Top Heading */}
          <div className="text-center mb-[40px] relative">
            <div className="flex flex-col items-center mb-3">
              <div className="w-[1px] h-[60px] bg-white relative">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[5px] h-[5px] bg-white rounded-full"></div>
              </div>
              <h6 className="text-white text-[14px] leading-[19px] font-sans font-normal uppercase tracking-wider mt-3">
                Step 1: Pre-Installation
              </h6>
            </div>
            <h1 className="text-white text-[32px] md:text-[44px] font-bold leading-[1.2] font-sans m-0">
              Master Management
            </h1>
            <p className="mt-[25px] md:mt-[35px] text-white text-[16px] leading-[26px] font-normal font-sans max-w-[700px] mx-auto">
              Get started with Probus by filling the following details in the{" "}
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="text-[#00A7FF] underline hover:no-underline font-medium cursor-pointer bg-transparent border-0 p-0 inline"
              >
                On-boarding Form
              </button>
            </p>
          </div>

          {/* Grid Layout */}
          <div className="flex flex-wrap lg:flex-nowrap gap-[15px] items-stretch justify-between max-w-[1400px] mx-auto">
            {/* 6 Cards */}
            <div className="w-full lg:w-[60%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[10px] order-2 lg:order-1">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#262F37] p-[24px] md:p-[28px] rounded-[10px] flex flex-col justify-start"
                >
                  <div className="mb-[20px]">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={42}
                      height={42}
                      className="w-[42px] h-[42px]"
                    />
                  </div>
                  <p className="text-white text-[15px] font-normal font-sans leading-[22px] m-0 pr-[10%]">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Side Image */}
            <div className="w-full lg:w-[40%] rounded-[10px] overflow-hidden order-1 lg:order-2 flex items-center justify-center">
              <Image
                src="/images/grid-pre-right.png"
                alt="Master Management"
                width={560}
                height={400}
                className="w-full h-full object-cover rounded-[10px]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* On-boarding Form Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[999] bg-black/60 flex items-center justify-center p-4">
          <div className="relative bg-[#cfcfcf] text-[#232330] p-6 md:p-7 rounded-[4px] max-w-[500px] w-full shadow-2xl font-sans">
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="absolute -top-[10px] -right-[10px] w-[25px] h-[25px] cursor-pointer hover:opacity-80 bg-transparent border-0 p-0"
              aria-label="Close form"
            >
              <Image
                src="/images/closepop.png"
                alt="Close"
                width={25}
                height={25}
                className="w-full h-full"
              />
            </button>

            <h4 className="text-[18px] md:text-[20px] font-bold uppercase mb-[15px] text-[#232330]">
              On-boarding Form
            </h4>

            {submitted ? (
              <div className="py-8 text-center text-green-700 font-medium">
                Thank you! Your information has been submitted successfully.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-[10px]">
                <div>
                  <label className="block text-[13px] font-semibold mb-[4px] text-[#232330]">
                    Full name
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={400}
                    className="w-full h-[34px] px-3 bg-white border border-gray-300 rounded-[3px] text-[14px] text-black focus:outline-none focus:border-[#00A7FF]"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-semibold mb-[4px] text-[#232330]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    maxLength={400}
                    className="w-full h-[34px] px-3 bg-white border border-gray-300 rounded-[3px] text-[14px] text-black focus:outline-none focus:border-[#00A7FF]"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-semibold mb-[4px] text-[#232330]">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    minLength={9}
                    maxLength={10}
                    className="w-full h-[34px] px-3 bg-white border border-gray-300 rounded-[3px] text-[14px] text-black focus:outline-none focus:border-[#00A7FF]"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-semibold mb-[4px] text-[#232330]">
                    Lat Long of households/assets
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={400}
                    className="w-full h-[34px] px-3 bg-white border border-gray-300 rounded-[3px] text-[14px] text-black focus:outline-none focus:border-[#00A7FF]"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-semibold mb-[4px] text-[#232330]">
                    Average distance from one house/assets to another
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={400}
                    className="w-full h-[34px] px-3 bg-white border border-gray-300 rounded-[3px] text-[14px] text-black focus:outline-none focus:border-[#00A7FF]"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-semibold mb-[4px] text-[#232330]">
                    Average height of household/asset
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={400}
                    className="w-full h-[34px] px-3 bg-white border border-gray-300 rounded-[3px] text-[14px] text-black focus:outline-none focus:border-[#00A7FF]"
                  />
                </div>
                <div className="pt-2">
                  <input
                    type="submit"
                    value="Submit"
                    className="bg-[#033361] hover:bg-[#0795F8] text-white font-medium px-8 py-2 rounded-[3px] text-[14px] transition-colors duration-200 cursor-pointer"
                  />
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
