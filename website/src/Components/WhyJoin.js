import React from 'react';

const WhyJoin = () => {
  return (
    <div className="why-join-container">
      <div className="why-join-content">
        <div className="why-join-text">
          <h2 className="why-join-title">Why Join?</h2>
          <ul className="why-join-list">
            <li>✓ Learn more about Machine Learning concepts, Software Engineering, and Product Management</li>
            <li>✓ Meet like-minded students to work on a passionate project you can add to your resume!</li>
          </ul>
          <div className="why-join-buttons">
            <button className="btn interest-btn">INTEREST FORM</button>
            <button className="btn contact-btn">CONTACT US</button>
          </div>
        </div>
        <div className="why-join-image">
          <div className="image-placeholder">Image of students in a classroom (replace with actual image)</div>
        </div>
      </div>
      <h2 className="officer-board-title">Officer Board</h2>
    </div>
  );
};

export default WhyJoin;