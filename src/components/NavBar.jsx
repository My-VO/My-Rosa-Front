import React from 'react';

import { Link } from 'react-router-dom';

import SearchIcon from '@material-ui/icons/Search';
import logo from '../assets/favicon/logo.png';

function NavBar() {
  return (
    <nav className="nav">
      <Link to="/">
        <div className="nav__brand">
          <img src={logo} className="nav__brand__logo" alt="logo" />
          <p className="nav__brand__name">My Rosa</p>
        </div>
      </Link>
      {/* 3 links */}
      {/* search box */}
      <form className="nav__search-bar" role="search">
        <input
          className="nav__search-bar__input"
          type="search"
          name="q"
          placeholder="Rechercher"
          aria-label="Rechercher parmi le contenu du site"
        />
        <button className="nav__search-bar__button" type="submit">
          <SearchIcon className="nav__search-bar__button__icon" />
        </button>
      </form>
      {/* 2 links */}
      {/* Panier avec numero */}
    </nav>
  );
}

export default NavBar;
