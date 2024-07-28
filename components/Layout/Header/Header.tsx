import React from "react";

import { DarkModeButton } from "./DarkModeButton";
import { HamburgerMenu } from "./HamburgerMenu";
import { LangButton } from "./LangButton";
import { SocialDropdown } from "./SocialDropdown";

interface Props {}

export const Header: React.FC<Props> = ({}) => {
  return (
    <header className="header">
      <SocialDropdown />
      <div className="header__options">
        <LangButton />
        <DarkModeButton />
        <HamburgerMenu />
      </div>
    </header>
  );
};
