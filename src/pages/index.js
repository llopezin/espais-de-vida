import React from "react";
import SectionHeading from "../components/atoms/SectionHeading/SectionHeading";
import BasicPageLayout from "../templates/BasicPageLayout";

const home = () => {
  return (
    <BasicPageLayout>
      <section>
        <SectionHeading text="espacios de vida" type="main" />
      </section>
    </BasicPageLayout>
  );
};

export default home;
