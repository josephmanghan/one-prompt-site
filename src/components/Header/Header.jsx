import React from 'react';
import JMLogo from '../../assets/jm_logo.webp';
import './header.css';

const Header = () => (
	<div className="header">
		<div className="header__content">
			<h1 className="header__title">Dr Joseph Manghan</h1>
			<img
				src={JMLogo}
				alt="Profile"
				className="header__image"
			/>
		</div>
	</div>
);

export default Header; 