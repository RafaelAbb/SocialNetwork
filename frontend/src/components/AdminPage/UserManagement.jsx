import React from 'react';

const UserManagement = ({ getUsers, handleRemoveUser }) => {
  return (
    <div className="users-management mb-8">
      <h3 className="text-xl font-semibold mb-2">Users Management</h3>
      <ul className="space-y-4">
        {getUsers().map((user, index) => (
          <li key={index} className="flex items-center">
            <span className="flex-1 p-2">
              {user.firstName} {user.lastName} - {user.email}
            </span>
            <button
              onClick={() => handleRemoveUser(user)}
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
