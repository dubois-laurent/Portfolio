import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage/HomePage';
import ProjectsPage from './pages/Projectspage/ProjectsPage';
import ContactPage from './pages/Contactpage/ContactPage';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
    </div>
  );
};

export default App;