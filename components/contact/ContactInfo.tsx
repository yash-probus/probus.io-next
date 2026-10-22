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

export function ContactMap() {
  return (
    <section className="relative w-full h-[400px] md:h-[450px] overflow-hidden">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14013.3328221835!2d77.2825166!3d28.525774!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce14d8c6dab57%3A0xd2006a309eda09c2!2sProbus%20Smart%20Things%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen={false} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Probus Location"
      ></iframe>
      
      {/* Floating Address Card overlay */}
      <div className="absolute top-1/2 -translate-y-1/2 left-[15px] md:left-[10%] lg:left-[calc(50%-550px)] bg-white rounded-[10px] shadow-[0_0_15px_rgba(0,0,0,0.1)] w-[280px] z-10 flex flex-col overflow-hidden">
        <div className="w-full h-[110px] relative">
          <Image src="/images/uploads/2025/06/addressimg.png" alt="Probus Smart Things" fill className="object-cover" />
        </div>
        <div className="p-[20px_25px]">
          <h4 className="text-[14px] font-bold text-[#000000] mb-[5px] font-sans">Probus Smart Things Pvt. Ltd.</h4>
          <p className="text-[#000000] font-normal text-[10px] leading-[16px] mb-[15px] font-sans pr-[10px]">
            63, 3rd Floor DSIDC Complex, Okhla I, New Delhi, Delhi 110020
          </p>
          <a href="https://maps.google.com/?q=Probus+Smart+Things+Pvt.+Ltd." target="_blank" rel="noopener noreferrer" className="text-[#097DF5] font-normal text-[11px] hover:underline font-sans">
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
