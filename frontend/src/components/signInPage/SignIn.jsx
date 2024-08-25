import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const SignInPage = ({ onSignInClick, onRegistered }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const SignInUser = async (e) => {
    e.preventDefault();
    const url = `https://web-course-backend-seven.vercel.app/api/login?id_num=${username}&password=${password}`;
    try {
      const response = await fetch(url, {
        method: 'GET',
      });

      if (response.status === 200) {
        try{
        } catch(error){};

        const data = await response.json();
        console.log("Data from server: ", data);
        Cookies.set('userData', JSON.stringify(data.user), { expires: 1 / 24, path: '/' });

        onSignInClick();
      } else if (response.status === 401) {
        alert('Incorrect username or password. Please try again.');
      } else if (response.status === 404) {
        alert('Incorrect username or password. Please try again.');
      } else {
        alert('An unexpected error occurred. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while trying to sign in. Please check your network connection and try again.');
    }
  };

  const SignUpClicked = (e) => {
    e.preventDefault();
    navigate('/register');
  };

  return (
    <div className="flex flex-row justify-center min-h-screen dark:bg-gray-800">
      <form className="bg-white dark:bg-gray-800 shadow-md rounded px-4 pt-4 pb-4 mb-3 mt-4 max-w-xs h-1/2">
        <div className="mb-3">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            id="username"
            type="text"
            placeholder="Username"
            className="dark:bg-gray-700 dark:text-gray-300  shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-100 border-gray-300  leading-tight focus:outline-none focus:shadow-outline"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="********"
            className="dark:bg-gray-700 dark:text-gray-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  bg-gray-100  border-gray-300 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>


        <div className="flex items-center justify-between">
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:hover:bg-gray-900"
            onClick={SignInUser}
          >
            Sign In
          </button>
        </div>
        <div className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800 mt-2">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold">
            Not a member?
          </label>
          <button
            type="button"
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 dark:text-blue-100 dark:hover:text-gray-900"
            onClick={SignUpClicked}
            style={{ background: 'none', border: 'none', padding: '0', cursor: 'pointer', textDecoration: 'underline' }}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInPage;
