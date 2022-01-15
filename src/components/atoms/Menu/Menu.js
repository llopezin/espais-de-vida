import React from "react";
import * as style from "./Menu.module.scss";

const Menu = ({ children }) => {
  return <nav className={style.menu}>{children}</nav>;
};

export default Menu;
