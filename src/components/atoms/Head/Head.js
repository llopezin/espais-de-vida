import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const Head = ({ title, description }) => {
  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
    >
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="inmobiliaria, casas, chalet, valencia, javea, comprar"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
  );
};

export default Head;

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
