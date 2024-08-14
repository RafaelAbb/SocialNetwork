import React, { useState, useEffect } from 'react';
import { fetchHobbies } from '../common/Properties';

const HobbyDropdown = ({ onChange }) => {
  const [hobby, setHobby] = useState('');
  const [hobbies, setHobbies] = useState([]);

  useEffect(() => {
    const fetchHobbyOptions = async () => {
      try {
        const hobbyList = await fetchHobbies(); // Wait for the fetch to complete
        console.log("Fetched hobbies:", hobbyList); // Log the fetched hobbies
        if (Array.isArray(hobbyList)) {
          setHobbies(hobbyList); // Set the fetched options to state
        } else {
          console.error("Fetched hobbies is not an array:", hobbyList);
        }
      } catch (error) {
        console.error("Failed to fetch hobbies:", error);
      }
    };

    fetchHobbyOptions(); // Call the async function
  }, []);

  const handleChange = (e) => {
    setHobby(e.target.value);
    if (onChange) {
      onChange(e); // Notify the parent component of the change
    }
  };

  return (
    <div className="w-full px-3 mb-6">
      <label
        className="block uppercase tracking-wide text-gray-700 dark:text-gray-200 text-xs font-bold mb-2"
        htmlFor="grid-hobby"
      >
        FAVORITE Hobby
      </label>
      <div className="relative">
        <select
          className="block appearance-none w-full bg-gray-200 dark:bg-gray-700 border border-gray-200 text-gray-700 dark:text-gray-300 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white dark:focus:bg-gray-600 focus:border-gray-500"
          id="grid-hobby"
          value={hobby}
          onChange={handleChange}
        >
          <option value="" disabled>Select Hobby</option> {/* placeholder */}
          {hobbies.map((hobbyOption, index) => (
            <option key={index} value={hobbyOption}>
              {hobbyOption}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default HobbyDropdown;
