import TestimonialSection from "@/components/common/TestimonialSection";

export default function CareerTestimonial() {
  return (
    <TestimonialSection
      showBadge={true}
      badge="EMPLOYEE TESTIMONIALS"
      title={
        <>
          Real Stories, Real <br />
          Satisfaction
        </>
      }
      mainImage="/wp-content/uploads/2025/06/testmain1.jpg"
      mainImageAlt="Real Stories, Real Satisfaction"
      authorName="Michael Sagayaraj"
      authorRole="Designation - Principal Hardware Design Engineer."
      authorImage="/wp-content/uploads/2025/06/test_member1-1.png"
      quote="Working at Probus has been an incredible experience. The team is collaborative, supportive, and dedicated to delivering high-quality IoT solutions for our clients. and I look forward to continuing to be a part of this dynamic team."
    />
  );
}
