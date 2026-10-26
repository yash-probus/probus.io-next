import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import Container from '@/components/common/Container';

export const metadata: Metadata = {
  title: 'Empowering the Future: Probus Smart Things Journey in Smart Grid Innovation - Probus',
  description:
    "In an era where energy efficiency and sustainability are paramount, the transformation of traditional power grids into intelligent networks is not just a technological advancement—it's a necessity. Probus Smart Things stands at the forefront of this transformation, pioneering solutions that integrate cutting-edge IoT technologies to revolutionize energy distribution and management.",
  alternates: {
    canonical: '/empowering-the-future-probus-smart-things-journey-in-smart-grid-innovation',
  },
  openGraph: {
    title: 'Empowering the Future: Probus Smart Things Journey in Smart Grid Innovation - Probus',
    description:
      "In an era where energy efficiency and sustainability are paramount, the transformation of traditional power grids into intelligent networks is not just a technological advancement—it's a necessity. Probus Smart Things stands at the forefront of this transformation, pioneering solutions that integrate cutting-edge IoT technologies to revolutionize energy distribution and management.",
    url: '/empowering-the-future-probus-smart-things-journey-in-smart-grid-innovation',
    images: ['/images/uploads/2025/06/image-1.png'],
    siteName: 'Probus',
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Empowering the Future: Probus Smart Things Journey in Smart Grid Innovation - Probus',
    description:
      "In an era where energy efficiency and sustainability are paramount, the transformation of traditional power grids into intelligent networks is not just a technological advancement—it's a necessity.",
    images: ['/images/uploads/2025/06/image-1.png'],
  },
};

export default function EmpoweringTheFuturePage() {
  const allTags = [
    '4G BLE',
    'BLE NIC',
    'CELLULAR COMMUNICATION',
    'CELLULAR SMART METER',
    'DISTRIBUTION AUTOMATION',
    'ENERGY METERING',
    'FEATURED',
    'GRID MODERNIZATION',
    'IOT',
    'IOT IN ENERGY',
    'METER READING',
    'METER-TO-METER COMMUNICATION',
    'NOIDA',
    'OPEX SAVINGS',
    'POWER GRID',
    'PRE-PAID METERS',
    'PROBUS SMART THINGS',
    'SITE VISIT REDUCTION',
    'SMART GRID',
    'SMART GRID INTEGRATION',
    'SMART METER',
    'SMART METER DEPLOYMENTS',
    'SMART METER INNOVATION',
    'SMART METER OPEX',
    'SMART METERING',
    'SMART METERING SMART METERING',
    'SMART METERS INDIA',
    'SMART UTILITY',
    'TRENDING',
    'UTILITY ANALYTICS',
    'UTILITY OPERATIONS',
  ];

  return (
    <>
      <section className="pt-[100px] bg-white">
        <Container>
          {/* Breadcrumbs */}
          <div className="py-[35px]">
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'Blogs', href: '/blogs' },
                {
                  label:
                    'Empowering the Future: Probus Smart Things Journey in Smart Grid Innovation',
                },
              ]}
              theme="dark"
              separator="›"
            />
          </div>

          <div className="flex flex-wrap lg:flex-nowrap pb-20">
            {/* Left Content Area (col-lg-9) */}
            <div className="w-full lg:w-3/4 lg:pr-[30px] mb-10 lg:mb-0">
              <div className="mb-[27px]">
                <div className="flex items-center text-[#797979] text-[12px] pb-[14px]">
                  <Image
                    src="/images/dateicon.svg"
                    alt="Date"
                    width={14}
                    height={14}
                    className="mr-1.5"
                  />
                  June 2, 2025 | Probus
                </div>
                <h1 className="text-[26px] md:text-[36px] text-[#000000] font-bold leading-[1.3] font-sans">
                  Empowering the Future: Probus Smart Things Journey in Smart
                  Grid Innovation
                </h1>
              </div>

              <div className="blogcontentwrap">
                <div className="mb-8 rounded-lg overflow-hidden shadow-sm">
                  <Image
                    src="/images/uploads/2025/06/image-1.png"
                    alt="Empowering the Future: Probus Smart Things Journey in Smart Grid Innovation"
                    width={730}
                    height={416}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>

                <div className="prose prose-lg max-w-none text-[#333333] font-sans leading-[1.8] text-[16px] [&>p]:mb-[20px] [&>h2]:text-[24px] [&>h2]:font-bold [&>h2]:text-black [&>h2]:mt-[30px] [&>h2]:mb-[15px] [&>h3]:text-[20px] [&>h3]:font-semibold [&>h3]:text-black [&>h3]:mt-[25px] [&>h3]:mb-[12px] [&>ul]:list-disc [&>ul]:pl-[20px] [&>ul]:mb-[20px]">
                  <p>
                    In an era where energy efficiency and sustainability are
                    paramount, the transformation of traditional power grids into
                    intelligent networks is not just a technological
                    advancement—it&#8217;s a necessity. Probus Smart Things
                    stands at the forefront of this transformation, pioneering
                    solutions that integrate cutting-edge IoT technologies to
                    revolutionize energy distribution and management.
                  </p>

                  <h2>
                    <strong>The Genesis of Innovation</strong>
                  </h2>
                  <p>
                    Founded by visionary entrepreneur Anand Singh, Probus Smart
                    Things embarked on a mission to digitize distribution grids,
                    offering real-time visibility and control over energy
                    networks. Their{' '}
                    <Link
                      href="/smart-meter-solutions"
                      className="text-[#097DF5] hover:underline"
                    >
                      integrated IoT platform
                    </Link>{' '}
                    seamlessly combines hardware and software solutions, enabling
                    utilities to optimize operations, reduce losses, and enhance
                    service reliability.
                  </p>

                  <h2>
                    <strong>Smart Metering: A Leap Towards Efficiency</strong>
                  </h2>
                  <p>
                    At the heart of Probus&#8217;s offerings lies their advanced
                    smart metering solutions. By deploying patented Network
                    Interface Cards (NICs) supporting RF, NB-IoT, 4G, and BLE,
                    Probus ensures robust and secure data communication across
                    diverse network infrastructures. These smart meters facilitate
                    automated readings, real-time monitoring, and predictive
                    analytics, empowering utilities to make informed decisions
                    and proactively address issues.
                  </p>

                  <h3>
                    <strong>Key Benefits:</strong>
                  </h3>
                  <ul>
                    <li>
                      <strong>Automated Meter Reading (AMR):</strong> Eliminates
                      manual errors and reduces operational costs.
                    </li>
                    <li>
                      <strong>Real-Time Data Analytics:</strong> Provides insights
                      into consumption patterns and grid performance.
                    </li>
                    <li>
                      <strong>Enhanced Customer Engagement:</strong> Enables
                      transparent billing and energy usage awareness.
                    </li>
                  </ul>

                  <h2>
                    <strong>
                      Smart Grid Integration: Building Resilient Networks
                    </strong>
                  </h2>
                  <p>
                    Beyond metering, Probus&#8217;s smart grid integration
                    solutions offer comprehensive tools for grid optimization.
                    Their wireless sensors and analytics platforms monitor
                    critical parameters, detect anomalies, and facilitate demand
                    response strategies. This holistic approach ensures grid
                    stability, reduces outages, and supports the integration of
                    renewable energy sources.
                  </p>

                  <h3>
                    <strong>Notable Features:</strong>
                  </h3>
                  <ul>
                    <li>
                      <strong>Advanced Grid Analytics:</strong> Identifies
                      inefficiencies and predicts maintenance needs.
                    </li>
                    <li>
                      <strong>Demand Response Management:</strong> Balances load
                      and prevents overloading during peak times.
                    </li>
                    <li>
                      <strong>Seamless Renewable Integration:</strong> Supports
                      solar and wind energy incorporation into the grid.
                    </li>
                  </ul>

                  <h2>
                    <strong>Achievements and Recognition</strong>
                  </h2>
                  <p>
                    Probus&#8217;s innovative solutions have garnered
                    significant attention and accolades within the industry.
                    Their recent $3 million Series A funding round underscores
                    investor confidence in their vision and capabilities.
                    Additionally, their selection for the Qualcomm Design in
                    India Challenge highlights their commitment to technological
                    excellence and indigenous innovation.
                  </p>

                  <h2>
                    <strong>
                      Conclusion: Shaping a Sustainable Energy Future
                    </strong>
                  </h2>
                  <p>
                    Probus Smart Things exemplifies how technological innovation
                    can drive meaningful change in the energy sector. By
                    harnessing the power of IoT and data analytics, they are not
                    only enhancing grid efficiency but also paving the way for a
                    more sustainable and resilient energy infrastructure. As the
                    world moves towards smarter energy solutions, Probus&#8217;s
                    contributions will undoubtedly play a pivotal role in shaping
                    the future of power distribution.
                  </p>
                </div>

                {/* About Us Card */}
                <div className="mt-12 p-6 md:p-8 bg-[#FBFBFB] rounded-xl border border-gray-100 shadow-sm">
                  <div className="flex flex-wrap items-center justify-between pb-4 border-b border-gray-200 mb-4">
                    <span className="flex items-center text-[18px] font-bold text-black font-sans">
                      <Image
                        src="/images/probusgreen.png"
                        alt="Probus Logo Icon"
                        width={24}
                        height={24}
                        className="mr-2"
                      />
                      About us
                    </span>
                    <div className="flex items-center space-x-3">
                      <a
                        href="https://www.linkedin.com/company/probus-smart-things/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition-opacity"
                        aria-label="LinkedIn"
                      >
                        <Image
                          src="/images/linked-g.svg"
                          alt="LinkedIn"
                          width={20}
                          height={20}
                        />
                      </a>
                    </div>
                  </div>
                  <p className="text-[15px] leading-[24px] text-[#444] m-0 font-sans">
                    We specialize in delivering innovative energy solutions that
                    drive efficiency and sustainability. With our cutting-edge
                    hardware and software offerings, we empower businesses to
                    optimize their energy consumption, reduce costs, and make a
                    positive environmental impact.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Sidebar (col-lg-3) */}
            <div className="w-full lg:w-1/4 pt-2 lg:pt-0">
              <div className="mb-[30px]">
                <h5 className="text-[18px] font-bold text-[#000] mb-[20px]">
                  Explore through tags
                </h5>
                <div className="flex flex-wrap">
                  {allTags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#C1C1C1] hover:bg-[#707070] text-white text-[12px] uppercase px-[14px] py-[8px] rounded-[30px] mr-[10px] mb-[10px] transition-all duration-300 cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-[30px] p-6 bg-[#FBFBFB] rounded-xl border border-gray-100">
                <h5 className="text-[18px] font-bold text-[#000] mb-[16px]">
                  Share this blog
                </h5>
                <div className="flex items-center space-x-4">
                  <a
                    href="https://www.linkedin.com/shareArticle?url=https://probus.io/empowering-the-future-probus-smart-things-journey-in-smart-grid-innovation/&title=Empowering%20the%20Future:%20Probus%20Smart%20Things%20Journey%20in%20Smart%20Grid%20Innovation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                    aria-label="Share on LinkedIn"
                  >
                    <Image
                      src="/images/linked.svg"
                      alt="LinkedIn"
                      width={24}
                      height={24}
                    />
                  </a>
                  <a
                    href="http://www.facebook.com/sharer.php?url=https://probus.io/empowering-the-future-probus-smart-things-journey-in-smart-grid-innovation/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                    aria-label="Share on Facebook"
                  >
                    <Image
                      src="/images/fb.svg"
                      alt="Facebook"
                      width={24}
                      height={24}
                    />
                  </a>
                  <a
                    href="http://www.twitter.com/share?url=https://probus.io/empowering-the-future-probus-smart-things-journey-in-smart-grid-innovation/&title=Empowering%20the%20Future:%20Probus%20Smart%20Things%20Journey%20in%20Smart%20Grid%20Innovation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                    aria-label="Share on Twitter"
                  >
                    <Image
                      src="/images/twitter.svg"
                      alt="Twitter"
                      width={24}
                      height={24}
                    />
                  </a>
                  <a
                    href="https://wa.me/send?text=https://probus.io/empowering-the-future-probus-smart-things-journey-in-smart-grid-innovation/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                    aria-label="Share on WhatsApp"
                  >
                    <Image
                      src="/images/whatsapp.svg"
                      alt="WhatsApp"
                      width={24}
                      height={24}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
