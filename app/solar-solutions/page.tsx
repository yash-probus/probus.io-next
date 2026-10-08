import SolutionDetailHero from "@/components/solution/SolutionDetailHero";
import LeverageIoT from "@/components/solution/LeverageIoT";
import KeyProjects from "@/components/solution/KeyProjects";
import HomePartners from "@/components/home/HomePartners";
import HomeTestimonial from "@/components/home/HomeTestimonial";

export const metadata = {
  title: "Probus Solar Energy Solutions with Monitoring Analytics and IoT",
  description: "Discover Probus solar energy solutions with advanced monitoring, and IoT technology to ensure reliable, efficient solar power management.",
};

export default function SolarSolutionsPage() {
  const leverageSteps = [
    { title: "PRE-INSTALLATION", num: "1", href: "/pre-installation" },
    { title: "PROBUS HARDWARE", num: "2", href: "/probus-hardware" },
    { title: "COMMISSIONING", num: "3", href: "/commissioning" },
    { title: "MAINTENANCE", num: "4", href: "/maintenance" },
  ];

  return (
    <>
      <SolutionDetailHero 
        title="Wireless Solar String Monitoring"
        bgImage="/wp-content/uploads/2025/06/solar-meter.jpg"
        bgImageMobile="/wp-content/uploads/2025/06/solar-meter-m.jpg"
        videoSrc="https://v.ftcdn.net/07/74/08/67/700_F_774086711_mHwHpGiqdj3dYcSuUMSv3JrpHKikB7eW_ST.mp4"
        breadcrumb="Solar Solutions"
      />
      <LeverageIoT steps={leverageSteps} />
      <KeyProjects />
      <HomePartners />
      <HomeTestimonial />
    </>
  );
}
