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
  
  export const getEdgeColor = (key) => {
    switch (key) {
      case 'workplace': return 'orange';
      case 'hobby': return 'green';
      case 'state': return 'purple';
      default: return 'gray';
    }
  };

  export const getMe =()=>{ return {
    id_num: '000000000',
    firstName: 'Me',
    lastName: '',
    workplace: 'Tech Company Inc.',
    hobby: 'Reading',
    state: 'New York'
  };
}



export const getUsers = () =>{
  return [
    {
      "firstName": "John",
      "lastName": "Doe",
      "birthday": "1990-01-01",
      "workplace": "Tech Company Inc.",
      "email": "john.doe@example.com",
      "country": "United States",
      "city": "New York",
      "state": "New York",
      "gender": "Male",
      "id_num": "123456789",
      "hobby": "Reading"
    },
    {
      "firstName": "Jane",
      "lastName": "Smith",
      "birthday": "1985-05-15",
      "workplace": "Tech Company Inc.",
      "email": "jane.smith@example.com",
      "country": "Canada",
      "city": "Toronto",
      "state": "New York",
      "gender": "Female",
      "id_num": "987654321",
      "hobby": "Hiking"
    },
  ]
}
