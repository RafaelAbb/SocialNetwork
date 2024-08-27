// src/components/DarkLight.js
import React, { useContext } from 'react';
import { IoSunny, IoMoon } from 'react-icons/io5';
import { DarkModeContext } from './context/DarkModeContext'; // Import the context

const DarkLight = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext); // Use context

  return (
    <button
      onClick={toggleDarkMode}
      className={`flex items-center w-12 h-6 px-1 rounded-full border border-slate-200 transition duration-300 ease-in-out ${
        isDarkMode ? 'bg-gray-800 justify-end' : 'bg-yellow-300 justify-start'
      }`}
    >
      {isDarkMode ? (
        <IoMoon className="text-white w-4 h-4" />
      ) : (
        <IoSunny className="text-yellow-600 w-4 h-4" />
      )}
    </button>
  );
};

export default DarkLight;