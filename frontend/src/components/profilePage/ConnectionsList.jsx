// src/components/profilePage/ConnectionsList.jsx
import React from 'react';
import ConnectionItem from './ConnectionItem';

const ConnectionsList = ({ connections }) => {
  return (
    <div className="bg-white text-gray-800 rounded-lg shadow-md p-6 w-full max-w-md mt-4">
      <h2 className="text-2xl font-bold mb-4">Connections</h2>
      {connections.length > 0 ? (
        <ul>
          {connections.map(connection => (
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
