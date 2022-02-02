import React from "react";
import Footer from "../components/organisms/Footer/Footer";
import Header from "../components/organisms/Header/Header";

const BasicPageLayout = ({ hasHeader = true, hasFooter = true, children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default BasicPageLayout;
