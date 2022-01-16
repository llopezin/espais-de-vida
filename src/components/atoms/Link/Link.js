import React from "react";
import PropTypes from "prop-types";
import { Link as GatsbyLink } from "gatsby";
import * as style from "./Link.module.scss";

let Link = ({ text, className, label, children, to }) => {
  return (
    <GatsbyLink aria-label={label || text} className={style[className]} to={to}>
      {text || children}
    </GatsbyLink>
  );
};

export default Link;

Link.propTypes = {
  text: PropTypes.string,
  className: PropTypes.oneOf(["prominent", "primary", "secondary"]),
  label: PropTypes.string,
  to: PropTypes.string,
};
