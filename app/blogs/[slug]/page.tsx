import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getBlogs, getBlogBySlug } from '@/lib/blogs';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import Container from '@/components/common/Container';

export async function generateStaticParams() {
  const blogs = getBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return { title: 'Post Not Found' };
  }

  return {
    title: `${blog.title} - Probus`,
    description: blog.excerpt || blog.title,
    alternates: {
      canonical: `/blogs/${slug}`,
    },
    openGraph: {
      title: blog.title,
      description: blog.excerpt || blog.title,
      url: `/blogs/${slug}`,
      images: [blog.image || '/wp-content/uploads/2026/04/Blog-01.png'],
      type: 'article',
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <h1 className="text-2xl font-bold">Post Not Found</h1>
      </div>
    );
  }

  const formattedDate = new Date(blog.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const allTags = [
    "4G BLE", "BLE NIC", "CELLULAR COMMUNICATION", "CELLULAR SMART METER",
    "DISTRIBUTION AUTOMATION", "ENERGY METERING", "FEATURED", "GRID MODERNIZATION",
    "IOT", "IOT IN ENERGY", "METER READING", "METER-TO-METER COMMUNICATION", "NOIDA",
    "OPEX SAVINGS", "POWER GRID", "PRE-PAID METERS", "PROBUS SMART THINGS",
    "SITE VISIT REDUCTION", "SMART GRID", "SMART GRID INTEGRATION", "SMART METER",
    "SMART METER DEPLOYMENTS", "SMART METER INNOVATION", "SMART METER OPEX",
    "SMART METERING", "SMART METERING SMART METERING", "SMART METERS INDIA",
    "SMART UTILITY", "TRENDING", "UTILITY ANALYTICS", "UTILITY OPERATIONS"
  ];

  return (
    <>
      <section className="pt-[100px] bg-white">
        <Container>
          {/* Breadcrumbs */}
          <div className="py-[35px]">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Blogs", href: "/blogs" },
                { label: blog.title },
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
                  <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  {formattedDate} | Probus
                </div>
                <h1 className="text-[26px] md:text-[32px] text-[#000000] font-bold leading-[1.3] font-sans">
                  {blog.title}
                </h1>
              </div>

              <div className="blogcontentwrap">
                {blog.image && (
                  <div className="mb-8">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={1024}
                      height={536}
                      className="w-full h-auto object-cover"
                      priority
                    />
                  </div>
                )}

                <div 
                  className="prose prose-lg max-w-none text-[#333333] font-sans leading-[1.8] text-[16px] [&>p]:mb-[20px] [&>h2]:text-[24px] [&>h2]:font-bold [&>h2]:text-black [&>h2]:mt-[30px] [&>h2]:mb-[15px] [&>ul]:list-disc [&>ul]:pl-[20px] [&>ul]:mb-[20px]"
                  dangerouslySetInnerHTML={{ __html: blog.content }} 
                />
              </div>

            </div>

            {/* Right Sidebar (col-lg-3) */}
            <div className="w-full lg:w-1/4 pt-2 lg:pt-0">
              <div className="mb-[30px]">
                <h5 className="text-[18px] font-bold text-[#000] mb-[20px]">Explore through tags</h5>
                <div className="flex flex-wrap">
                  {allTags.map((tag) => (
                    <Link 
                      href="#" 
                      key={tag}
                      className="bg-[#C1C1C1] hover:bg-[#707070] text-white text-[13px] uppercase px-[18px] py-[10px] rounded-[30px] mr-[15px] mb-[10px] transition-all duration-300"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
