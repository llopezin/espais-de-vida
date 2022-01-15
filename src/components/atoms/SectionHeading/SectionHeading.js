import React from "react";
import * as style from "./SectionHeading.module.scss";

const SectionHeading = ({ type = "standard", text }) => {
  return <h1 className={style[type]}>{text}</h1>;
};

export default SectionHeading;
