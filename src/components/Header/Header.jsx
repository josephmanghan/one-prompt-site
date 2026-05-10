import React from 'react';
import JMLogo from '../../assets/jm_logo.webp';
import './header.css';

const Header = () => (
  <div className="header">
    <div className="header__content">
      <div className="header__text">
        <h1 className="header__title">Dr Joseph Manghan</h1>
      </div>
      <img
        src={JMLogo}
        alt="Dr Joseph Manghan professional logo"
        width="1198"
        height="1198"
        className="header__image"
      />
    </div>
  </div>
);

export default Header;
