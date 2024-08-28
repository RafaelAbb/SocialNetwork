
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
- [Main Files](#main-files)
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
      git clone https://github.com/DvirHayat/WEB-Course-backend
      cd next-backend
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

### Set up environment variables for backend: 
Create a .env.local file in the root directory and add your MongoDB connection string:
```code
      MONGODB_URI=your-mongodb-uri
 ```
or change `db_URI` in `lib/mongodb.js` 

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

## Main Files

### Frondend Files

- **`Menu.jsx`**  
  Implements the sidebar or dropdown menu for navigation. This component is often used to toggle between different sections or features within the application.

- **`DarkLight.jsx`**  
  A component that enables users to toggle between dark and light themes. It manages the theme state and applies the appropriate styles across the application.

- **`profilePage/ProfilePage.jsx`**  
  The main component for displaying and managing user profiles. It includes functionality for viewing user details, editing profiles if admin , and contacting other connections.

- **`homePage/GraphComponent.jsx`**  
  Renders the connection graph on the homepage. It visualizes user connections based on shared interests like work, country, and hobbies.

- **`homePage/GraphOptions.jsx`**  
  Provides filtering and customization options for the connection graph. adjust settings of the graph.

- **`registerPage/RegisterForm.jsx`**  
  Handles user registration by collecting information such as work, country, and hobbies. It manages the form submission process and communicates with the backend to create a new user account.

- **`signInPage/SignIn.jsx`**  
  Manages the user authentication process. This component includes the login form where users provide their credentials (email and password) to access their accounts. It interacts with the backend to validate user credentials and handle sessions.

- **`AdminPage/AdminPage.jsx`**  
  The main component for administrative tasks within the application. It provides a dashboard interface where admins can manage users, hobbies, workplaces. Admins can perform tasks like deleting users, adding new hobbies, and more.

- **`tailwind.config.js`**  
  Configuration file for Tailwind CSS. It allows you to customize themes, extend the framework with additional utilities, and integrate plugins specific to your project needs.


### Backend Files
- **`login.js`**  
Handles user login by verifying the user ID and password. The file connects to the MongoDB database, authenticates users, and returns user details if the credentials are valid.

- **`register.js`**  
Manages user registration. It handles:
- **POST requests**: Registers new users, ensuring no duplicate emails or IDs are added to the database.
- **GET requests**: Provides a list of available hobbies and workplaces for the registration process.

- **`userUtil.js`**  
Provides utility functions to fetch user connections and details. It allows users to find connections based on shared fields such as workplace, country, and hobby.

- **`adminUtil.js`**  
Contains administrative functions, allowing admins to:
- Fetch all users (`GET` requests).
- Delete users by email (`DELETE` requests).

- **`hobbyUtil.js`**  
Manages hobbies within the application. It handles:
- **GET requests**: Retrieves all hobbies.
- **PUT requests**: Adds a new hobby.
- **DELETE requests**: Removes a hobby by name (only through admin).

- **`workplaceUtil.js`**  
Manages workplaces within the application. It handles:
- **GET requests**: Retrieves all workplaces.
- **PUT requests**: Adds a new workplace.
- **DELETE requests**: Removes a workplace by name (only through admin).


## API Endpoints
Here are some key API endpoints used in the application:

- **`/api/login`**
  - **Method**: `POST`
  - **Description**: Authenticates a user with their `id_num` and `password`.
  - **Request Body**:
    ```json
    {
      "id_num": "user's ID number",
      "password": "user's password"
    }
    ```
  - **Response**:
    - `200 OK`: Returns user details if authentication is successful.
    - `401 Unauthorized`: If the credentials are invalid.

- **`/api/register`**
  - **Method**: `POST`
  - **Description**: Registers a new user.
  - **Request Body**:
    ```json
    {
      "firstName": "John",
      "lastName": "Doe",
      "email": "johndoe@example.com",
      "id_num": "123456",
      "country": "CountryName",
      "workplace": "WorkplaceName",
      "hobby": "HobbyName",
      "gender": "Gender",
      "password": "password",
      "birthday": "YYYY-MM-DD"
    }
    ```
  - **Response**:
    - `201 Created`: User registered successfully.
    - `400 Bad Request`: If any required fields are missing or the email/ID already exists.

- **`/api/userUtil`**
  - **Method**: `GET`
  - **Description**: Retrieves user connections based on shared attributes.
  - **Request Parameters**:
    - `id_num` (required): The current user's ID number.
    - `workplace` (optional): The workplace to match.
    - `country` (optional): The country to match.
    - `hobby` (optional): The hobby to match.
  - **Response**:
    - `200 OK`: Returns an array of users with shared attributes.

- **`/api/adminUtil`**
  - **Method**: `GET`
  - **Description**: Fetches all non-admin users in the database.
  - **Response**:
    - `200 OK`: Returns an array of users.

  - **Method**: `DELETE`
  - **Description**: Deletes a user by email.
  - **Request Body**:
    ```json
    {
      "email": "user@example.com"
    }
    ```
  - **Response**:
    - `200 OK`: User deleted successfully.
    - `404 Not Found`: If the user is not found.

  - **Method**: `PATCH`
  - **Description**: Deletes all users from the database (for debugging purposes).
  - **Response**:
    - `200 OK`: All users deleted successfully.

### Hobby Endpoints

- **`/api/hobbyUtil`**
  - **Method**: `GET`
  - **Description**: Fetches all hobbies.
  - **Response**:
    - `200 OK`: Returns an array of hobbies.

  - **Method**: `PUT`
  - **Description**: Adds a new hobby.
  - **Request Body**:
    ```json
    {
      "activity": "HobbyName"
    }
    ```
  - **Response**:
    - `201 Created`: Hobby added successfully.
    - `400 Bad Request`: If the hobby name is missing.

  - **Method**: `DELETE`
  - **Description**: Deletes a hobby by name.
  - **Request Body**:
    ```json
    {
      "activity": "HobbyName"
    }
    ```
  - **Response**:
    - `200 OK`: Hobby deleted successfully.
    - `404 Not Found`: If the hobby is not found.

### Workplace Endpoints

- **`/api/workplaceUtil`**
  - **Method**: `GET`
  - **Description**: Fetches all workplaces.
  - **Response**:
    - `200 OK`: Returns an array of workplaces.

  - **Method**: `PUT`
  - **Description**: Adds a new workplace.
  - **Request Body**:
    ```json
    {
      "workplace": "WorkplaceName"
    }
    ```
  - **Response**:
    - `201 Created`: Workplace added successfully.
    - `400 Bad Request`: If the workplace name is missing.

  - **Method**: `DELETE`
  - **Description**: Deletes a workplace by name.
  - **Request Body**:
    ```json
    {
      "workplace": "WorkplaceName"
    }
    ```
  - **Response**:
    - `200 OK`: Workplace deleted successfully.
    - `404 Not Found`: If the workplace is not found.


- **`next.config.js`**  
  Configures Next.js to rewrite API routes to the backend URL. This is essential for routing requests during development or in production.



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
