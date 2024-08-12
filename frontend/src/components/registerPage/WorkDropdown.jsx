import React, { useState, useEffect } from 'react';

// Function to fetch or return the list of work options
const getWorkOptions = () => {
  return ['Developer', 'Designer', 'Manager']; // Replace this with actual fetch or logic to retrieve work options
};

const WorkDropdown = () => {
  const [work, setWork] = useState('');
  const [workOptions, setWorkOptions] = useState([]);

  useEffect(() => {
    // Fetch or retrieve work options when component mounts
    const options = getWorkOptions();
    setWorkOptions(options);
  }, []);

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
          onChange={(e) => setWork(e.target.value)}
        >
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
