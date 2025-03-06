import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import luminescenceLogo from '../Assets/logos/luminescence_logo.jpeg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={luminescenceLogo} alt="Texas Luminescence Logo" className="logo" />
        <Link to="/" className="navbar-title">Texas Luminescence</Link> {/* Link to home page */}
      </div>
      <ul className="nav-links">
        <li><a href="/projects">Projects</a></li>
        <li><a href="/recruitment">Recruitment</a></li>
        <li><a href="/resources">Resources</a></li>
        <li><a href="/calendar">Calendar</a></li>
        <li><a href="/faq">FAQs</a></li>
      </ul>
      <button className="interest-form">Interest Form</button>
    </nav>
  );
};

export default Navbar;