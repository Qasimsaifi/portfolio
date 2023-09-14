"use client";
import { useTheme } from "./ThemeContext";
import { FaMoon, FaSun, FaStar, FaHeart } from "react-icons/fa";

export default function ThemeChanger() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    let newTheme = 'luxury'; // Default to luxury theme

    // Define the order of themes
    const themeOrder = ['luxury', 'light', 'dark', 'valentine'];

    // Find the current theme's index and get the next theme
    const currentIndex = themeOrder.indexOf(theme);
    if (currentIndex !== -1) {
      const nextIndex = (currentIndex + 1) % themeOrder.length;
      newTheme = themeOrder[nextIndex];
    }

    setTheme(newTheme);
  };

  // Define icons for each theme
  const themeIcons = {
    luxury: <FaStar className="text-xl" />,
    light: <FaSun className="text-xl" />,
    dark: <FaMoon className="text-xl" />,
    valentine: <FaHeart className="text-xl"/>,
  };

  return (
    <button onClick={toggleTheme} className="btn">
      {themeIcons[theme]}
    </button>
  );
}

