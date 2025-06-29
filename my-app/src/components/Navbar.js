import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">eSantiyem</div>
      <div className="menu-right">
        <a href="#categories">Categories</a>
        <Link to="/login">Login / Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;
