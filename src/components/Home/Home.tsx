import React, { useState, useEffect } from 'react';
import './Home-module.css';

const Home: React.FC = () => {
  const titles = ["LAURENT DUBOIS","FRONT END", "BACK END", "FULL STACK"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setFade(true);
      }, 500);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1>
      <span className={`dynamic-title ${fade ? 'dynamic-title-enter-active' : 'dynamic-title-exit-active'}`}>
        {titles[currentTitleIndex]}
      </span>
    </h1>
  );
};

export default Home;