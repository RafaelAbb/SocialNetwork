
# Social Network Web Application

This web application connects people based on their work, country, and favorite hobby. Users can view their connection graph and send emails to their connections.
Using this platform they can really get to know their common intrest people.

## Table of Contents
- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Dependencies](#dependencies)
- [Installation and Setup](#installation-and-setup)
- [Running the Project](#running-the-project)
- [Code Structure (Frondend)](#code-structure-frondend)
- [Code Structure (Backend)](#code-structure-backend)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Example Code](#example-code)
- [Additional help](#additional-help)

## Project Overview
This application provides a platform for users to connect with others who share similar professional and personal interests. Users can visualize their connections, manage their profiles, and communicate with their network.

## Technologies Used
| Technology   | Purpose                                    |
|--------------|--------------------------------------------|
| React.js     | Frontend framework for building UI         |
| Tailwind CSS | Utility-first CSS framework for styling    |
| Node.js      | Backend runtime environment                |
| Next.js      | Framework for server-side rendering        |

## Dependencies
List of dependencies used in this project:

**Frontend:**
- React
- Tailwind CSS

**Backend:**
- Node.js
- Next.js
- MongoDB

## Installation and Setup
1. Ensure you have required dependencies and npm installed.
2. Clone the frontend repository to your local machine:
   ```bash
   git clone https://github.com/RafaelAbb/SocialNetwork.git
   ```
3. Clone the backend repository to your local machine:
   ```bash
   git clone https://github.com/DvirHayat/WEB-Course-backend.git
   ```
4. Navigate to the frontend project directory:
   ```bash
   cd socialnetwork/frontend
   ```
5. Install the required dependencies:
   ```bash
   npm install
   ```
6. Do step 5 for the backend directory:
   ```bash
   cd socialnetwork/WEB-Course-backend
   ```  

## Running the Project
- To run the project in development mode:
  ```bash
  npm run dev
  ```
- To create a production build:
  ```bash
  npm run build
  ```
- To start the production server:
  ```bash
  npm start
  ```
- Make sure you are in the right directory (one of the following):
   ```bash
   cd socialnetwork/WEB-Course-backend
   cd socialnetwork/frontend
   ``` 

## Code Structure (Frondend)
| Directory/File                | Description                                                   |
|--------------------------------|---------------------------------------------------------------|
| `public/`                      | Contains static assets like images, icons, and HTML templates |
| `src/`                         | Contains all React components and styling files               |
| `src/components/`              | Organized into subdirectories by feature or page              |
| `package.json`                 | Lists project dependencies and scripts                        |
| `tailwind.config.js`           | Tailwind CSS configuration                                    |

## Code Structure (Backend)
| Directory/File               | Description                                                   |
|------------------------------|---------------------------------------------------------------|
| `pages/api/`                  | Contains API route handlers                                   |
| `models/`                     | Mongoose models for MongoDB collections                       |
| `next.config.mjs`             | Configuration for Next.js                                     |

## API Endpoints
Here are some key API endpoints used in the application:

- **User Management**
  - `GET components/common/User`: Fetch Myself and all of the users.
  - `GET components/common/User`: Admin user verification.
  - `GET components/SigninPage/SignIn`: Verify's user signin values.
  - `POST components/registerPage/registerForm`: Create a new user.

- **Connections**
  - `GET components/common/User`: Fetch user connections.

## Usage
1. **Registration**: Sign up with your data when including work, country, and favorite hobby as well.
2. **Profile**: Present your profile including connections and thier profiles as well.
3. **Connection Graph**: Visualize your connections based on shared interests.
4. **Communication**: Send emails to your connections directly through the app.


## Example Code

Here is an example of an Get Connections using server API: 
```javascript
// Function to get 'users' data (connections) from the parsed cookie data
export const getUsers = async () => {
  try {

      const me = await getMe()
      const username = me.id_num
      const password = me.password
      const response = await fetch(`https://web-course-backend-seven.vercel.app/api/login?id_num=${username}&password=${password}`);

      // Check the status of the response
      switch (response.status) {
          case 200: // OK
              const data = await response.json();
              const users = data?.connections;
              console.log('users Array:', users);
              return users; // Returning array of users
          case 404: // Not Found
              console.error('Error: Data not found');
              return []; // Return an empty array if data is not found
          case 500: // Internal Server Error
              console.error('Error: Server error');
              return []; // Return an empty array if there is a server error
          default: // Other status codes
              console.error('Error: Unexpected status code:', response.status);
              return []; // Return an empty array for any other unexpected status codes
      }
  } catch (error) {
      console.error('Error fetching data:', error);
      return []; // Return an empty array if there is a fetch error
  }
};
```
Here is an example of an sign in validation using server API, after the user is validated the user data is saved using cookies: 
```javascript
  const SignInUser = async (e) => {
    e.preventDefault();
    const url = `https://web-course-backend-seven.vercel.app/api/login?id_num=${username}&password=${password}`;
    try {
      const response = await fetch(url, {
        method: 'GET',
      });

      if (response.status === 200) {
        try{
        } catch(error){};

        const data = await response.json();
        console.log("Data from server: ", data);
        Cookies.set('userData', JSON.stringify(data.user), { expires: 1 / 24, path: '/' });
// The rest is not presented...
```
Here is an example of an loging out and deleting the cookie of the logged user: 
```javascript
  const handleLogout = () => {
    // Delete the user data cookie
    Cookies.remove('userData', { path: '/' });
    
    // Call the onLogout callback to perform any additional logout actions
    if (onLogout) {
      onLogout();
    }
  };
```

## Additional help
For more detailed guidelines, please refer to `DvirTheking@braude.ac.il` mail.
