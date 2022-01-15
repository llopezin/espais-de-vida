import React from "react";
import Button from "../Button/Button";
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
      <div className={style.closeArea} onClick={close}></div>
    </div>
  );
};

export default SideBarContainer;
