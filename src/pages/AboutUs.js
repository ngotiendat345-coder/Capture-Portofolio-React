import React from "react";
import { motion } from "framer-motion";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FagSection from "../components/FagSection";
const containerVarient = {
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
};
function AboutUs() {
  return (
    <motion.div variants={containerVarient} initial="hidden" animate="show">
      <AboutSection />
      <ServicesSection />
      <FagSection/>
    </motion.div>
  );
}

export default AboutUs;
