"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const customAnimation = keyframes`
from {
    opacity: 0;
    transform: translate3d(30px, -10px, 0);
    transition-timing-function: ease-out; /* Add easing for a smoother animation */
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition-timing-function: ease-in; /* Add easing for a smoother animation */
  }
}
`;
const customImageAnimation = keyframes`
from {
    opacity: 0;
    transform: translate3d(-40px, -10px, 0);
    transition-timing-function: ease-out; /* Add easing for a smoother animation */
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition-timing-function: ease-in; /* Add easing for a smoother animation */
  }
}
`;
const Skills = () => {
  // Define your skills and their expertise levels here
  const skills = [
    { name: "HTML", expertise: 90 },
    { name: "CSS", expertise: 85 },
    { name: "JavaScript", expertise: 80 },
    { name: "React", expertise: 75 },
    { name: "Node.js", expertise: 86 },
    { name: "Python", expertise: 60 },
    { name: "Svelte", expertise: 70 },
    { name: "Next.js", expertise: 85 },
    { name: "Express.js", expertise: 70 },
    { name: "MongoDB", expertise: 75 },
    { name: "SQL", expertise: 55 },
    { name: "Git", expertise: 80 },
    { name: "Redux", expertise: 80 },
    { name: "TypeScript \u00A0 \u00A0 Learning", expertise: 25 }

  ];

  return (
    <Fade cascade damping={0.4}>
      <h2 className="text-5xl font-semibold mb-4 text-center ">My Skills</h2>
      <div className="w-[80vw] mx-auto min-h-[70vh]">
        <Reveal keyframes={customImageAnimation}>
          <div className="flex flex-wrap ">
            {skills.map((skill, index) => (
              <div key={index} className="w-1/2 md:w-1/4 mb-4">
                <div className="shadow-md p-4 rounded-lg">
                  <Reveal keyframes={customAnimation}>
                    <p className="text-lg font-semibold">{skill.name}</p>
                  </Reveal>
                  <div className="relative pt-1">
                    <div className="flex h-2 mb-4 overflow-hidden text-xs rounded">
                      <progress
                        className="progress progress-primary  w-full"
                        value={skill.expertise}
                        max="100"
                      ></progress>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Fade>
  );
};

export default Skills;
