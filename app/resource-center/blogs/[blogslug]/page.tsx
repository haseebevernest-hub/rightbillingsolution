import { client } from "@/sanity/lib/client";
import { singleBlogQuery, blogSlugsQuery } from "@/sanity/lib/queries";
import { Blog } from "@/types/blog";
import { notFound } from "next/navigation";
import BlogContent from "@/app/components/blog/blogContent";
import { urlFor } from "@/sanity/lib/image";

// -----------------------------
// Types
// -----------------------------
type PageProps = {
  params: Promise<{ blogslug: string }>;
};

type SlugItem = {
  slug: string;
};

// -----------------------------
// Static Params (SSG)
// -----------------------------
export async function generateStaticParams() {
  const slugs: SlugItem[] = await client.fetch(blogSlugsQuery);

  return slugs.map((item) => ({
    blogslug: item.slug,
  }));
}

// Disable ISR (optional)
export const revalidate = false;

// -----------------------------
// Blog Page Component
// -----------------------------
export default async function BlogPost({ params }: PageProps) {
  // ✅ Next.js 16+ requires awaiting params
  const { blogslug } = await params;

  if (!blogslug) {
    notFound();
  }

  const blog: Blog | null = await client.fetch(singleBlogQuery, {
    slug: blogslug,
  });

  if (!blog) {
    notFound();
  }

  return <BlogContent blog={blog} />;
}

// -----------------------------
// SEO / Metadata
// -----------------------------
export async function generateMetadata({ params }: PageProps) {
  const { blogslug } = await params;

  if (!blogslug) return {};

  const blog: Blog | null = await client.fetch(singleBlogQuery, {
    slug: blogslug,
  });

  if (!blog) return {};

  return {
    title: blog.title,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: blog.mainImage
        ? [urlFor(blog.mainImage).width(1200).url()]
        : [],
    },
  };
}