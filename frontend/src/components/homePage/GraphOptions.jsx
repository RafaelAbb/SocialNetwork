// src/common/GraphOptions.js
import { DataSet } from 'vis-network/standalone';

// Function to get graph options
export const getGraphOptions = () => ({
  nodes: {
    shape: 'dot',
    size: 32,
    font: {
      size: 32,
      color: '#314155',
    },
    borderWidth: 2,
  },
  edges: {
    width: 3,
    color: {
      color: '#848484',
      highlight: '#848484',
      hover: '#848484',
      opacity: 3,
    },
    smooth: {
      type: 'dynamic',
    },
  },
  physics: {
    enabled: true,
    solver: 'forceAtlas2Based',
    forceAtlas2Based: {
      gravitationalConstant: -50,
      centralGravity: 0.01,
      springLength: 300,
      springConstant: 0.05,
    },
    maxVelocity: 50,
    minVelocity: 0.1,
    stabilization: {
      enabled: true,
      iterations: 1000,
    },
    timestep: 0.5,
  },
  layout: {
    improvedLayout: true,
  },
});

// Function to get edge color based on attribute
export const getEdgeColor = (key) => {
  switch (key) {
    case 'workplace': return 'orange';
    case 'hobby': return 'green';
    case 'country': return 'purple';
    default: return 'gray';
  }
};

// Function to classify users based on common attributes
export const classifyUsers = (users) => {
  const commonAttributes = ['hobby', 'country', 'workplace'];
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
      commonCountry: [],
      commonWorkplace: [],
    };
  }

  // Extract common hobby, state, and workplace connections
  const commonHobby = (classifiedUsers['hobby'] && classifiedUsers['hobby'][user.hobby]) || [];
  const commonCountry = (classifiedUsers['country'] && classifiedUsers['country'][user.country]) || [];
  const commonWorkplace = (classifiedUsers['workplace'] && classifiedUsers['workplace'][user.workplace]) || [];

  return { commonHobby, commonCountry, commonWorkplace };
};

// Function to create nodes for the graph
export const createNodes = (users, me) => {
  return new DataSet([
    ...users.map(user => ({
      id: user.id_num,
      label: `${user.firstName} ${user.lastName}`
    })),
    { id: me.id_num, label: 'Me', color: { background: 'red', border: 'black' }, size: 30 }
  ]);
};

// Function to create an edge between two users with a specified color
export const connectEdge = (edges, user1, user2, color) => {
  edges.add({ from: user1.id_num, to: user2.id_num, color: { color, inherit: false, opacity: 2 } });
};

// Function to add edges to 'me' from a list of users
export const addEdgesToMe = (edges, me, users, color) => {
  if (!users) return;
  users.forEach(user => {
    connectEdge(edges, me, user, color);
  });
};
