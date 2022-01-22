import React from "react";
import copy from "./TuEspacioDeVida.json";
import SectionBody from "../../molecules/SectionBody/SectionBody";
import Subheading from "../../atoms/Subheading/Subheading";
import SectionHeading from "../../atoms/SectionHeading/SectionHeading";
import Separator from "../../atoms/Separator/Separator";
import { StaticImage } from "gatsby-plugin-image";
import style from "./TuEspacioDeVida.module.scss";

const TuEspacioDeVida = () => {
  const topContent = (
    <div>
      <Subheading text={copy.topContentHeading} />
      {copy.topContentPs.map((p) => (
        <p>{p}</p>
      ))}
    </div>
  );

  const bottomContent = <p>{copy.bottomContentP1}</p>;

  const image = <StaticImage src="../../../images/vase.jpg" />;

  return (
    <section>
      <SectionHeading text={copy.title} type="standard" />
      <Separator length="md" />
      <Subheading text={copy.subheading} type="primary" />
      <SectionBody
        image={image}
        topContent={topContent}
        bottomContent={bottomContent}
        type="imgRight"
      />
    </section>
  );
};

export default TuEspacioDeVida;

TuEspacioDeVida.propTypes = {};
