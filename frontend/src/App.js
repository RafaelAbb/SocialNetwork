import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import SignInPage from './components/signInPage/SignIn';
import Menu from './components/common/Menu';
import DarkLight from './components/DarkLight';
import './index.css';
import RegisterForm from './components/registerPage/RegisterForm';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleSignInClick = () => {
    setIsAuthenticated(true);
    navigate('/menu/home'); // Navigate to the menu's home view
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/signin'); // Redirect to the sign-in page after logout
  };

  return (
    <div className="bg-hero-pattern flex flex-col text-black dark:text-white bg-white dark:bg-gray-800">
      <Header />
      <div className="flex justify-end p-4 bg-white dark:bg-gray-800">
        <DarkLight />
      </div>
      <Routes>
        <Route
          path="/"
          element={
              <SignInPage onSignInClick={handleSignInClick} />
          }
        />
        <Route
          path="/signin"
          element={<SignInPage onSignInClick={handleSignInClick} />}
        />
        <Route
          path="/register"
          element={<RegisterForm onSignInClick={handleSignInClick} />}
        />
        <Route
          path="/menu/*"
          element={
            isAuthenticated ? (
              <Menu onLogout={handleLogout} />
            ) : (
              <SignInPage onSignInClick={handleSignInClick} />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
