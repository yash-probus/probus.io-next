export default function SmartGridContentTop() {
  return (
    <section className="py-[60px] md:py-[80px] bg-white text-[#333]">
      <div className="container mx-auto px-4 md:px-[15px] max-w-[1140px] font-sans">
        
        <div className="mb-[20px]">
          <h2 className="text-[28px] md:text-[32px] font-bold text-black mb-6">
            Introduction to Smart Grid System Technology
          </h2>
        </div>

        <div className="mb-[20px]">
          <p className="text-[16px] leading-[26px]">
            Smart grid systems are transforming the way we generate, distribute, and consume electricity. Drawing on decades of working with utilities, IoT integrators, and renewable energy projects, I’ve witnessed how the right smart grid design can reduce operational losses, integrate renewables smoothly, and enable utilities to respond with agility to demand and supply shocks. This page explains what smart grid technology is, how it works, why it matters, and how to implement smartly.
          </p>
        </div>
        
        <div className="mb-[20px]">
          <h3 className="text-[22px] md:text-[24px] font-bold text-black mb-4">
            What Is a Smart Grid?
          </h3>
          <p className="text-[16px] leading-[26px] mb-4">
            A smart grid is an electricity network enhanced by digital communications, sensing, automation, and analytics technologies. Key characteristics include:
          </p>
          <ul className="list-disc ml-[20px] mb-6 space-y-2 text-[16px] leading-[26px]">
            <li>Real-time monitoring and control of power flows</li>
            <li>Bi-directional communication between supply (generation/distribution) and demand (consumers, prosumers)</li>
            <li>Integration of Distributed Energy Resources (DER) such as solar panels, wind, battery storage</li>
            <li>Intelligent decision-making embedded in grid operations through automation and advanced analytics</li>
          </ul>
        </div>
        
        <div className="mb-[20px]">
          <p className="text-[16px] leading-[26px]">
            Having led several smart grid pilots, I can attest: it’s not just about hardware. Equally critical are the software layers data pipelines, analytics, control logic and robust governance to ensure reliability and security.
          </p>
        </div>
        
      </div>
    </section>
  );
}
