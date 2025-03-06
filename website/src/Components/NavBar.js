import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import luminescenceLogo from '../Assets/logos/luminescence_logo.jpeg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={luminescenceLogo} alt="Texas Luminescence Logo" className="logo" />
        <Link to="/" className="nav-title">Texas Luminescence</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="projects">Projects</Link></li>
        <li><Link to="recruitment">Recruitment</Link></li>
        <li><Link to="resources">Resources</Link></li>
        {/*<li><Link to="calendar">Calendar</Link></li>*/}
        <li><Link to="faq">FAQs</Link></li>
      </ul>
      <button className="interest-form">Interest Form</button>
    </nav>
  );
};

export default Navbar;