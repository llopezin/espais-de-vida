import React from "react";
import SectionHeading from "../components/atoms/SectionHeading/SectionHeading";
import BasicPageLayout from "../templates/BasicPageLayout";
import Subheading from "../components/atoms/Subheading/Subheading";
import Separator from "../components/atoms/Separator/Separator";
import SectionBody from "../components/molecules/SectionBody/SectionBody";
import ComoFunciona from "../components/organisms/ComoFunciona/ComoFunciona";
import TuEspacioDeVida from "../components/organisms/TuEspacioDeVida/TuEspacioDeVida";

const home = () => {
  return (
    <BasicPageLayout>
      <section>
        <SectionHeading text="espacios de vida" type="main" />
        <Separator length="lg" />
        <Subheading
          text="CUÉNTAME QUÉ NECESITAS, YO LO ENCUENTRO"
          type="main"
        />
      </section>
      <TuEspacioDeVida />
      <ComoFunciona />
    </BasicPageLayout>
  );
};

export default home;
