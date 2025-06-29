import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">eSantiyem</div>
      <div className="menu-right">
        <select className="categories-dropdown">
          <option>Categories</option>
          <option>Design</option>
          <option>Development</option>
          <option>Marketing</option>
        </select>
        <button className="btn">Login</button>
        <button className="btn">Register</button>
      </div>
    </nav>
  );
}

export default Navbar;
