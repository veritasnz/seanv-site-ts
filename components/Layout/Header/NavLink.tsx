/**
 * Component to enable active classname
 */

import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
}

export const NavLink: React.FC<Props> = ({ href, children }) => {
  const { pathname } = useRouter();

  return (
    <Link href={href} className={`${pathname === href && "active"}`}>
      {children}
    </Link>
  );
};
