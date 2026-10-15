import PageHero from "@/components/common/PageHero";
import Container from "@/components/common/Container";

export const metadata = {
  title: "Terms and conditions - Probus",
  description: "Review the terms and conditions governing use of Probus’ website, services, user rights, responsibilities, and legal disclaimers.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <PageHero
        title="Terms and Conditions"
        height="h-[300px]"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms and Conditions" },
        ]}
      />

      <section className="py-12 bg-white">
        <Container className="prose prose-lg text-gray-700 leading-relaxed font-sans">
          <p>
            Welcome to www.probus.io. This website is operated by Probus Smart Things Pvt. Ltd. (&quot;Probus&quot;), a company specializing in Enterprise IoT solutions. These Terms and Conditions outline the rules and regulations for the use of Probus Smart Things&apos;s Website, located at www.probus.io.
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you disagree with any part of these terms and conditions, please do not use our website.
          </p>

          <h2>2. Privacy Policy</h2>
          <p>
            Please review our Privacy Policy, which also governs your visit to www.probus.io, to understand our data practices.
          </p>

          <h2>3. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on Probus Smart Things&apos;s website for personal, non-commercial transitory viewing only. Under this license, you may not:
          </p>
          <p>
            Modify or copy the materials;<br />
            Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);<br />
            Attempt to decompile or reverse engineer any software contained on Probus Smart Things&apos;s website;<br />
            Remove any copyright or other proprietary notations from the materials;<br />
            Transfer the materials to another person or &apos;mirror&apos; the materials on any other server.<br />
            This license shall automatically terminate if you violate any of these restrictions and may be terminated by Probus Smart Things at any time.
          </p>

          <h2>4. Disclaimer</h2>
          <p>
            The materials on Probus Smart Things&apos;s website are provided &apos;as is&apos;. Probus Smart Things makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            In no event shall Probus Smart Things or its suppliers be liable for any consequential damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Probus Smart Things&apos;s website, even if Probus Smart Things or a Probus Smart Things authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>

          <h2>6. Accuracy of Materials</h2>
          <p>
            The materials appearing on Probus Smart Things&apos;s website could include technical, typographical, or photographic errors. Probus Smart Things does not warrant that any of the materials on its website are accurate, complete, or current.
          </p>

          <h2>7. Links</h2>
          <p>
            Probus Smart Things has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Probus Smart Things of the site. Use of any such linked website is at the user&apos;s own risk.
          </p>

          <h2>8. Site Terms of Use Modifications</h2>
          <p>
            Probus Smart Things may revise these Terms of Use for its website at any time without notice. By using this website, you are agreeing to be bound by the then-current version of these Terms and Conditions of Use.
          </p>

          <h2>9. Governing Law</h2>
          <p>
            Any claim relating to Probus Smart Things&apos;s website shall be governed by the laws of India without regard to its conflict of law provisions.
          </p>

          <h2>10. Contact Information</h2>
          <p>
            For any questions or concerns regarding these Terms and Conditions, please contact us at:<br />
            Probus Smart Things Pvt. Ltd.<br />
            63, 3rd Floor, DSIDC Complex, Okhla Phase-1, New Delhi- 110020<br />
            Email: contact@probus.io
          </p>

          <h2>11. Complete Agreement</h2>
          <p>
            Unless otherwise specified herein, this agreement constitutes the entire agreement between the user and Probus Smart Things with respect to the Probus Smart Things website and it supersedes all prior or contemporaneous communications and proposals, whether electronic, oral, or written, between the user and Probus Smart Things with respect to the Probus Smart Things website.
          </p>
        </Container>
      </section>
    </>
  );
}
