// src/common/GraphOptions.js
import { DataSet } from 'vis-network/standalone';

// Function to get graph options
export const getGraphOptions = ({ isDarkMode }) => ({
  nodes: {
    shape: 'dot',
    size: 32,
    font: {
      size: 32,
      color: isDarkMode ? '#D1D5DB' : '#314155', // Adjusted font color for dark mode
    },
    borderWidth: 2,
  },
  edges: {
    width: 3,
    color: {
      color: isDarkMode ? '#D1D5DB' : '#848484',
      highlight: isDarkMode ? '#D1D5DB' : '#848484',
      hover: isDarkMode ? '#D1D5DB' : '#848484',
      opacity: 0.8, // Adjusted opacity for better visual clarity
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
  const colorMap = {
    workplace: 'orange',
    hobby: 'green',
    country: 'purple',
  };
  return colorMap[key] || 'gray';
};

// Function to classify users based on common attributes
export const classifyUsers = (users) => {
  const attributeDict = {
    hobby: {},
    country: {},
    workplace: {},
  };

  users.forEach(user => {
    Object.keys(attributeDict).forEach(attr => {
      const value = user[attr];
      if (value) {
        if (!attributeDict[attr][value]) {
          attributeDict[attr][value] = [];
        }
        attributeDict[attr][value].push(user);
      }
    });
  });

  return attributeDict;
};

// Function to classify a specific user's connections by common attributes
export const classifySpecificUser = (classifiedUsers, user) => {
  if (!user) {
    return {
      commonHobby: [],
      commonCountry: [],
      commonWorkplace: [],
    };
  }

  const commonHobby = classifiedUsers.hobby?.[user.hobby] || [];
  const commonCountry = classifiedUsers.country?.[user.country] || [];
  const commonWorkplace = classifiedUsers.workplace?.[user.workplace] || [];

  return { commonHobby, commonCountry, commonWorkplace };
};

// Function to create nodes for the graph
export const createNodes = (users, me) => {
  const nodes = users.map(user => ({
    id: user.id_num,
    label: `${user.firstName} ${user.lastName}`,
  }));

  nodes.push({
    id: me.id_num,
    label: 'Me',
    color: { background: 'red', border: 'black' },
    size: 30,
  });

  return new DataSet(nodes);
};

// Function to create an edge between two users with a specified color
export const connectEdge = (edges, user1, user2, color) => {
  edges.add({
    from: user1.id_num,
    to: user2.id_num,
    color: { color, inherit: false, opacity: 0.8 }, // Adjusted opacity
  });
};

// Function to add edges to 'me' from a list of users
export const addEdgesToMe = (edges, me, users, color) => {
  if (!users) return;
  users.forEach(user => connectEdge(edges, me, user, color));
};
