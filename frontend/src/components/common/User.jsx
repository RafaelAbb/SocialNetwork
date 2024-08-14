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
  console.log(`Got me ${userData?.user}`)
  return userData && userData.user ? userData.user : null; // Return user data or null
};

// Function to get 'users' data (connections) from the parsed cookie data
export const getUsers = () => {
  const userData = getUserDataFromCookie();
  console.log(`Got users ${userData?.connections}`)
  return userData && Array.isArray(userData.connections) ? userData.connections : []; // Return connections array or empty array
};

export const isAdmin = () => {
  // const me = getMe();
  // // Check if the user's role is 'admin'
  // console.log("admin check")
  // console.log(me)
  // return me?.first === 'admin';
  return true
};
