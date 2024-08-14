
// Fetch work from server
export const fetchWorkOptions = async () => {
  try {
      const response = await fetch('https://web-course-backend-seven.vercel.app/api/workplaceUtil');

      // Check the status of the response
      switch (response.status) {
          case 200: // OK
              const data = await response.json();
              // Ensure the data is an array before processing
              if (Array.isArray(data)) {
                  // Create an array of workplace names
                  const workplaces = data.map(item => item.workplace);
                  console.log('Workplaces Array:', workplaces);
                  return workplaces; // Returning the array if needed
              } else {
                  console.error('Error: Data is not an array:', data);
                  return []; // Return an empty array if data is not an array
              }
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
  

export const fetchHobbies = async () => {
  try {
      const response = await fetch('https://web-course-backend-seven.vercel.app/api/hobbiesUtil');

      // Check the status of the response
      switch (response.status) {
          case 200: // OK
              const data = await response.json();
              // Ensure the data is an array before processing
              if (Array.isArray(data)) {
                  // Create an array of workplace names
                  const hobbies = data.map(item => item.hobby);
                  console.log('Workplaces Array:', hobbies);
                  return hobbies; // Returning the array if needed
              } else {
                  console.error('Error: Data is not an array:', data);
                  return []; // Return an empty array if data is not an array
              }
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