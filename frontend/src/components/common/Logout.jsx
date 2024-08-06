import React from 'react';
import Cookies from 'js-cookie';

const Logout = ({ onLogout }) => {
  const buttonStyle = 'fixed top-4 right-4 bg-red-500 text-white p-2 rounded-lg shadow-lg hover:bg-red-600 duration-400';

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
