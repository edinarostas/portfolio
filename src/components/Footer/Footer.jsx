import React from 'react';
import './Footer.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__icons">
        <a href="https://github.com/edinarostas" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/edina-hollo/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="mailto:edina.hollo8@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
      <div className="footer__texts">
      <p className="footer__text">© 2024 Edina Hollo</p>
      <p className="footer__text">All rights reserved.</p>
      </div>
      
    </footer>
  );
};

export default Footer;
