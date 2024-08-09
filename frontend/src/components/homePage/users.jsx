// Function to classify users based on common attributes
export const classifyUsers = (users) => {
  const commonAttributes = ['hobby', 'state', 'workplace'];
  const attributeDict = {};

  // Initialize dictionary with attributes as keys and empty objects as values
  commonAttributes.forEach(attr => {
    attributeDict[attr] = {};
  });

  // Classify users based on common attributes
  users.forEach(user => {
    commonAttributes.forEach(attr => {
      const userAttributeValue = user[attr];
      if (userAttributeValue) { // Ensure the attribute value is not null or undefined
        if (!attributeDict[attr][userAttributeValue]) {
          attributeDict[attr][userAttributeValue] = [];
        }
        attributeDict[attr][userAttributeValue].push(user);
      }
    });
  });

  return attributeDict;
};



// Function to classify a specific user's connections by common attributes
export const classifySpecificUser = (classifiedUsers, user) => {
  if (!user) { // Check if the user object is defined
    return {
      commonHobby: [],
      commonState: [],
      commonWorkplace: [],
    };
  }

  // Extract common hobby, state, and workplace connections
  const commonHobby = (classifiedUsers['hobby'] && classifiedUsers['hobby'][user.hobby]) || [];
  const commonState = (classifiedUsers['state'] && classifiedUsers['state'][user.state]) || [];
  const commonWorkplace = (classifiedUsers['workplace'] && classifiedUsers['workplace'][user.workplace]) || [];

  return { commonHobby, commonState, commonWorkplace };
};


