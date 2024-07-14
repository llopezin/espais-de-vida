import React from "react";
import BasicPageLayout from "../templates/BasicPageLayout";
import SobreMi from "../components/organisms/SobreMi/SobreMi";
import Head from "../components/atoms/Head/Head";

const about = () => {
  return (
    <>
      <Head title="Sobre mi" description="" />
      <BasicPageLayout>
        <SobreMi />
      </BasicPageLayout>
    </>
  );
};

export default about;
