import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

import Icon from "../UI/Icons/Icon";
import Category from "./PostMeta/Category";

export default function PostItem(props) {
  const { t } = useTranslation("common");

  const { title, categoryName, categorySlug, excerpt, slug } = props.post;

  return (
    <li key={slug} className="post-item">
      <article>
        <h3 className="post-item__title">
          <Link as={`/posts/${slug}`} href="/posts/[slug]" className="o-link">
            {title}
          </Link>
        </h3>
        <p className="post-item__excerpt">{excerpt}</p>
        <div className="post-item__meta">
          {categorySlug && categoryName && (
            <Category slug={categorySlug} name={categoryName} />
          )}
          <Link
            as={`/posts/${slug}`}
            href="/posts/[slug]"
            className="post-item__more"
          >
            {t("posts-read-more")} <Icon name="arrowright" />
          </Link>
        </div>
      </article>
    </li>
  );
}
