import React from 'react';
import Cookies from 'js-cookie';

const Logout = ({ onLogout,isMenuOpen}) => {
  const buttonStyle = `
  p-4 rounded-lg shadow-lg mb-2
  bg-red-500 text-white hover:bg-red-600 hover:text-red-100
  border border-red-400 shadow-md
  dark:bg-red-700 dark:text-white dark:hover:bg-red-600 dark:hover:text-gray-300
  dark:border-red-500 dark:shadow-lg
  duration-300 ease-in-out sm:mx-4
  ${isMenuOpen? 'w-full text-center' : 'w-auto sm:mx-4'}`


  const handleLogout = () => {
    // Delete the user data cookie
    Cookies.remove('userData', { path: '/' });
    
    // Call the onLogout callback to perform any additional logout actions
    if (onLogout) {
      onLogout();
    }
  };

  return (
    <button 
      className={buttonStyle} 
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default Logout;
