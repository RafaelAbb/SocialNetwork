import React, { useEffect, useState } from 'react';
import { DataSet, Network } from 'vis-network/standalone';
import { getGraphOptions, getEdgeColor } from './GraphOptions';
import FilterButtons from './FilterButtons';
import Legend from './Legend';
import { classifyUsers, classifySpecificUser } from './Users';
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

      // Function to create an edge between two users with a specified color
      const connectEdge = (user1, user2, color) => {
        edges.add({ from: user1.id_num, to: user2.id_num, color: { color, inherit: false, opacity: 2 } });
      };

      // Function to add edges to 'me' from a list of users
      const addEdgesToMe = (users, color) => {
        if (!users) return;
        users.forEach(user => {
          connectEdge(me, user, color);
        });
      };

      // Function to create nodes for the graph
      const createNodes = () => {
        return new DataSet([
          ...users.map(user => ({
            id: user.id_num,
            label: `${user.firstName} ${user.lastName}`
          })),
          { id: me.id_num, label: 'Me', color: { background: 'red', border: 'black' }, size: 30 }
        ]);
      };

      // Get classified users specific to 'me'
      const { commonHobby, commonState, commonWorkplace } = classifySpecificUser(classifiedUsers, me);

      const nodes = createNodes(); // Create nodes for the graph
      const edges = new DataSet(); // Create edges for the graph

      // Add edges based on the current filter
      if (filter === 'all') {
        addEdgesToMe(commonHobby, getEdgeColor('hobby'));
        addEdgesToMe(commonState, getEdgeColor('state'));
        addEdgesToMe(commonWorkplace, getEdgeColor('workplace'));
      } else {
        if (filter === 'hobby') {
          addEdgesToMe(commonHobby, getEdgeColor('hobby'));
        } else if (filter === 'state') {
          addEdgesToMe(commonState, getEdgeColor('state'));
        } else if (filter === 'workplace') {
          addEdgesToMe(commonWorkplace, getEdgeColor('workplace'));
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
