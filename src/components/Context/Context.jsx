import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
export const PortfolioCtx = createContext();
const AppProvider = ({ children }) => {
  const [skipHome, setSkipHome] = useState(false);
  const [skipContact, setSkipContact] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openBtn, setOpenBtn] = useState(false);
  const [heightModal, setHeightModal] = useState("");
  const [skip, setSkip] = useState(false);
  const [counter, setCounter] = useState(5);

  useEffect(() => {
    const unsub = setInterval(() => {
      setCounter((i) => i - 1);
    }, 1000);
    if (counter === 0) {
      clearInterval(unsub);
      setSkip(true);
    }
    return () => {
      clearInterval(unsub);
    };
  }, [counter]);
  const links = [
    {
      name: "Home",
      path: "/",
      func: () => {
        setSkipContact(false);
        setCounter(5);
        setSkip(false);
      },
    },
    {
      name: "My Work",
      path: "/work",
      func: () => {
        setSkipHome(false);
        setSkipContact(false);
        setSkip(false);
        setCounter(5);
      },
    },
    {
      name: "Contact Me",
      path: "/contact",
      func: () => {
        setSkipHome(false);
        setCounter(5);
        setSkip(false);
      },
    },
  ];
  const ModalBtnCheck = (name) => {
    setHeightModal(document.documentElement.offsetHeight);
    if (name !== "/") {
      setOpenBtn(true);
    } else {
      setOpenBtn(false);
    }
  };
  const skipHomeHanlder = () => {
    setSkipHome(true);
    setCounter(5);
    setSkip(true);
  };
  const skipContactHandler = () => {
    setSkipContact(true);
    setCounter(5);
    setSkip(true);
  };
  const modalHandler = () => {
    setOpenModal(!openModal);
  };
  return (
    <PortfolioCtx.Provider
      value={{
        skipHomeHanlder,
        links,
        skipHome,
        modalHandler,
        openModal,
        setOpenModal,
        openBtn,
        ModalBtnCheck,
        heightModal,
        skipContact,
        skipContactHandler,
        counter,
        skip,
      }}
    >
      {children}
    </PortfolioCtx.Provider>
  );
};

export default AppProvider;
export const useGlobalContext = () => {
  return useContext(PortfolioCtx);
};
