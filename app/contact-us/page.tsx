import { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo, { ContactMap } from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us - Probus",
  description: "Contact Probus for your smart grid IoT solutions and utility infrastructure inquiries.",
  alternates: {
    canonical: "/contact-us",
  },
  openGraph: {
    title: "Contact Us - Probus",
    description: "Contact Probus for your smart grid IoT solutions and utility infrastructure inquiries.",
    url: "/contact-us",
    siteName: "Probus",
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function ContactUsPage() {
  return (
    <>
      <ContactHero />
      
      <section className="py-[60px] md:py-[80px] bg-white relative z-10 bg-no-repeat bg-left-top" style={{ backgroundImage: "url('/wp-content/themes/probus/assets/images/bg-contactSec.png')" }}>
        <div className="container mx-auto px-4 md:px-[15px] max-w-[1140px]">
          <div className="flex flex-wrap -mx-[15px] items-start">
            <div className="w-full lg:w-5/12 px-[15px] mb-[40px] lg:mb-0">
              <ContactInfo />
            </div>
            <div className="w-full lg:w-7/12 px-[15px]">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <ContactMap />
    </>
  );
}
