import React from 'react';
import './Footer-module.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Laurent Dubois. All rights reserved.</p>
    </footer>
  );
};

export default Footer;