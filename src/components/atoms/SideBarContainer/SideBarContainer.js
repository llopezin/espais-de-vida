import React from "react";
import Button from "../Button/Button";
import PropTypes from "prop-types";
import CloseIcon from "../CloseIcon/CloseIcon";
import * as style from "./SideBarContainer.module.scss";

const SideBarContainer = ({ children, close }) => {
  return (
    <div className={style.container}>
      <div className={style.sideBar}>
        <div className={style.inner}>{children}</div>
        <div className={style.closeBtnWrap}>
          <Button label="close" onClick={close}>
            <CloseIcon />
          </Button>
        </div>
      </div>
      <button
        className={style.closeArea}
        onClick={close}
        type="button"
        aria-label="close"
      />
    </div>
  );
};

export default SideBarContainer;

SideBarContainer.propTypes = {
  close: PropTypes.func,
};
