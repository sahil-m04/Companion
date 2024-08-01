import React from "react";
import { NavLink } from 'react-router-dom';
import './Menu.scss';

function Menu() {
    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li>
                    <NavLink to="/Home" className="navbar-link">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/About" className="navbar-link">
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Bookrecommender" className="navbar-link">
                        Books
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Resources" className="navbar-link">
                        Resources
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Chat" className="navbar-link">
                        Chat
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Blogs" className="navbar-link">
                        Blogs
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;
