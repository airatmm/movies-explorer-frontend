import './Header.css';
import React from 'react';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <div className="header__content">
                <Link to="/" className="header__logo-link">
                    <img className="header__logo" src={logo} alt="Логотип"/>
                </Link>
            </div>
        </header>
    );
}

export default Header;
