import React from 'react';
import './Navbar.css';
import Logo from '../src/logo.jpg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="logo" />
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/solar">Solar</a></li>
        <li><a href="/construction">Construction</a></li>
        <li><a href="#projects">Projects</a></li>
        <li className='contact-btn'><a href="#contact">Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
