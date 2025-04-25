import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import './Projectspage-module.css';

const ProjectsPage: React.FC = () => {
  return (
    <div>
      <Link to="/Portfolio" className='home'>
        <Logo />
      </Link>
      <nav className="nav-projects">
        <Link to="/Scrolly">SCROLLY</Link>
        <Link to="/Alter">ALTER</Link>
        <Link to="/Helico">HELICO PAT</Link>
      </nav>
    </div>
  );
};

export default ProjectsPage;