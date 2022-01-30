import React from "react";
import SectionHeading from "../components/atoms/SectionHeading/SectionHeading";
import BasicPageLayout from "../templates/BasicPageLayout";
import Subheading from "../components/atoms/Subheading/Subheading";
import Separator from "../components/atoms/Separator/Separator";
import ComoFunciona from "../components/organisms/ComoFunciona/ComoFunciona";
import TuEspacioDeVida from "../components/organisms/TuEspacioDeVida/TuEspacioDeVida";
import MainImagesGrid from "../components/atoms/MainImagesGrid/MainImagesGrid";
import Section from "../components/atoms/Section/Section";

const home = () => {
  return (
    <BasicPageLayout>
      <Section type='main'>
        <MainImagesGrid />
        <SectionHeading text="espacios de vida" type="main" />
        <Separator length="lg" />
        <Subheading
          text="CUÉNTAME QUÉ NECESITAS, YO LO ENCUENTRO"
          type="main"
        />
      </Section>
      <TuEspacioDeVida />
      <ComoFunciona />
    </BasicPageLayout>
  );
};

export default home;
