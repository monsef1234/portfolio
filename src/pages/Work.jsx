import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Container from "../components/Container/Container";
import Title from "../components/Title/Title";
import Works from "../components/Works/Works";
import "./styles.scss";
import { client } from "../../lib/client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import Helmet from "../components/Helmet/Helmet";
const worksVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 2.5,
      when: "beforeChildren",
      staggerChildren: 1,
    },
  },
};

const Work = () => {
  const [workData, setWorkData] = useState(null);

  useEffect(() => {
    const query = `*[_type == "work"] {
      languages,
      codeLink,
      liveDemo,
      projectName,
      description
    }`;
    client.fetch(query).then((data) => {
      setWorkData(data);
    });
  }, []);
  return (
    <Helmet title={"works"}>
      <div className="work_container">
        <Container>
          <Title title={"Some Things I've Built"} />
          <div className="works_wrapper">
            <motion.div
              className="works"
              variants={worksVariants}
              initial="hidden"
              animate="visible"
            >
              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
              >
                {workData &&
                  workData.map((work, idx) => {
                    return (
                      <SwiperSlide className="work_box" key={idx}>
                        <Works data={work} key={idx} />
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </motion.div>
          </div>
        </Container>
      </div>
    </Helmet>
  );
};

export default Work;
