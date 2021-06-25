import React from 'react';
import './Header.css';
import logo from './img/logo-white.png';
import userIcon from './img/icon-user.png';
import arrowIcon from './img/icon-arrow-down.png';


function Header(props) {
    return (
        <header className='header lateral-padding'>
            <div>
                <img className='header__logo' src={logo} alt='Logo' />
                <span className='header__title text--emphasis'>My Dots</span>
            </div>
            <ul className='header__list text--emphasis'>
                <li className='header__item'>Dashboard</li>
            </ul>
            <div className='header__user'>
                <img className='user__picture' src={userIcon} alt='User'></img>
                <img className='user__arrow' src={arrowIcon} alt='Arrow'></img>
                <p className='user__name text--normal'>User:<br />Mateo Sánchez</p>
            </div>
        </header>
    );
}

export default Header;