import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import GenderIcon from './GenderIcon';

dayjs.extend(relativeTime);

const UserProfile = ({ user }) => {
  const calculateDaysRemaining = (birthday) => {
    const today = dayjs();
    let nextBirthday = dayjs(birthday).year(today.year());
    if (nextBirthday.isBefore(today)) {
      nextBirthday = nextBirthday.add(1, 'year');
    }
    return nextBirthday.diff(today, 'day');
  };

  const formatBirthday = (birthday) => {
    return dayjs(birthday).format('DD/MM/YYYY');
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
        <p className="text-md">{formatBirthday(user.birthday)}</p>
        <p className="text-md text-gray-600">({calculateDaysRemaining(user.birthday)} days remaining)</p>
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
