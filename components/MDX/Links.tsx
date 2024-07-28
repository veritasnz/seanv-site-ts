import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
}

export const ATag: React.FC<Props> = ({ href, children }) => {
  const isExternal = href.includes("http"); // weak external link check

  if (isExternal) {
    return (
      <a
        className="o-link"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  } else {
    return (
      <Link href={href} className="o-link">
        {children}
      </Link>
    );
  }
};
