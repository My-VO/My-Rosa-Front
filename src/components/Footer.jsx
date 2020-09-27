import React from 'react';

import { Link } from 'react-router-dom';

import { ReactComponent as FacebookIcon } from '../assets/images/icons/facebook.svg';
import { ReactComponent as TwitterIcon } from '../assets/images/icons/twitter.svg';
import { ReactComponent as InstagramIcon } from '../assets/images/icons/instagram.svg';
import { ReactComponent as PinterestIcon } from '../assets/images/icons/pinterest.svg';

function Footer() {
  return (
    <>
      <footer className="footer">
        <p>
          <span>03 45 67 89 12</span>
          <span>•</span>
          <Link to="/">
            <span>MY ROSA</span>
          </Link>
          <span>•</span>
          <a href="https://www.facebook.com/">
            <span>
              <FacebookIcon className="footer__reseaux-sociaux" />
            </span>
          </a>
          <a href="https://twitter.com/">
            <span>
              <TwitterIcon className="footer__reseaux-sociaux" />
            </span>
          </a>
          <a href="https://www.instagram.com/">
            <span>
              <InstagramIcon className="footer__reseaux-sociaux" />
            </span>
          </a>
          <a href="https://www.pinterest.fr/">
            <span>
              <PinterestIcon className="footer__reseaux-sociaux" />
            </span>
          </a>
        </p>
      </footer>
    </>
  );
}

export default Footer;
