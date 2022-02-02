import React from "react";
import * as style from "./Subheading.module.scss";
import PropTypes from "prop-types";

const Subheading = ({ type = "primary", text }) => {
  return <h2 className={style[type]}>{text}</h2>;
};

export default Subheading;

Subheading.propTypes = {
  text: PropTypes.string,
  type: PropTypes.oneOf(["main", "primary", "secondary"]),
};
