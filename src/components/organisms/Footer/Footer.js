import React from "react";
import FooterNav from "../../molecules/FooterNav/FooterNav";
import * as style from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.inner}>
        <FooterNav />
      </div>
    </footer>
  );
};

export default Footer;
