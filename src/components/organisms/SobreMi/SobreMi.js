import React from "react";
import * as style from "./SobreMi.module.scss";
import copy from "./SobreMi.json";
import SectionBody from "../../molecules/SectionBody/SectionBody";
import SectionHeading from "../../atoms/SectionHeading/SectionHeading";
import Separator from "../../atoms/Separator/Separator";
import { StaticImage } from "gatsby-plugin-image";
import Subheading from "../../atoms/Subheading/Subheading";

const SobreMi = () => {
  const topContent = (
    <div className={style.content}>
      <SectionHeading
        text="Cada persona necesita un espacio de vida diferente..."
        type="single"
      />
      <Separator length="md" position="left" />
      <Subheading
        text="Un espacio que se ajuste a sus necesidades del día a día"
        type="secondary"
      />
      {copy.topContentPs.map((text, i) =>
        i === 4 ? (
          <>
            <Separator /> <p className="quote">{text}</p> <Separator />
          </>
        ) : (
          <p>{text}</p>
        )
      )}
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
