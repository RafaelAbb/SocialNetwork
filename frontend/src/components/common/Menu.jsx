import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import ProfilePage from '../profilePage/ProfilePage';
import GraphComponent from '../homePage/GraphComponent';
import About from '../aboutPage/About';
import Logout from './Logout';
import { isAdmin } from './User';
import AdminPage from '../AdminPage/AdminPage';

const Menu = ({ onLogout }) => {
  const menuStyle = 'flex flex-row items-center pb-8 pr-8 pl-8 rounded-lg place-content-center';
  const menuItemStyle = 'menu-item bg-gray-200 p-2 rounded-lg shadow-lg mr-3 ml-3 bg-white text-slate-700 hover:ease-in text-blue-500 hover:ease-in duration-400';

  return (
    <div>
      <Logout onLogout={onLogout} />
      <div id="menu" className={menuStyle}>
        <Link to="/menu/home" className={menuItemStyle}>Home</Link>
        <Link to="/menu/about" className={menuItemStyle}>About</Link>
        <Link to="/menu/profile" className={menuItemStyle}>Profile</Link>
        {isAdmin() && (
          <Link to="/menu/admin" className={menuItemStyle}>Admin</Link>
        )}
      </div>
      <div>
        <Routes>
          <Route path="home" element={<GraphComponent />} />
          <Route path="about" element={<About />} />
          <Route path="profile" element={<ProfilePage />} />
          {isAdmin() && (
            <Route path="admin" element={<AdminPage />} /> 
            // Replace <div>Admin Page</div> with your actual admin page component
          )}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </div>
    </div>
  );
};

export default Menu;
