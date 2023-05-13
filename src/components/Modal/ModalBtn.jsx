import React from "react";
import { useGlobalContext } from "../Context/Context";
import { ImPlay3 } from "react-icons/im";
import "./Modal.scss";
const ModalBtn = () => {
  const { modalHandler, openModal } = useGlobalContext();

  return (
    <div
      className={openModal ? "modal_btn active" : "modal_btn"}
      onClick={modalHandler}
    >
      <ImPlay3 />
    </div>
  );
};

export default ModalBtn;
