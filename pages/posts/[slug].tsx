import { Breadcrumb } from "components/Layout/Second/Breadcrumbs.model";
import fs from "fs";
import { bundleMDX } from "mdx-bundler";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { Post } from "src/models/Post.model";
import { LocaleUnion } from "src/models/Translation.model";
import { Error404 } from "../../components/Layout/Error404";
import { PageTransitionWrapper } from "../../components/Layout/PageTransitionWrapper";
import { PageTitle } from "../../components/Layout/Second/PageTitle";
import { PostBody } from "../../components/Posts/PostBody";
import PostHead from "../../components/Posts/PostHead";
import PostList from "../../components/Posts/PostList";
import { Container } from "../../components/UI/Container";
import LinkButton from "../../components/UI/LinkButton";
import WaveBreak from "../../components/UI/WaveBreak";
import {
  POST_BODY_MATTER_TYPES,
  REVALIDATION_DUR,
  SHORT_POST_ITEM_MATTER_TYPES,
  SITE_URL,
} from "../../lib/constants";
import { getAllPosts, getPostBySlug } from "../../lib/posts-api";

interface PageProps {
  post: Post;
  morePosts: Post[];
}

const Page = ({ post, morePosts }: PageProps) => {
  const router = useRouter();
  const { t, lang } = useTranslation("common");

  if (!router.isFallback && !post?.slug) return <Error404 />;

  const breadcrumbs: Breadcrumb[] = [
    { name: t("posts-title"), url: "/posts/" },
    { name: post.categoryName, url: `/posts?filterBy=${post.categorySlug}` },
  ];

  return (
    <PageTransitionWrapper>
      <NextSeo
        title={post.title}
        description={post.excerpt}
        openGraph={{
          images: [
            {
              url: SITE_URL + post.ogImage.url,
              width: post.ogImage.width || 1200,
              height: post.ogImage.height || 900,
              alt: post.title,
            },
          ],
          type: "article",
          article: {
            publishedTime: post.date,
            modifiedTime: post.modifiedDate,
            tags: [post.categoryName],
          },
        }}
      />

      <PageTitle title={post.title} breadcrumbs={breadcrumbs} />

      <Container type="second" width="thin">
        {router.isFallback ? (
          <div>Loading…</div>
        ) : (
          <>
            <PostHead post={post} />
            <PostBody content={post.content} lang={lang} />
            {morePosts.length > 0 && (
              <section className="more-posts">
                <WaveBreak />
                <h2 className="o-title">{t("post-more-articles")}</h2>
                <PostList posts={morePosts} isGrid />
                <div className="o-archive-bttn">
                  <LinkButton color="orange" href="/posts/">
                    {t("post-all-articles")}
                  </LinkButton>
                </div>
              </section>
            )}
          </>
        )}
      </Container>
    </PageTransitionWrapper>
  );
};

export default Page;

export const getStaticProps: GetStaticProps<PageProps> = async ({
  params,
  locale,
}) => {
  if (!locale || typeof params?.slug !== "string")
    throw new Error("Something went wrong generating props for Post page");

  /**
   * MDX
   */

  const post = getPostBySlug(
    params.slug,
    POST_BODY_MATTER_TYPES,
    locale as LocaleUnion
  );

  const result = await bundleMDX({
    source: post.content,
    files: {
      "./Code.tsx": fs.readFileSync("components/MDX/Code.tsx").toString(),
    },
  });
  const { code: content } = result;

  /**
   * More Posts
   */
  const allPosts = getAllPosts(
    SHORT_POST_ITEM_MATTER_TYPES,
    locale as LocaleUnion
  );
  const morePosts = allPosts
    .filter((currentPost) => currentPost.slug != post.slug)
    .slice(0, 2);

  return {
    props: {
      post: {
        ...post,
        content,
      },
      morePosts: morePosts,
    },
    revalidate: REVALIDATION_DUR,
  };
};

export async function getStaticPaths() {
  const enPosts = getAllPosts(["slug"], "en");
  const jpPosts = getAllPosts(["slug"], "jp");

  const enPaths = enPosts.map((post) => ({
    params: { slug: post.slug },
    locale: "en",
  }));

  const jpPaths = jpPosts.map((post) => ({
    params: { slug: post.slug },
    locale: "jp",
  }));

  return {
    paths: enPaths.concat(jpPaths),
    fallback: false,
  };
}
