import React, { useState, useEffect } from 'react';
import { IoSunny, IoMoon } from 'react-icons/io5'; // Import the icons

const DarkLight = ({ sync }) => {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark((prevDark) => !prevDark);
    document.body.classList.toggle('dark');
    if (sync && sync.checked) {
      document.body.setAttribute('data-dark-mode', !dark);
    }
  };

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <button
      onClick={darkModeHandler}
      className={`flex items-center w-12 h-6 px-1 rounded-full border border-slate-200 transition duration-300 ease-in-out ${
        dark ? 'bg-gray-800 justify-end' : 'bg-yellow-300 justify-start'
      }`}
    >
      {dark ? (
        <IoMoon className="text-white w-4 h-4" />
      ) : (
        <IoSunny className="text-yellow-600 w-4 h-4" />
      )}
    </button>
  );
};

export default DarkLight;
