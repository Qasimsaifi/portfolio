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
const ProjectCard = ({ project }) => {
  return (
    <Fade cascade damping={0.4}>
      {/* <Reveal keyframes={customFromLeftAnimation}> */}
      <div className="card shadow-xl rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <div className="relative">
          <img
            className="w-full object-cover object-center"
            src={project.project_image_path}
            alt={project.project_name}
          />

          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
            <Fade cascade damping={0.14}>
              <div className="text-center">
                <h2 className="font-bold ">{project.project_name}</h2>
                <p className="text-base ">{project.project_description}</p>
                <a
                  className="btn btn-sm mt-4"
                  href={project.project_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit
                </a>
              </div>
            </Fade>
          </div>
        </div>
      </div>
      {/* </Reveal> */}
    </Fade>
  );
};

export default ProjectCard;
