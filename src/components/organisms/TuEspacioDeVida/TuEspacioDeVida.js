import React from "react";
import copy from "./TuEspacioDeVida.json";
import SectionBody from "../../molecules/SectionBody/SectionBody";
import Subheading from "../../atoms/Subheading/Subheading";
import SectionHeading from "../../atoms/SectionHeading/SectionHeading";
import Separator from "../../atoms/Separator/Separator";
import { StaticImage } from "gatsby-plugin-image";
import * as style from "./TuEspacioDeVida.module.scss";

const TuEspacioDeVida = () => {
  const bottomContent = (
    <div className={style.bottom}>
      <div className={style.bottomInner}>
        {copy.topContentPs.map((p) => (
          <p>{p}</p>
        ))}
      </div>
      <p className={style.bottomP}>
        {copy.bottomContentP1.map((text) => (
          <span>{text}</span>
        ))}
      </p>
    </div>
  );

  const image = (
    <StaticImage src="../../../images/vase.jpg" imgClassName={style.image} />
  );

  return (
    <section>
      <SectionHeading text={copy.title} type="standard" />
      <Separator length="md" />
      <Subheading text={copy.subheading} type="primary" />
      <SectionBody
        image={image}
        bottomContent={bottomContent}
        type="imgRight"
      />
    </section>
  );
};

export default TuEspacioDeVida;

TuEspacioDeVida.propTypes = {};
