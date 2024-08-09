// src/components/homePage/GraphComponent.js
import React, { useEffect, useState } from 'react';
import { DataSet, Network } from 'vis-network/standalone';
import { getGraphOptions, getEdgeColor, classifyUsers, classifySpecificUser, createNodes, addEdgesToMe } from './GraphOptions';
import FilterButtons from './FilterButtons';
import Legend from './Legend';
import { getMe, getUsers } from '../common/User';

// Main graph component
const GraphComponent = () => {
  const [users, setUsers] = useState([]); // State for users
  const [filter, setFilter] = useState('all'); // State for filter

  // Fetch users data when the component mounts
  useEffect(() => {
    const userData = getUsers();
    console.log("Fetched users:", userData); // Log fetched users
    setUsers(userData);
  }, []);

  // Render the graph whenever users or filter state changes
  useEffect(() => {
    const renderGraph = (users, filter) => {
      // Create a container for the graph
      let container = document.getElementById('network-graph');

      if (!container) {
        container = document.createElement('div');
        container.id = 'network-graph';
        document.body.appendChild(container);
      }

      // Get myself as a user
      const me = getMe();

      // Ensure 'me' is defined before proceeding
      if (!me) {
        console.error('User data for "me" is not available.');
        return;
      }

      // Ensure users array is not empty
      if (!Array.isArray(users) || users.length === 0) {
        console.error('User data for connections is not available or empty.');
        return;
      }

      // Classify users by hobby, state, and workplace
      const classifiedUsers = classifyUsers(users);

      // Create nodes for the graph
      const nodes = createNodes(users, me);
      const edges = new DataSet(); // Create edges for the graph

      // Get classified users specific to 'me'
      const { commonHobby, commonState, commonWorkplace } = classifySpecificUser(classifiedUsers, me);

      // Add edges based on the current filter
      if (filter === 'all') {
        addEdgesToMe(edges, me, commonHobby, getEdgeColor('hobby'));
        addEdgesToMe(edges, me, commonState, getEdgeColor('state'));
        addEdgesToMe(edges, me, commonWorkplace, getEdgeColor('workplace'));
      } else {
        if (filter === 'hobby') {
          addEdgesToMe(edges, me, commonHobby, getEdgeColor('hobby'));
        } else if (filter === 'state') {
          addEdgesToMe(edges, me, commonState, getEdgeColor('state'));
        } else if (filter === 'workplace') {
          addEdgesToMe(edges, me, commonWorkplace, getEdgeColor('workplace'));
        }
      }

      const data = { nodes, edges }; // Define graph data
      const options = getGraphOptions(); // Get graph options
      new Network(container, data, options); // Create the graph
    };

    renderGraph(users, filter); // Call renderGraph whenever users or filter state changes
  }, [users, filter]);

  return (
    <div>
      <FilterButtons setFilter={setFilter} /> {/* Render filter buttons */}
      <div id="network-graph" className="w-4/5 h-[500px] border-4 border-black mx-auto my-auto flex justify-center items-center"></div>
      <Legend /> {/* Render legend */}
    </div>
  );
};

export default GraphComponent;
