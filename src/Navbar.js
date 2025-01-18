import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../src/logo.jpg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/solar">Solar</a></li>
        <li><a href="/construction">Construction</a></li>
        <li><a href="/projects">Projects</a></li>
        <li className="contact-btn"><a href="/contact">Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
