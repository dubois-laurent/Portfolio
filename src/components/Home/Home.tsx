import React, { useState, useEffect } from 'react';
import "./Home-module.css";

const Home: React.FC = () => {
    const titles = ["Front end", "Back end", "Full Stack"];
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <h1>
            <span className="dynamic-title">{titles[currentTitleIndex]}</span>
        </h1>
    );
};

export default Home;