import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import * as style from "./MainImagesGrid.module.scss";

const MainImagesGrid = () => {
  return (
    <div className={style.imagesWrap}>
      <div className={style.secondaryImageWrap}>
      <StaticImage
          src="../../../images/plant.jpg"
          imgClassName={style.image}
          objectFit="cover"
        /> 
      </div>
      <div className={style.mainImageWrap}>
        <StaticImage
          src="../../../images/table.jpg"
          imgClassName={style.mainImage}
          objectFit="contain"
          style={{
            maxHeight: 500
          }}
        />
      </div>
    </div>
  );
};

export default MainImagesGrid;
