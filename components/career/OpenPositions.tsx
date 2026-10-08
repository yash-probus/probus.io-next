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
    <section className="py-[40px] md:py-[65px] bg-white opening_wrap">
      <div className="container mx-auto px-4 md:px-[15px] max-w-[1140px]">
        <div className="text-center mb-[30px]">
          <h2 className="text-[#000000] text-[28px] md:text-[35px] font-bold leading-tight font-sans">
            We're looking for talented people like you
          </h2>
        </div>

        <div className="flex flex-wrap -mx-[15px] mt-[10px]">
          {jobs.map((job, idx) => (
            <div key={idx} className="w-full md:w-1/2 lg:w-1/4 px-[15px] mb-[30px]">
              <div className="shadow-[0px_0px_6px_#0000001A] rounded-[8px] border-b-[4px] border-b-[#033361] p-[38px_24px] h-full flex flex-col bg-white">
                <h6 className="text-[#5F5F5F] text-[13px] font-normal leading-[28px] mb-0 font-sans">
                  Full-time
                </h6>
                <h3 className="text-[#000000] text-[17px] leading-[24px] font-medium mb-[10px] font-sans h-auto">
                  {job.title}
                </h3>
                <ul className="list-none p-0 m-[15px_0] flex flex-col items-start gap-[12px]">
                  <li className="flex items-center text-[15px] text-[#000000] font-sans font-medium w-full">
                    <Image 
                      src="/wp-content/themes/probus/assets/images/loc-opening-icon.svg" 
                      alt="Location" 
                      width={30} 
                      height={30} 
                      className="mr-[8px] w-[30px] h-auto grayscale opacity-70 shrink-0" 
                    />
                    <span className="truncate">{job.location}</span>
                  </li>
                  <li className="flex items-center text-[15px] text-[#000000] font-sans font-medium w-full">
                    <Image 
                      src="/wp-content/themes/probus/assets/images/exp-opening-icon.svg" 
                      alt="Experience" 
                      width={30} 
                      height={30} 
                      className="mr-[8px] w-[30px] h-auto grayscale opacity-70 shrink-0" 
                    />
                    <span className="truncate">{job.experience}</span>
                  </li>
                </ul>
                <p className="text-[#000000] text-[15px] leading-[23px] font-normal mb-[10px] font-sans line-clamp-3 overflow-hidden text-ellipsis flex-grow">
                  {job.desc}
                </p>
                <Link href={job.link} className="text-[#097DF5] text-[15px] font-medium leading-[24px] hover:underline inline-block mt-auto font-sans">
                  Apply Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
