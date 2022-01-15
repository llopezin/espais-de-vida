import React from "react";
import Button from "../Button/Button";
import * as style from "./SideBarContainer.module.scss";
import CloseIcon from "../CloseIcon/CloseIcon";

const SideBarContainer = ({ children, close }) => {
  return (
    <div className={style.container}>
      <div className={style.sideBar}>
        {children}
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
