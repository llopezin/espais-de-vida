import React from "react";
import PropTypes from "prop-types";
import * as style from "./SectionBody.module.scss";

const SectionBody = ({
  topContent,
  bottomContent,
  image,
  type = "imgRight",
}) => {
  return (
    <div className={`${style.wrap} ${style[type]}`}>
      <div className={style.top}>{topContent}</div>
      <div className={style.image}>{image}</div>
      <div className={style.bottom}>{bottomContent}</div>
    </div>
  );
};

export default SectionBody;

SectionBody.propTypes = {
  type: PropTypes.oneOf(["imgRight", "imgLeft"]).isRequired,
};
