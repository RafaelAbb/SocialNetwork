import React, { useState } from 'react';
import Header from './components/header.jsx';
import SignInPage from './components/signInPage/SignIn.jsx';
import Home from './components/homePage/menu.jsx'; // Import the Home component
import './index.css'; // Ensure this is the correct path
import DarkLight from './components/DarkLight.jsx';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignInClick = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className="bg-hero-pattern flex flex-col text-black dark:text-white bg-white dark:bg-gray-800">
      <Header />
      <div className="flex justify-end p-4 bg-white dark:bg-gray-800">
        <DarkLight />
      </div>
      {!isAuthenticated ? (
        <SignInPage onSignInClick={handleSignInClick} />
      ) : (
        <Home onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;
