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
      <Link to="/">
        <img src={logo} alt={logo} />
      </Link>
      Catalogue Of Recipes
    </h2>
    <ul className={NavStyles.navLinks}>
      <Link className={NavStyles.lists} to="/">
        <li>Recipes</li>
      </Link>
      <Link className={NavStyles.lists} to="/about">
        <li>About Us</li>
      </Link>
    </ul>
  </nav>
);

export default Nav;
