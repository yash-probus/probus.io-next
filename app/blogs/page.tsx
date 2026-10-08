import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';

export const metadata: Metadata = {
  title: 'Blogs - Probus',
  description: 'Read the latest news and insights from Probus Smart Things.',
  alternates: {
    canonical: '/blogs',
  },
};

export default function BlogsPage() {
  const blogsPath = path.join(process.cwd(), 'content', 'blogs.json');
  let blogs = [];
  try {
    if (fs.existsSync(blogsPath)) {
      blogs = JSON.parse(fs.readFileSync(blogsPath, 'utf8'));
    }
  } catch (err) {
    console.error('Error loading blogs:', err);
  }

  // Sort by date descending
  blogs.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const featuredBlogs = blogs.slice(0, 3);
  const regularBlogs = blogs.slice(3);

  const tags = [
    "4G BLE", "BLE NIC", "cellular communication", "cellular smart meter", 
    "distribution automation", "energy metering", "Featured", "grid modernization",
    "IOT", "IoT in energy", "meter reading", "meter-to-meter communication",
    "Noida", "OPEX savings", "Power Grid", "pre-paid meters", "Probus Smart Things",
    "site visit reduction", "Smart Grid", "Smart Grid Integration", "smart meter",
    "smart meter deployments", "smart meter innovation", "smart meter opex",
    "smart metering", "Smart Metering Smart Metering", "smart meters india",
    "smart utility", "Trending", "utility analytics", "utility operations"
  ];

  return (
    <main className="bg-white min-h-screen font-sans pb-20">
      
      {/* Breadcrumbs */}
      <section className="w-full">
        <div className="max-w-[1140px] mx-auto px-[15px] pt-8 pb-6">
          <div className="text-black text-[14px] font-bold flex items-center gap-2">
            <Link href="/" className="hover:text-[#097DF5]">Home</Link>
            <span className="text-[10px]">&gt;</span>
            <span>Blogs</span>
          </div>
        </div>
      </section>

      {/* Featured Slider Area */}
      <section className="w-full mb-12 overflow-hidden px-[15px] max-w-[1800px] mx-auto">
        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 md:gap-5 h-[400px] md:h-[550px] pb-4">
          {featuredBlogs.map((blog: any) => (
            <div 
              key={blog.slug} 
              className="relative h-full rounded-[10px] overflow-hidden group transition-all duration-300 flex-shrink-0 w-[85%] md:w-[calc(33.333%-14px)] snap-center cursor-pointer"
            >
              <Image
                src={blog.image || '/wp-content/uploads/2026/04/Blog-01.png'}
                alt={blog.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001736]/90 via-[#001736]/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 w-full p-6 md:px-[50px] md:pb-[45px] text-white flex flex-col justify-end">
                <div className="flex items-center gap-4 mb-3 text-[11px] font-sans">
                  <span className="px-3 py-1.5 bg-black/30 rounded-[20px] text-white uppercase">
                    FEATURED
                  </span>
                  <span className="flex items-center text-white">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    {new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                </div>
                <Link href={`/blogs/${blog.slug}`} className="font-bold text-[22px] leading-[32px] text-white hover:underline transition-colors font-sans">
                  {blog.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content Area */}
      <section className="w-full">
        <div className="max-w-[1140px] mx-auto px-[15px] flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left Column - Blogs Grid */}
          <div className="lg:w-3/4">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <h4 className="text-[24px] font-bold text-black m-0">Innovative energy solution insights</h4>
              <div className="flex items-center text-[13px] border border-gray-200 rounded px-3 py-1.5 bg-white shadow-sm">
                <span className="text-gray-500 mr-2">Sort by:</span>
                <select className="border-none focus:outline-none bg-transparent text-black font-semibold cursor-pointer pr-4">
                   <option>Select</option>
                   <option>Latest</option>
                   <option>Oldest</option>
                </select>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {regularBlogs.map((blog: any) => (
                <div key={blog.slug} className="flex flex-col border border-gray-100 rounded-[10px] overflow-hidden bg-white shadow-[0px_2px_10px_rgba(0,0,0,0.04)] group hover:shadow-[0px_5px_20px_rgba(0,0,0,0.08)] transition-all">
                  <Link href={`/blogs/${blog.slug}`} className="relative w-full aspect-[1.6/1] overflow-hidden block">
                    <Image
                      src={blog.image || '/wp-content/uploads/2026/04/Blog-01.png'}
                      alt={blog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[10px] uppercase font-bold px-2.5 py-1 rounded-sm">
                      News
                    </div>
                  </Link>
                  <div className="p-5 flex flex-col flex-grow">
                    <p className="text-[#666] text-[12px] mb-2.5 flex items-center">
                      <svg className="w-3.5 h-3.5 mr-1.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                      {new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                    <Link href={`/blogs/${blog.slug}`} className="text-black text-[15px] font-bold leading-snug hover:text-[#0A83F8] transition-colors line-clamp-3">
                      {blog.title}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:w-1/4 pt-2 lg:pt-0">
            {/* Tags Widget */}
            <div className="mb-10">
              <h5 className="text-[18px] font-bold text-black mb-4 border-b border-gray-100 pb-3">Explore through tags</h5>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Link 
                    key={tag} 
                    href={`/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-block px-3 py-1.5 bg-[#E6E6E6] text-[#4A4A4A] text-[11px] font-bold uppercase rounded-[20px] hover:bg-[#0A83F8] hover:text-white transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social Links Widget */}
            <div className="mb-10">
              <h5 className="text-[18px] font-bold text-black mb-4 border-b border-gray-100 pb-3">Connect with us</h5>
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 rounded-full bg-[#f0f0f0] flex items-center justify-center hover:bg-[#0A83F8] hover:text-white transition-colors text-gray-600">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-[#f0f0f0] flex items-center justify-center hover:bg-[#0A83F8] hover:text-white transition-colors text-gray-600">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-[#f0f0f0] flex items-center justify-center hover:bg-[#0A83F8] hover:text-white transition-colors text-gray-600">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
                </a>
              </div>
            </div>

            {/* Newsletter Widget */}
            <div className="mb-10">
              <h5 className="text-[18px] font-bold text-black mb-4 border-b border-gray-100 pb-3">Get latest insights and updates</h5>
              <form className="flex flex-col gap-3">
                <input 
                  type="email" 
                  placeholder="Enter Your Email Id" 
                  className="w-full border border-gray-300 rounded-[4px] px-4 py-2.5 text-[14px] focus:outline-none focus:border-[#0A83F8]"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-[#033361] text-white text-[15px] font-semibold py-2.5 px-6 rounded-[4px] hover:bg-[#022241] transition-colors self-start"
                >
                  Send
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </section>

    </main>
  );
}
