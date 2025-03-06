import React from 'react';

const Departments = () => {
  return (
    <div className="departments-container">
      <h2 className="departments-title">Our Departments</h2>
      <div className="departments-grid">
        <div className="department-card">
          <span className="department-icon">✦</span>
          <h3 className="department-name">MACHINE LEARNING</h3>
          <p className="department-description">
            In our machine learning roles, we use established AI/ML models or develop proprietary ones to optimize performance and address project-specific needs.
          </p>
        </div>
        <div className="department-card">
          <span className="department-icon">✦</span>
          <h3 className="department-name">BACKEND</h3>
          <p className="department-description">
            Backend roles oversee the technical infrastructure of our software. They manage tasks related to data, hosting, and ensuring the smooth and secure operation of our applications.
          </p>
        </div>
        <div className="department-card">
          <span className="department-icon">✦</span>
          <h3 className="department-name">FRONTEND</h3>
          <p className="department-description">
            The frontend department creates visually appealing and intuitive interfaces for our software projects, prioritizing simplicity and usability to enhance the overall user experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Departments;