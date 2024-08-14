import React, { useState } from 'react';
import {getUsers} from '../common/User'
const UserManagement = () => {

  const [users, setUsers] = useState(
 /*   { firstName: 'Hannah', lastName: 'Moore', email: 'hannah.moore@example.com' },
    { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' },
    { firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com' },*/
    getUsers()
  );
  console.log("lst:",users);

  const handleRemoveUser = async(emailToRemove) => {

    const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
  
      // Prepare the payload
      const raw = JSON.stringify({
        email: emailToRemove,
      });
      const requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };
      try {
        const response = await fetch("https://web-course-backend-seven.vercel.app/api/adminUtil", requestOptions);
        const result = await response.text();
  
        if (response.status !== 200) {
          alert(`Error: ${result}`);
        } else {
          alert('Remove user successful!');
          setUsers(users.filter(user => user.email !== emailToRemove));
          console.log(`Remove user "${emailToRemove}"`);
          //navigate('/'); // Navigate to the home page after successful registration
        }
      } catch (error) {
        alert('Error: Remove user failed. Please try again later.');
      }
  };

  return (
    <div className="users-management mb-8">
      <h3 className="text-xl font-semibold mb-2">Users Management</h3>
      <ul className="space-y-4">
        {users.map((user, index) => (
          <li key={index} className="flex items-center">
            <span className="flex-1 p-2">
              {user.firstName} {user.lastName} - {user.email}
            </span>
            <button
              onClick={() => handleRemoveUser(user.email)}
              className="ml-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
