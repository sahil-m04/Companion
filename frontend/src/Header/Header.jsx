import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import dp from '../assets/dp.jpg';
import Logo from '../assets/Logo.png';
import './Header.scss'
function Header() {
    return (
        <section id="body">
        <header id="head">
            <div id="hamburger">
            <FontAwesomeIcon icon={faBars}/>
            </div>
            <p></p>
            <div id='logo'>
                <img src={Logo} alt="companion" />
            </div>
            </header>
            <button id="log-out">Logout</button>
            <img src={dp} alt="profile" />
        
    </section>
    );
}

export default Header;
