import React from "react";
import SectionHeading from "../components/atoms/SectionHeading/SectionHeading";
import BasicPageLayout from "../templates/BasicPageLayout";

const about = () => {
  return (
    <BasicPageLayout>
      <section>
        <SectionHeading text="una frase corta sobre ti" type="single" />
      </section>
    </BasicPageLayout>
  );
};

export default about;
