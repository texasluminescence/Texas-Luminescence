import React from 'react';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="newsletter-container">
        <h2 className="newsletter-title">Join Our Newsletter</h2>
        <p className="newsletter-text">Stay in the loop with everything you need to know about us.</p>
        <button className="newsletter-btn">SIGN UP</button>
      </div>
      <div className="footer-links">
        <div className="footer-section">
          <div className="footer-logo"></div>
          <p className="footer-brand">Texas Luminescence</p>
        </div>
        <div className="footer-section">
          <h3 className="footer-section-title">Resources</h3>
          <ul className="footer-list">
            <li>Projects</li>
            <li>Resume Guide</li>
            <li>Calendar</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-section-title">Connect</h3>
          <ul className="footer-list">
            <li>Interest Form</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-section-title">Socials</h3>
          <ul className="footer-list">
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>HornsLink</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;