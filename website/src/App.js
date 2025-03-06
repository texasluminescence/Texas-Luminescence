import './App.css';
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/NavBar';
import Home from "./Pages/Home/home";
import Accordion from "./Pages/FAQ/faq";
import NotFound from "./Pages/NotFound/notfound";
import ProjectCards from './Pages/Projects/ProjectsPage/projects';
import RecruitmentPage from './Pages/Recruitment/recruitment';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="faq" element={<Accordion />} />
        <Route path="projects" element={<ProjectCards />} />
        <Route path="recruitment" element={<RecruitmentPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
