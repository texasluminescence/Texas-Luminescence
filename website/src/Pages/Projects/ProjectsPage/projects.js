import React from "react";
import { useNavigate } from "react-router-dom";
import "./projects.css"; 
import "../../../Styles/pages.css"; 

const projects = {
  current: [
    {
      title: "UT SmartPlanner",
      description:
        "UT SmartPlanner uses machine learning to create personalized course schedules, optimizing for degree progress, availability, and preferences.",
      image: "/project_images/blank_image.png",
      route: "/ut-smartplanner",
    },
    {
      title: "Lie Detection using Facial Microexpressions",
      description:
        "This application detects deception in real-time by analyzing facial features and microexpressions using machine learning.",
      image: "/project_images/blank_image.png",
      route: "/lie-detection",
    },
    {
      title: "MediMatch",
      description:
        "MediMatch is a health companion mobile app for symptom assessment, offering tailored illness insights and medication suggestions.",
      image: "/project_images/medimatch.png",
      route: "/medimatch",
    },
    {
      title: "JobSense",
      description:
        "JobSense analyzes and visualizes job market trends to help job seekers and businesses align their skills and hiring strategies.",
      image: "/project_images/job_sense.png",
      route: "/job-market-trend-analyzer",
    },
    {
      title: "CV Revive",
      description:
        "CV Revive is an AI-driven platform that optimizes resumes for higher ATS scores, enhancing candidate-job matching and providing objective feedback for better hiring outcomes.",
      image: "/project_images/cv_revive.png",
      route: "/ai-resume-screener",
    },
    {
      title: "Stock Candlestick Predictor",
      description:
        "A web application using AI to analyze stock price movements and provide predictions based on candlestick patterns.",
      image: "/project_images/blank_image.png",
      route: "/stock-candlestick-predictor",
    },
  ],
  archived: [
    {
      title: "Dermetrics",
      description:
        "A skin disease diagnostic tool featuring a TensorFlow-based machine learning model for classifying skin disorders, integrated backend functionalities, and a designed wireframe for the user interface.",
      image: "/project_images/dermetric.png",
      route: "/dermetrics",
    },
    {
      title: "Journal Buddy",
      description:
        "A diary app with an NLP Assistant that tracks goals from journal entries, summarizes notes, and provides chat support. It includes Goal Buddy, Study Buddy, and Chat Buddy features.",
      image: "/project_images/journal_buddy.png",
      route: "/journal-buddy",
    },
    {
      title: "MusicMate",
      description:
        "A mobile app where students connect based on shared music tastes. Users authenticate with university emails and can view matches' Spotify Song of the Day, recent listens, and similarity scores.",
      image: "/project_images/musicmate.png",
      route: "/musicmate",
    },
    {
      title: "Website",
      description:
        "Building the Texas Luminescence site, featuring a landing page, recruitment info, department pages, FAQs, and a member portal for meeting attendance and internal updates.",
      image: "/project_images/blank_image.png",
      route: "/website",
    },
  ],
};

const ProjectCard = ({ title, description, image, route }) => {
  const navigate = useNavigate();

  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <div className="project-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button onClick={() => navigate(route)} className="project-button">
          Learn More
        </button>
      </div>
    </div>
  );
};

const ProjectsSection = ({ title, projects }) => {
  return (
    <div className="project-section">
      <h2>{title}</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default function ProjectCards() {
  return (
    <div className="project-container">
      <h1 className="page-title">Projects</h1>
      <ProjectsSection title="Current Projects" projects={projects.current} />
      <ProjectsSection title="Archived Projects" projects={projects.archived} />
    </div>
  );
}
