import React, { useState, useEffect } from 'react';
import { fetchWorkOptions } from '../common/Properties';

const WorkplaceManagement = () => {
  const [workplaces, setWorkplaces] = useState([]);
  const [newWorkplace, setNewWorkplace] = useState('');

  useEffect(() => {
    const loadWorkplaces = async () => {
      try {
        const workplacesData = await fetchWorkOptions();
        setWorkplaces(workplacesData);
      } catch (error) {
        console.error('Failed to fetch workplaces:', error);
      }
    };

    loadWorkplaces();
  }, []);

  const handleAddWorkplace = async() => {
    if (newWorkplace) {
      console.log(`Add workplace "${newWorkplace}"`);
    
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    // Prepare the payload
    const raw = JSON.stringify({
      workplace: newWorkplace ,
    });
    const requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };
    try {
      const response = await fetch("https://web-course-backend-seven.vercel.app/api/workplaceUtil", requestOptions);
      const result = await response.text();

      if (response.status !== 200) {
        alert(`Error: ${result}`);
      } else {
        alert('Adding successful!');
        setWorkplaces([...workplaces, newWorkplace]);
        //navigate('/'); // Navigate to the home page after successful registration
      }
    } catch (error) {
      alert('Error: Adding failed. Please try again later.');
    }
  };
  setNewWorkplace('');
  };

  const handleRemoveWorkplace = async(workplaceToRemove) => {
    console.log(`Remove workplace "${workplaceToRemove}"`);

    const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
  
      // Prepare the payload
      const raw = JSON.stringify({
        workplace: workplaceToRemove,
      });
      const requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };
      try {
        const response = await fetch("https://web-course-backend-seven.vercel.app/api/workplaceUtil", requestOptions);
        const result = await response.text();
  
        if (response.status !== 200) {
          alert(`Error: ${result}`);
        } else {
          alert('Deleting successful! ');
          setWorkplaces(workplaces.filter(workplace => workplace !== workplaceToRemove));
          console.log(`Remove workplaces "${workplaceToRemove}"`);
          //navigate('/'); // Navigate to the home page after successful registration
        }
      } catch (error) {
        alert('Error: Deleting failed. Please try again later.');
      }
  };

  return (
    <div className="workplace-management mb-8">
      <h3 className="text-xl font-semibold mb-2">Workplace Management</h3>
      <ul className="space-y-4">
        {workplaces.map((workplace, index) => (
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
          onClick={handleAddWorkplace}
          className="ml-4 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
        >
          Add Workplace
        </button>
      </div>
    </div>
  );
};

export default WorkplaceManagement;
