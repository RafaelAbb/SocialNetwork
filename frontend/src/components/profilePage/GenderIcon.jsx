// src/components/profilePage/GenderIcon.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMars, faVenus, faGenderless } from '@fortawesome/free-solid-svg-icons';

const GenderIcon = ({ gender }) => {
  const icon = gender.toLowerCase() === 'male' ? faMars :
               gender.toLowerCase() === 'female' ? faVenus :
               faGenderless;
  const color = gender.toLowerCase() === 'male' ? 'text-blue-500' :
                gender.toLowerCase() === 'female' ? 'text-pink-500' :
                'text-gray-500';

  return <FontAwesomeIcon icon={icon} className={color} />;
};

export default GenderIcon;
