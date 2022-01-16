import React from "react";
import PropTypes from "prop-types";
import * as style from "./Button.module.scss";

const Button = ({
  text,
  className,
  label,
  onClick,
  disabled = false,
  children,
}) => {
  return (
    <button
      aria-label={label || text}
      className={style[className]}
      onClick={onClick}
      disabled={disabled}
    >
      {text || children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};
