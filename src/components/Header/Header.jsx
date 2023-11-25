import React, { useState } from 'react';
import headerAccImg from '../../images/header__account-image.svg';
import './Header.css';
import { NavLink, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import menuLogo from '../../images/header__menu-icon.svg';
import menuLogoThemeWhite from '../../images/header__menu-icon_theme_white.svg';
import MenuPopup from '../App/MenuPopup/MenuPopup';

function Header () {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);
    const [isMenuPopupOpen, setIsMenuPopupOpen] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const openMenuPopup = () => {
        setIsMenuPopupOpen(true);
    };

    const closeMenuPopup = () => {
        setIsMenuPopupOpen(false);
    };

    const toggleUserLoggedIn = () => {
        setIsUserLoggedIn(!isUserLoggedIn);
    };

    return (
        <header className={`header ${isHomePage ? '' : 'header__theme_white'}`}>
            <div className='header__container'>
                <div className='header__column header__column_content_logo'>
                    <Logo />
                </div>
                {isUserLoggedIn && (
                    <nav className='header__column header__column_content_nav'>
                        <Navigation />
                    </nav>
                )}
                {isUserLoggedIn ? (
                    <div className='header__column header__column_content_account'>
                        <button className='header__button-account'>
                            <img
                                className='header__account-img'
                                src={headerAccImg}
                                alt='Изображение профиля'
                                onClick={toggleUserLoggedIn}
                            />
                        </button>
                        <img
                            className='header__menu-icon'
                            src={isHomePage ? menuLogo : menuLogoThemeWhite}
                            alt='Иконка меню'
                            onClick={openMenuPopup}
                        />
                    </div>
                ) : (
                    <div className='header__column header__column_content_auth'>
                        <NavLink to='signin' className='header__signin-link'>
                            <button className='header__auth-button' onClick={toggleUserLoggedIn}>Войти</button>
                        </NavLink>
                        <NavLink to='/signup' className='header__registration-link'>Регистрация</NavLink>
                    </div>
                )}
            </div>
            {isMenuPopupOpen && <MenuPopup onClick={closeMenuPopup} />}
        </header>
    );
}

export default Header;