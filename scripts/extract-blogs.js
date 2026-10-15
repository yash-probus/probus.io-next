const fs = require('fs');
const path = require('path');

const wordpressDir = path.join(process.cwd(), 'wordpress');
const contentDir = path.join(process.cwd(), 'content');

if (!fs.existsSync(contentDir)) {
  fs.mkdirSync(contentDir);
}

const blogs = [];

const dirs = fs.readdirSync(wordpressDir).filter(f => fs.statSync(path.join(wordpressDir, f)).isDirectory());

// Common non-blog dirs
const nonBlogs = ['wp-content', 'wp-includes', 'wp-json', 'tag', 'category', 'author', 'comments', 'feed', 'jobs', 'about-us', 'contact-us', 'solution', 'solar-solutions', 'smart-meter-solutions', 'smart-grid-integration', 'partners', 'career', 'bes-2026', 'blog', 'blogs', 'privacy-policy', 'terms-and-conditions', 'statutory-documents', 'smart-meter', '2024', '2025', '2026', 'site-commissioning', 'solar-commissioning', 'solar-maintenance', 'solar-pre-installation', 'solar-probus-hardware', 'grid-commissioning', 'grid-post-commissioning', 'grid-pre-installation', 'grid-probus-hardware', 'post-commissioning', 'pre-installation', 'probus-hardware'];

dirs.forEach(dir => {
  if (nonBlogs.includes(dir)) return;
  const indexPath = path.join(wordpressDir, dir, 'index.html');
  if (fs.existsSync(indexPath)) {
    const html = fs.readFileSync(indexPath, 'utf8');
    
    // Check if it's an article
    if (html.includes('content="article"') || html.includes('template-blog') || html.includes('single-post')) {
      // Basic regex extraction
      let title = '';
      const titleMatch = html.match(/<title>(.*?)<\/title>/);
      if (titleMatch) title = titleMatch[1].replace(' - Probus', '').trim();
      
      let date = '';
      const dateMatch = html.match(/<meta property="article:published_time" content="(.*?)"/);
      if (dateMatch) {
        date = dateMatch[1];
      } else {
        const dMatch = html.match(/<span class="bdate">.*?([A-Z][a-z]+ \d{1,2}, \d{4})<\/span>/);
        if (dMatch) date = new Date(dMatch[1]).toISOString();
      }

      let image = '';
      const imgMatch = html.match(/<meta property="og:image" content="(.*?)"/);
      if (imgMatch) {
        const url = new URL(imgMatch[1]);
        image = url.pathname;
      }

      let excerpt = '';
      const descMatch = html.match(/<meta name="description" content="(.*?)"/);
      if (descMatch) excerpt = descMatch[1];

      // Content Extraction
      // Usually inside <div class="entry-content"> or <section class="sub-section blog_detailmain">
      let content = '';
      const contentStart = html.indexOf('<div class="col-lg-9">');
      if (contentStart !== -1) {
        const contentEnd = html.indexOf('<div class="col-lg-3">', contentStart);
        if (contentEnd !== -1) {
          content = html.substring(contentStart, contentEnd);
          // Strip out the wrapper divs, social share, etc.
          // Very rough, we can just grab everything inside the main post body
          // In probus, the post body is usually right after the title.
          const realContentStart = content.indexOf('<div class="headingblog">') !== -1 ? content.indexOf('</div>', content.indexOf('<div class="headingblog">')) : 0;
          let body = content.substring(realContentStart);
          
          // remove sociallinks div
          body = body.replace(/<div class="sociallinks">[\s\S]*?<\/div>/g, '');
          body = body.replace(/<div class="blogtag">[\s\S]*?<\/div>/g, '');
          content = body;
        }
      }

      blogs.push({
        slug: dir,
        title,
        date: date || new Date().toISOString(),
        excerpt,
        image,
        content
      });
    }
  }
});

fs.writeFileSync(path.join(contentDir, 'blogs.json'), JSON.stringify(blogs, null, 2));
console.log(`Extracted ${blogs.length} blogs.`);
