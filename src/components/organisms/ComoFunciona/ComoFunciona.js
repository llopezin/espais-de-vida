import React from "react";
import * as style from "./ComoFunciona.module.scss";
import copy from "./ComoFunciona.es.json";
import SectionBody from "../../molecules/SectionBody/SectionBody";
import Subheading from "../../atoms/Subheading/Subheading";
import Link from "../../atoms/Link/Link";
import SectionHeading from "../../atoms/SectionHeading/SectionHeading";
import Separator from "../../atoms/Separator/Separator";
import { StaticImage } from "gatsby-plugin-image";

const ComoFunciona = () => {
  const topContent = (
    <div className={style.content}>
      <Subheading text={copy.topContentHeading} type="secondary" />
      <p>{copy.topContentP1}</p>
    </div>
  );

  const bottomContent = (
    <div className={style.content}>
      <Subheading text={copy.bottomContentHeading} type="secondary" />
      <p>{copy.bottomContentP1}</p>
      <Link text="contacta" className="secondary" />
    </div>
  );

  const image = (
    <StaticImage
      src="../../../images/sofa.jpg"
      alt=""
      imgClassName={style.image}
    />
  );

  return (
    <section>
      <SectionHeading text={copy.title} type="standard" />
      <Separator length="md" />
      <SectionBody
        image={image}
        topContent={topContent}
        bottomContent={bottomContent}
        type="imgLeft"
      />
    </section>
  );
};

export default ComoFunciona;

ComoFunciona.propTypes = {};
