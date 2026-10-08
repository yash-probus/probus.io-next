import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - Probus",
  description: "Review our privacy policy to understand our data practices.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="relative w-full bg-[#033361] h-[300px] flex items-center justify-center text-center">
         <div className="absolute inset-0 bg-black/40 z-[1]" />
         <div className="relative z-10 text-white mt-8">
            <h1 className="text-[36px] font-bold font-sans">Privacy Policy</h1>
         </div>
         {/* Breadcrumbs */}
         <div className="absolute bottom-0 left-0 w-full py-3 z-10" style={{ background: "rgba(0, 0, 0, 0.4)" }}>
           <div className="container mx-auto px-4 md:px-[15px] max-w-[1140px] flex items-center justify-center md:justify-start text-white text-[14px] font-sans">
             <Link href="/" className="hover:text-[#0795F8] transition-colors">Home</Link>
             <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="12px" width="12px" xmlns="http://www.w3.org/2000/svg" className="mx-2"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
             <span>Privacy Policy</span>
           </div>
         </div>
      </section>

      <section className="py-12 bg-white">
        <div className="prose prose-lg max-w-[1140px] mx-auto px-4 text-gray-700 leading-relaxed font-sans">
          <h2>1. Introduction</h2>
          <p>
            Welcome to Probus Smart Things. As part of our commitment to your privacy, we have established this Privacy Policy. We value the trust you place in us and respect your privacy in handling personal identification information relating to you and your use of our website, probus.io, and our services. This Privacy Policy applies to all of the products, services, and websites offered by Probus Smart Things Pvt. Ltd.
          </p>

          <h2>2. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <p>
            Information you provide – When you sign up for a Probus Smart Things account, we may ask you for personal information such as your name, email address, billing address, and product preferences. Log information – When you access Probus Smart Things services, our servers automatically record information that your browser sends whenever you visit a website. User communications – When you send emails or other communications to Probus Smart Things, we may retain those communications to process your inquiries, respond to your requests, and improve our services.
          </p>

          <h2>3. How We Use Your Information</h2>
          <p>
            To provide products and services to you.<br />
            To personalize your experience with us.<br />
            To improve customer service.<br />
            To process transactions.<br />
            To administer a contest, promotion, or survey.<br />
            To send periodic emails related to your order or other products and services.
          </p>

          <h2>4. Sharing of Your Information</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
          </p>

          <h2>5. Your Consent</h2>
          <p>By using our site and services, you consent to our Privacy Policy.</p>

          <h2>6. Changes to Our Privacy Policy</h2>
          <p>
            Probus Smart Things reserves the right to update this privacy policy at any time. We will notify you about significant changes in the way we treat personal information by sending a notice to the primary email address specified in your Probus Smart Things account or by placing a prominent notice on our site.
          </p>

          <h2>7. Contacting Us</h2>
          <p>
            If there are any questions regarding this privacy policy, you may contact us using the information below.
          </p>
          <p>
            Probus Smart Things Pvt. Ltd.<br />
            63, 3rd floor, DSIDC Complex, Okhla Phase -1, New Delhi- 110020<br />
            info@probus.io<br />
            011 4103 3012
          </p>

          <h2>8. Grievance Officer</h2>
          <p>
            In accordance with Information Technology Act 2000 and rules made there under, the name and contact details of the Grievance Officer are provided below:
          </p>
          <p>
            Probus Smart Things Pvt. Ltd.<br />
            4th Floor, No. 15A, Tradex Tower, Noida Sector-125, Uttar Pradesh, INDIA<br />
            info@probus.io<br />
            011 4103 3012
          </p>
        </div>
      </section>
    </>
  );
}
