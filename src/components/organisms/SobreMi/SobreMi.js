import React from "react";
import * as style from "./SobreMi.module.scss";
import copy from "./SobreMi.json";
import SectionBody from "../../molecules/SectionBody/SectionBody";
import SectionHeading from "../../atoms/SectionHeading/SectionHeading";
import Separator from "../../atoms/Separator/Separator";
import { StaticImage } from "gatsby-plugin-image";

const SobreMi = () => {
  const topContent = (
    <div className={style.content}>
      <SectionHeading text="una frase corta sobre ti" type="single" />
      <Separator length="md" position="left" />
      <p>{copy.topContentP1}</p>
    </div>
  );

  const bottomContent = (
    <div className={style.content}>
      <p>{copy.bottomContentP1}</p>
    </div>
  );

  const image = (
    <StaticImage
      src="../../../images/portrait.jpg"
      alt=""
      imgClassName={style.image}
      objectPosition="center"
      height={600}
    />
  );

  return (
    <section>
      <SectionBody
        image={image}
        topContent={topContent}
        bottomContent={bottomContent}
        type="imgLeft"
        imageSize="lg"
      />
    </section>
  );
};

export default SobreMi;
