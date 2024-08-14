import React, { useState } from 'react';

const HobbyManagement = ({ userId, getHobbies, handleAddHobby, handleRemoveHobby }) => {
  const [newHobby, setNewHobby] = useState('');

  return (
    <div className="hobby-management mb-8">
      <h3 className="text-xl font-semibold mb-2">Hobby Management</h3>
      <ul className="space-y-4">
        {getHobbies().map((hobby, index) => (
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
          onClick={() => handleAddHobby(newHobby, userId)}
          className="ml-4 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
        >
          Add Hobby
        </button>
      </div>
    </div>
  );
};

export default HobbyManagement;
