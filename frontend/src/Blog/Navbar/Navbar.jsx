import React, { useState, useEffect, useRef } from 'react';
// import { NavLink } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="main-container">
            <div className={`container ${isOpen ? 'shift' : ''}`}>
                <div className="hamburger-menu" ref={menuRef}>
                    <button
                        className="hamburger-button"
                        onClick={toggleMenu}
                        aria-expanded={isOpen}
                        aria-label="Toggle navigation"
                    >
                        ☰
                    </button>
                    <div className={`nav-links ${isOpen ? 'show' : ''}`}>
                        <a href="/Blog/AddBlog" onClick={toggleMenu}>Add Blog</a> {/* Use Link instead of a */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
