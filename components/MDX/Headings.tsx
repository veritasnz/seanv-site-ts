/**
 * Code replicated from
 * https://tomekdev.com/posts/anchors-for-headings-in-mdx
 */

import Icon from "../UI/Icons/Icon";

function getAnchorID(text: string) {
  let idSlug = text
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/[ ]/g, "-");

  if (idSlug.trim() !== "") return idSlug; // Valid id slug (English)
  return text; // Invalid id slug (Japanese)
}

export const H2: React.FC<{ children: string }> = ({ children }) => {
  const anchor = getAnchorID(children);
  const link = `#${anchor}`;

  return (
    <h2 id={anchor} className="o-anchor-heading">
      {children}

      <a href={link}>
        <Icon name="anchor" />
      </a>
    </h2>
  );
};

export const H3: React.FC<{ children: string }> = ({ children }) => {
  const anchor = getAnchorID(children);
  const link = `#${anchor}`;

  return (
    <h3 id={anchor} className="o-anchor-heading">
      {children}

      <a href={link}>
        <Icon name="anchor" />
      </a>
    </h3>
  );
};
