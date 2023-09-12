"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { Icon } from "@iconify/react";
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
    {
      name: "TypeScript \u00A0 \u00A0 Learning",
      expertise: 25,
      icon: "devicon:typescript",
    },
  ];

  return (
    <Fade cascade damping={0.4}>
  <h2 className="text-5xl font-semibold mb-4 text-center">My Skills</h2>
  <div className="w-full md:w-[80%] mx-auto min-h-[70vh] flex flex-wrap justify-center">
    {skills.map((skill, index) => (
      <div key={index} className="w-full sm:w-1/2 md:w-1/4 mb-6 sm:mb-8 md:mb-12 px-2">
        <div className="shadow-md p-4 rounded-lg h-full flex flex-col justify-between">
          <Reveal keyframes={customAnimation}>
            <p className="text-lg font-semibold text-center">{skill.name}</p>
          </Reveal>
          <Reveal keyframes={customImageAnimation}>
            <div className="flex justify-center my-4">
              <Icon icon={skill.icon} width="150" />
            </div>
          </Reveal>
          <div className="relative pt-1 mt-auto">
            <div className="flex h-2 mb-4 overflow-hidden text-xs rounded">
              <progress
                className="progress progress-primary w-full"
                value={skill.expertise}
                max="100"
              ></progress>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</Fade>

  );
};

export default Skills;
