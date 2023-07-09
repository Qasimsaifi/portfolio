import React from 'react';
import useTypewriter from '@/utils/Typewritter';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const Homepage = () => {
  function Typewriter(props) {
    const currentText = useTypewriter(props.texts, props.speed);
    return <span>{currentText}</span>;
  }

  return (
    <>
      <div className="flex flex-col-reverse sm:flex-row items-center justify-center min-h-screen dark:bg-black bg-white">
        <div className="text-center sm:mr-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-purple-500">Hi, I'm Qasim</h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-8 text-gray-800 dark:text-white">
            I'm a <Typewriter texts={['Developer', 'Designer', 'Engineer']} speed={220} />
          </h2>
          
          <div className="mt-4">
            <button className="bg-purple-500 text-white py-2 px-4 rounded-full shadow-lg font-medium hover:bg-purple-600 transition-colors duration-300">Contact Me</button>
          </div>
        </div>
        <div className="mt-4 sm:mt-0">
          <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 opacity-75 rounded-full" />
            <Image
              src="/profile-image.png"
              alt="Your Photo"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
