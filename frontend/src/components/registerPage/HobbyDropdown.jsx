import React, { useState, useEffect } from 'react';

// Function to fetch or return the list of hobby options
const getHobbies = () => {
  return ['Reading', 'Traveling', 'Cooking', 'Gaming']; // Replace this with actual fetch or logic to retrieve hobby options
};

const HobbyDropdown = ({onChange}) => {
  const [hobby, setHobby] = useState('');
  const [hobbies, setHobbies] = useState([]);

  useEffect(() => {
    // Fetch or retrieve hobby options when component mounts
    const hobbyList = getHobbies();
    setHobbies(hobbyList);
  }, []);

  const handleChange = (e) => {
    setHobby(e.target.value);
    if (onChange) {
      onChange(e); // Call the passed onChange prop to notify the parent component
    }
  };

  return (
    <div className="w-full px-3 mb-6">
      <label
        className="block uppercase tracking-wide text-gray-700 dark:text-gray-200 text-xs font-bold mb-2"
        htmlFor="grid-hobby"
      >
        Hobby
      </label>
      <div className="relative">
        <select
          className="block appearance-none w-full bg-gray-200 dark:bg-gray-700 border border-gray-200 text-gray-700 dark:text-gray-300 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white dark:focus:bg-gray-600 focus:border-gray-500"
          id="grid-hobby"
          value={hobby}
          onChange={handleChange}
        >
          <option value="" disabled>Select Hobby</option> {/*placeholder */}
          {hobbies.map((hobbyName, index) => (
            <option key={index} value={hobbyName}>
              {hobbyName}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default HobbyDropdown;
