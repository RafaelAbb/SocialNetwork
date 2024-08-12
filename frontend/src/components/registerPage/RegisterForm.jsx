import React, { useState } from 'react';
import DarkLight from '../DarkLight';
import SignInPage from '../signInPage/SignIn'


const RegisterForm = () => {
  // State for form fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [work, setWork] = useState('');
  const [gender, setGender] = useState('');
  const [hobby, setHobby] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = async (event) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    event.preventDefault();
  
    // Prepare the payload
    var raw = JSON.stringify({
      "newFirstName": firstName,
      "newLastName": lastName,
      "newEmail": email,
      "newIdNum": id,
      "newCountry": country,
      "newCity": city,
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
        //sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
      }
    } catch (error) {
      setMessage('Error: Registration failed. Please try again later.');
    }
  };

  return (
    <div className="flex flex-row justify-center items-center gap-4 mt-4">
      <DarkLight /> {}
      <form className="w-full max-w-lg p-7 bg-white dark:bg-gray-800 shadow-md" name="SignUpPage" id="SignUpPage" onSubmit={handleSubmit}>
        {/* Form fields remain unchanged */}
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
              value={id} onChange={(e) => setId(e.target.value)}
            />
          </div>
          {/* Password */}
          <div className="w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 dark:text-gray-200 text-xs font-bold mb-2" htmlFor="grid-password">
              Password
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:focus:bg-gray-600 focus:border-gray-500"
              id="grid-password" type="password" placeholder="******************"
              value={password} onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* Hobby */}
          <div className="w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 dark:text-gray-200 text-xs font-bold mb-2" htmlFor="grid-hobby">
              Hobby
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white dark:focus:bg-gray-600"
              id="grid-hobby" type="text" placeholder="Reading, Traveling, etc."
              value={hobby} onChange={(e) => setHobby(e.target.value)}
            />
          </div>
          {/* Birthday */}
          <div className="w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 dark:text-gray-200 text-xs font-bold mb-2" htmlFor="grid-birthdate">
              Birthday
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border rounded py-4 px-6 mb-3 leading-tight focus:outline-none focus:bg-white dark:focus:bg-gray-600"
              id="grid-birthdate" type="date"
              value={birthdate} onChange={(e) => setBirthdate(e.target.value)}
            />
          </div>
          {/* Country */}
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 dark:text-gray-200 text-xs font-bold mb-2" htmlFor="grid-country">
              Country
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 dark:bg-gray-700 border border-gray-200 text-gray-700 dark:text-gray-300 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white dark:focus:bg-gray-600 focus:border-gray-500"
                id="grid-country" type="text"
                value={country} onChange={(e) => setCountry(e.target.value)}
              >
                <option>Israel</option>
                <option>USA</option>
                <option>UK</option>
              </select>
            </div>
          </div>
          {/* City */}
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 dark:text-gray-200 text-xs font-bold mb-2" htmlFor="grid-city">
              City
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white dark:focus:bg-gray-600"
              id="grid-city" type="text" placeholder="Karmiel"
              value={city} onChange={(e) => setCity(e.target.value)}
            />
          </div>
          {/* Work */}
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 dark:text-gray-200 text-xs font-bold mb-2" htmlFor="grid-work">
              Work
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white dark:focus:bg-gray-600"
              id="grid-work" type="text" placeholder="Rafael"
              value={work} onChange={(e) => setWork(e.target.value)}
            />
          </div>
          {/* Gender */}
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 dark:text-gray-200 text-xs font-bold mb-2" htmlFor="grid-gender">
              Gender
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 dark:bg-gray-700 border border-gray-200 text-gray-700 dark:text-gray-300 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white dark:focus:bg-gray-600 focus:border-gray-500"
                id="grid-gender" value={gender} onChange={(e) => setGender(e.target.value)}
              >
                <option>Female</option>
                <option>Male</option>
                <option>Other</option>
              </select>
            </div>
          </div>
          {/* Submit Button */}
          <div className="w-full flex items-center justify-between mt-4 px-3">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
