import React from "react";
import PropTypes from "prop-types";
import * as style from "./SectionBody.module.scss";

const SectionBody = ({
  topContent,
  bottomContent,
  image,
  type = "imgRight",
  imageSize = "",
}) => {
  return (
    <div
      className={`${style.wrap} ${style[type]} ${
        !topContent && style.noTopContent
      }`}
    >
      {topContent && <div className={style.top}>{topContent}</div>}
      <div className={`${style.image} ${style[imageSize]}`}>{image}</div>
      <div className={style.bottom}>{bottomContent}</div>
    </div>
  );
};

export default SectionBody;

SectionBody.propTypes = {
  type: PropTypes.oneOf(["imgRight", "imgLeft"]).isRequired,
  imageSize: PropTypes.oneOf(["lg"]),
};
