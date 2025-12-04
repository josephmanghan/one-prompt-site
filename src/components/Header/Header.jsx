import React from 'react';
import { Link } from 'react-router-dom';
import JMLogo from '../../assets/jm_logo.webp';
import './header.css';

const Header = () => (
  <div className="header">
    <div className="header__content">
      <div className="header__text">
        <h1 className="header__title">Dr Joseph Manghan</h1>
        <p className="header__blog-text">
          This site was created in one prompt with Cursor.
          <span className="header__blog-link">
            <Link className="link" to="/blog">
              Read more
            </Link>
            .
          </span>
        </p>
      </div>
      <img src={JMLogo} alt="Profile" className="header__image" />
    </div>
  </div>
);

export default Header;
