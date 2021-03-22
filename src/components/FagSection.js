import React from "react";
import { About } from "../style";
import styled from "styled-components";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import useScroll from './useScroll';
const containerVarient={
    hidden:{
        opacity:0,
        scale:1.2,
        transition:{
            duration:0.5
        }
    },
    show:{
        opacity:1,
        scale:1,
        transition:{
            duration:0.5
        }
    }
}
function FagSection() {
    const [element,controls] = useScroll()
  return (
    <Fag ref={element} variants={containerVarient} initial="hidden" animate={controls}>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How do I start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
              autem accusamus ex laboriosam porro, adipisci quam voluptatum
              magnam placeat corporis.
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
              autem accusamus ex laboriosam porro, adipisci quam voluptatum
              magnam placeat corporis.
            </p>
          </div>
        </Toggle>
        <Toggle title="Diferrent Payment Methods">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
              autem accusamus ex laboriosam porro, adipisci quam voluptatum
              magnam placeat corporis.
            </p>
          </div>
        </Toggle>
        <Toggle title="What Products do you offer.">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
              autem accusamus ex laboriosam porro, adipisci quam voluptatum
              magnam placeat corporis.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Fag>
  );
}

export default FagSection;

const Fag = styled(About)`
  display: block;
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
    span {
      display: block;
      font-weight: bold;
      color: #23d997;
    }
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p{
        padding:1rem 0;
    }
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
`;
