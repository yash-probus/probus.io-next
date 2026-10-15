import {
  SolutionDetailHero,
  SmartGridContentTop,
  SmartGridContentBottom,
  LeverageIoT,
  KeyProjects,
} from "@/components/solution";
import { PartnersShowcase, TestimonialSection } from "@/components/common";

export const metadata = {
  title: "Probus Smart Grid Technology | Scalable Projects & IoT Integration",
  description: "Transform energy networks with Probus smart grid technology. Trusted partner for scalable smart grid projects and IoT-driven integration.",
};

export default function SmartGridIntegrationPage() {
  const leverageSteps = [
    { title: "PRE-INSTALLATION", num: "1", href: "/pre-installation" },
    { title: "PROBUS HARDWARE", num: "2", href: "/grid-probus-hardware" },
    { title: "COMMISSIONING", num: "3", href: "/commissioning" },
    { title: "POST COMMISSIONING", num: "4", href: "/post-commissioning" },
  ];

  return (
    <>
      <SolutionDetailHero 
        title={
          <>
            Seamless Smart Grid Integration for <br className="hidden md:block" />
            sustainable energy solutions
          </>
        }
        bgImage="/wp-content/uploads/2025/06/smart-grid.jpg"
        bgImageMobile="/wp-content/uploads/2025/06/smart-grid-m.jpg"
        videoSrc="https://v.ftcdn.net/07/74/08/67/700_F_774086711_mHwHpGiqdj3dYcSuUMSv3JrpHKikB7eW_ST.mp4"
        breadcrumb="Smart Grid Integration"
      />
      <SmartGridContentTop />
      <LeverageIoT steps={leverageSteps} />
      <SmartGridContentBottom />
      <KeyProjects />
      <PartnersShowcase />
      <TestimonialSection />
    </>
  );
}
