import './App.css';
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/NavBar';
import Home from "./Pages/Home/home";
import Accordion from "./Pages/FAQ/faq";
import NotFound from "./Pages/NotFound/notfound";
import ProjectCards from './Pages/Projects/ProjectsPage/projects';
import RecruitmentPage from './Pages/Recruitment/recruitment';
import Resources from './Pages/Resources/resources';
import Calendar from './Pages/Calendar/calendar';
import JobSense from './Pages/Projects/JobSense/jobsense';
import SmartPlanner from './Pages/Projects/SmartPlanner/smart_planner';
import ComingSoon from './Pages/ComingSoon/coming_soon';

export default function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="faq" element={<Accordion />} />
        <Route path="projects" element={<ProjectCards />} />
        <Route path="recruitment" element={<RecruitmentPage />} />
        <Route path="resources" element={<Resources />} />
        <Route path="job-sense" element={<JobSense />} />
        <Route path="ut-smartplanner" element={<SmartPlanner />} />
        <Route path="coming-soon" element={<ComingSoon />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
