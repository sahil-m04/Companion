import React from "react";
import { NavLink } from 'react-router-dom';
import './Menu.scss';

function Menu() {
    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li>
                    <NavLink to="/Home" className="navbar-link" activeclassname="active">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/About" className="navbar-link" activeclassname="active">
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Bookrecommender" className="navbar-link" activeclassname="active">
                        Books
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Resources" className="navbar-link" activeclassname="active">
                        Resources
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Chat" className="navbar-link" activeclassname="active">
                        Chat
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Blog/Blogs" className="navbar-link" activeclassname="active">
                        Blogs
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;
