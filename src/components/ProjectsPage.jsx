"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import ProjectCard from "./ProjectCard";
const customFromRightAnimation = keyframes`
from {
    opacity: 0;
    transform: translate3d(40px, -10px, 0);
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
    transform: translate3d(-30px, -10px, 0);
    transition-timing-function: ease-out; /* Add easing for a smoother animation */
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition-timing-function: ease-in; /* Add easing for a smoother animation */
  }
}
`;

const ProjectsPage = async ({ portfolioData }) => {
  return (
    <div className="container mx-auto max-w-screen-xl mt-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
        {portfolioData?.map((project, index) => (
          <Reveal
            keyframes={
              index % 2 === 0
                ? customFromLeftAnimation
                : customFromRightAnimation
            }
          >
            <ProjectCard key={index} project={project} />
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
