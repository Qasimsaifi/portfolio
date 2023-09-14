"use client"
import React from "react";
import { Fade } from "react-awesome-reveal";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
const customFromRightAnimation = keyframes`
from {
    opacity: 0;
    transform: translate3d(10px, -10px, 0);
    transition-timing-function: ease-out; /* Add easing for a smoother animation */
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition-timing-function: ease-in; /* Add easing for a smoother animation */
  }
}
`;
const customFromLeftAnimation = keyframes`
from {
    opacity: 0;
    transform: translate3d(-10px, -10px, 0);
    transition-timing-function: ease-out; /* Add easing for a smoother animation */
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition-timing-function: ease-in; /* Add easing for a smoother animation */
  }
}
`;
function About() {
  return (
    <Fade cascade damping={0.4} >
      <div className="py-12 mt-4 mb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Fade cascade damping={0.7} >
              <h2 className="text-3xl font-semibold  mb-6">About Me</h2></Fade>
            <Reveal keyframes={customFromLeftAnimation}>
              <p className="text-lg">
                Hey there! I'm Kasim Saifi, a full-stack web developer based in the
                vibrant city of Uttar Pradesh, India. I'm passionate about crafting
                digital experiences that are not only beautiful but also functional.
              </p></Reveal>
            <Reveal keyframes={customFromRightAnimation}>
              <p className="text-lg mt-4">
                My journey in web development began with a fascination for creating
                interactive websites. Over the years, I've honed my skills in
                front-end technologies like HTML, CSS, and JavaScript, and I'm
                equally comfortable working on the back end with Python and Node.js.
              </p></Reveal>
            <Reveal keyframes={customFromLeftAnimation}>
              <p className="text-lg mt-4">
                When I'm not coding, you can find me exploring the latest trends in
                web development, experimenting with new frameworks and libraries, or
                seeking inspiration from design and tech communities. I believe in
                the power of lifelong learning, and I'm always excited to take on
                new challenges.
              </p></Reveal>
            <Reveal keyframes={customFromRightAnimation}>
              <p className="text-lg mt-4">
                I'm here to bring your ideas to life and create web applications
                that leave a lasting impression. Let's collaborate and turn your
                vision into reality!
              </p></Reveal>
            <div className="mt-8">
              <a href="/contact">
                <button className="btn">Contact Me</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default About;
