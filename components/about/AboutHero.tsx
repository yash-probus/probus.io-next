import PageHero from "@/components/common/PageHero";

export default function AboutHero() {
  return (
    <PageHero
      title="Crafting a Sustainable Legacy"
      titleAs="h2"
      titleClassName="text-[28px] md:text-[50px] leading-[44px] md:leading-[56px] font-medium"
      bgImage="/wp-content/uploads/2025/06/aboutbanner.jpg"
      bgImageMobile="/wp-content/uploads/2025/06/aboutbannerm.jpg"
      height="h-[400px] md:h-[60vh] min-h-[350px]"
      overlayClass="bg-black/20"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "About Us" },
      ]}
    />
  );
}
