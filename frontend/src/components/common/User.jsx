import Cookies from 'js-cookie';

// Function to get user data from the 'userData' cookie
export const getUserDataFromCookie = () => {
  // Retrieve the cookie
  const userData = Cookies.get('userData');
  
  // If the cookie exists, try to parse it
  if (userData) {
    try {
      const parsedData = JSON.parse(userData);
      return parsedData; // Return parsed data if successful
    } catch (error) {
      console.error('Error parsing userData cookie:', error);
      return null; // Return null if parsing fails
    }
  }
  
  return null; // Return null if cookie does not exist
};

// Function to get 'me' data (user) from the parsed cookie data
export const getMe = () => {
  const userData = getUserDataFromCookie();
  return userData && userData ? userData : null; // Return user data or null
};

// Function to get 'users' data (connections) from the parsed cookie data
export const getUsers = async () => {
  try {

      const me = await getMe()
      const username = me.id_num;
      // console.log('Im the usernameeeeee (id_num)',username);
      //const password = me.password
      const response =await fetch( (me.rule === 'admin')? 
    'http://localhost:3000/api/adminUtil' 
    : `http://localhost:3000/api/userUtil?id_num=${username}`);

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

export const isAdmin = () => {
  const me = getMe();
  return me?.role === "admin";
};
