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
  const skills = [
    { name: "HTML", expertise: 90, icon: "vscode-icons:file-type-html" },
    { name: "CSS", expertise: 85, icon: "vscode-icons:file-type-css" },
    { name: "JavaScript", expertise: 80, icon: "vscode-icons:file-type-js-official" },
    { name: "React", expertise: 75, icon: "devicon:react" },
    { name: "Node.js", expertise: 86, icon: "logos:nodejs-icon" },
    { name: "Python", expertise: 60, icon: "logos:python" },
    { name: "Svelte", expertise: 70, icon: "devicon:svelte" },
    { name: "Next.js", expertise: 85, icon: "logos:nextjs-icon" },
    { name: "Express.js", expertise: 70, icon: "skill-icons:expressjs-light" },
    { name: "MongoDB", expertise: 75, icon: "devicon:mongodb" },
    { name: "SQL", expertise: 55, icon: "tabler:sql" },
    { name: "Git", expertise: 80, icon: "devicon:git" },
    { name: "Redux", expertise: 80, icon: "devicon:redux" },
    
  ];
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
            Hey there! I'm Kasim Saifi, a passionate developer and creative problem
            solver based in the picturesque town of Gawan, located in Sambhal, Uttar Pradesh, India.
          </p>
        </Reveal>
        <Reveal keyframes={customFromRightAnimation}>
          <p className="text-lg mt-4">
            My journey in web development started with a simple curiosity that
            blossomed into a deep passion for crafting remarkable online
            experiences. I specialize in various technologies, and here are some of
            my key skills:
          </p>
        </Reveal>
        <div className="mt-6 flex flex-wrap justify-center">
          {skills.map((skill, index) => (
            <div key={index} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 mb-6 px-2">
              <div className="text-center">
                <i className={skill.icon} style={{ fontSize: "2rem" }}></i>
                <h3 className="text-lg font-semibold mt-2">{skill.name}</h3>
                <p className="text-sm">Expertise: {skill.expertise}%</p>
              </div>
            </div>
          ))}
        </div>
        <Reveal keyframes={customFromLeftAnimation}>
          <p className="text-lg mt-6">
            When I'm not immersed in code, you'll find me exploring the
            ever-evolving landscape of web development, experimenting with new
            tools and techniques, and finding inspiration in the dynamic worlds
            of design and technology. Lifelong learning is not just a motto for
            me; it's a way of life.
          </p>
        </Reveal>
        <Reveal keyframes={customFromRightAnimation}>
          <p className="text-lg mt-4">
            As a passionate developer, I thrive on the excitement of turning
            ideas into reality. My expertise lies in creating web applications
            that are not only functional but also visually stunning. Let's
            collaborate and bring your vision to life!
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
