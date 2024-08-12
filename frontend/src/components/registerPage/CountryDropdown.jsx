import React, { useState, useEffect } from 'react';

// Function to fetch or return the list of countries
const getCountries = () => {
  return ['Israel', 'USA', 'UK', 'Azerbaijan']; // Replace this with actual fetch or logic to retrieve countries
};

const CountryDropdown = ({ onChange }) => {
  const [country, setCountry] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // Fetch or retrieve countries when component mounts
    const countryList = getCountries();
    setCountries(countryList);
  }, []);

  const handleChange = (e) => {
    setCountry(e.target.value);
    if (onChange) {
      onChange(e); // Call the passed onChange prop to notify the parent component
    }
  };

  return (
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label
        className="block uppercase tracking-wide text-gray-700 dark:text-gray-200 text-xs font-bold mb-2"
        htmlFor="grid-country"
      >
        Country
      </label>
      <div className="relative">
        <select
          className="block appearance-none w-full bg-gray-200 dark:bg-gray-700 border border-gray-200 text-gray-700 dark:text-gray-300 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white dark:focus:bg-gray-600 focus:border-gray-500"
          id="grid-country"
          value={country}
          onChange={handleChange}  // Use the internal handleChange method
        >
          <option value="" disabled>Select Country</option> {/*placeholder */}
          {countries.map((countryName, index) => (
            <option key={index} value={countryName}>
              {countryName}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CountryDropdown;
