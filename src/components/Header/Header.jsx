import React, { useContext, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import headerAccImg from '../../images/header__account-image.svg';
import headerAccImgThemeWhite from '../../images/menu-popup__profile-icon.svg';
import './Header.css';
import { NavLink, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import menuLogo from '../../images/header__menu-icon.svg';
import menuLogoThemeWhite from '../../images/header__menu-icon_theme_white.svg';
import MenuPopup from '../MenuPopup/MenuPopup';

function Header () {
    const { loggedIn } = useContext(CurrentUserContext);
    const [isMenuPopupOpen, setIsMenuPopupOpen] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const openMenuPopup = () => {
        setIsMenuPopupOpen(true);
    };

    const closeMenuPopup = () => {
        setIsMenuPopupOpen(false);
    };

    return (
        <header className={`header ${isHomePage ? '' : 'header__theme_white'}`}>
            <div className='header__container'>
                <div className='header__column header__column_content_logo'>
                    <Logo />
                </div>
                {loggedIn && (
                    <nav className='header__column header__column_content_nav'>
                        <Navigation />
                    </nav>
                )}
                {loggedIn ? (
                    <div className='header__column header__column_content_account'>
                        <NavLink to='/profile' className='header__button-account'>
                            <img
                                className={isHomePage ? 'header__account-img' : 'header___account-img_theme-white'}
                                src={isHomePage? headerAccImg : headerAccImgThemeWhite}
                                alt='Изображение кнопки профиля'
                            />
                        </NavLink>
                        <img
                            className='header__menu-icon'
                            src={isHomePage ? menuLogo : menuLogoThemeWhite}
                            alt='Иконка меню'
                            onClick={openMenuPopup}
                        />
                    </div>
                ) : (
                    <div className='header__column header__column_content_auth'>
                        <NavLink to='/signin' className='header__signin-link'>
                            <button className='header__auth-button'>Войти</button>
                        </NavLink>
                        <NavLink to='/signup' className={isHomePage ? 'header__registration-link' : 'header__registration-link_theme-white'}>Регистрация</NavLink>
                    </div>
                )}
            </div>
            {isMenuPopupOpen && <MenuPopup onClick={closeMenuPopup} />}
        </header>
    );
}

export default Header;