import React, { useState } from "react";
import "./Header.module.scss";
import HorizontalNav from "../../molecules/HorizontalNav/HorizontalNav";
import Link from "../../atoms/Link/Link";
import MenuIcon from "../../atoms/MenuIcon/MenuIcon";
import * as style from "./Header.module.scss";
import Logo from "../../atoms/Logo/Logo";
import Button from "../../atoms/Button/Button";
import SideBarContainer from "../../atoms/SideBarContainer/SideBarContainer";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const toggleNav = (e) => {
    e.preventDefault();
    setShowNav((prev) => !prev);
  };

  return (
    <header className={style.header}>
      <Logo />
      <Button onClick={toggleNav} label="menu">
        <MenuIcon />
      </Button>

      {showNav && (
        <SideBarContainer close={toggleNav}>
          <HorizontalNav>
            <Link to={`/`} text="inicio" />
            <Link to={`/about`} text="sobre mi" />
            <Link to={`/contact`} text="contacto" />
          </HorizontalNav>
        </SideBarContainer>
      )}
    </header>
  );
};

export default Header;
