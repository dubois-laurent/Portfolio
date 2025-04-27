import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import './Projectspage-module.css';
import Footer from '../../components/Footer/Foooter';

const preloadVideos = (videoUrls: string[]) => {
  videoUrls.forEach((url) => {
    const video = document.createElement('video');
    video.src = url;
    video.preload = 'auto';
  });
};

const ProjectsPage: React.FC = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    preloadVideos([
      'https://github.com/dubois-laurent/Portfolio/raw/refs/heads/dev/public/videos/Bg-Scrolly.mp4',
      'https://github.com/dubois-laurent/Portfolio/raw/refs/heads/dev/public/videos/Bg-Alter.mp4',
      'https://github.com/dubois-laurent/Portfolio/raw/refs/heads/dev/public/videos/Bg-Php.mp4'
    ])
  })

  return (
    <div className="projects-page">
      <Link to="/" className="home">
        <Logo />
      </Link>
      <video
        className="background-video-pageprojects"
        autoPlay
        loop
        muted
        src={'https://cdn.pixabay.com/video/2023/06/29/169334-841069100_large.mp4'
        }
      ></video>
      <video
        className="background-video-projects"
        autoPlay
        loop
        muted
        preload="auto"
        src={
          hoveredLink === 'SCROLLY'
            ? 'https://github.com/dubois-laurent/Portfolio/raw/refs/heads/dev/public/videos/Bg-Scrolly.mp4'
            : hoveredLink === 'Alter'
            ? 'https://github.com/dubois-laurent/Portfolio/raw/refs/heads/dev/public/videos/Bg-Alter.mp4'
            : hoveredLink === 'Helico'
            ? 'https://github.com/dubois-laurent/Portfolio/raw/refs/heads/dev/public/videos/Bg-Php.mp4'
            : ''
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
      <Footer />
    </div>
  );
};

export default ProjectsPage;