import React from "react";
import PropTypes from "prop-types";
import * as style from "./Separator.module.scss";

const Separator = ({ length = "md", position = "" }) => {
  return (
    <div
      className={`${style.separator} ${style[length]} ${
        style[position] || ""
      } `}
    ></div>
  );
};

export default Separator;

Separator.propTypes = {
  length: PropTypes.oneOf(["lg", "md"]),
  position: PropTypes.oneOf(["left"]),
};
