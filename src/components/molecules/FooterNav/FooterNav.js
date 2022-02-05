import React from "react";
import EmailIcon from "../../atoms/EmailIcon/EmailIcon";
import PhoneIcon from "../../atoms/PhoneIcon/PhoneIcon";
import * as style from "./FooterNav.module.scss";
import WhatsappIcon from "../../atoms/WhatsappIcon/WhatsappIcon";

const FooterNav = () => {
  return (
    <ul className={style.list}>
      <li>
        <a className={style.link} href="mailto:nataliaferrus77@gmail.com">
          <EmailIcon />
          <span>nataliaferrus77@gmail.com</span>
        </a>
      </li>
      <li>
        <a className={style.link} href="https://wa.me/34605506068">
          <WhatsappIcon />
          <span>Contacta por whatsapp</span>
        </a>
      </li>
      <li>
        <a className={style.link} href="tel:605506068">
          <PhoneIcon />
          <span>605506068</span>
        </a>
      </li>
    </ul>
  );
};

export default FooterNav;
