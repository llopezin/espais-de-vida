import React from "react";
import PropTypes from "prop-types";
import * as style from "./Section.module.scss";

const Section = ({ type, children }) => {
  return (
    <>
      <section className={style[type]}>{children}</section>
    </>
  );
};

export default Section;

Section.propTypes = {
  type: PropTypes.oneOf(["main"]),
};
