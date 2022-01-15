import "../style/_index.scss";
import React from "react";
import Menu from "../components/atoms/Menu/Menu";
import Link from "../components/atoms/Link/Link";
import BasicPageLayout from "../templates/BasicPageLayout";

export default function Home() {
  return (
    <BasicPageLayout>
      <section>Inicio</section>
    </BasicPageLayout>
  );
}
