// src/components/profilePage/ConnectionItem.jsx
import React from 'react';
import ManImage from './Man.png';
import WomanImage from './Woman.png';

const getGenderImage = (gender) => {
  if (gender.toLowerCase() === 'male') {
    return ManImage; // Use Man.png for male
  } else if (gender.toLowerCase() === 'female') {
    return WomanImage; // Use Woman.png for female
  } else {
    return null; // No image for other genders
  }
};

const handleEmailClick = (email) => {
  window.location.href = `mailto:${email}`;
};

const ConnectionItem = ({ connection }) => {
  return (
    <li
      className="mb-4 flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-100 relative"
      onClick={() => handleEmailClick(connection.email)}
    >
      {getGenderImage(connection.gender) && (
        <img
          src={getGenderImage(connection.gender)}
          alt={`${connection.gender}`}
          className="w-12 h-12 rounded-full mr-4"
        />
      )}
      <div>
        <span className="block text-sm font-bold">{connection.firstName} {connection.lastName}</span>
        <span className="block text-sm">Email: {connection.email}</span>
        <span className="block text-sm">Hobby: {connection.hobby}</span>
        <span className="block text-sm">Country: {connection.country}, City: {connection.city}</span>
        <span className="block text-sm">Workplace: {connection.workplace}</span>
      </div>
      <div className="absolute bottom-0 left-0 mb-6 ml-6 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 z-10">
        Click to send an email
      </div>
    </li>
  );
};

export default ConnectionItem;
