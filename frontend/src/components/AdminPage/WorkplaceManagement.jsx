import React, { useState } from 'react';

const WorkplaceManagement = ({ userId, getWorks, handleAddWorkplace, handleRemoveWorkplace }) => {
  const [newWorkplace, setNewWorkplace] = useState('');

  return (
    <div className="workplace-management mb-8">
      <h3 className="text-xl font-semibold mb-2">Workplace Management</h3>
      <ul className="space-y-4">
        {getWorks().map((workplace, index) => (
          <li key={index} className="flex items-center">
            <span className="flex-1 p-2">{workplace}</span>
            <button
              onClick={() => handleRemoveWorkplace(workplace)}
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
          value={newWorkplace}
          onChange={(e) => setNewWorkplace(e.target.value)}
          placeholder="Enter New Workplace"
          className="flex-1 p-2 border border-gray-300 rounded-lg"
        />
        <button
          onClick={() => handleAddWorkplace(newWorkplace, userId)}
          className="ml-4 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
        >
          Add Workplace
        </button>
      </div>
    </div>
  );
};

export default WorkplaceManagement;
