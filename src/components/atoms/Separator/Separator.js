import React from "react";
import PropTypes from "prop-types";
import * as style from "./Separator.module.scss";

const Separator = ({length = 'md'}) => {
  return (
    <div className={`${style.separator} ${style[length]}`}>
    </div>
  );
};

export default Separator;

Separator.propTypes = {
  length: PropTypes.oneOf(['lg', 'md'])
};
