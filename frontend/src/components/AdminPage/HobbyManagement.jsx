import React, { useState, useEffect } from 'react';
import { fetchHobbies } from '../common/Properties';
import { listItemStyle,inputBoxStyle, addButtonStyle, removeButtonStyle } from './Utils';


/**Users can add or remove hobbies, and the component handles the interaction with a  server to fetch the hobbies list */
const HobbyManagement = () => {
  const [hobbies, setHobbies] = useState([]);
  const [newHobby, setNewHobby] = useState('');

  useEffect(() => {
    const loadHobbies = async () => {
      try {
        const hobbiesData = await fetchHobbies();
        setHobbies(hobbiesData);
      } catch (error) {
        console.error('Failed to fetch hobbies:', error);
      }
    };

    loadHobbies();
  }, []);

  const handleAddHobby = async () => {
    if (newHobby) {
      setNewHobby(newHobby);
      console.log(`Add hobby "${newHobby}"`);

      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
  
      // Prepare the payload
      const raw = JSON.stringify({
        activity: newHobby,
      });
      const requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };
      try {
        const response = await fetch("https://web-course-backend-seven.vercel.app/api/hobbiesUtil", requestOptions);
        const result = await response.text();
  
        if (response.status !== 200) {
          alert(`Error: ${result}`);
        } else {
          setHobbies([...hobbies, newHobby]);
          //navigate('/'); // Navigate to the home page after successful registration
        }
      } catch (error) {
        alert('Error: Adding failed. Please try again later.');
      }
    };
    setNewHobby('');


    }
  

  const handleRemoveHobby = async(hobbyToRemove) => {
   
    const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
  
      // Prepare the payload
      const raw = JSON.stringify({
        activity: hobbyToRemove,
      });
      const requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };
      try {
        const response = await fetch("https://web-course-backend-seven.vercel.app/api/hobbiesUtil", requestOptions);
        const result = await response.text();
  
        if (response.status !== 200) {
          alert(`Error: ${result}`);
        } else {
          setHobbies(hobbies.filter(hobby => hobby !== hobbyToRemove));
          //navigate('/'); // Navigate to the home page after successful registration
        }
      } catch (error) {
        alert('Error: Deleting failed. Please try again later.');
      }
  };

  return (
    <div className="hobby-management mb-12 py-3 border-b-2  dark:border-gray-700">
      <h3 className="text-xl font-semibold mb-2">Hobby Management</h3>
      <ul className="space-y-4">
      {hobbies.map((hobby, index) => (
      <li
      key={index}
      className={listItemStyle}
      >
      <span className="text-gray-800 dark:text-gray-200 font-medium">
        {hobby}
      </span>
      <button
        onClick={() => handleRemoveHobby(hobby)}
        className={removeButtonStyle}
      >
        Delete
      </button>
    </li>
  ))}
</ul>
<div className="input-group mt-6 pb-4">
  <input
    id="AddHobbyTextBox"
    type="text"
    value={newHobby}
    onChange={(e) => setNewHobby(e.target.value)}
    placeholder="Enter New Hobby"
    className={inputBoxStyle}
  />
  <button
    onClick={handleAddHobby}
    className={addButtonStyle}
  >
    Add Hobby
  </button>
</div>
    </div>
  );
};

export default HobbyManagement;
