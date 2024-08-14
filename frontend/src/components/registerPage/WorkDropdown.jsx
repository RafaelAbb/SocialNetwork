import React, { useState, useEffect } from 'react';
import { fetchWorkOptions } from '../common/Properties';

const WorkDropdown = ({ onChange }) => {
  const [work, setWork] = useState('');
  const [workOptions, setWorkOptions] = useState([]);

  useEffect(() => {
    const fetchWorkOptionsAsync = async () => {
      try {
        const options = await fetchWorkOptions(); // Wait for the fetch to complete
        console.log("Fetched work options:", options); // Log the fetched options
        if (Array.isArray(options)) {
          setWorkOptions(options); // Set the fetched options to state
        } else {
          console.error("Fetched work options is not an array:", options);
        }
      } catch (error) {
        console.error("Failed to fetch work options:", error);
      }
    };

    fetchWorkOptionsAsync(); // Call the async function
  }, []);

  const handleChange = (e) => {
    setWork(e.target.value);
    if (onChange) {
      onChange(e); // Notify the parent component of the change
    }
  };

  return (
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label
        className="block uppercase tracking-wide text-gray-700 dark:text-gray-200 text-xs font-bold mb-2"
        htmlFor="grid-work"
      >
        Work
      </label>
      <div className="relative">
        <select
          className="block appearance-none w-full bg-gray-200 dark:bg-gray-700 border border-gray-200 text-gray-700 dark:text-gray-300 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white dark:focus:bg-gray-600 focus:border-gray-500"
          id="grid-work"
          value={work}
          onChange={handleChange} // Use the internal handleChange method
        >
          <option value="" disabled>Select Work</option> {/* placeholder */}
          {workOptions.map((workOption, index) => (
            <option key={index} value={workOption}>
              {workOption}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default WorkDropdown;
