import React from 'react';
import headerLogo from '../../images/header__logo.svg';
import headerAccImg from '../../images/header__account-image.svg';
import './Header.css';
import { NavLink, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header () {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <header className={`header ${isHomePage ? '' : 'header__theme_white'}`}>
            <div className='header__container'>
                <div className='header__column header__column_content_logo'>
                    <NavLink to='/' className='header__logo-link'><img className='header__logo' src={headerLogo} alt='Логотип страницы' /></NavLink>
                </div>
                <nav className='header__column header__column_content_nav'>
                    <Navigation />
                </nav>
                <div className='header__column header__column_content_account'>
                    <button className='header__button-account'>
                        <img className='header__account-img' src={headerAccImg} alt='Изображение профиля' />
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;