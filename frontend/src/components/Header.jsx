import React from 'react';

const Header = () => {
  const headerStyle = {
    textAlign: 'center',
    marginTop: '1rem',
    marginBottom: '0.5rem',
  };

  return (
    <div id="header" style={headerStyle}>
      <header>
        <h1 className="text-4xl font-bold">Social Network</h1>
        <hr className="border-t-2 border-gray-600 my-2 mx-auto w-full max-w-lg" />{} 
      </header>
    </div>
  );
};

export default Header;
