import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import GenderIcon from './GenderIcon';
import ManImage from './Man.png';
import WomanImage from './Woman.png';
import { isAdmin } from '../common/User';
import DeleteUserButton from './DeleteUserButton'; // Adjust the import path as necessary

const getGenderImage = (gender) => {
  if (gender && gender.toLowerCase() === 'male') {
    return ManImage; // Use Man.png for male
  } else if (gender && gender.toLowerCase() === 'female') {
    return WomanImage; // Use Woman.png for female
  } else {
    return null; // No image for other genders or if gender is undefined
  }
};

const handleEmailClick = (email) => {
  if (email) {
    window.location.href = `mailto:${email}`;
  }
};

const ConnectionItem = ({ connection }) => {
  if (!connection) {
    return null; // Render nothing if connection is undefined or null
  }

  return (
    <li
      className="relative mb-4 flex items-center p-4 border rounded-lg cursor-pointer group transition-shadow duration-200 shadow-sm hover:shadow-md"
      onClick={() => handleEmailClick(connection.email)}
    >
      {getGenderImage(connection.gender) && (
        <img
          src={getGenderImage(connection.gender)}
          alt={`${connection.gender}`}
          className="w-12 h-12 rounded-full mr-4"
        />
      )}
      <div className="flex-1 group-hover:blur-sm transition-all duration-200">
        <div className="flex justify-between items-center mb-1">
          <span className="block text-lg font-bold">{connection.firstName} {connection.lastName}</span>
          {connection.gender && <GenderIcon gender={connection.gender} />}
        </div>
        {connection.email && <span className="block text-sm text-gray-600">Email: {connection.email}</span>}
        {connection.hobby && <span className="block text-sm text-gray-600">Hobby: {connection.hobby}</span>}
        {connection.country && <span className="block text-sm text-gray-600">Country: {connection.country}</span>}
        {connection.workplace && <span className="block text-sm text-gray-600">Workplace: {connection.workplace}</span>}
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <FontAwesomeIcon icon={faEnvelope} className="text-4xl text-gray-800" />
      </div>
      {/* Conditional rendering of the DeleteUserButton if the user is an admin */}
      {isAdmin() && (
        <div className="absolute right-2 bottom-2 mb-1 mr-1">
          {/* Prevent click event propagation to the li element */}
          <DeleteUserButton 
            userMail={connection.email}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </li>
  );
};

export default ConnectionItem;
