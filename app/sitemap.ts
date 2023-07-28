// sitemap.ts
import { getAllPosts } from "@/lib/getAllPosts";

export default async function sitemap() {
  const baseUrl = "https://podcast-green-mu.vercel.app/";

  // Get All Posts from CMS
  const posts = await getAllPosts();
  const postsUrls = posts?.map((post) => {
    return {
      url: `${baseUrl}/episode/${post.slug}`,
      lastModified: new Date(),
    };
  }) ?? [];

  // Rest of the code...
}
