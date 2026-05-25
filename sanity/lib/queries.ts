import { groq } from "next-sanity";

export const allBlogsQuery = groq`
  *[_type == "blog"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt
  }
`;

export const singleBlogQuery = groq`
  *[_type == "blog" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    content,
    publishedAt
  }
`;

export const blogSlugsQuery = groq`
  *[_type == "blog" && defined(slug.current)]{
    "slug": slug.current
  }
`;