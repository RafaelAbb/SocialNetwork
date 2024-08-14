import React, { useState, useEffect } from 'react';
import { fetchHobbies } from '../common/Properties';

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
          alert('Adding successful!');
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
          alert('Deleting successful!');
          setHobbies(hobbies.filter(hobby => hobby !== hobbyToRemove));
          console.log(`Remove hobby "${hobbyToRemove}"`);
          //navigate('/'); // Navigate to the home page after successful registration
        }
      } catch (error) {
        alert('Error: Deleting failed. Please try again later.');
      }
  };

  return (
    <div className="hobby-management mb-8">
      <h3 className="text-xl font-semibold mb-2">Hobby Management</h3>
      <ul className="space-y-4">
        {hobbies.map((hobby, index) => (
          <li key={index} className="flex items-center">
            <span className="flex-1 p-2">{hobby}</span>
            <button
              onClick={() => handleRemoveHobby(hobby)}
              className="ml-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div className="input-group mt-6">
        <input
          id="AddHobbyTextBox"
          type="text"
          value={newHobby}
          onChange={(e) => setNewHobby(e.target.value)}

          placeholder="Enter New Hobby"
          className="flex-1 p-2 border border-gray-300 rounded-lg"
        />
        <button
          onClick={handleAddHobby}
          className="ml-4 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
        >
          Add Hobby
        </button>
      </div>
    </div>
  );
};

export default HobbyManagement;
