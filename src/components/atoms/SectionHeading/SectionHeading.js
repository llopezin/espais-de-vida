import React from "react";
import * as style from "./SectionHeading.module.scss";
import PropTypes from "prop-types";

const SectionHeading = ({ type = "standard", text }) => {
  return <h1 className={style[type]}>{text}</h1>;
};

export default SectionHeading;

SectionHeading.propTypes = {
  text: PropTypes.string,
  type: PropTypes.oneOf(["standard", "main", "single"]),
};
