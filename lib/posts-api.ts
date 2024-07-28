import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { Post } from "src/models/Post.model";
import { LocaleUnion } from "src/models/Translation.model";

/**
 * Posts API
 */

export function getPostsDirectory(lang: LocaleUnion) {
  return join(process.cwd(), `/data/_posts-${lang}`);
}

export function getPostSlugs(lang: LocaleUnion) {
  return fs.readdirSync(getPostsDirectory(lang));
}

export function getPostBySlug(
  slug: string,
  fields: string[] = [],
  lang: LocaleUnion
): Post {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(getPostsDirectory(lang), `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items = {} as any;

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }

    if (field === "content") {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items as any;
}

export function getAllPosts(fields: string[] = [], lang: LocaleUnion) {
  const slugs = getPostSlugs(lang);
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields, lang))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
