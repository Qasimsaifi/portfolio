"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
const customFromRightAnimation = keyframes`
from {
    opacity: 0;
    transform: translate3d(10px, -0px, 0);
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
    transform: translate3d(-10px, -0px, 0);
    transition-timing-function: ease-out; /* Add easing for a smoother animation */
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition-timing-function: ease-in; /* Add easing for a smoother animation */
  }
}
`;
const customFromBottomAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
    transition-timing-function: ease-out; /* Add easing for a smoother animation */
  }

  to {
    opacity: 1;
    transform: translateY(0);
    transition-timing-function: ease-in; /* Add easing for a smoother animation */
  }
}
`;
const customFromTopAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
    transition-timing-function: ease-out; /* Add easing for a smoother animation */
  }

  to {
    opacity: 1;
    transform: translateY(0);
    transition-timing-function: ease-in; /* Add easing for a smoother animation */
  }
}
`;
// Input component
export const InputFieldFromLeft = ({ name, placeholder }) => {
  return (
    <Fade cascade damping={0.7}>
      <div className="mb-4">
        <Reveal keyframes={customFromLeftAnimation}>
          <label className="block text-sm font-bold mb-2">{placeholder}</label>
          <input
            type="text"
            placeholder={`Type your ${placeholder.toLowerCase()}`}
            className="input input-bordered w-full max-w-sm"
            name={name}
          />
        </Reveal>
      </div>
    </Fade>
  );
};
export const InputFieldFromRight = ({ name, placeholder }) => {
  return (
    <Fade cascade damping={0.7}>
      <div className="mb-4">
        <Reveal keyframes={customFromRightAnimation}>
          <label className="block text-sm font-bold mb-2">{placeholder}</label>
          <input
            type="text"
            placeholder={`Type your ${placeholder.toLowerCase()}`}
            className="input input-bordered w-full max-w-sm"
            name={name}
          />
        </Reveal>
      </div>
    </Fade>
  );
};
// Textarea component
export const TextareaField = ({ name, placeholder }) => {
  return (
    <Fade cascade damping={0.7}>
      <div className="mb-4">
        <Reveal keyframes={customFromBottomAnimation}>
          <label className="block text-sm font-bold mb-2">{placeholder}</label>
          <textarea
            className="textarea textarea-bordered w-full max-w-sm"
            placeholder={`Your ${placeholder.toLowerCase()}`}
            name={name}
          ></textarea>
        </Reveal>
      </div>
    </Fade>
  );
};
export const FromButton = () => {
  const { pending } = useFormStatus();
  return (
    <Fade cascade damping={0.7}>
      <Reveal keyframes={customFromBottomAnimation}>
        <button
          type="submit"
          className="btn w-full max-w-sm"
          disabled={pending}
        >
          {pending ? "Submitting..." : "Submit"}
        </button>
      </Reveal>
    </Fade>
  );
};
export const FadeContainer = ({ children }) => {
  return (
    <Fade cascade damping={0.7}>
      <Reveal keyframes={customFromBottomAnimation}>{children}</Reveal>
    </Fade>
  );
};
