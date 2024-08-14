import React, { useEffect, useState } from 'react';
import { getUsers } from '../common/User';
import ConnectionItem from './ConnectionItem';

const ConnectionsList = () => {
  const [users, setUsers] = useState([]); // Moved useState inside the component

  useEffect(() => {
    const fetchUsers = async () => {
      const usersArray = await getUsers();
      console.log("users in connectionlist", usersArray); // Log fetched users
      setUsers(usersArray);
    };

    fetchUsers();
  }, []);

  return (
    <div className="bg-white text-gray-800 rounded-lg shadow-md p-6 w-full max-w-md mt-4">
      <h2 className="text-2xl font-bold mb-4">Connections</h2>
      {users.length > 0 ? (
        <ul className="space-y-4">
          {users.map(connection => (
            <ConnectionItem key={connection.id_num} connection={connection} />
          ))}
        </ul>
      ) : (
        <div>No connections available.</div>
      )}
    </div>
  );
};

export default ConnectionsList;
