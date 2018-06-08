import React from 'react';

const Navbar = (props) => {
  return (
    <div className="navBar">
      <button className="navButton" >
        Login
      </button>
      <button className="navButton">
        Logout
      </button>
    </div>
  )
}

export default Navbar;
