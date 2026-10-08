export default function SmartMeterContent() {
  return (
    <section className="py-[60px] md:py-[80px] bg-white text-[#333]">
      <div className="container mx-auto px-4 md:px-[15px] max-w-[1140px] font-sans">
        <h2 className="text-[28px] md:text-[32px] font-bold mb-6 text-black">
          Smart metering solutions technology
        </h2>
        <p className="text-[16px] leading-[26px] mb-8">
          Managing energy, water or gas at scale starts with accurate data and dependable connectivity. At Probus, our smart metering solutions technology brings field-hardened hardware, reliable communications and straightforward cloud tools together so utilities and integrators can focus on outcomes - not troubleshooting.
        </p>

        <h3 className="text-[22px] md:text-[24px] font-bold mb-4 text-black">
          Why choose our approach
        </h3>
        <p className="text-[16px] leading-[26px] mb-4">
          We build systems that work in real-world conditions: long field life, low maintenance, and secure data flow. Whether you’re upgrading a neighborhood of meters or rolling out a city-wide AMI program, our solution reduces guesswork and speeds up time to results.
        </p>
        <ul className="list-disc ml-[20px] mb-8 space-y-2 text-[16px] leading-[26px]">
          <li>Accurate metering and timely reporting for better billing and loss detection</li>
          <li>Scalable connectivity options that fit cellular, private radio or hybrid networks.</li>
          <li>Remote device management to cut truck rolls and operating cost.</li>
        </ul>

        <h3 className="text-[22px] md:text-[24px] font-bold mb-4 text-black">
          What’s included
        </h3>
        <p className="text-[16px] leading-[26px] mb-6">
          We deliver a complete, practical stack so your team can deploy faster and run smarter.
        </p>
        <div className="flex flex-col gap-4 mb-8">
          <div className="included-item">
            <h4 className="text-[18px] font-bold mb-1 text-black">Field Devices</h4>
            <p className="text-[16px] leading-[26px]">Rugged meters and edge devices with proven power management and industry-standard interfaces.</p>
          </div>
          <div className="included-item">
            <h4 className="text-[18px] font-bold mb-1 text-black">Connectivity & Gateways</h4>
            <p className="text-[16px] leading-[26px]">Multiple transport options (cellular, sub-GHz, mesh) with robust failover and roaming behavior to keep data flowing.</p>
          </div>
          <div className="included-item">
            <h4 className="text-[18px] font-bold mb-1 text-black">Cloud & Device Management</h4>
            <p className="text-[16px] leading-[26px]">A simple dashboard for provisioning, firmware updates, alarms and analytics - built for technicians and managers, not just developers.</p>
          </div>
          <div className="included-item">
            <h4 className="text-[18px] font-bold mb-1 text-black">Protocol Support</h4>
            <p className="text-[16px] leading-[26px]">Works with common metering protocols (Modbus, DLMS/COSEM,IEC profiles) to integrate with existing systems and head-ends.</p>
          </div>
        </div>

        <h3 className="text-[22px] md:text-[24px] font-bold mb-4 text-black">
          How it works - simple, transparent
        </h3>
        <ul className="list-disc ml-[20px] mb-8 space-y-2 text-[16px] leading-[26px]">
          <li>1. Meters collect consumption and power-quality data.</li>
          <li>2. Edge devices/gateways aggregate and secure the traffic.</li>
          <li>3. Data uploads to the cloud on schedule or event-driven.</li>
          <li>4. Operators access dashboards, alerts, and exportable reports.</li>
        </ul>

        <h3 className="text-[22px] md:text-[24px] font-bold mb-4 text-black">
          Benefits you’ll see
        </h3>
        <ul className="list-disc ml-[20px] mb-8 space-y-2 text-[16px] leading-[26px]">
          <li>1. Faster fault detection and resolution</li>
          <li>2. Lower operational costs from remote diagnostics and OTA updatesBetter demand </li>
          <li>3. Response and load balancing through timely data</li>
          <li>4. Reduced non-technical losses with detailed usage analytics</li>
        </ul>

        <h3 className="text-[22px] md:text-[24px] font-bold mb-4 text-black">
          Security & compliance
        </h3>
        <p className="text-[16px] leading-[26px] mb-8">
          Security is core to every design choice. We use proven encryption for data in transit and at rest, secure boot on devices, and role-based access for the platform. Our teams work with customers to meet regional regulatory and certification requirements during rollout.
        </p>

        <h3 className="text-[22px] md:text-[24px] font-bold mb-4 text-black">
          Integration & support
        </h3>
        <p className="text-[16px] leading-[26px] mb-0">
          We know utilities run a mix of legacy and modern systems. That’s why our team provides hands-on integration help - from mapping data fields and configuring protocol converters to automating billing exports. We also offer training and a clear maintenance plan so your operations team stays confident after deployment.
        </p>
      </div>
    </section>
  );
}
