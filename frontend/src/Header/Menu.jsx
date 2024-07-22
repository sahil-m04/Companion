import React from "react";
import { NavLink } from 'react-router-dom';
function Menu() {
    return (
        <>
            <nav className="navbar">
                <ul className="navbar-links">
                    <li>
                        <NavLink href="/" className="navbar-link">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/About" className="navbar-link">
                            About
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Menu;