import React from 'react';
import headerLogo from '../../images/header__logo.svg';
import headerAccImg from '../../images/header__account-image.svg';
import './Header.css';

function Header () {
    return (
        <header className='header'>
            <div className='header__container'>
                <div className='header__column header__column_content_logo'>
                    <img className='header__logo' src={headerLogo} alt='Логотип страницы' />
                </div>
                <nav className='header__column header__column_content_nav'>
                    <div className='header__nav-container'>
                        <a className='header__nav-link' href='#'>Фильмы</a>
                        <a className='header__nav-link' href='#'>Сохраненные фильмы</a>
                    </div>
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