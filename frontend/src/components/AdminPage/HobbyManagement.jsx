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

  const handleAddHobby = () => {
    if (newHobby) {
      setHobbies([...hobbies, newHobby]);
      setNewHobby('');
      console.log(`Add hobby "${newHobby}"`);
    }
  };

  const handleRemoveHobby = (hobbyToRemove) => {
    setHobbies(hobbies.filter(hobby => hobby !== hobbyToRemove));
    console.log(`Remove hobby "${hobbyToRemove}"`);
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
