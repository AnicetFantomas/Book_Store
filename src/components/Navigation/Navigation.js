import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

const Navigation = () => (
  <div className="navigation-container">
    <h1>Bookstore CMS</h1>
    <div className="links">
      <NavLink exact to="/" activeClassName="nav-active" className="nav-link">Books</NavLink>
      <NavLink exact to="/Categories" activeClassName="nav-active" className="nav-link">Categories</NavLink>
    </div>
  </div>
);

export default Navigation;
