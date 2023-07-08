import useTypewriter from "@/utils/Typewritter";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ThemeSwitch from "./ThemeSwitch";

const Homepage = () => {


  function Typewriter(props) {
    const currentText = useTypewriter(props.texts, props.speed);
    return <span>{currentText}</span>;
  }

  return (
    <div className="flex flex-home items-center justify-center min-h-screen dark:bg-black bg-gray-100">

      
      <div className="text-center">
        <h1 className="text-5xl sm:text-5xl md:text-8xl font-bold text-purple-500">Hi, I'm Qasim</h1>
        <h2 className="text-3xl sm:text-5xl md:text-6xl mt-2text-black text-black dark:text-white">
          I'm a Web <Typewriter texts={["Developer", "Designer", "Engineer"]} speed={220} />|
        </h2>

        <div className="flex flex-row justify-around mt-14">
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Contact</button>
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">About</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
