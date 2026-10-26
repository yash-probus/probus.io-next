import Image from "next/image";

export default function ContactInfo() {
  return (
    <div className="w-full">
      <div className="mb-[30px]">
        <h2 className="text-[28px] md:text-[35px] font-bold text-[#000000] font-sans mb-[15px] leading-tight">
          How can we assist you?
        </h2>
        <p className="text-[#000000] font-normal text-[15px] leading-[26px] font-sans">
          Whether you have a question or need support, our experts are just a click away. Get in touch with us using the contact information below or by filling out the contact form.
        </p>
      </div>

      <div className="space-y-[30px] pr-[20px] mt-[40px]">
        <div className="flex items-start gap-[15px]">
          <div className="w-[50px] h-[50px] relative flex-shrink-0 flex items-center justify-center">
            <Image
              src="/images/phone.png"
              alt="Phone"
              width={50}
              height={50}
              className="w-[50px] h-[50px] object-contain"
            />
          </div>
          <div className="pt-1">
            <h4 className="text-[11px] font-normal text-[#000000] font-sans mb-[2px]">Phone</h4>
            <p className="text-[#000000] font-bold text-[14px] md:text-[15px] font-sans">011 4103 3012</p>
          </div>
        </div>

        <div className="flex items-start gap-[15px]">
          <div className="w-[50px] h-[50px] relative flex-shrink-0 flex items-center justify-center">
            <Image
              src="/images/email.png"
              alt="Email"
              width={50}
              height={50}
              className="w-[50px] h-[50px] object-contain"
            />
          </div>
          <div className="pt-1">
            <h4 className="text-[11px] font-normal text-[#000000] font-sans mb-[2px]">Email</h4>
            <p className="text-[#000000] font-bold text-[14px] md:text-[15px] font-sans">info@probus.io</p>
          </div>
        </div>

        <div className="flex items-start gap-[15px]">
          <div className="w-[50px] h-[50px] relative flex-shrink-0 flex items-center justify-center">
            <Image
              src="/images/location.png"
              alt="Innovation Centre"
              width={50}
              height={50}
              className="w-[50px] h-[50px] object-contain"
            />
          </div>
          <div className="pt-1">
            <h4 className="text-[11px] font-normal text-[#000000] font-sans mb-[2px]">Innovation Centre</h4>
            <p className="text-[#000000] font-bold text-[14px] md:text-[15px] font-sans leading-[22px]">
              4th Floor, No. 15A, Tradex Tower, Noida Sector-125, Uttar Pradesh, INDIA
            </p>
          </div>
        </div>

        <div className="flex items-start gap-[15px]">
          <div className="w-[50px] h-[50px] relative flex-shrink-0 flex items-center justify-center">
            <Image
              src="/images/location.png"
              alt="Registered Address"
              width={50}
              height={50}
              className="w-[50px] h-[50px] object-contain"
            />
          </div>
          <div className="pt-1">
            <h4 className="text-[11px] font-normal text-[#000000] font-sans mb-[2px]">Registered Address</h4>
            <p className="text-[#000000] font-bold text-[14px] md:text-[15px] font-sans leading-[22px]">
              63, 3rd floor, DSIDC Complex, Okhla Phase -1, New Delhi- 110020
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
