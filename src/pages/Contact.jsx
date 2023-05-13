import React, { useState, useEffect } from "react";
import Container from "../components/Container/Container";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { FaInstagram, FaGithub, FaFacebook } from "react-icons/fa";
import { useGlobalContext } from "../components/Context/Context";
import Title from "../components/Title/Title";
import Helmet from "../components/Helmet/Helmet";

const Contact = () => {
  const { skipContact, skipContactHandler, counter, skip } = useGlobalContext();
  const [social, setSocial] = useState(false);
  const socials = [
    {
      icon: <FaFacebook />,
      path: "https://www.facebook.com/moxsef/",
    },
    {
      icon: <FaInstagram />,
      path: "https://www.instagram.com/moxsef",
    },
    {
      icon: <FaGithub />,
      path: "https://www.github.com/monsef1234",
    },
  ];
  useEffect(() => {
    const unsub = setTimeout(() => {
      setSocial(true);
    }, 10000);
    return () => {
      clearTimeout(unsub);
    };
  }, []);
  return (
    <Helmet title={"contact"}>
      <div className="contact_container">
        <Container>
          <Title title={"Get in Touch"} />
          {!skipContact && (
            <>
              <div className="contact_content">
                <div>
                  <Typewriter
                    options={{
                      delay: 60,
                    }}
                    onInit={(typewriter) => {
                      typewriter
                        .pauseFor(1000)
                        .typeString(
                          "Do You Want To Know More About A <strong>Project</strong>, Or Are You Interseted In <strong>Collaborating?</strong> Just Want To Say <strong>Hi?</strong>"
                        )

                        .start();
                    }}
                  />
                </div>
                <motion.button
                  className="btn"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 9 } }}
                >
                  <a href="mailto:monsef4566@gmail.com">CONTACT ME!</a>
                </motion.button>
                {social && (
                  <div className="social_container">
                    <div>
                      <Typewriter
                        options={{
                          delay: 60,
                        }}
                        onInit={(typewriter) => {
                          typewriter.typeString("Or").start();
                        }}
                      />
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { delay: 1 } }}
                      className="socials"
                    >
                      {socials.map((social, index) => {
                        return (
                          <div key={index} className="social">
                            <a
                              href={social.path}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {social.icon}
                            </a>
                          </div>
                        );
                      })}
                    </motion.div>
                  </div>
                )}
              </div>
            </>
          )}
          {skipContact && (
            <>
              <div className="contact_content">
                <p>
                  Do You Want To Know More About A <strong>Project</strong>, Or
                  Are You Interseted In <strong>Collaborating?</strong> Just
                  Want To Say <strong>Hi?</strong>
                </p>

                <button className="btn">
                  <a href="mailto:monsef4566@gmail.com">CONTACT ME!</a>
                </button>
                <div className="social_container">
                  <p>Or</p>
                  <div className="socials">
                    {socials.map((social, index) => {
                      return (
                        <div key={index} className="social">
                          <a
                            href={social.path}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {social.icon}
                          </a>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </>
          )}
          {!skip && (
            <p className="skip" onClick={skipContactHandler}>
              Skip... {counter}
            </p>
          )}
        </Container>
      </div>
    </Helmet>
  );
};

export default Contact;
