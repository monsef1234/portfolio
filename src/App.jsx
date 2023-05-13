import React from "react";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useGlobalContext } from "./components/Context/Context";
import Cursor from "./components/Cursor/Cursor";
import Modal from "./components/Modal/Modal";
import ModalBtn from "./components/Modal/ModalBtn";
import ParticleBg from "./components/ParticleBg/ParticleBg";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Work from "./pages/Work";
import "swiper/css";
import "swiper/css/effect-cards";
const App = () => {
  const { openBtn } = useGlobalContext();
  const { ModalBtnCheck } = useGlobalContext();
  const { pathname } = useLocation();
  useEffect(() => {
    ModalBtnCheck(pathname);
  }, [pathname]);
  return (
    <>
      {openBtn && <ModalBtn />}
      {openBtn && <Modal />}
      <Cursor />
      <ParticleBg />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="work" element={<Work />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
