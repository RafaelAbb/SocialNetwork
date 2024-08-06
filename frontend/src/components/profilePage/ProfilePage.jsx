// src/components/profilePage/ProfilePage.jsx
import React, { useEffect, useState } from 'react';
import { getMe, getUsers } from '../common/User';
import UserProfile from './UserProfile';
import ConnectionsList from './ConnectionsList';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [connections, setConnections] = useState([]);

  useEffect(() => {
    // Fetch user profile
    const me = getMe();
    setUser(me);

    // Fetch user's connections
    const userConnections = getUsers();
    setConnections(userConnections);
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center gap-4 mt-4">
      <UserProfile user={user} />
      <ConnectionsList connections={connections} />
    </div>
  );
};

export default ProfilePage;
