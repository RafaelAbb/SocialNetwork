import React, { useState } from 'react';
import Header from './components/Header';
import SignInPage from './components/signInPage/SignIn';
import Menu from './components/common/Menu'; // Import the Home component
import './index.css'; // Ensure this is the correct path
import DarkLight from './components/DarkLight';

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
        <Menu onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;
