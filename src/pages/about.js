import React from "react";
import SectionHeading from "../components/atoms/SectionHeading/SectionHeading";
import BasicPageLayout from "../templates/BasicPageLayout";

const about = () => {
  return (
    <BasicPageLayout>
      <section>
        <SectionHeading text="Sobre mi" />
      </section>
    </BasicPageLayout>
  );
};

export default about;
