import React from "react";
import SectionHeading from "../components/atoms/SectionHeading/SectionHeading";
import BasicPageLayout from "../templates/BasicPageLayout";
import Subheading from "../components/atoms/Subheading/Subheading";

const home = () => {
  return (
    <BasicPageLayout>
      <section>
        <SectionHeading text="espacios de vida" type="main" />
        <Subheading
          text="CUÉNTAME QUÉ NECESITAS, YO LO ENCUENTRO"
          type="main"
        />
      </section>
    </BasicPageLayout>
  );
};

export default home;
