import React from "react";
import * as style from "./MenuIcon.module.scss";

const MenuIcon = () => {
  return (
    <div>
      <svg
        className={style.menuIcon}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="32"
        height="32"
        viewBox="0 0 32 32"
      >
        <title>menu</title>
        <path d="M2 6h28v4h-28zM2 14h28v4h-28zM2 22h28v4h-28z" />
      </svg>
    </div>
  );
};

export default MenuIcon;
