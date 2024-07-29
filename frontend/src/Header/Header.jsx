import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import dp from '../assets/dp.jpg';
import Logo from '../assets/Logo.png';
import './Header.scss';
import Menu from './Menu';

function Header() {
    const [isProfileDialogOpen, setProfileDialogOpen] = useState(false);
    const [isHamburgerDialogOpen, setHamburgerDialogOpen] = useState(false);

    const toggleProfileDialog = () => {
        setProfileDialogOpen(!isProfileDialogOpen);
    };

    const toggleHamburgerDialog = () => {
        setHamburgerDialogOpen(!isHamburgerDialogOpen);
    };

    return (
        <section id="body">
            <header id="head">
                <div id="hamburger" onClick={toggleHamburgerDialog}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <div id="logo">
                    <img src={Logo} alt="companion logo" />
                </div>
                <div id="menu-wrapper">
                    <Menu />
                </div>
                <div className="right-section">
                    <button id="log-out">Logout</button>
                    <img src={dp} alt="profile" />
                    <FontAwesomeIcon id="ellipsis" icon={faEllipsisV} onClick={toggleProfileDialog} />
                </div>
            </header>
            {isProfileDialogOpen && (
                <div className="dialog profile-dialog">
                    <button onClick={toggleProfileDialog} id="dialog-close">X</button>
                    <button id="log-out-dialog">Logout</button>
                </div>
            )}
            {isHamburgerDialogOpen && (
                <div className="dialog hamburger-dialog">
                    <button onClick={toggleHamburgerDialog} id="dialog-close">X</button>
                    <Menu />
                </div>
            )}
        </section>
    );
}

export default Header;
