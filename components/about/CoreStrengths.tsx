import Image from "next/image";
import SectionHeading from "@/components/common/SectionHeading";
import Container from "@/components/common/Container";

export default function CoreStrengths() {
  const values = [
    {
      title: "TECHNICAL PROWESS",
      desc: "Our team has extensive technical knowledge and industry expertise, providing top-notch solutions for clients.",
      image: "/images/uploads/2025/06/value1.png"
    },
    {
      title: "CLIENT-CENTRIC APPROACH",
      desc: "We prioritize client relationships, understand challenges, and deliver measurable results by understanding their needs.",
      image: "/images/uploads/2025/06/value2.png"
    },
    {
      title: "CONTINUOUS LEARNING AND GROWTH",
      desc: "We foster continuous learning and professional growth in team through training, industry conferences, and knowledge-sharing for innovative solutions.",
      image: "/images/uploads/2025/06/value3.png"
    },
    {
      title: "PASSION FOR SUSTAINABILITY",
      desc: "Our team consists of experienced professionals who focus on energy efficiency, sustainability, and delivering tailored solutions.",
      image: "/images/uploads/2025/06/value4.png"
    }
  ];

  return (
    <section className="py-[40px] md:py-[65px] bg-white">
      <Container size="wide">
        <SectionHeading
          badge="Values"
          title="Our collaborative approach to helping our clients"
          align="center"
          titleClassName="max-w-3xl mx-auto"
        />

        <div className="flex flex-wrap -mx-4 mt-[40px]">
          {values.map((val, idx) => (
            <div key={idx} className="w-full md:w-1/2 px-4 mb-[50px]">
              <div className="flex items-start">
                <div className="w-[100px] md:w-[140px] shrink-0 mr-[20px] md:mr-[25px]">
                  <Image 
                    src={val.image} 
                    alt={val.title} 
                    width={140} 
                    height={140} 
                    style={{ width: "100%", height: "auto" }}
                    className="w-full h-auto rounded-[10px]"
                  />
                </div>
                <div className="flex-1">
                  <h6 className="text-[#0C9D93] text-[16px] leading-[28px] font-medium uppercase mb-[5px]">
                    {val.title}
                  </h6>
                  <p className="text-[#000] text-[15px] leading-[22px] font-light m-0">
                    {val.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
