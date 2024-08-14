import React from 'react';
import HobbyManagement from './HobbyManagement';
import WorkplaceManagement from './WorkplaceManagement';
import UserManagement from './UserManagement';

const AdminPage = () => {
  return (
    <div className="admin-page p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Admin Page</h1>

      <div className="user-management mb-8 bg-white shadow-lg rounded-lg p-6">
        <HobbyManagement />
        <WorkplaceManagement />
        <UserManagement />
      </div>
    </div>
  );
};

export default AdminPage;
