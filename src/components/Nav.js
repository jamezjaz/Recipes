import React from 'react';
import { Link } from 'react-router-dom';
import NavStyles from '../styles/Nav.module.css';
import logo from '../assets/logo.png';

const Nav = () => (
  <nav className={NavStyles.nav}>
    <h2
      className="my-logo"
      style={{ color: 'white' }}
    >
      <img src={logo} alt={logo} />
      Catalogue Of Recipes
    </h2>
    <ul className={NavStyles.navLinks}>
      <Link
        style={{
          color: 'white',
          fontSize: '20px',
          fontWeight: 'bold',
          margin: '0 10px 0 0',
        }}
        to="/"
      >
        <li>Recipes</li>
      </Link>
      <Link
        style={{
          color: 'white',
          fontSize: '20px',
          fontWeight: 'bold',
          margin: '0 0 0 10px',
        }}
        to="/about"
      >
        <li>About Us</li>
      </Link>
    </ul>
  </nav>
);

export default Nav;
