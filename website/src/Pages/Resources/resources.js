import React from 'react';
import './resources.css';

const Resources = () => {
  return (
    <div className="resume-guide">
      <section className="guide-section">
        <h2>Slides from the Resume Workshop</h2>
        <p>Access the slides from the resume workshop:</p>
        <div className="button">
          <a href="../../files/Sample-Resume-Undergraduate-2023-Final.pdf" download>View Slides</a>
        </div>
      </section>

      <section className="guide-section">
        <h2>McComb’s Resume Guide and Template</h2>
        <p>Download the guide and template to create a standout resume:</p>
        <div className="button-container">
          <div className="button">
            <a href="../../files/Sample-Resume-Undergraduate-2023-Final.pdf" download>Download Word General Template</a>
          </div>
          <div className="button">
            <a href="../../files/Sample-Resume-Undergraduate-2023-Final.pdf" download>Download PDF General Template</a>
          </div>
          <div className="button">
            <a href="../../files/Sample-Resume-Undergraduate-2023-Final.pdf" download>Download Technical Resume Template (Word)</a>
          </div>
        </div>
      </section>

      <section className="guide-section">
        <h2>Cockrell Resume Template</h2>
        <p>Access the Cockerel resume template for undergraduate applications:</p>
        <div className="button-container">
          <div className="button">
            <a href="../../files/Sample-Resume-Undergraduate-2023-Final.pdf" download>Download PDF Template</a>
          </div>
        </div>
      </section>

      <section className="guide-section">
        <h2>CNS Resume Templates</h2>
        <p>Choose between technical and general resume templates for your needs:</p>
        <div className="button-container">
          <div className="button">
            <a href="../../files/Sample-Resume-Undergraduate-2023-Final.pdf" download>Download Technical Resume Template (Word)</a>
          </div>
          <div className="button">
            <a href="../../files/Sample-Resume-Undergraduate-2023-Final.pdf" download>Download General Resume Template (Word)</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;