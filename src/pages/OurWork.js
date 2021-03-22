import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
//Animations
import { motion } from "framer-motion";
import {
  sliderContainer,
  slider,
  pageAnimation,
  Fade,
  photoAnim,
  LineAnim,
} from "../animation";
import useScroll from "../components/useScroll";
const workVariant={
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
}
const containerSlide={
  hidden:{
    opacity:1,
  },
  show:{
    opacity:1,
    transition:{
      ease: "easeOut" ,
      staggerChildren:0.15,
      
    }
  }
}
const slideVariant={
  hidden:{
    x:"-130%",
    skew:"45deg"
  },
  show:{
    opacity:1,
    x:"100%",
    skew:"0deg",
    transition:{
      duration:1,
      ease:"easeOut"
    }
  }
};
const fade = {
  hidden:{
    opacity:0
  },
  show:{
    opacity:1,
    transition:{
      duration:0.5,
    }
  }
}
const lineVariant={
  hidden:{
    width:"0%",
  },
  show:{
    width:"100%",
    transition:{
      duration:1
    }
  }
}
const photoVariant={
  hidden:{
    scale:1.5,
    opacity:0
  },
  show:{
    opacity:1,
    scale:1,
    transition:{
      duration:0.5
    }
  }
}
const OurWork = () => {
   const [element, controls] = useScroll();
   const [element2, controls2] = useScroll();
  return (
    <Work variants={workVariant} initial="hidden" animate="show" style={{background:"#fff"}}>
      <motion.div variants={containerSlide} >
        <Frame1 variants={slideVariant}></Frame1>
        <Frame2 variants={slideVariant}></Frame2>
        <Frame3 variants={slideVariant}></Frame3>
        <Frame4 variants={slideVariant}></Frame4>
      </motion.div>
      <Movie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div className="line" variants={lineVariant}></motion.div>
        <Hide>
            <motion.img variants={photoVariant} src={athlete} alt="athlete"/>
        </Hide>
      </Movie>
      <Movie ref={element} variants={fade} initial="hidden" animate={controls}>
        <h2>The Racer</h2>
        <motion.div className="line" variants={lineVariant}></motion.div>
        <img src={theracer} alt="theracer"/>
      </Movie>
      <Movie ref={element2} variants={fade} initial="hidden" animate={controls2}>
        <h2>The Racer</h2>
        <motion.div className="line" variants={lineVariant}></motion.div>
        <img src={goodtimes} alt="goodtimes"/>
      </Movie>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }

  h2 {
    padding: 1rem 0rem;
  }
`;
const Movie = styled(motion.div)`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;
