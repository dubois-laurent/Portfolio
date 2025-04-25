import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import './Projectspage-module.css';

const ProjectsPage: React.FC = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  console.log(hoveredLink);

  return (
    <div className="projects-page">
      <Link to="/Portfolio" className="home">
        <Logo />
      </Link>
      <video
        className="background-video"
        autoPlay
        loop
        muted
        src={
          hoveredLink === 'SCROLLY'
            ? 'https://github.com/dubois-laurent/Portfolio/raw/refs/heads/dev/public/videos/Bg-Scrolly.mp4'
            : hoveredLink === 'Alter'
            ? 'https://github.com/dubois-laurent/Portfolio/raw/refs/heads/dev/public/videos/Bg-Alter.mp4'
            : hoveredLink === 'Helico'
            ? 'https://github.com/dubois-laurent/Portfolio/raw/refs/heads/dev/public/videos/Bg-Php.mp4'
            : 'http://localhost:3000/videos/Bg-Scrolly.mp4'
        }
      ></video>
      <nav className="nav-projects">
                <Link
          to="/SCROLLY"
          className={`project-link ${hoveredLink === 'SCROLLY' ? 'active' : ''}`}
          onMouseEnter={() => {
            setHoveredLink('SCROLLY');
          }}
          onMouseLeave={() => {
            setHoveredLink(null);
          }}
        >
          SCROLLY
        </Link>
        <Link
          to="/Alter"
          className={`project-link ${hoveredLink === 'Alter' ? 'active' : ''}`}
          onMouseEnter={() => setHoveredLink('Alter')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          ALTER
        </Link>
        <Link
          to="/Helico"
          className={`project-link ${hoveredLink === 'Helico' ? 'active' : ''}`}
          onMouseEnter={() => setHoveredLink('Helico')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          HELICO PAT
        </Link>
      </nav>
    </div>
  );
};

export default ProjectsPage;