import React from "react";

const Heading = ({ type, text }) => {
  return <h1 className={`${type}`}>{text}</h1>;
};

export default Heading;
