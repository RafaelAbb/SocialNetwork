import React from 'react';
import HobbyManagement from './HobbyManagement';
import WorkplaceManagement from './WorkplaceManagement';
import UserManagement from './UserManagement';

const AdminPage = () => {
  return (
    <div className="admin-page p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100">Admin Page</h1>
        {/* <DarkLight /> {} */}
      </div>

      <div className="user-management mb-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
        <HobbyManagement />
        <WorkplaceManagement />
        <UserManagement />
      </div>
    </div>
  );
};

export default AdminPage;
