import SolutionDetailHero from "@/components/solution/SolutionDetailHero";
import SmartMeterContent from "@/components/solution/SmartMeterContent";
import LeverageIoT from "@/components/solution/LeverageIoT";
import KeyProjects from "@/components/solution/KeyProjects";
import HomePartners from "@/components/home/HomePartners";
import HomeTestimonial from "@/components/home/HomeTestimonial";

export const metadata = {
  title: "Smart metering solutions technology | Metering & Connectivity",
  description: "Smart metering solutions technology that delivers data, secure connectivity and remote management -trusted by utilities and integrators.",
};

export default function SmartMeterSolutionsPage() {
  const leverageSteps = [
    { title: "PRE-INSTALLATION", num: "1", href: "/pre-installation" },
    { title: "PROBUS HARDWARE", num: "2", href: "/grid-probus-hardware" },
    { title: "COMMISSIONING", num: "3", href: "/commissioning" },
    { title: "POST COMMISSIONING", num: "4", href: "/post-commissioning" },
  ];

  return (
    <>
      <SolutionDetailHero 
        title="Smart Meter Solutions"
        bgImage="/wp-content/uploads/2025/10/iot-1.jpg"
        bgImageMobile="/wp-content/uploads/2025/10/smart-grid-m-2.png"
        videoSrc="https://v.ftcdn.net/07/74/08/67/700_F_774086711_mHwHpGiqdj3dYcSuUMSv3JrpHKikB7eW_ST.mp4"
        breadcrumb="Smart Meter Solutions"
      />
      <SmartMeterContent />
      <LeverageIoT steps={leverageSteps} />
      <KeyProjects />
      <HomePartners />
      <HomeTestimonial />
    </>
  );
}
