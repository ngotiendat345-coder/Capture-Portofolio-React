import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    y: 300,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.25,
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};
const titleVariants = {
  hidden: {
    y: 200,
  },
  show: {
    y: 0,
    transition: {
      duration: 0.75,
      ease: "easeInOut",
    },
  },
};
function ContactUs() {
  return (
    <ContactStyle
      variants={containerVariants}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleVariants}>Get in touch.</motion.h2>
        </Hide>
      </Title>
      <Hide>
        <Social variants={titleVariants}>
        <Circle></Circle>
          <h2 >
            Send Us A Message
          </h2>
        </Social>
      </Hide>
      <Hide>
        <Social variants={titleVariants}>
          <Circle></Circle>
          <h2 >Send an email.</h2>
        </Social>
      </Hide>
      <Hide>
        <Social  variants={titleVariants}>
          <Circle></Circle>
          <h2>Social Media</h2>
        </Social>
      </Hide>
    </ContactStyle>
  );
}

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1500px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;
const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 1500px) {
    margin-top: 5rem;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;

export default ContactUs;
