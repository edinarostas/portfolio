import React, { useState } from 'react';
import './Header.scss';
import Logo from '../../assets/logos/circle_logo_black.svg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <a href="/" className="header__logo">
        <img src={Logo} alt="Edina Hollo Logo" />
        <span>Edina Hollo</span>
      </a>
      <button
        className={`header__menu-toggle ${menuOpen ? 'header__menu-toggle--open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className="header__hamburger"></span>
      </button>
      <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
        <ul className="header__list">
          <li className="header__item"><a href="#about" className="header__link">About</a></li>
          <li className="header__item"><a href="#projects" className="header__link">Projects</a></li>
          <li className="header__item"><a href="#contact" className="header__link">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
