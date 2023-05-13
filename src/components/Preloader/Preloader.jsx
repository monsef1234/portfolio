import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import "./PreLoader.scss";
import { useGlobalContext } from "../Context/Context";
const preLoaderVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.5,
      duration: 1,
    },
  },
};
const textVariant = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
const Preloader = () => {
  const { setPreLoaderShow, preLoaderShow } = useGlobalContext();
  //   useEffect(() => {
  //     setTimeout(() => {
  //       setPreLoaderShow(false);
  //     }, 3000);
  //   }, []);
  return (
    <>
      <AnimatePresence>
        {preLoaderShow && (
          <motion.div exit={{ opacity: 0 }} className="preloader">
            <motion.h1
              variants={preLoaderVariant}
              initial={"hidden"}
              animate={"visible"}
            >
              <motion.span variants={textVariant}>Made</motion.span>
              <motion.span variants={textVariant}>With</motion.span>
              <motion.span variants={textVariant}>Keyboard</motion.span>
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Preloader;
