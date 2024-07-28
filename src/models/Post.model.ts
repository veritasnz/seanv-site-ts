export interface Post {
  title: string;
  slug: string;
  content: string;
  categoryName: "コード";
  categorySlug: PostCategorySlugUnion;
  excerpt: string;
  readDuration: string;
  date: string;
  modifiedDate: string;
  ogImage: {
    url: string;
    width: number;
    height: number;
  };
}

export type PostCategorySlugUnion = "code";
export type PostCategoryNameUnion = "コード";
