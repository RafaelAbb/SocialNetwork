import React, { useState } from 'react';
import RegisterForm from '../registerPage/RegisterForm';

const SignInPage = ({ onSignInClick }) => {
  const [showRegister, setShowRegister] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function checkPassword(id, password) {
    const params = new URLSearchParams();
    params.append('id', id);
    params.append('password', password);

    const response = await fetch('/api/check-password', {
      method: 'POST',
      body: params.toString(),
    });

    const result = await response.json();
    if (response.ok) {
      return result; // Return the JSON response
    } else {
      setError(result.message); // Set error message from response
      return null;
    }
  }

  const SignInUser = async (e) => {
    e.preventDefault(); // Prevent default form submission
    const result = await checkPassword(username, password);
    if (result && result.status === 'succeed') {
      console.log(result.user); // Log user information
      // Call the function passed from App component
      onSignInClick();
    } else {
      setError(result ? result.message : 'Sign-in failed');
    }
  };

  const SignUpClicked = (e) => {
    e.preventDefault();
    setShowRegister(true);
  };

  return (
    <div className="flex flex-row justify-center items-center gap-4 min-h-screen">
      {!showRegister ? (
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6 mt-6" onSubmit={SignInUser}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="******************"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {error && <p className="text-red-500 text-xs italic">{error}</p>}

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign In
            </button>
            <a
              href="#"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              Forgot Password?
            </a>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-100 mt-2">
            <label className="block text-gray-700 text-sm font-bold">
              Not a member?
            </label>
            <a
              href="#"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              onClick={SignUpClicked}
            >
              Sign Up
            </a>
          </div>
        </form>
      ) : (
        <RegisterForm />
      )}
    </div>
  );
};

export default SignInPage;
