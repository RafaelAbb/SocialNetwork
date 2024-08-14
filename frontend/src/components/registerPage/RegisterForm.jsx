import React, { useState } from 'react';
import DarkLight from '../DarkLight';
import CountryDropdown from './CountryDropdown';
import WorkDropdown from './WorkDropdown';
import HobbyDropdown from './HobbyDropdown.jsx';
import SignInPage from '../signInPage/SignIn';


const RegisterForm = () => {
  // State for form fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [country, setCountry] = useState('');
  const [work, setWork] = useState('');
  const [gender, setGender] = useState('');
  const [hobby, setHobby] = useState('');
  const [message, setMessage] = useState('');
  const [idError, setIdError] = useState('');

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!firstName || !lastName || !email || !id || !password || !birthdate || !country || !work || !gender || !hobby) {
      setMessage('Error: Please fill in all fields.');
      return;
    }

    // Check if ID is valid
    if (id.length !== 9 || !/^\d+$/.test(id)) {
      setIdError('ID must be 9 digits long and contain only numbers');
      return;
    }

    alert(`The user: ${work} ${hobby} ${country} ${firstName}`);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    // Prepare the payload
    var raw = JSON.stringify({
      "newFirstName": firstName,
      "newLastName": lastName,
      "newEmail": email,
      "newIdNum": id,
      "newCountry": country,
      "newWorkplace": work,
      "newHobby": hobby,
      "newGender": gender,
      "newPassword": password,
      "newBirthdate": birthdate
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    try {
      const response = await fetch("https://web-course-backend-seven.vercel.app/api/register", requestOptions);
      const result = await response.text();

      if (response.status !== 200) {
        setMessage(`Error: ${result}`);
      } else {
        alert('registerMessage', 'Registration successful! You can now sign in.');
      }
    } catch (error) {
      setMessage('Error: Registration failed. Please try again later.');
    }
  };

  // Function to handle ID input change
  const handleIDChange = (e) => {
    const value = e.target.value;
    setId(value);
    setIdError('');

  };

  return (
    <div className="flex flex-row justify-center items-center gap-4 mt-4">
      <DarkLight /> {}
      <form className="w-full max-w-lg p-7 bg-white dark:bg-gray-800 shadow-md" name="SignUpPage" id="SignUpPage" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          {/* First Name */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 dark:text-gray-200 text-xs font-bold mb-2" htmlFor="grid-first-name">
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:focus:bg-gray-600"
              id="grid-first-name" type="text" placeholder="Jane"
              value={firstName} onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          {/* Last Name */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 dark:text-gray-200 text-xs font-bold mb-2" htmlFor="grid-last-name">
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:focus:bg-gray-600"
              id="grid-last-name" type="text" placeholder="Doe"
              value={lastName} onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          {/* Email */}
          <div className="w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 dark:text-gray-200 text-xs font-bold mb-2" htmlFor="grid-email">
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:focus:bg-gray-600"
              id="grid-email" type="email" placeholder="jane.doe@example.com"
              value={email} onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* ID */}
          <div className="w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 dark:text-gray-200 text-xs font-bold mb-2" htmlFor="grid-id">
              ID
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:focus:bg-gray-600"
              id="grid-id" type="text" placeholder="ID"
              value={id} onChange={handleIDChange}
            />
            {idError && (
              <p className="text-red-500 text-xs italic">{idError}</p>
            )}
          </div>
          {/* Password */}
          <div className="w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 dark:text-gray-200 text-xs font-bold mb-2" htmlFor="grid-password">
              Password
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:focus:bg-gray-600 focus:border-gray-500"
              id="grid-password" type="password" placeholder="*********"
              value={password} onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* Hobby */}
          <HobbyDropdown onChange={(e) => setHobby(e.target.value)} />
          {/* Birthday */}
          <div className="w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 dark:text-gray-200 text-xs font-bold mb-2" htmlFor="grid-birthdate">
              Birthday
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border rounded py-4 px-6 mb-3 leading-tight focus:outline-none focus:bg-white dark:border-gray-300"
              id="grid-birthdate" type="date"
              value={birthdate} onChange={(e) => setBirthdate(e.target.value)}
            />
          </div>
          {/* Country */}
          <CountryDropdown onChange={(e) => setCountry(e.target.value)} />
          {/* Work */}
          <WorkDropdown onChange={(e) => setWork(e.target.value)} />
          {/* Gender */}
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 dark:text-gray-200 text-xs font-bold mb-2" htmlFor="grid-gender">
              Gender
            </label>
            <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 dark:bg-gray-700 border border-gray-200 text-gray-700 dark:text-gray-300 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white dark:focus:bg-gray-600 focus:border-gray-500"
              id="grid-gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="" disabled>Gender</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
            </div>
          </div>
          {/* Submit Button */}
          <div className="w-full flex items-center justify-end mt-8 px-3">
            <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline dark:bg-gray-600  dark:hover:bg-gray-900 dark:text-gray-300  focus:border-gray-500"
                type="submit"
            >
              Register
            </button>
          </div>
        </div>
        {message && (
          <div className="mt-4">
            <p className={`text-sm ${message.startsWith('Error') ? 'text-red-500' : 'text-green-500'}`}>
              {message}
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default RegisterForm;
