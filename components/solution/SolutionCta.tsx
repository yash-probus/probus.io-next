import Link from "next/link";

export default function SolutionCta() {
  return (
    <section className="py-24 bg-brand-lightBlue/10 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <h4 className="text-brand-orange font-playball text-3xl mb-4">Take the Next Step</h4>
        <h2 className="text-3xl md:text-5xl font-medium text-brand-dark mb-6 uppercase">
          Empower Your Utility Infrastructure
        </h2>
        <p className="text-xl text-gray-600 font-light mb-10 leading-relaxed max-w-2xl mx-auto">
          Contact our technical team to schedule a live demonstration of Probus solutions tailored to your unique operational needs.
        </p>
        <Link href="/contact-us" className="inline-block bg-brand-dark hover:bg-brand-teal text-white px-10 py-4 rounded-full font-medium text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1">
          Contact Our Experts
        </Link>
      </div>
    </section>
  );
}
