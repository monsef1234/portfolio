import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context/Context";
import "./Modal.scss";
const Modal = () => {
  const { openModal, setOpenModal, links, heightModal } = useGlobalContext();

  return (
    <div className={openModal ? "modal open" : "modal"}>
      <div className="modal_content">
        <div className="links">
          <ul className="menu">
            {links.map((link, index) => {
              return (
                <li
                  onClick={() => {
                    setOpenModal(false);
                    link?.func();
                  }}
                  key={index}
                >
                  <Link to={link.path}>{link.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Modal;
