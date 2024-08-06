// src/components/profilePage/UserProfile.jsx
import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import GenderIcon from './GenderIcon';

dayjs.extend(relativeTime);

const UserProfile = ({ user }) => {
  const calculateRemainingTime = (birthday) => {
    const nextBirthday = dayjs(birthday).year(dayjs().year());
    if (nextBirthday.isBefore(dayjs())) {
      nextBirthday.add(1, 'year');
    }
    return dayjs().to(nextBirthday, true);
  };

  return (
    <div className="bg-blue-100 text-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md">
      <h1 className="text-3xl font-bold mb-4 text-center">
        User Profile <GenderIcon gender={user.gender} />
      </h1>
      <div className="mb-4">
        <label className="block text-lg font-bold mb-2">Full Name:</label>
        <p className="text-md">{user.firstName} {user.lastName}</p>
      </div>
      <div className="mb-4">
        <label className="block text-lg font-bold mb-2">Email:</label>
        <p className="text-md">{user.email}</p>
      </div>
      <div className="mb-4">
        <label className="block text-lg font-bold mb-2">Birthday:</label>
        <p className="text-md">{user.birthday}</p>
        <p className="text-md text-gray-600">({calculateRemainingTime(user.birthday)} remaining)</p>
      </div>
      <div className="mb-4">
        <label className="block text-lg font-bold mb-2">Country:</label>
        <p className="text-md">{user.country}, {user.city}</p>
      </div>
      <div className="mb-4">
        <label className="block text-lg font-bold mb-2">Workplace:</label>
        <p className="text-md">{user.workplace}</p>
      </div>
    </div>
  );
};

export default UserProfile;
