import HobbyManagement from './HobbyManagement';
import WorkplaceManagement from './WorkplaceManagement';
import UserManagement from './UserManagement';

const AdminPage = () => {

  const getHobbies = () => {
    return ['Cooking', 'Reading', 'Swimming'];
  };

  const getWorks = () => {
    return ['Rafael', 'TechWave', 'SpaceX'];
  };

  const getUsers = () => {
    return [
      { firstName: 'Hannah', lastName: 'Moore', email: 'hannah.moore@example.com' },
      { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' },
      { firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com' },
    ];
  };

  const handleAddHobby = (newHobby) => {
    console.log(`Add hobby "${newHobby}" `);
  };

  const handleRemoveHobby = (hobby) => {
    console.log(`Remove hobby "${hobby}" `);
  };

  const handleAddWorkplace = (newWorkplace) => {
    console.log(`Add workplace "${newWorkplace}" `);
  };

  const handleRemoveWorkplace = (workplace) => {
    console.log(`Remove workplace "${workplace}" `);
  };

  const handleRemoveUser = (user) => {
    console.log(`Remove user "${user.firstName} ${user.lastName}" with email: ${user.email}`);
  };

  return (
    <div className="admin-page p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Admin Page</h1>

      <div className="user-management mb-8 bg-white shadow-lg rounded-lg p-6">

        <HobbyManagement
          getHobbies={getHobbies}
          handleAddHobby={handleAddHobby}
          handleRemoveHobby={handleRemoveHobby}
        />

        <WorkplaceManagement
          getWorks={getWorks}
          handleAddWorkplace={handleAddWorkplace}
          handleRemoveWorkplace={handleRemoveWorkplace}
        />

        <UserManagement 
        getUsers={getUsers} 
        handleRemoveUser={handleRemoveUser} 
        />

      </div>
    </div>
  );
};

export default AdminPage;
