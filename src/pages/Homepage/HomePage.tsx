import React from 'react';
import Home from "../../components/Home/Home"

const HomePage: React.FC = () => {
    return (
        <div className="homeContainer">
            <header className="header">
                <img className="logo" alt="mon logo" />
                <nav className="nav">
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>
            <main className="mainContainer">
                <Home />
                <h2>Developer</h2>
            </main>
        </div>
    );
}

export default HomePage;
    