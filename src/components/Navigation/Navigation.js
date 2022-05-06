import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <h1>Bookstore CMS</h1>
            <div>
                <NavLink exact to="/" activeClassName="nav-active">Books</NavLink>
                <NavLink exact to="/Categories" activeClassName="nav-active">Categories</NavLink>
            </div>
        </div>
    );
};

export default Navigation;