import PageHero from "@/components/common/PageHero";

export default function ContactHero() {
  return (
    <PageHero
      title="Contact us"
      titleAs="h2"
      titleClassName="text-[32px] md:text-[50px] leading-[40px] md:leading-[56px] font-bold drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)] mt-[40px]"
      bgImage="/images/uploads/2025/06/bg-contact.jpg"
      height="h-[300px] md:h-[400px]"
      overlayClass="bg-black/30"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Contact Us" },
      ]}
    />
  );
}
