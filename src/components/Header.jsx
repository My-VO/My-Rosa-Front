import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import { AuthContext } from './contexts/AuthContext';

import logo from '../assets/images/favicon/logo.png';
import { ReactComponent as CompteIcon } from '../assets/images/icons/compte.svg';
import { ReactComponent as WishlistIcon } from '../assets/images/icons/wishlist.svg';
import { ReactComponent as CartIcon } from '../assets/images/icons/cart.svg';
import { ReactComponent as MenuIcon } from '../assets/images/icons/menu.svg';
import { ReactComponent as SearchIcon } from '../assets/images/icons/search.svg';
import { CartContext } from './contexts/CartContext';

function Header() {
  const { state } = useContext(AuthContext);
  const { itemCount } = useContext(CartContext);

  return (
    <section className="header">
      <div className="header__announcement">
        <div className="header__announcement__container">
          <span>03 45 67 89 12</span>
          <Link to="/help-and-faq">
            <span>AIDE ET FAQ</span>
          </Link>
          <Link to="/catalogue-request">
            <span>DEMANDER UN CATALOGUE</span>
          </Link>
          <form>
            <select id="language" name="language">
              <option value="fr">Français(EUR)</option>
              <option value="en">English(EUR)</option>
            </select>
          </form>
        </div>
      </div>
      <header className="header__masthead">
        <div className="mobile header__masthead__misc">
          <Link className="header__masthead__misc__link">
            <MenuIcon className="header__masthead__misc__link__icon" />
            <span>Menu</span>
          </Link>
          <Link className="header__masthead__misc__link">
            <SearchIcon className="header__masthead__misc__link__icon" />
            <span>Rechercher</span>
          </Link>
        </div>
        <div>
          <Link to="/">
            <div className="header__masthead__brand">
              <img
                src={logo}
                className="header__masthead__brand__logo"
                alt="logo"
              />
              <p className="header__masthead__brand__name">My Rosa</p>
            </div>
          </Link>
        </div>
        <nav className="header__masthead__navbar">
          <Link className="link" to="/items">
            <span>Rosiers</span>
          </Link>
          <Link className="link" to="/advice-and-inspiration">
            <span>
              Conseils et
              <br />
              inspiration
            </span>
          </Link>
          <Link className="link" to="/about-us">
            <span>À propos</span>
          </Link>
        </nav>
        <div className="header__masthead__misc">
          {/* search box */}
          <form className="header__masthead__misc__search-bar" role="search">
            <input
              className="header__masthead__misc__search-bar__input"
              type="search"
              name="q"
              placeholder="Rechercher"
              aria-label="Rechercher parmi le contenu du site"
            />
            <button
              className="header__masthead__misc__search-bar__button"
              type="submit"
            >
              <SearchIcon className="header__masthead__misc__search-bar__button__icon" />
            </button>
          </form>
          <Link
            className="link header__masthead__misc__link"
            to="/account/login"
          >
            <CompteIcon className="header__masthead__misc__link__icon" />
            <span>{!state.user && 'Compte'}</span>
            <span>{state.user && state.user.first_name}</span>
            <span>{state.user && state.user.firstName}</span>
          </Link>
          <Link className="link header__masthead__misc__link" to="/wishlist">
            <WishlistIcon className="header__masthead__misc__link__icon" />
            <span>
              Liste de
              <br />
              souhaites
            </span>
          </Link>
          {/* Panier avec numero */}
          <Link className="link header__masthead__misc__link" to="/cart">
            <div className="link header__masthead__misc__link__cart">
              <CartIcon className="header__masthead__misc__link__icon" />
              <span>{itemCount}</span>
            </div>
            <span>Cart</span>
          </Link>
        </div>
      </header>
    </section>
  );
}

export default Header;
