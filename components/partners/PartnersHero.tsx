import PageHero from "@/components/common/PageHero";

export default function PartnersHero() {
  return (
    <PageHero
      title="Driving change through partnerships"
      titleAs="h2"
      titleClassName="text-[28px] md:text-[50px] leading-[32px] md:leading-[56px] font-bold drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)] mt-[40px]"
      bgImage="/images/uploads/2025/06/bg-partners1.jpg"
      height="h-[300px] md:h-[400px]"
      overlayClass="bg-black/30"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Partners" },
      ]}
    />
  );
}
