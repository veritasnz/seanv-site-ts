/**
 * Component to enable active classname
 */

import Link from "next/link";
import { withRouter } from "next/router";

const NavLink = ({ router, href, children }) => {
  return (
    <Link href={href} className={`${router.pathname === href && "active"}`}>
      {children}
    </Link>
  );
};

export default withRouter(NavLink);
