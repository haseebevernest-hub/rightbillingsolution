import { client } from "@/sanity/lib/client";
import { allBlogsQuery } from "@/sanity/lib/queries";
import { Blog } from "@/types/blog";
import BlogGrid from "@/app/components/blog/blogGrid";

export const revalidate = false;

export default async function BlogPage() {
  const blogs: Blog[] = await client.fetch(allBlogsQuery);

  return (
    <main className="px-6 py-24 max-w-6xl mx-auto">
      <h1 className="text-6xl font-semibold tracking-tight text-center mb-20">
        Resource Center
      </h1>

      <BlogGrid blogs={blogs} />
    </main>
  );
}