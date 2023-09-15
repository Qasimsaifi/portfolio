"use client";
import React, { useState, useEffect } from "react";https://github.com/Qasimsaifi/portfolio/pull/7/conflict?name=src%252Fcomponents%252FHero.jsx&ancestor_oid=d4de8c3df0ee998da201eeaa2a09f2b281e2e818&base_oid=31642e11e64cc39f961fe79467d01e05a5b420ba&head_oid=dbc8fd4296ec577bcdc65f1921ef6003eefb7e0e
import Typewriter from "typewriter-effect";
import { Fade } from "react-awesome-reveal";
import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import Image from "next/image";

const customAnimation = keyframes`
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
const customImageAnimation = keyframes`
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
const Hero = () => {
  const [titles, setTitles] = useState([
    "Frontend Developer",
    "Backend Developer",
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, [6000]); // Pause for 2 seconds between titles

    return () => clearTimeout(timeout);
  }, [titles, currentIndex]);

  return (
    <Fade cascade damping={0.2}>
      <div className="hero min-h-[92vh]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Reveal keyframes={customImageAnimation}>
            <div className="avatar">
              <div className="w-[30vw] rounded-full">
                <Image
                  src="/author.png"
                  alt=""
                  width={300}
                  height={300}
                  className="mask mask-circle bg-primary"
                />
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal keyframes={customAnimation}>
              <h1 className="text-5xl font-bold mb-6">Hi, I'm Kasim Saifi</h1>

              <h1 className="text-5xl font-bold">
                <Typewriter
                  options={{
                    strings: [titles[currentIndex]],
                    autoStart: true,
                    loop: true,
                    typeSpeed: 50, // Adjust the typing speed (in milliseconds)
                    deleteSpeed: 50, // Adjust the deleting speed (in milliseconds)
                  }}
                />
              </h1>
              <p className="py-6">
                Hi, I'm Kasim Saifi, a full-stack web developer from Uttar
                Pradesh, India. Proficient in HTML, CSS, JavaScript, React,
                Next.js, Svelte, Python, and Node.js. I specialize in creating
                user-friendly, visually appealing web solutions. Let's elevate
                your web applications together!
              </p>

              <button className="btn btn-primary">My Work</button>
            </Reveal>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Hero;
