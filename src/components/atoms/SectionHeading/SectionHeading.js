import React from "react";
import * as style from "./SectionHeading.module.scss";
import PropTypes from "prop-types";

const SectionHeading = ({ type = "standard", text }) => {
  return (type = "main" ? (
    <h1 className={style[type]}>{text}</h1>
  ) : (
    <h2 className={style[type]}>{text}</h2>
  ));
};

export default SectionHeading;

SectionHeading.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["standard", "main", "single"]),
};
