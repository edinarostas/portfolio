import React, { useState } from 'react';
import './Header.scss';
import Logo from '../../assets/logos/circle_logo_black.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img src={Logo} alt="Edina Hollo Logo" />
        <span>Edina Hollo</span>
      </Link>
      <button
        className={`header__menu-toggle ${menuOpen ? 'header__menu-toggle--open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className="header__hamburger"></span>
      </button>
      <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
        <ul className="header__list">
          <li className="header__item"><Link to="/" className="header__link" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li className="header__item"><Link to="/projects" className="header__link" onClick={() => setMenuOpen(false)}>Projects</Link></li>
          <li className="header__item"><Link to="/blog" className="header__link" onClick={() => setMenuOpen(false)}>Blog</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
