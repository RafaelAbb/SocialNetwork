import React from 'react';

// Function to handle the API call to delete a user
const deleteUserFromDatabase = async (userMail, setUsers) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  // Prepare the payload
  const raw = JSON.stringify({
    email: userMail,
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
      setUsers(prevUsers => prevUsers.filter(user => user.email !== userMail));
    }
  } catch (error) {
    alert('Error: Remove user failed. Please try again later.');
    console.error('Failed to delete user:', error);
  }
};

const DeleteUserButton = ({ userMail, setUsers, onClick }) => {
  const handleDelete = async (e) => {
    if (onClick) onClick(e); // Call the onClick prop to stop propagation if provided
    await deleteUserFromDatabase(userMail, setUsers); // Perform the deletion
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
