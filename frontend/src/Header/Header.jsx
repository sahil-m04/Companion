import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import dp from '../assets/dp.jpg';
import Logo from '../assets/Logo.png';
import './Header.scss';
import Menu from './Menu';
import logout from '../assets/logout.png';
import addblog from '../assets/notes.png';

function Header() {
    const [isProfileDialogOpen, setProfileDialogOpen] = useState(false);
    const [isHamburgerDialogOpen, setHamburgerDialogOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const toggleProfileDialog = () => {
        setProfileDialogOpen(!isProfileDialogOpen);
    };

    const toggleHamburgerDialog = () => {
        setHamburgerDialogOpen(!isHamburgerDialogOpen);
    };

    const navigateToAddBlog = () => {
        navigate('/Blog/AddBlog');
    };

    return (
        <section id="body">
            <header id="head">
                <div id="hamburger" onClick={toggleHamburgerDialog} aria-label='Open '>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <div id="logo">
                    <img src={Logo} alt="companion logo" />
                </div>
                <div id="menu-wrapper">
                    <Menu />
                </div>
                <div className="right-section">
                    {location.pathname.startsWith('/Blog') && (
                        <button className="add-blog-button" onClick={navigateToAddBlog} aria-label='Write Blog'>
                            <img src={addblog} alt="WriteBlog" />
                            Write
                        </button>
                    )}
                    <button className="profile-button" onClick={toggleProfileDialog} aria-label='Open Profile Dialog'>
                        <img src={dp} alt="profile" />
                    </button>
                </div>
            </header>
            {isProfileDialogOpen && (
                <div className="dialog profile-dialog">
                    <button onClick={toggleProfileDialog} id="dialog-close">X</button>
                    {window.innerWidth <= 768 && location.pathname.startsWith('/Blog') && (
                        <button className="add-blog-button-dialog" onClick={navigateToAddBlog} aria-label='Write Blog'>
                            <img src={addblog} alt="AddBlog" />
                            Write
                        </button>
                    )}
                    <button id="log-out-dialog" aria-label='Logout'>
                        <img src={logout} alt="Logout" />
                        Logout
                    </button>
                </div>
            )}
            {isHamburgerDialogOpen && (
                <div className="dialog hamburger-dialog">
                    <button onClick={toggleHamburgerDialog} id="dialog-close">X</button>
                    <div id="hamlogo">
                        <img src={Logo} alt="companion logo" />
                    </div>
                    <Menu />
                </div>
            )}
        </section>
    );
}

export default Header;
