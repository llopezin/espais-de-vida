import React, { useState } from "react";
import "./Header.module.scss";
import MenuIcon from "../../atoms/MenuIcon/MenuIcon";
import * as style from "./Header.module.scss";
import Logo from "../../atoms/Logo/Logo";
import Button from "../../atoms/Button/Button";
import SideBarContainer from "../../atoms/SideBarContainer/SideBarContainer";
import MainNav from "../../molecules/MainNav/MainNav";

const Header = () => {
  const [openMobileNav, setopenMobileNav] = useState(false);
  const toggleNav = (e) => {
    e.preventDefault();
    setopenMobileNav((prev) => !prev);
  };

  return (
    <header className={style.header}>
      <Logo />
      <Button onClick={toggleNav} label="menu">
        <MenuIcon />
      </Button>

      {openMobileNav && (
        <SideBarContainer close={toggleNav}>
          <MainNav device="mobile" linkType="secondary" />
        </SideBarContainer>
      )}

      <MainNav device="desktop" lastLinkType="prominent" />
    </header>
  );
};

export default Header;
