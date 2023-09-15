"use client";
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
    <Fade cascade damping={0.4}>
      <div className="py-12 mt-4 mb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Fade cascade damping={0.7}>
              <h2 className="text-3xl font-semibold mb-6">About Me</h2>
            </Fade>
            <Reveal keyframes={customFromLeftAnimation}>
              <p className="text-lg">
                Hey there! I'm Kasim Saifi, and I'm more than just a web
                developer. I'm a creative problem solver based in the
                picturesque town of Gawan, located in Sambhal, Uttar Pradesh,
                India.
              </p>
            </Reveal>
            <Reveal keyframes={customFromRightAnimation}>
              <p className="text-lg mt-4">
                My journey in web development started with a simple curiosity
                that blossomed into a passion for crafting remarkable online
                experiences. I specialize in front-end technologies like HTML,
                CSS, and JavaScript, but I'm equally proficient in the back end
                with Python and Node.js.
              </p>
            </Reveal>
            <Reveal keyframes={customFromLeftAnimation}>
              <p className="text-lg mt-4">
                When I'm not immersed in code, you'll find me exploring the
                ever-evolving landscape of web development, experimenting with
                new tools and techniques, and finding inspiration in the dynamic
                worlds of design and technology. Lifelong learning is not just a
                motto for me; it's a way of life.
              </p>
            </Reveal>
            <Reveal keyframes={customFromRightAnimation}>
              <p className="text-lg mt-4">
                As a passionate developer, I thrive on the excitement of turning
                ideas into reality. My expertise lies in creating web
                applications that are not only functional but also visually
                stunning. Let's collaborate and bring your vision to life!
              </p>
            </Reveal>
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
