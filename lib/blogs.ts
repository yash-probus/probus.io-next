import fs from "fs";
import path from "path";
import { BlogPost } from "@/types/blog";

const blogsPath = path.join(process.cwd(), "content", "blogs.json");

export function getBlogs(): BlogPost[] {
  try {
    if (fs.existsSync(blogsPath)) {
      const fileContent = fs.readFileSync(blogsPath, "utf8");
      const parsed: BlogPost[] = JSON.parse(fileContent);
      return parsed.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    }
  } catch (err) {
    console.error("Error reading blogs:", err);
  }
  return [];
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  const blogs = getBlogs();
  return blogs.find((blog) => blog.slug === slug);
}

export function getFeaturedBlogs(count: number = 3): BlogPost[] {
  return getBlogs().slice(0, count);
}
