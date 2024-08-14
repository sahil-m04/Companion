import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.scss'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>COMPANION</h2>
          <p>
            At COMPANION, we are dedicated to providing comprehensive support and resources for mental health and well-being. Join us in fostering a community that values mental health and offers support to those in need.
          </p>
        </div>

        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
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
                    <NavLink to="/Blog/Blogs" className="navbar-link">
                        Blogs
                    </NavLink>
                </li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <ul>
            <li>Email: companion@gmail.com</li>
            <li>Phone: +91-8218784150</li>
            <li>Address: 123 Bell Road, Dehradun, Uttarakhand, 824001</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} COMPANION. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
