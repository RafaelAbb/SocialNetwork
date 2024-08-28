import React, { useState, useEffect } from 'react';
import {getUsers} from '../common/User'
import { listItemStyle, removeButtonStyle } from './Utils';

/**It allows administrators to view users and remove them from the system. */
const UserManagement = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersArray = await getUsers();
      console.log("users in managment:", usersArray); // Log fetched users
      setUsers(usersArray);
    };

    fetchUsers();
  }, []);

  
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
          setUsers(users.filter(user => user.email !== emailToRemove));
          //navigate('/'); // Navigate to the home page after successful registration
        }
      } catch (error) {
        alert('Error: Remove user failed from managment. Please try again later.');
      }
  };

  return (
    <div className="users-management mb-8">
      <h3 className="text-xl font-semibold mb-2">Users Management</h3>
      <ul className="space-y-4">
  {users.map((user, index) => (
    <li key={index} className={listItemStyle}>
      <div className="flex flex-col md:flex-row md:items-center w-full">
        <span className="flex-1 p-4">
          <p className="text-gray-800 font-bold dark:text-gray-100">
            {user.firstName} {user.lastName}
          </p>
          <p>{user.email}</p>
        </span>
        <button
          onClick={() => handleRemoveUser(user.email)}
          className={`${removeButtonStyle} `}
        >
          Delete
        </button>
      </div>
    </li>
  ))}
</ul>
    </div>
  );
};

export default UserManagement;
