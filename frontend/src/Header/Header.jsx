import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import dp from '../assets/dp.jpg';
import Logo from '../assets/Logo.png';
import './Header.scss';
import Menu from './Menu.jsx';

function Header() {
    return (
        <header id="header">
            <div id="hamburger">
                <FontAwesomeIcon icon={faBars} aria-label="Menu" />
            </div>
            <Menu />
            <div id="logo">
                <img src={Logo} alt="companion logo" />
            </div>
            <button id="log-out">Logout</button>
            <div id="profile-pic">
                <img src={dp} alt="profile" />
            </div>
        </header>
    );
}

export default Header;
