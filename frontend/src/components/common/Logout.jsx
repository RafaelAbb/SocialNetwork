import React from 'react';

const Logout = ({ onLogout }) => {
  const buttonStyle = 'fixed top-4 right-4 bg-red-500 text-white p-2 rounded-lg shadow-lg hover:bg-red-600 duration-400';

  return (
    <button 
      className={buttonStyle} 
      onClick={onLogout}
    >
      Logout
    </button>
  );
};

export default Logout;
