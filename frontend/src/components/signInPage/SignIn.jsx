import React, { useState } from 'react';
import RegisterForm from '../registerPage/RegisterForm';

const SignInPage = ({ onSignInClick }) => {
  const [showRegister, setShowRegister] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const SignInUser = async (e) => {
    e.preventDefault(); // Prevent form default submission behavior
    const url = `https://web-course-backend-seven.vercel.app/api/login?id_num=${username}&password=${password}`;
    try {
      const response = await fetch(url, {
        method: 'GET',
      });

      if (response.status === 200) {
        const data = await response.json();
        console.log(data); // Handle the response data as needed
        setMessage('Sign in successful!');
        onSignInClick();
      } else if (response.status === 401) {
        setMessage('Error: Unauthorized. Incorrect username or password.');
      } else if (response.status === 404) {
        setMessage('Error: Unauthorized. Incorrect username or password.');
      } else {
        setMessage('Error: An unexpected error occurred.');
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  const SignUpClicked = (e) => {
    e.preventDefault(); // Prevent default link behavior
    setShowRegister(true);
  };

  return (
    <div className="flex flex-row justify-center items-center gap-4 min-h-screen">
      {!showRegister ? (
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6 mt-6">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="********"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {message && (
            <div className="mb-4">
              <p className={`text-sm ${message.startsWith('Error') ? 'text-red-500' : 'text-green-500'}`}>
                {message}
              </p>
            </div>
          )}

          <div className="flex items-center justify-between">
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={SignInUser}
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
