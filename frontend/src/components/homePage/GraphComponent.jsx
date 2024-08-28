import React, { useEffect, useState, useContext, useRef } from 'react';
import { DataSet, Network } from 'vis-network/standalone';
import {
  getGraphOptions,
  getEdgeColor,
  classifyUsers,
  classifySpecificUser,
  createNodes,
  addEdgesToMe,
} from './GraphOptions';
import FilterButtons from './FilterButtons';
import Legend from './Legend';
import { getMe, getUsers } from '../common/User';
import { DarkModeContext } from '../context/DarkModeContext'; // Import the context

const GraphComponent = () => {
  const { isDarkMode } = useContext(DarkModeContext); // Use context
  const [users, setUsers] = useState([]); // State for users
  const [filter, setFilter] = useState('all'); // State for filter
  const networkRef = useRef(null); // Ref to hold network instance

  // Fetch users when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      const usersArray = await getUsers();
      console.log("Fetched users:", usersArray); // Log fetched users
      setUsers(usersArray);
    };

    fetchUsers();
  }, []);

  // Render the graph whenever users or filter state changes
  useEffect(() => {
    const renderGraph = () => {
      // Get the container element
      const container = document.getElementById('network-graph');

      if (!container) {
        console.error('Container #network-graph not found.');
        return;
      }

      // Get the current user (me)
      const me = getMe();
      if (!me) {
        console.error('User data for "me" is not available.');
        return;
      }

      // Ensure users array is not empty
      if (!Array.isArray(users) || users.length === 0) {
        console.error('User data for connections is not available or empty.');
        return;
      }

      // Classify users by hobby, country, and workplace
      const classifiedUsers = classifyUsers(users);

      // Create nodes for the graph
      const nodes = createNodes(users, me);
      const edges = new DataSet(); // Create edges for the graph

      // Get classified users specific to 'me'
      const { commonHobby, commonCountry, commonWorkplace } = classifySpecificUser(classifiedUsers, me);

      // Add edges based on the current filter
      if (filter === 'all') {
        addEdgesToMe(edges, me, commonHobby, getEdgeColor('hobby'));
        addEdgesToMe(edges, me, commonCountry, getEdgeColor('country'));
        addEdgesToMe(edges, me, commonWorkplace, getEdgeColor('workplace'));
      } else if (filter === 'hobby') {
        addEdgesToMe(edges, me, commonHobby, getEdgeColor('hobby'));
      } else if (filter === 'country') {
        addEdgesToMe(edges, me, commonCountry, getEdgeColor('country'));
      } else if (filter === 'workplace') {
        addEdgesToMe(edges, me, commonWorkplace, getEdgeColor('workplace'));
      }

      // Define the graph data and options
      const data = { nodes, edges };
      const options = getGraphOptions({ isDarkMode });

      // Create the graph instance only if it doesn't exist
      if (!networkRef.current) {
        networkRef.current = new Network(container, data, options);
      } else {
        // Update the existing network with new data and options
        networkRef.current.setData(data); // Update nodes and edges
        networkRef.current.setOptions(getGraphOptions({ isDarkMode })); // Update options
      }

      // Debugging logs
      console.log("Nodes:", nodes.get());
      console.log("Edges:", edges.get());
    };

    renderGraph(); // Render the graph

  }, [users, filter, isDarkMode]); // Re-render on changes to users, filter, or dark mode

  return (
    <div className="min-h-screen">
      <FilterButtons setFilter={setFilter} /> {/* Render filter buttons */}
      <div id="network-graph" className="w-4/5 h-[500px] border-4 border-black mx-auto my-auto flex justify-center items-center"></div>
      <Legend /> 
    </div>
  );
};

export default GraphComponent;
