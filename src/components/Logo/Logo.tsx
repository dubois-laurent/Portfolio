import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Logo.png';
import './Logo-module.css';

const Logo: React.FC = () => {
    return (
        <Link to="/Portfolio" className="logo-container">
            <img className="logo" src={logo} alt="mon logo" />
            <span className="logo-text">Laurent Dubois</span>
        </Link>
    );
};

export default Logo;