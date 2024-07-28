import { Router } from "next/router";
import React, { useRef } from "react";

import { NavLink } from "./NavLink";

interface Props {}

export const HamburgerMenu: React.FC<Props> = ({}) => {
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Toggle
  const toggleMenuHandler = () => {
    if (!menuRef.current) return;
    menuRef.current.classList.toggle("is-active");
  };
  // Close
  Router.events.on("routeChangeStart", () => {
    if (menuRef.current) {
      menuRef.current.classList.remove("is-active");
    }
  });

  return (
    <div className="menu" ref={menuRef}>
      <div className="menu__wrap">
        <button
          className="menu__ham"
          type="button"
          onClick={toggleMenuHandler}
          title="Open menu"
        >
          <div className="hamburger" aria-hidden="true">
            <div className="hamburger__box">
              <div className="hamburger__inner"></div>
            </div>
          </div>
        </button>
        <nav className="menu__nav">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/posts">Articles</NavLink>
          <NavLink href="/works">Works</NavLink>
        </nav>
      </div>
    </div>
  );
};
