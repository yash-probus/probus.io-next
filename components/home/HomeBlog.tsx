import Image from "next/image";
import Link from "next/link";

export default function HomeBlog() {
  const blogs = [
    {
      type: "Blog",
      title: "How IoT-Based Smart Grid Integration Improves Outage Management and Fault Detection",
      img: "/wp-content/uploads/2026/04/Blog-04-1024x536.png",
      link: "/blogs/iot-smart-grid-integration-outage-management-fault-detection"
    },
    {
      type: "Blog",
      title: "PLC vs RF Mesh vs 4G: Which Communication Technology is Right for Your AMI Network?",
      img: "/wp-content/uploads/2026/04/blog-03-1024x536.png",
      link: "/blogs/plc-vs-rf-mesh-vs-4g-ami-communication-technology-comparison"
    },
    {
      type: "Blog",
      title: "Smart Metering Rollout Under RDSS: What Every DISCOM Needs to Know in 2026",
      img: "/wp-content/uploads/2026/04/Blog-02-1024x534.png",
      link: "/blogs/smart-metering-rollout-rdss-what-every-discom-needs-to-know-2026"
    }
  ];

  return (
    <section className="py-[60px] md:py-[100px] bg-white">
      <div className="container mx-auto px-4 md:px-[15px] max-w-[1140px] relative">
        {/* Title and (Optional) Slider Arrows */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-[50px]">
          <div className="text-center md:text-left flex-1">
            <h2 className="text-[#000000] text-[28px] md:text-[35px] font-bold leading-tight font-sans">
              Explore innovative energy insights
            </h2>
          </div>
          {/* Static Slider Arrows (Visual match for old website) */}
          <div className="hidden md:flex gap-2 mt-4 md:mt-0 justify-center md:justify-end">
            <div className="w-[32px] h-[32px] rounded-full border border-[#9d9d9d] bg-[#9d9d9d] hover:bg-[#033361] hover:border-[#033361] flex items-center justify-center cursor-pointer transition-colors duration-300">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="12px" width="12px" xmlns="http://www.w3.org/2000/svg" className="text-white"><path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
            </div>
            <div className="w-[32px] h-[32px] rounded-full border border-[#9d9d9d] bg-[#9d9d9d] hover:bg-[#033361] hover:border-[#033361] flex items-center justify-center cursor-pointer transition-colors duration-300">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="12px" width="12px" xmlns="http://www.w3.org/2000/svg" className="text-white"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap -mx-[15px]">
          {blogs.map((blog, idx) => (
            <div key={idx} className="w-full md:w-1/3 px-[15px] mb-[30px]">
              <div className="w-full flex items-start bg-white shadow-[0px_0px_6px_#0000001a] rounded-[6px] p-[14px_15px] transition-all duration-300 ease-in-out group hover:shadow-[0px_0px_12px_#0000002a]">
                {/* Left Side (Image) */}
                <div className="h-[160px] w-1/2 rounded-[6px] overflow-hidden relative shrink-0 block">
                  <Image 
                    src={blog.img} 
                    alt={blog.title} 
                    fill 
                    className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-[1.1]" 
                  />
                </div>
                
                {/* Right Side (Content) */}
                <div className="w-1/2 pl-[15px] flex flex-col justify-start text-left box-border">
                  <h4 className="text-[#707070] text-[13px] uppercase font-light leading-[22px] mb-[4px] font-sans">
                    {blog.type}
                  </h4>
                  <p className="text-[#000000] text-[16px] font-medium leading-[23px] font-sans mb-[5px] pr-[5px] line-clamp-4 group-hover:text-black">
                    {blog.title}
                  </p>
                  <Link href={blog.link} className="text-[#097DF5] text-[15px] font-medium font-sans leading-[24px] mt-[12px] md:mt-[25px] inline-block group-hover:underline">
                    Know More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
