// src/context/DarkModeContext.js
import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle('dark', !isDarkMode);
  };

  useEffect(() => {
    const darkMode = document.body.classList.contains('dark');
    setIsDarkMode(darkMode);
  }, []);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
