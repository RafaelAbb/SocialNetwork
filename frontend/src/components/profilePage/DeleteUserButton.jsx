import React from 'react';

// Placeholder function to simulate an API call to delete a user
const deleteUserFromDatabase = async (userMail) => {
  try {
    // Simulate an API call with a delay
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a 1-second delay
    alert(`User with mail: ${userMail} has been deleted`); // Alert to simulate deletion
  } catch (error) {
    console.error('Failed to delete user:', error);
  }
};

const DeleteUserButton = ({ userMail, onClick }) => {
  const handleDelete = async (e) => {
    if (onClick) onClick(e); // Call the onClick prop to stop propagation if provided
    await deleteUserFromDatabase(userMail); // Simulate the deletion
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      Delete User
    </button>
  );
};

export default DeleteUserButton;
