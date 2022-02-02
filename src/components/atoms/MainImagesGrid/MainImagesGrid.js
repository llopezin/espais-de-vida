import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import * as style from "./MainImagesGrid.module.scss";
import plant from "../../../images/plant.jpg"
import table from "../../../images/table.jpg"

const MainImagesGrid = () => {
  return (
    <div className={style.imagesWrap}>
      <div className={style.secondaryImageWrap}>
        <img className={style.image} src={plant} alt=""/>
      </div>
      <div className={style.mainImageWrap}>
        <img className={style.image} src={table} alt=""/>        
      </div>
    </div>
  );
};

export default MainImagesGrid;
