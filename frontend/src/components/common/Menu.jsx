import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import ProfilePage from '../profilePage/ProfilePage';
import GraphComponent from '../homePage/GraphComponent';
import About from '../aboutPage/About';
import Logout from './Logout';
import { isAdmin } from './User';
import AdminPage from '../AdminPage/AdminPage';

const Menu = ({ onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);  // Close the menu when an option is selected
  };

  // Define menu styles for both small and large screens
  const menuStyle = `
    fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out
    sm:relative sm:translate-x-0 sm:w-auto sm:h-auto sm:bg-transparent sm:shadow-none
    ${isMenuOpen ? 'translate-x-0 flex flex-col dark:bg-slate-600' : '-translate-x-full hidden dark:bg-slate-800'}
    sm:flex sm:flex-row sm:justify-center
  `;

const menuItemStyle = `
  menu-item p-4 rounded-lg shadow-lg mb-2 
  bg-white text-slate-700 hover:bg-gray-100 hover:text-blue-500
  border border-gray-200 shadow-md
  dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-blue-400
  dark:border-gray-600 dark:shadow-lg
  duration-300 ease-in-out
  ${isMenuOpen ? 'w-full text-center' : 'w-auto sm:mx-4'}
`;



  const overlayStyle = isMenuOpen ? 'fixed inset-0 bg-black opacity-50 z-40' : 'hidden';

  return (
    <div className="relative">
      
      
      {/* Hamburger Menu Icon for small screens */}
      <div className="sm:hidden">
        <button 
          onClick={handleMenuToggle} 
          className="text-gray-700 p-2 rounded-md focus:outline-none hover:bg-gray-200 dark:hover:text-neutral-800 transition ease-in-out duration-300 text-xl dark:text-neutral-200"
        >
          ☰
        </button>
      </div>

      {/* Menu */}
      <div className={menuStyle}>
        <div className="flex flex-col items-center justify-center w-full h-full sm:flex-row sm:items-center sm:justify-center">
          <Link to="/menu/home" className={menuItemStyle} onClick={handleMenuItemClick}>Home</Link>
          <Link to="/menu/about" className={menuItemStyle} onClick={handleMenuItemClick}>About</Link>
          <Link to="/menu/profile" className={menuItemStyle} onClick={handleMenuItemClick}>Profile</Link>
          {isAdmin() && (
            <Link to="/menu/admin" className={menuItemStyle} onClick={handleMenuItemClick}>Admin</Link>
          )}
          <Logout onLogout={onLogout} isMenuOpen={isMenuOpen} />
        </div>
        
      </div>
      
      {/* Overlay */}
      <div className={overlayStyle} onClick={handleMenuToggle} />

      {/* Routes */}
      <div className="sm:pt-16">
        <Routes>
          <Route path="home" element={<GraphComponent />} />
          <Route path="about" element={<About />} />
          <Route path="profile" element={<ProfilePage />} />
          {isAdmin() && (
            <Route path="admin" element={<AdminPage />} />
          )}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </div>
    </div>
  );
};

export default Menu;
