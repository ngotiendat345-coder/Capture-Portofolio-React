import React from "react";
import styled from "styled-components";
import home1 from "../img/home1.png";
import { motion } from "framer-motion";
import { About, Description, Hide, Image } from "../style";
import Wave from "./Waves";
const h2Varient = {
  hidden: {
    y: 200,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: "easeInOut",
    },
  },
};
const buttonVarient = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.75,
    },
  },
};
export const photoAnim = {
  hidden: { scale: 1.5, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.75,
    },
  },
};

function AboutSection() {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
          <motion.h2 variants={h2Varient}>we work to make</motion.h2>
          </Hide>
          <Hide>
          <motion.h2 variants={h2Varient}>
            your <span>dreams</span> come
          </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={h2Varient}>true.</motion.h2>
          </Hide>
          <motion.p variants={buttonVarient}>
            Contact us for any photography or videography ideas that you have.
            we have professionals with amazing skills.
          </motion.p>
          <motion.button variants={buttonVarient}>Contact us</motion.button>
        </motion.div>
      </Description>
      <Image>
      <motion.img
          variants={photoAnim}
          src={home1}
          alt="man with a camera"
        />
      </Image>
      <Wave/>
    </About>
  );
}

export default AboutSection;
