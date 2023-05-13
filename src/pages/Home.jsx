import React, { useEffect, useRef, useState } from "react";
import Typewriter from "typewriter-effect";
import Container from "../components/Container/Container";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useGlobalContext } from "../components/Context/Context";
import music from "../assets/audio/Im Sexy And I Know It Ringtone.mp3";
import me from "../assets/img/20221229_221549.jpg";
import "./styles.scss";
import Helmet from "../components/Helmet/Helmet";
const menuVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 15,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};
const linkVariant = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
const Home = () => {
  const age = new Date().getFullYear() - 2001;
  const { skipHome, links, skipHomeHanlder, counter, skip } =
    useGlobalContext();
  const audio = new Audio(music);
  const ref = useRef(null);
  const mouseHandler = (e) => {
    const { clientX, clientY } = e;
    const mouseX = clientX - ref.current.clientWidth / 2;
    const mouseY = clientY - ref.current.clientHeight / 2;
    ref.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  };
  const imgOpen = () => {
    ref.current.classList.add("active");

    audio.play();
  };
  const imgClose = () => {
    audio.pause();
    audio.currentTime = 0;
    ref.current.classList.remove("active");
  };
  useEffect(() => {
    document.addEventListener("mousemove", mouseHandler);
    return () => {
      document.removeEventListener("mousemove", mouseHandler);
    };
  }, []);
  return (
    <Helmet title={"home"}>
      <div className="home_container">
        <img ref={ref} src={me} alt="ME" />
        <Container>
          {!skipHome && (
            <>
              <div className="about_wrapper">
                <Typewriter
                  options={{
                    delay: 40,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("<span class='hello'>Hello! 😃</span> <br />")
                      .pauseFor(1000)
                      .typeString(
                        `My name is <strong class='name'>Bouras Moncef Sofiane</strong>, I am <strong>${age}</strong> years old, I study <strong>Computer Science</strong> in <strong>Batna, Algeria</strong>, I started coding back in <strong>2020</strong> when my teacher gave us a homework to do talking about <strong>making a WEBSITE</strong>, That's where my journey started...`
                      )
                      .start();
                  }}
                />
              </div>
              <div className="menu_container">
                <nav className="menu_wrapper">
                  <motion.ul
                    variants={menuVariant}
                    initial="hidden"
                    animate="visible"
                    className="menu"
                  >
                    {links
                      .filter((link) => link.path !== "/")
                      .map((link, index) => {
                        return (
                          <motion.li variants={linkVariant} key={index}>
                            <Link to={link.path} onClick={link?.func}>
                              {link.name}
                            </Link>
                          </motion.li>
                        );
                      })}
                  </motion.ul>
                </nav>
              </div>
            </>
          )}
          {skipHome && (
            <>
              <div className="about_wrapper">
                <p>
                  <span className="hello">Hello! 😃</span>
                  <br /> My name is{" "}
                  <strong className="name">Bouras Moncef Sofiane</strong>, I am{" "}
                  <strong>{age}</strong> years old, I study{" "}
                  <strong>Computer Science</strong> in{" "}
                  <strong>Batna, Algeria</strong>, I started coding back in{" "}
                  <strong>2020</strong> when my teacher gave us a homework to do
                  talking about <strong>making a WEBSITE</strong>, That's where
                  my journey started... <br />
                  Start discover my Portfolio <strong>don't be SHY!!</strong>.
                </p>
              </div>
              <div className="menu_container">
                <nav className="menu_wrapper">
                  <ul className="menu">
                    {links
                      .filter((link) => link.path !== "/")
                      .map((link, index) => {
                        return (
                          <motion.li variants={linkVariant} key={index}>
                            <Link to={link.path} onClick={link?.func}>
                              {link.name}
                            </Link>
                          </motion.li>
                        );
                      })}
                  </ul>
                </nav>
              </div>
            </>
          )}

          {!skip && (
            <p className="skip" onClick={skipHomeHanlder}>
              Skip... {counter}
            </p>
          )}
          <motion.small
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 3 } }}
            className="me"
            onMouseEnter={imgOpen}
            onMouseLeave={imgClose}
          >
            PS: Hover me if you want to see me
          </motion.small>
        </Container>
      </div>
    </Helmet>
  );
};

export default Home;
