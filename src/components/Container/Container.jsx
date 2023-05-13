import React from "react";
import "./Container.scss";
const Container = ({ children }) => {
  return <div className="section_container">{children}</div>;
};

export default Container;
