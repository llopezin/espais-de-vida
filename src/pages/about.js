import React from "react";
import SectionHeading from "../components/atoms/SectionHeading/SectionHeading";
import BasicPageLayout from "../templates/BasicPageLayout";
import Subheading from "../components/atoms/Subheading/Subheading";
import Separator from "../components/atoms/Separator/Separator";
import SobreMi from "../components/organisms/SobreMi/SobreMi";

const about = () => {
  return (
    <BasicPageLayout>
      <SobreMi />
    </BasicPageLayout>
  );
};

export default about;
