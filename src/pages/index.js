import BasicPageLayout from "../templates/BasicPageLayout";
import ComoFunciona from "../components/organisms/ComoFunciona/ComoFunciona";
import Head from "../components/atoms/Head/Head";
import MainImagesGrid from "../components/atoms/MainImagesGrid/MainImagesGrid";
import React from "react";
import Section from "../components/atoms/Section/Section";
import SectionHeading from "../components/atoms/SectionHeading/SectionHeading";
import Separator from "../components/atoms/Separator/Separator";
import Subheading from "../components/atoms/Subheading/Subheading";
import TuEspacioDeVida from "../components/organisms/TuEspacioDeVida/TuEspacioDeVida";

const home = () => {
  return (
    <>
      <Head
        title="Espacios de vida"
        description="Encuentra tu espacio de vida en Valencia o Javea. Una casa cerca del mar, un piso acogedor con sitio para toda la familia, un espacio luminoso..."
      />

      <BasicPageLayout>
        <Section type="main">
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
    </>
  );
};

export default home;
