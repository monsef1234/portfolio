import React from "react";

const Helmet = ({ children, title }) => {
  document.title = `monsef - ${title}`;
  return <>{children}</>;
};

export default Helmet;
