import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/project_page.css';

function JobSense() {
  return (
    <>
      <div className="center-content">
        <h1>JobSense</h1>
        <hr />
        <p>JobSense is an AI-powered web application that analyzes and visualizes job market trends to help job seekers and businesses align their skills and hiring strategies.

        By utilizing natural language processing and time forecasting techniques, JobSense analyzes current job postings to help users better understand trending roles and skills in their industry.
        </p>
      </div>

      <div className="section project-showcase">
        <h2 className="text-center">Explore Our Project</h2>
        <p className="text-center">Check out our GitHub repository and coming soon will be our official website to learn more about JobSense:</p>
        <div className="text-center">
          <button 
            onClick={() => window.location.href='https://github.com/texasluminescence/job-trend-analyzer'} 
            className="project-button">
            View Repository
          </button>
          <Link to="/coming-soon" className="project-button">
            Visit Website
          </Link>
        </div>
      </div>

      <div className="section team-members">
        <h2>Team Members</h2>
        <div className="roles-list">
          <span className="chip">Lead Full Stack Engineer: Abby Kremer</span>
          <span className="chip">Full Stack Engineer: Arnav Bhasin</span>
          <span className="chip">Full Stack Engineer: Arhaan Nisar</span>
          <span className="chip">Full Stack Engineer: Anh Nguyen</span>
          <span className="chip">Machine Learning Engineer: Alex Choi</span>
          <span className="chip">Machine Learning Engineer: Arnav Chopra</span>
          <span className="chip">Machine Learning Engineer: Ashi Sharma</span>
          <span className="chip">Machine Learning Engineer: Karol Tang</span>
        </div>
      </div>

      <div className="section tech-stack">
        <h2 className="text-center">Our Technology Stack</h2>
        <div className="tech-scroll">
          <div className="tech-card">
            <img src={require('../../../assets/tech_stack_images/python.png')} alt="Python Icon" />
            <h3>Python</h3>
            <p>Core language for data processing and ML algorithms.</p>
          </div>
          <div className="tech-card">
            <img src={require('../../../assets/tech_stack_images/machine-learning.png')} alt="Machine Learning Icon" />
            <h3>Machine Learning</h3>
            <p>Scikit-Learn used for recommendation algorithms.</p>
          </div>
          <div className="tech-card">
            <img src={require('../../../assets/tech_stack_images/aws.png')} alt="AWS Icon" />
            <h3>AWS</h3>
            <p>Cloud infrastructure for scalability and deployment.</p>
          </div>
          <div className="tech-card">
            <img src={require('../../../assets/tech_stack_images/react.png')} alt="React Icon" />
            <h3>React.js</h3>
            <p>Framework for building the user interface.</p>
          </div>
          <div className="tech-card">
            <img src={require('../../../assets/tech_stack_images/docker.png')} alt="Docker Icon" />
            <h3>Docker</h3>
            <p>Containerization platform for consistent environments.</p>
          </div>
          <div className="tech-card">
            <img src={require('../../../assets/tech_stack_images/colab.png')} alt="Google Colab Icon" />
            <h3>Google Colab</h3>
            <p>Cloud-based Jupyter notebook environment for Python.</p>
          </div>
        </div>
      </div>

      <div className="image-gallery">
        <div className="header">
          <h1>Project Gallery</h1>
          <hr />
        </div>

        <div className="row"> 
          <div className="column">
            <img src={require('../../../assets/project_images/job_sense.png')} alt="JobSense Logo" />
          </div>
          <div className="column">
            <img src={require('../../../assets/project_images/job_sense.png')} alt="JobSense Logo" />
          </div>  
        </div>
      </div>
    </>
  );
}

export default JobSense;
