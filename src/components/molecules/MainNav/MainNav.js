import React from "react";
import Link from "../../atoms/Link/Link";
import Menu from "../../atoms/Menu/Menu";
import * as style from "./MainNav.module.scss";

const MainNav = ({ device = "mobile", linkType = "primary", lastLinkType }) => {
  const className = style[device];

  return (
    <div className={className}>
      <Menu>
        <Link to={`/`} text="inicio" className={linkType} />
        <Link to={`/about`} text="sobre mi" className={linkType} />
        <Link
          to={`/contact`}
          text="contacto"
          className={lastLinkType || linkType}
        />
      </Menu>
    </div>
  );
};

export default MainNav;
