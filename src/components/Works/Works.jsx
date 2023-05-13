import React from "react";
import { AiOutlineFolder } from "react-icons/ai";
import { BiLink } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import "./Works.scss";
const Works = ({ data }) => {
  return (
    <>
      <div className="work_top">
        <div className="folder">
          <AiOutlineFolder />
        </div>
        <div className="links">
          <a
            title="Github"
            href={data.codeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub />
          </a>
          <a
            title="Live Demo"
            href={data.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLink />
          </a>
        </div>
      </div>
      <div className="work_info">
        <div className="name">
          <h2>{data.projectName}</h2>
        </div>
        <div className="desc">
          <p>{data.description}</p>
        </div>
      </div>
      <div className="work_bottom">
        {data.languages.map((i, idx) => {
          return <span key={idx}>{i}</span>;
        })}
      </div>
    </>
  );
};

export default Works;
