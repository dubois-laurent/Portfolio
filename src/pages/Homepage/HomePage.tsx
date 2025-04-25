import React from 'react';
import Home from "../../components/Home/Home";
import { Link } from 'react-router-dom';
import './Homepage-module.css';
import Logo from '../../components/Logo/Logo';

const HomePage: React.FC = () => {

    return (
        <div className="homeContainer">
            <video
        className="background-video"
        autoPlay
        loop
        muted
        src={'https://cdn.pixabay.com/video/2024/07/24/222962_large.mp4'
        }
      ></video>
            <header className="header">
                <Logo />
                <nav className="nav">
                    <Link to="/projects" className='project'>My Projects</Link>
                    <p>👾</p>
                    <Link to="/contact" className='contact'>Contact me !</Link>
                </nav>
            </header>
            <div className="mainContainer">
                <Home />
            </div>
        </div>
    );
};

export default HomePage;
