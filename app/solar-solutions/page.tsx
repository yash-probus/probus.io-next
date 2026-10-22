import {
  SolutionDetailHero,
  LeverageIoT,
  KeyProjects,
} from "@/components/solution";
import { PartnersShowcase, TestimonialSection } from "@/components/common";

export const metadata = {
  title: "Probus Solar Energy Solutions with Monitoring Analytics and IoT",
  description: "Discover Probus solar energy solutions with advanced monitoring, and IoT technology to ensure reliable, efficient solar power management.",
};

export default function SolarSolutionsPage() {
  const leverageSteps = [
    { title: "PRE-INSTALLATION", num: "1", href: "/solar-pre-installation" },
    { title: "PROBUS HARDWARE", num: "2", href: "/solar-probus-hardware" },
    { title: "COMMISSIONING", num: "3", href: "/solar-commissioning" },
    { title: "MAINTENANCE", num: "4", href: "/solar-maintenance" },
  ];

  return (
    <>
      <SolutionDetailHero 
        title="Wireless Solar String Monitoring"
        bgImage="/images/uploads/2025/06/solar-meter.jpg"
        bgImageMobile="/images/uploads/2025/06/solar-meter-m.jpg"
        videoSrc="https://v.ftcdn.net/07/74/08/67/700_F_774086711_mHwHpGiqdj3dYcSuUMSv3JrpHKikB7eW_ST.mp4"
        breadcrumb="Solar Solutions"
      />
      <LeverageIoT steps={leverageSteps} />
      <KeyProjects />
      <PartnersShowcase />
      <TestimonialSection />
    </>
  );
}
