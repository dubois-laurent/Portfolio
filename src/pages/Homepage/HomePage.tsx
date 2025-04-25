import React from 'react';
import Home from "../../components/Home/Home";
import { Link } from 'react-router-dom';
import './Homepage-module.css';
import logo from '../../assets/images/Logo.png';

const HomePage: React.FC = () => {

    return (
        <div className="homeContainer">
            <header className="header">
                <div className="logo-container">
                    <img className="logo" src={logo} alt="mon logo" />
                    <span className="logo-text">Laurent Dubois</span>
                </div>
                <nav className="nav">
                    <Link to="/projects">My Projects</Link>
                    <p>👾</p>
                    <Link to="/contact">Contact me !</Link>
                </nav>
            </header>
            <div className="mainContainer">
                <Home />
            </div>
        </div>
    );
};

export default HomePage;
