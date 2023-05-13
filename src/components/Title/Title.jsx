import React from "react";
import Typewriter from "typewriter-effect";

import "./Title.scss";
const Title = ({ title }) => {
  return (
    <h1>
      <Typewriter
        options={{
          delay: 40,
        }}
        onInit={(typewriter) => {
          typewriter.typeString(`<span class='num'>.</span>${title}`).start();
        }}
      />
    </h1>
  );
};

export default Title;
